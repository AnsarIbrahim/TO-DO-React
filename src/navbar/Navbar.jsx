import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Links = [
  { path: "/", text: "Home" },
  { path: "todo", text: "Todo" },
  { path: "profile", text: "Profile" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  return (
    <nav ref={ref} className="navbar">
      <button className="toogle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? (
          <MdClose style={{ width: "32px", height: "32px" }} />
        ) : (
          <FiMenu style={{ width: "32px", height: "32px" }} />
        )}
      </button>
      <ul className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
        {Links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink
                to={link.path}
                onClick={() => setNavbarOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "red" : undefined,
                })}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
