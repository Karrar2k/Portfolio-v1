import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#3E4150] flex-shrink-0">
      <div className="bg-[#2C2E39] w-full max-w-4xl flex flex-col rounded shadow-md overflow-hidden">
        {/* HEADER */}
        <header className="bg-[#1D1E25] px-8 py-4 flex items-center justify-between">
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
            <Link href="/works" className="hover:opacity-80 transition-opacity">
              Works
            </Link>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="p-12">
          {/* Hero Section */}
          <div className="mb-0 text-center">
            <h1 className="font-[Raleway] text-3xl md:text-4xl font-bold text-[#EBE4D5]">
              About Me
            </h1>
            <p className="font-[Poppins] text-lg md:text-xl text-[#B36A62] mt-4">
              A little insight about me.
            </p>
          </div>

          {/* Personal Introduction */}
          <section className="mb-12">
            <p className="font-[Overpass] text-[#EBE4D5] leading-relaxed text-center">
              I thrive on crafting clean and creative solutions. Beyond the
              code, I believe in continuous learning, building meaningful
              things, and making life a little simpler—one line of code at a
              time.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="font-[Poppins] text-2xl md:text-3xl font-bold text-[#B36A62] mb-4 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "HTML", rating: 3 },
                { name: "CSS", rating: 3 },
                { name: "JavaScript", rating: 3 },
                { name: "React", rating: 4 },
                { name: "Node.js", rating: 3 },
                { name: "Express", rating: 2 },
                { name: "Git", rating: 3 },
                { name: "MongoDB", rating: 4 },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center"
                >
                  <p className="font-[Poppins] text-[#EBE4D5] font-bold mb-2">
                    {skill.name}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full mr-1 ${
                          i < skill.rating ? "bg-[#66A2B2]" : "bg-[#3E4150]"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Section */}
          <section>
            <h2 className="font-[Poppins] text-1xl md:text-2xl font-bold text-[#B36A62] mb-6 text-center">
              Hobbies / Interests
            </h2>
            {/* Inspirational Quote */}
            <div className="mb-8 text-center">
              <p className="font-[Overpass] text-[#EBE4D5] italic leading-relaxed">
                "Code is like humour. If you have to explain it, its bad"
              </p>
              <p className="font-[Overpass] text-[#EBE4D5]">
                Favorite Setup: VS Code with Prettier.
              </p>
            </div>

            {/* Hobbies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
                <span className="text-4xl">🎮</span>
                <p className="font-[Poppins] text-[#EBE4D5] mt-2">Gaming</p>
              </div>
              <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
                <span className="text-4xl">🍳</span>
                <p className="font-[Poppins] text-[#EBE4D5] mt-2">
                  Cooking/Baking
                </p>
              </div>
              <div className="bg-[#1D1E25] rounded-md p-4 flex flex-col items-center">
                <span className="text-4xl">🏋️‍♂️</span>
                <p className="font-[Poppins] text-[#EBE4D5] mt-2">
                  Hitting the Gym
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1D1E25] px-8 py-4 flex flex-col md:flex-row md:items-center justify-between h-24">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a
              href="https://github.com/your-github"
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
              href="https://linkedin.com/in/your-linkedin"
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
          <p className="text-sm font-[Overpass] mb-0 md:mb-0 mt-auto">
            &copy; 2024 Karrar Almayali – All Rights Reserved
          </p>
          <Link
            href="/"
            className="font-[Orbitron] text-[#66A2B2] text-xl hover:opacity-80 transition-opacity"
          >
            KA.
          </Link>
        </footer>
      </div>
    </div>
  );
}
