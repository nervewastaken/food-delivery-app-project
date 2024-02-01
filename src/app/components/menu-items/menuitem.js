'use client';
import React from 'react';


export default function MenuItem1(){
    return(
        
        
        <div className="flex space-x-4">
                    <div className="bg-gray-200 p-4 rounded-lg text-center  hover:bg-white">
                        <img src="cake3.jpg" alt="cake"/>
                        <h4 className="font-bold my-2 text">Mixed Fruit Cake</h4>
                        <p className="text-gray-500 text-sm py-3">
                            lorem ipsum
                        </p>
                        <button  className="bg-primary text-white rounded-full px-6 py-2">Add to cart ₹700</button>
                    </div>

        </div>
    );
}