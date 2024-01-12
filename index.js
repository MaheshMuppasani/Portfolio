// util function
const roles = [
    {
        image: "./images/front-end-developer.png",
        name: "Front-end developer",
        description: "I have had hands-on experience of 3+ years in front-end development. My expertise includes developing static websites with vanilla javascript, scalable websites using JavaScript frameworks such as ReactJS, Angular and VueJS, etc. I built websites with responsiveness, mobile first, SEO optimized and high performance. My work includes utilizing APIS using either RESTful or GraphQL architecture.",
        link: null,
    },
    {
        image: "./images/1_bc9pmTiyKR0WNPka2w3e0Q.png",
        name: "Node.js developer",
        description: "I began my back-end development journey 1 year after my front-end mastery. I understood the ecosystem and road map of backend development. I then started learnining Node.js to build simple yet scalable backend applications. I leveraged the advantage of using serverside capabilities of JavaScript with various backend technologies such as Express.js, Socket.io and Graphql Server, SQL and MongoDB.",
        link: null,
    },
    {
        image: "./images/tech_enthusiast.png",
        name: "Tech Enthusiast",
        description: "I always been a technology geek and feel something interesting about technology. I love the progress that our civilization achieved in software systems from the past few decades. Machine Learning and Artificial Intelligence were a revolution in technology. Apart from building web applications I love to follow other technologies such as developing GPTs with Open AI tools, Blogs on Web3 and Virtual Reality etc.",
        link: null,
    },
];

const projects = [
    {
        name: 'Perosnal Calender',
        description: 'Introducing a sleek and intuitive personal calendar application crafted with React.js, JavaScript, and Bootstrap, inspired by the user-friendly design of Microsoft Calendar. This modern, clean application simplifies event organization, and reminder setting. It combines advanced web technologies with a design reminiscent of Microsoft Calendar, enhancing scheduling experience.',
        image: './images/react_calender.png',
        link: 'https://personal-calender.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/react-personal-calender', 
        tech_used: [
            {
                name: 'ReactJS',
                image: './images/tech_stack/react-1-logo-png-transparent.png',
            },
            {
                name: 'Bootstrap',
                image: './images/tech_stack/Bootstrap_logo.svg.png'
            },
            {
                name: 'Google Firebase',
                image: './images/tech_stack/firebase.png',
            }
        ]
    },
    {
        name: '2048 Game',
        description: "Dive into the world of strategic gaming with my Vue.JS 2048 Game. This project showcases my expertise in Vue.JS, HTML, and CSS. Players can enjoy a personalized experience by selecting board sizes, themes, and the game automatically saves scores for seamless progression. It's a testament to my front-end skills, offering both entertainment and a smooth user interface.",
        image: './images/game_2048.png',
        link: 'https://game-2048-vert.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/vueJS-first-project/',
        tech_used: [
            {
                name: 'VueJS',
                image: './images/tech_stack/Vue.js_Logo_2.svg.png',
            },
            {
                name: 'HTML',
                image: './images/tech_stack/HTML5.png'
            },
            {
                name: 'CSS',
                image: './images/tech_stack/CSS3.png',
            }
        ]
    },
    {
        name: 'Vanilla JS - Accelerometer',
        description: "The Speedometer UI is a dynamic, visually appealing project using JavaScript, HTML, and CSS to bring the thrill of high-performance driving to your screen. It features both analog and digital displays, responsive buttons, and a seamless blend of aesthetics and interactivity, showcasing the designer's expertise in creating engaging web applications.",
        image: './images/accelerometer.png',
        link: 'https://accelerometer.vercel.app/',
        repo_link: 'https://github.com/MaheshMuppasani/Mahesh-Muppasani',
        tech_used: [
            {
                name: 'JavaScript',
                image: './images/tech_stack/JavaScript-logo.png'
            },
            {
                name: 'HTML',
                image: './images/tech_stack/HTML5.png'
            },
            {
                name: 'CSS',
                image: './images/tech_stack/CSS3.png',
            }
        ]
    },
    {
        name: 'Portfolio',
        description: "The portfolio is developed from scratch using vanilla JS covering all the essential concepts with some inspiration from the designs on Dribble. The website will be transitioned to a JS framework such as React.JS or Angular in future. This will be fun terraforming an existing JS application with a JS framework and lot of scope to learn new things under the hood.",
        image: './images/portfolio-thumb.png',
        link: 'https://maheshmuppasani.vercel.app/',
        repo_link: "https://github.com/MaheshMuppasani/Portfolio/",
        tech_used: [
            {
                name: 'JavaScript',
                image: './images/tech_stack/JavaScript-logo.png'
            },
            {
                name: 'HTML',
                image: './images/tech_stack/HTML5.png'
            },
            {
                name: 'CSS',
                image: './images/tech_stack/CSS3.png',
            }
        ]
    }
]

const role_container = document.getElementsByClassName('roles')[0];
const project_container = document.getElementsByClassName('projects')[0];
const exp_container = document.getElementsByClassName('exp-container')[0];

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
                        <img src="./images/github.png" />
                    </a>
                    <a href="${role.link}" target="_blank" title="Open in new tab">
                        <img src="./images/newTab.png" />
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
        type: 'edu',
        year: 2023,
        title: 'Masters in Information Systems',
        location: 'CMU, Mt. Pleasant, MI, USA',
        desc: "I'm pursuing my master's in Information systems at Central Michigan University aligning my interests in business systems, data analytics, and database administration. "
    },
    {
        type: 'work',
        year: 2021,
        title: 'Web Developer',
        location: 'ACS Solutions, Hyderabad, India',
        desc: "As a web developer I worked on various real time web applications such as Nutrascriptives Direct and Fulfillment",
    },
    {
        type: 'work',
        year: 2020,
        title: 'Associate Web Developer',
        location: 'ACS Solutions, Hyderabad, India',
        desc: "As an associate web developer I worked on various real time web applications such as Nutrascriptives Direct and Fulfillment",
    },
    {
        type: 'edu',
        year: 2016,
        title: 'Bachelors in Electronics and Communication Eng',
        location: 'K L University, Vijayawada, India',
        desc: 'I completed my bachelors from 2016-2020 at KLUniversity in Electronics and Communication Engineering and got placed in ACS Solutions as a Web developer.'
    }
]

function renderExperience(experiences = []){
    return experiences.map((exp, i) => {
        return `<div class="phase">
            <div class="phase-inner">
            <div class="role-tenure">
                <span class="year">${exp.year + (!i ? ' - present':'')}</span>
                <span class="material-symbols-outlined role-icon">${exp.type==='edu' ? 'school' : 'work'}</span>
            </div>
            <div class="job-desc">
                <h3 class="role-name">${exp.title}</h3>
                <div>${exp.location}</div>
                <p>${exp.desc}</p>
            </div>
            </div>
        </div>`
    })
}

window.onload = function() {
    role_container.innerHTML = renderRoles(roles).join('');
    project_container.innerHTML = renderProjects(projects).join('');
    exp_container.innerHTML = renderExperience(experience).join('');
}