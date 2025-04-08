"use client"
import { h1 } from "motion/react-client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { useMapStore } from "../store/useMapStore";
import IconArrow from '../assets/IconArrow.svg';

type TextBoxProps = {
  target: string;
  id?: string; 
  rotate: boolean;
};

export function ButtonRollDown({ target, id, rotate  }: TextBoxProps) {
  const [displayedText, setDisplayedText] = useState<string>('');

  const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();

  function handleLink(roll: string, id: string) {
    const target = document.getElementById(roll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    setCurrentId(id, true);
  }


  return (
    <div className={`${rotate ? 'rotate-180' : ''} absolute left-1/2 transform -translate-x-1/2 bottom-4`}>
      <div id="rolldown"
        className={`animate-bounce-slow  flex justify-center cursor-pointer items-center border-[#F196A4] w-[84px] h-[84px]  border-4  rounded-full `}
        onClick={() => handleLink(target, id || '')}
      >
        <div className='bg-[#fff] w-[70px] h-[70px] rounded-full flex justify-center items-center'>
          <IconArrow className='rotate-180 w-auto h-fit ' />
        </div>
      </div>
    </div>
  )
};


