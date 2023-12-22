// util function
const roles = [
    {
        image: "./images/front-end-developer.png",
        name: "Front-end developer",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
        link: null,
    },
    {
        image: "./images/1_bc9pmTiyKR0WNPka2w3e0Q.png",
        name: "Node.js developer",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
        link: null,
    },
    {
        image: "./images/tech_enthusiast.png",
        name: "Tech Enthusiast",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
        link: null,
    },
];

const projects = [
    {
        name: 'Perosnal Calender (Inspired By Microsoft)',
        description: 'Introducing a sleek and intuitive personal calendar application crafted with React.js, JavaScript, and Bootstrap, inspired by the user-friendly design of Microsoft Calendar. This modern, clean application simplifies event organization, and reminder setting. It combines advanced web technologies with a design reminiscent of Microsoft Calendar, enhancing scheduling experience.',
        image: './images/react_calender.png',
        link: 'https://personal-calender.vercel.app/'
    },
    {
        name: '2048 Game',
        description: '',
        image: './images/game_2048.png',
        link: 'https://game-2048-vert.vercel.app/'
    },
    {
        name: 'Vanilla JS - Accelerometer',
        description: '',
        image: './images/accelerometer.png',
        link: 'https://accelerometer.vercel.app/'
    },
]

const role_container = document.getElementsByClassName('roles')[0];
const project_container = document.getElementsByClassName('projects')[0];

const renderRoles = function (roles) {
    return roles.map(role => {
        return `<div class="role">
        <div class="role-img">
            <img src=${role.image} />
            <h2>${role.name}</h2>
        </div>
        <div class="role-desc">${role.description}</div></div>`
    });
}

let role_template = ``;

window.onload = function() {
    role_container.innerHTML = renderRoles(roles).join('');
    project_container.innerHTML = renderRoles(projects).join('');
}