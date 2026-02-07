import React from 'react'
import Image from 'next/image'
import FounderNote from './founder-note'

export default function whyChooseUs() {
    const whyChooseUs = [
        {
            title: "On-time shipments",
            icon: "/assets/image/whyChoose/one.svg",
            bgImage: "/assets/image/whyChoose/card_bg.svg"
        },
        {
            title: "Competitive Pricing",
            icon: "/assets/image/whyChoose/two.svg",
            bgImage: "/assets/image/whyChoose/card_bg.svg"
        },
        {
            title: "Strong global network",
            icon: "/assets/image/whyChoose/three.svg",
            bgImage: "/assets/image/whyChoose/card_bg.svg"
        },
        {
            title: "24/7 Support",
            icon: "/assets/image/whyChoose/four.svg",
            bgImage: "/assets/image/whyChoose/card_bg.svg"
        }
    ];

    return (
        <section id="whyUs" className="w-full "
            style={{ backgroundImage: "url('/assets/image/whyChoose/why_choose_bg.png')" }} >
            <div className="w-full ">
                <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 xl:px-12 py-6 md:py-8 xl:py-10  space-y-6 sm:space-y-8 lg:space-y-[20px]">
                    {/* Section Header */}
                    <div className="space-y-3 sm:space-y-4 lg:space-y-[8px]">
                        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-lato font-bold leading-tight lg:leading-[32px] text-[#FFFFFF]">
                            Why Choose Us
                        </h2>
                        <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[28px] text-[#FFFFFF] max-w-5xl">
                            We combine global reach with personalized service, offering reliable logistics, transparent pricing, and expert support at every step. Our commitment to quality, speed, and compliance makes us the trusted partner for your import-export needs.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[12px]">
                        {whyChooseUs.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF4D] border border-[#FFFFFF4D] backdrop-blur-[10px] rounded-[20px] p-3 sm:p-5 lg:p-[20px] relative overflow-hidden">
                                {/* Background Image */}
                                <Image
                                    width={500}
                                    height={500}
                                    src={feature.bgImage}
                                    alt=""
                                    className="absolute top-0 right-0 w-[80px] sm:w-[90px] lg:w-[92px] h-[80px] sm:h-[90px] lg:h-[102px] object-cover"
                                />

                                {/* Content */}
                                <div className="relative space-y-2 lg:space-y-[18px]">
                                    <div className="bg-global-8 rounded-[10px] w-[50px] h-[50px] flex items-center justify-center">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={feature.icon}
                                            alt=""
                                            className="w-[40px] sm:w-[50px] lg:w-[52px] h-[40px] sm:h-[50px] lg:h-[52px]"
                                        />
                                    </div>
                                    <h3 className="text-base sm:text-lg lg:text-[20px] font-lato font-bold leading-tight lg:leading-[24px] text-[#FFFFFF]">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='w-full bg-[#FFFFFF80] h-[1px]'>
                        
                    </div>

                    {/* Founder Note */}
                    <FounderNote />
                </div>
            </div>
        </section >
    )
}