// src/pages/about.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-2 text-center">
        <h1 className="font-[Raleway] text-3xl md:text-4xl font-bold text-[#EBE4D5]">
          About Me
        </h1>
        <p className="font-[Poppins] text-lg md:text-xl text-[#B36A62] mt-4">
          My Coding Motto: "Code is like humour. If you have to explain it, it’s
          bad."
        </p>
      </div>

      {/* Personal Introduction */}
      <section className="mb-6">
        <p className="font-[Overpass] text-[#EBE4D5] leading-relaxed text-center">
          I’m a full-stack software engineer specialising in the MERN stack. I
          thrive on creating clean, functional, and modern web applications that
          deliver seamless user experiences. With a focus on creativity and
          clarity, I’m passionate about crafting solutions that simplify complex
          problems, all while keeping things efficient and scalable. Beyond
          coding, I’m driven by a commitment to continuous learning and
          expanding my skillset.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "HTML", logo: "/html-icon.png" },
            { name: "CSS", logo: "/css-icon.png" },
            { name: "JavaScript", logo: "/js-icon.png" },
            { name: "React", logo: "/react-icon.png" },
            { name: "Node.js", logo: "/node-icon.png" },
            { name: "Express", logo: "/express-icon.png" },
            { name: "Liquid", logo: "/liquid-icon.png" },
            { name: "MongoDB", logo: "/mongo-icon.png" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-[#1D1E25] rounded-md p-2 flex flex-col items-center"
            >
              <Image
                src={skill.logo}
                alt={`${skill.name} Logo`}
                width={48}
                height={48}
                className="mb-4 object-contain"
              />
              <p className="font-[Poppins] text-[#EBE4D5] font-bold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies and Interests */}
      <section>
        <h2 className="font-[Poppins] text-1xl md:text-2xl font-bold text-[#B36A62] mb-2 text-center">
          Hobbies & Interests
        </h2>
        <p className="font-[Overpass] text-[#EBE4D5] text-center leading-relaxed mb-4">
          When I’m not busy building web applications or working on freelance
          projects, you’ll find me exploring my hobbies and passions. Gaming
          fuels my competitive side, while cooking and baking let me channel
          creativity into something delicious. And, of course, hitting the gym
          is my way of staying balanced and motivated.
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
            <span className="text-3xl">🎮</span>
            <p className="font-[Poppins] text-[#EBE4D5] mt-2 text-sm">Gaming</p>
          </div>
          <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
            <span className="text-3xl">🍳</span>
            <p className="font-[Poppins] text-[#EBE4D5] mt-2 text-sm">
              Cooking/Baking
            </p>
          </div>
          <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
            <span className="text-3xl">🏋️‍♂️</span>
            <p className="font-[Poppins] text-[#EBE4D5] mt-2 text-sm">
              Hitting the Gym
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
