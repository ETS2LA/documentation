import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{backgroundColor: '#fa793b'}}>
      <div className="container">
        <Heading as="h1" style={{color: 'white'}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{color: 'white'}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Python/Getting%20Started/Creating%20Your%20First%20Plugin">
            Get started with your first plugin - 15min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the ETS2LA Docs`}
      description="This site hosts documentation for ETS2LA V2.0 and C#.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
