const NavBar = {
    template: `
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `
  };
  
  const SideMenu = {
    template: `
      <aside>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </aside>
    `
  };
  
  const FooterComp = {
    template: `
      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    `
  };
  
  const app = Vue.createApp({
    components: {
      'nav-bar': NavBar,
      'side-menu': SideMenu,
      'footer-comp': FooterComp
    }
  });
  
  app.mount('#app');
  