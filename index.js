// util function
import fullStackDevImg from "./images/front-end-developer.png";
import volunteerWordCloud from "./images/volunteer2.jpg";
import databasesBG from "./images/tech_enthusiast.png";
import reactCalenderImg from './images/react_calender.png';
import UMS from './images/UMS.png';
import game2048Img from './images/game_2048.png';
import accelerometerAppImg from './images/accelerometer.png';
import reactJSImg from './images/tech_stack/react-1-logo-png-transparent.png';
import bootstrapImg from './images/tech_stack/Bootstrap_logo.svg.png';
import firebaseImg from './images/tech_stack/firebase.png';
import JSImg from './images/tech_stack/JavaScript-logo.png';
import vueJSImg from './images/tech_stack/Vue.js_Logo_2.svg.png';
import htmlImg from './images/tech_stack/HTML5.png';
import cssImg from './images/tech_stack/CSS3.png';
import viteImg from './images/tech_stack/Vitejs-logo.svg';
import nodeJS from './images/tech_stack/node-js-icon-1901x2048-mk1e13df.png';
import MySQL from './images/tech_stack/mysql-6.svg';
import ChartJS from './images/tech_stack/Chart.js_logo.svg.png';
import ExpressJS from './images/tech_stack/express.png';
import portfolioImg from './images/portfolio-thumb.png';
import githubImg from "./images/github.png";
import newTabImg from "./images/newTab.png";

// const summary = "A results-driven IT professional with 5 years of experience in full-stack development, database management, and data visualization. Proficient in technologies like Node.js, React.js, and MySQL, with a strong track record of delivering scalable and user-friendly applications. Skilled in collaborating with cross-functional teams, optimizing system performance, and driving data-driven decision-making through analytical tools like Power BI and Tableau.";

const roles = [
    {
        image: fullStackDevImg,
        name: "Full Stack Engineer",
        description: "I am a Full-Stack Software Engineer with over 5 years of experience in designing and developing scalable applications using Java, Spring Boot, AWS, PostgreSQL, React.js, and Angular. I specialize in microservices, GraphQL APIs, and cloud-based solutions, optimizing system performance, reducing infrastructure costs, and enhancing business automation. My expertise ensures efficient, high-performance applications tailored for seamless business operations.",
        link: null,
    },
    {
        image: databasesBG,
        name: "DataBase Architect",
        description: "As a database architect, I specialize in designing, developing, and optimizing robust database solutions that drive business success. With expertise in database architecture, query optimization, and data modeling, I deliver scalable and efficient systems tailored to meet diverse business needs. I have expertise working on SQL and NoSQL databases such as MySQL, PostgreSQL, MS SQL Server and MongoDB.",
        link: null,
    },
    {
        image: volunteerWordCloud,
        name: "Volunteer",
        description: "With my passion to work in volunteering, I served as a Front-End Panel Recruiter at Innova Solutions (Aug 2021 - Dec 2022), conducting 100+ technical interviews to streamline hiring with a 30% efficiency gain. Simultaneously, as a Technical Mentor (Aug 2021 - Feb 2022), guided a team of five trainees in JavaScript, React.js, and Angular, leading them to deliver three projects that increased customer revenue by 29%.",
        link: null,
    },
];

const projects = [
    {
        name: 'University Management System',
        description: 'Developed a University Management System to streamline student enrollment, course management, faculty administration, attendance tracking, grading, and finance management. The system improves efficiency, ensures data accuracy, and provides a user-friendly dashboard for administrators, faculty, and students to manage academic and administrative tasks seamlessly.',
        image: UMS,
        link: 'https://um-client.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/UM-Server', 
        tech_used: [
            {
                name: 'NodeJS',
                image: nodeJS
            },
            {
                name: 'Express',
                image: ExpressJS
            },
            {
                name: 'MySQL',
                image: MySQL,
            },
            {
                name: 'ReactJS',
                image: reactJSImg,
            },
            {
                name: 'ChartJS',
                image: ChartJS,
            },
            {
                name: 'Bootstrap',
                image: bootstrapImg,
            },
        ]
    },
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
]

const role_container = document.getElementsByClassName('roles')[0];
const project_container = document.getElementsByClassName('projects')[0];
const exp_container = document.getElementsByClassName('exp-container')[0];
const loader_container = document.getElementsByClassName('loader')[0];
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
        desc: "As a Freelance Software Developer, I designed and developed a robust University Management System using Java, Spring Boot and MySQL. Implemented responsive client with React.js and created secure, role-based access controls to ensure data integrity. Additionally, I optimized database performance and developed interactive dashboards for real-time academic tracking, delivering a tailored product for university management."
    },
    {
        type: 'work',
        year: "Jan, 2024",
        end: "Nov, 2024",
        title: 'Full Stack Engineer (Internship)',
        location: 'BigLynx Inc, Bellevue, Washington, USA',
        desc: "As a Full Stack Engineer Intern, I developed a scalable CRM portal leveraging Java, Spring Boot, PostgreSQL, Apollo GraphQL, and React.js. Designed interactive Power BI dashboards for real-time insights on sales performance and customer trends. Developed microservice architecture using Spring Cloud and PostgreSQL, resulted in improved system latency and consistent uptime of 99.9%."
    },
    {
        type: 'work',
        year: "Jan, 2023",
        end: "Dec, 2023",
        title: 'IT support Engineer (Part-time)',
        location: 'Central Michigan University, Mt. Pleasant, MI, USA',
        desc: "Leveraged AWS Lambda and CloudWatch Logs to enhance ETL processes for the university’s website, improving scalability and reducing latency by 60% to support 10,000+ concurrent users. Integrated Tableau UI into the admin dashboard for real-time enrollment trend visualization, boosting data accessibility, enabling data-driven decisions, and reducing reporting time by 30%."
    },
    {
        type: 'edu',
        year: "Jan, 2023",
        end: "Dec, 2024",
        title: 'Masters in Information Systems',
        location: 'Central Michigan University, Mt. Pleasant, MI, USA',
        desc: "I've pursued Master's in Information systems at Central Michigan University aligning my interests in business systems, data analytics, and database administration."
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
    const roles = ['Full Stack Engineer', 'Web Developer', 'Database Architect'];
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

function toggleLoader(){
    loader_container.classList.toggle('on');
}

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
    setTimeout(() => {
        toggleLoader();
        animateRoles();
    }, 500);
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