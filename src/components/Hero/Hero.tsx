// src/components/Hero/Hero.tsx

import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <Container size="xl" className={styles.content}>
        <Title className={styles.heroTitle}>Be Prepared For The Mountains And Beyond!</Title>
        <Text className={styles.heroSubtitle}>A Hiking Guide</Text>
      </Container>
    </div>
  );
};

export default Hero;
