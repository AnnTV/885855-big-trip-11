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

/***/ "./src/components/abstact-smart-component.js":
/*!***************************************************!*\
  !*** ./src/components/abstact-smart-component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractSmartComponent; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./src/components/abstract-component.js");


class AbstractSmartComponent extends _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  recoveryListeners() {
    throw new Error(`Abstract method not implemented: recoveryListeners`);
  }

  rerender() {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, oldElement);

    this.recoveryListeners();
  }
}


/***/ }),

/***/ "./src/components/abstract-component.js":
/*!**********************************************!*\
  !*** ./src/components/abstract-component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");


class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}



/***/ }),

/***/ "./src/components/day-list-container.js":
/*!**********************************************!*\
  !*** ./src/components/day-list-container.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DaylistContainer; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class DaylistContainer extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<ul class="trip-days"></ul>`.trim();
  }
}


/***/ }),

/***/ "./src/components/days-component.js":
/*!******************************************!*\
  !*** ./src/components/days-component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Days; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");



const createTripDayItemMarkup = (it, index) => {
  return (
    `<li class="trip-days__item  day">
         <div class="day__info">
           <span class="day__counter">${it ? `${index + 1}` : ``}</span>
           <time class="day__date" datetime="2019-03-18">${it ? `${it.month} ${it.day}` : ``}</time>
         </div>
         <ul class="trip-events__list"> </ul>
    </li>`
  );
};


const createTripDaysItemTemplate = (days) => {
  return days === `` ? createTripDayItemMarkup() : days.map((it, index) => createTripDayItemMarkup(it, index)).join(`\n`);
};

class Days extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(days) {
    super();
    this._days = days;
  }

  getTemplate() {
    return createTripDaysItemTemplate(this._days);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate(), true);
    }

    return this._element;
  }

}



/***/ }),

/***/ "./src/components/events-component.js":
/*!********************************************!*\
  !*** ./src/components/events-component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/time */ "./src/utils/time.js");
/* harmony import */ var _abstact_smart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstact-smart-component */ "./src/components/abstact-smart-component.js");
/* harmony import */ var _mock_offers_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/offers-mock */ "./src/mock/offers-mock.js");





const createEventList = (active) => {
  return _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_POINTS_TRANSPORT"].map((item) => {
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
    return (`
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.type}-1" type="checkbox" name="event-offer-${offer.type}" checked>
        <label class="event__offer-label" for="event-offer-${offer.type}-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`
    );
  }).join(``);
};

const createDestinationDescriptions = (descriptions) => {
  return descriptions.map((description) => `<p class="event__destination-description">${description}</p>`).join(`\n`);
};

const createDestinationPhoto = (photos) => {
  return photos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo">`).join(`\n`);
};

class Events extends _abstact_smart_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
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


    const timeStart = Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(startDate, true);
    const timeEnd = Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(endDate, true);

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

  recoveryListeners() {
    this._subscribeOnEvents();
    this.setSubmitHandler(this._submitHandler);
    this.setFavoritesButtonClickHandler(this._FavoriteHandler);

    this.setClickHandler(this._clickHandler);
  }

  setSubmitHandler(handler) {
    this.getElement().addEventListener(`submit`, handler);
    this._submitHandler = handler;
  }

  setFavoritesButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__favorite-btn`)
      .addEventListener(`click`, handler);
    this._FavoriteHandler = handler;
  }

  setClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
    this._clickHandler = handler;
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelectorAll(`.event__type-input`).forEach((input) => {
      input.addEventListener(`change`, (evt) => {
        this._type = evt.target.value;
        this.rerender();
      });
    });

    element.querySelector(`.event__input--destination`).addEventListener(`change`, (evt) => {
      if (this._points.find((it) => it.location === evt.target.value)) {
        this._location = evt.target.value;
        this._offers = Object(_mock_offers_mock__WEBPACK_IMPORTED_MODULE_3__["getRandomOffers"])();

        this.rerender();
      }
    });
  }

  rerender() {
    super.rerender();
  }

  reset() {
    this._event = this._event;
    this._type = this._event.type;
    this._location = this._event.info.location;
    this.rerender();
  }
}


/***/ }),

/***/ "./src/components/events-item-component.js":
/*!*************************************************!*\
  !*** ./src/components/events-item-component.js ***!
  \*************************************************/
/*! exports provided: getOffers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffers", function() { return getOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsItem; });
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/time */ "./src/utils/time.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");




const getOffers = (offers) => {
  return offers.map((offer) => {
    return (
      `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
      </li>`
    );
  }).join(``);
};

class EventsItem extends _abstract_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {type, offers, startDate, endDate, price, info} = this._event;
    const timeEnd = Object(_utils_time__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(endDate);
    const timeStart = Object(_utils_time__WEBPACK_IMPORTED_MODULE_0__["formatTime"])(startDate);
    const timeDuration = endDate - startDate;
    const action = _data__WEBPACK_IMPORTED_MODULE_1__["TYPE_POINTS_ACTIVITY"].some((it) => type === it) ? `in` : `to`;

    const location = info.location;
    const offersList = getOffers(offers);


    return `<li class="trip-events__item">
           <div class="event">
             <div class="event__type">
               <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
             </div>
             <h3 class="event__title">${type} ${action} ${location}</h3>

             <div class="event__schedule">
               <p class="event__time">
                 <time class="event__start-time" datetime="2019-03-18T11:00">${timeStart}</time>
                 &mdash;
                 <time class="event__end-time" datetime="2019-03-18T11:00">${timeEnd}</time>
               </p>
               <p class="event__duration">${Object(_utils_time__WEBPACK_IMPORTED_MODULE_0__["formatDurationTime"])(timeDuration)}</p>
             </div>

             <p class="event__price">
               &euro;&nbsp;<span class="event__price-value">${price}</span>
             </p>

             <h4 class="visually-hidden">Offers:</h4>
             <ul class="event__selected-offers">
             ${offersList}
             </ul>

             <button class="event__rollup-btn" type="button">
               <span class="visually-hidden">Open event</span>
             </button>
           </div>
      </li>`.trim();
  }

  setClickHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
  }
}




/***/ }),

/***/ "./src/components/filter-component.js":
/*!********************************************!*\
  !*** ./src/components/filter-component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/data.js");



const createFilterMarkup = (filter, isChecked) => {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filter.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.toLowerCase()}" ${isChecked === 0 ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${filter.toLowerCase()}">${filter}</label>
    </div>`
  );
};

class Filter extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    const filterMarkup = _data__WEBPACK_IMPORTED_MODULE_1__["FILTERS_DATA"].map((i, isChecked) => createFilterMarkup(i, isChecked)).join(`\n`);
    return `<form class="trip-filters" action="#" method="get">
        ${filterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
     </form>`
     .trim();
  }
}


/***/ }),

/***/ "./src/components/info-component.js":
/*!******************************************!*\
  !*** ./src/components/info-component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Info extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./src/components/info-cost-component.js":
/*!***********************************************!*\
  !*** ./src/components/info-cost-component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoCost; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class InfoCost extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./src/components/menu-component.js":
/*!******************************************!*\
  !*** ./src/components/menu-component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Menu extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
        <a class="trip-tabs__btn" href="#">Stats</a>
     </nav>`.trim();
  }
}


/***/ }),

/***/ "./src/components/no-events-component.js":
/*!***********************************************!*\
  !*** ./src/components/no-events-component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoEvents; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class NoEvents extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<p class="trip-events__msg">Click New Event to create your first point</p>`.trim();
  }
}


/***/ }),

/***/ "./src/components/sort-component.js":
/*!******************************************!*\
  !*** ./src/components/sort-component.js ***!
  \******************************************/
/*! exports provided: SortType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


const SortType = {
  EVENT: `event`,
  PRICE: `price`,
  TIME: `time`,
};

class Sort extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._currenSortType = SortType.EVENT;
  }
  getTemplate() {
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <span class="trip-sort__item  trip-sort__item--day">Day</span>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
      <label data-sort-type="${SortType.EVENT}" class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label data-sort-type="${SortType.TIME}" class="trip-sort__btn" for="sort-time">
        Time
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
      <label data-sort-type="${SortType.PRICE}" class="trip-sort__btn" for="sort-price">
        Price
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>

    <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`.trim();
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `LABEL`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType);
    });
  }
}


/***/ }),

/***/ "./src/controllers/event-controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/event-controller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventController; });
/* harmony import */ var _components_events_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/events-item-component */ "./src/components/events-item-component.js");
/* harmony import */ var _components_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/events-component */ "./src/components/events-component.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _mock_mode_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/mode-mock */ "./src/mock/mode-mock.js");





const ESC_KEYCODE = 27;

class EventController {
  constructor(container, onDataChange, onViewChange, points, types) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._points = points;
    this._types = types;
    this._mode = _mock_mode_mock__WEBPACK_IMPORTED_MODULE_3__["Mode"].DEFAULT;
    this._eventsItemComponent = null;
    this._eventsComponent = null;
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(event) {
    const oldeventsItemComponent = this._eventsItemComponent;
    const oldEventsComponent = this._eventsComponent;

    this._eventsItemComponent = new _components_events_item_component__WEBPACK_IMPORTED_MODULE_0__["default"](event);
    this._eventsComponent = new _components_events_component__WEBPACK_IMPORTED_MODULE_1__["default"](event, this._points, this._types);

    this._eventsItemComponent.setClickHandler(() => {
      this._replaceEventToEdit();
      this._eventsComponent.reset();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventsComponent.setSubmitHandler((evt) => {
      evt.preventDefault();
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventsComponent.setClickHandler(() => {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventsComponent.setFavoritesButtonClickHandler(() => {
      this._onDataChange(this, event, Object.assign({}, event, {
        isFavorite: !event.isFavorite,
      }));
    });

    if (oldEventsComponent && oldeventsItemComponent) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventsItemComponent, oldeventsItemComponent);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventsComponent, oldEventsComponent);
    } else {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._container, this._eventsItemComponent);
    }
  }

  setDefaultView() {
    if (this._mode !== _mock_mode_mock__WEBPACK_IMPORTED_MODULE_3__["Mode"].DEFAULT) {
      this._replaceEditToEvent();
    }
  }

  _replaceEditToEvent() {
    this._eventsComponent.reset();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventsItemComponent, this._eventsComponent);
    this._mode = _mock_mode_mock__WEBPACK_IMPORTED_MODULE_3__["Mode"].DEFAULT;
  }

  _replaceEventToEdit() {
    this._onViewChange();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventsComponent, this._eventsItemComponent);
    this._mode = _mock_mode_mock__WEBPACK_IMPORTED_MODULE_3__["Mode"].EDIT;
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.keyCode === ESC_KEYCODE || evt.key === `Esc`;

    if (isEscKey) {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}


/***/ }),

/***/ "./src/controllers/trip-controller.js":
/*!********************************************!*\
  !*** ./src/controllers/trip-controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripController; });
/* harmony import */ var _event_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-controller */ "./src/controllers/event-controller.js");
/* harmony import */ var _components_day_list_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/day-list-container */ "./src/components/day-list-container.js");
/* harmony import */ var _components_days_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/days-component */ "./src/components/days-component.js");
/* harmony import */ var _components_no_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/no-events-component */ "./src/components/no-events-component.js");
/* harmony import */ var _components_sort_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sort-component */ "./src/components/sort-component.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/time */ "./src/utils/time.js");








const getSortedEvents = (events, sortType) => {
  const showingEvents = events.slice();

  switch (sortType) {
    case _components_sort_component__WEBPACK_IMPORTED_MODULE_4__["SortType"].PRICE:
      showingEvents.sort((a, b) => b.price - a.price);
      break;
    case _components_sort_component__WEBPACK_IMPORTED_MODULE_4__["SortType"].TIME:
      showingEvents.sort((a, b) => (b.endDate - b.startDate) - (a.endDate - a.startDate));
      break;
  }

  return showingEvents;
};

const renderDayСontainer = (container, dates = ``) => {
  container.innerHTML = ``;
  const days = new _components_days_component__WEBPACK_IMPORTED_MODULE_2__["default"](dates);
  if (dates === ``) {
    days.getElement().querySelector(`.day__info`).innerHTML = ``;
  }
  Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(container, days);

  return dates !== `` ? days.getElement().querySelectorAll(`.trip-events__list`) : days.getElement().querySelector(`.trip-events__list`);
};

const renderEvents = (events, container, onDataChange, onViewChange, points, types) => {
  return events.map((event) => {
    const eventController = new _event_controller__WEBPACK_IMPORTED_MODULE_0__["default"](container, onDataChange, onViewChange, points, types);
    eventController.render(event);

    return eventController;
  });
};

const renderDefaultEvents = (events, trailDates, container, onDataChange, onViewChange, points, types) => {
  const tripEventsList = renderDayСontainer(container, trailDates);
  let controllers = [];
  for (let j = 0; j < tripEventsList.length; j++) {
    const dayEvents = events.filter((event) => event.startDate.getDate() === trailDates[j].day);
    controllers = [...controllers, ...renderEvents(dayEvents, tripEventsList[j], onDataChange, onViewChange, points, types)];
  }
  return controllers;
};

const renderSortedEvents = (sortedEvents, container, onDataChange, onViewChange, points, types) => {
  const tripEventsList = renderDayСontainer(container);
  return renderEvents(sortedEvents, tripEventsList, onDataChange, onViewChange, points, types);
};

class TripController {
  constructor(container) {
    this._container = container;
    this._events = [];
    this._showedEventControllers = [];
    this._noEventsComponent = new _components_no_events_component__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._sortComponent = new _components_sort_component__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._dayListContainer = new _components_day_list_container__WEBPACK_IMPORTED_MODULE_1__["default"]();

    this._onDataChange = this._onDataChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    this._onViewChange = this._onViewChange.bind(this);

  }

  render(events, points, types) {
    const container = this._container;
    this._events = events;
    this._points = points;
    this._types = types;
    this._trailDates = Object(_utils_time__WEBPACK_IMPORTED_MODULE_6__["generateDates"])(this._events);
    if (!this._events.length) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(container, this._noEventsComponent);
    } else {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(container, this._sortComponent);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(container, this._dayListContainer);

      const tripDaysElement = this._dayListContainer.getElement();
      this._showedEventControllers = renderDefaultEvents(this._events, this._trailDates, tripDaysElement, this._onDataChange, this._onViewChange, this._points, this._types);
    }
  }
  _onSortTypeChange(sortType) {
    const sortedEvents = getSortedEvents(this._events, sortType);
    const tripDaysElement = this._dayListContainer.getElement();
    if (sortType !== `event`) {
      this._showedEventControllers = renderSortedEvents(sortedEvents, tripDaysElement, this._onDataChange, this._onViewChange, this._points, this._types);
    } else {
      this._showedEventControllers = renderDefaultEvents(this._events, this._trailDates, tripDaysElement, this._onDataChange, this._onViewChange, this._points, this._types);
    }
  }

  _onDataChange(oldData, newData) {
    const index = this._events.findIndex((it) => it === oldData);
    const eventController = this._showedEventControllers.find((evt) => evt._eventComponent._event === oldData);
    if (index === -1) {
      return;
    }

    this._events = [...this._events.slice(0, index), newData, ...this._events.slice(index + 1)];
    eventController.render(this._events[index]);

  }

  _onViewChange() {
    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }
}



/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: FILTERS_DATA, TYPE_POINTS_TRANSPORT, TYPE_ITEMS, TYPE_POINTS_ACTIVITY, PHOTOS, DESCRIPTIONS, TYPE_LOCATION, TYPE_MONTHS, OFFERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS_DATA", function() { return FILTERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_POINTS_TRANSPORT", function() { return TYPE_POINTS_TRANSPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_ITEMS", function() { return TYPE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_POINTS_ACTIVITY", function() { return TYPE_POINTS_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTOS", function() { return PHOTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONS", function() { return DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_LOCATION", function() { return TYPE_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_MONTHS", function() { return TYPE_MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFERS", function() { return OFFERS; });
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

const TYPE_POINTS_ACTIVITY = [
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const PHOTOS = [
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`
];

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


const TYPE_LOCATION = [
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

const OFFERS = [
  {
    type: `seats`,
    title: `Choose seats`,
    price: 5
  },
  {
    type: `meal`,
    title: `Add meal`,
    price: 15
  },
  {
    type: `luggage`,
    title: `Add luggage`,
    price: 30
  },
  {
    type: `train`,
    title: `Travel by train`,
    price: 40
  },
  {
    type: `comfort`,
    title: `Switch to comfort class`,
    price: 100
  }
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
/* harmony import */ var _components_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/info-component */ "./src/components/info-component.js");
/* harmony import */ var _components_info_cost_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/info-cost-component */ "./src/components/info-cost-component.js");
/* harmony import */ var _components_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter-component */ "./src/components/filter-component.js");
/* harmony import */ var _controllers_trip_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/trip-controller */ "./src/controllers/trip-controller.js");
/* harmony import */ var _components_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-component */ "./src/components/menu-component.js");
/* harmony import */ var _mock_event_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/event-mock */ "./src/mock/event-mock.js");
/* harmony import */ var _utils_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/info */ "./src/utils/info.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/time */ "./src/utils/time.js");
/* harmony import */ var _mock_info_mock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/info-mock */ "./src/mock/info-mock.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");













const EVENTS_COUNT = 15;


const points = Object(_mock_info_mock__WEBPACK_IMPORTED_MODULE_8__["generateInfoTown"])();
const events = Object(_mock_event_mock__WEBPACK_IMPORTED_MODULE_5__["generateEvents"])(EVENTS_COUNT, points);
const pointDates = Object(_utils_time__WEBPACK_IMPORTED_MODULE_7__["generateDates"])(events);
const point = Object(_utils_info__WEBPACK_IMPORTED_MODULE_6__["generateTown"])(events);
const eventsPrice = Object(_utils_info__WEBPACK_IMPORTED_MODULE_6__["generatePrice"])(events);

const tripMainElement = document.querySelector(`.trip-main`);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripMainElement, new _components_info_component__WEBPACK_IMPORTED_MODULE_0__["default"](point, pointDates), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);

const tripControlsElement = document.querySelector(`.trip-controls`);

const tripInfoElement = document.querySelector(`.trip-info`);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripInfoElement, new _components_info_cost_component__WEBPACK_IMPORTED_MODULE_1__["default"](eventsPrice), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripControlsElement, new _components_menu_component__WEBPACK_IMPORTED_MODULE_4__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);

Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripControlsElement, new _components_filter_component__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const tripEventsElement = document.querySelector(`.trip-events`);
const trip = new _controllers_trip_controller__WEBPACK_IMPORTED_MODULE_3__["default"](tripEventsElement);
trip.render(events, points);


/***/ }),

/***/ "./src/mock/event-mock.js":
/*!********************************!*\
  !*** ./src/mock/event-mock.js ***!
  \********************************/
/*! exports provided: generateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvents", function() { return generateEvents; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _offers_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers-mock */ "./src/mock/offers-mock.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");




const getRandomDate = (date) => {
  const selectedDate = new Date(date);
  const diffDays = Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["getRandomIntegerNumber"])(0, 2);
  const diffMinutes = Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["getRandomIntegerNumber"])(0, 90);

  selectedDate.setDate(selectedDate.getDate() + diffDays);
  selectedDate.setMinutes(selectedDate.getMinutes() + diffMinutes);

  return selectedDate;
};

const generateEvent = (point) => {
  const startDate = getRandomDate(new Date());
  const type = Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(_data__WEBPACK_IMPORTED_MODULE_0__["TYPE_ITEMS"]);
  const info = Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(point);
  return {
    type,
    offers: Object(_offers_mock__WEBPACK_IMPORTED_MODULE_1__["getRandomOffers"])(),
    destinationDescription: Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["shuffleArray"])(_data__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"]).slice(Math.random() * _data__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"].length),
    destinationPhoto: Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["shuffleArray"])(_data__WEBPACK_IMPORTED_MODULE_0__["PHOTOS"]).slice(Math.random() * _data__WEBPACK_IMPORTED_MODULE_0__["PHOTOS"].length),
    info,
    startDate,
    endDate: getRandomDate(startDate),
    price: Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["getRandomIntegerNumber"])(10, 1000),
    isFavorite: Math.random() > 0.5
  };
};

const generateEvents = (count, point) => {
  return new Array(count)
    .fill(``)
    .map(() => generateEvent(point))
    .sort((a, b) => a.startDate > b.startDate ? 1 : -1);
};


/***/ }),

/***/ "./src/mock/info-mock.js":
/*!*******************************!*\
  !*** ./src/mock/info-mock.js ***!
  \*******************************/
/*! exports provided: generateInfoTown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateInfoTown", function() { return generateInfoTown; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");



const generateRandomPhotos = () => {
  const photosArray = [];
  for (let i = 0; i < Object(_utils_random__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerNumber"])(0, 5); i++) {
    photosArray.push(`http://picsum.photos/248/152?r=${i + Math.random() * 100}`);
  }
  return photosArray;
};

const generateInfoTown = () => {
  return _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_LOCATION"].map((locationName) => {
    return {
      location: locationName,
      description: getRandomDescription(),
      photo: generateRandomPhotos()
    };
  });
};

const getRandomDescription = () => {
  return Object(_utils_random__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(_data__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"]).slice(Math.random() * _data__WEBPACK_IMPORTED_MODULE_0__["DESCRIPTIONS"].length);
};


/***/ }),

/***/ "./src/mock/mode-mock.js":
/*!*******************************!*\
  !*** ./src/mock/mode-mock.js ***!
  \*******************************/
/*! exports provided: Mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};


/***/ }),

/***/ "./src/mock/offers-mock.js":
/*!*********************************!*\
  !*** ./src/mock/offers-mock.js ***!
  \*********************************/
/*! exports provided: getRandomOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOffers", function() { return getRandomOffers; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");



const getRandomOffers = () => {
  const currentOffers = [];

  for (let i = 0; i < Object(_utils_random__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerNumber"])(0, 4); i++) {
    currentOffers.push(_data__WEBPACK_IMPORTED_MODULE_0__["OFFERS"][i]);
  }

  return currentOffers;
};




/***/ }),

/***/ "./src/utils/info.js":
/*!***************************!*\
  !*** ./src/utils/info.js ***!
  \***************************/
/*! exports provided: generatePrice, generateTown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePrice", function() { return generatePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTown", function() { return generateTown; });
const generatePrice = (arr) => {
  return arr.reduce((sum, item) => sum + item.price, 0);
};

const generateTown = (events) => {
  return events.length <= 3 ? events.map((event) => event.info.location).join(` — `) : `${events[0].info.location} — ... — ${events[events.length - 1].info.location}`;
};


/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/*! exports provided: shuffleArray, getRandomArrayItem, getRandomIntegerNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerNumber", function() { return getRandomIntegerNumber; });
const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, createElement, render, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const createElement = (template, groupFlag = false) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return groupFlag ? newElement : newElement.firstChild;
};

const render = (container, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
    case RenderPosition.AFTEREND:
      container.after(component.getElement());
      break;
  }
};

const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/utils/time.js":
/*!***************************!*\
  !*** ./src/utils/time.js ***!
  \***************************/
/*! exports provided: formatTime, formatDurationTime, generateDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDurationTime", function() { return formatDurationTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDates", function() { return generateDates; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");


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

const formatDurationTime = (timeDiff) => {
  const time = Math.trunc((timeDiff) / 60000);
  const minutes = time % 60;
  const days = Math.trunc((time - minutes) / 1440);
  const hours = Math.trunc((time - minutes) / 60 - days * 24);

  return `${days > 0 ? days + `D` : ``} ${hours > 0 ? hours + `H` : ``} ${minutes > 0 ? minutes + `M` : ``}`;
};

const generateDates = (events) => {
  const set = new Set();
  events.forEach((evt) => set.add(JSON.stringify({day: evt.startDate.getDate(), month: _data__WEBPACK_IMPORTED_MODULE_0__["TYPE_MONTHS"][evt.startDate.getMonth()]})));
  return Array.from(set).map((evt) => JSON.parse(evt));
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map