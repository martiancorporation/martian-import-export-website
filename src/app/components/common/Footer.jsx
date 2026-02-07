import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Products", href: "#product" },
    { name: "Certifications", href: "#facilities" },
    { name: "Why Us", href: "#whyUs" }
  ];

  const companyLinks = [
    { name: "Our team", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const socialMedia = [
    { name: "WhatsApp", icon: "/assets/image/socialMedia/whatsapp.svg", href: "#" },
    { name: "Instagram", icon: "/assets/image/socialMedia/insta.svg", href: "#" },
    { name: "Facebook", icon: "/assets/image/socialMedia/fb.svg", href: "#" },
    { name: "Email", icon: "/assets/image/socialMedia/mail.svg", href: "mailto:office@marcorpindustries.com" },
    { name: "LinkedIn", icon: "/assets/image/socialMedia/linkdin.svg", href: "#" }
  ];

  return (
    <footer className="bg-[#111111] text-white">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-6 md:py-8 xl:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">

          {/* Company Info & Newsletter */}
          <div className="w-full lg:w-[40%] space-y-3 md:space-y-5">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Marcorp Industries</h3>
              <p className="text-gray-300  text-sm sm:text-base">
                Join thousands of businesses trading across borders with ease. Secure transactions, reliable logistics, and a hassle-free experience.
              </p>
            </div>
           

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
              ))}
            </div>

            <div className='w-full bg-[#383838] h-[1px]'> </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <h4 className="font-semibold text-base sm:text-lg">Join our newsletter</h4>
              <div className="flex flex-row gap-2 sm:gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#252525] px-3 sm:px-4 py-2 text-sm sm:text-base border border-[#57575766] placeholder:text-[#EFEDFD99] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-2 sm:px-6 py-2 bg-[#F3EEFF] text-[#000000] font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links and Contact Section */}
          <div className="w-full lg:w-[60%] space-y-3 md:space-y-5">
            <div className="w-full grid grid-cols-2 md:flex justify-around gap-6 lg:gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#F4F0FF]">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-[#EFEDFD] hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#F4F0FF]">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-[#EFEDFD] hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address & Contact */}
              <div className="hidden md:block">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#F4F0FF]">Address & Contact</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#ABABAB] text-sm sm:text-base">Call support</p>
                    <p className="font-semibold text-[#EBEBEB] text-sm sm:text-base">+91-8585074646</p>
                  </div>
                  <div>
                    <p className="text-[#ABABAB] text-sm sm:text-base">Mail support</p>
                    <p className="font-semibold text-[#EBEBEB] text-sm sm:text-base break-all">office@marcorpindustries.com</p>
                  </div>
                  <div>
                    <p className="text-[#ABABAB] text-sm sm:text-base">Visit Us</p>
                    <p className="font-semibold text-[#EBEBEB] text-sm sm:text-base">Newtown, Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Address & Contact */}
            <div className='md:hidden w-full bg-[#383838] h-[1px]'> </div>
            <div className="block md:hidden">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#F4F0FF]">Address & Contact</h4>
              <div className="space-y-3">
                <div className='flex flex-row gap-1'>
                  <p className="text-[#ABABAB] text-sm sm:text-base">Call support --</p>
                  <p className="font-semibold text-[#EBEBEB] text-sm sm:text-base">+91-8585074646</p>
                </div>
                <div className='flex flex-row gap-1'>
                  <p className="text-[#ABABAB] text-sm sm:text-base">Mail support --</p>
                  <p className="font-semibold text-[#EBEBEB] text-sm sm:text-base break-all">office@marcorpindustries.com</p>
                </div>
                <div className='flex flex-row gap-1'> 
                  <p className="text-[#ABABAB] text-sm sm:text-base">Visit Us --</p>
                  <p className="font-semibold text-[#EBEBEB] text-sm sm:text-base">Newtown, Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Policies */}
      <div className="border-t border-[#383838]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-2 md:py-3 xl:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-4 text-xs sm:text-sm text-[#FFFFFF]">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Conditions</a>
              <span className="hidden md:block text-gray-600">•</span>
              <a href="#" className="hidden md:block hover:text-white transition-colors duration-200">Refund Policy</a>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-sm text-[#FFFFFF] text-center sm:text-left">
              Copyright © 2025 Marcorp Industries Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
