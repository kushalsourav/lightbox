import { v4 as uuid } from "uuid";
import got from '../../assets/img/gots1.jpg';
import breakingbad  from '../../assets/img/Breaking Bad.png';
import bcs from '../../assets/img/bcss4.jpg';
import peaky from '../../assets/img/Tommy Shelby by John Wood.jpg';
import gotbg from '../../assets/img/xlarge5339d767937c0.jpg';
import bbbg from '../../assets/img/bb2.jpg';
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "game of thrones",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
    url :got,
    backgroundImage : gotbg,
  },
  {
    _id: uuid(),
    categoryName: "breaking bad",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
      url: breakingbad,
      backgroundImage : bbbg,
  },
  {
    _id: uuid(),
    categoryName: "better call saul",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      url:bcs
  },
  {
    _id: uuid(),
    categoryName: "peaky blinders",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      url: peaky
  },
];
