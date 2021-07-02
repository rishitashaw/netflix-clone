import React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import BrowserContainer from "../containers/browser";

export default function Browse() {
  //series and films
  const { series } = useContent("series");
  const { films } = useContent("films");

  //slides
  const slides = selectionFilter({ series, films });

  //pass to browse container
  return <BrowserContainer slides={slides} />;
}
