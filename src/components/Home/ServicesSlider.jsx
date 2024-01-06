'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
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
    // borderRadius: '10%',
    width: "100%",
    height: "400px",
    objectFit: "cover",
};

const ServicesSlider = () => {
    return (
        <div className="w-[50%]">
            <Swiper className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className="relative w-full before:absolute before:h-full before:w-full before:bg-green-100 before:z-[-1] before:rounded-xl">
                        <Image src={digitalmarketing} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4 border border-slate-200 rounded-lg shadow-2xl">Digital Marketing</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full before:absolute before:h-full before:w-full before:bg-blue-100 before:z-[-1] before:rounded-xl">
                        <Image src={websiteoptimization} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4 border border-slate-200 rounded-lg shadow-2xl">Website Optimization</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full before:absolute before:h-full before:w-full before:bg-pink-100 before:z-[-1] before:rounded-xl">
                        <Image src={websitedevelopment} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4 border border-slate-200 rounded-lg shadow-2xl">Website Development</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full before:absolute before:h-full before:w-full before:bg-yellow-100 before:z-[-1] before:rounded-xl">
                        <Image src={smoservices} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4 border border-slate-200 rounded-lg shadow-2xl">SMO Services</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full before:absolute before:h-full before:w-full before:bg-rose-100 before:z-[-1] before:rounded-xl">
                        <Image src={seoservices} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4 border border-slate-200 rounded-lg shadow-2xl">SEO Services</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full before:absolute before:h-full before:w-full before:bg-slate-100 before:z-[-1] before:rounded-xl">
                        <Image src={ppcservices} style={imageStyle} alt="service images" />
                        <h2 className="text-center bg-white text-slate-800 font-bold text-xl py-4 border border-slate-200 rounded-lg shadow-2xl">PPC Services</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ServicesSlider;