// src/pages/works.tsx

import Image from "next/image";

export default function WorksPage() {
  // Example projects from your old code:
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
      title: "Hobby Project: Uni Project Frontend Update",
      staticImage: "/BFCv2ss.png",
      animatedGif: "/BFCv2gif.gif",
      description:
        "Re-designed and re-built the frontend for my final year project at university. Beckton F.C. v2 now has a much more modern and sleek look with subtle animations. The overhaul was long-overdue and frankly the original frontend was terrible.",
      live: "https://beckton-fc-v2.vercel.app/",
      github: "https://github.com/Karrar2k/Beckton-FC-FE-v2",
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
    <>
      {/* Title / Subtitle */}
      <div className="text-center mb-8">
        <h1 className="font-[Raleway] text-4xl md:text-5xl font-bold text-[#EBE4D5]">
          My Works
        </h1>
        <p className="font-[Poppins] text-lg md:text-xl text-[#B36A62] mt-4">
          Here are some of the projects I’ve worked on.
        </p>
      </div>

      {/* Scrollable container for projects */}
      <div className="overflow-y-scroll max-h-[648px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1D1E25] rounded-md shadow-lg overflow-hidden mb-8 p-4 flex items-center gap-6"
          >
            {/* Left: static/gif images */}
            <div className="relative w-1/2 h-72 bg-[#3E4150] flex items-center justify-center flex-shrink-0 overflow-hidden">
              {/* Static image */}
              <Image
                src={project.staticImage}
                alt={`${project.title} Thumbnail`}
                fill
                className="object-cover hover:opacity-0 transition-opacity duration-300"
              />
              {/* Animated GIF */}
              <Image
                src={project.animatedGif}
                alt={`${project.title} Animation`}
                fill
                className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Right: Project details */}
            <div>
              <h2 className="font-[Poppins] text-xl font-bold text-[#66A2B2]">
                {project.title}
              </h2>
              <p className="font-[Overpass] text-sm text-[#EBE4D5] mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex space-x-4">
                {/* "View" button => link or live */}
                <a
                  href={project.link || project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3E4150] text-[#EBE4D5] px-4 py-2 rounded hover:bg-[#66A2B2] transition"
                >
                  View
                </a>
                {/* GitHub if it's a hobby project */}
                {project.type === "Hobby" && project.github && (
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
    </>
  );
}
