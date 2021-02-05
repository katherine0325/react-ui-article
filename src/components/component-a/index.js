import React from 'react';

export default function Test ({ handleClick }) {
  return <div>
      <button onClick={handleClick}>点击改变B的内容</button>
    </div>
}
