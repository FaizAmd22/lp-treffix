import React from "react";

type PageDotProps = {
  active?: boolean;
  onClick?: () => void;
};

const PageDot = (props: PageDotProps) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5Z"
        fill={props.active ? "#1570EF" : "#E0E0E0"}
      />
    </svg>
  );
};

export default PageDot;
