import contactUsImage from "@/assets/Contact-get-tuch.webp";
import Image from "next/image";
import { FaPhoneSquareAlt, FaRegEnvelope } from "react-icons/fa";
import ContactUsForm from "./ContactUsForm";
const ContactUsSection = () => {
    return (
        <div className='py-32'>
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex md:flex-row flex-col">
                    <Image src={contactUsImage} className="w-full md:w-[676] h-auto object-fill" />
                    <div className="mt-10 md:mt-0">
                        <h1 className="text-3xl font-bold mb-4">Get In <span className="text-orange-400">Touch</span></h1>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1">
                                <span className="text-green-500"><FaPhoneSquareAlt /></span>
                                <span className="text-[13px] text-slate-500">+91-1234567890</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-rose-600"><FaRegEnvelope /></span>
                                <span className="text-[13px] text-slate-500">info@WebSpider.com</span>
                            </div>
                        </div>
                        <ContactUsForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;