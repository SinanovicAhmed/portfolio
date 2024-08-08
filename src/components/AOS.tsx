"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AOSComponent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default AOSComponent;
