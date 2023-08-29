/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Restaurant } from "../types/restaurants";

export default function Store({
  restaurant,
  index,
}: {
  restaurant: Restaurant;
  index: number;
}) {
  const storeId = restaurant.singleData.storeData.store.id;
  return (
    <div
      className="store"
      key={index}
      data-test-id={storeId}
      style={{
        backgroundImage: `url('https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_1.0,h_156,w_351,b_transparent/${restaurant.singleData?.storeData?.store.imageId}')`,
      }}
    >
      <div className="title" data-test-id="title">
        {restaurant.singleData.storeData.store.name}
      </div>
      <div className="tags-row" data-test-id="tags-row">
        {restaurant.singleData.storeData.filters.map((filter: any, index) => (
          <div className="tag" key={index}>
            {filter.name}
          </div>
        ))}
      </div>
      <div className="bottom-row" data-test-id="bottom-row">
        <div className="row-item" data-test-id="rating">
          {restaurant.singleData.storeData.store.ratingInfo.cardLabel} (
          {restaurant.singleData.storeData.store.ratingInfo.totalRatingLabel})
        </div>
        <span className="hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  );
}
