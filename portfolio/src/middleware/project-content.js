/*
  Import images
*/

import artImg from "../pics/art.png";
import mapperImg from "../pics/mapper.png";
import autorontoImg from "../pics/autoronto.png";
import barrelImg from "../pics/barrel.png";
import invoiceImg from "../pics/invoice.png";
import potholeImg from "../pics/pothole.png";
import commentImg from "../pics/comment.png";
import rescueImg from "../pics/rescue.png";
import freegearImg from "../pics/freegear.png";

import artBlurImg from "../pics/art_blur.png";
import mapperBlurImg from "../pics/mapper_blur.png";
import autorontoBlurImg from "../pics/autoronto_blur.png";
import barrelBlurImg from "../pics/barrel_blur.png";
import invoiceBlurImg from "../pics/invoice_blur.png";
import potholeBlurImg from "../pics/pothole_blur.png";
import commentBlurImg from "../pics/comment_blur.png";
import rescueBlurImg from "../pics/rescue_blur.png";
import freegearBlurImg from "../pics/freegear_blur.png";


/*
  Import markdown files
*/

const projectDescriptions = [{
  id: 'art',
  title: "Autonomous Rover Team",
  img: artImg,
  blurImg: artBlurImg,
  altText: "Building the Computer Vision pipeline for an autonomous rover",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/src/middleware/art.md"
},
{
  id: 'autoronto',
  title: "aUToronto",
  img: autorontoImg,
  blurImg: autorontoBlurImg,
  altText: "Building a self-driving car for the SAE Autodrive Challenge",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/src/middleware/autoronto.md"

},
{
  id: 'rescue-ranger',
  title: "Rescue Ranger",
  img: rescueImg,
  blurImg: rescueBlurImg,
  altText: "Combining Computer Vision with robots to help with search and rescue",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Rescue-Ranger/master/README.md"
},
{
  id: 'city-explorer',
  title: "City Explorer",
  img: mapperImg,
  blurImg: mapperBlurImg,
  altText: "A mapping software made with C++",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Portfolio/new/portfolio/src/middleware/mapper.md"
},
{
  id: 'potholes',
  title: "Pothole Augmentation",
  img: potholeImg,
  blurImg: potholeBlurImg,
  altText: "A Python script that automates data generation",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Potholes/main/README.md"
},
{
  id: 'freegear',
  title: "Freegear",
  img: freegearImg,
  blurImg: freegearBlurImg,
  altText: "A 90s style racing game that runs on an FPGA",
  markdown: "https://raw.githubusercontent.com/Ammar-V/FreegearOnFPGA/main/README.md?token=GHSAT0AAAAAACC4MUCVBZKA3E23W3BXQER2ZGZLHMA"
},
{
  id: 'barrels',
  title: "Barrels",
  img: barrelImg,
  blurImg: barrelBlurImg,
  altText: "A classical approach to detecting barrels",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Barrels/main/README.md"
  // markdown: barrelsDesc
},
{
  id: 'invoice-maker',
  title: "Invoice Maker",
  img: invoiceImg,
  blurImg: invoiceBlurImg,
  altText: "An industry-style Invoice Maker made with JavaFX",
  markdown: "https://raw.githubusercontent.com/Ammar-V/InvoiceMaker/main/README.md"
},
{
  id: 'comment-creator',
  title: "Comment Creator",
  img: commentImg,
  blurImg: commentBlurImg,
  altText: "A Java desktop app to help write student evaluations",
  markdown: "https://raw.githubusercontent.com/Ammar-V/Comment-Creator/main/README.md"
}]


const getProject = (id) => {
  const found = projectDescriptions.find((project) => project.id === id);
  return found;
};

export {projectDescriptions, getProject};