"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import API from "@/api";
import ThankYouModal from "../thank-you-modal";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

export default function ContactUsForm() {
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
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            full_name: "",
            business_email: "",
            phone_number: "",
            country_code_string: "IN",
            select_product: "",
            message: ""
        }
    });

    const [buttonLoading, setButtonLoading] = useState(false);
    const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

    const onSubmit = async (data) => {
        setButtonLoading(true);
        try {
            const response = await API.contact.submitContactForm({
                full_name: data.full_name,
                business_email: data.business_email,
                phone_number: data.phone_number,
                country_code_string: data.country_code_string,
                select_product: data.select_product,
                message: data.message
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
            <div className="bg-white rounded-[20px] md:rounded-[30px] p-3 md:p-4 space-y-2 md:space-y-3">
                <h3 className="text-lg lg:text-2xl font-semibold text-gray-800">
                    Enter your details
                </h3>
                <div className='w-full bg-[#DDDDDD] h-[1px]'> </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:space-y-3">
                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                        <div className="space-y-1">
                            <label className="hidden md:block text-sm font-medium text-gray-700">Full name</label>
                            <Input
                                {...register("full_name", { required: "Full name is required" })}
                                placeholder="Full name"
                                className="h-9 md:h-10 text-base placeholder:text-sm placeholder:md:text-base"
                            />
                            {errors.full_name && <span className="text-red-500 text-xs">{errors.full_name.message}</span>}
                        </div>

                        <div className="space-y-1">
                            <label className="hidden md:block text-sm font-medium text-gray-700">Business email</label>
                            <Input
                                {...register("business_email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                placeholder="Business email"
                                className="h-9 md:h-10 text-base placeholder:text-sm placeholder:md:text-base"
                            />
                            {errors.business_email && <span className="text-red-500 text-xs">{errors.business_email.message}</span>}
                        </div>
                    </div>

                    {/* Phone Number with Country Code Selector */}
                    <div className="space-y-1">
                        <label className="hidden md:block text-sm font-medium text-gray-700">Phone number</label>
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={watch("phone_number")}
                            onChange={(value) => {
                                setValue("phone_number", value, { shouldValidate: true });
                                const phoneNumber = parsePhoneNumber(value || '');
                                if (phoneNumber) {
                                    setValue("country_code_string", phoneNumber.country, { shouldValidate: false });
                                } else {
                                    setValue("country_code_string", '', { shouldValidate: false });
                                }
                            }}
                            className="h-9 md:h-10 px-3 text-base placeholder:text-sm placeholder:md:text-base border text-black border-gray-300 rounded-md w-full bg-white"
                            countrySelectProps={{
                                className: "country-select-dropdown"
                            }}
                        />
                        {errors.phone_number && <span className="text-red-500 text-xs">{errors.phone_number.message}</span>}
                    </div>

                    {/* Hidden Field for Country Code */}
                    <input type="hidden" {...register("country_code_string")} />

                    {/* Product Type Selector */}
                    <div className="space-y-1">
                        <label className="hidden md:block text-sm font-medium text-gray-700">Select Type</label>
                        <Select
                            onValueChange={(value) => setValue("select_product", value, { shouldValidate: true })}
                        >
                            <SelectTrigger className="h-9 md:h-10 text-base w-full">
                                <SelectValue placeholder="Product Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {productOptions.map((item, index) => (
                                    <SelectItem key={index} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.select_product && <span className="text-red-500 text-xs">{errors.select_product.message}</span>}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1">
                        <label className="hidden md:block text-sm font-medium text-gray-700">Enter Message</label>
                        <textarea
                            {...register("message")}
                            rows={3}
                            placeholder="Message"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full h-9 md:h-10 bg-[#121212] hover:bg-gray-800 text-white font-medium text-base"
                        disabled={buttonLoading}
                    >
                        {buttonLoading ? "Submitting..." : "Submit"}
                        <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                </form>
            </div>

            {/* Thank You Modal */}
            <ThankYouModal
                open={isThankYouModalOpen}
                onOpenChange={handleModalClose}
            />
        </>
    );
}
