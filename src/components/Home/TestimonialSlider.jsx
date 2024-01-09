'use client'
import { BiSolidQuoteAltRight } from "react-icons/bi";
// Import Swiper React components
import clientImage from "@/assets/client1.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// all slider image
// Nextjs image style
const imageStyle = {
    borderRadius: '50%',
    width: "100px",
    height: "100px",
    objectFit: "cover",
};

const sliderStyle = {
    boxShadow: "0px 16px 20px 0px #00000030",
    borderRadius: "2%"
}
const TestimonialSlider = () => {
    return (
        <div className="w-[50%]">
            <Swiper className="testimonialSwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Autoplay, Pagination, Navigation]}
                style={sliderStyle}
            >
                <SwiperSlide>
                    <div className="px-5 py-10 relative">
                        <p className="text-slate-500 mb-10">"We have a great business relationship with WebSpider. We had worked with several other marketing companies in the past who did not deliver results and I am happy to say WebSpider is doing that for us. They help bring our vision to life in a way that makes sense"  </p>
                        <div className="flex gap-2 items-center">
                            <Image src={clientImage} style={imageStyle} alt="testimonial" />
                            <span className="text-slate-800 font-bold">John Dow</span>
                        </div>
                        <span className="text-orange-200 absolute bottom-5 right-5"><BiSolidQuoteAltRight size={160} /></span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-5 py-10 relative">
                        <p className="text-slate-500 mb-10">"It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!"  </p>
                        <div className="flex gap-2 items-center">
                            <Image src={clientImage} style={imageStyle} alt="testimonial" />
                            <span className="text-slate-800 font-bold">John Dow</span>
                        </div>
                        <span className="text-orange-200 absolute bottom-5 right-5"><BiSolidQuoteAltRight size={160} /></span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-5 py-10 relative">
                        <p className="text-slate-500 mb-10">"WebSpider has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend WebSpider to any business that needs a hand improving their internet traffic or their business."  </p>
                        <div className="flex gap-2 items-center">
                            <Image src={clientImage} style={imageStyle} alt="testimonial" />
                            <span className="text-slate-800 font-bold">John Dow</span>
                        </div>
                        <span className="text-orange-200 absolute bottom-5 right-5"><BiSolidQuoteAltRight size={160} /></span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-5 py-10 relative">
                        <p className="text-slate-500 mb-10">"Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field"  </p>
                        <div className="flex gap-2 items-center">
                            <Image src={clientImage} style={imageStyle} alt="testimonial" />
                            <span className="text-slate-800 font-bold">John Dow</span>
                        </div>
                        <span className="text-orange-200 absolute bottom-5 right-5"><BiSolidQuoteAltRight size={160} /></span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;