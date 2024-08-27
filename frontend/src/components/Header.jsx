import React from 'react';

const Header = ({ loggedin }) => (
  <header className="w-full px-5 py-3 flex justify-between">
    <h3 className="text-xl">Scatch</h3>
    {loggedin && (
      <div className="flex gap-5">
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
        <a href="/account">My Account</a>
        <a className="text-red-600" href="/users/logout">Logout</a>
      </div>
    )}
  </header>
);

export default Header;
