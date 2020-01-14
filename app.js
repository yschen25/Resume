import './src/css/media.css';
import './src/scss/index.scss';
import './src/css/normalize.css';
import './src/js/detectmobilebrowser'
import './src/js/index';

let home = require("./home.html");
document.body.insertAdjacentHTML('beforeend', home);
