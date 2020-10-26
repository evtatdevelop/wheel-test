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
        // this.total.textContent = +this.price * (val-1);
        var tp = +this.price * (val-1);
        this.total.textContent = numberWithCommas(tp);
    } else {
        this.inpt.value = 1;
        // this.total.textContent = +this.price;
        this.total.textContent = numberWithCommas(+this.price);
    }
};

function increase() {
    let val = +this.inpt.value + 1;
    this.inpt.value = val;
    // this.total.textContent = +this.price * val;
    var tp = +this.price * val;
    this.total.textContent = numberWithCommas(tp);
};

function reset() {
    let val = +this.inpt.value;
    if (val < 1) {
        this.inpt.value = 1;
        this.total.textContent = numberWithCommas(+this.price);;
    } else {
        // this.total.textContent = +this.price * val;
        var tp = +this.price * val;
        this.total.textContent = numberWithCommas(tp);
    }
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}