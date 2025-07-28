"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [color, setColor] = useState(false)
    const pathname = usePathname()
    const isRoomList = pathname === '/room-list'

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (!isRoomList) {
            const changeColor = () => {
                if (window.scrollY >= 90) {
                    setColor(true)
                } else {
                    setColor(false)
                }
            }
            window.addEventListener('scroll', changeColor);
            return () => {
                window.removeEventListener('scroll', changeColor);
            };
        }
    }, [isRoomList]);

    // Header classes
    const headerClass = isRoomList
        ? 'fixed top-0 w-full z-[99] transition-all duration-300 bg-white '
        : `fixed top-0 w-full z-[99] transition-all duration-300 ${color ? 'bg-white drop-shadow-md' : 'bg-transparent'}`;

    // Text color classes
    const navTextClass = isRoomList
        ? 'text-sm font-semibold text-[#5C5C5C] transition-all duration-300 hover:text-[#008FE5]'
        : (linkColor => `text-sm font-semibold transition-all duration-300 ${linkColor} hover:text-[#008FE5]`);

    // Logo
    const logoSrc = isRoomList
        ? "/assets/images/header/logoOne.png"
        : (color ? "/assets/images/header/logoOne.png" : "/assets/images/header/logo_white.svg");

    return (
        <header className={headerClass}>
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-10 py-2">
                <Link href="/" className="text-white text-xl font-semibold">
                    Marcorp Industries
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 md:flex">
                    <Link href="/#home" className={isRoomList ? navTextClass : navTextClass(color ? 'text-[#5C5C5C]' : 'text-[#ffffff] bg-[#FFFFFF42] border border-[#FFFFFF42] rounded-[6px] px-5 py-1')}>
                        Home
                    </Link>
                    <Link href="#about" className={isRoomList ? navTextClass : navTextClass(color ? 'text-[#5C5C5C]' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1'    )}>
                        About Us
                    </Link>
                    <Link href="/room-list/#rooms" className={isRoomList ? navTextClass : navTextClass(color ? 'text-[#5C5C5C]' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1')}>
                        Products
                    </Link>
                    <Link href="#facilities" className={isRoomList ? navTextClass : navTextClass(color ? 'text-[#5C5C5C]' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1')}>
                        Certifications
                    </Link>
                    <Link href="#testimonials" className={isRoomList ? navTextClass : navTextClass(color ? 'text-[#5C5C5C]' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1')}>
                        Why Us
                    </Link>
                    <Link href="#contact" className={isRoomList ? navTextClass : navTextClass(color ? 'text-[#5C5C5C]' : 'text-[#ffffff] hover:text-[#ffffff] hover:bg-[#FFFFFF42] hover:border hover:border-[#FFFFFF42] rounded-[6px] px-5 py-1')}>
                        Contact Us
                    </Link>
                </nav>

                <div className="hidden md:block ">
                    <a href="https://wa.me/919876543210">
                        <Button variant="icon" className="bg-[#000000]  shadow-none gap-1 font-semibold cursor-pointer px-10 text-white">
                            Get a Quote
                            <ArrowRight />
                        </Button>
                    </a>

                    
                </div>

                {/* Mobile Menu Button */}
                <button className="block md:hidden bg-[#FFFFFF38] text-[#ffffff] p-1.5 rounded-[10px]" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="container bg-white  mx-auto md:hidden">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link
                            href="#home"
                            className="font-medium text-[#5C5C5C] hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="#properties"
                            className="font-medium text-[#5C5C5C] hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Properties
                        </Link>
                        <Link
                            href="#facilities"
                            className="font-medium text-[#5C5C5C] hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Facilities
                        </Link>
                        <Link
                            href="#about"
                            className="font-medium text-[#5C5C5C] hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#testimonials"
                            className="font-medium text-[#5C5C5C] hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#contact"
                            className="font-medium text-[#5C5C5C] hover:text-[#008FE5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <a href="tel:+919090909090">
                            <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={() => setIsMenuOpen(false)}>
                                Call Us
                            </Button>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
