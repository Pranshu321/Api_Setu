import Link from 'next/link'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const ServiceCards = ({head , content , icon}) => {
    return (
        <>
            <div className='w-full flex flex-col rounded-xl'>
                <Link
                    className="relative lg:w-72 hover:bg-[#FF8300] block rounded-xl border border-gray-100 p-6 shadow-xl"
                    href=""
                >

                    <div className="text-gray-500 flex gap-5 flex-row items-center">
                        <div className='gradient p-3 rounded-full'>
                            {icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#35404e]">{head}</h3>
                    </div>
                    <div>
                        <p className="mt-5 text-[#5f6368] text-base sm:block text-left">
                            {content}
                        </p>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default ServiceCards