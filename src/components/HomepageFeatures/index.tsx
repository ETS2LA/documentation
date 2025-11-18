import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ETS2LA was designed from the ground up as developer-first. We've made great
        leaps since the first version to make it as easy as possible to get started.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We have unprecedented control over the game through our various SDKs. If you
        want to do something, you probably can. Within reason 😉
      </>
    ),
  },
  {
    title: 'Python For All',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        When working with the initial V1 version of ETS2LA, we realized how limited
        Python is when it comes to building flexible UIs. This is why we switched to 
        a custom SSR based solution that lets you build HTML UIs inside python.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/*
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      */}
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
