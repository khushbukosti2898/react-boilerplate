import {
  faEye,
  faAppleAlt,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../components/common/Button';
import MenuHeader from '../components/layout/MenuHeader';

function Buttons() {
  return (
    <>
      <MenuHeader title="Buttons" />
      <div className="bg-white pt-4">
        <h6>Standard buttons</h6>
        <Button
          color="danger"
          text="danger"
          className="m-0"
          // onClickFunc={() => toastSuccess('Toast')}
        />
        <Button color="primary" text="Primary" className="mx-1" />
        <Button color="secondary" text="secondary" className="mx-1" />
        <Button color="success" text="success" className="mx-1" />
        <Button color="warning" text="warning" className="mx-1" />
        <Button color="info" text="info" className="mx-1" />
        <Button color="light" text="Light" className="mx-1" />
        <Button color="dark" text="Dark" className="mx-1" />
        <Button color="link" text="link" />
      </div>
      <div className="bg-white pt-4">
        <h6>Outline buttons</h6>
        <Button color="outline-danger" text="danger" className="m-0" />
        <Button color="outline-primary" text="Primary" className="mx-1" />
        <Button color="outline-secondary" text="secondary" className="mx-1" />
        <Button color="outline-success" text="success" className="mx-1" />
        <Button color="outline-warning" text="warning" className="mx-1" />
        <Button color="outline-info" text="info" className="mx-1" />
        <Button color="outline-light" text="Light" className="mx-1" />
        <Button color="outline-dark" text="Dark" className="mx-1" />
        <Button color="outline-link" text="link" />
      </div>
      <div className="bg-white pt-4">
        <h6>Size</h6>
        <Button color="primary" text="Primary" className="m-0" size="lg" />
        <Button color="primary" text="Primary" className="mx-1" />
        <Button color="primary" text="Primary" className="mx-1" size="sm" />
      </div>
      <div className="bg-white pt-4">
        <h6>Active disable</h6>
        <Button color="primary" text="Primary" className="m-0" active />
        <Button color="primary" text="Primary" className="mx-1" disabled />
      </div>
      <div className="bg-white pt-4">
        <h6>Border</h6>
        <Button color="primary" text="Primary" className=" m-0 rounded-0" />
        <Button color="primary" text="Primary" className=" mx-1 rounded" />
        <Button
          color="primary"
          text="Primary"
          className=" mx-1 rounded-circle"
        />
        <Button
          color="primary"
          text="Primary"
          className=" mx-1 border-success"
        />
        <Button color="primary" text="Primary" className="mx-1" />
      </div>
      <div className="bg-white pt-4">
        <h6>Button with icon</h6>
        <Button
          color="primary"
          text="Primary"
          className="mx-1"
          icon={<FontAwesomeIcon icon={faEye} size="sm" />}
        />
        <Button
          color="primary"
          text="Primary"
          className="mx-1"
          icon={<FontAwesomeIcon icon={faAddressCard} size="sm" />}
        />
        <Button
          color="primary"
          text="Primary"
          className="mx-1"
          icon={<FontAwesomeIcon icon={faAppleAlt} size="sm" />}
        />
      </div>
    </>
  );
}

export default Buttons;
