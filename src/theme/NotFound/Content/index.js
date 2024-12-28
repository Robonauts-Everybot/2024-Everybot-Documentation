import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <br></br>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Documenation for older robots are split into their own sites:
            </Translate>
            <br /><br />
            <a href="https://robonauts-everybot.github.io/Everybot-Docs/">2024 FRC Everybot</a>
            <br /><br />
          </p>
          <p>
            <Translate
              id="theme.NotFound.p3"
              description="The 3nd paragraph of the 404 page">
              For the current year's Everybot please see:
            </Translate>
            <br /><br />
            <a href="https://robonauts-everybot.github.io/Everybot-Docs/">Everybot Docs</a>
            <br /><br />
          </p>
        </div>
      </div>
    </main>
  );
}
