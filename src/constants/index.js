import project1 from "../assets/projects/download.png";
import project2 from "../assets/projects/amazone-clone-project.png";
import project3 from "../assets/3d-website-developer-working-on-laptop-illustration-png.webp";

export const HERO_CONTENT = `I am a junior Front End web developer with 2+ years of experience. I have experience in building modern web design, I am programming interfaces for applications and developing full responsive web pages (design).

I work with technology like html/css (Bootstrap and Tailwind), Javascript, React js, Next js Framework.

I am open to work with an active team or institution where I can increase my experience and strengthen my relationship with developers within the field.`;

export const ABOUT_TEXT = `I am a front-end developer who creates efficient and easy-to-use web applications. With a year of professional experience, she has worked with a variety of technologies, including React Next.jsB. I started my journey in web development as it is related to my field of study after I moved away from it for a while due to getting a job opportunity as a technician immediately after graduating from university. To be honest, I consider myself not passionate about this field, but I am characterized by high discipline in performing my work and accomplishing the duties that are assigned to me, with great respect for the work from which I earn my living.  But soon my relationship with programming developed into a career in which I constantly strive to learn and adapt to new challenges.  Away from programming, I enjoy exercising, staying active and exploring new technologies to be knowledgeable in my field. So do not hesitate to contact me if there is a work that brings us together.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Junior Frontend Developer",
    company: "Different Quality, Khartoum, Sudan",
    description: `Translated design mock-ups and wireframes into responsive and interactive web pages using HTML, CSS, and
JavaScript. Developed frontend components such as navigation menus, forms, buttons, sliders, and other interactive elements
using HTML, CSS, and React. Collaborated with designers and backend developers to ensure seamless integration and functionality. Optimized frontend code and assets (e.g., images, scripts, and stylesheets) to improve website/application
performance, loading times, and responsiveness.

`,
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "2019 - 2021",
    role: "System Support Engineer",
    company: "Fine Gold for Mining, Khartoum, Sudan",
    description: `Provided technical support and assistance to end-users, resolving hardware, software, and network issues both
remotely and on-site.Investigated recurring or systemic issues to identify root causes and implement permanent fixes or workarounds. Monitored system performance, resource utilization, and security events using various monitoring tools and
techniques.
Provided training and guidance to end-users on using IT systems, applications, and tools effectively.
`,
    technologies: ["MS", "Hardware", "CCTV", "Software"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Shop",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "Next.js",
      "ReduxToolkit",
      "Next-auth",
    ],
    href: "https://smart-shop-opal.vercel.app",
  },
  {
    title: "Amazon Clone",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "Vite + React",
      "ReduxToolkit",
      "Firebase",
    ],
    href: "https://amazon-clone-puce-kappa.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    href: "/",
  },
];

export const CONTACT = {
  address: "UAE,  RAk",
  phoneNo: "+971507764380 ",
  email: "Khalidelsideeg95@gmail.com",
};
