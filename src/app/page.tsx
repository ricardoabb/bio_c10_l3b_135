'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useMapStore } from './store/useMapStore';
import Home from './components/Layout';
import { TextBox } from './components/TextBox';
import BgRight from './assets/bg-right.svg';
import BgLeft from './assets/bg-left.svg';

// Swiper
import { Navigation, A11y } from 'swiper/modules';
import { register } from "swiper/element/bundle";
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { info } from './utils/info';
import Page1 from './components/Page-1';
import { Slide2 } from './components/Slide3';
import Chart2 from './components/Page-2';
import { log } from 'console';
import Chart3 from './components/Chart-3';
import Chart4 from './components/Chart-4';
import Chart5 from './components/Chart-5';
import Page2 from './components/Page-2';
import Page3 from './components/Page-3';
import MenuIcons from './components/MenuIcons';
import Page4 from './components/Page-4';
import Page5 from './components/Page-5';

export default function Info() {

    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);


    const [offset, setOffset] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [innerHeight, setInnerHeight] = useState<number | null>(null);

    const sliderRef = useRef<any>(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const { currentId, isOpen, link, isActiveId, isChangedSlide, readedInfo, setShowQuestion, setCurrentId, setSlideChange, openModal, setCurrentSlide, setReadedInfo } = useMapStore();

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);


        // setCurrentId(swiper.activeIndex, false);
    };



    useEffect(() => {
        if (currentId === "2") {
            const target = document.getElementById('page-2');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // info.map((item, index) => {
            //     if (item.id === 2) {
            //         openModal({
            //             title: item.title,
            //             content: item.content,
            //             image1: item.image,
            //             tapeColor: 'tapeColor',
            //             bgColor: 'bgColor',

            //         })
            //     }
            // })
        } else if (currentId === "9") {
            const target = document.getElementById('page-3');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

        } else if (currentId === "12") {
            const target = document.getElementById('page-4');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

        }
    }, [currentId]);

    useEffect(() => {
        if (['3', '4', '5'].every(id => readedInfo.includes(id))) {
            setSlideChange(true)// setIsActiveId(true);

        }
        if (['7', '8', '9', '10', '11'].every(id => readedInfo.includes(id))) {
            setShowQuestion(true)// setIsActiveId(true);            
        }
        if (['7', '8', '9', '10', '11', '12'].every(id => readedInfo.includes(id))) {
            setSlideChange(true)// setIsActiveId(true);            
        }
        if (['14', '15'].every(id => readedInfo.includes(id))) {
            setSlideChange(true)// setIsActiveId(true);            
        }
    }, [currentId])

    function customHandleSlide(id: number) {
        if (sliderRef.current && sliderRef.current.swiper) {
            const swiper = sliderRef.current.swiper;
            if (swiper.activeIndex !== currentId) {
                swiper.slideTo(currentId);
            }
        }

    }

    function resetReaded() {
        setSlideChange(false);
        setShowQuestion(false);
        setReadedInfo([])

    }


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;

            // Calcula a porcentagem da rolagem
            const scrollPercent = scrollY / (docHeight - windowHeight);

            // Converte a porcentagem em uma posição dentro da viewport (em pixels)
            const position = scrollPercent * (windowHeight - 100); // 100px é a altura do elemento

            setOffset(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setInnerHeight(window.innerHeight);
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;

            const scrollPercent = scrollY / (docHeight - windowHeight);

            const movableRange = windowHeight - 100; // 100px = altura dos elementos

            setScrollOffset(scrollPercent * movableRange);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (innerHeight === null) return null;

    return (
        <Home>
            <div className='relative flex-col justify-center items-center md:mt-0'>
                <Page1 />
                <MenuIcons />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />

                <div id="bg-right"
                    className="fixed right-0 z-0"
                    style={{
                        top: `${offset}px`,
                        transition: "top 0.1s ease-out",
                    }}>
                    <BgRight />
                </div>
                <div id="bg-right"
                    className="fixed left-0 z-0"
                    style={{
                        top: `${window.innerHeight - 100 - scrollOffset}px`,
                        transition: "top 0.1s ease-out",
                    }}>
                    <BgLeft />
                </div>
            </div>
        </Home>
    );
}