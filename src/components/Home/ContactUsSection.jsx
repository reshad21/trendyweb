import contactUsImage from "@/assets/Contact-get-tuch.webp";
import Image from "next/image";
import { FaPhoneSquareAlt, FaRegEnvelope } from "react-icons/fa";
const ContactUsSection = () => {
    return (
        <div className='py-32'>
            <div className="max-w-7xl mx-auto p-6 lg:px-8">
                <div className="flex md:flex-row flex-col">
                    <Image src={contactUsImage} width={676} height={465} />
                    <div className="">
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
                        <form action="">
                            <div className="flex gap-3 mb-2">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-[11px] md:text-[14]">Full Name</span>
                                    </div>
                                    <input type="text" placeholder="" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-[11px] md:text-[14]">Email Address</span>
                                    </div>
                                    <input type="text" placeholder="" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="flex gap-3 mb-2">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-[11px] md:text-[14]">Number</span>
                                    </div>
                                    <input type="text" placeholder="" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-[11px] md:text-[14]">What are your requirements?</span>
                                    </div>
                                    <select className="select select-bordered w-full">
                                        <option disabled selected>Select</option>
                                        <option>Website</option>
                                        <option>SEO</option>
                                        <option>SMM</option>
                                        <option>Paid Campaign</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex gap-3 mb-6">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-[11px] md:text-[14]">Message</span>
                                    </div>
                                    <textarea className="textarea textarea-bordered" placeholder=""></textarea>
                                </label>
                            </div>
                            <div className="">
                                <button className="bg-indigo-700 text-white text-sm py-3 px-4 rounded-md">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;