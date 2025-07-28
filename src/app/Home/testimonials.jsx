import React from 'react'
import Image from 'next/image'

export default function testimonials() {
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
            flag: "/assets/image/hero/country_logo/canada.svg",
            text: "Marcorp's commitment to quality and timely delivery has made them our trusted partner for all import needs."
        },
        {
            name: "Mohammed Al Falasi",
            country: "UAE",
            flag: "/assets/image/hero/country_logo/SA.svg",
            text: "Efficient team, competitive pricing, professional packaging—Marcorp is our preferred export partner in India."
        },
        {
            name: "Yousef Al Marri",
            country: "Qatar",
            flag: "/assets/image/hero/country_logo/qatar.svg",
            text: "Marcorp supplies top-quality garment materials meeting GCC standards with hassle-free documentation and support."
        }
    ];

    return (
        <section className="py-6 sm:py-6 lg:py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000]">
                        Trusted by Traders, Loved by Thinkers.
                    </h2>
                    <p className="text-sm sm:text-base text-[#7B7B7B] max-w-2xl mx-auto">
                        Here's what people are saying about us
                    </p>
                </div>

                {/* Infinite Marquee of Testimonial Cards */}
                <div className="mt-16 space-y-8">
                    {/* First Marquee - Right to Left */}
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee">
                            {testimonials.map((testimonial, index) => (
                                    <div key={`first-${index}`} className="bg-[#FAFAFA1A] rounded-[24px] p-4 lg:p-4 border border-[#DAE1E7] hover:shadow-xl transition-shadow duration-300 mx-4 min-w-[400px]">
                                    <div className="flex items-start justify-between mb-4">
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
                                    <p className="text-gray-700 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`first-duplicate-${index}`} className="bg-[#FAFAFA1A] rounded-[24px] p-4 lg:p-4 border border-[#DAE1E7] hover:shadow-xl transition-shadow duration-300 mx-4 min-w-[400px]">
                                    <div className="flex items-start justify-between mb-4">
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
                                    <p className="text-gray-700 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Marquee - Left to Right */}
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee-reverse">
                            {testimonials.map((testimonial, index) => (
                                        <div key={`second-${index}`} className="bg-[#FAFAFA1A] rounded-[24px] p-4 lg:p-4 border border-[#DAE1E7] hover:shadow-xl transition-shadow duration-300 mx-4 min-w-[400px]">
                                    <div className="flex items-start justify-between mb-4">
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
                                    <p className="text-gray-700 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`second-duplicate-${index}`} className="bg-[#FAFAFA1A] rounded-[24px] p-4 lg:p-4 border border-[#DAE1E7] hover:shadow-xl transition-shadow duration-300 mx-4 min-w-[400px]">
                                    <div className="flex items-start justify-between mb-4">
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
                                    <p className="text-gray-700 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}