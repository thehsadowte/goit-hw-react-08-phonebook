import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

import React from 'react';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass="dna-wrapper"
      />
      ;
    </div>
  );
};

export default Loader;
