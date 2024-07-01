import React from 'react';

interface Props {
  // Add your component props here
}

export default function Header(props: Props) {
  return (
    <header>
      <div className="flex justify-between items-center container pt-12 pb-10">
        <h1 className="text-xl font-bold tracking-[12px] text-white">TODO</h1>
        <img src="/images/icon-moon.svg" alt="theme" />
      </div>
    </header>
  );
}
