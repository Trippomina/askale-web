import { useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";

const useBreakpoint = () => {
  const xs = useMediaQuery("(max-width: 575.98px)");
  const sm = useMediaQuery("(min-width: 576px) and (max-width: 767.98px)");
  const md = useMediaQuery("(min-width: 768px) and (max-width: 991.98px)");
  const lg = useMediaQuery("(min-width: 992px) and (max-width: 1199.98px)");
  const xl = useMediaQuery("(min-width: 1200px)");

  return { xs, sm, md, lg, xl };
};

export default useBreakpoint;