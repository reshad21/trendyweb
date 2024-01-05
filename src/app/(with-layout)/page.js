import heroBg from "@/assets/bannerbg.png";
import heroImage from "@/assets/heroimage.svg";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  console.log(heroBg);
  return (
    <main style={{
      backgroundImage: `url(${heroBg.src})`,
      backgroundSize: "cover", // Optional: Adjust as per your needs
      backgroundPosition: "center", // Optional: Adjust as per your needs
      width: '100%',
      height: '100%',
    }}>
      <div className="relative mx-auto max-w-7xl p-6 lg:px-8 z-2">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 capitalize">You Speak And We Help You Execute It In Your Own Way!! Welcome To WebDev!</h1>
            <p className="text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque molestiae maiores dolor ducimus quos distinctio magnam praesentium sunt amet.</p>
            <div className="flex gap-2">
              <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ee0979] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold">Get Started</Link>
              <Link href="/" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ee0979] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold">Know More</Link>
            </div>
          </div>
          <Image src={heroImage} alt="banner image" width={725} height={819} />
        </div>
      </div>
    </main>
  )
}
