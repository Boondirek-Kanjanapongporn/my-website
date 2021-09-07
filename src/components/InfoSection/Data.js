import aboutmeimg from '../../images/aboutme3.png'
import Icon2 from '../../images/svg2.svg'
export const homeObjOne= {
    id:'about',
    topLine: 'About me',
    headLine: 'Software Engineer x Developer Student @ KMITL',
    description: 'Welcome to my little corner of the world!! My nickname is Boon and I\'m currently a \
    sophomore at King Mongkut\'s Institute of Technology Ladkrabang— majoring in Software Engineering. \
    Furthermore, I am also a Python teacher assistant and a Web developer for the faculty. I am extremely \
    motivated to constatly develop my skills and grow professionally. I hope that one day I can contribute my \
    work to the world through programming. :)',
    newline: false,
    buttonLabel: 'Resume',
    to:{pathname:'https://www.canva.com/design/DAEo-TXfpSw/EnHmiCHGN2piJJS-DJtH7w/view?utm_content=DAEo-TXfpSw&utm_campaign=designshare&utm_medium=link&utm_source=viewer'},
    target: "_blank",
    imgStart: false,
    img: aboutmeimg,
    alt: "Boondirek Kanjanapongporn",
}

export const homeObjTwo= {
    id:'skills',
    topLine: 'Programming Languages & Skills',
    headLine: 'Python, C, C++, Java, Javascript, HTML5, CSS, Dart',
    description: 'Additional Skills: Leadership, Interpersonal, Problem-solving, Management, Teamplayer',
    description1: 'Frameworks/Modules: React, Flutter, Django, OpenCV, Tesseract, Leptonica, Raylib, Qt, Pygame',
    description2: 'Languages: Thai [Native], English [IELTS: 8]',
    newline: true,
    buttonLabel: 'Achievements',
    to:'/achievements',
    target: "",
    imgStart: true,
    img: Icon2,
    alt: "",
}

