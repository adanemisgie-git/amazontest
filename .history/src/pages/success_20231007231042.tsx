import Link from 'next/link';
import React from 'react'

const SuccessPage = () => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center py-20'>
            <h1>Thank you for Shopping in new-amazon</h1>
            <Link href={'/'}> <p>Continue Shopping</p> </Link>
        </div>
    );
};

export default SuccessPage;