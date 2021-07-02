import React from "react";
import { useContent } from "../hooks";

export default function Browse() {
  //series and films
  const { series } = useContent("series");
  const { films } = useContent("films");

  //slides
  //pass to browse container
  return <></>;
}
