import AbstractComponent from './abstract-component.js';
import {SortType} from '../data.js';

export default class Sort extends AbstractComponent {
  constructor(sortFilters) {
    super();
    this._sortFilters = sortFilters;
    this._currentSortType = SortType.EVENT;
  }

  getTemplate() {
    return (
      `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>
      ${this._sortFilters.map(({name, checked}) => {
        const formatName = name.toLowerCase();

        return (
          `<div class="trip-sort__item  trip-sort__item--${formatName}">
          <input id="sort-${formatName}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" data-sort="${formatName}" value="sort-${formatName}" ${checked ? `checked` : ``}>
          <label class="trip-sort__btn" for="sort-${formatName}">
            ${name}
            <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
        </div>`
        );
      }).join(`\n`)}
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
      </form>`
    );
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      if (evt.target.tagName !== `INPUT`) {
        return;
      }
      const sortType = evt.target.dataset.sort;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;
      handler(this._currentSortType);
    });
  }
}
