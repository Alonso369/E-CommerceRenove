import { headerContainer } from "./components/header.js";
import { footerContainer } from "./components/footer.js";

const script = document.createElement('script');
script.src= 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
document.head.appendChild(script);

document.getElementById('header').innerHTML = headerContainer;
document.getElementById('footer').innerHTML = footerContainer;

