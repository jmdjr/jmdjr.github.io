import { CodeProject, CompanyWork } from "../app/Models/CodeProject.data";
export const HEADING =
  `John Davis Jr
<br />Software Engineer`;

export const SUBTITLE_LIST = [
  "Game Designer"
]

export const PROJECTS_TOPTEXT = `Previously lead development for several games with <a href="https://www.lostseraph.com/" target="_blank">Lost Seraph, LLC</a>. 
Now working day jobs while trying to develop my own development style.`

export const DESCRIPTION =
  `My name is John Davis Jr. I'm a Full-Stack Developer, a Software Engineer, a Game Developer, a Father, a husband, a brother and a son.
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
    description: "Adapting to market...",
    image: "../../../assets/Projects_temp.png"
  },
  {
    name: "Personal",
    description: "working hard, playing hard...",
    image: "../../../assets/Personal_Temp.png"
  },
  {
    name: "Growth",
    description: "Always learning...",
    image: "../../../assets/Growth_Temp.png"
  }
]

export const EXPERIENCE: string = `I have over 10+ years of Software Engineering Experience, using various tools and technologies. Some examples
<h4>Web Technologies</h4>
CSS3, HTML5, JavaScript, Angular, jQuery, etc.
<h4>Game Engines</h4>
+8 years Unity Engine indie game development experience<br>
currently exploring Unreal Engine`;
