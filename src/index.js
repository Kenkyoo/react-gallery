import React from 'react';
import { createRoot } from 'react-dom/client';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'hover.css';
import App from './app'; // Importar el componente principal
const root = createRoot(document.getElementById('root'));
root.render(<App />);

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

ScrollReveal().reveal('.headline');