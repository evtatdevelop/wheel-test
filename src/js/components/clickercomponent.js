import { Component } from '../core/component';

export class ClickerComponent extends Component {
    constructor(id) {
        super(id);
        this.inpt = this.$element.querySelector('.clicker').querySelector('input');
        this.total = this.$element.querySelector('.total').querySelector('.total-price-value');
        this.price = this.$element.querySelector('.good_price').value;
    };
 
    init() {
        this.$element.querySelector('.dec').addEventListener('click', decrease.bind(this));
        this.$element.querySelector('.inc').addEventListener('click', increase.bind(this));
        this.$element.querySelector('input').addEventListener('blur', reset.bind(this));
    };
};

function decrease() {
    let val = +this.inpt.value;
    if (val > 1) {
        this.inpt.value = val - 1;
        this.total.textContent = +this.price * (val-1);
    } else {
        this.inpt.value = 1;
        this.total.textContent = +this.price;
    }
};

function increase() {
    let val = +this.inpt.value + 1;
    this.inpt.value = val;
    this.total.textContent = +this.price * val;
};

function reset() {
    let val = +this.inpt.value;
    if (val < 1) {
        this.inpt.value = 1;
        this.total.textContent = +this.price;
    } else {
        this.total.textContent = +this.price * val;
    }
}