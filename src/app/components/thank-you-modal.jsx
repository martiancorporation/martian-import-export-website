"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYouModal({ open, onOpenChange }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (open) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    onOpenChange(false);
                }, 300); // Wait for fade out animation
            }, 5000); // Increased to 5 seconds

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [open, onOpenChange]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onOpenChange(false);
        }, 300);
    };

    if (!open) return null;

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md text-center p-8">
                <DialogTitle className="flex flex-col items-center justify-center space-y-4 raleway-font">
                    {/* You can replace this with your actual image */}
                    <Image
                        className='w-[150px] animate-pulse'
                        src="/assets/image/thank_you_icon.png"
                        alt="Thank You"
                        width={200}
                        height={200} />

                    <p className="text-xl font-bold text-[#262626]">
                        Thanks for filling out the form!
                    </p>
                    <p className="text-sm text-[#777777] text-center">
                        We've received your details and will get back to you shortly.
                    </p>

                    {/* Manual Close Button */}
                    <Button
                        onClick={handleClose}
                        className="mt-4 bg-[#121212] hover:bg-gray-800 text-white"
                    >
                        Close
                    </Button>
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}
