import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiMui,
  SiStorybook,
  SiJest,
  SiReduxsaga,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const MAIN = "main";
const ADDITIONAL = "additional";

export const SKILLS_DATA = [
  {
    name: "Javascript",
    iconType: SiJavascript,
    type: MAIN,
  },
  {
    name: "React",
    iconType: SiReact,
    type: MAIN,
  },
  {
    name: "Redux",
    iconType: SiRedux,
    type: MAIN,
  },

  {
    name: "Typescript",
    iconType: SiTypescript,
    type: MAIN,
  },
  {
    name: "ReactNative",
    iconType: SiReact,
    type: MAIN,
  },

  {
    name: "Storybook",
    class: "skill-name",
    iconType: SiStorybook,
    type: MAIN,
  },
  {
    name: "Material UI",
    iconType: SiMui,
    type: MAIN,
  },
  {
    name: "Jest",
    iconType: SiJest,
    type: MAIN,
  },
  {
    name: "Redux-saga",
    iconType: SiReduxsaga,
    type: MAIN,
  },
  {
    name: "HTML5",
    iconType: SiHtml5,
    type: MAIN,
  },
  {
    name: "CSS3",

    iconType: SiCss3,
    type: MAIN,
  },
  {
    name: "Ruby",

    iconType: SiRuby,
    type: ADDITIONAL,
  },
  {
    name: "Rails",
    iconType: SiRubyonrails,
    type: ADDITIONAL,
  },
  {
    name: "Node.js",
    iconType: IoLogoNodejs,
    type: ADDITIONAL,
  },
  {
    name: "MongoDB",
    iconType: SiMongodb,
    type: ADDITIONAL,
  },
  {
    name: "Firebase",
    iconType: SiFirebase,
    type: ADDITIONAL,
  },
];
