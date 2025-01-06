import Link from "next/link";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="flex justify-center items-center min-h-screen bg-[#3E4150]">
        <div className="bg-[#2C2E39] w-full max-w-4xl flex flex-col rounded shadow-md">
          {/* HEADER */}
          <header className="bg-[#1D1E25] px-8 py-4 flex items-center justify-between h-20">
            <Link
              href="/"
              className="font-[Orbitron] text-[#66A2B2] text-2xl hover:opacity-80 transition-opacity"
            >
              KA.
            </Link>
            <nav className="flex space-x-6 font-[Overpass]">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link
                href="/works"
                className="hover:opacity-80 transition-opacity"
              >
                Works
              </Link>
            </nav>
          </header>

          {/* MAIN CONTENT */}
          <main className="p-12">
            {/* Hero Section */}
            <div className="mb-2 text-center">
              <h1 className="font-[Raleway] text-3xl md:text-4xl font-bold text-[#EBE4D5]">
                About Me
              </h1>
              <p className="font-[Poppins] text-lg md:text-xl text-[#B36A62] mt-4">
                My Coding Motto: &quot;Code is like humour. If you have to
                explain it, it’s bad.&quot;
              </p>
            </div>

            {/* Personal Introduction */}
            <section className="mb-6">
              <p className="font-[Overpass] text-[#EBE4D5] leading-relaxed text-center">
                I’m a full-stack software enginner specialising in the MERN stack. 
                I thrive on creating clean, functional, and modern web
                applications that deliver seamless user experiences. With a
                focus on creativity and clarity, I’m passionate about crafting
                solutions that simplify complex problems, all while keeping
                things efficient and scalable. Beyond coding, I’m driven by a
                commitment to continuous learning and expanding my skillset.
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
                  {
                    name: "Node.js",
                    logo: "/node-icon.png",
                    extraClass: "scale-node",
                  },
                  { name: "Express", logo: "/express-icon.png" },
                  { name: "Liquid", logo: "/liquid-icon.png" },
                  { name: "MongoDB", logo: "/mongo-icon.png" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#1D1E25] rounded-md p-2 flex flex-col items-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} Logo`}
                      className={
                        'w-12 h-12 mb-4 object-contain ${skill.extraClass || ""'
                      }
                    />
                    <p className="font-[Poppins] text-[#EBE4D5] font-bold">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hobbies and Interests Section */}
            <section>
              <h2 className="font-[Poppins] text-1xl md:text-2xl font-bold text-[#B36A62] mb-2 text-center">
                Hobbies & Interests
              </h2>
              <p className="font-[Overpass] text-[#EBE4D5] text-center leading-relaxed mb-4">
                When I’m not busy building web applications or working on
                freelance projects, you’ll find me exploring my hobbies and
                passions. Gaming fuels my competitive side, while cooking and
                baking let me channel creativity into something delicious. And,
                of course, hitting the gym is my way of staying balanced and
                motivated.
              </p>
              {/* Hobby Boxes */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
                  <span className="text-3xl">🎮</span>
                  <p className="font-[Poppins] text-[#EBE4D5] mt-2 text-sm">
                    Gaming
                  </p>
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
          </main>

          {/* FOOTER */}
          <footer className="bg-[#1D1E25] px-8 py-4 flex flex-col md:flex-row md:items-center justify-between h-20">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a
                href="https://github.com/Karrar2k"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/github-icon.svg"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/karrar-almayali-5b2740234/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="invert"
                />
              </a>
            </div>
            <div className="flex-1 text-center mb-0 md:mb-0 mt-auto">
              <p className="text-sm font-[Overpass]">
                &copy; Designed & Built by Yours Truly
              </p>
            </div>
            <Link
              href="/"
              className="font-[Orbitron] text-[#66A2B2] text-xl hover:opacity-80 transition-opacity"
            >
              KA.
            </Link>
          </footer>
        </div>
      </div>
    </LayoutWrapper>
  );
}
