import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='technologies'>
    <SectionDivider />
    <br />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of libraries,architectural patterns and technologies
      related to Android development
    </SectionText>
    <List>
      {/* TODO:visit React icons for custom icons relating to Android */}
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Dependency Injection</ListTitle>
          <ListParagraph>
            Experience with <br />
            Dagger2 and Hilt
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Persistence</ListTitle>
          <ListParagraph>
            Experience with <br />
            Realm and Room for Local DB storage solutions
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Reactive Programming</ListTitle>
          <ListParagraph>
            Experience with <br />
            RxJava/RxKotlin and more recently the reactive libraries in Jetpack <br />
            like Flow and LiveData
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            JUnit for Unit tests, Mockito and Roboelectric for Integration testing,<br />
            Espresso for UI tests
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Architectural Patterns</ListTitle>
          <ListParagraph>
            Familiar with <br />
            android architectural patterns like MVVM, MVI, MVP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX Tools</ListTitle>
          <ListParagraph>
            working knowledge of <br />
            UI/UX Tools like AdobeXD, Zeplin and Inkscape
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
