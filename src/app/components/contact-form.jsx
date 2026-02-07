"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import API from "@/api";
import ThankYouModal from "./thank-you-modal";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
    const productOptions = [
        "Automobile & Spare Parts",
        "Leather Goods",
        "Garment Materials",
        "Food & Snacks",
        "Others"
    ];

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            phone_number: "",
            country_code_string: "IN",
        }
    });

    const [buttonLoading, setButtonLoading] = useState(false);
    const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

    const onSubmit = async (data) => {
        setButtonLoading(true);
        try {
            const response = await API.contact.submitContactForm({
                full_name: data.full_name || "",
                business_email: data.business_email || "",
                phone_number: data.phone_number || "",
                country_code_string: data.country_code_string || "",
                select_product: data.select_product || "",
                message: data.message || ""
            });

            // Check if response exists and has success property
            if (response && response.success) {
                toast.success("Thank you for contacting us!");
                // Reset form to default values
                reset({
                    full_name: "",
                    business_email: "",
                    phone_number: "",
                    country_code_string: "IN",
                    select_product: "",
                    message: ""
                });
                setIsThankYouModalOpen(true);
            } else {
                toast.error(response?.message || "Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred while submitting the form");
        } finally {
            setButtonLoading(false);
        }
    };

    const handleModalClose = () => {
        setIsThankYouModalOpen(false);
    };

    return (
        <>
            <div className="relative flex items-center justify-center">
                <div className="relative z-10 w-full max-w-md mx-auto">
                    <div className="bg-[#FFFFFF1A] backdrop-blur-md rounded-2xl p-4 border border-[#FFFFFF] shadow-2xl">
                        <div className="mb-3">
                            <h3 className="text-white text-sm font-medium mb-2">Enter your details</h3>
                            <div className="h-px bg-white/30"></div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 font-inter">
                            {/* Full Name */}
                            <div>
                                <Input
                                    {...register("full_name", { required: "Name is required" })}
                                    placeholder="Full name"
                                    className="bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] placeholder:text-white text-sm shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.full_name && (
                                    <span className="text-red-500 text-xs">{errors.full_name.message}</span>
                                )}
                            </div>

                            {/* Business Email */}
                            <div>
                                <Input
                                    type="email"
                                    {...register("business_email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    placeholder="Business email"
                                    className="bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] placeholder:text-white text-sm shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {errors.business_email && (
                                    <span className="text-red-500 text-xs">{errors.business_email.message}</span>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={watch('phone_number')}
                                    onChange={(value) => {
                                        setValue('phone_number', value, { shouldValidate: true });
                                        const phoneNumber = parsePhoneNumber(value || '');
                                        if (phoneNumber) {
                                            setValue('country_code_string', phoneNumber.country, { shouldValidate: false });
                                        } else {
                                            setValue('country_code_string', '', { shouldValidate: false });
                                        }
                                    }}
                                    placeholder="Enter phone number"
                                    className="h-9 px-2 placeholder:text-black  bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-white text-sm w-full"
                                />
                                {errors.phone_number && (
                                    <span className="text-red-500 text-xs">{errors.phone_number.message}</span>
                                )}
                            </div>

                            {/* Hidden Country Code Field */}
                            <input type="hidden" {...register("country_code_string")} />

                            {/* Select Product */}
                            <div>
                                <Select
                                    onValueChange={(value) => setValue("select_product", value, { shouldValidate: true })}
                                >
                                    <SelectTrigger className="w-full px-4 py-2 text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 data-[placeholder]:text-white focus:border-transparent">
                                        <SelectValue className='' placeholder="Product Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {productOptions.map((item, index) => (
                                            <SelectItem key={index} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.select_product && (
                                    <span className="text-red-500 text-xs">{errors.select_product.message}</span>
                                )}
                            </div>

                            {/* Message */}
                            <textarea
                                {...register("message")}
                                rows={3}
                                className="w-full px-4 py-2 text-white text-sm bg-[#F9F9F942] border border-[#FFFFFF4D] rounded-[6px] placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Enter Message"
                            ></textarea>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-white text-[#121212] px-6 py-2 rounded-[6px] font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-sm"
                                disabled={buttonLoading}
                            >
                                {buttonLoading ? (
                                    <div className="flex items-center gap-1 text-sm">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </div>
                                ) : (
                                    "Submit"
                                )}
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </form>

                        <ThankYouModal
                            open={isThankYouModalOpen}
                            onOpenChange={handleModalClose}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
