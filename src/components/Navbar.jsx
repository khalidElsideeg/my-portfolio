import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-6 h py-6  flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center justify-center m-8 rounded-full">
        <img
          src="/src/assets/20220512_215934[18].jpg"
          width={30}
          height={30}
          className="rounded-full w-8 h-8 object-cover"
        />
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/khalid-elsideeg/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/khalidElsideeg" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
