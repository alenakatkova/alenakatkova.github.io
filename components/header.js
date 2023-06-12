class Header extends HTMLElement {
  constructor() {
    super();
    this._desktopNavLinkClasses = "desktop-nav-link py-3 text-gray-800 no-underline hover:no-underline"
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .desktop-nav-link {
            text-decoration: none;
            color: black;
            position: relative;
        } 

        .desktop-nav-link:hover::after, .desktop-nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0.6rem;
            left: 0;
            right: 0;
            height: 3px;
            background-color: #254C93;
            opacity: 50%;
            transition: all 0.5s ease-in-out;
        }
      </style>
      
      <header class="bg-white">
        <div class="container mx-auto max-w-6xl px-8 flex items-center flex-col">
          <div class="w-full text-gray-700 text-2xl font-semibold pt-3">Alena Katkova</div>
          <nav id="menu" class="flex items-center w-full">
            <a id="about-link" href="index.html" class="${this._desktopNavLinkClasses} mr-3">About</a>
            <a id="portfolio-link" href="portfolio.html" class="${this._desktopNavLinkClasses}">Portfolio</a>
          </nav>
        </div>
      </header>
    `;

    this.updateActiveLink();
  }

  updateActiveLink() {
    const links = {
      'about-link': 'index.html',
      'portfolio-link': 'portfolio.html',
      'blog-link': 'blog.html'
    };

    const currentLocation = window.location.href;

    Object.entries(links).forEach(([id, href]) => {
      const link = this.querySelector('#' + id);
      if (currentLocation.includes(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

customElements.define('header-component', Header);
