import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import {
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  Table,
  TextInput,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addFoodItem } from "../../Actions";

const FoodPage = () => {
  const [show, setShow] = useState();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [foodPictures, setFoodPictures] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [foodItemDetailModal, setFoodItemDetailModal] = useState(false);
  const [foodItemDetails, setFoodItemDetails] = useState(null)

  const product = useSelector((state) => state.food);

  const category = useSelector((state) => state.category);
  //   const [parentCategoryId, setParentCategoryId] = useState('')
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCategory());
  // }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    const form = new FormData();

    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of foodPictures) {
      form.append("productPictures", pic);
    }

    dispatch(addFoodItem(form));

    setShow(false);
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
    }

    return options;
  };

  const handleProductPictures = (e) => {
    // e.preventDefault();

    setFoodPictures([...foodPictures, e.target.files[0]]);
  };

  // console.log(foodPictures);

  const renderFoodItems = () => {
    return (
      <Table striped={true} className="dark:bg-white overflow-x-scroll rounded-md shadow border">
        <Table.Head className="dark:bg-gray-200 text-gray-700">
          <Table.HeadCell className="text-gray-700">Product name</Table.HeadCell>
          <Table.HeadCell className="text-gray-700">Description</Table.HeadCell>
          <Table.HeadCell className="text-gray-700">Category</Table.HeadCell>
          <Table.HeadCell className="text-gray-700">Price</Table.HeadCell>
          <Table.HeadCell className="text-gray-700">Quantity</Table.HeadCell>
          <Table.HeadCell className="text-gray-700">
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y dark:bg-white">
          {product.products.length > 0
            ? product.products.map((product) => (
                <Table.Row
                  onClick={() => showFoodDetailsModal(product)}
                  key={product._id}
                  className="dark:bg-white dark:border-gray-700"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-600 dark:bg-white">
                    {product.name}
                  </Table.Cell>
                  <Table.Cell className="text-gray-600 dark:bg-white">{product.description}</Table.Cell>
                  <Table.Cell className="text-gray-600 dark:bg-white">{product.category?.name}</Table.Cell>
                  <Table.Cell className="text-gray-600 dark:bg-white">₹{product.price}</Table.Cell>
                  <Table.Cell className="text-gray-600 dark:bg-white">{product.quantity}</Table.Cell>
                  <Table.Cell className="text-gray-600 dark:bg-white">
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))
            : null}
        </Table.Body>
      </Table>
    );
  };

  const renderAddFoodItemsModal = () => {
    return (
      <Modal show={show} size="md" popup={true} onClose={handleClose}>
        <Modal.Header className="mt-24" />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              ADD New Food Items
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                key={name}
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter name"
                autoFocus="autoFocus"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <TextInput
                key={description}
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Enter descrition"
                autoFocus="autoFocus"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput
                key={price}
                id="price"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Enter price"
                autoFocus="autoFocus"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="quantity" value="Quantity" />
              </div>
              <TextInput
                key={quantity}
                id="quantity"
                name="quantity"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                placeholder="Enter quantity"
                autoFocus="autoFocus"
                required={true}
              />
            </div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput
                id="file"
                // key={nanoid()}
                name="productPictures"
                onChange={handleProductPictures}
              />
              {foodPictures.length > 0
                ? foodPictures.map((pic, index) => (
                    <div key={index}>{pic.name}</div>
                  ))
                : null}
            </div>
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select your country" />
              </div>
              <Select
                id="countries"
                required={true}
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option>Select category</option>
                {createCategoryList(category.categories).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="w-full">
              <Button onClick={handleClose}>Save Changes</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const handleCloseFoodItemDetailsModal = () => {
    setFoodItemDetailModal(false);
  };

  const showFoodDetailsModal = (product) => {
    setFoodItemDetailModal(true);
    setFoodItemDetails(product);
    console.log(product);
  };

  const renderFoodItemDetailModal = () => {
    
    if(!foodItemDetails){
      return null;
    }

    return (
      <Modal
        size="4xl"
        show={foodItemDetailModal}
        popup={true}
        onClose={handleCloseFoodItemDetailsModal}
      >
        <Modal.Header className="mt-24" />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              ADD New Food Items
            </h3>
            <div>
              <h2>NAME : </h2>
              <p>{foodItemDetails.name}</p>
            </div>
            <div className="w-full">
              <Button onClick={handleCloseFoodItemDetailsModal}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <Layout className="z-0">
      {/* <ul>{renderCategories(category.categories)}</ul> */}
      <div className="flex justify-end">
        <Button className="mb-5 border border-2 border-orange-400 text-orange-600 dark:bg-white" onClick={handleShow}>Add Product</Button>
      </div>
      {renderFoodItems()}

      {renderAddFoodItemsModal()}
      {renderFoodItemDetailModal()}
    </Layout>
  );
};

export default FoodPage;
