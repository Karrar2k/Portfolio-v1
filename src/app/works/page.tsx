import Image from "next/image";
import Link from "next/link";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function WorksPage() {
  const projects = [
    {
      type: "Shopify",
      title: "Shopify Website for Blood Test London [PAID WORK]",
      staticImage: "/BTLss.png",
      animatedGif: "/BTLgif.gif",
      description:
        "Successfully built a Shopify website for a blood testing clinic that enhances customer satisfaction and streamlines clinic operations. The website allows customers to book appointments, select services, and make payments conveniently online, while providing the clinic with a robust platform for managing appointments and expanding their reach.",
      link: "https://1gw1xk-pf.myshopify.com/",
    },
    {
      type: "Shopify",
      title: "Shopify Website for Design The Wall [PAID WORK]",
      staticImage: "/DTWss.png",
      animatedGif: "/DTWgif.gif",
      description:
        "Developed a visually appealing Shopify website for a wall panel retailer, showcasing their unique product range with high-quality images and engaging product descriptions. Improved online sales and enhanced brand visibility.",
      link: "https://designthewall.co.uk/",
    },
    {
      type: "Hobby",
      title: "Hobby Project: Prayer Times",
      staticImage: "/PRAYss.png",
      animatedGif: "/PRAYgif.gif",
      description:
        "Developed a MERN stack application for prayer times that provides accurate prayer times, customizable prayer reminders, and a feature to enable automatic prayer calls. The application supports both English and Arabic translations, offering a user-friendly and culturally sensitive experience.",
      live: "https://karrars-prayer-times.vercel.app/",
      github: "https://github.com/Karrar2k/Prayer-Times-FE",
    },
    {
      type: "Hobby",
      title: "Hobby Project: To-Do List",
      staticImage: "/TODOss.png",
      animatedGif: "/TODOgif.gif",
      description:
        "Developed a visually appealing and interactive to-do list application using React. The application allows users to create, edit, and delete tasks, with the ability to save their progress locally. It features 4 theme colors and smooth animations for an engaging user experience.",
      live: "https://karrars-todo.vercel.app/",
      github: "https://github.com/Karrar2k/To-Do-List",
    },
    {
      type: "Hobby",
      title: "University Final Year Project",
      staticImage: "/BFCss.png",
      animatedGif: "/BFCgif.gif",
      description:
        "Developed a comprehensive e-commerce platform for 'Beckton F.C.', a hypothetical football club. Leveraging the MERN stack, the platform allows fans to browse and purchase official club merchandise online. Key features include a user-friendly interface, secure payments, order tracking, and user account management. This project demonstrates my proficiency in modern web development technologies and best practices, including RESTful APIs, database design and component-based architecture.",
      live: "https://beckton-fc-fe.vercel.app/",
      github: "https://github.com/Karrar2k/BecktonFC-FE",
    },
  ];

  return (
    <LayoutWrapper>
      <div className="flex justify-center items-center min-h-screen bg-[#3E4150]">
        <div className="bg-[#2C2E39] w-full max-w-4xl flex flex-col rounded shadow-md overflow-hidden">
          {/* HEADER */}
          <header className="bg-[#1D1E25] px-8 py-4 flex items-center justify-between h-24">
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
                href="/about"
                className="hover:opacity-80 transition-opacity"
              >
                About
              </Link>
            </nav>
          </header>

          {/* MAIN CONTENT */}
          <main className="p-12">
            {/* Hero Section */}
            <div className="mb-8 text-center">
              <h1 className="font-[Raleway] text-4xl md:text-5xl font-bold text-[#EBE4D5]">
                My Works
              </h1>
              <p className="font-[Poppins] text-lg md:text-xl text-[#B36A62] mt-4">
                Here are some of the projects I’ve worked on.
              </p>
            </div>

            {/* Scrollable Project Container */}
            <div className="overflow-y-scroll max-h-[500px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1D1E25] rounded-md shadow-lg overflow-hidden mb-8 p-4 flex items-center gap-6"
                >
                  {/* Left: GIF/png */}
                  <div className="relative w-1/2 h-72 bg-[#3E4150] flex items-center justify-center flex-shrink-0">
                    {/* Static Thumbnail */}
                    <img
                      src={project.staticImage}
                      alt={`${project.title} Thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Animated GIF */}
                    <img
                      src={project.animatedGif}
                      alt={`${project.title} Animation`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Right: Project Details */}
                  <div>
                    <h2 className="font-[Poppins] text-xl font-bold text-[#66A2B2]">
                      {project.title}
                    </h2>
                    <p className="font-[Overpass] text-sm text-[#EBE4D5] mt-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a
                        href={project.link || project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3E4150] text-[#EBE4D5] px-4 py-2 rounded hover:bg-[#66A2B2] transition"
                      >
                        View
                      </a>
                      {project.type === "Hobby" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#3E4150] text-[#EBE4D5] px-4 py-2 rounded hover:bg-[#66A2B2] transition"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* FOOTER */}
          <footer className="bg-[#1D1E25] px-8 py-4 flex flex-col md:flex-row md:items-center justify-between h-24">
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
            <p className="text-sm font-[Overpass] mb-0 md:mb-0 mt-auto">
              &copy; 2024 Designed & Build by Yours Truly
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
    </LayoutWrapper>
  );
}
