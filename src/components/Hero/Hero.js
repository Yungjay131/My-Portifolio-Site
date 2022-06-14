import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I am an Android developer with over 3+ years of experience developing Android
        apps with high quality UI/UX. I come from a web development background
        so i'm familiar with web technologies like: Node.js, MongoDb,JavaScript,
        TypeScript, devOps technologies like Docker and Kubernetes
        i also develop cross-platform apps in React Native
      </SectionText>

      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;