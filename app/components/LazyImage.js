"use client";
import React from "react";

export default function LazyImage({ src, alt = "", className = "", width, height }) {
  return (
    <img loading="lazy" src={src} alt={alt} className={className} width={width} height={height} />
  );
}
