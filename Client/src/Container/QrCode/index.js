import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addQrCode, getAllCategory, getAllQrCode } from "../../Actions";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { nanoid } from "nanoid";

const QrCode = () => {
  const qrCode = useSelector((state) => state.qrCode);
  console.log("qrcode : " + qrCode);
  const dispatch = useDispatch();
  const [tableId, setTableId] = useState("");
  const [show, setShow] = useState();

  useEffect(() => {
    dispatch(getAllQrCode());
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    dispatch(addQrCode(tableId));

    setShow(false);
  };

  return (
    <Layout>
      <div className="flex">
        <Button onClick={handleShow}>Generate</Button>
        <Modal show={show} size="md" popup={true} onClose={handleClose}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                ADD Table Id
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="tableId" value="" />
                </div>
                <TextInput
                  key={nanoid()}
                  id="tableId"
                  name="tableId"
                  onChange={(e) => setTableId(e.target.value)}
                  value={tableId}
                  placeholder="Table Id"
                  autoFocus="autoFocus"
                  required={true}
                />
              </div>
              <div className="w-full">
                <Button onClick={handleClose}>Add</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div class="flex flex-wrap justify-center md:justify-start mt-2">
        {qrCode.qrCodes.map((item, index) => (
          <>
            <div className="shadow mt-4 sm:mr-6 w-52">
              <img
                className="w-full "
                src={`data:image/png;base64,${btoa(
                  String.fromCharCode(...new Uint8Array(item.image.data))
                )}`}
              />
              <div className="py-2 px-4">Table Id : {item.tableId}</div>
              <div className="flex">
                <a
                  href={`data:image/png;base64,${btoa(
                    String.fromCharCode(...new Uint8Array(item.image.data))
                  )}`}
                  download
                  className="flex justify-center w-full bg-blue-500 text-white py-1.5 mb-4 mx-4 rounded"
                >
                  Download
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export default QrCode;
