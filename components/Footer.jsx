import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import NavLogo from "../public/logo.png";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className=" bg-[#38220f] h-[200px] w-full flex md:flex-row justify-around items-center flex-col p-10">
        <div className=" ">
          <Image
            src={NavLogo}
            alt="/"
            width="150"
            height="70"
            className="cursor-pointer"
          />
        </div>

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
      </div>

      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h3 className=" text-gray-800 font-semibold">
          © 2024 Flavia | Todos os direitos reservados | Desenvolvido ❤ pela{" "}
          <span className="hover:text-gray-400 font-semibold cursor-pointer">
            <a
              href="https://www.sousasmidia.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Sousas Midia{" "}
            </a>
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
