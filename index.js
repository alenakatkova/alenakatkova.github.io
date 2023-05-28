const projects = [
  {
    screenshot: 'img/projects-gallery/mishka-en.png',
    title: 'Responsive small business website',
    description: 'This project involved the development of a responsive website for a small handmade products store. The website comprises three key sections: a home page presenting an overview of the business, a catalog showcasing the array of products available, and a dedicated page featuring a user-friendly form for customers to request custom knitting orders.\n' +
        '\n' +
        'The landing page is designed to be fully responsive, ensuring seamless navigation and usability across mobile, tablet, and desktop devices. It utilizes SASS for efficient CSS writing, Gulp for task automation, and adheres to the BEM methodology for scalable and maintainable CSS.',
    tags: ['html', 'css', 'bem', 'sass', 'gulp', 'javascript'],
    repoLink: 'https://github.com/alenakatkova/mishka-en',
    blogLink: 'none'
  },
  {
    screenshot: 'project-screenshot-2.jpg',
    title: 'Project Name 2',
    description: 'This application aims to improve productivity and efficiency in daily tasks. Built with a thoughtful UI and powerful features, it\'s designed to make work more pleasant and intuitive. It has been a great experience working on this project and implementing some of the latest web technologies.',
    tags: ['vue', 'javascript', 'css', 'node'],
    repoLink: 'https://github.com/your-username/your-repository-2',
    blogLink: 'blog-post-2.html'
  },
  {
    screenshot: 'project-screenshot-3.jpg',
    title: 'Project Name 3',
    description: 'This web application showcases a clean, modern design that prioritizes user experience and functionality. It has been a rewarding challenge to build and optimize this project. It stands as a testament to the power and versatility of modern web technologies.',
    tags: ['react', 'javascript', 'css', 'node', 'express'],
    repoLink: 'https://github.com/your-username/your-repository-3',
    blogLink: 'blog-post-3.html'
  },
  {
    screenshot: 'project-screenshot-4.jpg',
    title: 'Project Name 4',
    description: 'This e-commerce website is a fully-fledged platform with user authentication, product listings, and a shopping cart. It was a great opportunity to delve into complex state management and database interactions. I’m incredibly proud of the robust and scalable solution we\'ve developed.',
    tags: ['react', 'javascript', 'css', 'node', 'express', 'mongodb'],
    repoLink: 'https://github.com/your-username/your-repository-4',
    blogLink: 'blog-post-4.html'
  },
  {
    screenshot: 'project-screenshot-5.jpg',
    title: 'Project Name 5',
    description: 'This project is a social network for developers where they can share their ideas, projects, and get feedback. It has been a great learning experience, not only in terms of coding, but also for working with a team and coordinating efforts to build a large-scale application.',
    tags: ['vue', 'javascript', 'css', 'node', 'express', 'mysql'],
    repoLink: 'https://github.com/your-username/your-repository-5',
    blogLink: 'blog-post-5.html'
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

  // Set links
  const links = projectCard.querySelectorAll('a');
  // if (project.blogLink === 'none') {
  //   links[0].style.visibility = 'hidden';
  // } else {
    links[0].href = project.blogLink;
  // }
  links[1].href = project.repoLink;



  container.appendChild(projectCard);
});

console.log("ff")

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
