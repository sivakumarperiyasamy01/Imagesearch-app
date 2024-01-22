import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Shimmer from "../Utills/Shimmer";
import ErroPage from "./ErroPage";

const ImageContainer = () => {
  const [term, setterm] = useState("");
  const [images, setimages] = useState(null);

  useEffect(() => {
    imageData();
  }, [term]);

  const imageData = async () => {
    const data = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`
    );

    const json = await data.json();

    setimages(json.hits);
  };

  const Header = () => {
    const [Search, setSearch] = useState();
    return (
      <div className="my-10  text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setterm(Search);
          }}
        >
          <input
            type="text"
            placeholder="Search something"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2  placeholder:px-2 w-1/3 border border-gray-50  bg-gray-50 rounded-l-full"
          ></input>
          <button
            type="submit"
            className=" p-2  bg-gray-100 text-justify font-serif rounded-r-full "
          >
            Search
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Header />
      {images === null ? (
        <Shimmer />
      ) : images.length === 0 ? (
        <ErroPage />
      ) : (
        <div className="flex flex-wrap justify-center">
          {images.map((image) => (
            <ImageCard key={image.id} data={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
