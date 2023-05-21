class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-800 text-white py-10 px-5 md:px-20">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-5 md:mb-0">
            <p>&copy; 2023 Alena Katkova</p>
          </div>
          <div class="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/alena-a-katkova/" target="_blank" rel="noopener">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/alenakatkova" target="_blank" rel="noopener">
              <i class="fab fa-github fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
