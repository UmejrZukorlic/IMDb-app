import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { MovieContext } from "../context";
import { DynamicStar } from "react-dynamic-star";
import axios from "axios";
import "./titlePage.css";

const TitlePage = () => {
  const { identity } = useContext(MovieContext);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Title/k_1p4c9h6h/${identity}`)
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data);
      });
  }, [identity]);

  return (
    <div className="TitlePageSection">
      <h1>{data?.fullTitle}</h1>
      <img src={data?.image} alt="slika" />
      <div className="genres">
        {data?.genreList.map((el) => {
          return <button key={el.key}>{el.value}</button>;
        })}
      </div>
      <h3>Director: {data?.directors}</h3>
      <h3>Writers: {data?.writers}</h3>
      <h3>Languages: {data?.languages}</h3>
      <h3>
        Reating:
        <DynamicStar
          width={50}
          height={50}
          totalStars={10}
          outlined={true}
          rating={data?.imDbRating}
        />
      </h3>
      <div className="actorsSection">
        {data?.actorList.map((el, index) => {
          return (
            <div key={index} className="actorCard">
              <img src={el.image} alt="slikica" />
              <h4>
                {el.name} as: {el.asCharacter}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitlePage;
