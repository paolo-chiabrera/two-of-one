"use client";

import styles from "./page.module.css";
import NavigationButton from "./portfolio/navigation-button";
import blockEventLoop from "../../blockEventLoop";

export default function Home() {
  const handleClick = () => {
    blockEventLoop();
  };
  return (
    <>
      <h1>
        Welcome to <span className={styles.title}>Next js!</span>
      </h1>
      <div className={styles.description}>
        In this showcase application you will see the Next.js 13.4 js features
        using random user generator api to display a portfolio
      </div>
      <article>
        <p>Essentials</p>
        <ul>
          <li>
            <small>
              <strong>Routing:</strong> A file-system based router built on top
              of Server Components that supports layouts, nested routing,
              loading states, error handling, and more.
            </small>
          </li>
          <li>
            <small>
              <strong>Rendering:</strong> Client-side and Server-side Rendering
              with Client and Server Components. Further optimized with Static
              and Dynamic Rendering on the server with Next.js. Streaming on
              Edge and Node.js runtimes.
            </small>
          </li>
          <li>
            <small>
              <strong>Data fetching:</strong> Simplified data fetching with
              async/await support in React Components and the fetch()s API that
              aligns with React and the Web Platform.
            </small>
          </li>
          <li>
            <small>
              <strong>Styling:</strong> Support for your preferred styling
              methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
            </small>
          </li>
          <li>
            <small>
              <strong>Optimization:</strong> Image, Fonts, and Script
              Optimizations to improve your applications Core Web Vitals and
              User Experience.
            </small>
          </li>
          <li>
            <small>
              <strong>Typescript:</strong> Improved support for TypeScript, with
              better type checking and more efficient compilation, as well as
              custom TypeScript Plugin and type checker.
            </small>
          </li>
        </ul>
      </article>
      <NavigationButton routeName="Portfolio" routePath="/portfolio" />
      <button onClick={handleClick}>Block Event Loop</button>
    </>
  );
}
