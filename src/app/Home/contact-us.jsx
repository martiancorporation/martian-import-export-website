"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    type: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
  ]

  const contactTypes = [
    'Import Inquiry',
    'Export Inquiry',
    'General Inquiry',
    'Partnership',
    'Support',
    'Other'
  ]

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-10 px-4">
      {/* Background with shipping containers */}
      <div className="absolute h-full w-full inset-0 bg-[url('/assets/image/contactUs/contact_us_bg.png')] "></div>



      {/* Contact Us Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-[#FFFFFF42] backdrop-blur-md border border-[#FFFFFF66] rounded-[30px] overflow-hidden">
        <div className="grid lg:grid-cols-2  p-6 gap-6">

          {/* Left Section - Contact Information */}
          <div className=" text-white  flex flex-col gap-6">
            <div className='space-y-4'>
              <h2 className="text-lg lg:text-2xl font-semibold ">Contact Us</h2>

              <div className="space-y-6">
                {/* Call Support */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-normal text-sm">Call support</p>
                    <p className="font-medium text-lg text-white">+91-8585074646</p>
                  </div>
                </div>

                {/* Mail Support */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-normal text-sm">Mail support</p>
                    <p className="font-medium text-lg text-white">office@marcorpindustries.com</p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-normal text-sm">Visit Us</p>
                    <p className="font-medium text-lg text-white">Newtown, Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button
              className="w-[80%] bg-white flex items-center justify-between text-[#232323] hover:bg-gray-100 font-semibold py-3 px-4"
              onClick={() => window.open('https://wa.me/918585074646', '_blank')}
            >

              <p>Contact Directly on WhatsApp</p>
              <Image src="/assets/image/contactUs/whatsapp_logo.svg" alt="Whatsapp" className='w-auto h-6' width={100} height={100} />
            </Button>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-[30px] p-4 space-y-3">
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 ">Enter your details</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* First Row - Full Name and Business Email */}
              <div className="grid grid-cols-2 gap-3">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full name</label>
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="h-10 text-base"
                    required
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Business email</label>
                  <Input
                    type="email"
                    placeholder="Business email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-10 text-base"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Phone Number and Select Type */}
              <div className="grid grid-cols-2 gap-3">
                {/* Phone Number with Country Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone number</label>
                  <div className="flex gap-1">
                    <Select value={formData.phoneCode} onValueChange={(value) => handleInputChange('phoneCode', value)}>
                      <SelectTrigger className="w-20 h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="h-9 text-base flex-1"
                      required
                    />
                  </div>
                </div>

                {/* Select Type */}
                <div className="w-full space-y-2">
                  <label className="text-sm font-medium text-gray-700">Select Type</label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                    <SelectTrigger className="h-10 text-base w-full">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Third Row - Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Enter Message</label>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Fourth Row - Submit Button */}
              <Button
                type="submit"
                className="w-full h-10 bg-[#121212] hover:bg-gray-800 text-white font-medium text-base"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
