// Toggle between Login and Signup forms
function toggleForms() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

// Toggle Password Visibility
function togglePassword(id) {
    const passwordInput = document.getElementById(id);
    const toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🔓'; // Icon for visible password
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '🔒'; // Icon for hidden password
    }
}
// Add New Project
const addProjectBtn = document.querySelector('.add-project-btn');
const overlay = document.getElementById('overlay');
const formContainer = document.getElementById('form-container');
const addProject = document.getElementById('add-project');
const cancelForm = document.getElementById('cancel-form');
const projectsContainer = document.getElementById('projects-container');

let projects = [];

function toggleForm(show) {
    formContainer.style.display = show ? 'block' : 'none';
    overlay.style.display = show ? 'block' : 'none';
}

function addNewProject(name, status) {
    if (projects.length < 16) {
        projects.push({ name, status });
        renderProjects();
    } else {
        alert('You can only add up to 16 projects.');
    }
}

function renderProjects() {
    projectsContainer.innerHTML = ''; // Clear existing projects
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
      <div class="project-title">${project.name}</div>
      <div class="project-status">Status: ${project.status}</div>
    `;
        projectsContainer.appendChild(projectCard);
    });
}

addProjectBtn.addEventListener('click', () => toggleForm(true));
cancelForm.addEventListener('click', () => toggleForm(false));

addProject.addEventListener('click', () => {
    const name = document.getElementById('project-name').value;
    const status = document.getElementById('project-status').value;

    if (name && status) {
        addNewProject(name, status);
        toggleForm(false);
    } else {
        alert('Please fill in all fields.');
    }
});

overlay.addEventListener('click', () => toggleForm(false));

//


// CLIENTS LOGIC
const addClientBtn = document.querySelector('.add-client-btn');
const clientsContainer = document.getElementById('clients-container');
const clientOverlay = document.getElementById('overlay'); // Same overlay for both
const clientFormContainer = document.getElementById('form-container');
const clientNameInput = document.getElementById('client-name');
const clientStatusInput = document.getElementById('client-status');
const addClientFormBtn = document.getElementById('add-client');
const cancelClientForm = document.getElementById('cancel-form');

let clients = [];

function toggleClientForm(show) {
    clientFormContainer.style.display = show ? 'block' : 'none';
    clientOverlay.style.display = show ? 'block' : 'none';
}

function addNewClient(name, status) {
    if (clients.length < 20) {
        clients.push({ name, status });
        renderClients();
    } else {
        alert('You can only add up to 20 clients.');
    }
}

function renderClients() {
    clientsContainer.innerHTML = ''; // Clear existing clients
    clients.forEach((client, index) => {
        const clientCard = document.createElement('div');
        clientCard.classList.add('client-card');
        clientCard.innerHTML = `
      <div class="client-title">${index + 1}. ${client.name}</div>
      <div class="client-status">Status: ${client.status}</div>
    `;
        clientsContainer.appendChild(clientCard);
    });
}

addClientBtn.addEventListener('click', () => toggleClientForm(true));
cancelClientForm.addEventListener('click', () => toggleClientForm(false));

addClientFormBtn.addEventListener('click', () => {
    const name = clientNameInput.value.trim();
    const status = clientStatusInput.value;

    if (name && status) {
        addNewClient(name, status);
        toggleClientForm(false);
    } else {
        alert('Please fill in all fields.');
    }
});

clientOverlay.addEventListener('click', () => toggleClientForm(false));