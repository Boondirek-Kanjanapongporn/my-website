import aboutmeimg from '../../images/aboutme3.png'
import Icon2 from '../../images/svg2.svg'
export const About= {
    id:'about',
    topLine: 'About me',
    headLine: 'Software Engineer x Developer',
    description: 'Hi readers, my nickname is Boon and I am currently a \
    senior student at the University of Glasgow— majoring in Software Engineering, Computer Science. \
    Please feel free to check my Resume and other details below! :)',
    newline: false,
    buttonLabel: 'Resume',
    to:{pathname:'https://drive.google.com/file/d/1nhfgAUE6rK5Xas0dlIk3xT71U2n8ovD5/view?usp=sharing'},
    target: "_blank",
    imgStart: false,
    img: aboutmeimg,
    alt: "Boondirek Kanjanapongporn",
}

export const Skills= {
    id:'skills',
    topLine: 'Programming Languages & Skills',
    headLine: 'Python, Java, TypeScript, JavaScript, SQL, C, C++, Dart, R',
    description: 'Additional Skills: Leadership, Interpersonal, Problem-solving, Management, Teamplayer',
    description1: 'Frameworks/Modules: Spring Boot, React.js, Next.js, Cypress.js, Qt, Docker, OpenCV, Raylib, Pygame',
    description2: 'Languages: Thai (Native), English (Fluent)',
    newline: true,
    buttonLabel: 'Achievements',
    to:'/achievements',
    target: "",
    imgStart: true,
    img: Icon2,
    alt: "",
}

