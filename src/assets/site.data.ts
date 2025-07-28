import { CodeProject, CompanyWork } from "../app/Models/CodeProject.data";
export const HEADING =
  `John Davis Jr
<br />Software Engineer`;

export const PROJECT_NAME = 'jmdjr.github.io';

export const SUBTITLE_LIST = [
  "Game Designer"
]

export const PROJECTS_TOPTEXT = `Previously lead developer for several games with <a href="https://www.lostseraph.com/" target="_blank">Lost Seraph, LLC</a>. 
Now working day jobs while trying to develop my own development style.`

export const DESCRIPTION =
  `My name is John Davis Jr. I'm a Full-Stack Developer, a Software Engineer, a Game Developer, a Father, a husband, a brother, and a son.
  I am just one of many Software Engineers who have been trying to make their mark developing video games, and video game adjacent software.
  <br /> I work by day, sustaining my family, and by night I work on my next ideas.`;

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
    name: `Number Block Game`,
    description: `A concept I am planning, based off the children's YT videos and using the `,
    links: [
      {
        text: 'Number Blocks Game',
        URL: 'https://jmdjr.github.io/number-blocks/'
      }
    ]
  },
  {
    name: `Chat AI`,
    description: `Try your personally hosted AIs here, this page makes a connection to the ip address you provide, 
    and attempts to chat with it as if its an AI!`,
    links: [
      {
        text:'Personal AI Chat',
        URL: 'https://jmdjr.github.io/personal-AI/'
      }
    ]
  },
  {
    name: `Pattern Lock Game`,
    description: `Mastermind meets lock screen passwords. Can you guess the pattern?`,
    links: [
      {
        text: 'Pattern Lock Game',
        URL: 'https://jmdjr.github.io/PatternLock-Game/'
      }
    ]
  },
  {
    name: `Fun With Javascript`,
    description: `Small Javascript/Jquery based projects I made to have fun and show off.`,
    links: [
      {
        text: 'Fun with Javascript',
        URL: 'https://jmdjr.github.io/FunWithJavascript/'
      }
    ]
  },
]

export const EXPERIENCE: string = `I have over 10+ years of Software Engineering Experience, using various tools and technologies. Some examples
<h4>Web Technologies</h4>
CSS3, HTML5, JavaScript, Angular, jQuery, etc.
<h4>Game Engines</h4>
+8 years Unity Engine indie game development experience<br>
currently exploring Unreal Engine`;
