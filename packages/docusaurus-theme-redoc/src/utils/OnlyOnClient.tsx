import React from 'react';

/**
 * TODO: Does not work currently
 * @see https://github.com/facebook/react/issues/10923#issuecomment-332960759
 */
export class OnlyOnClient extends React.Component<{
  html: string;
}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />;
  }
}
