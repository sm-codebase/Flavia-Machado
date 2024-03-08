import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../public/assets/logo.png";
import { RiMessage2Fill } from "react-icons/ri";
import { Sling as Hamburger } from "hamburger-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={"fixed h-[90px]  top-0  w-full z-10   ease-in duration-300"}
    >
      <div className="flex items-center justify-between md:justify-around w-full h-full p-4">
        <Link legacyBehavior href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="170"
              height="70"
              className="cursor-pointer"
              style={{
                maxWidth: "70%",
                height: "auto",
              }}
            />
          </a>
        </Link>
        <div className="flex  gap-10">
          <a
            href="https://www.facebook.com/flaviamachadobuffeteeventos/?locale=pt_BR"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-2xl text-white cursor-pointer hover:text-gray-300 ">
              <FaFacebook />
            </div>
          </a>
          <a
            href="https://www.instagram.com/flaviamachadobuffeteventos/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-2xl text-white cursor-pointer hover:text-gray-300">
              <FaInstagram />
            </div>
          </a>
          <a href="https://wa.link/" target="_blank" rel="noreferrer">
            <div className="text-2xl text-white cursor-pointer hover:text-gray-300">
              <FaWhatsapp />
            </div>
          </a>
        </div>

        {/*Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          <Hamburger color="white" toggled={nav} toggle={setNav} />
        </div>
        {/*Mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 botton-0 flex justify-center items-center w-full h-screen bg-gradient-to-r from-[#38220f] to-[#38220f]  text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 botton-0 flex justify-center items-center w-full h-screen bg-gradient-to-r from-[#38220f] to-[#38220f] text-center ease-in duration-300"
          }
        >
          <div className="prod " style={{ margin: "0 20px" }}>
            <ul>
              <li
                onClick={handleNav}
                className="p-4 text-4xl text-white hover:text-gray-600"
                style={{
                  borderBottom: "2px solid white",
                  paddingBottom: "10px",
                }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl   text-white hover:text-gray-600"
              >
                <Link href="/#galeria">Galeria de fotos</Link>
              </li>

              <li
                onClick={handleNav}
                className="p-4 text-4xl text-white hover:text-gray-600"
              >
                <Link href="/#principios">Eventos memoráveis</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl text-white hover:text-gray-600"
              >
                <Link href="/#localizacao">Localização</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl text-white hover:text-gray-600"
              >
                <Link href="/contact">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:bg-[#38220f] w-full md:h-[60px] grid justify-center ">
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 text-lg hover:text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-600">
            <Link href="/#galeria">Galeria de fotos</Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-600">
            <Link href="/#principios">Eventos memoráveis</Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-600">
            <Link href="/#localizacao">Localização</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
