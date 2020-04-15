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

/***/ "./src/components/cost-value-big-trip-template.js":
/*!********************************************************!*\
  !*** ./src/components/cost-value-big-trip-template.js ***!
  \********************************************************/
/*! exports provided: createCostValueBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCostValueBigTripTemplate", function() { return createCostValueBigTripTemplate; });
const createCostValueBigTripTemplate = (price) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>`
  );
};



/***/ }),

/***/ "./src/components/day-big-trip-template.js":
/*!*************************************************!*\
  !*** ./src/components/day-big-trip-template.js ***!
  \*************************************************/
/*! exports provided: createDayBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDayBigTripTemplate", function() { return createDayBigTripTemplate; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _events_item_big_trip_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-item-big-trip-template */ "./src/components/events-item-big-trip-template.js");



const createDayBigTripTemplate = (date, events) => {
  const officialDate = new Date(date);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${officialDate.getDate()}</span>
        <time class="day__date" datetime="${date}">${_data__WEBPACK_IMPORTED_MODULE_0__["TYPE_MONTHS"][officialDate.getMonth()]} ${officialDate.getFullYear().toString().substr(-2)}</time>
      </div>
      <ul class="trip-events__list">
        ${events.map((event) => Object(_events_item_big_trip_template__WEBPACK_IMPORTED_MODULE_1__["createEventsItemBigTripTemplate"])(event))}
      </ul>
    </li>`
  );
};




/***/ }),

/***/ "./src/components/events-big-trip-template.js":
/*!****************************************************!*\
  !*** ./src/components/events-big-trip-template.js ***!
  \****************************************************/
/*! exports provided: createEventsBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventsBigTripTemplate", function() { return createEventsBigTripTemplate; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



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
          <span class="event__offer-price">${price}</span>
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

const createEventsBigTripTemplate = (event) => {
  const {
    action,
    destinationDescription,
    destinationPhoto,
    endDate,
    location,
    locationList,
    offers,
    price,
    startDate,
    type,
  } = event;

  const dateStart = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear().toString().substr(-2)}`;
  const timeStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(startDate);
  const dateEnd = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear().toString().substr(-2)}`;
  const timeEnd = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(endDate);

  const offersList = createOffersList(offers);
  const eventList = createEventList(type);
  const descriptionDestination = createDestinationDescriptions(destinationDescription);
  const photoDestination = createDestinationPhoto(destinationPhoto);

  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
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
            ${type} ${action}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${location}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${locationList.map((city) => (`<option value="${city}"></option>`)).join(`\n`)}
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart} ${timeStart}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd} ${timeEnd}">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            ${price.currency}
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price.value}">
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
    </form>`
  );
};


/***/ }),

/***/ "./src/components/events-item-big-trip-template.js":
/*!*********************************************************!*\
  !*** ./src/components/events-item-big-trip-template.js ***!
  \*********************************************************/
/*! exports provided: createEventsItemBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventsItemBigTripTemplate", function() { return createEventsItemBigTripTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createEventsItemBigTripTemplate = (event) => {
  const {
    action,
    endDate,
    location,
    price,
    startDate,
    type,
  } = event;

  const dateStart = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;
  const timeStart = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(startDate);
  const dateEnd = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`;
  const timeEnd = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(endDate);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLocaleLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${action} ${location}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateStart}T${timeStart}">${timeStart}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateEnd}T${timeEnd}">${timeEnd}</time>
          </p>
          <p class="event__duration">${(startDate.getTime() - endDate.getTime()) / 1000}M</p>
        </div>
        <p class="event__price">
          ${price.currency}<span class="event__price-value">${price.value}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Order Uber</span>
            &plus;
            ${price.currency}&nbsp;<span class="event__offer-price">${price.value}</span>
          </li>
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};


/***/ }),

/***/ "./src/components/filters-big-trip-template.js":
/*!*****************************************************!*\
  !*** ./src/components/filters-big-trip-template.js ***!
  \*****************************************************/
/*! exports provided: createFiltersBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFiltersBigTripTemplate", function() { return createFiltersBigTripTemplate; });
const createFilterMurkup = (filter, isChecked) => {
  return `<div class="trip-filters__filter">
    <input
      id="filter-everything"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${filter}" ${isChecked ? `checked` : ``}>
    <label class="trip-filters__filter-label" for="filter-everything">${filter}</label>
  </div>`;
};

const createFiltersBigTripTemplate = (filters) => {
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filters.map((filter, i) => createFilterMurkup(filter, i === 0)).join(`\n`)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};


/***/ }),

/***/ "./src/components/info-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/info-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: createInfoBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInfoBigTripTemplate", function() { return createInfoBigTripTemplate; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");


const generatePointList = (points) => {
  return points.map((point) => point).join(` &mdash; `);
};

const genarateDates = (start, end) => {
  const startDay = start.getDate();
  const endDay = end.getDate();
  const startMonth = start.getMonth();

  return `${_data__WEBPACK_IMPORTED_MODULE_0__["TYPE_MONTHS"][startMonth]} ${startDay} &mdash; ${endDay}`;
};

const createInfoBigTripTemplate = (points) => {
  const pointList = points.reduce((acc, point) => {
    acc.push(point.point);
    return acc;
  }, []);
  const startDay = points[0].startDay;
  const endDay = points[points.length - 1].endDay;

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${generatePointList(pointList)}</h1>
        <p class="trip-info__dates">${genarateDates(startDay, endDay)}</p>
      </div>
    </section>`
  );
};


/***/ }),

/***/ "./src/components/list-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/list-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: createListBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListBigTripTemplate", function() { return createListBigTripTemplate; });
const createListBigTripTemplate = () => {
  return (
    `<ul class="trip-days">
      </ul>`
  );
};


/***/ }),

/***/ "./src/components/menu-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/menu-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: createMenuBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuBigTripTemplate", function() { return createMenuBigTripTemplate; });
const createMenuBigTripTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};



/***/ }),

/***/ "./src/components/sort-big-trip-template.js":
/*!**************************************************!*\
  !*** ./src/components/sort-big-trip-template.js ***!
  \**************************************************/
/*! exports provided: createSortingBigTripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortingBigTripTemplate", function() { return createSortingBigTripTemplate; });
const createSortingBigTripTemplate = () => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span class="trip-sort__item  trip-sort__item--day">Day</span>
        <div class="trip-sort__item  trip-sort__item--event">
          <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
          <label class="trip-sort__btn" for="sort-event">Event</label>
        </div>
        <div class="trip-sort__item  trip-sort__item--time">
          <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
          <label class="trip-sort__btn" for="sort-time">
            Time
            <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
        </div>
        <div class="trip-sort__item  trip-sort__item--price">
          <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
          <label class="trip-sort__btn" for="sort-price">
            Price
            <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
        </div>
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: FILTERS_DATA, TYPE_POINTS_TRANSPORT, TYPE_ITEMS, EVENT_ACTION, CURRENCY, TYPE_POINTS_ACTIVITY, PICTURE, PICTURE_COUNT, DESCRIPTIONS, TYPE_CITY, TYPE_MONTHS, getRandomOptions, getRandomDate */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


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
  `Moscow`,
  `Prague`,
  `Pushchino`,
  `Riga`,
  `Seoul`,
  `Tokyo`,
  `Valencia`,
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

const getRandomDate = (date) => {
  const selectedDate = new Date(date);
  const diffDays = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntegerNumber"])(0, 2);
  const diffMinutes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIntegerNumber"])(0, 90);

  selectedDate.setDate(selectedDate.getDate() + diffDays);
  selectedDate.setMinutes(selectedDate.getMinutes() + diffMinutes);

  return selectedDate;
};


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
/* harmony import */ var _components_list_big_trip_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-big-trip-template */ "./src/components/list-big-trip-template.js");
/* harmony import */ var _components_day_big_trip_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/day-big-trip-template */ "./src/components/day-big-trip-template.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/event */ "./src/mock/event.js");












const EVENT_COUNT = 15;
const DISPLAY_EVENTS_START = 10;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const filters = Object(_mock_filter__WEBPACK_IMPORTED_MODULE_8__["generateFilters"])();
const events = Object(_mock_event__WEBPACK_IMPORTED_MODULE_9__["generateEvents"])(EVENT_COUNT);
const eventsPrice = events.reduce((acc, event) => {
  return acc + event.price.value;
}, 0);
const eventPoints = events.reduce((acc, event) => {
  acc.push({
    point: event.location,
    startDay: event.startDate,
    endDay: event.endDate,
  });
  return acc;
}, []);

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const tripEventsElement = document.querySelector(`.trip-events`);

render(tripMainElement, Object(_components_info_big_trip_template__WEBPACK_IMPORTED_MODULE_0__["createInfoBigTripTemplate"])(eventPoints), `afterBegin`);

const tripInfoElement = document.querySelector(`.trip-info`);

render(tripInfoElement, Object(_components_cost_value_big_trip_template__WEBPACK_IMPORTED_MODULE_1__["createCostValueBigTripTemplate"])(eventsPrice), `beforeEnd`);
render(tripControlsElement, Object(_components_menu_big_trip_template__WEBPACK_IMPORTED_MODULE_2__["createMenuBigTripTemplate"])(), `afterBegin`);
render(tripControlsElement, Object(_components_filters_big_trip_template__WEBPACK_IMPORTED_MODULE_3__["createFiltersBigTripTemplate"])(filters), `beforeEnd`);
render(tripEventsElement, Object(_components_sort_big_trip_template__WEBPACK_IMPORTED_MODULE_4__["createSortingBigTripTemplate"])(), `beforeEnd`);
render(tripEventsElement, Object(_components_events_big_trip_template__WEBPACK_IMPORTED_MODULE_5__["createEventsBigTripTemplate"])(events[0]), `beforeEnd`);
render(tripEventsElement, Object(_components_list_big_trip_template__WEBPACK_IMPORTED_MODULE_6__["createListBigTripTemplate"])(), `beforeEnd`);

const tripDaysElement = document.querySelector(`.trip-days`);

let showingEventsCount = DISPLAY_EVENTS_START;
let eventsList = {};

events.slice(1, showingEventsCount)
  .forEach((event) => {
    const date = `${event.startDate.getFullYear()}-${event.startDate.getMonth() + 1}-${event.startDate.getDate()}`;

    if (eventsList.hasOwnProperty(date)) {
      eventsList[date].push(event);
    } else {
      eventsList[date] = [event];
    }
  });

for (let [key, value] of Object.entries(eventsList)) {
  render(tripDaysElement, Object(_components_day_big_trip_template__WEBPACK_IMPORTED_MODULE_7__["createDayBigTripTemplate"])(key, value), `beforeEnd`);
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


const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = () => {
  const selectedDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  selectedDate.setDate(selectedDate.getDate() + diffValue);

  return selectedDate;
};

const generateOfferList = () => {
  const result = [];
  const count = getRandomIntegerNumber(0, 5);

  for (let i = 0; i < count; i++) {
    result.push({
      title: `Add luggage`,
      price: getRandomIntegerNumber(1, 100),
      currency: `&plus;${getRandomArrayItem(_data__WEBPACK_IMPORTED_MODULE_0__["CURRENCY"])}`,
      isChecked: getRandomIntegerNumber(0, 2),
    });
  }

  return result;
};

const generateDestinationDescription = () => {
  const result = [];
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  const count = getRandomIntegerNumber(1, 5);

  for (let i = 0; i < count; i++) {
    result.push(text);
  }

  return result;
};

const generateDestinationPhoto = () => {
  const result = [];
  const count = getRandomIntegerNumber(1, 5);

  for (let i = 1; i <= count; i++) {
    result.push(`img/photos/${i}.jpg`);
  }

  return result;
};

const generateEvent = () => {
  const generateStartDate = getRandomDate();
  const generateEndDate = (date) => {
    const updateDate = new Date();
    updateDate.setDate(date.getDate() + getRandomIntegerNumber(1, 10));
    return updateDate;
  };

  return {
    type: getRandomArrayItem(_data__WEBPACK_IMPORTED_MODULE_0__["TYPE_ITEMS"]),
    action: getRandomArrayItem(_data__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTION"]),
    location: getRandomArrayItem(_data__WEBPACK_IMPORTED_MODULE_0__["TYPE_CITY"]),
    locationList: _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_CITY"],
    offers: generateOfferList(),
    destinationDescription: generateDestinationDescription(),
    destinationPhoto: generateDestinationPhoto(),
    startDate: generateStartDate,
    endDate: generateEndDate(generateStartDate),
    price: {
      value: getRandomIntegerNumber(10, 1000),
      currency: getRandomArrayItem(_data__WEBPACK_IMPORTED_MODULE_0__["CURRENCY"]),
    },
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent)
    .sort((a, b) => a.startDate > b.startDate ? 1 : -1);
};


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
const filterNames = [
  `everything`,
  `future`,
  `past`,
];

const generateFilters = () => filterNames;



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: mixArray, castTimeFormat, formatTime, formatTimeDiff, getTotalPrice, getTrail, getRandomArrayItem, getRandomIntegerNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castTimeFormat", function() { return castTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeDiff", function() { return formatTimeDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPrice", function() { return getTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrail", function() { return getTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerNumber", function() { return getRandomIntegerNumber; });
const mixArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

const formatTimeDiff = (timeDiff) => {
  const time = Math.floor((timeDiff) / 60000);
  const minutes = time % 60;
  const days = Math.round((time - minutes) / 1440);
  const hours = Math.round((time - minutes) / 60 - days * 24);

  return `${days > 0 ? days + `D` : ``} ${hours > 0 ? hours + `H` : ``} ${minutes > 0 ? minutes + `M` : ``}`;
};

const getTotalPrice = (array) => {
  let mainPriceSum = 0;
  let offersPriceSum = 0;
  for (let i = 0; i < array.length; i++) {
    let checkPointPrice = array[i].price;
    mainPriceSum += checkPointPrice;
    for (let j = 0; j < array[i].offers.length; j++) {
      offersPriceSum += array[i].offers[j].price;
    }
  }
  return mainPriceSum + offersPriceSum;
};

const getTrail = (events) => {
  return events.length <= 3 ? events.map((event) => event.city).join(` — `) : `${events[0].city} — ... — ${events[events.length - 1].city}`;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map