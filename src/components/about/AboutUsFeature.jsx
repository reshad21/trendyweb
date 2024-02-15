import aboutUsImg from '@/assets/About-ani-img.webp';
import Image from 'next/image';

const imageStyle = {
    border: '1px solid #fff',
    height: "auto"
}

const moonShapeStyle = {
    width: "40px !important",
    height: "40px !important",
    backgroundColor: "transparent",
    // boxShadow: "5px 4px 0px orange, inset 0 0 10px 5px linear-gradient(to bottom, #ffbb00, #ff8800)",
    boxShadow: "5px 4px 0px #FF5722 ",
    borderRadius: "50%"
}

const features = [
    {
        title: "Link Building",
        description: "To represent all the aspects of your product, you need to keep designing it in different ways according to the demands of time and customers."
    },
    {
        title: "Monthly SEO Task",
        description: "Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them."
    },
    {
        title: "On Page SEO",
        description: "A website is the essence and the personality of the company, and unlike humans, this personality can change and can very profitably affect people around the world."
    }
]

const AboutUsFeature = () => {
    return (
        <div className="">
            <div className='max-w-7xl mx-auto p-4 md:px-8'>
                <div className="flex md:flex-row flex-col gap-2 items-center">
                    <div>
                        <h1 className="font-bold text-3xl">Our Best <span className="text-orange-500">Features</span></h1>
                        <div className="flex flex-col">
                            <div className="my-2 md:my-2">
                                {
                                    features.map((feature => (
                                        <div key={feature.title} className="relative shadow-xl py-10 pl-28 pr-3">
                                            <div style={moonShapeStyle} className='animate-spin absolute top-[37px] left-[40px]'></div>
                                            <h2 className='mb-5 font-bold'>{feature.title}</h2>
                                            <p>{feature.description}</p>
                                        </div>)))
                                }

                            </div>
                        </div>
                    </div>
                    <Image alt='explore section bg' src={aboutUsImg} style={imageStyle} className="w-full md:w-1/2 object-fill" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsFeature;
