'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useMapStore } from './store/useMapStore';
import Home from './components/Layout';
import { TextBox } from './components/TextBox';

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

export default function Info() {

    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef<any>(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const { currentId, isOpen, link, isActiveId, isChangedSlide, readedInfo, setShowQuestion, setCurrentId, setSlideChange, openModal, setCurrentSlide, setReadedInfo } = useMapStore();

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);


        // setCurrentId(swiper.activeIndex, false);
    };



    useEffect(() => {
        if (sliderRef.current && sliderRef.current.swiper) {
            const swiper = sliderRef.current.swiper;
            setActiveIndex(swiper.activeIndex);
            setCurrentSlide(swiper.activeIndex);
            setReadedInfo([])
            if (swiper.activeIndex === 0) {
                setCurrentId("1", false);
                info.map((item, index) => {
                    if (item.id === 1) {
                        openModal({
                            title: item.title,
                            content: item.content,
                            image1: item.image,
                            tapeColor: 'tapeColor',
                            bgColor: 'bgColor',

                        })
                    }
                })
            } else if (swiper.activeIndex === 1) {
                setCurrentId("6", false);
                info.map((item, index) => {
                    if (item.id === 6) {
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
            else if (swiper.activeIndex === 2) {
                setShowQuestion(true);
                setCurrentId("13", false);
                info.map((item, index) => {
                    if (item.id === 13) {
                        openModal({
                            title: item.title,
                            content: item.content,
                            image1: item.image,
                            link: item.link,
                            tapeColor: 'tapeColor',
                            bgColor: 'bgColor',

                        })
                    }
                })
            }
            else if (swiper.activeIndex === 3) {
                setCurrentId("15", false);
                info.map((item, index) => {
                    if (item.id === 16) {
                        openModal({
                            title: item.title,
                            content: item.content,
                            image1: item.image,
                            link: item.link,
                            tapeColor: 'tapeColor',
                            bgColor: 'bgColor',

                        })
                    }
                })
            }

        }
    }, [activeIndex]);

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




    return (
        <Home>
            <div className='relative flex-col justify-center items-center md:mt-0'>
                <Page1 />
                <Page2 />
            </div>
        </Home>
    );
}