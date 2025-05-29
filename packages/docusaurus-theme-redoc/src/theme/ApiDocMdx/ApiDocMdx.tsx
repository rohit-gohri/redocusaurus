import React, { useMemo } from 'react';
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';
import type { MdxProps } from '../../types/common';
import '../ApiSchema/styles.css';

const ApiDocMdx: React.FC<MdxProps> = ({ id, spec }: MdxProps): JSX.Element => {
  const specProps = useSpecData(id, spec);
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
