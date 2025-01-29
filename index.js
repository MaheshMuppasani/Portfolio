// util function
import frontEndDevImg from "./images/front-end-developer.png";
import nodeJSDevImg from "./images/1_bc9pmTiyKR0WNPka2w3e0Q.png";
import techEnthusiastImg from "./images/tech_enthusiast.png";
import reactCalenderImg from './images/react_calender.png';
import game2048Img from './images/game_2048.png';
import accelerometerAppImg from './images/accelerometer.png';
import reactJSImg from './images/tech_stack/react-1-logo-png-transparent.png';
import bootstrapImg from './images/tech_stack/Bootstrap_logo.svg.png';
import firebaseImg from './images/tech_stack/firebase.png';
import JSImg from './images/tech_stack/JavaScript-logo.png';
import vueJSImg from './images/tech_stack/Vue.js_Logo_2.svg.png';
import htmlImg from './images/tech_stack/HTML5.png';
import cssImg from './images/tech_stack/CSS3.png';
import viteImg from './images/tech_stack/Vitejs-logo.svg'
import portfolioImg from './images/portfolio-thumb.png';
import githubImg from "./images/github.png";
import newTabImg from "./images/newTab.png";

// const summary = "A results-driven IT professional with 5 years of experience in full-stack development, database management, and data visualization. Proficient in technologies like Node.js, React.js, and MySQL, with a strong track record of delivering scalable and user-friendly applications. Skilled in collaborating with cross-functional teams, optimizing system performance, and driving data-driven decision-making through analytical tools like Power BI and Tableau.";

const roles = [
    {
        image: frontEndDevImg,
        name: "Front-end developer",
        description: "I have had hands-on experience of 5+ years in web development. My expertise includes developing dynamic websites with vanilla javascript, scalable and single-page applications using JavaScript frameworks such as ReactJS, Angular and VueJS. My abilities includes building applications with responsiveness, mobile first, SEO optimized and high performance. I also expertized in working with various API architectures such as REST or GraphQL.",
        link: null,
    },
    {
        image: nodeJSDevImg,
        name: "Node.js developer",
        description: "I got 5+ years of experience in building applications with Node.js and databases such as MySQL or MongoDB. My work includes building simple and scalable applications to complex applications. I leveraged the advantage of using serverside capabilities of JavaScript with various technologies such as Express.js, Socket.io and Graphql Server, SQL and MongoDB.",
        link: null,
    },
    {
        image: techEnthusiastImg,
        name: "DataBase Engineer",
        description: "As a skilled database developer, I specialize in designing, developing, and optimizing robust database solutions that drive business success. With expertise in database architecture, query optimization, and data modeling, I deliver scalable and efficient systems tailored to meet diverse business needs. I have expertise working on SQL and NoSQL databases such as MySQL, PostgreSQL, MS SQL Server and MongoDB.",
        link: null,
    },
];

const projects = [
    {
        name: 'Perosnal Calender',
        description: 'Introducing a sleek and intuitive personal calendar application crafted with React.js, JavaScript, and Bootstrap, inspired by the user-friendly design of Microsoft Calendar. This modern, clean application simplifies event organization, and reminder setting. It combines advanced web technologies with a design reminiscent of Microsoft Calendar, enhancing scheduling experience.',
        image: reactCalenderImg,
        link: 'https://personal-calender.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/react-personal-calender', 
        tech_used: [
            {
                name: 'ReactJS',
                image: reactJSImg,
            },
            {
                name: 'Bootstrap',
                image: bootstrapImg,
            },
            {
                name: 'Google Firebase',
                image: firebaseImg,
            }
        ]
    },
    {
        name: '2048 Game',
        description: "Dive into the world of strategic gaming with my Vue.JS 2048 Game. This project showcases my expertise in Vue.JS, HTML, and CSS. Players can enjoy a personalized experience by selecting board sizes, themes, and the game automatically saves scores for seamless progression. It's a testament to my front-end skills, offering both entertainment and a smooth user interface.",
        image: game2048Img,
        link: 'https://game-2048-vert.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/vueJS-first-project/',
        tech_used: [
            {
                name: 'VueJS',
                image: vueJSImg,
            },
            {
                name: 'HTML',
                image: htmlImg
            },
            {
                name: 'CSS',
                image: cssImg,
            }
        ]
    },
    {
        name: 'Vanilla JS - Accelerometer',
        description: "The Speedometer UI is a dynamic, visually appealing project using JavaScript, HTML, and CSS to bring the thrill of high-performance driving to your screen. It features both analog and digital displays, responsive buttons, and a seamless blend of aesthetics and interactivity, showcasing the designer's expertise in creating engaging web applications.",
        image: accelerometerAppImg,
        link: 'https://accelerometer.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/Mahesh-Muppasani',
        tech_used: [
            {
                name: 'JavaScript',
                image: JSImg
            },
            {
                name: 'HTML',
                image: htmlImg
            },
            {
                name: 'CSS',
                image: cssImg,
            }
        ]
    },
    {
        name: 'Portfolio',
        description: "The portfolio is developed from scratch using vanilla JS covering all the essential concepts with some inspiration from the designs on Dribble. The website will be transitioned to a JS framework such as React.JS or Angular in future. This will be fun terraforming an existing JS application with a JS framework and lot of scope to learn new things under the hood.",
        image: portfolioImg,
        link: 'https://maheshmuppasani.vercel.app/',
        repo_link: "https://github.com/MaheshMuppasani/Portfolio/",
        tech_used: [
            {
                name: 'JavaScript',
                image: JSImg
            },
            {
                name: 'HTML',
                image: htmlImg
            },
            {
                name: 'CSS',
                image: cssImg,
            },
            {
                name: 'Vite',
                image: viteImg,
            }
        ]
    }
]

const role_container = document.getElementsByClassName('roles')[0];
const project_container = document.getElementsByClassName('projects')[0];
const exp_container = document.getElementsByClassName('exp-container')[0];
let roleIntervalId;

const renderRoles = function (roles) {
    return roles.map(role => {
        return `<div class="role">
        <div class="role-img">
            <img src=${role.image} />
            <div class="role-overlay">
                <h2>${role.name}</h2>
            </div>
        </div>
        <div class="role-desc">${role.description}</div></div>`
    });
}

function openLink(link){
    return window.open(link);
}

const renderProjects = function (roles) {
    return roles.map(role => {
        return `<div class="role">
        <div class="role-img">
            <img src=${role.image} />
            <div class="overlay">
                <h2>${role.name}</h2>
                <div class="options">
                    <a href="${role.repo_link}" target="_blank" title="Github Repository">
                        <img src=${githubImg} />
                    </a>
                    <a href="${role.link}" target="_blank" title="Open in new tab">
                        <img src=${newTabImg} />
                    </a>
                </div>
            </div>
        </div>
        <div class="tech-container">${renderTech(role.tech_used).join('')}</div>
        <div class="role-desc">${role.description}</div></div>`
    });
}

const renderTech = function (tech){
    return tech.map(tech_obj => {
        return `<div class = "tech-chip">
            <img src = ${tech_obj.image} />
            <span>${tech_obj.name}</span>
        </div>`
    })
}


const experience = [
    {
        type: 'work',
        year: "Dec, 2024",
        title: 'Freelance Software Developer (Self-employed, Open to Opportunities)',
        location: 'On-site',
        desc: "As a Freelance Software Developer, I designed and developed a web-based university management system using Node.js and MySQL. Implemented responsive UI designs with Bootstrap and created secure, role-based access controls to ensure data integrity. Additionally, I optimized database performance and developed interactive dashboards for real-time academic tracking, delivering a tailored product for university management."
    },
    {
        type: 'work',
        year: "Jan, 2024",
        end: "Nov, 2024",
        title: 'Full Stack Engineer (Internship)',
        location: 'BigLynx Inc, Bellevue, Washington, USA',
        desc: "As a Full Stack Engineer Intern, I developed a customizable portal integrated with Dynamics 365 CRM using React.js, Node.js, and MySQL Server. Designed interactive Power BI dashboards for real-time data visualization and built a scalable e-commerce platform with microservices architecture. Collaborated with cross-functional teams to create intuitive UI designs and writing test cases to ensure stable and efficient deployments."
    },
    {
        type: 'work',
        year: "Jan, 2023",
        end: "Dec, 2023",
        title: 'IT support Engineer (Part-time)',
        location: 'Central Michigan University, Mt. Pleasant, MI, USA',
        desc: "Designed, developed, and supported university’s website using Figma, React.js, Node.js, and MySQL, ensuring scalability, accessibility, and a seamless user experience. Collaborated with department chairs to gather requirements and deliver tailored web solutions, including an administrator portal integrated with Tableau dashboards for data visualization."
    },
    {
        type: 'edu',
        year: "Jan, 2023",
        end: "Dec, 2024",
        title: 'Masters in Information Systems',
        location: 'Central Michigan University, Mt. Pleasant, MI, USA',
        desc: "I'm pursuing my master's in Information systems at Central Michigan University aligning my interests in business systems, data analytics, and database administration."
    },
    {
        type: 'work',
        year: "Aug, 2021",
        end: "Dec, 2022",
        title: 'Web Developer (Full-time)',
        location: 'Innova Solutions, Hyderabad, India',
        desc: "As a web developer I worked on various real time web applications such as Nutrascriptives Direct, Order Fulfillment Portal and Internal Blog Portal for Innova Solutions. I also worked as technical interview panel at Innova Solutions",
    },
    {
        type: 'work',
        year: "Dec, 2019",
        end: "Aug, 2021",
        title: 'Associate Web Developer (Full-time)',
        location: 'Innova Solutions (Formerly ACS Solutions), Hyderabad, India',
        desc: "As an associate web developer I worked on various real time web applications such as Nutrascriptives Direct and Order Fulfillment Portal for administrators",
    },
    {
        type: 'edu',
        year: 2016,
        end: 2020,
        title: 'Bachelors in Electronics and Communication Eng',
        location: 'K L University, Vijayawada, India',
        desc: 'I completed my bachelors at KLUniversity in Electronics and Communication Engineering and got placed in ACS Solutions as a Web developer.'
    }
]

function renderExperience(experiences = []){
    return experiences.map((exp, i) => {
        return `
        <div class="phase">
            <div class="phase-inner">
                <div class="role-tenure">
                    <span class="year">${exp.year + (!i && !exp.end ? ' - present': exp.end ? ` - ${exp.end}` : "" )}</span>
                    <span class="material-symbols-outlined role-icon">${exp.type==='edu' ? 'school' : 'work'}</span>
                </div>
                <div class="job-desc">
                    <h3 class="role-name">${exp.title}</h3>
                    <div class="role-site">${exp.location}</div>
                    <p>${exp.desc}</p>
                    <span class="year">${exp.year + (!i && !exp.end ? ' - present': exp.end ? ` - ${exp.end}` : "" )}</span>
                </div>
            </div>
        </div>`
    })
}

const sections = document.getElementsByClassName('section');
const links = Array.from(document.getElementsByClassName('link'));

function animateRoles() {
    const roles = ['Full Stack Engineer', 'MERN Stack Engineer', 'MEAN Stack Engineer', 'Web Developer'];
    const roleContainer = document.getElementsByClassName('role-text')[0];
    if (!roleContainer) return;

    let roleIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    roleContainer.innerHTML = "";

    function typeRole() {
        if (typingForward) {
            roleContainer.innerHTML = roles[roleIndex].slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === roles[roleIndex].length) {
                typingForward = false;
                setTimeout(typeRole, 1000);
                return;
            }
        } else {
            roleContainer.innerHTML = roles[roleIndex].slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                typingForward = true;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 100);
                return;
            }
        }
        roleIntervalId = setTimeout(typeRole, 100);
    }

    typeRole();
}

function stopAnimateRoles() {
    clearTimeout(roleIntervalId);
}

window.addEventListener("beforeunload", stopAnimateRoles);

window.onload = function() {
    role_container.innerHTML = renderRoles(roles).join('');
    project_container.innerHTML = renderProjects(projects).join('');
    exp_container.innerHTML = renderExperience(experience).join('');
    syncIndicatorToSection(links.find(link => link.classList.contains('link-active')));
    const theme = localStorage.getItem('theme');
    
    if(theme && theme==='dark'){
        document.body.classList.add('dark');
    } else{
        document.body.classList.remove('dark');
    }
    animateRoles();
}

window.onresize = function(){
    syncIndicatorToSection(links.find(link => link.classList.contains('link-active')))
}

let blockScroll = false, timeout = undefined;

let navbar = document.getElementsByClassName('nav-btns')[0];
navbar.addEventListener('click', function(e){
    let current_active = document.getElementsByClassName('link-active')[0];
    current_active.classList.remove('link-active');
    if(e.target.className.includes('list-item-inline')){
        e.target.children[0].classList.add('link-active');
        syncIndicatorToSection(e.target.children[0]);
    } else{
        e.target.classList.add('link-active');
        syncIndicatorToSection(e.target);
    }
    blockScroll = true;
    if(timeout){
        clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
        blockScroll = false;
    }, 1000)
})

const section_indicator = document.querySelector('.navigation .nav-btns .indicator');
function syncIndicatorToSection(curr_active){
    if(!curr_active) return;
    const parentPos = curr_active?.parentNode?.parentNode?.getBoundingClientRect() || null; // returns nav-btns Ul or null.
    const childPos = curr_active.getBoundingClientRect();
    const relativePos = {};
    relativePos.top    = childPos.top - parentPos.top;
    relativePos.right  = childPos.right - parentPos.right;
    relativePos.bottom = childPos.bottom - parentPos.bottom;
    relativePos.left   = childPos.left - parentPos.left;

    section_indicator.style.top = relativePos.top + 'px';
    section_indicator.style.left = relativePos.left + 'px';
    section_indicator.style.width = childPos.width + 'px';
    section_indicator.style.height = childPos.height + 'px';
}

document.addEventListener('scroll', function(){
    if(blockScroll) return;
    for(let section of sections){
        let rect = section.getBoundingClientRect();
        if(rect.top >= 0 && rect.top < window.innerHeight*0.6){
            let activeLink = links.find(link => link.getAttribute('href').split('#')[1]==section.id);
            if(activeLink){
                let current_active = links.find(link => link.classList.contains('link-active'));
                current_active.classList.remove('link-active');
                activeLink.classList.add('link-active');
                syncIndicatorToSection(activeLink);
            }
            break;
        }
    }
});
const themeButton = document.getElementsByClassName('theme')[0];
themeButton.addEventListener('click', function(){
    themeButton.innerHTML = '';
    if(document.body.classList.contains('dark')){
        themeButton.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
        localStorage.setItem('theme', 'light');
    } else {
        themeButton.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        localStorage.setItem('theme', 'dark');
    }
    document.body.classList.toggle('dark');
})
async function sendMessage(e){
    const body = {
        email: e.target.email.value,
        message: e.target.message.value,
    }
    
    const data = await fetch('http://localhost:3000/send', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // body data type must match "Content-Type" header
    });
    console.log(data);
    const res = await data.text();
    const response = JSON.parse(res);
    if (response.status === "success") {
        e.target.email.value = '';
        e.target.message.value = '';
        return 1;
    } else {
        console.log('Error sending email');
    }
    return 0;
}

const form = document.getElementsByClassName('contact-form')[0];
const form_footer = document.getElementsByClassName('contact-form-footer')[0];
const form_message = document.getElementsByClassName('form-message')[0];

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    form.submit.classList.add('sending');
    form.submit.setAttribute('disabled', true);
    const message = await sendMessage(e);

    form.submit.classList.remove('sending');
    form.submit.removeAttribute('disabled');
    form_message.classList.add(message ? 'success' : 'failed');
    form_message.innerHTML = message ? (`${'Email sent successfully! <span class="material-symbols-outlined">done</span>'}`) : (`${'Unable to send e-mail! <span class="material-symbols-outlined">error</span>'}`);
    form_footer.classList.add('submitted');
    setTimeout(() => form_footer.classList.remove('submitted'), 2000);
    
    // display message sent on the button itself
    // or 
    // Scrum master
    // Python
    // AWS cloud practitioner
    // CBAP
    // AZURE devops
    
})