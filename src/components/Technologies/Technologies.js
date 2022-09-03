import React from 'react';
import { BsClipboardData } from 'react-icons/bs';
import { BiLineChart } from 'react-icons/bi';
import { GiMeshNetwork } from 'react-icons/gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
      <br/>
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        I've worked with a range of tools and programming languages for data analysis, data visualization, signal processing, and machine learning.
      </SectionText>
      <List>
        <ListItem>
          <BsClipboardData size="4rem"/>
          <br/>
          <ListContainer>
            <ListTitle>Data Analysis</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Matlab libraries as well as SciPy and Pandas. 
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <BiLineChart size="4rem"/>
          <br/>
          <ListContainer>
            <ListTitle>Data Visualization</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Seaborn, Matplotlib, and Illustrator. 
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <GiMeshNetwork size="4rem"/>
          <br/>
          <ListContainer>
            <ListTitle>Machine Learning</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Tensorflow/Keras, PyTorch, and Scikit-Learn
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
