import React from 'react';
import type { AppStore } from 'redoc';

function ClientStyles(_props: { store: AppStore }) {
  return <div className="redocusaurus-styles" />;
}

export { ClientStyles as ServerStyles };
