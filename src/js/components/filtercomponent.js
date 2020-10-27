import { Component } from '../core/component';

export class FilterComponent extends Component {
    constructor(id) {
        super(id);
    };
 
    init() {
        const filters = this.$element.querySelector('ul').querySelectorAll('.js-filter-items')
        filters.forEach(function(filter) { 
            close(filter)
        });
    };



};

function close(filter) {
    filter.querySelector('.filter-closer').addEventListener('click', () => {
        filter.remove();
    })
};