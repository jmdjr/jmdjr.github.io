import { CodeProject, CompanyWork } from "../app/Models/CodeProject.data";
export const HEADING = 
`John Davis Jr
<br />Software Engineer`;

export const SUBTITLE_LIST=[
  "Game Designer"
]

export const PROJECTS_TOPTEXT = `Previously lead development for several games with <a href="https://www.lostseraph.com/" target="_blank">Lost Seraph, LLC</a>. 
Now working day jobs while trying to devlop my own style.`

export const DESCRIPTION =
`My name is John Davis Jr. I'm a Full-Stack Developer, a Sofware Engineer, a Game Developer, a Father, a husband, a brother and a son.
  While trying to do game design professionally, I work a day job. I am just one of many software engineers who have been trying to make their mark developing video games.
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
