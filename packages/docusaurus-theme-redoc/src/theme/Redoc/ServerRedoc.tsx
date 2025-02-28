import React from 'react';
import clsx from 'clsx';
import '../../global';
import { IMenuItem, Redoc as RedocComponent } from 'redoc';
import type { SpecProps } from '../../types/common';
import useBrokenLinks, { BrokenLinks } from '@docusaurus/useBrokenLinks';
import useSpec from '@theme/useSpec';
import { ServerStyles } from './Styles';
import './styles.css';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2024 Rohit Gohri
 * Released under the MIT License
 */
function ServerRedoc(props: RedocProps): JSX.Element {
  const { className, optionsOverrides, id, themeId, downloadSpecUrl } = props;
  const { store, spec, darkThemeOptions, lightThemeOptions, hasLogo } = useSpec(
    {
      spec: props.spec,
      themeId,
      downloadSpecUrl,
      id,
    },
    optionsOverrides,
  );

  const collector = useBrokenLinks();
  collectMenuItemAnchors(collector, store.menu.items);

  return (
    <>
      <ServerStyles
        spec={spec}
        url={downloadSpecUrl}
        lightThemeOptions={lightThemeOptions}
        darkThemeOptions={darkThemeOptions}
      />
      <div
        className={clsx([
          'redocusaurus',
          hasLogo && 'redocusaurus-has-logo',
          className,
        ])}
      >
        <RedocComponent store={store} />
      </div>
    </>
  );
}

function collectMenuItemAnchors(collector: BrokenLinks, menuItems: IMenuItem[], parentAnchor = "") {
  menuItems.forEach((menuItem) => {
    // Register anchor for menu item
    collector.collectAnchor(menuItem.id);

    // If this is a child menu item, register a shortened anchor as well
    // This may not be necessary in all cases, but definitely needed for
    // menuItems of the form `tag/<Tag ID>/operation/<Operation ID>`.
    if (parentAnchor != "") {
      const childAnchor = menuItem.id.replace(`${parentAnchor}/`, "")
      collector.collectAnchor(childAnchor);
    }

    if (menuItem.items.length > 0) {
      collectMenuItemAnchors(collector, menuItem.items, menuItem.id)
    }
  })
}

export default ServerRedoc;
