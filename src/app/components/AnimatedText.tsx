"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';



import iconRight from '../assets/icon-down.png';
import iconRightSoft from '../assets/icon-down-soft.png';
import { useMapStore } from "../store/useMapStore";



type TextBoxProps = {
  text: string;
  limit?: number;
  delay?: number;
};

export function AnimatedText({ text, limit = 140, delay = 5 }: TextBoxProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [remainingText, setRemainingText] = useState<string>(text);
  const [baseText, setBaseText] = useState<string>(text);

  const [displayBtn, setDisplayBtn] = useState<string>('hidden');
  const [displayBtnNext, setDisplayBtnNext] = useState<string>('hidden');
  const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');

   const { currentId, isActiveId, setCurrentId, setIsActiveId } = useMapStore();



  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < baseText.length) {
        currentText += baseText[currentIndex];
        if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

          setDisplayedText(currentText);
          baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          text.length >= limit ? setDisplayBtnNext('') : setDisplayBtnNext('hidden');
          // baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');

          baseText.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out');
          // baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          //   baseText.length <= limit && image1 !== 'undefined' ? setImageActive(true) : setImageActive(false);
          
          // baseText.length <= limit && currentId == "2" ? setCurrentId('map', false) : setCurrentId(currentId, false);





        } else {
          setRemainingText(baseText.slice(currentIndex));
          setDisplayedText(currentText + '...');
          clearInterval(intervalId);
        }
        currentIndex++;
      } else {
        clearInterval(intervalId);

      }
    }, delay);


    return () => clearInterval(intervalId);
  }, [baseText, limit, delay]);

  function handlerLoadText() {
    setBaseText(remainingText);

  }

  function handlerBack() {
    setBaseText(text);

  }

  interface TextWithHighlightsProps {
    text: string;
  }

  function TextWithHighlights({ text }: { text: string }): JSX.Element {
    const phrasesToHighlight = ['CRISPR/Cas9', 'CRISPR'];
    const phrasesToItalic = ['Papa Urbano II discursando no Concílio de Clermont'];
  
    const sortedHighlights = [...phrasesToHighlight].sort((a, b) => b.length - a.length);
    const sortedItalics = [...phrasesToItalic].sort((a, b) => b.length - a.length);
  
    const allPhrases = [...sortedHighlights, ...sortedItalics].join('|');
    const regex = new RegExp(`(${allPhrases})`, 'gi');
  
    const parts = text.split(regex).filter(Boolean); // remove strings vazias
  
    const rendered = parts.map((part, i) => {
      const matchHighlight = sortedHighlights.find(p => p.toLowerCase() === part.toLowerCase());
      const matchItalic = sortedItalics.find(p => p.toLowerCase() === part.toLowerCase());
  
      if (matchHighlight) return <strong key={i}>{part}</strong>;
      if (matchItalic) return <em key={i}>{part}</em>;
      return <span key={i}>{part}</span>;
    });
  
    return (
      <p className="text-[1rem] font-bold whitespace-pre-wrap select-none">
        {rendered}
      </p>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between">
      {TextWithHighlights({ text: displayedText })}
      {/* <p className="text-sm md:text-lg whitespace-pre-wrap select-none"></p> */}
      {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}

      <div className="relative flex items-center ml-auto gap-3">
        {



          <div className={`${displayBtnNext} flex items-center justify-center gap-2`}>
            <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a><div className={`absolute w-12 py-3 right-[-.2rem] bottom-[-3.5rem] none cursor-pointer ${animationNextBtn}  `}>
              <a onClick={handlerLoadText}><Image width={100} height={100} src={currentId === "1" ? iconRight : iconRightSoft} alt="carregar restante do texto..." /></a>
            </div>
          </div>


        }
      </div>

    </div>
  );
};


