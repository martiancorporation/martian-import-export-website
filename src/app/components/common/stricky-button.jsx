import React from 'react'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function StrickyBtn() {
    return (
        <div className="md:hidden fixed bottom-4 right-2  flex flex-col md:flex-row items-end  md:justify-end md:items-center gap-1 md:gap-3 pb- z-50">

            <a
                href="https://wa.me/918585074646"
                target="_blank"
                rel="noopener noreferrer"
                className="   transition-all"
                aria-label="WhatsApp"
            >
                <Image src="/assets/image/hero/whatsapp_new.svg" width={100} height={100} className='w-10 h-10' alt='whatsapp icon' />
            </a>
        </div>
    )
}
