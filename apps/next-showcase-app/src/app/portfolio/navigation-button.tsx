"use client";

import { useRouter } from "next/navigation";

export default function NavigationButton({ routeName, routePath }: {routeName: string, routePath: string}) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push(routePath)}>
      Check the {routeName} page
    </button>
  );
}
