(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"], {

  /***/ 158:
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);


    const routes = [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.HomePageModule)
      },
      {
        path: 'dices',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dices_dices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dices/dices.module */ 7365)).then(m => m.DicesPageModule)
      }
    ];
    let AppRoutingModule = class AppRoutingModule {
    };
    AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
          _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules})
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })
    ], AppRoutingModule);


    /***/
  }),

  /***/ 5041:
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
    /* harmony import */
    var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
    /* harmony import */
    var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);


    let AppComponent = class AppComponent {
      constructor(platform) {
        this.platform = platform;
        this.selectedIndex = 0;
        this.appPages = [
          {
            title: 'Accueil',
            url: '/folder/Inbox',
            icon: 'home'
          },
          {
            title: 'Dès',
            url: '/dices',
            icon: 'dice'
          }
        ];
        this.initializeApp();
      }

      initializeApp() {
        this.platform.ready().then(() => {
          _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
        });
      }

      ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
          this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
      }
    };
    AppComponent.ctorParameters = () => [
      {type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform}
    ];
    AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], AppComponent);


    /***/
  }),

  /***/ 6747:
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "AppModule": () => (/* binding */ AppModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);


    let AppModule = class AppModule {
    };
    AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
          _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
          _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
          _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot()
        ],
        providers: [
          {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy,
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy
          }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA]
      })
    ], AppModule);


    /***/
  }),

  /***/ 2340:
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "environment": () => (/* binding */ environment)
      /* harmony export */
    });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


    /***/
  }),

  /***/ 4431:
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
    }
    (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
      .catch(err => console.log(err));


    /***/
  }),

  /***/ 863:
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \******************************************************************************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

    var map = {
      "./ion-accordion_2.entry.js": [
        79,
        "common",
        "node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
      ],
      "./ion-action-sheet.entry.js": [
        5593,
        "common",
        "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
      ],
      "./ion-alert.entry.js": [
        3225,
        "common",
        "node_modules_ionic_core_dist_esm_ion-alert_entry_js"
      ],
      "./ion-app_8.entry.js": [
        4812,
        "common",
        "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
      ],
      "./ion-avatar_3.entry.js": [
        6655,
        "common",
        "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
      ],
      "./ion-back-button.entry.js": [
        4856,
        "common",
        "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
      ],
      "./ion-backdrop.entry.js": [
        3059,
        "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
      ],
      "./ion-breadcrumb_2.entry.js": [
        8648,
        "common",
        "node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
      ],
      "./ion-button_2.entry.js": [
        8308,
        "common",
        "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
      ],
      "./ion-card_5.entry.js": [
        4690,
        "common",
        "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
      ],
      "./ion-checkbox.entry.js": [
        4090,
        "common",
        "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
      ],
      "./ion-chip.entry.js": [
        6214,
        "common",
        "node_modules_ionic_core_dist_esm_ion-chip_entry_js"
      ],
      "./ion-col_3.entry.js": [
        9447,
        "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
      ],
      "./ion-datetime_3.entry.js": [
        9689,
        "common",
        "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
      ],
      "./ion-fab_3.entry.js": [
        8840,
        "common",
        "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
      ],
      "./ion-img.entry.js": [
        749,
        "node_modules_ionic_core_dist_esm_ion-img_entry_js"
      ],
      "./ion-infinite-scroll_2.entry.js": [
        9667,
        "common",
        "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
      ],
      "./ion-input.entry.js": [
        3288,
        "common",
        "node_modules_ionic_core_dist_esm_ion-input_entry_js"
      ],
      "./ion-item-option_3.entry.js": [
        5473,
        "common",
        "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
      ],
      "./ion-item_8.entry.js": [
        3634,
        "common",
        "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
      ],
      "./ion-loading.entry.js": [
        2855,
        "common",
        "node_modules_ionic_core_dist_esm_ion-loading_entry_js"
      ],
      "./ion-menu_3.entry.js": [
        495,
        "common",
        "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
      ],
      "./ion-modal.entry.js": [
        8737,
        "common",
        "node_modules_ionic_core_dist_esm_ion-modal_entry_js"
      ],
      "./ion-nav_2.entry.js": [
        9632,
        "common",
        "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
      ],
      "./ion-picker-column-internal.entry.js": [
        4446,
        "common",
        "node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
      ],
      "./ion-picker-internal.entry.js": [
        2275,
        "node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
      ],
      "./ion-popover.entry.js": [
        8050,
        "common",
        "node_modules_ionic_core_dist_esm_ion-popover_entry_js"
      ],
      "./ion-progress-bar.entry.js": [
        8994,
        "common",
        "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
      ],
      "./ion-radio_2.entry.js": [
        3592,
        "common",
        "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
      ],
      "./ion-range.entry.js": [
        5454,
        "common",
        "node_modules_ionic_core_dist_esm_ion-range_entry_js"
      ],
      "./ion-refresher_2.entry.js": [
        290,
        "common",
        "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
      ],
      "./ion-reorder_2.entry.js": [
        2666,
        "common",
        "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
      ],
      "./ion-ripple-effect.entry.js": [
        4816,
        "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
      ],
      "./ion-route_4.entry.js": [
        5534,
        "common",
        "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
      ],
      "./ion-searchbar.entry.js": [
        4902,
        "common",
        "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
      ],
      "./ion-segment_2.entry.js": [
        1938,
        "common",
        "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
      ],
      "./ion-select_3.entry.js": [
        8179,
        "common",
        "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
      ],
      "./ion-slide_2.entry.js": [
        668,
        "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
      ],
      "./ion-spinner.entry.js": [
        1624,
        "common",
        "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
      ],
      "./ion-split-pane.entry.js": [
        9989,
        "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
      ],
      "./ion-tab-bar_2.entry.js": [
        8902,
        "common",
        "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
      ],
      "./ion-tab_2.entry.js": [
        199,
        "common",
        "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
      ],
      "./ion-text.entry.js": [
        8395,
        "common",
        "node_modules_ionic_core_dist_esm_ion-text_entry_js"
      ],
      "./ion-textarea.entry.js": [
        6357,
        "common",
        "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
      ],
      "./ion-toast.entry.js": [
        8268,
        "common",
        "node_modules_ionic_core_dist_esm_ion-toast_entry_js"
      ],
      "./ion-toggle.entry.js": [
        5269,
        "common",
        "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
      ],
      "./ion-virtual-scroll.entry.js": [
        2875,
        "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
      ]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(() => {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req], id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = () => (Object.keys(map));
    webpackAsyncContext.id = 863;
    module.exports = webpackAsyncContext;

    /***/
  }),

  /***/ 9259:
  /*!***********************************************!*\
    !*** ./src/app/app.component.scss?ngResource ***!
    \***********************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "ion-menu ion-content {\n  --background: var(--dv-background-accent);\n}\nion-menu ion-content ion-list {\n  background: var(--dv-background-accent) !important;\n}\nion-menu ion-header {\n  padding: 10px;\n  background-color: var(--dv-background-accent-dark);\n}\nion-menu ion-header img {\n  width: 50px;\n}\nion-menu ion-header p {\n  padding-top: 10px;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHlDQUFBO0FBREo7QUFLSTtFQUNFLGtEQUFBO0FBSE47QUFPRTtFQUNFLGFBQUE7RUFDQSxrREFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0FBTE47QUFRSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFOTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZHYtYmFja2dyb3VuZC1hY2NlbnQpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kdi1iYWNrZ3JvdW5kLWFjY2VudCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWR2LWJhY2tncm91bmQtYWNjZW50LWRhcmspO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

    /***/
  }),

  /***/ 3383:
  /*!***********************************************!*\
    !*** ./src/app/app.component.html?ngResource ***!
    \***********************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-header>\r\n          <ion-item class=\"transparent ion-text-center\" lines=\"none\">\r\n            <ion-label class=\"ion-text-left ion-padding-top\">\r\n              <h1 class=\"text-size-xl text-color-light ion-text-wrap\">Fallout JDR </h1>\r\n              <p class=\" text-color-light text-size-md ion-text-wrap\">\r\n                Outils et aides\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-header>\r\n\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item lines=\"none\" class=\"transparent\" (click)=\"selectedIndex = i\" routerDirection=\"root\"\r\n                      [routerLink]=\"[p.url]\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\r\n              <ion-label>\r\n                <p class=\"text-size-md font-regular text-color-light\">{{ p.title }}</p>\r\n              </ion-label>\r\n              <ion-icon slot=\"end\" class=\"icon-color-light\" [name]=\"p.icon\"></ion-icon>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

    /***/
  })

},
  /******/ __webpack_require__ => { // webpackRuntimeModules
    /******/
    var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
    /******/
    __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
    /******/
    var __webpack_exports__ = __webpack_require__.O();
    /******/
  }
]);
//# sourceMappingURL=main.js.map
