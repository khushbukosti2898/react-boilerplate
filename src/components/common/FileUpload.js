/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Label } from 'reactstrap';

const FileUpload = ({
  label,
  name,
  isRequired,
  error,
  multiple,
  maxFiles,
  onChange,
  accept,
  maxSize,
  showIconPreview,
  helperText,
  validationHandler,
}) => {
  const [files, setFiles] = useState([]);
  const onValidationChange = (value) => {
    let errorMessage = '';
    if (value.length === 0 && isRequired) {
      errorMessage = `Please select ${name}.`;
    }
    validationHandler(name, errorMessage);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: multiple ? maxFiles : 0,
    accept,
    minSize: 0,
    maxSize,
    multiple,
    onDrop: (acceptedFiles) => {
      onValidationChange(name, acceptedFiles);
      onChange(name, acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );
  const thumbs = files.map((file) => {
    return (
      <div className="file-preview" key={file.name}>
        {file.name.match(/\.(jpg|jpeg|png|gif)$/) ||
        file.preview.match(/\.(jpg|jpeg|png|gif)$/) ? (
          <img src={file.preview} className="file-img" alt={file.name} />
        ) : (
          <span className="mt-2">{`${file.name}`}</span>
        )}
      </div>
    );
  });

  return (
    <section className="file-input mt-2">
      {label && (
        <Label htmlFor={name}>
          {label}
          {isRequired && <span style={{ color: 'red' }}> * </span>}
          {maxFiles && (
            <span className="ml-2 text-secondory fs-12">
              {`(Maximum ${maxFiles} files allowed)`}
            </span>
          )}
        </Label>
      )}
      {helperText && <div className="fs-12">{helperText}</div>}
      <div
        {...getRootProps({
          className: 'dropzone w-100 fs-20 d-flex align-items-center',
        })}
      >
        <input
          {...getInputProps({
            invalid: { error },
          })}
        />
        <FontAwesomeIcon
          icon={faCloudUploadAlt}
          size="sm"
          className="mx-1"
          title="Upload"
        />
        {isDragActive ? (
          <span className="fs-16">Drop the files here ... </span>
        ) : (
          <span className="fs-16">Select files </span>
        )}
      </div>
      <div className={!showIconPreview ? 'not-show-iconpreview' : ''}>
        {files && <aside className="thumbs-container">{thumbs}</aside>}
        {error && <p className="text-danger fs-12">{error}</p>}
      </div>
    </section>
  );
};

FileUpload.defaultProps = {
  name: 'fileUpload',
  label: '',
  isRequired: false,
  error: '',
  accept: 'image/*',
  multiple: false,
  maxFiles: 1,
  maxSize: 2000000,
  showIconPreview: true,
  helperText: '',
  validationHandler: () => {},
};

FileUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  multiple: PropTypes.bool,
  maxFiles: PropTypes.number,
  error: PropTypes.string,
  accept: PropTypes.string,
  maxSize: PropTypes.number,
  showIconPreview: PropTypes.bool,
  helperText: PropTypes.string,
  validationHandler: PropTypes.func,
};

export default FileUpload;
