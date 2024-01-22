import React from "react";

const ImageCard = ({ data }) => {
  const { tags } = data;

  const strarray = tags.split(",");
  //object destructring
  const { webformatURL, views, downloads, likes, user } = data;

  return (
    <div className="w-60 h-auto m-4 bg-gray-100 shadow-md p-2">
      <img className="" alt="logo" src={webformatURL}></img>
      <div>
        <h5 className="text-rose-900 font-bold px-3 my-2 ">Photo By:{user}</h5>
        <ul className="font-bold text-sm px-3 py-2">
          <li>Views:{views}</li>
          <li>Downloads:{downloads}</li>
          <li>Likes:{likes}</li>
        </ul>
        <div className="flex flex-wrap m-2">
          <span className="font-bold text-sm px-3 py-1 mx-1 my-2 bg-green-100">
            #{strarray[0]}
          </span>
          <span className="font-bold text-sm px-3 py-2 mx-1 my-2 bg-green-100">
            #{strarray[1]}
          </span>
          <span className="font-bold text-sm px-3 py-2 mx-1 my-2 bg-green-100">
            #{strarray[2]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
