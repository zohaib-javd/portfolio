import Link from "next/link";
import Image from "next/image";
import profile from "@/app/Images/profile.jpg"

export default function Bodyelements() {
  return (
    <div className="container w-[1440px] h-[900px]  mx-auto flex">
      <div className="BodyContent w-[656px] h-[650px] mx-auto  mt-[106.82px] text-white flex flex-col justify-between">
        <div className="ImageCircle w-[213px] h-[213px] overflow-hidden cover bg-white  rounded-full mx-auto"><Image src={profile} alt="" className="w-[215px] h-auto mx-auto " ></Image></div>
        <h1 className="HeadingText text-[30px] text-center leading-[63.4px]">
          Hello, I am <br />
          <span className="text-[60px] font-bold">Zohaib Javed</span> <br />
          Frontend Developer & UX/UI Designer
        </h1>
        <p className="peragraphText text-center w-[656px]">
        I'm transitioning from a banking and service quality background to UI/UX Engineering, leveraging my expertise in customer-focused solutions. My goal is to craft intuitive, impactful digital experiences that enhance user satisfaction across banking and tech.
        </p>
        
          <div className="BodyButtons flex flex-row items-center justify-evenly mx-auto w-[417px] h-[64px]">
            <div className="button1 w-[195px] h-[64px] bg-white rounded-[50px] flex items-center justify-center cursor-pointer hover:bg-zinc-300  ">
              <Link
                href="https://www.linkedin.com/in/zohaib-javd/"
                className="text-black text-lg font-bold font-[Montserrat] "
              >
                Linkedin
              </Link>
            </div>
            <div className="button2 w-[195px] h-[64px] flex rounded-[50px] border-[2px] border-white items-center justify-center cursor-pointer hover:bg-white group ">
              <Link
                href="https://github.com/zohaib-javd"
                className="text-white text-lg font-bold font-['Montserrat'] group-hover:text-black"
              >
                Git Hub
              </Link>
            </div>
          </div>
        </div>
        <div>

        </div>
     
    </div>
  );
}
