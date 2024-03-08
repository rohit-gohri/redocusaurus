import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

const sections = [
  {
    title: <>🌚 Dark Mode Support</>,
    description: (
      <>Inbuilt support for Docusaurus Classic Theme&apos;s Dark Mode!</>
    ),
  },
  {
    title: <>🧩 Customizable</>,
    description: (
      <>
        Pass in your custom theme colors or options and it will be merged. All
        components can be swizzled to suit your needs (with Typescript support)
      </>
    ),
  },
  {
    title: <>📑 Schema Definitions</>,
    description: (
      <>
        Use individual schema definitions{' '}
        <a href="/docs/guides/schema-imports">directly in your MDX docs</a>
      </>
    ),
  },
  {
    title: <>⚡️ Blazing Fast</>,
    description: (
      <>
        Support for
        <a href="/docs/guides/build-time-rendering"> Build Time Rendering!</a>
      </>
    ),
  },
];

/**
 *
 * @param {{
 *   title: string | React.ReactNode;
 *   description: string | React.ReactNode;
 *   link?: string;
 * }} param0
 */
function Section({ title, description, link }) {
  const sectionComponent = <h3>{title}</h3>;
  const fullLink = useBaseUrl(link);
  return (
    <div className={clsx('col col--6', styles.feature, styles.featuresCol)}>
      {link ? <Link to={fullLink}>{sectionComponent}</Link> : sectionComponent}
      <p>{description}</p>
    </div>
  );
}

function Docs() {
  return (
    <Layout title="Redocusaurus" description="OpenAPI documentation solution">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Redocusaurus</h1>
          <p>
            OpenAPI solution for{' '}
            <a
              className={clsx(styles.link)}
              target="_blank"
              rel="noopener"
              href="https://docusaurus.io/"
            >
              Docusaurus
            </a>{' '}
            docs using{' '}
            <a
              className={clsx(styles.link)}
              target="_blank"
              rel="noopener"
              href="https://redocly.com/redoc/"
            >
              Redoc
            </a>
          </p>
          <span>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=rohit-gohri&amp;repo=redocusaurus&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </header>
      <main>
        {sections && sections.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {sections.map((props, idx) => (
                  <Section key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Docs;
