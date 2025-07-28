import Image from 'next/image'
import React from 'react'

export default function aboutUs() {
  return (
        <section className = "py-8 sm:py-12 lg:py-[44px] bg-[#F3F3F3]" >
            <div className="w-full max-w-[1301px] mx-auto px-4 sm:px-6 lg:px-[70px]">
                <div className="space-y-6 sm:space-y-8 lg:space-y-[30px]">
                    {/* About Content */}
                    <div className="space-y-3 sm:space-y-4 lg:space-y-[12px]">
                        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-lato font-bold leading-tight lg:leading-[34px] text-global-1">
                            About Us
                        </h2>
                        <div className="space-y-4 sm:space-y-5 lg:space-y-[20px]">
                            <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[28px] text-global-8">
                                Marcorp Industries is a value-driven import-export company built on trust, quality, and long-term relationships. We believe in letting our products speak louder than our words. With a strong global network and a commitment to excellence, we deliver only what we proudly stand behind. Our mission is simple—trade with integrity and grow with our partners.
                            </p>
                            <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[20px] text-global-8">
                                With years of experience in the import-export industry, we empower businesses to expand beyond borders, unlocking new opportunities for growth and success.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[12px]">
                        {/* Mission Card */}
                      <div className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[20px] p-4 sm:p-6 lg:p-[22px] relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-10"
                                style={{ backgroundImage: "url('/images/img_group.svg')" }}
                            ></div>
                            <div className="relative space-y-3 sm:space-y-4 lg:space-y-[14px]">
                                <div className="flex items-center gap-3 lg:gap-[12px]">
                                        <Image
                                        width={500}
                                        height={500}
                                      src="/assets/image/about/mission.svg"
                                        alt="Mission Icon"
                                        className="w-[50px] h-[50px]"
                                    />
                                    <h3 className="text-lg sm:text-xl lg:text-[24px] font-lato font-bold leading-tight lg:leading-[29px] text-global-1">
                                        Our Mission
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[28px] text-global-8">
                                    At Marcorp Industries, our mission is to identify the finest quality products and build a strong, efficient distribution network that connects markets across the globe. We focus on reliability, consistency, and value in every shipment we handle.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                      <div className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[20px] p-4 sm:p-6 lg:p-[22px] relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-10"
                                style={{ backgroundImage: "url('/images/img_group.svg')" }}
                            ></div>
                            <div className="relative space-y-3 sm:space-y-4 lg:space-y-[10px]">
                                <div className="flex items-center gap-3 lg:gap-[12px]">
                                  <Image
                                        width={500}
                                        height={500}
                                        src="/assets/image/about/vision.svg"
                                        alt="Vision Icon"
                                        className="w-[50px] h-[50px]"
                                    />
                                    <h3 className="text-lg sm:text-xl lg:text-[24px] font-lato font-bold leading-tight lg:leading-[29px] text-global-1">
                                        Our Vision
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[28px] text-global-8">
                                    Our vision is to become one of the world's leading export companies by creating lasting partnerships, delivering excellence, and setting new benchmarks in global trade. We aim to represent India's manufacturing strength on the global stage through ethical practices and unmatched service.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
      </section >
  )
}   