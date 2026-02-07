"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeColor)
        return () => {
            window.removeEventListener("scroll", changeColor)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav
            className={`w-full h-[50px] md:h-[55px]  ${color ? "fixed top-0 border border-b transition-all bg-white" : "fixed border-b border-[#FFFFFF80] md:border-none top-0 transition-all"} z-[99] flex items-center justify-center`}
        >
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between  px-4 md:px-10 py-0">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className={color ? ` text-black text-xl font-semibold` : `text-white text-xl font-semibold`}>
                        Marcorp Industries
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 md:flex">
                    <Link href="/#home" className={`text-sm  px-5 font-semibold transition-all duration-300 border border-transparent ${color ? 'text-[#5C5C5C] ' : 'text-[#ffffff] bg-[#FFFFFF42] border border-[#FFFFFF42] rounded-[6px]  py-1'} hover:text-[#008FE5]`}>
                        Home
                    </Link>
                    <Link href="#about" className={`text-sm px-5 font-semibold transition-all duration-300 border border-transparent ${color ? 'text-[#5C5C5C] ' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1'} hover:text-[#008FE5]`}>
                        About Us
                    </Link>
                    <Link href="/#product" className={`text-sm font-semibold transition-all px-5 duration-300 border border-transparent ${color ? 'text-[#5C5C5C] ' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1'} hover:text-[#008FE5]`}>
                        Products
                    </Link>
                    <Link href="#facilities" className={`text-sm px-5 font-semibold transition-all duration-300 border border-transparent ${color ? 'text-[#5C5C5C] ' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1'} hover:text-[#008FE5]`}>
                        Certifications
                    </Link>
                    <Link href="#whyUs" className={`text-sm px-5 font-semibold transition-all duration-300 border border-transparent ${color ? 'text-[#5C5C5C] ' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1'} hover:text-[#008FE5]`}>
                        Why Us
                    </Link>
                    <Link href="#contact" className={`text-sm px-5 font-semibold transition-all duration-300 border border-transparent ${color ? 'text-[#5C5C5C] ' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1'} hover:text-[#008FE5]`}>
                        Contact Us
                    </Link>
                </nav>

                <div className="hidden md:block ">
                    <a href="mailto:office@marcorpindustries.com">
                        <Button variant="icon" className="bg-[#000000]  shadow-none gap-1 font-semibold cursor-pointer px-10 text-white">
                            Get a Quote
                            <ArrowRight />
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`block md:hidden p-1.5 rounded-[6px] border transition-all duration-300 ${isMenuOpen
                            ? 'bg-white text-black border-gray-300'
                            : color
                                ? 'bg-[#000000] text-white border-[#121212]'
                            : 'bg-[#FFFFFF38] text-white border border-[#FFFFFF4D]'
                        }`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X className="h-5 w-5 " /> : <Menu className="h-5 w-5" />}
                </button>

            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="h-full w-full  fixed inset-0 z-50 bg-white flex flex-col items-start justify-center space-y-6 transition-all duration-300 md:hidden pl-6 p-4">
                    <nav className="w-full h-full flex flex-col justify-start items-start space-y-6">
                        <Link
                            href="#home"
                            className="text-lg font-semibold text-gray-700 hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            className="text-lg font-semibold text-gray-700 hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#product"
                            className="text-lg font-semibold text-gray-700 hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            href="#facilities"
                            className="text-lg font-semibold text-gray-700 hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Certifications
                        </Link>
                        <Link
                            href="#whyUs"
                            className="text-lg font-semibold text-gray-700 hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Why Us
                        </Link>
                        <Link
                            href="#contact"
                            className="text-lg font-semibold text-gray-700 hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                       
                        <a href="mailto:office@marcorpindustries.com">
                            <Button variant="icon" className="bg-[#000000]  shadow-none gap-1 font-semibold cursor-pointer px-10 text-white">
                                Get a Quote
                                <ArrowRight />
                            </Button>
                        </a>
                    </nav>
                </div>
            )}

        </nav>
    )
}
