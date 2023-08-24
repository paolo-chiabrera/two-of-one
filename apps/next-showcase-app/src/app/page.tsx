/* eslint-disable @next/next/no-img-element */
import StoreTile from "./components/store";
import FiltersSection from "./components/filters";
import { RestaurantsReponse, Restaurant } from "./types/restaurants";
export default async function Home() {
  const restaurants: RestaurantsReponse = await getRestaurants();

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

async function getRestaurants() {
  const [restaurants] = await Promise.all([
    fetch("https://comida.sillyapps.io/restaurants.json", {
      cache: "no-store",
    }),
    fetch("https://comida.sillyapps.io/countries.json", {
      cache: "no-store",
    }),
    fetch("https://comida.sillyapps.io/cities.json", {
      cache: "no-store",
    }),
  ]);

  if (!restaurants.ok) {
    throw new Error("Failed to fetch data");
  }

  return restaurants.json();
}
