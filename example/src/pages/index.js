import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const sections = [
  {
    title: <>Hello</>,
    link: '/docs/hello/',
    description: (
      <>
      Test
      </>
    ),
  },
  {
    title: <>API</>,
    link: '/api/',
    description: (
      <>
      API docs using Redoc
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
function Section({title, description, link}) {
  const sectionComponent = (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
  return (
    <div className={clsx('col col--4', styles.feature, styles.featuresCol)}>
      {link ? <Link to={useBaseUrl(link)}>{sectionComponent}</Link> : sectionComponent}
    </div>
  );
 }


function Docs() {
  return (
    <Layout
      title={"Redocusaurus Example"}
      description={"With different use-cases"}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Redocusaurus Example"}</h1>
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
