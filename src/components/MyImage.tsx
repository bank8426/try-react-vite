import React from "react";

interface Props {
  imgUrl: string;
}
const MyImage = ({ imgUrl }: Props) => {
  return (
    <>
      <img src={imgUrl} width="100px" />
    </>
  );
};

export default MyImage;
