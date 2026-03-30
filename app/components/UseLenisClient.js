"use client";
import React from "react";
import useLenis from "../lib/useLenis";

export default function UseLenisClient() {
  // initialise lenis only on the client
  useLenis();
  return null;
}
