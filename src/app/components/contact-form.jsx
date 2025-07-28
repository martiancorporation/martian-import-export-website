"use client"

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const ContactForm = () => {
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
        <div className="relative  flex items-center justify-center  ">

            {/* Contact Form Container */}
            <div className="relative z-10 w-full max-w-md mx-auto">
                <div className="bg-[#FFFFFF1A] backdrop-blur-md rounded-2xl p-4 border border-[#FFFFFF] shadow-2xl">
                    {/* Heading with separator line */}
                    <div className="mb-3">
                        <h3 className="text-white text-sm font-medium mb-2">Enter you details</h3>
                        <div className="h-px bg-white/30"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 text-white">
                        {/* Full Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                className="w-full px-4 py-2  text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-gray-800 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Business Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Business email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full px-4 py-2  text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-gray-800 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Phone Number with Country Code */}
                        <div className="flex gap-2">
                            <select
                                value={formData.phoneCode}
                                onChange={(e) => handleInputChange('phoneCode', e.target.value)}
                                className="px-4 py-2  text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.code}
                                    </option>
                                ))}
                            </select>
                            <div className="w-px bg-gray-300/50"></div>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                value={formData.phoneNumber}
                                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                className="flex-1 px-4 py-2  text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-gray-800 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Type Dropdown */}
                        <div>
                            <select
                                value={formData.type}
                                onChange={(e) => handleInputChange('type', e.target.value)}
                                className="w-full px-4 py-2  text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            >
                                <option value="" className='text-white'>Type</option>
                                {contactTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <textarea
                                placeholder="Enter Message"
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                rows="4"
                                className="w-full px-4 py-2  text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-gray-800 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-white text-[#121212] px-6 py-2 rounded-[6px] font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-sm"
                        >
                            <span>Submit</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm