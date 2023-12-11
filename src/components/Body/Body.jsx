import React from 'react';
import SelectLang from '../Footer/SelectLang';

const Body = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex w-[160px] text-center flex-col items-start justify-center rounded-l-full space-y-10">
                    <p className="mb-1 md:ml-20 w-20 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                        <a className='text-blue-500 hover:underline' href="#">England</a>
                        <p>383 000+</p>
                    </p>
                    <p className="mb-1 md:ml-10 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                        <a className='text-blue-500 hover:underline' href="#">россия</a>
                        <p>756 000+</p>
                    </p>
                    <p className="mb-1 md;ml-4 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                        <a className='text-blue-500 hover:underline' href="#">España</a>
                        <p>717 000+</p>
                    </p>
                    <p className="mb-1 md:ml-10 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                        <a className='text-blue-500 hover:underline' href="#">中国</a>
                        <p>231 000+</p>
                    </p>
                    <p className="mb-1 md:ml-20 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                        <a className='text-blue-500 hover:underline' href="#">Polska</a>
                        <p>490 000+</p>
                    </p>
                </div>


                <div className="relative rounded-full sm:hidden md:block overflow-hidden w-[300px] h-[300px]">
                    <img src="https://lyfeindex.com/wp-content/themes/main_website/circle-logo.png" alt="" className="object-cover rounded-full w-full h-full border-2" />
                </div>

                <div className="flex flex-col items-start justify-center">
                    <div className="flex w-[160px] text-center flex-col items-start justify-center rounded-r-full space-y-10">
                        <p className="mb-1 md:ml-0 w-20 group hover:cursor-pointer hover:bg-[#ebebeba8]">
                            <a className='text-blue-500 hover:underline' href="#">England</a>
                            <p>383 000+</p>
                        </p>
                        <p className="mb-1 md:ml-10 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                            <a className='text-blue-500 hover:underline' href="#">россия</a>
                            <p>756 000+</p>
                        </p>
                        <p className="mb-1 md:ml-20 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                            <a className='text-blue-500 hover:underline' href="#">España</a>
                            <p>717 000+</p>
                        </p>
                        <p className="mb-1 md:ml-10 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                            <a className='text-blue-500 hover:underline' href="#">中国</a>
                            <p>231 000+</p>
                        </p>
                        <p className="mb-1 md:ml-0 group hover:cursor-pointer  hover:bg-[#ebebeba8]">
                            <a className='text-blue-500 hover:underline' href="#">Polska</a>
                            <p>490 000+</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center mt-8'>
                <div className='flex justify-between items-center w-[400px] border-2 border-blue-600 py-4 px-3'>
                    <p className='text-sm text-center text-blue-600'>Read LyfeIndex in your language</p>
                    <SelectLang></SelectLang>
                </div>
            </div>
        </div>
    );
};

export default Body;