import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Matthews",
            country: "USA",
            flag: "/assets/image/hero/country_logo/usa.svg",
            text: "Always timely, high-quality products with excellent global compliance and great customer service from Marcorp."
        },
        {
            name: "Sophie Tremblay",
            country: "Canada",
            flag: "/assets/image/hero/country_logo/canada.svg",
            text: "Marcorp's leather goods impressed us—beautiful design, strong durability, and always delivered on schedule."
        },
        {
            name: "Md. Rakib Hossain",
            country: "Bangladesh",
            flag: "/assets/image/hero/country_logo/bangladesh.svg",
            text: "Excellent food product quality, quick shipping, accurate paperwork and stress-free."
        },
        {
            name: "Sarah Johnson",
            country: "Australia",
            flag: "/assets/image/hero/country_logo/australia.webp",
            text: "Marcorp's commitment to quality and timely delivery has made them our trusted partner for all import needs."
        },
        {
            name: "Mohammed Al Falasi",
            country: "UAE",
            flag: "/assets/image/hero/country_logo/uae.svg",
            text: "Efficient team, competitive pricing, professional packaging—Marcorp is our preferred export partner in India."
        },
        {
            name: "Yousef Al Marri",
            country: "Qatar",
            flag: "/assets/image/hero/country_logo/qatar.svg",
            text: "Marcorp supplies top-quality garment materials meeting GCC standards with hassle-free documentation and support."
        }
    ];

    const renderCards = () => (
        <>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 bg-[#FAFAFA1A] rounded-[24px] p-2 md:p-4 border border-[#DAE1E7] hover:shadow-xl transition-shadow duration-300 w-[80%] sm:w-[300px] md:w-[400px]">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                                <Image
                                    src={testimonial.flag}
                                    alt={`${testimonial.country} flag`}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-base">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {testimonial.country}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 md:leading-relaxed">
                        "{testimonial.text}"
                    </p>
                </div>
            ))}
        </>
    );

    return (
        <section className="bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 xl:px-12 py-6 md:py-8 xl:py-10">
                <div className="text-center space-y-2 md:space-y-4 mb-6 md:mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000]">
                        Trusted by Traders, Loved by Thinkers.
                    </h2>
                    <p className="text-sm sm:text-base text-[#7B7B7B] max-w-2xl mx-auto">
                        Here's what people are saying about us
                    </p>
                </div>

                <div className="mt-4 md:mt-8 space-y-6 md:space-y-8">
                    {/* First Marquee - Right to Left */}
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee gap-x-4">
                            {renderCards()}
                            {renderCards()}
                        </div>
                    </div>

                    {/* Second Marquee - Left to Right */}
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee-reverse gap-x-4">
                            {renderCards()}
                            {renderCards()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
