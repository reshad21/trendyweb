
const ContactUsForm = () => {
    return (
        <>
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
                            <option value="DEFAULT">Select</option>
                            <option value="website">Website</option>
                            <option value="seo">SEO</option>
                            <option value="smm">SMM</option>
                            <option value="paidcampaign">Paid Campaign</option>
                            <option value="other">Other</option>
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
        </>
    );
};

export default ContactUsForm;