
import Image from 'next/image'
import Right from '../icons/right';

import Link from 'next/link';

export default function Hero(){
    return(
        <section className="hero">
            <div className='py-12'>
                <h1 className="text-4xl font-semibold leading-normal"><span className='text-primary'>Cake</span> 
                <br>
                </br>to make your day</h1>
                <p className="my-6 text-gray-500">
                    Lorem Ipsum
                </p>
                <div className='flex gap-4'>
                    <Link href={'/menu'} className='bg-primary uppercase flex  gap-5 text-white px-10 py-2 rounded-full'>
                        order now
                        <Right/>                        
                        </Link>
                </div>
            </div>
            
            <div className='relative'>
                <image src="public\cake1.png"></image>
            </div>
        </section>
    );
}