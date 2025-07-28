import React from 'react';
import Image from 'next/image';

export default function FounderNote() {
    return (
        <section
            className="relative "

        >
            <div className="relative z-20 w-full  mx-auto  flex flex-col gap-8">
                <div className="space-y-4">
                    <h2 className="text-xl md:text-3xl font-semibold text-white">Founder's Note</h2>
                    <p className="text-lg md:text-xl font-semibold text-white">Welcome to Marcorp Industries.</p>
                    <p className="text-base md:text-base text-white">

                        At Marcorp, we don’t just trade products—we deliver trust, quality, and commitment in every shipment. Our goal is to build meaningful, long-term relationships with businesses around the world by providing only the best that India has to offer.
                    </p>
                    <p className="text-base md:text-base text-white">
                        Join hands with us and experience a partnership where integrity drives every transaction, and your success is our priority.
                    </p>
                </div>
                <div className="flex items-start gap-2 mt-6">
                    <a href="https://www.linkedin.com/in/abid-hossain-biswas/" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/image/whyChoose/linkedin.svg" alt="LinkedIn" width={36} height={36} className="inline-block" />
                    </a>
                    <div className='flex flex-col items-center gap-0'>
                        <Image
                            src="/assets/image/whyChoose/signature.svg"
                            alt="Abid Hossain Biswas"
                            width={200}
                            height={60}
                            className="inline-block"
                        />
                        <div className="text-white text-sm md:text-sm font-normal ">Founder &amp; Managing Director</div>
                    </div>
                        
                </div>
            </div>
        </section>
    );
}   