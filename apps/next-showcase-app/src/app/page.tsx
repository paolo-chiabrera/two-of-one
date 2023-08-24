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
  const queryString = new URLSearchParams(searchParams);

  const restaurantsUrl = `https://comida.sillyapps.io/restaurants.json?${queryString}`;
  const countriesUrl = `https://comida.sillyapps.io/countries.json?${queryString}`;
  const citiesUrl = `https://comida.sillyapps.io/cities.json?${queryString}`;

  console.log(restaurantsUrl);

  const [restaurants] = await Promise.all([
    fetch(restaurantsUrl),
    fetch(countriesUrl),
    fetch(citiesUrl),
  ]);

  if (!restaurants.ok) {
    throw new Error("Failed to fetch data");
  }

  return restaurants.json();
}
