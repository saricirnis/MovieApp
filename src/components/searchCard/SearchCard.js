import React from "react";
import { Link } from "react-router-dom";

import "./SearchCard.css";

const SearchCard = ({
  id,
  name,
  title,
  posterImage,
  mediaType,
  profileImage,
}) => {
  return (
    <>
      <Link
        to={mediaType === "movie" ? `/movie/${id}` : `/show/${id}`}
        className='search-card-poster'
      >
        <img
          src={`https://image.tmdb.org/t/p/w185${posterImage || profileImage}`}
          alt='poster'
          className='search-card-poster-image'
        />
        <p className='search-card-poster-title'>{title || name}</p>
      </Link>
    </>
  );
};

export default SearchCard;
