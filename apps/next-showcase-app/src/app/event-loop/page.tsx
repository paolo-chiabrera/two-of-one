"use client";

import blockEventLoop from  '../../../blockEventLoop'
import { useRouter } from 'next/navigation';
export default function EventLoop() {
  const router = useRouter()
  const handleClick = () => {
    blockEventLoop();
    router.push('/')
  };
  return (
    <>
      <h1>Performance test</h1>
      <button onClick={handleClick}>Block Event Loop</button>
    </>
  );
}
