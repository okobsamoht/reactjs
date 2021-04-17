import React from 'react';
import './Backdoor.css'

const Backdoor = () => {
  return <div className={'Backdoor'} is={'Backdoor'}>
    <h2>Backdoor</h2>
    <div>
      {'React version: '+React.version}
    </div>
  </div>;
};

export default Backdoor;
