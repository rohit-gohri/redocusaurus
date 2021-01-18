import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const sections = [
  {
    title: <>Using ApiDoc Component</>,
    link: '/custom-layout/',
    description: (
      <>
      A page using ApiDoc component in <a href="https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc">docusaurus-theme-redoc</a>
      </>
    ),
  },
  {
    title: <>Using Redoc Component</>,
    link: '/custom-page/',
    description: (
      <>
      A page with custom Layout using Redoc component in <a href="https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc">docusaurus-theme-redoc</a>
      </>
    ),
  },
  {
    title: <>Using Spec URL</>,
    link: '/using-spec-url/',
    description: (
      <>
      A page made automatically with <a href="https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc">docusaurus-plugin-redoc</a>
      </>
    ),
  },
  {
    title: <>Using YAML Spec</>,
    link: '/using-spec-yaml/',
    description: (
      <>
      A page made automatically with <a href="https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc">docusaurus-plugin-redoc</a>
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
      <h3>{title}</h3>
  );
  return (
    <div className={clsx('col col--4', styles.feature, styles.featuresCol)}>
      {link ? <Link to={useBaseUrl(link)}>{sectionComponent}</Link> : sectionComponent}
      <p>{description}</p>
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
