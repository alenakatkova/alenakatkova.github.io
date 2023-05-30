class Header extends HTMLElement {
  constructor() {
    super();
    this._desktopNavLinkClasses = "desktop-nav-link px-3 py-5 text-gray-800 no-underline hover:underline"
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .active {
          background-color: #f3f4f6;
          height: 100%;
          text-decoration: underline;
        }
        
        .desktop-nav-link:hover {
          background-color: lightblue;
        }
      </style>
      <!-- Header -->
      <header class="bg-white">
        <div class="container mx-auto max-w-6xl px-8 flex items-center justify-between">
          <a id="about-link" href="index.html" class="${this._desktopNavLinkClasses}">
            About
          </a>
          <div class="sm:hidden">
            <button id="menu-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400 hover:text-gray-800 hover:border-gray-700">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
<!--            <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">John Doe</div>-->
          <nav id="menu" class="hidden sm:flex items-center justify-end w-full">
            <a id="portfolio-link" href="portfolio.html" class="${this._desktopNavLinkClasses}">Portfolio</a>
            <a id="blog-link" href="blog.html" class="${this._desktopNavLinkClasses}">Blog</a>
<!--            <a id="skills-link" href="skills.html" class="${this._desktopNavLinkClasses}">Skills</a>-->
            <a id="contact-link" href="contact.html" class="${this._desktopNavLinkClasses}">Contact</a>
          </nav>
        </div>
      </header>
      
<!--      <header class="bg-white py-5">-->
<!--        <nav class="container mx-auto max-w-6xl px-10 flex items-center justify-between">-->
<!--          <a href="index.html" class="text-xl text-gray-800 hover:text-gray-600">-->
<!--            About-->
<!--          </a>-->
<!--          <div class="sm:hidden">-->
<!--            <button id="menu-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400 hover:text-gray-800 hover:border-gray-700">-->
<!--              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
<!--                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>-->
<!--              </svg>-->
<!--            </button>-->
<!--          </div>-->
<!--          <ul id="menu" class="hidden sm:flex space-x-6 text-2xl">-->
<!--            <li><a href="portfolio.html" class="text-gray-600">Portfolio</a></li>-->
<!--            <li><a href="#blog" class="text-gray-600">Blog</a></li>-->
<!--            <li><a href="#contact" class="text-gray-600">Contact</a></li>-->
<!--          </ul>-->
<!--        </nav>-->
<!--      </header>-->
      
      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden fixed top-0 left-0 w-full h-full bg-white z-50">
        <button id="close-menu" class="absolute top-4 right-4 flex items-center px-3 py-2 text-gray-500 hover:text-gray-800">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9.293l6.364-6.364a1 1 0 111.414 1.414L11.414 10l6.364 6.364a1 1 0 01-1.414 1.414L10 11.414l-6.364 6.364a1 1 0 01-1.414-1.414L8.586 10 2.222 3.636a1 1 0 011.414-1.414L10 9.293z" clip-rule="evenodd"/>
          </svg>
        </button>
        <nav class="h-full flex flex-col justify-center">
          <ul class="text-center text-xl space-y-8">
            <li><a href="#home" class="text-gray-600">About</a></li>
            <li><a href="portfolio.html" class="text-gray-600">Portfolio</a></li>
            <li><a href="#blog" class="text-gray-600">Blog</a></li>
            <li><a href="#contact" class="text-gray-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    `;

    setTimeout(() => {
      this.querySelector("#menu-toggle").addEventListener("click", () => {
        this.querySelector("#mobile-menu").classList.toggle("hidden");
      });

      this.querySelector("#close-menu").addEventListener("click", () => {
        this.querySelector("#mobile-menu").classList.add("hidden");
      });
    }, 0);

    this.updateActiveLink();
  }

  updateActiveLink() {
    const links = {
      'about-link': 'index.html',
      'portfolio-link': 'portfolio.html',
      'blog-link': 'blog.html',
      'contact-link': 'contact.html'
    };

    const currentLocation = window.location.href;

    Object.entries(links).forEach(([id, href]) => {
      const link = this.querySelector('#' + id);
      if (currentLocation.includes(href)) {
        link.classList.add('active'); // you can replace 'active' with your preferred class
      } else {
        link.classList.remove('active');
      }
    });
  }
}

customElements.define('header-component', Header);
