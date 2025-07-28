import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Certifications", href: "#" },
    { name: "Why Us", href: "#" }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">

          {/* Company Info & Newsletter */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Marcorp Industries</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Join thousands of businesses trading across borders with ease. Secure transactions, reliable logistics, and a hassle-free experience.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 mb-6 lg:mb-8">
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

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <h4 className="font-semibold text-base sm:text-lg">Join our newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-700 placeholder:text-[#7B7B7B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 sm:px-6 py-2 bg-[#F3EEFF] text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links and Contact Section */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              <div className="sm:col-span-2 lg:col-span-1">
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
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Policies */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Conditions</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Refund Policy</a>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              Copyright © 2025 Marcorp Industries Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
