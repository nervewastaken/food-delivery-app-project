'use client';
import Link from 'next/link';
import React from 'react';


export default function MenuItem1(){
    return(
        
        
        <div className="flex space-x-4">
                    <div className="bg-gray-200 p-4 rounded-lg text-center  hover:bg-white">
                        <img src="cake3.jpg" alt="cake"/>
                        <h4 className="font-bold my-2 text">Chocolate Cake</h4>
                        <p className="text-gray-500 text-sm py-4">
                            Enjoy fresh fruits with your favorite cake!
                        </p>
                        <Link href={'/contact'} className="bg-primary text-white rounded-full px-6 py-2">Order Now!</Link>
                    </div>

        </div>
    );
}