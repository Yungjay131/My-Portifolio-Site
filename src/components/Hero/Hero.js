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
        apps that are exceptionally performant and have high quality UI/UX. I come from a web development background
        so i'm familiar with web technologies like: Node.js, MongoDb,JavaScript,
        TypeScript, and devOps technologies like Docker and Kubernetes.
        I also develop cross-platform apps in React Native
      </SectionText>

      <Button>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;