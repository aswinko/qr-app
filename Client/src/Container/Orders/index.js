import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../Actions/order.actions'

const Orders = () => {
  const order = useSelector((state) => state.order)
  const dispatch = useDispatch()
  const [type, setType] = useState('')

  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    }

    dispatch(updateOrder(payload))
  }

  return (
    <Layout>
      {order.orders.map((orderItem, index) => (
        <div key={index} className="flex flex-col mx-12 mb-12 border shadow-md rounded p-6">
          <div className="flex justify-between">
            <div className="ml-6">
              <h2 className="text-xl text-gray-600 font-normal mb-2">Items</h2>
              <div className="mb-1 text-sm text-gray-600 ml-4" >
                <ul className="list-disc">
                  {orderItem.items.map((item, index) => (
                    <li key={index}>{item.productId.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ml-20">
              <h2 className="text-xl text-gray-600 font-normal mb-2">Table No</h2>
              <div className="mb-1 text-sm text-gray-600 text-md">
                {orderItem.tableId}
              </div>
            </div>
            <div className="ml-24">
              <h2 className="text-xl text-gray-600 font-normal mb-2">Total Price</h2>
              <div className="mb-1 text-sm text-gray-600 text-md">
                Rs {orderItem.totalAmount}
              </div>
            </div>
            <div className="ml-24">
              <h2 className="text-xl text-gray-600 font-normal mb-2">Payment type</h2>
              <div className="mb-1 text-sm text-gray-600 text-md">
                {orderItem.paymentType}
              </div>
            </div>
            <div className="ml-24">
              <h2 className="text-xl text-gray-600 font-normal mb-2">Payment status</h2>
              <div className="mb-1 text-sm text-gray-600 text-md">
                {orderItem.paymentStatus}
              </div>
            </div>
          </div>
          <ol className="items- m-6 sm:flex">
            {orderItem.orderStatus.map((status, index) => (
            <li className={`relative mb-6 sm:mb-0 ${index === status.length - 1 ? "last:hidden" : ""}`}>
              <div className="mb-4">{status.type}</div>
              <div className="flex items-center">
                <div className={`z-10 flex items-center justify-center w-6 h-6 ${status.isCompleted ? "bg-green-500" : 'bg-gray-400'} rounded-full ring-0 ring-white sm:ring-8 shrink-0`}></div>
                {/* <div className={`hidden sm:flex w-60 h-1 ${status.isCompleted ? "bg-green-500" : 'bg-gray-600'} `} ></div> */}
                {index < 2 && <div className={`hidden sm:flex w-60 h-1 ${status.isCompleted ? "bg-green-500" : 'bg-gray-400'} `}></div>}
              </div>
              <div className="mt-3 sm:pr-8">
                {/* <h3 className="text-lg font-semibold text-gray-900">
                  Flowbite Library v1.0.0
                </h3> */}
                {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  December 2, 2021
                </time> */}
                {/* <p className="text-base font-normal text-gray-500">
                  Get started with dozens of web components and interactive
                  elements.
                </p> */}
              </div>
            </li>

            ))}
            {/* <li className="relative mb-6 sm:mb-0">
              <div className="mb-4">Preparing</div>
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div className="hidden sm:flex w-60 bg-green-500 h-1 "></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  December 23, 2021
                </time>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="mb-4">Delivered</div>
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  January 5, 2022
                </time>
              </div>
            </li> */}
            <li className="relative mb-6 sm:mb-0 ml-32">
              <select
                name=""
                id=""
                className=""
                onChange={(e) => setType(e.target.value)}
              >
                <option value={''}>select</option>
                {orderItem.orderStatus.map((status) => {
                  return (
                    <>
                      {!status.isCompleted ? (
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                      ) : null}
                    </>
                  )
                })}
              </select>
              <div className="mt-6">
                <button
                  onClick={() => onOrderUpdate(orderItem._id)}
                  className="px-3 rounded py-1 text-white bg-orange-600"
                >
                  Confirm
                </button>
              </div>
            </li>
          </ol>
        </div>
      ))}

      {/* <div className="p-4 mt-4">
        <h1 className="text-4xl text-center font-semibold mb-6">
          Package status
        </h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">Food Ordered</h3>
                <p className="leading-tight text-justify w-full">
                  21 July 2021, 04:30 PM
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">Preparing</h3>
                <p className="leading-tight text-justify">
                  22 July 2021, 01:00 PM
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                  <i className="fas fa-exclamation-circle text-gray-400"></i>
                </div>
              </div>
              <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-gray-400">
                  Delivered
                </h3>
                <p className="leading-tight text-justify"></p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default Orders
