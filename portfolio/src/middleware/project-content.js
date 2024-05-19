/*
  Import images
*/

import birdImg from "../pics/birds.gif";
import artImg from "../pics/art.png";
import mapperImg from "../pics/mapper.png";
import autorontoImg from "../pics/autoronto.png";
import barrelImg from "../pics/barrel.png";
import invoiceImg from "../pics/invoice.png";
import potholeImg from "../pics/pothole.png";
import commentImg from "../pics/comment.png";
import rescueImg from "../pics/rescue.png";
import freegearImg from "../pics/freegear.gif";

/*
  Import markdown files
*/

const projectDescriptions = [
{
  id: 'birds',
  title: "Generative Birds",
  img: birdImg,
  altText: "Animating birds in images using GANs",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/birds/birds.md"
},
  {
  id: 'art',
  title: "Autonomous Rover Team",
  img: artImg,
  altText: "Building the Computer Vision pipeline for an autonomous rover",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/art/art.md"
},
{
  id: 'autoronto',
  title: "aUToronto",
  img: autorontoImg,
  altText: "Building a self-driving car for the SAE Autodrive Challenge",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/autoronto/autoronto.md"

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
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/project-descriptions/mapper/mapper.md"
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
  markdown: "https://raw.githubusercontent.com/Ammar-V/FreegearOnFPGA/main/README.md"
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