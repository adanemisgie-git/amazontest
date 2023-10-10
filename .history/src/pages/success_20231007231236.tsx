import { resetCart } from '@/store/nextSlice';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col gap-2 items-center justify-center py-20'>
            <h1 className='text'>Thank you for Shopping in new-amazon</h1>
            <Link href={'/'} onClick={()=>dispatch(resetCart())}> <p>Continue Shopping</p> </Link>
        </div>
    );
};

export default SuccessPage;