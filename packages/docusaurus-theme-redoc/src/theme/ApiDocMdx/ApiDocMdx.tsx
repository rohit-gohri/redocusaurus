import React, { useMemo } from 'react';
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';
import { MdxProps as Props } from '../../types/common';
import '../ApiSchema/styles.css';

const ApiDocMdx: React.FC<Props> = ({ id }: Props): JSX.Element => {
  const specProps = useSpecData(id);
  const optionsOverrides = useMemo(() => {
    return {
      theme: {
        // TODO: Investigate what the best breakpoints should be
        breakpoints: {
          medium: '130rem',
          large: '130rem',
        },
      },
    };
  }, []);

  return <Redoc {...specProps} optionsOverrides={optionsOverrides} />;
};

export default ApiDocMdx;
