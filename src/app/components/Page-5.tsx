'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useMapStore } from '../store/useMapStore';

import { info } from '../utils/info';

import { TextBox } from './TextBox';
import { TextBoxIntro } from './TextBoxIntro';

import IconMicroscopio from '../assets/microscopio.svg';
import DnaIcon from '../assets/dna-icon.svg';
import PinIcon from '../assets/icon-pin.svg';

import { ButtonRollDown } from './ButtonRollDown';

export default function Page5() {



  const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();





  return (
    <section id='page-5' className='relative w-full h-screen px-4 md:px-[20%]  flex flex-col justify-center md:items-center gap-2 z-10 '>
      <div className='relative flex items-center  bg-[#484D99] w-fit  p-8 pt-14 pb-11'>
        <div className='absolute -top-10 right-0 sm:right-10 '>
          <PinIcon className='w-auto h-fit ' />
        </div>
        <p className='text-[#fff] text-nunito text-1xl md:text-2xl font-semibold'>
          A terapia gênica, por meio da introdução de genes saudáveis em um organismo, representa um avanço científico no tratamento de diversas doenças. A transgenia permite criar organismos geneticamente modificados, com o objetivo de melhorias diversas, como a produtividade na agricultura. Essas ações fazem parte de um campo relativamente novo da ciência que gera conflitos por não se saber ainda todos os efeitos da manipulação dos genes. Mas cabe lembrar que a ciência é uma construção de conhecimentos e de descobertas, e que seguindo a pesquisa adequada pode vir a resolver esses conflitos em breve.
        </p>
      </div>
        <div id='dna-icon' className='flex w-full justify-center items-center py-3 bg-[#F196A4] '>
          <DnaIcon className='w-fit h-auto ' />
        </div>

      <ButtonRollDown target='page-1' rotate />
    </section >
  );
}
