export default function Header() {
    return `
    <nav role="navigation">
    <div class="menuToggle">
    <input type="checkbox" /> 
    <span></span>
    <span></span>
    <span></span>
    
    <ul class="menu">
      <a href="Home"><li>Home</li></a>
      <a href="Badges"><li>Badges</li></a>
      <a href="Resources"><li>Resources</li></a>
      <a href="About us"><li>About Us</li></a>
    </ul>
  </div>
</nav>
    `;
}