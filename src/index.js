import './css/main.css';
import './scss/main.scss';
import { ClickerComponent } from './js/components/clickercomponent';
import { FilterComponent } from './js/components/filtercomponent';

// new ClickerComponent('bestPremium');

const forms = document.querySelectorAll('.good-form').forEach(function(form) {
    new ClickerComponent(form.getAttribute('id'));
});

new FilterComponent('js_filter');
