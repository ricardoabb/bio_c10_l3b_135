'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useMapStore } from '../store/useMapStore';

import { info } from '../utils/info';

import { TextBox } from './TextBox';
import { TextBoxIntro } from './TextBoxIntro';

import IconMicroscopio from '../assets/microscopio.svg';
import DnaIcon from '../assets/dna-icon.svg';
import IconArrow from '../assets/IconArrow.svg';
import { ButtonRollDown } from './ButtonRollDown';

export default function Page1() {



  const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();

  function handleModal(id: string) {

    setCurrentId(id, true);

    info.map((item, index) => {
      if (item.id === parseInt(id)) {
        openModal({
          title: item.title,
          content: item.content,
          image1: item.image,
          tapeColor: 'tapeColor',
          bgColor: 'bgColor',

        })
      }
    })
  }

  function handleLink(roll: string, id: string) {
    const target = document.getElementById(roll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    setCurrentId(id, true);
  }


  return (
    <section id='page-1' className='relative w-full h-screen px-4 md:px-[20%]  flex flex-col md:flex-row justify-center md:items-center gap-2 z-10 '>
      <div className='relative flex items-center  bg-[#484D99] w-fit md:h-[50%] p-8'>
        <h1 className='text-[#fff] text-nunito text-2xl md:text-4xl 2xl:text-5xl font-extrabold  '>
          Você já ouviu
          falar em terapia gênica?
        </h1>
      </div>
      <div id='dna-icon' className='flex md:hidden justify-center items-center py-3 bg-[#F196A4] '>
        <DnaIcon className='w-auto h-fit ' />
      </div>
      <div className='flex  gap-2  md:h-[50%]'>

        <div className='bg-[#9AAED7] px-4  flex items-center '>
          <IconMicroscopio className='w-50 h-fit ' />
        </div>

        <div className='flex flex-1 w-full  md:w-[400px] flex-col gap-2 ' >
          <h2 className='bg-[#fff] text-[#484D99] flex flex-1 items-center justify-center  text-nunito text-[20px] md:text-3xl p-4 font-extrabold '>
            Já sabe a respeito dos trangênicos?
          </h2>
          <div className=''>

            <TextBoxIntro content={info[0].content} title={info[0].title} bgColor="bg-[#F196A4]" textColor='text-[#484D99]' />
          </div>
        </div>
      </div>
     <ButtonRollDown target='menu' rotate={false}  />
    </section >
  );
}
