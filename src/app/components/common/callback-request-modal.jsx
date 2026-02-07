
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import API from "@/api";
import ThankYouModal from "../thank-you-modal";
import { ArrowRight } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function CallbackRequestModal() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            phone: "",
            country_code: "IN"
        }
    });

    const [buttonLoading, setButtonLoading] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit = async (data) => {
        setButtonLoading(true);
        try {
            const response = await API.callback.submitCallbackRequest({
                phone: data.phone,
                country_code: data.country_code
            });
            if (response?.status === 200) {
                setDialogOpen(false);
                setShowThankYou(true);
                reset();
                setTimeout(() => {
                    setShowThankYou(false);
                }, 2000);
            } else {
                toast.error(response.message || "Failed to submit request");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred while submitting the request");
        } finally {
            setButtonLoading(false);
        }
    };

    return (
        <>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="icon" className="w-full rounded-[10px] bg-[#FFFFFF] font-semibold cursor-pointer text-[#000000] md:w-[200px] py-2">
                        Call Back Request
                        <ArrowRight className="hidden md:block" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Callback Request</DialogTitle>
                        <DialogDescription>
                            Enter your phone number and country code. We'll call you back soon.
                        </DialogDescription>
                    </DialogHeader>
                    {buttonLoading ? (
                        <div className="flex justify-center items-center py-8">
                            <span className="loader" />
                            <span className="ml-2">Submitting...</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="phone">Phone number</Label>
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={watch("phone")}
                                    onChange={(value) => {
                                        setValue("phone", value, { shouldValidate: true });
                                        const phoneNumber = parsePhoneNumber(value || '');
                                        if (phoneNumber) {
                                            setValue("country_code", phoneNumber.country, { shouldValidate: false });
                                        } else {
                                            setValue("country_code", '', { shouldValidate: false });
                                        }
                                    }}
                                    className="h-10 px-3 text-base border text-black border-gray-300 rounded-md w-full bg-white"
                                    countrySelectProps={{
                                        className: "country-select-dropdown"
                                    }}
                                />
                                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                            </div>
                            <input type="hidden" {...register("country_code")} />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline" type="button">Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={buttonLoading}>
                                    Submit
                                    <ArrowRight className="w-5 h-5 ml-1" />
                                </Button>
                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
            {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
                        <p className="mb-4">Callback request created successfully.</p>
                    </div>
                </div>
            )}
        </>
    );
}
