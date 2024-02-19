import { CodeProject, CompanyWork } from "../app/Models/CodeProject.data";
export const HEADING = 
`John Davis Jr
<br />Software Engineer`;

export const SUBTITLE_LIST=[
  "Game Designer"
]

export const DESCRIPTION =
`My name is John Davis Jr. I'm a sofware engineer, a Game Designer, a Father, a husband, a brother and a son.
  While trying to do game design professionally, I am living through one of the easiest and roughest times for game
  developers.With a plethora of tools that facilitate designing, developing, and deploying a game idea to market
  fast and a glut of industry giants dumping thousands of experienced industry professionals into the market,
  I am just one of many who have been trying to make their mark.
  <br /> I work by day, sustaining my family, and by night I work on my next idea.`;

export const COMPANY_WORKS: CompanyWork[] = [
  {
    logoURL: "../../../assets/company_logos/Microsoft.png"
  },
  {
    logoURL: "../../../assets/company_logos/CapitalOne.png"
  },
  {
    logoURL: "../../../assets/company_logos/Tulalip-Tribes-Logo.svg"
  }
]

export const PROJECTS: CodeProject[] = [
  {
    name: "Projects",
    description: "Comming Soon...",
    image: "../../../assets/Placeholder.png"
    },
  {
    name: "Personal",
    description: "Constantly working...",
    image: "../../../assets/Placeholder.png"
    },
  {
    name: "Growth",
    description: "Always learning. Currently learning more about AI Systems...",
    image: "../../../assets/Placeholder.png"
    }
]
