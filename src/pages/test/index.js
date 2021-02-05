import React, { useState } from 'react';
import ComponentA from '../../components/component-a';
import ComponentB from '../../components/component-b';

export default function Test () {
  const [title, setTitle ] = useState('init title');

  function componentAClick() {
    setTitle('update title');
  }

  return <div>
      <ComponentA handleClick={componentAClick} />
      <ComponentB content={title} />
    </div>
}
