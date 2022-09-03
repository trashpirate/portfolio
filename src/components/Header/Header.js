import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { Img, Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <Img src="/images/logo.png" size="20px"/> <Span>Portfolio</Span>
        </a>
      </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Skills</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
  <SocialIcons href="https://github.com/trashpirate">
    <AiFillGithub size="3rem"/>
  </SocialIcons>
  <SocialIcons href="https://www.linkedin.com/in/nadina-zweifel-b1696878/">
    <AiFillLinkedin size="3rem"/>
  </SocialIcons>
  <SocialIcons href="https://twitter.com/nadinazweifel">
    <AiFillTwitterCircle size="3rem"/>
  </SocialIcons>
  </Div3>
  </Container>
);

export default Header;
