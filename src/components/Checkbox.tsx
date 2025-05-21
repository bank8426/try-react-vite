import React, { ReactElement } from "react";

interface props {
  text: string;
  isChecked: boolean;
}
const Checkbox = ({ text, isChecked }: props) => {
  return (
    <div>
      {text} is {isChecked ? "done" : "in progress"}
    </div>
  );
};

export default Checkbox;
