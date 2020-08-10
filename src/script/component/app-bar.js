import menu from '../component/menu'
class AppBar extends HTMLElement {
 
    constructor() {
        super();
      }
    
      connectedCallback() {
        this.loadNav();
        this.activeNav();
      }
    
      loadNav() {
        this.innerHTML = `
          <!-- Navigasi -->
          <nav class="black" role="navigation">
            <div class="nav-wrapper container">
              <a href="#" class="brand-logo"> Liga Inggris </a>
              <a href="#" class="sidenav-trigger" data-target="nav-mobile"> &#9776; </a>
    
              <!-- Navbar -->
              <ul class="topnav right hide-on-med-and-down"> </ul>
              <!-- Sidenav -->
              <ul class="sidenav" id="nav-mobile"> </ul>
            </div>
          </nav>
        `;
        document.querySelectorAll('ul.topnav, ul.sidenav')
          .forEach(element => {
            element.innerHTML = menu
          });
 
        document.querySelectorAll('ul.topnav a, ul.sidenav a')
          .forEach(element => {
            element.addEventListener('click', event => {
              const sideNav = document.querySelector('.sidenav');
              M.Sidenav.getInstance(sideNav).close();
              let url = event.target.getAttribute('href').substr(1);
              const appArea = document.querySelector('app-area');
              appArea.content = url === "score" ? "score-table" : url === "favorite" ? "saved-team" : null
            });
          });
      }
    
      activeNav() {
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav);
      }
}

customElements.define("app-bar", AppBar);