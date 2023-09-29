"use client";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

interface IconProps {
  network: string;
  link: string;
}

export default function Icon({ network, link }: IconProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <SocialIcon
      network={network}
      href={link}
      fgColor="transparent"
      bgColor={isHover ? "#00e0a7" : "#00e0a788"}
      style={{ height: 40, width: 40 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></SocialIcon>
  );
}
