import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matched, setIsMatched] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMediaQueryChange = (event) => {
      setIsMatched(event.matches);
    };

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return matched;
};

export default useMediaQuery;
