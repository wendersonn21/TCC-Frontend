document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});



document.querySelector('.add-project').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const projectsContainer = document.getElementById('projectsContainer');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectName = document.createElement('p');
        projectName.classList.add('project-name');
        projectName.textContent = file.name;

        const projectContent = document.createElement('div');
        projectContent.classList.add('project-content');
        projectContent.textContent = `Conteúdo do projeto: ${file.name}`;

        projectCard.appendChild(projectName);
        projectCard.appendChild(projectContent);
        projectsContainer.appendChild(projectCard);

        projectName.addEventListener('click', function() {
            if (projectContent.style.display === 'none') {
                projectContent.style.display = 'block';
            } else {
                projectContent.style.display = 'none';
            }
        });
    }
});

// Inicializa o conteúdo dos projetos exemplo como oculto
document.querySelectorAll('.project-content').forEach(function(content) {
    content.style.display = 'none';
});

document.querySelectorAll('.project-name').forEach(function(name) {
    name.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
