import React from 'react';

function Product({ product }) {
    const { name, description, price } = product;
    return (
        <div className="border shadow rounded-md p-4 bg-white">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-600">Price: ${price}</p>
        </div>
    );
}

export default Product;
