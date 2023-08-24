import StoreTile from "./components/store";
import FiltersSection from "./components/filters";
import { RestaurantsReponse, Restaurant } from "./types/restaurants";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const restaurants: RestaurantsReponse = await getRestaurants(searchParams);

  const restaurantsList = restaurants.elements.filter(
    ({ type, singleData }: Restaurant) =>
      type === "SINGLE" && singleData?.type === "STORE" && singleData?.storeData
  );

  return (
    <section className="content">
      <h2>Stores list</h2>
      <FiltersSection />
      <section className="stores" id="stores-list">
        {restaurantsList.map((restaurant) => (
          <StoreTile key={restaurant.groupData?.id} restaurant={restaurant} />
        ))}
      </section>
    </section>
  );
}

async function getRestaurants(searchParams: { [key: string]: string }) {
  const keys = Object.keys(searchParams);
  const cache = keys.length ? "no-store" : "force-cache";

  const [restaurants] = await Promise.all([
    fetch("https://comida.sillyapps.io/restaurants.json", {
      cache,
    }),
    fetch("https://comida.sillyapps.io/countries.json", {
      cache,
    }),
    fetch("https://comida.sillyapps.io/cities.json", {
      cache,
    }),
  ]);

  if (!restaurants.ok) {
    throw new Error("Failed to fetch data");
  }

  return restaurants.json();
}
