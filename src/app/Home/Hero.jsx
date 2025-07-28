import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, icons } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactForm from '../components/contact-form'
// import EnquiryModal from '../common/enquiry-modal'

export default function Hero() {
    const location = ["Near Biswa bangla gate", "Near Aliah university kolkata", "Near Amity university kolkata", "Near Tata medical centre kolkata", "Near Eco park kolkata", "Near Coal bhawan kolkata", "Near physics wallah kolkata", "Near Ecospace business park", "Near Sister Nivedita University", "Near Techno india newtown", "others"]
    return (
        <section className="relative h-[100vh] md:min-h-[100vh] w-full ">
            <div className="w-full h-full absolute inset-0 z-0">
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




            <div className="w-full h-full max-w-[1440px] mx-auto  px-4 md:px-10 pt-24 md:py-8 relative z-10 1 gap-8  lg:pt-24 flex items-center justify-between">
                <div className='w-full  flex items-center justify-between'>
                    <div className="w-[100%]  flex flex-col items-center md:items-start justify-center space-y-6 text-white">
                        <div className='w-full flex justify-between items-center'>

                            <div className="w-full md:w-[65%]  flex flex-col items-center md:items-start space-y-4  ">

                                {/* Heading */}
                                <h1 className="text-2xl font-semibold  md:text-5xl lg:text-5xl text-center md:text-start">
                                    Connecting India to the World – Import, Export, Expand.
                                </h1>

                                {/* Subtext */}
                                <p className="text-sm md:text-base text-[#FFFFFF] font-normal  text-center md:text-start md:w-[80%]">
                                    Join thousands of businesses trading across borders with ease. Secure transactions, reliable logistics, and a hassle-free experience.
                                </p>

                                <div className='w-full flex md:flex-row flex-col gap-4'>
                                    <Button variant="icon" className="w-full  rounded-[10px] bg-[#FFFFFF]  font-medium cursor-pointer text-[#000000] md:w-[200px] py-2"  >

                                        Call Back Request
                                        <ArrowRight />
                                    </Button>
                                    <Button variant="icon" className="w-full  rounded-[10px] border border-[#FFFFFF]  font-normal cursor-pointer text-[#FFFFFF] md:w-[200px] py-2"  >
                                        <Image src="/assets/image/hero/whatsapp.svg" alt="Hospirent Logo" width={100} height={100} className="h-5 w-5 " />
                                        Contact Now
                                    </Button>
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

                                


                            </div>
                            <div className="hidden md:block w-[35%]">
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
                                        <Image src="/assets/image/hero/country_logo/sa.svg" alt="UAE" width={48} height={48} className="w-full h-full object-cover" />
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
                                    <Image src="/assets/image/certification/iec.png" alt="IEC" width={100} height={100} className="w-10 h-10 object-contain" />
                                    <Image src="/assets/image/certification/msme.png" alt="MSME" width={100} height={100} className="w-10 h-10 object-contain" />
                                    <Image src="/assets/image/certification/apeda.png" alt="APEDA" width={100} height={100} className="w-10 h-10 object-contain" />
                                    <Image src="/assets/image/certification/iso.png" alt="ISO" width={100} height={100} className="w-10 h-10 object-contain" />
                                </div>
                            </div>
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
