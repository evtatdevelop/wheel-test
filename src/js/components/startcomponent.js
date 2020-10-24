import { Component } from '../core/component';
import { ClockComponent } from './clockcomponent';

export class StartComponent extends Component {
    constructor(id) {
        super(id);
        this.clock;
    };

    init() {
        if ( localStorage.getItem('visited') ) { 
            this.hide() ;
            return;
        }
        creator(this.$element);
        this.$element.querySelector('h1').addEventListener('click', onStart.bind(this));
        this.clock = new ClockComponent('clock');
    };
};

function creator($el) {
    const newTitle = document.createElement('h1');
    newTitle.textContent = 'WebPack';
    $el.appendChild(newTitle);

    const newclock = document.createElement('div');
    newclock.setAttribute('id', 'clock');
    $el.appendChild(newclock);
}

function onStart() {
    localStorage.setItem('visited', JSON.stringify(true));
    this.hide();
    this.clock.stop();
};
