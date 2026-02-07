import React from 'react'
import ContactUsForm from '../components/common/contact-us-form'
import Image from 'next/image'

export default function HeroWithFrom() {
    return (
        <section className=' w-full bg-[#F3F3F3] md:hidden'>

            <div className="w-full max-w-[1440px] mx-auto px-4  xl:px-12 py-6 flex flex-col gap-4">

                <div className=''>
                    <ContactUsForm />
                </div>
                
                {/* Countries, Partners, Licenses */}
                <div className="w-full space-y-2 md:flex justify-between">

                    {/* Our Global Impact in Numbers */}
                    {/* <div className="w-full space-y-1 ">
                        <h3 className="text-[#000000] text-lg font-semibold">Our Global Impact in Numbers</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            <div className="text-start space-y-1">
                                <div className="text-lg md:text-2xl font-extrabold text-[#323232]">86+</div>
                                <div className="text-sm text-[#595959]">Countries Served</div>
                                <div className="w-[18px] h-[2px] bg-red-500 "></div>
                            </div>
                            <div className="text-start space-y-1">
                                <div className="text-lg md:text-2xl font-extrabold text-[#323232]">100+</div>
                                <div className="text-sm text-[#595959]">Product Categories</div>
                                <div className="w-[18px] h-[2px] bg-green-500 "></div>
                            </div>
                            <div className="text-start space-y-1">
                                <div className="text-lg md:text-2xl font-extrabold text-[#323232]">15+</div>
                                <div className="text-sm text-[#595959]">Clients Served</div>
                                <div className="w-[18px] h-[2px] bg-blue-500 "></div>
                            </div>
                            <div className="text-start space-y-1">
                                <div className="text-lg md:text-2xl font-extrabold text-[#323232]">98%</div>
                                <div className="text-sm text-[#595959]">Customer Satisfaction</div>
                                <div className="w-[18px] h-[2px] bg-yellow-500 "></div>
                            </div>
                            <div className="text-start space-y-1">
                                <div className="text-lg md:text-2xl font-extrabold text-[#323232]">24/7</div>
                                <div className="text-sm text-[#595959]">Support & Assistance</div>
                                <div className="w-[18px] h-[2px] bg-purple-500 "></div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='w-full h-[1px] bg-[#DDDDDD]'>

                    </div> */}
                    {/* Countries */}
                    {/* <div className="space-y-1">
                        <h3 className="text-[#121212] text-lg font-semibold">Countries</h3>
                        <div className="flex space-x-4">
                            <Image src="/assets/image/hero/country_new/south_africa.png" alt="South Africa" width={500} height={500} className="w-auto h-8 " />
                            <Image src="/assets/image/hero/country_new/canada.png" alt="Canada" width={500} height={500} className="w-auto h-8 " />
                            <Image src="/assets/image/hero/country_new/australia.png" alt="Australia" width={500} height={500} className="w-auto h-8 " />
                            <Image src="/assets/image/hero/country_new/qatar.png" alt="Qatar" width={500} height={500} className="w-auto h-8 " />
                            <Image src="/assets/image/hero/country_new/bangladesh.png" alt="Bangladesh" width={500} height={500} className="w-auto h-8 " />

                        </div>
                    </div> */}
                </div>



            </div>
        </section>
    )
}
