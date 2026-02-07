import Image from 'next/image'
import React from 'react'

export default function services() {

    const services = [
        {
            category: "Export Services",
            items: [
                {
                    title: "Global delivery",
                    description: "We provide fast, secure shipping worldwide through our trusted logistics network, ensuring timely delivery.",
                    icon: "/assets/image/services/global.svg",
                    bgImage: "/assets/image/services/bg-image.svg"
                },
                {
                    title: "Documentation",
                    description: "We manage all export paperwork, ensuring smooth and compliant international trade.",
                    icon: "/assets/image/services/document.svg",
                    bgImage: "/assets/image/services/bg-image.svg"
                },
                {
                    title: "Port handling",
                    description: "We manage port operations, including cargo loading and unloading for efficient goods movement.",
                    icon: "/assets/image/services/Porthandling.svg",
                    bgImage: "/assets/image/services/bg-image.svg"
                }
            ]
        },
        {
            category: "Import Services",
            items: [
                {
                    title: "Sourcing",
                    description: "We connect you with trusted suppliers for quality products at competitive prices.",
                    icon: "/assets/image/services/sourcing.svg",
                    bgImage: "/assets/image/services/bg-image.svg"
                },
                {
                    title: "Quality Check",
                    description: "We conduct inspections and quality checks to ensure your products meet standards before shipment.",
                    icon: "/assets/image/services/check.svg",
                    bgImage: "/assets/image/services/bg-image.svg"
                },
                {
                    title: "Customs Clearance",
                    description: "We manage customs procedures and documentation for timely clearance of your shipments without delays.",
                    icon: "/assets/image/services/custom.svg",
                    bgImage: "/assets/image/services/bg-image.svg"
                }
            ]
        }
    ];
    return (
        <section id="services" className="w-full bg-[#F3F3F3]" >
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 xl:px-12 py-6 md:py-8 xl:py-10">
                <div className="space-y-6 sm:space-y-8 lg:space-y-[22px]">
                    {/* Section Header */}
                    <div className="space-y-2 lg:space-y-[8px]">
                        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-lato font-semibold leading-tight lg:leading-[32px] text-[#000000]">
                            Our Key Services
                        </h2>
                        <p className="text-[#7B7B7B] text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[20px]">
                            At
                            <span className="text-[#121212]"> Marcorp,</span> we provide end-to-end import-export solutions tailored to your business needs. From sourcing to shipping, we ensure seamless international trade.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="space-y-4 md:space-y-6">
                        {services.map((serviceCategory, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-2 lg:space-y-[6px]">
                                <h3 className="text-sm sm:text-base lg:text-[16px] font-lato font-semibold leading-tight lg:leading-[20px] text-[#121212]">
                                    {serviceCategory.category} -
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[12px]">
                                    {serviceCategory.items.map((service, index) => (
                                        <div key={index} className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[20px] relative overflow-hidden ">
                                            {/* Background Image */}
                                            <Image
                                                width={100}
                                                height={100}
                                                src={service.bgImage}
                                                alt=""
                                                className="absolute top-0 right-0 w-[100px] sm:w-[120px] lg:w-[136px] h-[80px] sm:h-[100px] lg:h-[112px] object-cover"
                                            />

                                            {/* Content */}
                                            <div className="relative p-4 sm:p-5 lg:p-[14px] h-full flex flex-col justify-between ">
                                                <div className="bg-[#F9F9F9] rounded-full  w-[50px] h-[50px] flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        src={service.icon}
                                                        alt=""
                                                        className="w-[32px] sm:w-[40px] lg:w-[44px] h-[32px] sm:h-[40px] lg:h-[44px]"
                                                    />
                                                </div>

                                                <div className="space-y-2 lg:space-y-[6px] pt-4">
                                                    <h4 className="text-base sm:text-lg lg:text-[18px] font-lato font-normal leading-tight lg:leading-[22px] text-[#000000]">
                                                        {service.title}
                                                    </h4>
                                                    <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[24px] text-[#717171]">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}