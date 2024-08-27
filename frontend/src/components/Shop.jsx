import React from 'react';
import Header from './Header'; // Adjust the path as needed
import Footer from './Footer'; // Adjust the path as needed

const Shop = ({ success, products }) => {
    return (
        <>
            <Header />

            {success.length > 0 && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md bg-blue-500">
                    <span className="inline-block mt-1 mb-1 text-white">{success}</span>
                </div>
            )}

            <div className="w-full h-screen flex items-start px-20 py-20">
                <div className="w-[25%] flex h-screen flex-col items-start">
                    <div className="flex items-center gap-2">
                        <h3>Sort by</h3>
                        <form action="/shop">
                            <select className="border-[1px] px-2 py-1" name="sortby">
                                <option value="popular">Popular</option>
                                <option value="newest">Newest</option>
                            </select>
                        </form>
                    </div>
                    <div className="flex flex-col mt-20">
                        <a className="block w-fit mb-2" href="">New Collection</a>
                        <a className="block w-fit mb-2" href="">All Products</a>
                        <a className="block w-fit mb-2" href="">Discounted Products</a>
                    </div>
                    <div className="mt-32">
                        <a className="block w-fit mb-2" href="">Filter by :</a>
                        <a className="block w-fit mb-2" href="">Availability</a>
                        <a className="block w-fit mb-2" href="">Discount</a>
                    </div>
                </div>
                <div className="w-[75%] flex flex-col gap-5 h-screen">
                    <div className="flex items-start gap-5 flex-wrap">
                        {products.map((product) => (
                            <div className="w-60" key={product._id}>
                                <div className="w-full h-52 flex items-center justify-center bg-[${product.bgcolor}]">
                                    <img
                                        className="h-[12rem]"
                                        src={`data:image/jpeg;base64,${product.image.toString('base64')}`}
                                        alt={product.name}
                                    />
                                </div>
                                <div
                                    className="flex justify-between bg-[${product.panelcolor}] items-center px-4 py-4 text-[${product.textcolor}]"
                                >
                                    <div>
                                        <h3>{product.name}</h3>
                                        <h4>₹ {product.price}</h4>
                                    </div>
                                    <a
                                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white"
                                        href={`/addtocart/${product._id}`}
                                    >
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

export default Shop;
