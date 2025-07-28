"use client"

import React, { useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import { X } from "lucide-react"

export default function ThankYouModal({ open, onOpenChange }) {

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onOpenChange(false)
            }, 2000); // 2000ms = 2 seconds

            return () => clearTimeout(timer);
        }
    }, [open, onOpenChange]);


    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md text-center p-8">

                <DialogTitle className="flex flex-col items-center justify-center space-y-4 raleway-font">

                    {/* You can replace this with your actual image */}
                    <Image
                        className='w-[150px] animate-pulse'
                        src="/assets/images/cta/thank_you_icon.png"
                        alt="Thank You"
                        width={200}
                        height={200} />

                    <p className="text-xl font-bold text-[#262626]">
                        Thanks for filling out the form!
                    </p>
                    <p className="text-sm text-[#777777] text-center">
                        We've received your details and will get back to you shortly.
                    </p>
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}
