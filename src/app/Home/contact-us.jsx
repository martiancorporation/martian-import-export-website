
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import ContactUsForm from "../components/common/contact-us-form";

export default function ContactUs() {

  return (
    <>
      <section id="contact" className="w-full relative flex items-center justify-center px-4 md:px-10 xl:px-12 py-6 md:py-8 xl:py-10 mx-auto">
        <div className="absolute h-full w-full inset-0 bg-[url('/assets/image/contactUs/contact_us_bg.png')] "></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto bg-[#FFFFFF42] backdrop-blur-md border border-[#FFFFFF66] rounded-[20px] md:rounded-[30px] overflow-hidden">
          <div className="grid lg:grid-cols-2 p-2 md:p-6 gap-6">
            {/* Left Section */}
            <div className="text-white flex flex-col gap-6">
              <div className="space-y-4">
                <h2 className="text-lg lg:text-2xl font-semibold ">Contact Us</h2>
                <div className='w-full bg-[#FFFFFF33] h-[1px]'> </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-normal text-sm">Call support</p>
                      <p className="font-medium text-base md:text-lg text-white">
                        +91-8585074646
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-normal text-sm">Mail support</p>
                      <p className="font-medium text-base md:text-lg text-white">
                        office@marcorpindustries.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-normal text-sm">Visit Us</p>
                      <p className="font-medium text-base md:text-lg text-white">
                        Newtown, Kolkata, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/918585074646" target="_blank" rel="noopener noreferrer">

                <Button
                  className="md:w-[80%] bg-[#00B10C] border border-[#DDDDDD] md:border-none md:bg-white w-full flex items-center justify-center md:justify-between text-[#232323] hover:bg-gray-100 font-semibold py-3 px-4"

                >
                  <p className="hidden md:block">Contact Directly on WhatsApp</p>
                  <Image
                    src="/assets/image/contactUs/whatsapp_logo.svg"
                    alt="Whatsapp"
                    className="hidden md:block w-auto h-6"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/assets/image/contactUs/whatsapp_logo_two.svg"
                    alt="Whatsapp"
                    className="md:hidden w-auto h-6"
                    width={100}
                    height={100}
                  />
                </Button>

              </a>

            </div>

            {/* Right Section - Contact Form */}
            <ContactUsForm />
          </div>
        </div>
      </section>


    </>
  );
}
