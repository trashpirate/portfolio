import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, CardReadMore } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <CardInfo>
      {isReadMore ? [text.slice(0, 300),"..."] : text}
      <CardReadMore onClick={toggleReadMore}>
        {isReadMore ? [<br/>,"Read more"] : [<br/>,"Show less"]}
      </CardReadMore>
    </CardInfo>
  );
};

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          {projects.map(({id, image, title, description, tags, source, visit})=>(
            <BlogCard key={id}>
              <Img src={image}/>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr/>
              </TitleContent>
              <CardInfo>
                <ReadMore>{description}</ReadMore>
              </CardInfo>
              <div>
                <br/>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag,i)=>(
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Publication</ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))}
        </GridContainer>
  </Section>
);

export default Projects;