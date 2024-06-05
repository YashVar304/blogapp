import React, { useState } from "react";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo";
import LogoutBtn from "./LogoutBtn";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      status: true,
    },
    {
      name: "Login",
      slug: "/login",
      status: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      status: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all-posts",
      status: authStatus,
    },
    {
      name: "Post",
      slug: "/add-post",
      status: authStatus,
    },
  ];

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle menu state
  };

  return (
    <header className="py-3 shadow">
      <Container>
        <nav className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            ☰
          </button>
          <ul
            className={`flex-col lg:flex-row flex lg:flex ml-auto items-center justify-center lg:space-x-4 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            {navItems.map((item) =>
              item.status ? (
                <li
                  key={item.name}
                  className="inline-block px-6 py-2 duration-500 hover:bg-purple-400 rounded-full"
                >
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            <li> {authStatus && <LogoutBtn />}</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
