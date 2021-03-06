import AbstractSmartComponent from './abstract-smart-component.js';
import {capitalizeFirstLetter, convertEvent, formatTypeRoute, Mode} from '../utils/common.js';
import {DefaultBtnText, Timeout, TypeRoute} from '../data.js';
import EventModel from '../models/event-model.js';
import debounce from 'lodash/debounce';
import flatpickr from 'flatpickr';
import moment from 'moment';

export default class EventEdit extends AbstractSmartComponent {
  constructor(event, mode, store) {
    super();
    this._event = event;
    this._mode = mode;

    this._destinationList = store.createDestinationNames();
    this._destinationsAll = store.createDestinations();
    this._offersAll = store.createOffersList();

    this._activeEvent = convertEvent(this._event, this._offersAll);

    this._btnDelete = DefaultBtnText.DELETE;
    this._btnSave = DefaultBtnText.SAVE;

    this._deleteHandler = null;
    this._cancelHandler = null;
    this._favoriteHandler = null;
    this._submitHandler = null;

    this._flatpickrStart = null;
    this._flatpickrEnd = null;

    this.blockElement = this.blockElement.bind(this);

    this._isValidity();
    this._applyFlatpickr();
    this._subscribeOnEvents();
  }

  getTemplate() {
    const {endDate, isFavorite, price, startDate, type} = this._activeEvent;
    const {description, name, pictures} = this._activeEvent.destination;

    return (
      `<form class="${this._mode === Mode.ADD ? `trip-events__item` : ``}  event  event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" ${type ? `src="img/icons/${type}.png` : ``} " alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">${Object.keys(TypeRoute).map((group) => {
        return (
          `<fieldset class="event__type-group">
            <legend class="visually-hidden">${TypeRoute[group]}</legend>${TypeRoute[group].map((el) => {
            return (
              `<div class="event__type-item">
                <input id="event-type-${el}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${el}" ${type === el && `checked`}>
                <label class="event__type-label  event__type-label--${el}" for="event-type-${el}-1">${capitalizeFirstLetter(el)}</label>
              </div>`);
          }).join(`\n`)}
          </fieldset>`);
      }).join(`\n`)}
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">${formatTypeRoute(type)}</label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
            <datalist id="destination-list-1">${this._destinationList.map((it) => {
        return `<option value="${it}"></option>`;
      }).join(`\n`)}
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${moment(startDate).format(`DD/MM/YY HH:mm`)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${moment(endDate).format(`DD/MM/YY HH:mm`)}">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${price}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">${this._btnSave}</button>
          <button class="event__reset-btn" type="reset">${this._mode === Mode.ADD ? `Cancel` : `${this._btnDelete}`}</button>
      ${this._mode === Mode.ADD ? `` :
        `<input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${isFavorite ? `checked` : ``}>
        <label class="event__favorite-btn" for="event-favorite-1">
          <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
            </svg>
        </label>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>`}
        </header>
        ${name === `` && this._mode === Mode.ADD ? `` :
        `<section class="event__details">
        ${this._activeEvent.offers.length === 0 ? `` :
        `<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">${this._activeEvent.offers.map(({price: offerPrice, title, checked}) => {
        return (
          `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${title}-1" type="checkbox" name="event-offer-${title}" ${checked ? `checked` : ``}>
              <label class="event__offer-label" for="event-offer-${title}-1">
                <span class="event__offer-title">${title}</span>&plus;&euro;&nbsp;<span class="event__offer-price">${offerPrice}</span>
              </label>
            </div>`);
      }).join(`\n`)}
          </div>
        </section>`}
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">${pictures.map(({src, description: alt}) => {
        return `<img class="event__photo" src="${src}" alt="${alt}">`;
      }).join(`\n`)}
          </div>
        </div>
      </section>
    </section>`}
    </form>`
    );
  }

  getData() {
    const form = this.getElement();
    const formData = new FormData(form);
    const offersChecked = [...form.querySelectorAll(`.event__offer-checkbox`)]
      .filter((input) => input.checked)
      .map((input) => {
        return {
          title: input.parentElement.querySelector(`.event__offer-title`).textContent,
          price: parseInt(input.parentElement.querySelector(`.event__offer-price`).textContent, 10),
        };
      });
    const destination = {
      name: formData.get(`event-destination`),
      description: form.querySelector(`.event__destination-description`).textContent,
      pictures: [...form.querySelectorAll(`.event__photo`)].map((el) => {
        return {src: el.src, description: el.alt};
      })
    };

    return new EventModel({
      'base_price': parseInt(formData.get(`event-price`), 10),
      'date_from': moment(formData.get(`event-start-time`), `DD/MM/YY HH:mm`).valueOf(),
      'date_to': moment(formData.get(`event-end-time`), `DD/MM/YY HH:mm`).valueOf(),
      'destination': destination,
      'offers': offersChecked,
      'type': formData.get(`event-type`),
      'is_favorite': form.querySelector(`.event__favorite-checkbox`) ? form.querySelector(`.event__favorite-checkbox`).checked : false
    });
  }

  setBtnText(action, text) {
    if (action === `save`) {
      this._btnSave = text;
    }
    if (action === `delete`) {
      this._btnDelete = text;
    }

    this.rerender();
  }

  setDefaultBtnText() {
    this._btnSave = DefaultBtnText.SAVE;
    this._btnDelete = DefaultBtnText.DELETE;

    this.rerender();
  }

  recoveryListeners() {
    this.setSubmitHandler(this._submitHandler);
    this.setDeleteBtnClickHandler(this._deleteHandler);
    this._subscribeOnEvents();

    if (this._mode === Mode.DEFAULT) {
      this.setCancelBtnClickHandler(this._cancelHandler);
      this.setFavoriteBtnClickHandler(this._favoriteHandler);
    }
  }

  removeElement() {
    this._removeFlatpickrs();
    super.removeElement();
  }

  rerender() {
    super.rerender();

    this._isValidity();
    this._applyFlatpickr();
  }

  reset() {
    this._activeEvent = convertEvent(this._event, this._offersAll);
    this.rerender();
  }

  blockElement(onError = false) {
    const form = this.getElement();
    if (onError) {
      form.style.animation = `shake ${Timeout.SHAKE_ANIMATION / 1000}s`;
      form.style.outline = `4px solid red`;
    }
    form.classList.add(`event--disabled`);
    form.querySelectorAll(`input`).forEach((input) => (input.disabled = true));
    form.querySelectorAll(`button`).forEach((button) => (button.disabled = true));
  }

  _isValidity(value = ``) {
    const destinationInput = this.getElement().querySelector(`.event__input--destination`);

    if (destinationInput.value === value || value === false) {
      destinationInput.setCustomValidity(`Please select a valid value from the list.`);
      return false;
    } else {
      destinationInput.setCustomValidity(``);
      return true;
    }
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelector(`.event__type-list`)
      .addEventListener(`click`, (evt) => {

        if (evt.target.tagName === `INPUT`) {
          this._activeEvent.type = evt.target.value;
          this._activeEvent.offers = this._offersAll.get(evt.target.value);

          this._favoriteHandler = null;
          this.rerender();
        }
      });

    element.querySelector(`.event__input--destination`)
      .addEventListener(`change`, (evt) => {
        let optionsFound = false;
        [...evt.target.list.options].forEach((option) => {
          if (option.value === evt.target.value) {
            optionsFound = true;
          }
        });

        if (!this._isValidity(optionsFound)) {
          return;
        }
        this._activeEvent.destination = this._destinationsAll.find((el) => el.name === evt.target.value);

        this._favoriteHandler = null;
        this.rerender();
      });

    element.querySelector(`#event-start-time-1`)
      .addEventListener(`change`, (evt) => {
        this._activeEvent.startDate = moment(evt.target.value, `DD/MM/YY HH:mm`).valueOf();
        this._activeEvent.endDate = this._activeEvent.startDate > this._activeEvent.endDate
          ? this._activeEvent.startDate
          : this._activeEvent.endDate;

        this._favoriteHandler = null;
        this.rerender();
      });

    element.querySelector(`#event-end-time-1`)
      .addEventListener(`change`, (evt) => {
        this._activeEvent.endDate = moment(evt.target.value, `DD/MM/YY HH:mm`).valueOf();

        this._favoriteHandler = null;
        this.rerender();
      });

    element.querySelector(`.event__input--price`)
      .addEventListener(`change`, (evt) => {
        this._activeEvent.price = evt.target.value;
      });

    if (element.querySelector(`.event__favorite-checkbox`)) {
      element.querySelector(`.event__favorite-checkbox`)
        .addEventListener(`change`, (evt) => {
          this._activeEvent.isFavorite = evt.target.checked;
        });
    }

    if (element.querySelectorAll(`event__offer-checkbox`)) {
      element.querySelectorAll(`.event__offer-checkbox`).forEach((el, index) => {
        el.addEventListener(`change`, (evt) => {
          this._activeEvent.offers[index].checked = evt.target.checked;

          this._favoriteHandler = null;
          this.rerender();
        });
      });
    }
  }

  _applyFlatpickr() {
    this._removeFlatpickrs();

    this._flatpickrStart = this._setFlatpickr(this.getElement().querySelector(`#event-start-time-1`), this._currentStartDate);
    this._flatpickrEnd = this._setFlatpickr(this.getElement().querySelector(`#event-end-time-1`), this._currentEndDate, this._currentStartDate);
  }

  _removeFlatpickrs() {
    if (this._flatpickrStart && this._flatpickrEnd) {
      this._flatpickrStart.destroy();
      this._flatpickrStart = null;
      this._flatpickrEnd.destroy();
      this._flatpickrEnd = null;
    }
  }

  _setFlatpickr(input, defaultTime, dateMin = `today`) {
    return flatpickr(input, {
      enableTime: true,
      dateFormat: `d/m/y H:i`,
      minDate: dateMin,
      defaultDate: defaultTime,
      allowInput: true,
    });
  }

  setSubmitHandler(handler) {
    this.getElement().addEventListener(`submit`, handler);

    this._submitHandler = handler;
  }

  setCancelBtnClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, handler);

    this._cancelHandler = handler;
  }

  setDeleteBtnClickHandler(handler) {
    this.getElement().querySelector(`.event__reset-btn`)
      .addEventListener(`click`, handler);

    this._deleteHandler = handler;
  }

  setFavoriteBtnClickHandler(handler) {
    const debounceHandler = handler ? debounce(handler, Timeout.DEBOUNCE) : handler;

    this.getElement().querySelector(`.event__favorite-btn`)
      .addEventListener(`click`, debounceHandler);

    this._favoriteHandler = handler;
  }
}
