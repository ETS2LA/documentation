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
        <div className={styles.buttons} style={{flexDirection: 'row', gap: '16px', alignItems: 'center'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Introduction">
            Get started with your plugin
          </Link>
          <p style={{margin: 0}}>or</p>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Check our latest blog posts
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
      description="Here you can find developer documentation for ETS2LA.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
