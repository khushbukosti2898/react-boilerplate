import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../components/common/Button';
import {
  toastDark,
  toastError,
  toastInfo,
  toastSuccess,
} from '../components/common/Toast';
import MenuHeader from '../components/layout/MenuHeader';

function Toast() {
  return (
    <>
      <MenuHeader title="Toast" />
      <div className="bg-white pt-4">
        Different types of Toast
        <br />
        <Button
          color="primary"
          text="Click to see different types of toast"
          onClickFunc={() => {
            toastSuccess('Toast Success');
            toastError('Toast Error');
            toastInfo('Toast Info');
            toastDark('Hey 👋, see how easy!');
            toastSuccess(
              <>
                <FontAwesomeIcon icon={faAddressCard} size="1x" />
                <span className="mx-2">success with icon</span>
              </>,
            );
          }}
        />
      </div>
    </>
  );
}

export default Toast;
