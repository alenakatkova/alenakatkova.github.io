const projects = [
  {
    screenshot: 'none',
    title: 'Project management tool for architecture bureau',
    description: 'For an architecture bureau, I developed a robust project management web application that transformed their operational workflow. This tool revolves around managing various project documents, such as blueprints, floor layouts, and other essential artifacts. The application\'s unique selling point is its intuitive document approval feature, which ensures smooth collaboration between managers and clients.\n' +
        '\n' +
        'The application includes different user roles: administrators, bureau\'s project managers, clients, and contractors. This setup enables efficient communication and document sharing. Project managers upload the necessary documents, clients review and either approve or request revisions, and finally, all parties, including contractors, have access to the finalized documents.\n' +
        '\n' +
        'For the technical stack, I chose TypeScript, Next.js on the frontend, Express.js on the backend, and PostgreSQL with Sequelize for data management. User authentication was handled via session-based authentication, with sessions stored in Redis. I also used the Yandex.Disk REST API for secure file storage, ensuring all documents are safe and easily retrievable. This project marked a significant milestone in my career, as I moved beyond academic projects to deliver a full-fledged, complex web application that meets the needs of my client.',
    tags: ['typescript', 'react', 'nextjs', 'reacthookform', 'axios', 'mui', 'nodejs', 'expressjs', 'postgresql', 'sequelize', 'redis'],
    repoLink: undefined,
    blogLink: undefined,
    ghPagesLink: undefined
  },
  {
    screenshot: 'none',
    title: 'none',
    description: '',
    tags: [],
    repoLink: undefined,
    blogLink: undefined,
    ghPagesLink: undefined
  },
  {
    screenshot: 'img/projects-gallery/mishka-en.png',
    title: 'Small business responsive website',
    description: 'This project involved the development of a responsive website for a small handmade products store. The website comprises three key sections: a home page presenting an overview of the business, a catalog showcasing the array of products available, and a dedicated page featuring a user-friendly form for customers to request custom knitting orders.\n' +
        '\n' +
        'The landing page is designed to be fully responsive, ensuring seamless navigation and usability across mobile, tablet, and desktop devices. It utilizes SASS for efficient CSS writing, Gulp for task automation, and adheres to the BEM methodology for scalable and maintainable CSS.',
    tags: ['html', 'css', 'bem', 'sass', 'gulp', 'javascript'],
    repoLink: 'https://github.com/alenakatkova/mishka-en',
    ghPagesLink: undefined,
    blogLink: undefined
  },

];
const template = document.getElementById('project-card-template');
const container = document.getElementById('project-cards-container');

projects.forEach(project => {
  const projectCard = document.importNode(template.content, true);

  // Set image source
  projectCard.querySelector('img').src = project.screenshot;

  // Set project name
  projectCard.querySelector('h2').textContent = project.title;

  // Set project description
  projectCard.querySelector('p').textContent = project.description;

  // Set project tags
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";
    span.textContent = `#${tag}`;
    projectCard.querySelector('.card').dataset.tags = project.tags.join(',');
    projectCard.querySelector('div.mb-4').appendChild(span);
  });


  const linksContainer = projectCard.querySelector('.links-container')
  const links = Array.from(linksContainer.querySelectorAll('a')).reduce((acc, curr) => {
    acc[curr.dataset.type] = curr;
    return acc;
  }, {});

  let noLinkProvidedCounter = 0;
  for (let key in links) {
    if(project[key] === undefined) {
      links[key].style.visibility = 'hidden';
      noLinkProvidedCounter++;
    } else {
      links[key].href = project[key];
    }
    console.log(key)
  }

  if (noLinkProvidedCounter === 3) {
    linksContainer.style.display = 'none';
  }

  container.appendChild(projectCard);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', filterProjects);
});

function filterProjects(e) {
  const filter = e.target.dataset.filter;

  document.querySelectorAll('.card').forEach(card => {
    const tags = card.dataset.tags.split(',');

    if (filter === '*' || tags.includes(filter)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
