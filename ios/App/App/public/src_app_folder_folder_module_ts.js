"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_folder_folder_module_ts"], {

  /***/ 9771:
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "FolderPageRoutingModule": () => (/* binding */ FolderPageRoutingModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
    /* harmony import */
    var _home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component */ 8367);


    const routes = [
      {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }
    ];
    let FolderPageRoutingModule = class FolderPageRoutingModule {
    };
    FolderPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
      })
    ], FolderPageRoutingModule);


    /***/
  }),

  /***/ 3412:
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
    /* harmony import */
    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder-routing.module */ 9771);
    /* harmony import */
    var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ 8367);


    let HomePageModule = class HomePageModule {
    };
    HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
          _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
          _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
          _folder_routing_module__WEBPACK_IMPORTED_MODULE_0__.FolderPageRoutingModule
        ],
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePage]
      })
    ], HomePageModule);


    /***/
  }),

  /***/ 8367:
  /*!***********************************************!*\
    !*** ./src/app/folder/home-page.component.ts ***!
    \***********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "HomePage": () => (/* binding */ HomePage)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component.html?ngResource */ 9562);
    /* harmony import */
    var _home_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component.scss?ngResource */ 5694);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);


    let HomePage = class HomePage {
      constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
      }

      ngOnInit() {
      }
    };
    HomePage.ctorParameters = () => [
      {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute}
    ];
    HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], HomePage);


    /***/
  }),

  /***/ 5694:
  /*!************************************************************!*\
    !*** ./src/app/folder/home-page.component.scss?ngResource ***!
    \************************************************************/
  /***/ ((module) => {

    module.exports = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzhjOGM4YztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */";

    /***/
  }),

  /***/ 9562:
  /*!************************************************************!*\
    !*** ./src/app/folder/home-page.component.html?ngResource ***!
    \************************************************************/
  /***/ ((module) => {

    module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Fallout JDR</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"container\">\r\n    <strong class=\"capitalize ion-padding\">Bienvenue sur l'utilitaire Fallout JDR</strong>\r\n    <p class=\"ion-padding\">\r\n      Utilisez le menu de gauche pour accéder aux fonctionnalités\r\n      <img src=\"/assets/imgs/fallout-the-series_k1pz.jpg\" alt=\"fallout-logo\"/>\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

    /***/
  })

}]);
//# sourceMappingURL=src_app_folder_folder_module_ts.js.map
