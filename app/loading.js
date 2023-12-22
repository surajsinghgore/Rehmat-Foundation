"use client";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

export default function Loader() {
  const currentPage = usePathname();

  const [progress, setProgress] = useState(20);
  useEffect(() => {
    setTimeout(() => {
      setProgress(100);
    }, 0);
  }, [currentPage]);
  return (
    <>
      <LoadingBar color="#ff0800" progress={progress} height={6} />
    </>
  );
}
