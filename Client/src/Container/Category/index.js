import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory } from '../../Actions'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { nanoid } from 'nanoid'

const Category = () => {
  const category = useSelector((state) => state.category)
  console.log(category);
  const [show, setShow] = useState()
  const [categoryName, setCategoryName] = useState('')
  //   const [parentCategoryId, setParentCategoryId] = useState('')
  const dispatch = useDispatch()
  
  const renderCategories = (categories) => {
    let myCategories = []
    for (let category of categories) {
      myCategories.push(<li key={category.name}>{category.name}</li>)
    }

    return myCategories
  }

  const handleShow = () => setShow(true);
  const handleClose = () => {

    dispatch(addCategory(categoryName));


    setShow(false);
  }

  return (
    <Layout>
      <div className="">
        <h2 className="text-4xl mb-6">Categories</h2>
        <ul className='list-disc'>{renderCategories(category.categories)}</ul>

        <Button onClick={handleShow}>Add</Button>
        <Modal show={show} size="md" popup={true} onClose={handleClose}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                ADD New Category
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="categoryName" value="" />
                </div>
                <TextInput
                  key={nanoid()}
                  id="categoryName"
                  name="categoryName"
                  onChange={(e) => setCategoryName(e.target.value)}
                  value={categoryName}
                  placeholder="Eg: Rice and Noodles"
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
    </Layout>
  )
}

export default Category
