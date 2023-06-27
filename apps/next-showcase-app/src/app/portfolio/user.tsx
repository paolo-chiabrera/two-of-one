import { UserResponse, User } from "./types";
import Image from "next/image";
import styles from "./page.module.css";

export default async function User() {
  const user = await getUserContent();
  return (
    <>
      <article className={styles.portfolio}>
        <div className={styles.section}>
          <Image
            className={styles.image}
            src={user.picture.large}
            alt="Random user picture"
            width={200}
            height={24}
            priority //You should add the priority property to the image that will be the Largest Contentful Paint (LCP) element for each page
          />
          <h2 className={styles.title}>
            I'm{" "}
            <span className={styles.name}>
              {user.name.first} {user.name.last}!
            </span>
          </h2>
        </div>
        <div className={styles.section}>
          <>
            <p>
              <strong>Summary</strong>
            </p>
            <p>
              Highly skilled and motivated software engineer with a passion for
              problem-solving and creating innovative solutions. Proven track
              record of delivering high-quality software projects on time and
              within budget. Strong expertise in object-oriented programming,
              agile methodologies, and collaborative teamwork. Excellent
              communication skills and ability to work effectively in fast-paced
              environments.
            </p>
          </>
          <>
            <strong>Contact information</strong>
            <p className={styles.title}>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Country:</strong> {user.location.country}
            </p>
          </>
        </div>
      </article>
    </>
  );
}

async function getUserContent() {
  const res = await fetch("https://randomuser.me/api/", { cache: "no-store" }); // By default, fetch will automatically fetch and cache data indefinitely.
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const userResponse: UserResponse = await res.json();
  return userResponse.results[0]
}
