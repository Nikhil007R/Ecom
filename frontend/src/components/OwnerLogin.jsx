import React from 'react';
import Header from './Header';
import Footer from './Footer';

const OwnerLogin = () => {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex px-20">
                <div className="w-1/2 flex items-center justify-center h-screen">
                    <div className="w-full px-32">
                        <h4 className="text-2xl capitalize mb-5">Admin Access</h4>
                        <form action="/users/create" method="post">
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
                                className="px-5 rounded-full py-3 mt-2 bg-blue-500 text-white"
                                type="submit"
                                value="Login"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OwnerLogin;
