import './css/main.css';
import './scss/main.scss';
import { ClickerComponent } from './js/components/clickercomponent';

// new ClickerComponent('bestPremium');

const forms = document.querySelectorAll('.good-form').forEach(function(form) {
    new ClickerComponent(form.getAttribute('id'));
})