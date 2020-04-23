/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/abstract.js":
/*!************************************!*\
  !*** ./src/components/abstract.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  removeElement() {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["unRender"])(this._element);
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/cost-value-big-trip-template.js":
/*!********************************************************!*\
  !*** ./src/components/cost-value-big-trip-template.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoCost; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");


class InfoCost extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(price) {
    super();
    this._price = price;
  }

  getTemplate() {
    return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${this._price}</span>
    </p>`.trim();
  }
}


/***/ }),

/***/ "./src/components/day-big-trip-template.js":
/*!*************************************************!*\
  !*** ./src/components/day-big-trip-template.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Day; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/data.js");




class Day extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(date) {
    super();
    this._date = date;
  }

  getTemplate() {
    const officialDate = new Date(this._date);
    return `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${officialDate.getDate()}</span>
      <time class="day__date" datetime="${this._date}">${_data__WEBPACK_IMPORTED_MODULE_2__["TYPE_MONTHS"][officialDate.getMonth()]} ${officialDate.getFullYear().toString().substr(-2)}</time>
    </div>
    <ul class="trip-events__list">
    </ul>
  </li>`.trim();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }
}


/***/ }),

/***/ "./src/components/events-big-trip-template.js":
/*!****************************************************!*\
  !*** ./src/components/events-big-trip-template.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");




const createEventList = (active) => {
  return _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_ITEMS"].map((item) => {
    return `<div class="event__type-item">
        <input
          id="event-type-${item.toLocaleLowerCase()}-1"
          class="event__type-input  visually-hidden"
          type="radio"
          name="event-type"
          value="${item.toLocaleLowerCase()}"
          ${item === active ? `checked` : ``}>
        <label class="event__type-label  event__type-label--${item.toLocaleLowerCase()}" for="event-type-${item.toLocaleLowerCase()}-1">${item}</label>
      </div>`;
  }).join(`\n`);
};

const createOffersList = (offers) => {
  return offers.map((offer) => {
    const {
      currency,
      isChecked,
      price,
      title,
    } = offer;
    return `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isChecked ? `checked` : ``}>
        <label class="event__offer-label" for="event-offer-luggage-1">
          <span class="event__offer-title">${title}</span>
          ${currency}
          <span class="event__offer-price">&euro;&nbsp;${price}</span>
        </label>
      </div>`;
  }).join(`\n`);
};

const createDestinationDescriptions = (descriptions) => {
  return descriptions.map((description) => `<p class="event__destination-description">${description}</p>`).join(`\n`);
};

const createDestinationPhoto = (photos) => {
  return photos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo">`).join(`\n`);
};

class Events extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {
      destinationDescription,
      destinationPhoto,
      endDate,
      location,
      offers,
      price,
      startDate,
      type,
    } = this._event;

    const timeStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(startDate, true);
    const timeEnd = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(endDate, true);

    const offersList = createOffersList(offers);
    const eventList = createEventList(type);
    const descriptionDestination = createDestinationDescriptions(destinationDescription);
    const photoDestination = createDestinationPhoto(destinationPhoto);

    return `<form class="trip-events__item  event  event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLocaleLowerCase()}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Transfer</legend>
            ${eventList}
          </fieldset>
        </div>
      </div>
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${type ? type : `Bus`} to
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${location}" list="destination-list-1">
        <datalist id="destination-list-1">

        </datalist>
      </div>
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeStart ? timeStart : `18/03/19 00:00`}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeEnd ? timeEnd : `18/03/19 00:00`}">
      </div>
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price ? price : ``}">
      </div>
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
      <label class="event__favorite-btn" for="event-favorite-1">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </label>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      ${offers.length > 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${offersList}
        </div>
      </section>` : ``}
      ${destinationDescription.length > 0 || destinationPhoto > 0 ? `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        ${descriptionDestination}
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${photoDestination}
          </div>
        </div>
      </section>` : ``}
    </section>
  </form>`.trim();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }
}


/***/ }),

/***/ "./src/components/events-item-big-trip-template.js":
/*!*********************************************************!*\
  !*** ./src/components/events-item-big-trip-template.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsItem; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");




class EventsItem extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {
      endDate,
      location,
      price,
      startDate,
      type,
    } = this._event;

    const timeEnd = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(endDate);
    const timeStart = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(startDate);
    const timeDuration = endDate - startDate;
    const action = _data__WEBPACK_IMPORTED_MODULE_1__["TYPE_POINTS_ACTIVITY"].some((pretexts) => type === pretexts) ? `in` : `to`;

    return `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLocaleLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${action} ${location}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T11:00">${timeStart}</time>
             &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${timeEnd}</time>
        </p>
        <p class="event__duration">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatDurationTime"])(timeDuration)}</p>
      </div>
      <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          &plus;
          &euro;<span class="event__offer-price">${price}</span>
        </li>
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`.trim();
  }
}


/***/ }),

/***/ "./src/components/filters-big-trip-template.js":
/*!*****************************************************!*\
  !*** ./src/components/filters-big-trip-template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/data.js");



const createFilterMarkup = (filter, isChecked) => {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filter.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.toLowerCase()}" ${isChecked === 0 ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${filter.toLowerCase()}">${filter}</label>
    </div>`
  );
};

class Filter extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    const filterMarkup = _data__WEBPACK_IMPORTED_MODULE_1__["FILTER_NAMES"].map((i, isChecked) => createFilterMarkup(i, isChecked)).join(`\n`);
    return `<form class="trip-filters" action="#" method="get">
        ${filterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
     </form>`
     .trim();
  }
}


/***/ }),

/***/ "./src/components/info-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/info-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");


class Info extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point, days) {
    super();
    this._point = point;
    this._days = days;
  }

  getTemplate() {
    const date = `${this._days.length ? `${this._days[0].month} ${this._days[0].day}&nbsp;&nbsp;&mdash;&nbsp;${this._days[0].month !== this._days[this._days.length - 1].month ? this._days[this._days.length - 1].month : ``} ${this._days[this._days.length - 1].day}` : ``}`;
    return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${this._point}</h1>
      <p class="trip-info__dates">${date}</p>
    </div>
  </section>`
  .trim();
  }
}


/***/ }),

/***/ "./src/components/list-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/list-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");


class List extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<ul class="trip-days">
    </ul>`.trim();
  }
}


/***/ }),

/***/ "./src/components/menu-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/menu-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");



class Menu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`.trim();
  }
}



/***/ }),

/***/ "./src/components/sort-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/sort-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/components/abstract.js");


class Sort extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <span class="trip-sort__item  trip-sort__item--day">Day</span>
    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked="">
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">
        Time
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"></path>
        </svg>
      </label>
    </div>
    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
      <label class="trip-sort__btn" for="sort-price">
        Price
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"></path>
        </svg>
      </label>
    </div>
    <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`.trim();
  }
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: FILTERS_DATA, TYPE_POINTS_TRANSPORT, TYPE_ITEMS, EVENT_ACTION, CURRENCY, TYPE_POINTS_ACTIVITY, PICTURE, PICTURE_COUNT, DESCRIPTIONS, TYPE_CITY, TYPE_MONTHS, getRandomOptions, PHOTOS, FILTER_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS_DATA", function() { return FILTERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_POINTS_TRANSPORT", function() { return TYPE_POINTS_TRANSPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_ITEMS", function() { return TYPE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ACTION", function() { return EVENT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_POINTS_ACTIVITY", function() { return TYPE_POINTS_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE", function() { return PICTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_COUNT", function() { return PICTURE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONS", function() { return DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CITY", function() { return TYPE_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_MONTHS", function() { return TYPE_MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOptions", function() { return getRandomOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTOS", function() { return PHOTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_NAMES", function() { return FILTER_NAMES; });
const FILTERS_DATA = [
  `Everything`,
  `Future`,
  `Past`
];

const TYPE_POINTS_TRANSPORT = [
  `Bus`,
  `Drive`,
  `Flight`,
  `Ship`,
  `Taxi`,
  `Train`,
  `Transport`,
];

const TYPE_ITEMS = [
  `Bus`,
  `Check-in`,
  `Drive`,
  `Flight`,
  `Ship`,
  `Sightseeing`,
  `Taxi`,
  `Train`,
  `Transport`,
];

const EVENT_ACTION = [
  `to`,
  `in`,
];

const CURRENCY = [
  `&euro;`,
];

const TYPE_POINTS_ACTIVITY = [
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const PICTURE = `http://picsum.photos/248/152?r=${Math.random()}`;

const PICTURE_COUNT = 5;

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const TYPE_CITY = [
  `Amsterdam`,
  `Athens`,
  `Brest`,
  `Chicago`,
  `Giza`,
  `Houston`,
  `Istanbul`,
  `Milan`,
  `Minsk`,
  `Moscow`,
  `Phoenix`,
  `Prague`,
  `Pushchino`,
  `Riga`,
  `Rome`,
  `Seoul`,
  `Shanghai`,
  `Tokyo`,
  `Valencia`,
  `Yangon`,
  `Zurich`,
];

const TYPE_MONTHS = [
  `JAN`,
  `FEB`,
  `MAR`,
  `APR`,
  `MAY`,
  `JUN`,
  `JUL`,
  `AUG`,
  `SEP`,
  `OCT`,
  `NOV`,
  `DEC`
];

const getRandomOptions = () => {
  return [{
    name: `seats`,
    price: 5,
    title: `Choose seats`
  }, {
    name: `meal`,
    price: 15,
    title: `Add meal`
  }, {
    name: `luggage`,
    price: 30,
    title: `Add luggage`
  }, {
    name: `train`,
    price: 40,
    title: `Travel by train`
  }, {
    name: `comfort`,
    price: 100,
    title: `Switch to comfort class`
  }];
};

const PHOTOS = [
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`
];

const FILTER_NAMES = [
  `everything`,
  `future`,
  `past`,
];



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_info_big_trip_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/info-big-trip-template */ "./src/components/info-big-trip-template.js");
/* harmony import */ var _components_cost_value_big_trip_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cost-value-big-trip-template */ "./src/components/cost-value-big-trip-template.js");
/* harmony import */ var _components_menu_big_trip_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-big-trip-template */ "./src/components/menu-big-trip-template.js");
/* harmony import */ var _components_filters_big_trip_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters-big-trip-template */ "./src/components/filters-big-trip-template.js");
/* harmony import */ var _components_sort_big_trip_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sort-big-trip-template */ "./src/components/sort-big-trip-template.js");
/* harmony import */ var _components_events_big_trip_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/events-big-trip-template */ "./src/components/events-big-trip-template.js");
/* harmony import */ var _components_events_item_big_trip_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/events-item-big-trip-template */ "./src/components/events-item-big-trip-template.js");
/* harmony import */ var _components_list_big_trip_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-big-trip-template */ "./src/components/list-big-trip-template.js");
/* harmony import */ var _components_day_big_trip_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/day-big-trip-template */ "./src/components/day-big-trip-template.js");
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/event */ "./src/mock/event.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/utils.js");













const EVENT_COUNT = 15;

const ESC_KEYCODE = 27;

const events = Object(_mock_event__WEBPACK_IMPORTED_MODULE_9__["generateEvents"])(EVENT_COUNT);

const pointDates = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["generateDates"])(events);
const point = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["generateTown"])(events);

const eventsPrice = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["generatePrice"])(events);

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const tripEventsElement = document.querySelector(`.trip-events`);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripMainElement, new _components_info_big_trip_template__WEBPACK_IMPORTED_MODULE_0__["default"](point, pointDates).getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);

const tripInfoElement = document.querySelector(`.trip-info`);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripInfoElement, new _components_cost_value_big_trip_template__WEBPACK_IMPORTED_MODULE_1__["default"](eventsPrice).getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripControlsElement, new _components_menu_big_trip_template__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripControlsElement, new _components_filters_big_trip_template__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripEventsElement, new _components_sort_big_trip_template__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripEventsElement, new _components_list_big_trip_template__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

const tripDaysElement = document.querySelector(`.trip-days`);

const renderEvent = (eventDayElement, event) => {
  const replaceEventToEdit = () => {
    eventDayElement.replaceChild(tripEventsComponent.getElement(), tripEventsItemComponent.getElement());
  };

  const replaceEditToEvent = () => {
    eventDayElement.replaceChild(tripEventsItemComponent.getElement(), tripEventsComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === ESC_KEYCODE || evt.key === `Esc`) {
      eventDayElement.replaceChild(tripEventsItemComponent.getElement(), tripEventsComponent.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const tripEventsItemComponent = new _components_events_item_big_trip_template__WEBPACK_IMPORTED_MODULE_6__["default"](event);
  const openEditButton = tripEventsItemComponent.getElement().querySelector(`.event__rollup-btn`);

  openEditButton.addEventListener(`click`, () => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const tripEventsComponent = new _components_events_big_trip_template__WEBPACK_IMPORTED_MODULE_5__["default"](event);
  const closeEditButton = tripEventsComponent.getElement().querySelector(`.event__rollup-btn`);

  closeEditButton.addEventListener(`click`, () => {
    replaceEditToEvent();
  });

  Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(eventDayElement, tripEventsItemComponent.getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
};

const renderEventDay = (day, eventsDay) => {
  const tripDay = new _components_day_big_trip_template__WEBPACK_IMPORTED_MODULE_8__["default"](day);
  const tripDayList = tripDay.getElement().querySelector(`.trip-events__list`);

  eventsDay.slice()
    .forEach((event) => {
      renderEvent(tripDayList, event);
    });

  Object(_utils__WEBPACK_IMPORTED_MODULE_10__["render"])(tripDaysElement, tripDay.getElement(), _utils__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
};


let eventsList = {};

events.slice()
  .forEach((event) => {
    const date = `${event.startDate.getFullYear()}-${event.startDate.getMonth() + 1}-${event.startDate.getDate()}`;

    if (eventsList.hasOwnProperty(date)) {
      eventsList[date].push(event);
    } else {
      eventsList[date] = [event];
    }
  });

for (let [key, value] of Object.entries(eventsList)) {
  renderEventDay(key, value);
}


/***/ }),

/***/ "./src/mock/event.js":
/*!***************************!*\
  !*** ./src/mock/event.js ***!
  \***************************/
/*! exports provided: generateEvent, generateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvent", function() { return generateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvents", function() { return generateEvents; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = (date) => {
  const selectedDate = new Date(date);
  const diffDays = getRandomIntegerNumber(0, 5);
  const diffMinutes = getRandomIntegerNumber(0, 90);

  selectedDate.setDate(selectedDate.getDate() + diffDays);
  selectedDate.setMinutes(selectedDate.getMinutes() + diffMinutes);

  return selectedDate;
};

const generateEvent = () => {
  const startDate = getRandomDate(new Date());
  return {
    type: getRandomArrayItem(_data__WEBPACK_IMPORTED_MODULE_0__["TYPE_ITEMS"]),
    location: _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_CITY"].pop(),
    offers: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(Object(_data__WEBPACK_IMPORTED_MODULE_0__["getRandomOptions"])()).slice(Math.random() * Object(_data__WEBPACK_IMPORTED_MODULE_0__["getRandomOptions"])().length),
    destinationDescription: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(_data__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"]).slice(Math.random() * _data__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"].length),
    destinationPhoto: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(_data__WEBPACK_IMPORTED_MODULE_0__["PHOTOS"]).slice(Math.random() * _data__WEBPACK_IMPORTED_MODULE_0__["PHOTOS"].length),
    startDate,
    endDate: getRandomDate(startDate),
    price: getRandomIntegerNumber(10, 1000),
    isFavorite: Math.random() > 0.5
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent)
    .sort((a, b) => a.startDate > b.startDate ? 1 : -1);
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomArrayItem, getRandomIntegerNumber, createElement, RenderPosition, render, unRender, castTimeFormat, formatTime, formatDurationTime, shuffleArray, generateTown, generateDates, generatePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerNumber", function() { return getRandomIntegerNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unRender", function() { return unRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castTimeFormat", function() { return castTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDurationTime", function() { return formatDurationTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTown", function() { return generateTown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDates", function() { return generateDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePrice", function() { return generatePrice; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const unRender = (element) => {
  if (element) {
    element.remove();
  }
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date, forForm = false) => {
  const year = castTimeFormat(date.getUTCFullYear()) % 2000;
  const month = castTimeFormat(date.getMonth());
  const day = castTimeFormat(date.getDate());
  const hour = castTimeFormat(date.getHours() % 12);
  const minute = castTimeFormat(date.getMinutes());

  return forForm ? `${day}/${month}/${year} ${hour}:${minute}` : `${hour}:${minute}`;
};

const formatDurationTime = (timeDuration) => {
  const time = Math.floor((timeDuration) / 60000);
  const minutes = time % 60;
  const days = Math.round((time - minutes) / 1440);
  const hours = Math.round((time - minutes) / 60 - days * 24);

  return `${days > 0 ? days + `D` : ``} ${hours > 0 ? hours + `H` : ``} ${minutes > 0 ? minutes + `M` : ``}`;
};

const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const generateTown = (events) => {
  return events.length <= 3 ? events.map((event) => event.location).join(` — `) : `${events[0].location} — ... — ${events[events.length - 1].location}`;
};

const generateDates = (events) => {
  const set = new Set();
  events.forEach((evt) => set.add(JSON.stringify({day: evt.startDate.getDate(), month: _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_MONTHS"][evt.startDate.getMonth()]})));
  return Array.from(set).map((evt) => JSON.parse(evt));
};

const generatePrice = (arr) => {
  return arr.reduce((sum, item) => sum + item.price, 0);
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map