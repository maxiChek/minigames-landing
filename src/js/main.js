import '../css/global.css';
import { initMenu } from './menu.js';

// Wait until the DOM is ready before attaching events
document.addEventListener('DOMContentLoaded', () => {
  initMenu();
});
