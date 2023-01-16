import React from "react";

const Item = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <img src={item.src} alt="not found" className="w-20" />
      <p className="font-semibold text-lg">{item.name}</p>
      <p className="text-sm text-gray-600">{item.comment}</p>
    </div>
  );
};

export default Item;
