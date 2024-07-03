// src/components/HikingSection/HikingSection.tsx

import React from 'react';
import { Container, Text, Title, Image } from '@mantine/core';
import styles from './HikingSection.module.css';

interface HikingSectionProps {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean; 
}

const HikingSection: React.FC<HikingSectionProps> = ({
  number,
  subtitle,
  title,
  description,
  imageUrl,
  reverse = false,
}) => {
  return (
    <Container
      size="xl"
      className={`${styles.container} ${reverse ? styles.containerReverse : ''}`}
    >
      <div className={`${styles.content} ${reverse ? styles.contentReverse : ''}`}>
        <Text className={styles.number}>{number}</Text>
        <div className={styles.subtitle}>
          <div className={styles.subtitleLine}></div>
          <Text>{subtitle}</Text>
        </div>
        <Title order={1} className={styles.title}>{title}</Title>
        <Text className={styles.description}>{description}</Text>
      </div>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} className={styles.image} />
      </div>
    </Container>
  );
};

export default HikingSection;
