import Image from 'next/image'
import React from 'react'

export default function globalPresence() {
    const transportMethods = [
        {
            title: "Land Transport",
            image: "/assets/image/transport/land.png",
            icon: "/assets/image/transport/land.svg"
        },
        {
            title: "Sea Transport",
            image: "/assets/image/transport/ship.png",
            icon: "/assets/image/transport/ship.svg"
        },
        {
            title: "Air Transport",
            image: "/assets/image/transport/plane.png",
            icon: "/assets/image/transport/plane.svg"
        }
    ];
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-6 md:py-8 xl:py-10 bg-[#FFFFFF8C]" >
            <div className="w-full ">
                <div className="space-y-6 sm:space-y-8 lg:space-y-[34px]">
                    {/* Section Header */}
                    <div className="text-center space-y-1 lg:space-y-[4px] pt-4 lg:pt-[16px] max-w-5xl mx-auto">
                        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-lato font-semibold leading-tight lg:leading-[32px] text-global-1">
                            Our Global Presence – Connecting Markets Worldwide
                        </h2>
                        <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[20px] text-[#7B7B7B]">
                            We facilitate trade in 50+ countries. Our global reach and local expertise ensure efficient logistics and customer support for your business.
                        </p>
                    </div>

                    <div className='w-full h-full flex justify-center items-center'>
                        <Image
                            src="/assets/image/global/global_New.png"
                            alt="global"
                            width={500}
                            height={500}
                            className='w-[700px] h-auto object-cover'
                        />
                    </div>

                    {/* Transport Methods */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[26px]">
                        {transportMethods.map((method, index) => (
                            <div key={index} className="relative rounded-[10px] overflow-hidden h-[140px] sm:h-[160px] lg:h-[166px]">
                                <Image
                                    width={500}
                                    height={500}
                                    src={method.image}
                                    alt={method.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0  flex flex-col justify-between p-3 sm:p-4 lg:p-[14px]">
                                    <div className='  bg-[#FFFFFF38] border border-[#FFFFFF4D] flex justify-center items-center rounded-full w-[35px] h-[35px] p-2'>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={method.icon}
                                            alt=""
                                            className="w-6 h-6 "
                                        />
                                    </div>
                                    <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-tight lg:leading-[20px] text-[#FFFFFF] self-end">
                                        {method.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section >

    )
}