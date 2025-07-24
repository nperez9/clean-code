import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import codeImage from '@site/static/img/coding-language.png';
import exampleImage from '@site/static/img/coding.png';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imageUrl?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Language Agnostic',
    imageUrl: codeImage,
    description: (
      <>
        This handbook is designed to be applicable across various programming
        languages. It's written in TypeScript, but the concepts are universal.
      </>
    ),
  },
  {
    title: 'Driven on Practical Examples',
    imageUrl: exampleImage,
    description: (
      <>
        This handbook is filled with practical examples and use cases to help
        you understand and apply the concepts effectively. The teory is important, 
        but it's the examples that make it real.
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus!',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Originally, this project will only be a repo with the cases and the code examples by commentaries,
        Thanks to this tool, we can now have a friendly and stylish website.
      </>
    ),
  },
];

function Feature({title, Svg, description, imageUrl}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        { imageUrl && <img src={imageUrl} alt={title} className={styles.featureImage} width={200} height={200} /> }
        { Svg && <Svg className={styles.featureSvg} role="img" /> }
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
