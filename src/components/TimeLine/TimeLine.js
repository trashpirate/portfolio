import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import { TitleContent } from "../Projects/ProjectsStyles";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Starting off as an audio engineer, I acquired real work life experience
        in a demanding field that requires problem solving skills and
        flexibility as well as a clear head under short term pressure. I’ve
        expanded my practical engineering skills with an undergraduate degree in
        Systems Engineering and a Master’s degree in Engineering (Biomedical
        Engineering). The choice of projects throughout my undergraduate and
        graduate studies let me deepen my knowledge in signal processing and
        data analysis and discover my great interest in computational problems.
        My most recent research focused on simulation and modeling as well as
        machine learning.
        <b />
        I recently graduated with a PhD in Biomedical Engineering from
        Northwestern University. Under the mentorship of Dr. Mitra Hartmann, I
        studied sensory processing in the rat vibrissal (whisker) system, one of
        the most commonly used models to study how the brain encodes and
        processes somatosensory information.
        <b />
        Most of my work focused on the design and development of a simulation
        framework <a href="https://github.com/trashpirate">
          WHISKiT Physics
        </a>{" "}
        to simulate the full vibrissotactile input to the rat whiskers system,
        i.e., the mechanical signals generated in the follicle of each whisker
        in response to contact with an external object. Combining the WHISKiT
        Physics simulator with other computational approaches and machine
        learning, I investigated how the environmental structure shapes the
        sensory input and how that might affect early-stage neural processing.
        <b />
        To better understand the statistics of tactile environments I collected
        data from three-dimensional objects. A constructed a dataset that
        included shape data from natural and human-made objects and analyzed
        their higher-order statistics using Independent Component Analysis
        (ICA). Our work shows that applying efficient coding as implemented by
        ICA on 3D shape data reveals similar basis functions similar to those
        found in images. With a simple neural model we show that these basis
        functions are related to filters that are closely resembling receptive
        fields in the primary somatosensory cortex.
        <b />
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                    fill="url(#paint0_linear)"
                    fill-opacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-4.30412e-10"
                      y1="0.5"
                      x2="208"
                      y2="0.500295"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop
                        offset="0.79478"
                        stop-color="white"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
