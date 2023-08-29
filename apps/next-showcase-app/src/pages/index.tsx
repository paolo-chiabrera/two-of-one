import { Restaurant, RestaurantsReponse } from "../types/restaurants";
import FiltersSection from "../components/filters";
import StoreTile from "../components/store";
import { GetServerSideProps } from "next";
import queryStringModule from "querystring";
import Head from "next/head";

export default function Home({
  restaurantsList,
  queryString,
}: {
  restaurantsList: Restaurant[];
  queryString: string;
}) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="icon.png" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="icon.png" />
      </Head>
      <section className="content">
        <h2>Stores list{queryString}</h2>
        <FiltersSection />
        <section className="stores" id="stores-list">
          {restaurantsList.map((restaurant, index) => (
            <StoreTile index={index} restaurant={restaurant} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  restaurantsList: Restaurant[];
  queryString: string;
}> = async ({ query }) => {
  const queryString = queryStringModule.stringify(query);
  const restaurantsUrl = `https://comida.sillyapps.io/restaurants.json?${queryString}`;
  const countriesUrl = `https://comida.sillyapps.io/countries.json?${queryString}`;
  const citiesUrl = `https://comida.sillyapps.io/cities.json?${queryString}`;

  const [res] = await Promise.all([
    fetch(restaurantsUrl, { cache: "no-store" }),
    fetch(countriesUrl, { cache: "no-store" }),
    fetch(citiesUrl, { cache: "no-store" }),
  ]);

  const restaurants: RestaurantsReponse = await res.json();

  const restaurantsList = restaurants.elements.filter(
    ({ type, singleData }: Restaurant) =>
      type === "SINGLE" && singleData?.type === "STORE" && singleData?.storeData
  );

  return { props: { restaurantsList, queryString } };
};
