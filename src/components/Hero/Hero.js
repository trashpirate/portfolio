import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        WELCOME TO <br />
        MY PORTFOLIO
      </SectionTitle>
      <SectionText>
        Nadina O. Zweifel, PhD
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;