import React from 'react'

const Table = () => {
  return (
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
<header className='text-center'>
<h1 className='font-bold text-2xl text-gray-700 my-2'>Kitchen Food List</h1>
</header>
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="p-4">
                <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-all-search" class="sr-only">checkbox hghfhf</label>
                </div>
            </th>
            <th scope="col" class="px-6 py-3">
                Product name
            </th>
            <th scope="col" class="px-6 py-3">
                Color
            </th>
            <th scope="col" class="px-6 py-3">
                Category
            </th>
            <th scope="col" class="px-6 py-3">
                Accesories
            </th>
            <th scope="col" class="px-6 py-3">
                Available
            </th>
            <th scope="col" class="px-6 py-3">
                Price
            </th>
            <th scope="col" class="px-6 py-3">
                Weight
            </th>
            <th scope="col" class="px-6 py-3">
                Order Action
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
                Silver
            </td>
            <td class="px-6 py-4">
                Laptop
            </td>
            <td class="px-6 py-4">
                Yes
            </td>
            <td class="px-6 py-4">
                Yes
            </td>
            <td class="px-6 py-4">
                $2999
            </td>
            <td class="px-6 py-4">
                3.0 lb.
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
            <a href="#" class="font-medium  bg-red-600 p-2 text-white rounded-md no-underline "  >Cancel</a>
                <a href="#" class="font-medium text-blue-600 text-white bg-green-600 p-2  text-white rounded-md no-underline">Deliver</a>
            </td>
        </tr>

        

    </tbody>
</table>
</div>

  )
}

export default Table