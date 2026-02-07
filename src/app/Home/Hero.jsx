import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, icons } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactForm from '../components/contact-form'
import ContactUsForm from '../components/common/contact-us-form'
import { CallbackRequestModal } from '../components/common/callback-request-modal'
// import EnquiryModal from '../common/enquiry-modal'

export default function Hero() {

    return (
        <section id="home" className="relative min-h-screen md:h-full w-full  ">
            <div className="w-full h-full  md:h-full absolute inset-0 z-0 ">
                <video
                    src="/assets/video/hero_video.mp4"
                    className='w-full h-full object-cover'
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="none"
                ></video>
            </div>

            <div className="w-full h-full bg-gradient-to-b from-black/70 to-black/70 absolute inset-0 z-10">

            </div>

            <div className="w-full h-full  max-w-[1440px] mx-auto  px-4 md:px-10 pt-24 pb-0 md:py-8 relative z-10 gap-8  lg:pt-24 flex items-center justify-center  md:justify-between">
                <div className='w-full h-full  flex items-center  md:justify-between'>
                    <div className="w-full h-full flex flex-col items-center md:items-start justify-center space-y-6 text-white">
                        <div className='w-full flex justify-between items-center'>

                            <div className="w-full md:w-[65%]  flex flex-col items-center md:items-start space-y-4 md:space-y-4  ">

                                {/* Countries */}
                                <div className="w-full md:hidden space-y-1">
                                    <div className="w-full flex justify-start space-x-4">
                                        <Image src="/assets/image/hero/country_logo/SA.svg" alt="South Africa" width={500} height={500} className="w-auto h-8    " />
                                        <Image src="/assets/image/hero/country_logo/canada.svg" alt="Canada" width={500} height={500} className="w-auto h-8      " />
                                        <Image src="/assets/image/hero/country_logo/usa.svg" alt="Australia" width={500} height={500} className="w-auto h-8 " />
                                        <Image src="/assets/image/hero/country_logo/qatar.svg" alt="Qatar" width={500} height={500} className="w-auto h-8 " />
                                        <Image src="/assets/image/hero/country_logo/bangladesh.svg" alt="Bangladesh" width={500} height={500} className="w-auto h-8 " />

                                    </div>
                                </div>

                                {/* Heading */}
                                <h1 className="hidden md:block text-2xl font-semibold  md:text-5xl lg:text-5xl text-center md:text-start">
                                    Connecting India to the World – Import, Export, Expand.
                                </h1>

                                <div className='md:hidden w-full flex flex-col items-start space-y-0'>
                                    <h1 className='text-lg font-semibold   text-start'>
                                        Connecting India to the World
                                    </h1>
                                    <h1 className='text-[32px] font-semibold   text-start'>
                                        Import, Export, Expand.
                                    </h1>
                                </div>
                                {/* Subtext */}
                                <p className="hidden md:block text-sm md:text-base text-[#FFFFFF] font-normal  text-center md:text-start md:w-[80%]">
                                    Join thousands of businesses trading across borders with ease. Secure transactions, reliable logistics, and a hassle-free experience.
                                </p>

                                <div className='md:hidden w-full bg-[#FFFFFF80] h-[1px]'>

                                </div>
                                {/* License */}
                                <div className="w-full flex flex-col items-start justify-start md:hidden md:space-y-2">
                                    <h3 className="text-white text-base md:text-lg font-semibold">License</h3>
                                    <div className="flex space-x-2">
                                        <Image src="/assets/image/certification/iec.png" alt="IEC" width={100} height={100} className="w-10 h-10 object-contain" />
                                        <Image src="/assets/image/certification/msme.png" alt="MSME" width={100} height={100} className="w-10 h-10 object-contain" />
                                        <Image src="/assets/image/certification/apeda.png" alt="APEDA" width={100} height={100} className="w-10 h-10 object-contain" />
                                        <Image src="/assets/image/certification/iso.png" alt="ISO" width={100} height={100} className="w-10 h-10 object-contain" />
                                    </div>
                                </div>
                                {/* Get a Quote Button */}
                                <div className='w-full grid grid-cols-2 md:flex gap-4'>
                                    <CallbackRequestModal />
                                    <a href="https://wa.me/918585074646" target="_blank" rel="noopener noreferrer" className="hidden md:block w-full md:w-[200px]">
                                        <Button variant="icon" className="w-full rounded-[10px] border border-[#FFFFFF] cursor-pointer text-[#FFFFFF] font-medium py-2">
                                            <Image src="/assets/image/hero/whatsapp.svg" alt="WhatsApp Logo" width={100} height={100} className="h-5 w-5" />
                                            Contact Now
                                        </Button>
                                    </a>
                                    <a href="#contact"  className="block md:hidden w-full md:w-[200px]">
                                        <Button variant="icon" className="w-full rounded-[10px] border border-[#FFFFFF] cursor-pointer text-[#FFFFFF] font-medium py-2">
                                            Get a Quote
                                        </Button>
                                    </a>

                                </div>

                              
                                {/* Our Global Impact in Numbers mobile*/}
                                <div className="mt-8 md:hidden w-full space-y-1 bg-[#FFFFFF1A] backdrop-blur-md rounded-2xl p-3 border border-[#FFFFFF] ">
                                    <h3 className="text-[#FFFFFF] text-[14px] font-semibold">Our Global Impact in Numbers</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                        <div className="text-start space-y-1">
                                            <div className="text-lg md:text-2xl font-extrabold text-[#FFFFFF]">86+</div>
                                            <div className="text-xs text-[#FFFFFF]">Countries Served</div>
                                            <div className="w-[18px] h-[2px] bg-red-500 "></div>
                                        </div>
                                        <div className="text-start space-y-1">
                                            <div className="text-lg md:text-2xl font-extrabold text-[#FFFFFF]">100+</div>
                                            <div className="text-xs text-[#FFFFFF]">Product Categories</div>
                                            <div className="w-[18px] h-[2px] bg-green-500 "></div>
                                        </div>
                                        <div className="text-start space-y-1">
                                            <div className="text-lg md:text-2xl font-extrabold text-[#FFFFFF]">15+</div>
                                            <div className="text-xs text-[#FFFFFF]">Clients Served</div>
                                            <div className="w-[18px] h-[2px] bg-blue-500 "></div>
                                        </div>
                                        <div className="text-start space-y-1">
                                            <div className="text-lg md:text-2xl font-extrabold text-[#FFFFFF]">98%</div>
                                            <div className="text-xs text-[#FFFFFF]">Customer Satisfaction</div>
                                            <div className="w-[18px] h-[2px] bg-yellow-500 "></div>
                                        </div>
                                        
                                    </div>
                                </div>

                                {/* Partners  Mobile*/}
                                <div className="w-full md:hidden flex flex-col items-start justify-start space-y-2">
                                    <h3 className="text-white text-base font-semibold">Partners</h3>
                                    <div className="flex  justify-start space-x-2">
                                        <div className="w-16 h-8 bg-white rounded-sm    flex items-center justify-center">
                                            <Image src="/assets/image/hero/partners/yamaha.png" alt="Yamaha" width={100} height={100} className="w-10 h-8 object-contain" />
                                        </div>
                                        <div className="w-16 h-8 bg-white rounded-sm flex items-center justify-center">
                                            <Image src="/assets/image/hero/partners/suzuki.png" alt="Suzuki" width={100} height={100} className="w-10 h-8 object-contain" />
                                        </div>
                                        <div className="w-16 h-8 bg-white rounded-sm flex items-center justify-center">
                                            <Image src="/assets/image/hero/partners/tvs.jpg" alt="TVS" width={100} height={100} className="w-10 h-8 object-contain" />
                                        </div>
                                        <div className="w-16 h-8 bg-white rounded-sm flex items-center justify-center">
                                            <Image src="/assets/image/hero/partners/bajaj.jpg" alt="Bajaj" width={100} height={100} className="w-10 h-8 object-contain" />
                                        </div>
                                        <div className="w-16 h-8 bg-white rounded-sm flex items-center justify-center">
                                            <Image src="/assets/image/hero/partners/hero.png" alt="Hero" width={100} height={100} className="w-10 h-8 object-contain" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="hidden md:block w-[30%]">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Countries, Partners, Licenses */}
                        <div className="hidden w-full space-y-0 md:flex justify-between">
                            {/* Countries */}
                            <div className="space-y-2">
                                <h3 className="text-white text-lg font-semibold">Countries</h3>
                                <div className="flex space-x-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image src="/assets/image/hero/country_logo/SA.svg" alt="UAE" width={48} height={48} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image src="/assets/image/hero/country_logo/canada.svg" alt="Canada" width={48} height={48} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image src="/assets/image/hero/country_logo/usa.svg" alt="USA" width={48} height={48} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image src="/assets/image/hero/country_logo/qatar.svg" alt="Qatar" width={48} height={48} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image src="/assets/image/hero/country_logo/bangladesh.svg" alt="Bangladesh" width={48} height={48} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Partners */}
                            <div className="space-y-2">
                                <h3 className="text-white text-lg font-semibold">Partners</h3>
                                <div className="flex space-x-4">
                                    <div className="w-16 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <Image src="/assets/image/hero/partners/yamaha.png" alt="Yamaha" width={100} height={100} className="w-10 h-8 object-contain" />
                                    </div>
                                    <div className="w-16 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <Image src="/assets/image/hero/partners/suzuki.png" alt="Suzuki" width={100} height={100} className="w-10 h-8 object-contain" />
                                    </div>
                                    <div className="w-16 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <Image src="/assets/image/hero/partners/tvs.jpg" alt="TVS" width={100} height={100} className="w-10 h-8 object-contain" />
                                    </div>
                                    <div className="w-16 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <Image src="/assets/image/hero/partners/bajaj.jpg" alt="Bajaj" width={100} height={100} className="w-10 h-8 object-contain" />
                                    </div>
                                    <div className="w-16 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <Image src="/assets/image/hero/partners/hero.png" alt="Hero" width={100} height={100} className="w-10 h-8 object-contain" />
                                    </div>
                                </div>
                            </div>

                            {/* License */}
                            <div className="space-y-2">
                                <h3 className="text-white text-lg font-semibold">License</h3>
                                <div className="flex space-x-4">
                                    <Image src="/assets/image/certification/iec.png" alt="IEC" width={100} height={100} className="w-12 h-12 object-contain" />
                                    <Image src="/assets/image/certification/msme.png" alt="MSME" width={100} height={100} className="w-10 h-10 object-contain" />
                                    <Image src="/assets/image/certification/apeda.png" alt="APEDA" width={100} height={100} className="w-10 h-10 object-contain" />
                                    <Image src="/assets/image/certification/iso.png" alt="ISO" width={100} height={100} className="w-10 h-10 object-contain" />
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:block w-full bg-[#FFFFFF80] h-[1px]'>

                        </div>

                        {/* Our Global Impact in Numbers */}
                        <div className="w-full space-y-2 hidden md:block">
                            <h3 className="text-white text-lg font-semibold">Our Global Impact in Numbers</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <div className="text-start space-y-1">
                                    <div className="text-lg md:text-2xl font-bold text-white">86+</div>
                                    <div className="text-sm text-white">Countries Served</div>
                                    <div className="w-8 h-1 bg-red-500 "></div>
                                </div>
                                <div className="text-start space-y-1">
                                    <div className="text-lg md:text-2xl font-bold text-white">100+</div>
                                    <div className="text-sm text-white">Product Categories</div>
                                    <div className="w-8 h-1 bg-green-500 "></div>
                                </div>
                                <div className="text-start space-y-1">
                                    <div className="text-lg md:text-2xl font-bold text-white">15+</div>
                                    <div className="text-sm text-white">Clients Served</div>
                                    <div className="w-8 h-1 bg-blue-500 "></div>
                                </div>
                                <div className="text-start space-y-1">
                                    <div className="text-lg md:text-2xl font-bold text-white">98%</div>
                                    <div className="text-sm text-white">Customer Satisfaction</div>
                                    <div className="w-8 h-1 bg-yellow-500 "></div>
                                </div>
                                <div className="text-start space-y-1">
                                    <div className="text-lg md:text-2xl font-bold text-white">24/7</div>
                                    <div className="text-sm text-white">Support & Assistance</div>
                                    <div className="w-8 h-1 bg-purple-500 "></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}
