'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMapStore } from "../store/useMapStore";
import MenuIcon1 from '../assets/menu-icon-1.svg';
import MenuIcon2 from '../assets/menu-icon-2.svg';
import MenuIcon3 from '../assets/menu-icon-3.svg';
import { section } from "motion/react-client";

export default function MenuIcons() {
  const pathname = usePathname(); // Obter a rota atual

  // Verifica se a rota atual é '/info'
  const isInfoActive = pathname === "/";
  const isMapActive = pathname === "/map";
  const isUsinaActive = pathname === "/usina";


  const { currentId, isOpen, isActiveId, readedInfo, showQuestion, currentSlide, setCurrentId, setIsActiveId, openModal } = useMapStore();



  function handleLink(roll: string, id: string) {
    const target = document.getElementById(roll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    setCurrentId(id, true);
  }




  return (
    <section id="menu" className="relative flex w-full h-screen">
      <nav className={`flex flex-col w-full md:flex-row items-center justify-center md:items-center gap-24`}>
        <div onClick={() => handleLink('page-2', "2")} className={`animate-pulse hover:animate-bounce-slow`}>
          <MenuIcon1 className=' w-auto h-fit ' />
        </div>
        <div onClick={() => handleLink('page-3', "9")} className={`animate-pulse hover:animate-bounce-slow`}>
          <MenuIcon2 className=' w-auto h-fit ' />
        </div>
        <div onClick={() => handleLink('page-4', "12")} className={`animate-pulse hover:animate-bounce-slow`}>
          <MenuIcon3 className=' w-auto h-fit ' />
        </div>




      </nav>
    </section>
  );
}
