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
      },
      {
        path: 'generic-data/:type',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_generic-data_generic-data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./generic-data/generic-data.module */ 1218)).then(m => m.GenericDataPageModule)
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
    var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
    /* harmony import */
    var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
    /* harmony import */
    var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
    /* harmony import */
    var _data_generic_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/generic-data */ 4768);


    let AppComponent = class AppComponent {
      constructor(platform) {
        this.platform = platform;
        this.selectedIndex = 0;
        this.appPages = [
          {
            title: 'Accueil',
            url: ['/home'],
            icon: 'home',
            img: null,
          },
          {
            title: 'Dès',
            url: ['/dices'],
            icon: 'dice',
            img: null,
          }
        ];
        for (let data of _data_generic_data__WEBPACK_IMPORTED_MODULE_3__.REGISTERED_DATA) {
          this.appPages.push({
            icon: null,
            img: data.img,
            url: ['/generic-data', data.type],
            title: data.label
          });
        }
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
      {type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform}
    ];
    AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

  /***/ 475:
  /*!************************************!*\
    !*** ./src/app/data/drink-loot.ts ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "DRINK_LOOT_DATA": () => (/* binding */ DRINK_LOOT_DATA),
      /* harmony export */   "DRINK_LOOT_DEF": () => (/* binding */ DRINK_LOOT_DEF)
      /* harmony export */
    });
    const DRINK_LOOT_DEF = [
      {
        column: 'Name',
        label: 'Nom'
      }, {
        column: 'Heal',
        label: 'PV soignés'
      }, {
        column: 'Effect',
        label: 'Effet'
      }, {
        column: 'Radiation',
        label: 'Irradié'
      }, {
        column: 'Weight',
        label: 'Poids'
      }, {
        column: 'Cost',
        label: 'Coût'
      }, {
        column: 'Rarity',
        label: 'Rareté'
      }
    ];
    const DRINK_LOOT_DATA = [
      {
        'Name': 'Bière',
        'Heal': 0,
        'Effect': 'Alcoolisée',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 5,
        'Rarity': 1
      },
      {
        'Name': 'Boisson rafraîchissante',
        'Heal': 11,
        'Effect': 'Guérit 10 points de dégâts de radiation, soigne toutes les dépendances',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 110,
        'Rarity': 5
      },
      {
        'Name': 'Bourbon',
        'Heal': 0,
        'Effect': 'Alcoolisée, vous pouvez relancer 1d20 sur vos tests d’END',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 7,
        'Rarity': 2
      },
      {
        'Name': 'Eau de vie',
        'Heal': 0,
        'Effect': 'Alcoolisée, +2 PV max',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 30,
        'Rarity': 3
      },
      {
        'Name': 'Eau purifiée',
        'Heal': 3,
        'Effect': '–',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 20,
        'Rarity': 1
      },
      {
        'Name': 'Eau sale',
        'Heal': 2,
        'Effect': '–',
        'Radiation': '1 $CD$',
        'Weight': '<0,5',
        'Cost': 5,
        'Rarity': 0
      },
      {
        'Name': 'Gnôle des Terres désolées',
        'Heal': 0,
        'Effect': 'Alcoolisée, réduisez de 1 la difficulté de tous vos tests de FOR et augmentez de 2 (au total) la difficulté de tous vos tests d’INT',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 10,
        'Rarity': 3
      },
      {
        'Name': 'Jus de fruit mutant',
        'Heal': 3,
        'Effect': 'Vous pouvez relancer 1d20 sur tous vos tests d’AGI',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 8,
        'Rarity': 2
      },
      {
        'Name': 'Jus de goudrelle',
        'Heal': 3,
        'Effect': 'Gagnez immédiatement +6 PA',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 5,
        'Rarity': 4
      },
      {
        'Name': 'Jus de melon',
        'Heal': 3,
        'Effect': 'Vous guérissez 1 PV au début de chaque tour',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 6,
        'Rarity': 2
      },
      {
        'Name': 'Jus de pomate',
        'Heal': 3,
        'Effect': 'La réserve de PA du groupe peut contenir 1 PA de plus que la normale',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 7,
        'Rarity': 3
      },
      {
        'Name': 'Lait de brahmine',
        'Heal': 1,
        'Effect': 'Guérit 2 points de dégâts de radiation',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 15,
        'Rarity': 2
      },
      {
        'Name': 'Nuka Cherry',
        'Heal': 3,
        'Effect': 'Gagnez immédiatement +2 PA',
        'Radiation': '1 $CD$',
        'Weight': '0,5',
        'Cost': 40,
        'Rarity': 3
      },
      {
        'Name': 'Nuka Cola',
        'Heal': 2,
        'Effect': 'Gagnez immédiatement +1 PA',
        'Radiation': '1 $CD$',
        'Weight': '0,5',
        'Cost': 20,
        'Rarity': 2
      },
      {
        'Name': 'Nuka Cola Quantum',
        'Heal': 10,
        'Effect': 'Gagnez immédiatement +5 PA',
        'Radiation': '1 $CD$',
        'Weight': '0,5',
        'Cost': 50,
        'Rarity': 5
      },
      {
        'Name': 'Poche de sang',
        'Heal': 3,
        'Effect': '–',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 10,
        'Rarity': 2
      },
      {
        'Name': 'Poche de sang luminescent',
        'Heal': 4,
        'Effect': '+5 résistance aux dégâts de radiation',
        'Radiation': '–',
        'Weight': '<0,5',
        'Cost': 30,
        'Rarity': 3
      },
      {
        'Name': 'Rhum',
        'Heal': 0,
        'Effect': 'Alcoolisée, vous pouvez relancer 1d20 sur vos tests d’AGI',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 8,
        'Rarity': 2
      },
      {
        'Name': 'Sang irradié',
        'Heal': 3,
        'Effect': 'Lancez 2 $CD$ au lieu de 1 pour déterminer les dégâts de radiation quand consommé',
        'Radiation': '1 $CD$',
        'Weight': '<0,5',
        'Cost': 50,
        'Rarity': 2
      },
      {
        'Name': 'Vin',
        'Heal': 0,
        'Effect': 'Alcoolisée, gagnez immédiatement +1 PA',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 5,
        'Rarity': 3
      },
      {
        'Name': 'Vodka',
        'Heal': 2,
        'Effect': 'Alcoolisée',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 5,
        'Rarity': 3
      },
      {
        'Name': 'Whisky',
        'Heal': 0,
        'Effect': 'Alcoolisée, vous pouvez relancer jusqu’à 2d20 (au total) sur vos tests de FOR',
        'Radiation': '–',
        'Weight': '0,5',
        'Cost': 5,
        'Rarity': 3
      }
    ];


    /***/
  }),

  /***/ 4768:
  /*!**************************************!*\
    !*** ./src/app/data/generic-data.ts ***!
    \**************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "REGISTERED_DATA": () => (/* binding */ REGISTERED_DATA)
      /* harmony export */
    });
    /* harmony import */
    var _munition_loot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./munition-loot */ 3224);
    /* harmony import */
    var _syringe_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syringe-type */ 7870);
    /* harmony import */
    var _drink_loot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drink-loot */ 475);


    const REGISTERED_DATA = [
      {
        type: 'ammunitions',
        label: 'Munitions',
        img: 'item_22rounds_gr.ico',
        definition: _munition_loot__WEBPACK_IMPORTED_MODULE_0__.AMMUNITION_LOOT_DEF,
        data: _munition_loot__WEBPACK_IMPORTED_MODULE_0__.AMMUNITION_LOOT_DATA
      },
      {
        type: 'syringes',
        label: 'Seringues',
        img: 'item_stimpack_gr.ico',
        definition: _syringe_type__WEBPACK_IMPORTED_MODULE_1__.SYRINGE_TYPE_DEF,
        data: _syringe_type__WEBPACK_IMPORTED_MODULE_1__.SYRINGE_TYPE_DATA
      },
      {
        type: 'drinks',
        label: 'Boissons',
        img: 'item_drink_gr.ico',
        definition: _drink_loot__WEBPACK_IMPORTED_MODULE_2__.DRINK_LOOT_DEF,
        data: _drink_loot__WEBPACK_IMPORTED_MODULE_2__.DRINK_LOOT_DATA
      }
    ];


    /***/
  }),

  /***/ 3224:
  /*!***************************************!*\
    !*** ./src/app/data/munition-loot.ts ***!
    \***************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "AMMUNITION_LOOT_DATA": () => (/* binding */ AMMUNITION_LOOT_DATA),
      /* harmony export */   "AMMUNITION_LOOT_DEF": () => (/* binding */ AMMUNITION_LOOT_DEF)
      /* harmony export */
    });
    const AMMUNITION_LOOT_DEF = [{
      column: 'Type',
      label: 'Type'
    }, {
      column: 'Quantity',
      label: 'Quantité'
    }, {
      column: 'Weight',
      label: 'Poids'
    }, {
      column: 'Cost',
      label: 'Prix'
    }, {
      column: 'Rarity',
      label: 'Rareté'
    }];
    const AMMUNITION_LOOT_DATA = [
      {
        "Type": "Cartouche .38",
        "Quantity": "10 + 5 $CD$",
        "Weight": "<0,5",
        "Cost": "1",
        "Rarity": 0
      },
      {
        "Type": "Cartouche 10mm",
        "Quantity": "8 + 4 $CD$",
        "Weight": "<0,5",
        "Cost": "2",
        "Rarity": 0
      },
      {
        "Type": "Cartouche .308",
        "Quantity": "6 + 3 $CD$",
        "Weight": "<0,5",
        "Cost": "3",
        "Rarity": 1
      },
      {
        "Type": "Fusée éclairante",
        "Quantity": "2 + 1 $CD$",
        "Weight": "<0,5",
        "Cost": "1",
        "Rarity": 1
      },
      {
        "Type": "Calibre 12",
        "Quantity": "6 + 3 $CD$",
        "Weight": "<0,5",
        "Cost": "3",
        "Rarity": 1
      },
      {
        "Type": "Cartouche.45",
        "Quantity": "8 + 4 $CD$",
        "Weight": "<0,5",
        "Cost": "3",
        "Rarity": 2
      },
      {
        "Type": "Carburant de lance-flammes",
        "Quantity": "12 + 6 $CD$",
        "Weight": "<0,5",
        "Cost": "1",
        "Rarity": 2
      },
      {
        "Type": "Cellule à fusion",
        "Quantity": "14 + 7 $CD$",
        "Weight": "<0,5",
        "Cost": "3",
        "Rarity": 2
      },
      {
        "Type": "Cartouche Gamma",
        "Quantity": "4 + 2 $CD$",
        "Weight": "<0,5",
        "Cost": "10",
        "Rarity": 2
      },
      {
        "Type": "Clou de rail",
        "Quantity": "6 + 3 $CD$",
        "Weight": "<0,5",
        "Cost": "1",
        "Rarity": 2
      },
      {
        "Type": "Seringue",
        "Quantity": "4 + 2 $CD$",
        "Weight": "<0,5",
        "Cost": "Variable",
        "Rarity": 2
      },
      {
        "Type": "Cartouche .44",
        "Quantity": "4 + 2 $CD$",
        "Weight": "<0,5",
        "Cost": "3",
        "Rarity": 3
      },
      {
        "Type": "Calibre .50",
        "Quantity": "4 + 2 $CD$",
        "Weight": "<0,5",
        "Cost": 4,
        "Rarity": 3
      },
      {
        "Type": "Cartouche 5.56mm",
        "Quantity": "8 + 4 $CD$",
        "Weight": "<0,5",
        "Cost": 2,
        "Rarity": 3
      },
      {
        "Type": "Cartouche 5mm",
        "Quantity": "10 X (12 + 6 $CD$ )",
        "Weight": "<0,5",
        "Cost": 1,
        "Rarity": 3
      },
      {
        "Type": "Réacteur à fusion",
        "Quantity": "1 $CD$",
        "Weight": "2",
        "Cost": 200,
        "Rarity": 3
      },
      {
        "Type": "Missile",
        "Quantity": "2 + 1 $CD$",
        "Weight": "3,5",
        "Cost": 25,
        "Rarity": 3
      },
      {
        "Type": "Cartouche au plasma",
        "Quantity": "10 + 5 $CD$",
        "Weight": "<0,5",
        "Cost": 5,
        "Rarity": 4
      },
      {
        "Type": "CE 2mm",
        "Quantity": "6+3 $CD$",
        "Weight": "<0,5",
        "Cost": 10,
        "Rarity": 5
      },
      {
        "Type": "Mini-bombe nucléaire",
        "Quantity": "1 + 1 $CD$",
        "Weight": "6",
        "Cost": 100,
        "Rarity": 6
      }
    ];


    /***/
  }),

  /***/ 7870:
  /*!**************************************!*\
    !*** ./src/app/data/syringe-type.ts ***!
    \**************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "SYRINGE_TYPE_DATA": () => (/* binding */ SYRINGE_TYPE_DATA),
      /* harmony export */   "SYRINGE_TYPE_DEF": () => (/* binding */ SYRINGE_TYPE_DEF)
      /* harmony export */
    });
    const SYRINGE_TYPE_DEF = [
      {
        column: 'Name',
        label: 'Nom'
      }, {
        column: 'Effect',
        label: 'Effet'
      }, {
        column: 'Cost',
        label: 'Prix'
      }
    ];
    const SYRINGE_TYPE_DATA = [
      {
        'Name': 'Artibloc',
        'Effect': 'L’arme gagne l’effet de dégâts Étourdissant.',
        'Cost': 40
      }, {
        'Name': 'Dangerol',
        'Effect': 'Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l’arme, la résistance\n' +
          'aux dégâts balistiques de la cible est réduite de 2 pour le reste de la scène. ',
        'Cost': 60
      }, {
        'Name': 'Embrumaze',
        'Effect': 'Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l’arme, la cible\n' +
          'devient confuse et la difficulté de tous ses tests de PER augmente de +2 pendant\n' +
          'un nombre de rounds égal au nombre d’Effets obtenus.',
        'Cost': 73
      }, {
        'Name': 'Escampoudréine',
        'Effect': 'Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l’arme, la cible doit\n' +
          'utiliser au moins une de ses actions à chaque tour pour s’éloigner de tous les\n' +
          'ennemis par la route la plus directe. Cet effet dure pendant un nombre de rounds\n' +
          'égal au nombre d’Effets obtenus.',
        'Cost': 55
      }, {
        'Name': 'Folie furieuse',
        'Effect': 'Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l’arme, la cible\n' +
          'entre dans une frénésie de folie furieuse et attaque la créature vivante la plus\n' +
          'proche (amie ou ennemie) pendant le reste de la scène.',
        'Cost': 50
      },
      {
        'Name': 'Hémorragie',
        'Effect': 'L’arme gagne l’effet de dégâts Persistant.',
        'Cost': 17
      },
      {
        'Name': 'Larve de mouche bouffie',
        'Effect': 'Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l’arme, à la mort de\n' +
          'la cible, une mouche bouffie émerge de son cadavre.',
        'Cost': 10
      },
      {
        'Name': 'Pax',
        'Effect': 'Si vous obtenez un ou plusieurs Effets sur le jet de dégâts de l’arme, la cible ne\n' +
          'peut pas effectuer d’action hostile ou agressive pendant un nombre de rounds\n' +
          'égal au nombre d’Effets obtenus.',
        'Cost': 39
      },
      {
        'Name': 'Venin de Radscorpion',
        'Effect': 'L’arme ajoute +1 $CD$ à ses dégâts et gagne l’effet de dégâts Persistant (Poison).',
        'Cost': 65
      }
    ];


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
    module.exports = "ion-menu ion-content {\n  --background: var(--dv-background-accent);\n}\nion-menu ion-content ion-list {\n  background: var(--dv-background-accent) !important;\n}\nion-menu ion-header {\n  padding: 10px;\n  background-color: var(--dv-background-accent-dark);\n}\nion-menu ion-header img {\n  width: 50px;\n}\nion-menu ion-header p {\n  padding-top: 10px;\n  line-height: 24px;\n}\n.img-icon {\n  height: 24px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHlDQUFBO0FBREo7QUFLSTtFQUNFLGtEQUFBO0FBSE47QUFPRTtFQUNFLGFBQUE7RUFDQSxrREFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0FBTE47QUFRSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFOTjtBQVVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFQRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZHYtYmFja2dyb3VuZC1hY2NlbnQpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kdi1iYWNrZ3JvdW5kLWFjY2VudCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWR2LWJhY2tncm91bmQtYWNjZW50LWRhcmspO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pbWctaWNvbiB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbiJdfQ== */";

    /***/
  }),

  /***/ 3383:
  /*!***********************************************!*\
    !*** ./src/app/app.component.html?ngResource ***!
    \***********************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-header>\r\n          <ion-item class=\"transparent ion-text-center\" lines=\"none\">\r\n            <ion-label class=\"ion-text-left ion-padding-top\">\r\n              <h1 class=\"text-size-xl text-color-light ion-text-wrap\">Fallout JDR </h1>\r\n              <p class=\" text-color-light text-size-md ion-text-wrap\">\r\n                Outils et aides\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-header>\r\n\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item lines=\"none\" class=\"transparent\" (click)=\"selectedIndex = i\" routerDirection=\"root\"\r\n                      [routerLink]=\"p.url\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\r\n              <ion-label>\r\n                <p class=\"text-size-md font-regular text-color-light\">{{ p.title }}</p>\r\n              </ion-label>\r\n              <ion-icon *ngIf=\"p.icon\" slot=\"end\" class=\"icon-color-light\" [name]=\"p.icon\"></ion-icon>\r\n              <img [src]=\"'assets/icon/' + p.img\" *ngIf=\"!p.icon\" class=\"img-icon\" slot=\"end\" />\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

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
