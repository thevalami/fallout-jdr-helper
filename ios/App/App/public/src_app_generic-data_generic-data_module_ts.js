"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_generic-data_generic-data_module_ts"], {

  /***/ 2365:
  /*!*************************************************************!*\
    !*** ./src/app/generic-data/generic-data-routing.module.ts ***!
    \*************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "GenericDataPageRoutingModule": () => (/* binding */ GenericDataPageRoutingModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
    /* harmony import */
    var _generic_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-data.page */ 6291);


    const routes = [
      {
        path: '',
        component: _generic_data_page__WEBPACK_IMPORTED_MODULE_0__.GenericDataPage
      }
    ];
    let GenericDataPageRoutingModule = class GenericDataPageRoutingModule {
    };
    GenericDataPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
      })
    ], GenericDataPageRoutingModule);


    /***/
  }),

  /***/ 1218:
  /*!*****************************************************!*\
    !*** ./src/app/generic-data/generic-data.module.ts ***!
    \*****************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "GenericDataPageModule": () => (/* binding */ GenericDataPageModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
    /* harmony import */
    var _generic_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-data-routing.module */ 2365);
    /* harmony import */
    var _generic_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-data.page */ 6291);
    /* harmony import */
    var _pipes_generic_data_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/generic-data-search.pipe */ 6446);
    /* harmony import */
    var _pipes_clean_data_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/clean-data.pipe */ 4268);


    let GenericDataPageModule = class GenericDataPageModule {
    };
    GenericDataPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
          _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
          _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
          _generic_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.GenericDataPageRoutingModule
        ],
        declarations: [_generic_data_page__WEBPACK_IMPORTED_MODULE_1__.GenericDataPage, _pipes_generic_data_search_pipe__WEBPACK_IMPORTED_MODULE_2__.GenericDataSearchPipe, _pipes_clean_data_pipe__WEBPACK_IMPORTED_MODULE_3__.CleanDataPipe]
      })
    ], GenericDataPageModule);


    /***/
  }),

  /***/ 6291:
  /*!***************************************************!*\
    !*** ./src/app/generic-data/generic-data.page.ts ***!
    \***************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "GenericDataPage": () => (/* binding */ GenericDataPage)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _generic_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-data.page.html?ngResource */ 2005);
    /* harmony import */
    var _generic_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-data.page.scss?ngResource */ 9296);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
    /* harmony import */
    var _data_generic_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/generic-data */ 4768);
    var GenericDataPage_1;


    let GenericDataPage = GenericDataPage_1 = class GenericDataPage {
      constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.tableDefinitions = [];
        this.searchText = '';
      }

      ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
          const dataType = params['type'];
          const dataId = GenericDataPage_1.findDefinitions(_data_generic_data__WEBPACK_IMPORTED_MODULE_2__.REGISTERED_DATA, dataType);
          this.tableDefinitions = dataId.definition;
          this.genericData = dataId.data;
          this.title = dataId.label;
        });
      }

      static findDefinitions(REGISTERED_DATA, dataType) {
        for (let registereddatum of REGISTERED_DATA) {
          if (registereddatum.type === dataType) {
            return registereddatum;
          }
        }
      }
    };
    GenericDataPage.ctorParameters = () => [
      {type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute}
    ];
    GenericDataPage = GenericDataPage_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-generic-data',
        template: _generic_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generic_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], GenericDataPage);


    /***/
  }),

  /***/ 4268:
  /*!******************************************!*\
    !*** ./src/app/pipes/clean-data.pipe.ts ***!
    \******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "CleanDataPipe": () => (/* binding */ CleanDataPipe)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


    let CleanDataPipe = class CleanDataPipe {
      transform(value) {
        return String(value).replace('$CD$', '');
      }
    };
    CleanDataPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'cleanData'
      })
    ], CleanDataPipe);


    /***/
  }),

  /***/ 6446:
  /*!***************************************************!*\
    !*** ./src/app/pipes/generic-data-search.pipe.ts ***!
    \***************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "GenericDataSearchPipe": () => (/* binding */ GenericDataSearchPipe)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


    let GenericDataSearchPipe = class GenericDataSearchPipe {
      transform(data, searchtext) {
        if (searchtext === '') {
          return data;
        } else {
          const filteredData = [];
          for (let candidateData of data) {
            for (let key of Object.keys(candidateData)) {
              if (String(candidateData[key]).toLowerCase().includes(searchtext.toLowerCase())) {
                filteredData.push(candidateData);
              }
            }
          }
          return filteredData;
        }
      }
    };
    GenericDataSearchPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'genericDataSearch'
      })
    ], GenericDataSearchPipe);


    /***/
  }),

  /***/ 9296:
  /*!****************************************************************!*\
    !*** ./src/app/generic-data/generic-data.page.scss?ngResource ***!
    \****************************************************************/
  /***/ ((module) => {

    module.exports = "img.text-cd {\n  height: 24px;\n  width: auto;\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyaWMtZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiZ2VuZXJpYy1kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy50ZXh0LWNkIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG4iXX0= */";

    /***/
  }),

  /***/ 2005:
  /*!****************************************************************!*\
    !*** ./src/app/generic-data/generic-data.page.html?ngResource ***!
    \****************************************************************/
  /***/ ((module) => {

    module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">{{title}}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"searchText\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let data of genericData | genericDataSearch:searchText\">\n      <ion-label>\n        <ng-container *ngFor=\"let column of tableDefinitions; let i = index\">\n          <h1 *ngIf=\"i==0\">{{data[column.column]}}</h1>\n          <h2 *ngIf=\"i>0\"><strong>{{column.label}}</strong> :\n            <ng-container *ngFor=\"let word of ('' + data[column.column]).split(' ')\">\n              <ng-container *ngIf=\"word === '$CD$'\">\n                <img alt=\"CombatDice\" class=\"text-cd\" src=\"/assets/fallout-dice/side6.png\" />&nbsp;\n              </ng-container>\n              <ng-container *ngIf=\"word !== '$CD$'\">{{word + ' '}}</ng-container>\n            </ng-container>\n          </h2>\n        </ng-container>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

    /***/
  })

}]);
//# sourceMappingURL=src_app_generic-data_generic-data_module_ts.js.map
