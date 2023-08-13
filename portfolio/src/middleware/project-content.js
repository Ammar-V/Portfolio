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

const projectDescriptions = [{
  id: 'art',
  title: "Autonomous Rover Team",
  img: artImg,
  altText: "Building the Computer Vision pipeline for an autonomous rover",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/src/middleware/art.md"
},
{
  id: 'autoronto',
  title: "aUToronto",
  img: autorontoImg,
  altText: "Building a self-driving car for the SAE Autodrive Challenge",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/src/middleware/autoronto.md"

},
{
  id: 'rescue-ranger',
  title: "Rescue Ranger",
  img: rescueImg,
  altText: "Combining Computer Vision with robots to help with search and rescue",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Rescue-Ranger/master/README.md"
},
{
  id: 'city-explorer',
  title: "City Explorer",
  img: mapperImg,
  altText: "A mapping software made with C++",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/src/middleware/mapper.md"
},
{
  id: 'potholes',
  title: "Pothole Augmentation",
  img: potholeImg,
  altText: "A Python script that automates data generation",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Potholes/main/README.md"
},
{
  id: 'freegear',
  title: "Freegear",
  img: freegearImg,
  altText: "A 90s style racing game that runs on an FPGA",
  markdown: "https://raw.githubusercontent.com/Ammar-V/FreegearOnFPGA/main/README.md?token=GHSAT0AAAAAACC4MUCVBZKA3E23W3BXQER2ZGZLHMA"
},
{
  id: 'barrels',
  title: "Barrels",
  img: barrelImg,
  altText: "A classical approach to detecting barrels",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Barrels/main/README.md"
  // markdown: barrelsDesc
},
{
  id: 'invoice-maker',
  title: "Invoice Maker",
  img: invoiceImg,
  altText: "An industry-style Invoice Maker made with JavaFX",
  markdown: "https://raw.githubusercontent.com/Ammar-V/InvoiceMaker/main/README.md"
},
{
  id: 'comment-creator',
  title: "Comment Creator",
  img: commentImg,
  altText: "A Java desktop app to help write student evaluations",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Comment-Creator/main/README.md"
}]

const getProject = (id) => {
  const found = projectDescriptions.find((project) => project.id === id);
  return found;
};

export {projectDescriptions, getProject};