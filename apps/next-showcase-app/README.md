# Basic Next 13.4 Application!

This is a very simple application built with **Next.js 13.4**, aimed at showcasing the basic concepts and functionality of the framework. Please note that this readme provides a high-level overview and does not delve deeply into Next.js. For more in-depth knowledge and detailed documentation, it is recommended to refer to the official Next.js documentation.

To gain a deeper understanding of this Next.js application, we highly recommend **exploring this codebase**. The code contains some comments that explain the usage and provide additional insights into various aspects of the application's implementation.

# Table of Contents

- [Getting Started](#getting-started)

- [Next essentials](#next-essentials)

- [Learn more](#learn-more)

# Getting Started

Run the development server:

`pnpm dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Next essentials

### [Routing](https://nextjs.org/docs/app/building-your-application/routing)

A file-system based router built on top of Server Components that supports layouts, nested and dynamic routing, loading states, error handling, and more.

>  For example, the app portfolio directory has been created and handles the "/portfolio" URL.

Next.js also offers the **Link component**, which provides client-side navigation between pages without a full refresh. 

>   Check it in the app layout. 

Also, useRouter hook allows you to programmatically change routes inside Client Components.

>   Check the NavigationButton component

### [Rendering](https://nextjs.org/docs/app/building-your-application/rendering)

Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.

> The **User component** is server side component and displays the user random api data fetched. The Navigation Button is client side component ( by using 'use-client' word)

### [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

Simplified data fetching with async/await support in React Components and the  `fetch()`s API that aligns with React

> The **User component** uses it to fetch the random user api endpoint

### [Optimizations](https://nextjs.org/docs/app/building-your-application/optimizing)

Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience. Image component comes with automatic image optimization for LCP. 

> The **User component** uses it with priority prop

### [Typescript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.

### [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

Certain files follow specific naming conventions and serve particular purposes. Here's a brief overview of these files:

1. default.js
2. error.js
3. layout.js
4. loading.js
5. not-found.js.
6. page.js
7. route.js**

### [Metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

In this basic Next.js application, you can find the following metadata files: robots.txt and sitemap.
Next.js automatically generates a sitemap based on the pages defined in your application

> Checkout the sitemap and robot txt inside the app folder

### [Styling](https://nextjs.org/docs/app/building-your-application/styling)

Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS

## TODO accesibilidad

# Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
