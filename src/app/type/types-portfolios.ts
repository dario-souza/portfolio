import React from "react";
import { IconType } from "react-icons/lib";

export type Projects = {
  portfolios: Portfolio[];
};

export type Portfolio = {
  id: string;
  title: string;
  subtitle: string;
  repo: string;
  url: string;
  description: string;
  img: string;
  techs: React.ReactElement[];
};
