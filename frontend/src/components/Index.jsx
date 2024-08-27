import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const IndexPage = () => {
  const [error, setError] = useState(''); // For error message handling

  return (
    <div>
      <Header loggedin={false} />

      {error.length > 0 && (
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-md bg-red-500">
          <span className="inline-block mt-1 mb-1 text-white">
            {error}
          </span>
        </div>
      )}

      <div className="w-full h-screen flex px-20">
        {/* Registration Form */}
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="w-full px-32">
            <h3 className="text-4xl">Welcome to <span className="text-blue-400 font-semibold">Scatch</span></h3>
            <h4 className="text-2xl mb-5">Create your account</h4>
            <form autoComplete="off" action="/users/register" method="post">
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="text"
                placeholder="Full Name"
                name="fullname"
              />
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
              />
              <input
                className="px-5 rounded-full py-3 mt-2 bg-blue-500 text-white"
                type="submit"
                value="Create My Account"
              />
            </form>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="w-full px-32">
            <h4 className="text-2xl capitalize mb-5">Login to your account</h4>
            <form autoComplete="off" action="/users/login" method="post">
              <input
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
              />
              <input
                className="px-5 block rounded-full py-3 mt-2 bg-blue-500 text-white"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
