import React from 'react';

import Base from '../layouts/Base';

export default function Index() {
  return (
    <Base>
      <div className="max-w-screen-xl mx-auto text-center py-16 px-8">
        <h2 className="font-extrabold tracking-tight text-gray-900 text-4xl leading-10">
          Hello World!
        </h2>
        <button className='to-green-500 bg-green-200'>Hello</button>
      </div>
    </Base>
  );
}
