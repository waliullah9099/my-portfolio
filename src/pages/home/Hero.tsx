/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(https://i.ibb.co/r6jnSnP/banner.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {" "}
        <div className="flex justify-between text-white bg-opacity-40 relative">
          {" "}
          <div className="mt-[12%] relative">
            {" "}
            <h1 className="text-2xl font-bold mb-1">Hello I'm MD Waliullah</h1>
            <h2 className="text-4xl font-bold">
              Junior <span className="text-primary">FRONT END</span> Developer
            </h2>
            <p className="w-[500px] text-xl text-justify my-4">
              I m a self-learner person. I am constantly gaining new skills in
              web development. By which I can give some good benefit to your
              Team. Besides, I am a hard-working and creative person
            </p>
            <a
              download="waliullah's resume"
              href="https://drive.google.com/file/d/1_HU4GrR4yI7dC-x_2b6iPLSTzmvr9Nce/view?usp=sharing"
            >
              <button className="btn">Download Resume</button>
            </a>
          </div>
          <Image
            className=" h-[593px]"
            src="https://i.ibb.co/sJz1XBH/Man-PNG-Free-Download.png"
            height={400}
            width={400}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
