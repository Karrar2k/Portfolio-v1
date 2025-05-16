
import Image from "next/image";

export default function WorksPage() {
  const projects = [
    {
      type: "Shopify",
      title: "Medical Express Clinic [PAID WORK]",
      staticImage: "/MECss.png",
      animatedGif: "/MECgif.gif",
      description:
        "This project involved the full-stack rebuild of a medical clinic's website into a feature-rich web application using the PERN stack. The goal was to transform a basic online presence into a comprehensive platform that streamlined clinic operations and enhanced the patient experience. Key features included a custom appointment booking system, user accounts for patients, and multilingual support. I also integrated third-party APIs for payment processing and appointment confirmations.",
      link: "https://www.medicalexpressclinic.co.uk/",
    },
    {
      type: "Shopify",
      title: "The Zahra Trust [PAID WORK]",
      staticImage: "/ZTss.png",
      animatedGif: "/ZTgif.gif",
      description:
        "This project focused on developing a multi-page donation site for a charity, addressing the need for online fundraising capabilities. The outdated website lacked a payment gateway, hindering donation collection. I designed and built a solution that integrated Stripe for processing single and recurring donations and Mailchimp for donor communication. This project allowed me to further refine my RESTful API integration skills.",
      link: "https://zahratrust.com/",
    },
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
      type: "Shopify",
      title: "The Zahra Trust Shop [VOLUNTEER WORK]",
      staticImage: "/DTWss.png",
      animatedGif: "/DTWgif.gif",
      description:
        "This was a volunteer project to create an online storefront for The Zahra Trust, selling apparel and merchandise to raise funds for the charity. Due to the client's preference for a separate site, I utilised the Shopify platform to quickly establish the store. The project demonstrated my ability to learn and implement a new platform and templating language efficiently. ",
      link: "https://zahratrustshop.com/",
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
      staticImage: "/BFCv2ss.png",
      animatedGif: "/BFCv2gif.gif",
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

      {/* container for projects */}
      <div className="scrollable-container overflow-y-scroll max-h-[calc(100vh-24rem)]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1D1E25] rounded-md shadow-lg overflow-hidden mb-8 p-4 flex items-center gap-6"
          >
            <div className="relative w-1/2 h-72 bg-[#3E4150] flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src={project.staticImage}
                alt={`${project.title} Thumbnail`}
                fill
                className="object-cover hover:opacity-0 transition-opacity duration-300"
              />
              <Image
                src={project.animatedGif}
                alt={`${project.title} Animation`}
                fill
                className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

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
