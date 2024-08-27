import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const CreateProduct = () => {
  const [success, setSuccess] = useState(''); // For success message handling

  return (
    <div className="min-h-screen flex flex-col">
      <Header loggedin={true} />

      {success.length > 0 && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-md bg-blue-500">
          <span className="inline-block mt-1 mb-1 text-white">
            {success}
          </span>
        </div>
      )}

      <div className="container px-10 py-20 flex flex-grow">
        {/* Sidebar */}
        <div className="w-[25%] flex h-screen flex-col items-start">
          <div className="flex flex-col">
            <a className="block w-fit mb-2" href="">All Products</a>
            <a className="block w-fit mb-2" href="">Create new product</a>
          </div>
        </div>

        {/* Main Content */}
        <main className="w-3/4 bg-white p-8 shadow ml-4">
          <h2 className="text-xl font-bold mb-4">Create New Product</h2>
          <form
            autoComplete="off"
            action="/products/create"
            method="post"
            encType="multipart/form-data"
          >
            {/* Product Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Product Image</label>
                <input
                  name="image"
                  type="file"
                  className="py-2 px-4 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Product Name"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="price"
                  type="text"
                  placeholder="Product Price"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="discount"
                  type="text"
                  placeholder="Discount Price"
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>

            {/* Panel Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Panel Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="bgcolor"
                  type="text"
                  placeholder="Background Color"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="panelcolor"
                  type="text"
                  placeholder="Panel Color"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="textcolor"
                  type="text"
                  placeholder="Text Color"
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>

            <input
              className="px-5 py-2 rounded mt-3 bg-blue-500 text-white"
              type="submit"
              value="Create New Product"
            />
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CreateProduct;
