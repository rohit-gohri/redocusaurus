import React from 'react';
import clsx from 'clsx';
import '../../global';
import { IMenuItem, Redoc as RedocComponent, RedocRawOptions } from 'redoc';
import type { SpecProps } from '../../types/common';
import { useSpec } from '../../utils/useSpec';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import { ServerStyles } from './Styles';
import './styles.css';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2024 Rohit Gohri
 * Released under the MIT License
 */
function ServerRedoc(
  props: SpecProps & {
    className?: string;
    optionsOverrides?: RedocRawOptions;
  },
): JSX.Element {
  const { className, optionsOverrides, ...specProps } = props;
  const { store, darkThemeOptions, lightThemeOptions, hasLogo } = useSpec(
    specProps,
    optionsOverrides,
  );

  collectMenuItemAnchors(store.menu.items);

  return (
    <>
      <ServerStyles
        specProps={specProps}
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

function collectMenuItemAnchors(menuItems: IMenuItem[], parentAnchor = "") {
  menuItems.forEach((menuItem) => {
    // Register anchor for menu item
    useBrokenLinks().collectAnchor(menuItem.id);

    // If this is a child menu item, register a shortened anchor as well
    // This may not be necessary in all cases, but definitely needed for
    // menuItems of the form `tag/<Tag ID>/operation/<Operation ID>`.
    if (parentAnchor != "") {
      const childAnchor = menuItem.id.replace(`${parentAnchor}/`, "")
      useBrokenLinks().collectAnchor(childAnchor);
    }

    if (menuItem.items.length > 0) {
      collectMenuItemAnchors(menuItem.items, menuItem.id)
    }
  })
}

export default ServerRedoc;
