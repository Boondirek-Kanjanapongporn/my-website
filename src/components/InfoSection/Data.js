import aboutmeimg from '../../images/aboutme3.png'
import Icon2 from '../../images/svg2.svg'
export const About= {
    id:'about',
    topLine: 'About me',
    headLine: 'Software Engineer x Developer',
    description: 'Welcome to my little corner of the world!! My nickname is Boon and I am currently a \
    junior student at the University of Glasgow— majoring in Computer Science. \
    I am extremely motivated to constantly develop my skills and grow professionally. \
    I hope that one day I can contribute my work to the world through programming. \
    Please feel free to check my Resume, Educational Background, Work Experiences, and Projects below! :)',
    newline: false,
    buttonLabel: 'Resume',
    to:{pathname:'https://drive.google.com/file/d/1kk1L-GMkzZSOy9teice05X1k6kwiw6Ot/view?usp=sharing'},
    target: "_blank",
    imgStart: false,
    img: aboutmeimg,
    alt: "Boondirek Kanjanapongporn",
}

export const Skills= {
    id:'skills',
    topLine: 'Programming Languages & Skills',
    headLine: 'Python, C, C++, Java, JavaScript, HTML5, CSS, SQL, Dart',
    description: 'Additional Skills: Leadership, Interpersonal, Problem-solving, Management, Teamplayer',
    description1: 'Frameworks/Modules: React.js, Next.js, Cypress.js, Qt, Robot, Docker, OpenCV, Raylib, Pygame',
    description2: 'Languages: Thai (Native), English (Fluent)',
    newline: true,
    buttonLabel: 'Achievements',
    to:'/achievements',
    target: "",
    imgStart: true,
    img: Icon2,
    alt: "",
}

