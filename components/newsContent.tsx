import React from "react";
const parse = require("html-react-parser");

const NewsContent: React.FC<{ data: string }> = ({ data }) => {
  //   return parse(data);
  return (
    <div
      className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: data }}
    ></div>
  );
};

export default NewsContent;
