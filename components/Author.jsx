import React from "react";

const Author = ({ author }) => {
  return (
    <div>
      <img
        src={author.photo.url}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
      />
    </div>
  );
};

export default Author;
