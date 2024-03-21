"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b3bfbdb6-87ea-47c2-ab26-ec6a62017faa");
  }, []);

  return null;
};
