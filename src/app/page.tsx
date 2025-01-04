import Image from "next/image";
import Link from "next/link";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="flex justify-center items-center min-h-screen bg-[#3E4150]">
        <div className="bg-[#2C2E39] w-full max-w-4xl flex flex-col rounded shadow-md overflow-hidden">
          {/* HEADER */}
          <header className="bg-[#1D1E25] px-8 py-4 flex items-center justify-between h-24">
            {/* Logo */}

            <Link
              href="/"
              className="font-[Orbitron] text-[#66A2B2] text-2xl hover:opacity-80 transition-opacity"
            >
              KA.
            </Link>
            <nav className="flex space-x-6 font-[Overpass]">
              <Link
                href="/works"
                className="hover:opacity-80 transition-opacity"
              >
                Works
              </Link>
              <Link
                href="/about"
                className="hover:opacity-80 transition-opacity"
              >
                About
              </Link>
            </nav>
          </header>
          {/* MAIN CONTENT */}
          <main className="p-12">
            {/* HERO */}

            <div className="flex grid-cols-1 md:grid-cols-2 mb-32">
              {/* Left: Big heading */}
              <div>
                <h1 className="hero-heading font-[Raleway] text-8xl !text-8x1 font-bold text-[#EBE4D5]">
                  I’m Karrar Almayali
                </h1>
              </div>

              {/* Right: Subtitle */}
              <div className="flex items-end justify-end">
                <p className="hero-subtitle font-[Poppins] text-xl md:text-2xl lg:text-xl text-right leading-tight w-46 md:w-56">
                  <span className="text-[#B36A62]">
                    Software Engineer dedicated to solving problems with
                  </span>{" "}
                  <span className="text-[#66A2B2]">
                    creativity and clarity.
                  </span>
                </p>
              </div>
            </div>

            {/* INTRO */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
              {/* Left: Introduction */}
              <div>
                <h2 className="font-[Poppins] text-2xl md:text-3xl font-semibold text-[#B36A62] mb-4">
                  Let me introduce myself.
                </h2>
                <p className="font-[Overpass] mb-4 leading-relaxed text-[#EBE4D5]">
                  Hey, I’m Karrar, a Software Engineer with a knack for solving
                  problems—preferably before they become{" "}
                  <em className="text-[#66A2B2]">big problems.</em> I focus on
                  building practical solutions that make things run smoothly,
                  and I’m happy to put in the hours to get it right.
                </p>
                <p className="font-[Overpass] leading-relaxed text-[#EBE4D5]">
                  I’m{" "}
                  <em className="text-[#66A2B2]">
                    always learning, always improving,
                  </em>{" "}
                  and I’m committed to making each project better than the last.
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center md:justify-end">
                {/* Rectangle container */}
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
          </main>
          {/* FOOTER */}
          <footer className="bg-[#1D1E25] px-8 py-4 flex flex-col md:flex-row md:items-center justify-between h-24">
            {/* GitHub&LinkedIn */}

            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a
                href="https://github.com/Karrar2k"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
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
                <Image
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="invert"
                />
              </a>
            </div>

            {/* Copyright */}

            <p className="text-sm font-[Overpass] mb-0 md:mb-0 mt-auto">
              &copy; 2024 Designed & Build by Yours Truly
            </p>

            {/* Logo */}

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