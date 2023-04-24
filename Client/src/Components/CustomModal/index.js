import {
    Button,
    FileInput,
    Label,
    Modal,
    Select,
    Table,
    TextInput,
  } from "flowbite-react";
import React from "react";

const CustomModal = (props) => {
  return (
    <Modal show={props.show} size="md" popup={true} onClose={props.handleClose}>
      <Modal.Header className="mt-24" />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {props.heading}
          </h3>
          {props.childern}
          <div className="w-full">
            <Button onClick={props.handleClose}>Save Changes</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
