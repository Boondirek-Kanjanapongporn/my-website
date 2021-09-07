import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    widthWindow: isSSR ? 1200 : window.innerWidth,
    heightWindow: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ widthWindow: window.innerWidth, heightWindow: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
