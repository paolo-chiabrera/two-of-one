"use client";

import blockEventLoop from  '../../../blockEventLoop'
export default function EventLoop() {
  const handleClick = () => {
    blockEventLoop();
  };
  return (
    <>
      <h1>Performance test</h1>
      <button onClick={handleClick}>Block Event Loop</button>
    </>
  );
}
