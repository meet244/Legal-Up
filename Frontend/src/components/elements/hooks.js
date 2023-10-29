import { useEffect } from "react";
const calcNavbarHoverSpan = (childRef, parentRef) => {
  let left = Math.round(
    childRef.current.getBoundingClientRect().left -
      parentRef.current.getBoundingClientRect().left -
      2
  );
  let width = childRef.current.getBoundingClientRect().width;
  return { left, width };
};

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export { calcNavbarHoverSpan, useOutsideClick };
