import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Admin = () => {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex items-start px-20 py-20">
                <div className="w-[25%] flex h-screen flex-col items-start">
                    <div className="flex flex-col">
                        <a className="block w-fit mb-2" href="#">All Products</a>
                        <a className="block w-fit mb-2" href="#">Create new product</a>
                    </div>
                </div>
                <div className="w-[75%] flex flex-col gap-5 h-screen">
                    <a className="text-red-500" href="#">Delete all</a>
                    <div className="flex items-start gap-5">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-60 bg-red-500">
                                <div className="w-full h-52 bg-yellow-500"></div>
                                <div className="flex justify-between items-center px-4 py-4">
                                    <div>
                                        <h3>Clinge Bag</h3>
                                        <h4>₹ 1200</h4>
                                    </div>
                                    <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white" href="#">
                                        <i className="ri-add-line"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-start gap-5">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-60 bg-red-500">
                                <div className="w-full h-52 bg-yellow-500"></div>
                                <div className="flex justify-between items-center px-4 py-4">
                                    <div>
                                        <h3>Clinge Bag</h3>
                                        <h4>₹ 1200</h4>
                                    </div>
                                    <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white" href="#">
                                        <i className="ri-add-line"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
