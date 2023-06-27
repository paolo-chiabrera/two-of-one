import Link from "next/link";
import "@picocss/pico";
import styles from "./page.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <ul>
            <li>
              <strong>Next js</strong>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/event-loop">Block Event Loop</Link>
            </li>
          </ul>
        </nav>
        <main className="container">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
