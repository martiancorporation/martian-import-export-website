import Image from 'next/image';
import React from 'react'

export default function certification() {
    const certifications = [
        { name: "International E-commerce", logo: "/assets/image/certification/iec.png" },
        { name: "Ministry of MSME", logo: "/assets/image/certification/msme.png" },
        { name: "Government Certification", logo: "/assets/image/certification/apeda.png" },
        { name: "ISO 9001:2015", logo: "/assets/image/certification/iso.png" }
    ];
    return (
        <section id="facilities" className="w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/image/certification/bg.png')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#000000BF] z-10"></div>
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 xl:px-12 py-6 md:py-8 xl:py-10 z-20">
                <div className="space-y-6 sm:space-y-8 lg:space-y-[26px] text-center">
                    {/* Section Header */}
                    <div className="space-y-1 lg:space-y-[2px]  z-20 text-center relative">
                        <h2 className="text-xl sm:text-2xl z-30 lg:text-[28px] font-lato font-semibold leading-tight lg:leading-[34px] text-[#FFFFFF]">
                            Certifications & Compliance
                        </h2>
                        <p className="text-sm sm:text-base z-20 lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[20px] text-[#FFFFFF]">
                            We are registered and compliant with all major trade bodies
                        </p>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[16px] max-w-4xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-[#FFFFFF42] z-20 border backdrop-blur-[10px] border-[#FFFFFF66] rounded-[20px] p-3 sm:p-5 lg:p-[18px] flex items-center justify-center min-h-[80px] sm:min-h-[120px] lg:min-h-[120px]">
                                <Image
                                    width={500}
                                    height={500}
                                    src={cert.logo}
                                    alt={cert.name}
                                    className="max-w-full max-h-[60px] sm:max-h-[70px] lg:max-h-[80px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}