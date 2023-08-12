/*
  Import images
*/

import artImg from "../art.png";
import mapperImg from "../mapper.png";
import autorontoImg from "../autoronto.png";
import barrelImg from "../barrel.png";
import invoiceImg from "../invoice.png";
import potholeImg from "../pothole.png";
import commentImg from "../comment.png";
import rescueImg from "../rescue.png";
import freegearImg from "../freegear.png";

/*
  Import markdown files
*/

import reversiDesc from "./reversi.md";
import potholesDesc from "./potholes.md";

const projectDescriptions = [{
  id: 'art',
  title: "Autonomous Rover Team",
  img: artImg,
  altText: "Building the Computer Vision pipeline for an autonomous rover",
  markdown: reversiDesc
},
{
  id: 'autoronto',
  title: "aUToronto",
  img: autorontoImg,
  altText: "Building a self-driving car for the SAE Autodrive Challenge",
  markdown: reversiDesc

},
{
  id: 'rescue-ranger',
  title: "Rescue Ranger",
  img: rescueImg,
  altText: "Combining Computer Vision with robots to help with search and rescue",
  markdown: reversiDesc
},
{
  id: 'city-explorer',
  title: "City Explorer",
  img: mapperImg,
  altText: "A mapping software made with C++",
  markdown: reversiDesc
},
{
  id: 'potholes',
  title: "Pothole Augmentation",
  img: potholeImg,
  altText: "A Python script that automates data generation",
  markdown: potholesDesc
},
{
  id: 'freegear',
  title: "Freegear",
  img: freegearImg,
  altText: "A 90s style racing game that runs on an FPGA",
  markdown: reversiDesc
},
{
  id: 'barrels',
  title: "Barrels",
  img: barrelImg,
  altText: "A classical approach to detecting barrels",
  markdown: reversiDesc
},
{
  id: 'invoice-maker',
  title: "Invoice Maker",
  img: invoiceImg,
  altText: "An industry-style Invoice Maker made with JavaFX",
  markdown: reversiDesc
},
{
  id: 'comment-creator',
  title: "Comment Creator",
  img: commentImg,
  altText: "A Java desktop app to help write student evaluations",
  markdown: reversiDesc
}]

const getProject = (id) => {
  const found = projectDescriptions.find((project) => project.id === id);
  return found;
};

export {projectDescriptions, getProject};