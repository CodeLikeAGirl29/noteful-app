import React from "react";
import "./CircleButton.css";

export default function CircleButton(props) {
  const { tag, className, children, ...otherProps } = props;

  return React.createElement(
    tag,
    {
      className: ["NavCircleButton", className].join(" "),
      ...otherProps,
    },
    children,
  );
}

CircleButton.defaultProps = {
  tag: "a",
};
