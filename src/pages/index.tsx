
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="grid-cols-1 md:grid-cols-2 mb-16 ml-16 mt-4">
        <div>
          <h1 className="hero-heading font-[Raleway] text-8xl font-bold text-[#EBE4D5]">
            I’m Karrar Almayali
          </h1>
        </div>

        <div className="flex items-end justify-end mr-16">
          <p className="hero-subtitle font-[Poppins] text-xl md:text-2xl lg:text-x1 text-left leading-tight w-46 md:w-56">
            <span className="text-[#B36A62]">
              Software Engineer dedicated to solving problems with
            </span>{" "}
            <span className="text-[#66A2B2]">creativity and clarity.</span>
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
        <div>
          <h2 className="font-[Poppins] text-2xl md:text-3xl font-semibold text-[#B36A62] mb-4">
            Let me introduce myself.
          </h2>
          <p className="font-[Overpass] mb-4 leading-relaxed text-[#EBE4D5]">
            Hey, I’m Karrar, a Software Engineer with a knack for solving
            problems—preferably before they become{" "}
            <em className="text-[#66A2B2]">big problems.</em> I focus on
            building practical solutions that make things run smoothly, and I’m
            happy to put in the hours to get it right.
          </p>
          <p className="font-[Overpass] leading-relaxed text-[#EBE4D5]">
            I’m{" "}
            <em className="text-[#66A2B2]">
              always learning, always improving,
            </em>{" "}
            and I’m committed to making each project better than the last.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-[#EBE4D5] rounded-md p-4 w-96 h-64 flex items-center justify-center">
            <Image
              src="/karrar-profile.png"
              alt="Karrar Almayali"
              width={222}
              height={200}
              className="rounded"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
