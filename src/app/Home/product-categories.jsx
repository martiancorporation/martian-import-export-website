import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function productCategories() {
    const productCategories = [
        {
            id: 1,
            title: "Automobile & Spare Parts",
            description: "Parts & Accessories for two-wheelers & three-wheelers",
            image: "/assets/image/product/one.png",
            icon: "/assets/image/product/one.svg",
            brands: [
                { name: "Yamaha", logo: "/assets/image/hero/partners/yamaha.png" },
                { name: "Suzuki", logo: "/assets/image/hero/partners/suzuki.png" },
                { name: "TVS", logo: "/assets/image/hero/partners/tvs.jpg" },
                { name: "Bajaj", logo: "/assets/image/hero/partners/bajaj.jpg" },
                { name: "Hero", logo: "/assets/image/hero/partners/hero.png" }
            ]
        },
        {
            id: 2,
            title: "Leather Goods",
            description: "High-quality finished leather from trusted tanneries.",
            image: "/assets/image/product/two.png",
            icon: "/assets/image/product/two.svg",
            products: ["Wallets", "Handbags", "Belts", "Custom Accessories"]
        },
        {
            id: 3,
            title: "Garment Materials",
            description: "Sourced from certified textile hubs ensuring quality and sustainability.",
            image: "/assets/image/product/three.png",
            icon: "/assets/image/product/three.svg",
            products: ["Color Dyes", "Cotton Yarns", "Fabrics"]
        },
        {
            id: 4,
            title: "Food & Snacks",
            description: "Convenient ready-to-eat snacks, including various dry options.",
            image: "/assets/image/product/four.png",
            icon: "/assets/image/product/four.svg",
            products: ["Branded FMCG exports Like - Haldiram products"]
        }
    ];
    return (
        <section id="product" className="w-full bg-global-7" >
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 xl:px-12 py-6 md:py-8 xl:py-10">
                <div className="space-y-6 sm:space-y-8 lg:space-y-[22px]">
                    {/* Section Header */}
                    <div className="text-center space-y-1 lg:space-y-[4px] max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-lato font-bold leading-tight lg:leading-[32px] text-[#000000]">
                            Our Product Categories
                        </h2>
                        <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[20px] text-[#4D4D4D]">
                            We specialize in sourcing and exporting a wide range of high-quality products across multiple industries.
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[12px]">
                        {productCategories.map((category) => (
                            <div key={category.id} className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-[20px] p-2 sm:p-3 lg:p-[10px]">
                                {/* Product Image */}
                                <div className="relative mb-4 lg:mb-[18px]">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-[140px] sm:h-[150px] lg:h-[162px] object-cover rounded-[14px]"
                                    />
                                    <div className='absolute top-2 sm:top-3 lg:top-[6px] left-2 sm:left-3 lg:left-[8px] w-[32px] h-[32px] bg-white rounded-[6px] p-1 flex justify-center items-center'>
                                        <Image
                                            src={category.icon}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="w-[32px] h-[32px]"
                                        />
                                    </div>

                                </div>

                                {/* Product Info */}
                                <div className="space-y-3 sm:space-y-4 lg:space-y-[6px] px-2 lg:px-[4px] pb-2 lg:pb-[4px]">
                                    <div className="space-y-2 lg:space-y-[6px]">
                                        <h3 className="text-base sm:text-lg lg:text-[17px] font-lato font-semibold leading-tight lg:leading-[21px] text-[#000000]">
                                            {category.title}
                                        </h3>
                                        <p className="text-[13px] sm:text-sm lg:text-[14px] font-lato font-normal leading-relaxed lg:leading-[20px] text-[#5E5E5E]">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Brands or Products */}
                                    <div className="space-y-2 lg:space-y-[6px]">
                                        <p className="text-[#121212] text-xs sm:text-sm lg:text-[14px] font-lato font-semibold leading-[17px] text-button-2">
                                            {category.brands ? 'Brands :' : 'Products :'}
                                        </p>

                                        {category.brands ? (
                                            <div className="space-y-2 lg:space-y-[8px]">
                                                <div className="flex gap-2 lg:gap-[6px]">
                                                    {category.brands.slice(0, 3).map((brand, index) => (
                                                        <div key={index} className="bg-global-11 border border-[#EEEEEE] rounded-[4px] p-2 lg:p-[8px] flex-1 flex items-center justify-center">
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                src={brand.logo}
                                                                alt={brand.name}
                                                                className="max-w-full max-h-[12px] object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.brands.length > 3 && (
                                                    <div className="flex gap-2 lg:gap-[6px]">
                                                        {category.brands.slice(3).map((brand, index) => (
                                                            <div key={index} className="bg-global-11 border border-[#EEEEEE] rounded-[4px] p-2 lg:p-[8px] flex items-center justify-center">
                                                                <Image
                                                                    width={100}
                                                                    height={100}
                                                                    src={brand.logo}
                                                                    alt={brand.name}
                                                                    className="max-w-full max-h-[14px] object-contain"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="space-y-2 lg:space-y-[8px]">
                                                {category.products && (
                                                    <>
                                                        <div className="flex flex-wrap gap-2 lg:gap-[6px]">
                                                            {category.products.slice(0, 4).map((product, index) => (
                                                                <button
                                                                    key={index}
                                                                    className="bg-[#FFFFFF] border-1 border-[#EEEEEE] rounded-[4px] px-2 sm:px-3  py-1 lg:py-[4px] text-xs sm:text-sm lg:text-[14px] font-lato font-normal leading-[17px] text-[#000000] hover:bg-gray-50 transition-colors duration-200"
                                                                >
                                                                    {product}
                                                                </button>
                                                            ))}
                                                        </div>

                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-[20px] p-3 sm:p-6 lg:p-[20px]">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
                            <div className="text-center lg:text-left space-y-1 lg:space-y-[4px]">
                                <h3 className="text-lg sm:text-xl lg:text-[22px] font-lato font-semibold  text-[#121212]">
                                    Looking for something specific?
                                </h3>
                                <p className="text-sm sm:text-base lg:text-[16px] font-lato font-normal leading-relaxed lg:leading-[20px] text-[#5E5E5E]">
                                    We help source verified and export-ready products based on your business needs.
                                </p>
                            </div>
                            <a href="#contact"  >

                            <Button
                                variant="primary"
                                className="w-[200px] bg-[#1D1D1D] text-[#FFFFFF] px-6 sm:px-8 lg:px-[48px] py-3 sm:py-3.5 lg:py-[14px] rounded-[6px] text-sm sm:text-base lg:text-[15px] font-medium gap-2 lg:gap-[10px] flex-shrink-0"
                            >
                                Contact Now
                                <ArrowRight />
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}