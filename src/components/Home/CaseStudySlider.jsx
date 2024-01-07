'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
// all slider image
import digitalmarketing from "@/assets/digitalmarketing.webp";
import ppcservices from "@/assets/ppcservices.webp";
import seoservices from "@/assets/seoservices.webp";
import smoservices from "@/assets/smoservices.webp";
import websitedevelopment from "@/assets/websitedevelopment.webp";
import websiteoptimization from "@/assets/websiteoptimization.webp";
import Image from "next/image";
// Nextjs image style
const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    // border-2 border-slate-300 rounded-lg: "1px solid gray"
};

const sliderStyle = {
    padding: "40px 0px"
    // boxShadow: "0px 16px 20px 0px #00000030",
    // border-2 border-slate-300 rounded-lgRadius: "2%"
}

const CaseStudySlider = () => {
    return (
        <div className="w-[50%]">
            <Swiper className="caseStudySwiper"
                slidesPerView={2}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                style={sliderStyle}
            >
                <SwiperSlide>
                    <div className="border-2 border-slate-300 rounded-lg shadow-xl">
                        <Image src={digitalmarketing} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4">Digital Marketing</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-slate-300 rounded-lg shadow-xl">
                        <Image src={websiteoptimization} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4">Website Optimization</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-slate-300 rounded-lg shadow-xl">
                        <Image src={websitedevelopment} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4">Website Development</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-slate-300 rounded-lg shadow-xl">
                        <Image src={smoservices} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4">SMO Services</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-slate-300 rounded-lg shadow-xl">
                        <Image src={seoservices} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4">SEO Services</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 border-slate-300 rounded-lg shadow-xl">
                        <Image src={ppcservices} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4">PPC Services</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CaseStudySlider;