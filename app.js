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
