console.log('Client Side is wired up!');
import Header from "./components/Header.js";
// import Footer from "/components/Footer.js";
import HomePage from "./pages/HomePage.js";

const container = document.querySelector(".container");

buildPage();

function buildPage() {
  header();
  footer();
  navigateToHomePage();
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function navigateToHomePage() {
  const homeButton = document.querySelector();
  homeButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = HomePage();
  });
}
