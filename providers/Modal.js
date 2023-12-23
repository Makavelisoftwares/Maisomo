"use client";

import { UnitModal } from "@/components/Modals/UnitModal";
import React, { useEffect, useState } from "react";




function Modal() {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <UnitModal/>
    </>
  );
}

export default Modal;