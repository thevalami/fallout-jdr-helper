(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dices_dices_module_ts"], {

  /***/ 5769:
  /*!********************************************!*\
  !*** ./src/app/data/target-type-damage.ts ***!
  \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "TARGET_TYPE_DATA": () => (/* binding */ TARGET_TYPE_DATA)
      /* harmony export */
    });
    const TARGET_TYPE_DATA = {
      'HUMAN': {
        '1-2': 'Tête',
        '3-8': 'Torse',
        '9-11': 'Bras gauche',
        '12-14': 'Bras droit',
        '15-17': 'Jambe gauche',
        '18-20': 'Jambe droite'
      },
      'QUADRUPEDE': {
        '1-2': 'Tête',
        '3-8': 'Torse',
        '9-11': 'Patte avant gauche',
        '12-14': 'Patte avant droit',
        '15-17': 'Patte arrière gauche',
        '18-20': 'Patte arrière droite'
      },
      'FLYINGINSECT': {
        "1-2": 'Tête',
        "3-8": 'Torse',
        '9-11': 'Aîle gauche',
        '12-14': 'Aîle droite',
        '15-20': 'Pattes',
      },
      'ROBOT': {
        "1-2": 'Optique',
        "3-8": 'Corps',
        '9-11': 'Bras 1',
        '12-14': 'Bras 2',
        '15-17': 'Bras 3',
        '18-20': 'Bras 4',
      }
    };


    /***/
  }),

  /***/ 7206:
  /*!******************************************************************!*\
  !*** ./src/app/pages/dices/combat-dice/combat-dice.component.ts ***!
  \******************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "CombatDiceComponent": () => (/* binding */ CombatDiceComponent)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _combat_dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combat-dice.component.html?ngResource */ 2977);
    /* harmony import */
    var _combat_dice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat-dice.component.scss?ngResource */ 51);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var dice_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dice-typescript */ 4238);
    /* harmony import */
    var dice_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dice_typescript__WEBPACK_IMPORTED_MODULE_2__);


    let CombatDiceComponent = class CombatDiceComponent {
      constructor() {
        this.combatDiceCount = 1;
        this.combatDiceChildren = [];
      }

      ngOnInit() {
      }

      rollCombat() {
        const dice = new dice_typescript__WEBPACK_IMPORTED_MODULE_2__.Dice();
        const combatDiceResults = dice.roll(String(this.combatDiceCount) + 'd6');
        this.combatDiceChildren = [];
        combatDiceResults.reducedExpression.forEachChild(child => {
          this.combatDiceChildren.push(child);
        });
      }
    };
    CombatDiceComponent.ctorParameters = () => [];
    CombatDiceComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-combat-dice',
        template: _combat_dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_combat_dice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], CombatDiceComponent);


    /***/
  }),

  /***/ 3464:
  /*!************************************************************!*\
  !*** ./src/app/pages/dices/d20-dice/d20-dice.component.ts ***!
  \************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "D20DiceComponent": () => (/* binding */ D20DiceComponent)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _d20_dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d20-dice.component.html?ngResource */ 8551);
    /* harmony import */
    var _d20_dice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d20-dice.component.scss?ngResource */ 6853);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var dice_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dice-typescript */ 4238);
    /* harmony import */
    var dice_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dice_typescript__WEBPACK_IMPORTED_MODULE_2__);


    let D20DiceComponent = class D20DiceComponent {
      constructor() {
        this.d20DiceCount = 2;
        this.d20DiceChildren = [];
      }

      ngOnInit() {
      }

      rollD20() {
        const dice = new dice_typescript__WEBPACK_IMPORTED_MODULE_2__.Dice();
        this.d20DiceResult = dice.roll(String(this.d20DiceCount) + 'd20');
        this.d20DiceChildren = [];
        this.d20DiceResult.reducedExpression.forEachChild(child => {
          this.d20DiceChildren.push(child);
        });
      }
    };
    D20DiceComponent.ctorParameters = () => [];
    D20DiceComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-d20-dice',
        template: _d20_dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_d20_dice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], D20DiceComponent);


    /***/
  }),

  /***/ 7365:
  /*!*********************************************!*\
  !*** ./src/app/pages/dices/dices.module.ts ***!
  \*********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "DicesPageModule": () => (/* binding */ DicesPageModule)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
    /* harmony import */
    var _dices_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dices.pages */ 9878);
    /* harmony import */
    var _combat_dice_combat_dice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat-dice/combat-dice.component */ 7206);
    /* harmony import */
    var _d20_dice_d20_dice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./d20-dice/d20-dice.component */ 3464);
    /* harmony import */
    var _pipes_dice_details_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/dice-details.pipe */ 4887);
    /* harmony import */
    var _target_dice_target_dice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target-dice/target-dice.component */ 2511);


    let DicesPageModule = class DicesPageModule {
    };
    DicesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
          _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
          _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
          _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
            {
              path: '',
              component: _dices_pages__WEBPACK_IMPORTED_MODULE_0__.DicesPages
            }
          ])
        ],
        declarations: [_dices_pages__WEBPACK_IMPORTED_MODULE_0__.DicesPages, _combat_dice_combat_dice_component__WEBPACK_IMPORTED_MODULE_1__.CombatDiceComponent, _d20_dice_d20_dice_component__WEBPACK_IMPORTED_MODULE_2__.D20DiceComponent, _pipes_dice_details_pipe__WEBPACK_IMPORTED_MODULE_3__.DiceDetailsPipe, _target_dice_target_dice_component__WEBPACK_IMPORTED_MODULE_4__.TargetDiceComponent],
        exports: [_dices_pages__WEBPACK_IMPORTED_MODULE_0__.DicesPages],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA],
      })
    ], DicesPageModule);


    /***/
  }),

  /***/ 9878:
  /*!********************************************!*\
  !*** ./src/app/pages/dices/dices.pages.ts ***!
  \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "DicesPages": () => (/* binding */ DicesPages)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _dices_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dices.page.html?ngResource */ 4302);
    /* harmony import */
    var _dices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dices.page.scss?ngResource */ 4708);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);


    let DicesPages = class DicesPages {
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.sections = [
          {
            label: "Dès de combats",
            opened: true,
            type: 'COMBATDICE'
          },
          {
            'label': "D20",
            'opened': false,
            type: 'D20DICE'
          },
          {
            'label': "Localisation dégâts",
            'opened': false,
            type: 'TARGETDICE'
          }
        ];
      }

      toggleGroup(section) {
        section.opened = !section.opened;
      }
    };
    DicesPages.ctorParameters = () => [
      {type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController}
    ];
    DicesPages = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        template: _dices_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], DicesPages);


    /***/
  }),

  /***/ 2511:
  /*!******************************************************************!*\
  !*** ./src/app/pages/dices/target-dice/target-dice.component.ts ***!
  \******************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "TargetDiceComponent": () => (/* binding */ TargetDiceComponent)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _target_dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target-dice.component.html?ngResource */ 7468);
    /* harmony import */
    var _target_dice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-dice.component.scss?ngResource */ 7760);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
    /* harmony import */
    var dice_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dice-typescript */ 4238);
    /* harmony import */
    var dice_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dice_typescript__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _data_target_type_damage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/target-type-damage */ 5769);


    let TargetDiceComponent = class TargetDiceComponent {
      constructor() {
        this.ennemyType = "HUMAN";
        this.target = '';
      }

      ngOnInit() {
      }

      rollTarget() {
        const dice = new dice_typescript__WEBPACK_IMPORTED_MODULE_2__.Dice();
        this.targetDiceResult = dice.roll('1d20');
        const targetDataType = _data_target_type_damage__WEBPACK_IMPORTED_MODULE_3__.TARGET_TYPE_DATA[this.ennemyType];
        for (let key of Object.keys(targetDataType)) {
          const min = Number(key.split('-')[0]);
          const max = Number(key.split('-')[1]);
          if (this.targetDiceResult.total >= min && this.targetDiceResult.total <= max) {
            this.target = targetDataType[key];
            break;
          }
        }
      }

      segmentChanged($event) {
        this.ennemyType = $event.detail.value;
        this.targetDiceResult = null;
      }
    };
    TargetDiceComponent.ctorParameters = () => [];
    TargetDiceComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-target-dice',
        template: _target_dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_target_dice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
      })
    ], TargetDiceComponent);


    /***/
  }),

  /***/ 4887:
  /*!********************************************!*\
  !*** ./src/app/pipes/dice-details.pipe.ts ***!
  \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */
    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */   "DiceDetailsPipe": () => (/* binding */ DiceDetailsPipe)
      /* harmony export */
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


    let DiceDetailsPipe = class DiceDetailsPipe {
      transform(diceChildren) {
        let output = '';
        for (let i = 0; i < diceChildren.length; i++) {
          output += diceChildren[i].getAttribute('value');
          if (i < diceChildren.length - 1) {
            output += ' + ';
          }
        }
        return output;
      }
    };
    DiceDetailsPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
      (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'diceDetails'
      })
    ], DiceDetailsPipe);


    /***/
  }),

  /***/ 6905:
  /*!************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/ast/expression-node.class.js ***!
  \************************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var factory_class_1 = __webpack_require__(/*! ./factory.class */ 4863);

    var node_attributes_class_1 = __webpack_require__(/*! ./node-attributes.class */ 5673);

    var ExpressionNode =
      /** @class */
      function () {
        function ExpressionNode(type, parent) {
          if (parent === void 0) {
            parent = null;
          }

          this.type = type;
          this.parent = parent;
        }

        ExpressionNode.prototype.copy = function () {
          var _this = this;

          var copy = factory_class_1.Factory.create(this.type);

          if (this.attributes) {
            Object.keys(this.attributes).forEach(function (attr) {
              copy.setAttribute(attr, _this.attributes[attr]);
            });
          }

          if (this.children) {
            this.children.forEach(function (child) {
              copy.addChild(child.copy());
            });
          }

          return copy;
        };

        ExpressionNode.prototype.addChild = function (node) {
          return this.insertChild(node);
        };

        ExpressionNode.prototype.insertChild = function (node, index) {
          if (node) {
            if (node === this) {
              throw new Error('Cannot add a node as a child of itself.');
            }

            if (!this.children) {
              this.children = [];
            }

            this.children.splice(index || this.children.length, 0, node);
            node.parent = this;
          }

          return node;
        };

        ExpressionNode.prototype.clearChildren = function () {
          this.children = undefined;
        };

        ExpressionNode.prototype.removeChild = function (expression) {
          if (expression.parent !== this) {
            return null;
          }

          this.children.splice(this.children.indexOf(expression, 1));
          return expression;
        };

        ExpressionNode.prototype.getParent = function () {
          return this.parent;
        };

        ExpressionNode.prototype.getChild = function (index) {
          if (!this.children || this.children.length <= index) {
            throw new Error("Child node at index " + index + " does not exist.");
          }

          return this.children[index];
        };

        ExpressionNode.prototype.getChildCount = function () {
          return this.children ? this.children.length : 0;
        };

        ExpressionNode.prototype.forEachChild = function (fn) {
          var children = (this.children || []).slice();
          children.forEach(fn);
        };

        ExpressionNode.prototype.getAttribute = function (key) {
          return this.attributes ? this.attributes[key] : undefined;
        };

        ExpressionNode.prototype.setAttribute = function (key, value) {
          if (!this.attributes) {
            this.attributes = new node_attributes_class_1.NodeAttributes();
          }

          this.attributes[key] = value;
          return this;
        };

        ExpressionNode.prototype.toJSON = function () {
          var _this = this;

          var keys = Object.keys(this).filter(function (k) {
            return k !== 'parent';
          });
          var obj = {};
          keys.forEach(function (k) {
            return obj[k] = _this[k];
          });
          return obj;
        };

        return ExpressionNode;
      }();

    exports.ExpressionNode = ExpressionNode;

    /***/
  }),

  /***/ 4863:
  /*!****************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/ast/factory.class.js ***!
  \****************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var expression_node_class_1 = __webpack_require__(/*! ./expression-node.class */ 6905);

    var Factory =
      /** @class */
      function () {
        function Factory() {
        }

        Factory.create = function (type) {
          return new expression_node_class_1.ExpressionNode(type);
        };

        return Factory;
      }();

    exports.Factory = Factory;

    /***/
  }),

  /***/ 7277:
  /*!********************************************************!*\
  !*** ./node_modules/dice-typescript/dist/ast/index.js ***!
  \********************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./expression-node.class */ 6905));

    __export(__webpack_require__(/*! ./factory.class */ 4863));

    __export(__webpack_require__(/*! ./node-attributes.class */ 5673));

    __export(__webpack_require__(/*! ./node-type.enum */ 6879));

    /***/
  }),

  /***/ 5673:
  /*!************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/ast/node-attributes.class.js ***!
  \************************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var NodeAttributes =
      /** @class */
      function () {
        function NodeAttributes() {
        }

        return NodeAttributes;
      }();

    exports.NodeAttributes = NodeAttributes;

    /***/
  }),

  /***/ 6879:
  /*!*****************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/ast/node-type.enum.js ***!
  \*****************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));
    var NodeType;

    (function (NodeType) {
      NodeType[NodeType["Function"] = 'Function'] = "Function";
      NodeType[NodeType["Group"] = 'Group'] = "Group";
      NodeType[NodeType["Repeat"] = 'Repeat'] = "Repeat";
      NodeType[NodeType["Add"] = 'Add'] = "Add";
      NodeType[NodeType["Subtract"] = 'Subtract'] = "Subtract";
      NodeType[NodeType["Negate"] = 'Negate'] = "Negate";
      NodeType[NodeType["Exponent"] = 'Exponent'] = "Exponent";
      NodeType[NodeType["Multiply"] = 'Multiply'] = "Multiply";
      NodeType[NodeType["Divide"] = 'Divide'] = "Divide";
      NodeType[NodeType["Modulo"] = 'Modulo'] = "Modulo";
      NodeType[NodeType["Equal"] = 'Equal'] = "Equal";
      NodeType[NodeType["Greater"] = 'Greater'] = "Greater";
      NodeType[NodeType["GreaterOrEqual"] = 'GreaterOrEqual'] = "GreaterOrEqual";
      NodeType[NodeType["Less"] = 'Less'] = "Less";
      NodeType[NodeType["LessOrEqual"] = 'LessOrEqual'] = "LessOrEqual";
      NodeType[NodeType["Explode"] = 'Explode'] = "Explode";
      NodeType[NodeType["Keep"] = 'Keep'] = "Keep";
      NodeType[NodeType["Drop"] = 'Drop'] = "Drop";
      NodeType[NodeType["Critical"] = 'Critical'] = "Critical";
      NodeType[NodeType["Reroll"] = 'Reroll'] = "Reroll";
      NodeType[NodeType["Sort"] = 'Sort'] = "Sort";
      NodeType[NodeType["Dice"] = 'Dice'] = "Dice";
      NodeType[NodeType["DiceSides"] = 'DiceSides'] = "DiceSides";
      NodeType[NodeType["DiceRoll"] = 'DiceRoll'] = "DiceRoll";
      NodeType[NodeType["Number"] = 'Number'] = "Number";
    })(NodeType = exports.NodeType || (exports.NodeType = {}));

    /***/
  }),

  /***/ 4999:
  /*!*********************************************************!*\
  !*** ./node_modules/dice-typescript/dist/dice.class.js ***!
  \*********************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var generator_1 = __webpack_require__(/*! ./generator */ 1618);

    var dice_interpreter_class_1 = __webpack_require__(/*! ./interpreter/dice-interpreter.class */ 3106);

    var dice_lexer_class_1 = __webpack_require__(/*! ./lexer/dice-lexer.class */ 5691);

    var dice_parser_class_1 = __webpack_require__(/*! ./parser/dice-parser.class */ 9051);

    var Dice =
      /** @class */
      function () {
        function Dice(functions, randomProvider, options) {
          this.functions = functions;
          this.randomProvider = randomProvider;
          this.options = options;
        }

        Dice.prototype.roll = function (input) {
          var lexer = this.createLexer(input);
          var parser = this.createParser(lexer);
          var interpreter = this.createInterpreter();
          var parseResult = parser.parse();
          return interpreter.interpret(parseResult.root);
        };

        Dice.prototype.createLexer = function (input) {
          return new dice_lexer_class_1.DiceLexer(input);
        };

        Dice.prototype.createParser = function (lexer) {
          return new dice_parser_class_1.DiceParser(lexer);
        };

        Dice.prototype.createInterpreter = function () {
          return new dice_interpreter_class_1.DiceInterpreter(this.functions, this.randomProvider, this.createGenerator(), this.options);
        };

        Dice.prototype.createGenerator = function () {
          return new generator_1.DiceGenerator();
        };

        return Dice;
      }();

    exports.Dice = Dice;

    /***/
  }),

  /***/ 2614:
  /*!*****************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/generator/dice-generator.class.js ***!
  \*****************************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var Ast = __webpack_require__(/*! ../ast */ 7277);

    var DiceGenerator =
      /** @class */
      function () {
        function DiceGenerator() {
        }

        DiceGenerator.prototype.generate = function (expression) {
          switch (expression.type) {
            case Ast.NodeType.Number:
              return this.generateNumber(expression);

            case Ast.NodeType.Add:
              return this.generateAdd(expression);

            case Ast.NodeType.Subtract:
              return this.generateSubtract(expression);

            case Ast.NodeType.Multiply:
              return this.generateMultiply(expression);

            case Ast.NodeType.Divide:
              return this.generateDivide(expression);

            case Ast.NodeType.Modulo:
              return this.generateModulo(expression);

            case Ast.NodeType.Exponent:
              return this.generateExponent(expression);

            case Ast.NodeType.Negate:
              return this.generateNegate(expression);

            case Ast.NodeType.Dice:
              return this.generateDice(expression);

            case Ast.NodeType.DiceSides:
              return this.generateDiceSides(expression);

            case Ast.NodeType.DiceRoll:
              return this.generateDiceRoll(expression);

            case Ast.NodeType.Function:
              return this.generateFunction(expression);

            case Ast.NodeType.Group:
              return this.generateGroup(expression);

            case Ast.NodeType.Repeat:
              return this.generateRepeat(expression);

            case Ast.NodeType.Equal:
              return this.generateEqual(expression);

            case Ast.NodeType.Greater:
              return this.generateGreater(expression);

            case Ast.NodeType.GreaterOrEqual:
              return this.generateGreaterOrEqual(expression);

            case Ast.NodeType.Less:
              return this.generateLess(expression);

            case Ast.NodeType.LessOrEqual:
              return this.generateLessOrEqual(expression);

            case Ast.NodeType.Explode:
              return this.generateExplode(expression);

            case Ast.NodeType.Keep:
              return this.generateKeep(expression);

            case Ast.NodeType.Drop:
              return this.generateDrop(expression);

            case Ast.NodeType.Critical:
              return this.generateCritical(expression);

            case Ast.NodeType.Reroll:
              return this.generateReroll(expression);

            case Ast.NodeType.Sort:
              return this.generateSort(expression);

            default:
              throw new Error('Unrecognized node type.');
          }
        };

        DiceGenerator.prototype.generateNumber = function (expression) {
          return expression.getAttribute('value').toString();
        };

        DiceGenerator.prototype.generateAdd = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + ' + ' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateSubtract = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + ' - ' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateMultiply = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + ' * ' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateDivide = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + ' / ' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateModulo = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + ' % ' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateExponent = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + ' ^ ' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateNegate = function (expression) {
          this.expectChildCount(expression, 1);
          return '-' + this.generate(expression.getChild(0));
        };

        DiceGenerator.prototype.generateDice = function (expression) {
          if (expression.getChildCount() === 0 || expression.getChild(0).type === Ast.NodeType.DiceRoll) {
            return '[' + this.generateCommaList(expression) + ']';
          } else {
            this.expectChildCount(expression, 2);
            return this.generateWithParens(expression.getChild(0)) + 'd' + this.generateWithParens(expression.getChild(1));
          }
        };

        DiceGenerator.prototype.generateDiceSides = function (expression) {
          var val = expression.getAttribute('value').toString();
          return val === 'fate' ? 'F' : val;
        };

        DiceGenerator.prototype.generateDiceRoll = function (expression) {
          return expression.getAttribute('value').toString();
        };

        DiceGenerator.prototype.generateFunction = function (expression) {
          return expression.getAttribute('name') + '(' + this.generateCommaList(expression) + ')';
        };

        DiceGenerator.prototype.generateGroup = function (expression) {
          return '{' + this.generateCommaList(expression) + '}';
        };

        DiceGenerator.prototype.generateRepeat = function (expression) {
          this.expectChildCount(expression, 2);
          return this.generate(expression.getChild(0)) + '...' + this.generate(expression.getChild(1));
        };

        DiceGenerator.prototype.generateEqual = function (expression) {
          return this.generateEqualityExpression(expression, '=');
        };

        DiceGenerator.prototype.generateGreater = function (expression) {
          return this.generateEqualityExpression(expression, '>');
        };

        DiceGenerator.prototype.generateGreaterOrEqual = function (expression) {
          return this.generateEqualityExpression(expression, '>=');
        };

        DiceGenerator.prototype.generateLess = function (expression) {
          return this.generateEqualityExpression(expression, '<');
        };

        DiceGenerator.prototype.generateLessOrEqual = function (expression) {
          return this.generateEqualityExpression(expression, '<=');
        };

        DiceGenerator.prototype.generateExplode = function (expression) {
          this.expectChildCount(expression, 1);
          var exp = '!';

          if (expression.getAttribute('compound')) {
            exp += '!';
          }

          if (expression.getAttribute('penetrate')) {
            exp += 'p';
          }

          if (expression.getChildCount() > 1) {
            exp += this.generate(expression.getChild(1));
          }

          return this.generate(expression.getChild(0)) + exp;
        };

        DiceGenerator.prototype.generateKeep = function (expression) {
          this.expectChildCount(expression, 1);
          var exp = 'k';

          if (expression.getAttribute('type') === 'highest') {
            exp += 'h';
          }

          if (expression.getAttribute('type') === 'lowest') {
            exp += 'l';
          }

          if (expression.getChildCount() > 1) {
            exp += this.generate(expression.getChild(1));
          }

          return this.generate(expression.getChild(0)) + exp;
        };

        DiceGenerator.prototype.generateDrop = function (expression) {
          this.expectChildCount(expression, 1);
          var exp = 'd';

          if (expression.getAttribute('type') === 'highest') {
            exp += 'h';
          }

          if (expression.getAttribute('type') === 'lowest') {
            exp += 'l';
          }

          if (expression.getChildCount() > 1) {
            exp += this.generate(expression.getChild(1));
          }

          return this.generate(expression.getChild(0)) + exp;
        };

        DiceGenerator.prototype.generateCritical = function (expression) {
          this.expectChildCount(expression, 1);
          var critical = 'c';

          if (expression.getAttribute('type') === 'success') {
            critical += 's';
          }

          if (expression.getAttribute('type') === 'failure') {
            critical += 'f';
          }

          if (expression.getChildCount() > 1) {
            critical += this.generate(expression.getChild(1));
          }

          return this.generate(expression.getChild(0)) + critical;
        };

        DiceGenerator.prototype.generateReroll = function (expression) {
          this.expectChildCount(expression, 1);
          var reroll = 'r';

          if (expression.getAttribute('once')) {
            reroll += 'o';
          }

          if (expression.getChildCount() > 1) {
            reroll += this.generate(expression.getChild(1));
          }

          return this.generate(expression.getChild(0)) + reroll;
        };

        DiceGenerator.prototype.generateSort = function (expression) {
          this.expectChildCount(expression, 1);
          var sort = 's';

          if (expression.getAttribute('direction') === 'ascending') {
            sort += 'a';
          }

          if (expression.getAttribute('direction') === 'descending') {
            sort += 'd';
          }

          return this.generate(expression.getChild(0)) + sort;
        };

        DiceGenerator.prototype.generateEqualityExpression = function (expression, operator) {
          this.expectChildCount(expression, 1);

          if (expression.getChildCount() === 1) {
            return operator + this.generate(expression.getChild(0));
          } else {
            return this.generate(expression.getChild(0)) + ' ' + operator + ' ' + this.generate(expression.getChild(1));
          }
        };

        DiceGenerator.prototype.generateCommaList = function (expression) {
          var buffer = '';

          for (var x = 0; x < expression.getChildCount(); x++) {
            if (x > 0) {
              buffer += ', ';
            }

            buffer += this.generate(expression.getChild(x));
          }

          return buffer;
        };

        DiceGenerator.prototype.generateWithParens = function (expression) {
          if (expression.getChildCount() === 0) {
            return this.generate(expression);
          } else {
            return '(' + this.generate(expression) + ')';
          }
        };

        DiceGenerator.prototype.expectChildCount = function (expression, count) {
          var findCount = expression.getChildCount();

          if (findCount < count) {
            throw new Error("Expected " + expression.type + " node to have " + count + " children, but found " + findCount + ".");
          }
        };

        return DiceGenerator;
      }();

    exports.DiceGenerator = DiceGenerator;

    /***/
  }),

  /***/ 1618:
  /*!**************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/generator/index.js ***!
  \**************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./dice-generator.class */ 2614));

    /***/
  }),

  /***/ 4238:
  /*!****************************************************!*\
  !*** ./node_modules/dice-typescript/dist/index.js ***!
  \****************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./ast */ 7277));

    __export(__webpack_require__(/*! ./random */ 1173));

    __export(__webpack_require__(/*! ./generator */ 1618));

    __export(__webpack_require__(/*! ./interpreter */ 468));

    __export(__webpack_require__(/*! ./parser */ 27));

    __export(__webpack_require__(/*! ./dice.class */ 4999));

    /***/
  }),

  /***/ 7954:
  /*!***************************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/default-function-definitions.js ***!
  \***************************************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var function_definition_list_class_1 = __webpack_require__(/*! ./function-definition-list.class */ 5865);

    exports.DefaultFunctionDefinitions = new function_definition_list_class_1.FunctionDefinitionList();

    exports.DefaultFunctionDefinitions.floor = function (interpreter, functionNode, errors) {
      return Math.floor(interpreter.evaluate(functionNode.getChild(0), errors));
    };

    exports.DefaultFunctionDefinitions.ceil = function (interpreter, functionNode, errors) {
      return Math.ceil(interpreter.evaluate(functionNode.getChild(0), errors));
    };

    exports.DefaultFunctionDefinitions.abs = function (interpreter, functionNode, errors) {
      return Math.abs(interpreter.evaluate(functionNode.getChild(0), errors));
    };

    exports.DefaultFunctionDefinitions.round = function (interpreter, functionNode, errors) {
      return Math.round(interpreter.evaluate(functionNode.getChild(0), errors));
    };

    exports.DefaultFunctionDefinitions.sqrt = function (interpreter, functionNode, errors) {
      return Math.sqrt(interpreter.evaluate(functionNode.getChild(0), errors));
    };

    /***/
  }),

  /***/ 3106:
  /*!*********************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/dice-interpreter.class.js ***!
  \*********************************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var Ast = __webpack_require__(/*! ../ast */ 7277);

    var generator_1 = __webpack_require__(/*! ../generator */ 1618);

    var random_1 = __webpack_require__(/*! ../random */ 1173);

    var default_function_definitions_1 = __webpack_require__(/*! ./default-function-definitions */ 7954);

    var dice_result_class_1 = __webpack_require__(/*! ./dice-result.class */ 5094);

    var error_message_class_1 = __webpack_require__(/*! ./error-message.class */ 2941);

    var DiceInterpreter =
      /** @class */
      function () {
        function DiceInterpreter(functions, random, generator, options) {
          this.functions = default_function_definitions_1.DefaultFunctionDefinitions;
          Object.assign(this.functions, functions);
          this.random = random || new random_1.DefaultRandomProvider();
          this.generator = generator || new generator_1.DiceGenerator();
          this.options = options || {};
        }

        DiceInterpreter.prototype.interpret = function (expression) {
          var exp = expression.copy();
          var errors = [];
          var total = this.evaluate(exp, errors);
          var successes = this.countSuccesses(exp, errors);
          var fails = this.countFailures(exp, errors);
          var renderedExpression = this.generator.generate(exp);
          return new dice_result_class_1.DiceResult(exp, renderedExpression, total, successes, fails, errors);
        };

        DiceInterpreter.prototype.evaluate = function (expression, errors) {
          if (!expression) {
            errors.push(new error_message_class_1.InterpreterError('Unexpected null node reference found.', expression));
            return 0;
          }

          if (expression.type === Ast.NodeType.DiceRoll) {
            return this.evaluateDiceRoll(expression, errors);
          } else if (expression.type === Ast.NodeType.Number) {
            return this.evaluateNumber(expression, errors);
          } else if (expression.type === Ast.NodeType.DiceSides) {
            return this.evaluateDiceSides(expression, errors);
          } else if (!expression.getAttribute('value')) {
            var value = 0;

            switch (expression.type) {
              case Ast.NodeType.Add:
                value = this.evaluateAdd(expression, errors);
                break;

              case Ast.NodeType.Subtract:
                value = this.evaluateSubtract(expression, errors);
                break;

              case Ast.NodeType.Multiply:
                value = this.evaluateMultiply(expression, errors);
                break;

              case Ast.NodeType.Divide:
                value = this.evaluateDivide(expression, errors);
                break;

              case Ast.NodeType.Modulo:
                value = this.evaluateModulo(expression, errors);
                break;

              case Ast.NodeType.Negate:
                value = this.evaluateNegate(expression, errors);
                break;

              case Ast.NodeType.Exponent:
                value = this.evaluateExponent(expression, errors);
                break;

              case Ast.NodeType.Dice:
                value = this.evaluateDice(expression, errors);
                break;

              case Ast.NodeType.Function:
                value = this.evaluateFunction(expression, errors);
                break;

              case Ast.NodeType.Group:
                value = this.evaluateGroup(expression, errors);
                break;

              case Ast.NodeType.Repeat:
                value = this.evaluateRepeat(expression, errors);
                break;

              case Ast.NodeType.Explode:
                value = this.evaluateExplode(expression, errors);
                break;

              case Ast.NodeType.Keep:
                value = this.evaluateKeep(expression, errors);
                break;

              case Ast.NodeType.Drop:
                value = this.evaluateDrop(expression, errors);
                break;

              case Ast.NodeType.Critical:
                value = this.evaluateCritical(expression, errors);
                break;

              case Ast.NodeType.Reroll:
                value = this.evaluateReroll(expression, errors);
                break;

              case Ast.NodeType.Sort:
                value = this.evaluateSort(expression, errors);
                break;

              case Ast.NodeType.Equal:
                value = this.evaluateEqual(expression, errors);
                break;

              case Ast.NodeType.Greater:
                value = this.evaluateGreater(expression, errors);
                break;

              case Ast.NodeType.GreaterOrEqual:
                value = this.evaluateGreaterOrEqual(expression, errors);
                break;

              case Ast.NodeType.Less:
                value = this.evaluateLess(expression, errors);
                break;

              case Ast.NodeType.LessOrEqual:
                value = this.evaluateLessOrEqual(expression, errors);
                break;

              default:
                errors.push(new error_message_class_1.InterpreterError("Unrecognized node type '" + expression.type + "'.", expression));
                return 0;
            }

            expression.setAttribute('value', value);
          }

          return expression.getAttribute('value');
        };

        DiceInterpreter.prototype.evaluateAdd = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          return this.evaluate(expression.getChild(0), errors) + this.evaluate(expression.getChild(1), errors);
        };

        DiceInterpreter.prototype.evaluateSubtract = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          return this.evaluate(expression.getChild(0), errors) - this.evaluate(expression.getChild(1), errors);
        };

        DiceInterpreter.prototype.evaluateMultiply = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          return this.evaluate(expression.getChild(0), errors) * this.evaluate(expression.getChild(1), errors);
        };

        DiceInterpreter.prototype.evaluateDivide = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          return this.evaluate(expression.getChild(0), errors) / this.evaluate(expression.getChild(1), errors);
        };

        DiceInterpreter.prototype.evaluateModulo = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          return this.evaluate(expression.getChild(0), errors) % this.evaluate(expression.getChild(1), errors);
        };

        DiceInterpreter.prototype.evaluateExponent = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          return Math.pow(this.evaluate(expression.getChild(0), errors), this.evaluate(expression.getChild(1), errors));
        };

        DiceInterpreter.prototype.evaluateNegate = function (expression, errors) {
          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          return -this.evaluate(expression.getChild(0), errors);
        };

        DiceInterpreter.prototype.evaluateNumber = function (expression, errors) {
          return expression.getAttribute('value');
        };

        DiceInterpreter.prototype.evaluateDiceSides = function (expression, errors) {
          return expression.getAttribute('value');
        };

        DiceInterpreter.prototype.evaluateDiceRoll = function (expression, errors) {
          if (expression.getAttribute('drop') !== true) {
            return expression.getAttribute('value');
          }

          return 0;
        };

        DiceInterpreter.prototype.evaluateDice = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          var num = Math.round(this.evaluate(expression.getChild(0), errors));
          var _a = this.options,
            maxRollTimes = _a.maxRollTimes,
            maxDiceSides = _a.maxDiceSides;

          if (maxRollTimes && num > maxRollTimes) {
            errors.push(new error_message_class_1.InterpreterError("Invalid number of rolls: " + num + ". Maximum allowed: " + maxRollTimes + ".", expression));
            return null;
          }

          var sides = expression.getChild(1);
          var sidesValue = this.evaluate(sides, errors);

          if (maxDiceSides && sidesValue > maxDiceSides) {
            errors.push(new error_message_class_1.InterpreterError("Invalid number of dice sides: " + sidesValue + ". Maximum allowed: " + maxDiceSides + ".", expression));
            return null;
          }

          expression.setAttribute('sides', sidesValue);
          expression.clearChildren();
          var total = 0;

          for (var x = 0; x < num; x++) {
            var diceRoll = this.createDiceRoll(sides, errors);
            expression.addChild(diceRoll);
            total += this.evaluate(diceRoll, errors);
          }

          return total;
        };

        DiceInterpreter.prototype.evaluateFunction = function (expression, errors) {
          var fName = expression.getAttribute('name');

          if (Object.keys(this.functions).indexOf(fName) === -1) {
            errors.push(new error_message_class_1.InterpreterError("Unknown function: " + fName, expression));
            return 0;
          }

          var result = this.functions[fName](this, expression, errors);
          return result;
        };

        DiceInterpreter.prototype.evaluateGroup = function (expression, errors) {
          var _this = this;

          var total = 0;
          expression.forEachChild(function (child) {
            total += _this.evaluate(child, errors);
          });
          return total;
        };

        DiceInterpreter.prototype.evaluateRepeat = function (expression, errors) {
          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          var lhs = expression.getChild(0);
          var times = this.evaluate(expression.getChild(1), errors);
          var parent = expression.getParent();
          parent.removeChild(expression);
          var total = 0;

          for (var x = 0; x < times; x++) {
            var copy = lhs.copy();
            parent.addChild(copy);
            total += this.evaluate(copy, errors);
          }

          return total;
        };

        DiceInterpreter.prototype.evaluateExplode = function (expression, errors) {
          var _this = this;

          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          var dice = this.findDiceOrGroupNode(expression, errors);

          if (!dice) {
            return 0;
          }

          var penetrate = expression.getAttribute('penetrate');
          var sides = dice.getAttribute('sides');
          var condition;

          if (expression.getChildCount() > 1) {
            condition = expression.getChild(1);

            if (this.wouldRollAgainForever(dice, condition, errors)) {
              return 0;
            }
          } else {
            condition = Ast.Factory.create(Ast.NodeType.Equal);
            condition.addChild(Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', sides));
          }

          this.evaluate(dice, errors);
          var newRolls = [];
          var total = 0;
          dice.forEachChild(function (die) {
            if (!die.getAttribute('drop')) {
              var dieValue = _this.evaluate(die, errors);

              total += dieValue;

              while (condition && _this.evaluateComparison(dieValue, condition, errors)) {
                die = _this.createDiceRoll(sides, errors);
                dieValue = _this.evaluate(die, errors);

                if (penetrate) {
                  dieValue -= 1;
                }

                total += dieValue;
                newRolls.push(die);
              }
            }
          });
          newRolls.forEach(function (newRoll) {
            return dice.addChild(newRoll);
          });
          return total;
        };

        DiceInterpreter.prototype.evaluateKeep = function (expression, errors) {
          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          var dice = this.findDiceOrGroupNode(expression, errors);

          if (!dice) {
            return 0;
          }

          var countTotal = expression.getChildCount() > 1 ? this.evaluate(expression.getChild(1), errors) : 1;
          var type = expression.getAttribute('type');
          this.evaluate(dice, errors);
          var rolls = this.getSortedDiceRolls(dice, type === 'lowest' ? 'ascending' : 'descending', errors).rolls;
          var count = 0;
          var total = 0;
          rolls.forEach(function (roll) {
            if (count < countTotal) {
              roll.setAttribute('drop', false);
              total += roll.getAttribute('value');
            } else {
              roll.setAttribute('drop', true);
            }

            count++;
          });
          return total;
        };

        DiceInterpreter.prototype.evaluateDrop = function (expression, errors) {
          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          var dice = this.findDiceOrGroupNode(expression, errors);

          if (!dice) {
            return 0;
          }

          var countTotal = expression.getChildCount() > 1 ? this.evaluate(expression.getChild(1), errors) : 1;
          var type = expression.getAttribute('type');
          this.evaluate(dice, errors);
          var rolls = this.getSortedDiceRolls(dice, type === 'lowest' ? 'ascending' : 'descending', errors).rolls;
          var count = 0;
          var total = 0;
          rolls.forEach(function (roll) {
            if (count < countTotal) {
              roll.setAttribute('drop', true);
            } else {
              roll.setAttribute('drop', false);
              total += roll.getAttribute('value');
            }

            count++;
          });
          return total;
        };

        DiceInterpreter.prototype.evaluateCritical = function (expression, errors) {
          var _this = this;

          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          var dice = this.findDiceOrGroupNode(expression, errors);

          if (!dice) {
            return 0;
          }

          var type = expression.getAttribute('type');
          var condition;

          if (expression.getChildCount() > 1) {
            condition = expression.getChild(1);
          } else {
            condition = Ast.Factory.create(Ast.NodeType.Equal);

            if (type === 'success') {
              this.expectChildCount(dice, 2, errors);
              condition.addChild(Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', dice.getAttribute('sides')));
            } else {
              condition.addChild(Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', 1));
            }
          }

          this.evaluate(dice, errors);
          var total = 0;
          dice.forEachChild(function (die) {
            var dieValue = _this.evaluate(die, errors);

            if (_this.evaluateComparison(dieValue, condition, errors)) {
              die.setAttribute('critical', type);
              total += dieValue;
            }
          });
          return total;
        };

        DiceInterpreter.prototype.evaluateReroll = function (expression, errors) {
          var _this = this;

          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          var dice = this.findDiceOrGroupNode(expression, errors);

          if (!dice) {
            return 0;
          }

          var condition;
          var once = expression.getAttribute('once');

          if (expression.getChildCount() > 1) {
            condition = expression.getChild(1);

            if (this.wouldRollAgainForever(dice, condition, errors)) {
              return 0;
            }
          } else {
            condition = Ast.Factory.create(Ast.NodeType.Equal);
            condition.addChild(Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', 1));
          }

          this.evaluate(dice, errors);
          var total = 0;
          var sides = dice.getAttribute('sides');
          dice.forEachChild(function (die) {
            if (!die.getAttribute('drop')) {
              var dieValue = _this.evaluate(die, errors);

              while (condition && _this.evaluateComparison(dieValue, condition, errors)) {
                dieValue = _this.createDiceRollValue(sides, errors);

                if (once) {
                  break;
                }
              }

              die.setAttribute('value', dieValue);
              total += dieValue;
            }
          });
          return total;
        };

        DiceInterpreter.prototype.evaluateSort = function (expression, errors) {
          if (!this.expectChildCount(expression, 1, errors)) {
            return 0;
          }

          var dice = this.findDiceOrGroupNode(expression, errors);

          if (!dice) {
            return 0;
          }

          var rolls = this.getSortedDiceRolls(dice, expression.getAttribute('direction'), errors);
          dice.clearChildren();
          rolls.rolls.forEach(function (roll) {
            return dice.addChild(roll);
          });
          return rolls.total;
        };

        DiceInterpreter.prototype.evaluateEqual = function (expression, errors) {
          return this.evaluateSuccess(expression, function (l, r) {
            return l === r;
          }, errors);
        };

        DiceInterpreter.prototype.evaluateGreater = function (expression, errors) {
          return this.evaluateSuccess(expression, function (l, r) {
            return l > r;
          }, errors);
        };

        DiceInterpreter.prototype.evaluateGreaterOrEqual = function (expression, errors) {
          return this.evaluateSuccess(expression, function (l, r) {
            return l >= r;
          }, errors);
        };

        DiceInterpreter.prototype.evaluateLess = function (expression, errors) {
          return this.evaluateSuccess(expression, function (l, r) {
            return l < r;
          }, errors);
        };

        DiceInterpreter.prototype.evaluateLessOrEqual = function (expression, errors) {
          return this.evaluateSuccess(expression, function (l, r) {
            return l <= r;
          }, errors);
        };

        DiceInterpreter.prototype.countSuccesses = function (expression, errors) {
          return this.countSuccessOrFailure(expression, function (die) {
            return die.getAttribute('success');
          }, errors);
        };

        DiceInterpreter.prototype.countFailures = function (expression, errors) {
          return this.countSuccessOrFailure(expression, function (die) {
            return !die.getAttribute('success');
          }, errors);
        };

        DiceInterpreter.prototype.countSuccessOrFailure = function (expression, condition, errors) {
          var _this = this;

          var total = 0;

          if (expression.type === Ast.NodeType.Dice || expression.type === Ast.NodeType.Group) {
            expression.forEachChild(function (die) {
              if (!die.getAttribute('drop') && condition(die)) {
                total++;
              }
            });
          } else {
            expression.forEachChild(function (die) {
              total += _this.countSuccessOrFailure(die, condition, errors);
            });
          }

          return total;
        };

        DiceInterpreter.prototype.expectChildCount = function (expression, count, errors) {
          var findCount = expression.getChildCount();

          if (findCount < count) {
            var err = new error_message_class_1.InterpreterError("Expected " + expression.type + " node to have " + count + " children, but found " + findCount + ".", expression);
            errors.push(err);
            return false;
          }

          return true;
        };

        DiceInterpreter.prototype.evaluateComparison = function (lhs, expression, errors) {
          if (!this.expectChildCount(expression, 1, errors)) {
            return false;
          }

          switch (expression.type) {
            case Ast.NodeType.Equal:
              return lhs === this.evaluate(expression.getChild(0), errors);

            case Ast.NodeType.Greater:
              return lhs > this.evaluate(expression.getChild(0), errors);

            case Ast.NodeType.GreaterOrEqual:
              return lhs >= this.evaluate(expression.getChild(0), errors);

            case Ast.NodeType.Less:
              return lhs < this.evaluate(expression.getChild(0), errors);

            case Ast.NodeType.LessOrEqual:
              return lhs <= this.evaluate(expression.getChild(0), errors);

            default:
              errors.push(new error_message_class_1.InterpreterError("Unrecognized comparison operator '" + expression.type + "'.", expression));
              return false;
          }
        };

        DiceInterpreter.prototype.evaluateSuccess = function (expression, compare, errors) {
          var _this = this;

          if (!this.expectChildCount(expression, 2, errors)) {
            return 0;
          }

          var rhv = this.evaluate(expression.getChild(1), errors);
          var total = 0;
          var diceOrGroup = this.findDiceOrGroupNode(expression, errors);

          if (!diceOrGroup) {
            return 0;
          }

          diceOrGroup.forEachChild(function (die) {
            if (!die.getAttribute('drop')) {
              var val = _this.evaluate(die, errors);

              var res = compare(_this.evaluate(die, errors), rhv);
              die.setAttribute('success', res);

              if (res) {
                total += val;
              }
            }
          });
          return total;
        };

        DiceInterpreter.prototype.findDiceOrGroupNode = function (expression, errors) {
          if (expression.type === Ast.NodeType.Dice || expression.type === Ast.NodeType.Group) {
            return expression;
          }

          if (expression.getChildCount() < 1) {
            errors.push(new error_message_class_1.InterpreterError('Missing dice/group node.', expression));
            return null;
          }

          var child = expression.getChild(0);
          this.evaluate(child, errors);
          return this.findDiceOrGroupNode(child, errors);
        };

        DiceInterpreter.prototype.getSortedDiceRolls = function (dice, direction, errors) {
          var _this = this;

          var output = {
            rolls: [],
            total: 0
          };
          dice.forEachChild(function (die) {
            output.rolls.push(die);
            output.total += _this.evaluate(die, errors);
          });
          var sortOrder;

          if (direction === 'descending') {
            sortOrder = function (a, b) {
              return b.getAttribute('value') - a.getAttribute('value');
            };
          } else if (direction === 'ascending') {
            sortOrder = function (a, b) {
              return a.getAttribute('value') - b.getAttribute('value');
            };
          } else {
            errors.push(new error_message_class_1.InterpreterError("Unknown sort direction: " + direction + ". Expected 'ascending' or 'descending'.", dice));
          }

          output.rolls = output.rolls.sort(sortOrder);
          return output;
        };

        DiceInterpreter.prototype.createDiceRoll = function (sides, errors) {
          var sidesValue = sides instanceof Ast.ExpressionNode ? sides.getAttribute('value') : sides;
          var diceRoll = this.createDiceRollValue(sides, errors);
          return Ast.Factory.create(Ast.NodeType.DiceRoll).setAttribute('value', diceRoll).setAttribute('drop', false);
        };

        DiceInterpreter.prototype.createDiceRollValue = function (sides, errors) {
          var minValue = 1,
            maxValue = 0;
          var sidesValue = sides instanceof Ast.ExpressionNode ? sides.getAttribute('value') : sides;

          if (sidesValue === 'fate') {
            minValue = -1;
            maxValue = 1;
          } else {
            maxValue = Math.round(sides instanceof Ast.ExpressionNode ? this.evaluate(sides, errors) : sides);
          }

          return this.random.numberBetween(minValue, maxValue);
        };

        DiceInterpreter.prototype.wouldRollAgainForever = function (dice, expression, errors) {
          var sides = dice.getAttribute('sides');
          var value = expression.getChild(0).getAttribute('value');
          var wouldRunForever = false;

          switch (expression.type) {
            case Ast.NodeType.Equal:
              wouldRunForever = sides === 1 && value === 1;
              break;

            case Ast.NodeType.Greater:
              wouldRunForever = value < 1;
              break;

            case Ast.NodeType.GreaterOrEqual:
              wouldRunForever = value <= 1;
              break;

            case Ast.NodeType.Less:
              wouldRunForever = value > sides;
              break;

            case Ast.NodeType.LessOrEqual:
              wouldRunForever = value >= sides;
          }

          if (wouldRunForever) {
            errors.push(new error_message_class_1.InterpreterError('Condition to roll again includes all dice faces and would run forever.', expression));
          }

          return wouldRunForever;
        };

        return DiceInterpreter;
      }();

    exports.DiceInterpreter = DiceInterpreter;

    /***/
  }),

  /***/ 5094:
  /*!****************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/dice-result.class.js ***!
  \****************************************************************************/
  /***/ (function (__unused_webpack_module, exports, __webpack_require__) {

    "use strict";


    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var result_class_1 = __webpack_require__(/*! ./result.class */ 791);

    var DiceResult =
      /** @class */
      function (_super) {
        __extends(DiceResult, _super);

        function DiceResult(expression, renderedExpression, total, successes, failures, errors) {
          var _this = _super.call(this, expression, renderedExpression, total) || this;

          _this.successes = successes;
          _this.failures = failures;
          _this.errors = errors;
          return _this;
        }

        return DiceResult;
      }(result_class_1.Result);

    exports.DiceResult = DiceResult;

    /***/
  }),

  /***/ 2941:
  /*!******************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/error-message.class.js ***!
  \******************************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var InterpreterError =
      /** @class */
      function () {
        function InterpreterError(message, expression, stack) {
          if (stack === void 0) {
            stack = new Error().stack;
          }

          this.message = message;
          this.expression = expression;
          this.stack = stack;
        }

        return InterpreterError;
      }();

    exports.InterpreterError = InterpreterError;

    /***/
  }),

  /***/ 5865:
  /*!*****************************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/function-definition-list.class.js ***!
  \*****************************************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var FunctionDefinitionList =
      /** @class */
      function () {
        function FunctionDefinitionList() {
        }

        return FunctionDefinitionList;
      }();

    exports.FunctionDefinitionList = FunctionDefinitionList;

    /***/
  }),

  /***/ 468:
  /*!****************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/index.js ***!
  \****************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./dice-result.class */ 5094));

    __export(__webpack_require__(/*! ./dice-interpreter.class */ 3106));

    __export(__webpack_require__(/*! ./error-message.class */ 2941));

    __export(__webpack_require__(/*! ./function-definition-list.class */ 5865));

    __export(__webpack_require__(/*! ./function-definition-list.class */ 5865));

    __export(__webpack_require__(/*! ./dice-interpreter.class */ 3106));

    __export(__webpack_require__(/*! ./dice-result.class */ 5094));

    /***/
  }),

  /***/ 791:
  /*!***********************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/interpreter/result.class.js ***!
  \***********************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var Result =
      /** @class */
      function () {
        function Result(reducedExpression, renderedExpression, total) {
          this.reducedExpression = reducedExpression;
          this.renderedExpression = renderedExpression;
          this.total = total;
        }

        return Result;
      }();

    exports.Result = Result;

    /***/
  }),

  /***/ 5691:
  /*!*********************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/lexer/dice-lexer.class.js ***!
  \*********************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var string_character_stream_class_1 = __webpack_require__(/*! ./string-character-stream.class */ 5307);

    var token_class_1 = __webpack_require__(/*! ./token.class */ 3366);

    var token_type_enum_1 = __webpack_require__(/*! ./token-type.enum */ 4791);

    var DiceLexer =
      /** @class */
      function () {
        function DiceLexer(input) {
          this.numCharRegex = /[0-9]/;
          this.idCharRegex = /[a-zA-Z]/;

          if (this.isCharacterStream(input)) {
            this.stream = input;
          } else if (typeof input === 'string') {
            this.stream = new string_character_stream_class_1.StringCharacterStream(input);
          } else {
            throw new Error('Unrecognized input type. input must be of type \'CharacterStream | string\'.');
          }
        }

        DiceLexer.prototype.isCharacterStream = function (input) {
          return input.getCurrentCharacter;
        };

        DiceLexer.prototype.peekNextToken = function () {
          if (!this.nextToken) {
            this.nextToken = this.constructNextToken();
          }

          return this.nextToken;
        };

        DiceLexer.prototype.getNextToken = function () {
          if (this.nextToken) {
            this.currentToken = this.nextToken;
            this.nextToken = null;
          } else {
            this.currentToken = this.constructNextToken();
          }

          return this.currentToken;
        };

        DiceLexer.prototype.parseIdentifier = function () {
          var buffer = this.stream.getCurrentCharacter(); // TODO: klnull?!

          while (this.stream.peekNextCharacter() && this.idCharRegex.test(this.stream.peekNextCharacter())) {
            buffer += this.stream.getNextCharacter();
          }

          return this.createToken(token_type_enum_1.TokenType.Identifier, buffer);
        };

        DiceLexer.prototype.parseNumber = function () {
          var buffer = this.stream.getCurrentCharacter();
          var hasDot = false;
          var nextChar = this.stream.peekNextCharacter();

          while (nextChar === '.' || this.numCharRegex.test(nextChar)) {
            if (nextChar === '.') {
              if (hasDot) {
                break;
              }

              hasDot = true;
            }

            buffer += this.stream.getNextCharacter();
            nextChar = this.stream.peekNextCharacter();
          }

          return this.createToken(token_type_enum_1.TokenType.Number, buffer);
        };

        DiceLexer.prototype.parseEllipsis = function () {
          for (var x = 0; x < 2; x++) {
            if (this.stream.peekNextCharacter() !== '.') {
              throw new Error('Missing period in ellipsis.');
            }

            this.stream.getNextCharacter();
          }

          return this.createToken(token_type_enum_1.TokenType.Ellipsis, '...');
        };

        DiceLexer.prototype.constructNextToken = function () {
          var curChar;

          while (curChar = this.stream.getNextCharacter()) {
            switch (true) {
              case this.idCharRegex.test(curChar):
                return this.parseIdentifier();

              case this.numCharRegex.test(curChar):
                return this.parseNumber();

              case curChar === '{':
                return this.createToken(token_type_enum_1.TokenType.BraceOpen, curChar);

              case curChar === '}':
                return this.createToken(token_type_enum_1.TokenType.BraceClose, curChar);

              case curChar === ',':
                return this.createToken(token_type_enum_1.TokenType.Comma, curChar);

              case curChar === '(':
                return this.createToken(token_type_enum_1.TokenType.ParenthesisOpen, curChar);

              case curChar === ')':
                return this.createToken(token_type_enum_1.TokenType.ParenthesisClose, curChar);

              case curChar === '=':
                return this.createToken(token_type_enum_1.TokenType.Equals, curChar);

              case curChar === '+':
                return this.createToken(token_type_enum_1.TokenType.Plus, curChar);

              case curChar === '/':
                return this.createToken(token_type_enum_1.TokenType.Slash, curChar);

              case curChar === '-':
                return this.createToken(token_type_enum_1.TokenType.Minus, curChar);

              case curChar === '%':
                return this.createToken(token_type_enum_1.TokenType.Percent, curChar);

              case curChar === '!':
                return this.createToken(token_type_enum_1.TokenType.Exclamation, curChar);

              case curChar === '.':
                return this.parseEllipsis();

              case curChar === '*':
                if (this.stream.peekNextCharacter() === '*') {
                  this.stream.getNextCharacter();
                  return this.createToken(token_type_enum_1.TokenType.DoubleAsterisk, curChar + this.stream.getCurrentCharacter());
                } else {
                  return this.createToken(token_type_enum_1.TokenType.Asterisk, curChar);
                }

              case curChar === '>':
                if (this.stream.peekNextCharacter() === '=') {
                  this.stream.getNextCharacter();
                  return this.createToken(token_type_enum_1.TokenType.GreaterOrEqual, curChar + this.stream.getCurrentCharacter());
                } else {
                  return this.createToken(token_type_enum_1.TokenType.Greater, curChar);
                }

              case curChar === '<':
                if (this.stream.peekNextCharacter() === '=') {
                  this.stream.getNextCharacter();
                  return this.createToken(token_type_enum_1.TokenType.LessOrEqual, curChar + this.stream.getCurrentCharacter());
                } else {
                  return this.createToken(token_type_enum_1.TokenType.Less, curChar);
                }

              case /\W/.test(curChar):
                // Ignore whitespace.
                break;

              default:
                throw new Error("Unknown token: '" + curChar + "'.");
            }
          } // Terminator at end of stream.


          return this.createToken(token_type_enum_1.TokenType.Terminator);
        };

        DiceLexer.prototype.createToken = function (type, value) {
          var position = this.stream.getCurrentPosition();

          if (value) {
            position -= value.length - 1;
          }

          return new token_class_1.Token(type, position, value);
        };

        return DiceLexer;
      }();

    exports.DiceLexer = DiceLexer;

    /***/
  }),

  /***/ 812:
  /*!**********************************************************!*\
  !*** ./node_modules/dice-typescript/dist/lexer/index.js ***!
  \**********************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./string-character-stream.class */ 5307));

    __export(__webpack_require__(/*! ./dice-lexer.class */ 5691));

    __export(__webpack_require__(/*! ./non-global-definition-error.class */ 2205));

    __export(__webpack_require__(/*! ./token-type.enum */ 4791));

    __export(__webpack_require__(/*! ./token.class */ 3366));

    /***/
  }),

  /***/ 2205:
  /*!**************************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/lexer/non-global-definition-error.class.js ***!
  \**************************************************************************************/
  /***/ (function (__unused_webpack_module, exports) {

    "use strict";


    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var NonGlobalDefinitionError =
      /** @class */
      function (_super) {
        __extends(NonGlobalDefinitionError, _super);

        function NonGlobalDefinitionError() {
          return _super.call(this, 'TokenDefinition pattern RegExp must be global.') || this;
        }

        return NonGlobalDefinitionError;
      }(Error);

    exports.NonGlobalDefinitionError = NonGlobalDefinitionError;

    /***/
  }),

  /***/ 5307:
  /*!**********************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/lexer/string-character-stream.class.js ***!
  \**********************************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var StringCharacterStream =
      /** @class */
      function () {
        function StringCharacterStream(input) {
          this.input = input;
          this.index = -1;
        }

        StringCharacterStream.prototype.getCurrentPosition = function () {
          return this.index;
        };

        StringCharacterStream.prototype.getNextCharacter = function () {
          this.index = Math.min(this.index + 1, this.input.length);

          if (this.index >= this.input.length) {
            return null;
          }

          return this.input[this.index];
        };

        StringCharacterStream.prototype.getCurrentCharacter = function () {
          if (this.index < 0 || this.index >= this.input.length) {
            return null;
          }

          return this.input[this.index];
        };

        StringCharacterStream.prototype.peekNextCharacter = function () {
          if (this.index >= this.input.length) {
            return null;
          }

          return this.input[this.index + 1];
        };

        return StringCharacterStream;
      }();

    exports.StringCharacterStream = StringCharacterStream;

    /***/
  }),

  /***/ 4791:
  /*!********************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/lexer/token-type.enum.js ***!
  \********************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));
    var TokenType;

    (function (TokenType) {
      TokenType[TokenType["Equals"] = '='] = "Equals";
      TokenType[TokenType["Greater"] = '>'] = "Greater";
      TokenType[TokenType["GreaterOrEqual"] = '>='] = "GreaterOrEqual";
      TokenType[TokenType["Less"] = '<'] = "Less";
      TokenType[TokenType["LessOrEqual"] = '<='] = "LessOrEqual";
      TokenType[TokenType["BraceClose"] = '}'] = "BraceClose";
      TokenType[TokenType["BraceOpen"] = '{'] = "BraceOpen";
      TokenType[TokenType["Comma"] = ','] = "Comma";
      TokenType[TokenType["Ellipsis"] = '...'] = "Ellipsis";
      TokenType[TokenType["Identifier"] = 'identifier'] = "Identifier";
      TokenType[TokenType["Plus"] = '+'] = "Plus";
      TokenType[TokenType["Slash"] = '/'] = "Slash";
      TokenType[TokenType["DoubleAsterisk"] = '**'] = "DoubleAsterisk";
      TokenType[TokenType["Percent"] = '%'] = "Percent";
      TokenType[TokenType["Asterisk"] = '*'] = "Asterisk";
      TokenType[TokenType["Minus"] = '-'] = "Minus";
      TokenType[TokenType["Number"] = 'number'] = "Number";
      TokenType[TokenType["ParenthesisClose"] = ')'] = "ParenthesisClose";
      TokenType[TokenType["ParenthesisOpen"] = '('] = "ParenthesisOpen";
      TokenType[TokenType["Terminator"] = 'terminator'] = "Terminator";
      TokenType[TokenType["Exclamation"] = '!'] = "Exclamation";
    })(TokenType = exports.TokenType || (exports.TokenType = {}));

    /***/
  }),

  /***/ 3366:
  /*!****************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/lexer/token.class.js ***!
  \****************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var Token =
      /** @class */
      function () {
        function Token(type, position, value) {
          this.type = type;
          this.position = position;
          this.value = value;
        }

        return Token;
      }();

    exports.Token = Token;

    /***/
  }),

  /***/ 4653:
  /*!************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/parser/basic-parser.class.js ***!
  \************************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var lexer_1 = __webpack_require__(/*! ../lexer */ 812);

    var error_message_class_1 = __webpack_require__(/*! ./error-message.class */ 4745);

    var BasicParser =
      /** @class */
      function () {
        function BasicParser(input) {
          if (this.isLexer(input)) {
            this.lexer = input;
          } else if (typeof input === 'string') {
            this.lexer = new lexer_1.DiceLexer(input);
          } else {
            throw new Error('Unrecognized input type. input must be of type \'Lexer | string\'.');
          }
        }

        BasicParser.prototype.isLexer = function (input) {
          return input.getNextToken;
        };

        BasicParser.prototype.expectAndConsume = function (result, expected, actual) {
          this.expect(result, expected, actual);
          return this.lexer.getNextToken();
        };

        BasicParser.prototype.expect = function (result, expected, actual) {
          actual = actual || this.lexer.peekNextToken();

          if (actual.type !== expected) {
            this.errorToken(result, expected, actual);
          }

          return actual;
        };

        BasicParser.prototype.errorToken = function (result, expected, actual) {
          var message = "Error at position " + actual.position + ".";
          message += " Expected token of type " + expected + ", found token of type " + actual.type + " of value \"" + actual.value + "\".";
          this.errorMessage(result, message, actual);
        };

        BasicParser.prototype.errorMessage = function (result, message, token) {
          result.errors.push(new error_message_class_1.ParserError(message, token, new Error().stack));
        };

        return BasicParser;
      }();

    exports.BasicParser = BasicParser;

    /***/
  }),

  /***/ 9051:
  /*!***********************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/parser/dice-parser.class.js ***!
  \***********************************************************************/
  /***/ (function (__unused_webpack_module, exports, __webpack_require__) {

    "use strict";


    var __extends = this && this.__extends || function () {
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return extendStatics(d, b);
      };

      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var Ast = __webpack_require__(/*! ../ast */ 7277);

    var lexer_1 = __webpack_require__(/*! ../lexer */ 812);

    var basic_parser_class_1 = __webpack_require__(/*! ./basic-parser.class */ 4653);

    var parse_result_class_1 = __webpack_require__(/*! ./parse-result.class */ 7824);

    var BooleanOperatorMap = {};
    BooleanOperatorMap[lexer_1.TokenType.Equals] = Ast.NodeType.Equal;
    BooleanOperatorMap[lexer_1.TokenType.Greater] = Ast.NodeType.Greater;
    BooleanOperatorMap[lexer_1.TokenType.Less] = Ast.NodeType.Less;
    BooleanOperatorMap[lexer_1.TokenType.GreaterOrEqual] = Ast.NodeType.GreaterOrEqual;
    BooleanOperatorMap[lexer_1.TokenType.LessOrEqual] = Ast.NodeType.LessOrEqual;
    var AddOperatorMap = {};
    AddOperatorMap[lexer_1.TokenType.Plus] = Ast.NodeType.Add;
    AddOperatorMap[lexer_1.TokenType.Minus] = Ast.NodeType.Subtract;
    var MultiOperatorMap = {};
    MultiOperatorMap[lexer_1.TokenType.DoubleAsterisk] = Ast.NodeType.Exponent;
    MultiOperatorMap[lexer_1.TokenType.Asterisk] = Ast.NodeType.Multiply;
    MultiOperatorMap[lexer_1.TokenType.Slash] = Ast.NodeType.Divide;
    MultiOperatorMap[lexer_1.TokenType.Percent] = Ast.NodeType.Modulo;

    var DiceParser =
      /** @class */
      function (_super) {
        __extends(DiceParser, _super);

        function DiceParser(input) {
          return _super.call(this, input) || this;
        }

        DiceParser.prototype.parse = function () {
          var result = new parse_result_class_1.ParseResult();
          result.root = this.parseExpression(result);
          return result;
        };

        DiceParser.prototype.parseExpression = function (result) {
          var root = this.parseSimpleExpression(result);
          var tokenType = this.lexer.peekNextToken().type;

          if (Object.keys(BooleanOperatorMap).indexOf(tokenType.toString()) > -1) {
            var newRoot = Ast.Factory.create(BooleanOperatorMap[tokenType]);
            this.lexer.getNextToken();
            newRoot.addChild(root);
            newRoot.addChild(this.parseSimpleExpression(result));
            root = newRoot;
          }

          return root;
        };

        DiceParser.prototype.parseSimpleExpression = function (result) {
          var tokenType = this.lexer.peekNextToken().type;

          if (Object.keys(AddOperatorMap).indexOf(tokenType.toString()) > -1) {
            this.lexer.getNextToken();
          }

          var root = this.parseTerm(result);

          if (tokenType === lexer_1.TokenType.Minus) {
            var negateNode = Ast.Factory.create(Ast.NodeType.Negate);
            negateNode.addChild(root);
            root = negateNode;
          }

          tokenType = this.lexer.peekNextToken().type;

          while (Object.keys(AddOperatorMap).indexOf(tokenType.toString()) > -1) {
            var newRoot = Ast.Factory.create(AddOperatorMap[tokenType]);
            newRoot.addChild(root); // Consume the operator.

            this.lexer.getNextToken();
            newRoot.addChild(this.parseTerm(result));
            root = newRoot;
            tokenType = this.lexer.peekNextToken().type;
          }

          return root;
        };

        DiceParser.prototype.parseTerm = function (result) {
          var root = this.parseFactor(result);
          var tokenType = this.lexer.peekNextToken().type;

          while (Object.keys(MultiOperatorMap).indexOf(tokenType.toString()) > -1) {
            var newRoot = Ast.Factory.create(MultiOperatorMap[tokenType]);
            newRoot.addChild(root); // Consume the operator.

            this.lexer.getNextToken();
            newRoot.addChild(this.parseFactor(result));
            root = newRoot;
            tokenType = this.lexer.peekNextToken().type;
          }

          return root;
        };

        DiceParser.prototype.parseFactor = function (result) {
          var root;
          var token = this.lexer.peekNextToken();

          switch (token.type) {
            case lexer_1.TokenType.Identifier:
              if (token.value === 'd' || token.value === 'dF') {
                root = this.parseDice(result);
              } else {
                root = this.parseFunction(result);
              }

              break;

            case lexer_1.TokenType.ParenthesisOpen:
              root = this.parseBracketedExpression(result);

              if (this.lexer.peekNextToken().type === lexer_1.TokenType.Identifier) {
                root = this.parseDice(result, root);
              }

              break;

            case lexer_1.TokenType.BraceOpen:
              root = this.parseGroup(result);
              break;

            case lexer_1.TokenType.Number:
              var number = this.parseNumber(result);

              if (this.lexer.peekNextToken().type !== lexer_1.TokenType.Identifier) {
                root = number;
              } else {
                root = this.parseDice(result, number);
              }

              break;

            default:
              this.errorToken(result, lexer_1.TokenType.Number, token);
          }

          return root;
        };

        DiceParser.prototype.parseSimpleFactor = function (result) {
          var token = this.lexer.peekNextToken();

          switch (token.type) {
            case lexer_1.TokenType.Number:
              return this.parseNumber(result);

            case lexer_1.TokenType.ParenthesisOpen:
              return this.parseBracketedExpression(result);

            case lexer_1.TokenType.Identifier:
              return Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', Number(1));

            default:
              this.errorToken(result, lexer_1.TokenType.Number, token);
          }
        };

        DiceParser.prototype.parseFunction = function (result) {
          var functionName = this.expectAndConsume(result, lexer_1.TokenType.Identifier);
          var root = Ast.Factory.create(Ast.NodeType.Function).setAttribute('name', functionName.value);
          this.expectAndConsume(result, lexer_1.TokenType.ParenthesisOpen); // Parse function arguments.

          var token = this.lexer.peekNextToken();

          if (token.type !== lexer_1.TokenType.ParenthesisClose) {
            root.addChild(this.parseExpression(result));

            while (this.lexer.peekNextToken().type === lexer_1.TokenType.Comma) {
              this.lexer.getNextToken(); // Consume the comma.

              root.addChild(this.parseExpression(result));
            }
          }

          this.expectAndConsume(result, lexer_1.TokenType.ParenthesisClose);
          return root;
        };

        DiceParser.prototype.parseNumber = function (result) {
          var numberToken = this.lexer.getNextToken();
          return Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', Number(numberToken.value));
        };

        DiceParser.prototype.parseBracketedExpression = function (result) {
          this.lexer.getNextToken(); // Consume the opening bracket.

          var root = this.parseExpression(result);
          this.expectAndConsume(result, lexer_1.TokenType.ParenthesisClose);
          return root;
        };

        DiceParser.prototype.parseGroup = function (result) {
          this.lexer.getNextToken(); // Consume the opening brace.

          var root = Ast.Factory.create(Ast.NodeType.Group); // Parse group elements.

          var token = this.lexer.peekNextToken();

          if (token.type !== lexer_1.TokenType.BraceClose) {
            do {
              if (this.lexer.peekNextToken().type === lexer_1.TokenType.Comma) {
                this.lexer.getNextToken(); // Consume the comma.
              }

              var exp = this.parseExpression(result);

              if (this.lexer.peekNextToken().type === lexer_1.TokenType.Ellipsis) {
                exp = this.parseRepeat(result, exp);
              }

              root.addChild(exp);
            } while (this.lexer.peekNextToken().type === lexer_1.TokenType.Comma);
          }

          this.expectAndConsume(result, lexer_1.TokenType.BraceClose);
          return this.parseGroupModifiers(result, root);
        };

        DiceParser.prototype.parseRepeat = function (result, lhs) {
          this.lexer.getNextToken(); // Consume the ellipsis.

          var root = Ast.Factory.create(Ast.NodeType.Repeat);
          root.addChild(lhs);
          root.addChild(this.parseExpression(result));
          return root;
        };

        DiceParser.prototype.parseDice = function (result, rollTimes) {
          var root = this.parseDiceRoll(result, rollTimes);
          root = this.parseDiceModifiers(result, root);
          return root;
        };

        DiceParser.prototype.parseDiceRoll = function (result, rollTimes) {
          if (!rollTimes) {
            rollTimes = this.parseSimpleFactor(result);
          }

          var token = this.expectAndConsume(result, lexer_1.TokenType.Identifier);
          var root = Ast.Factory.create(Ast.NodeType.Dice);
          root.addChild(rollTimes);

          switch (token.value) {
            case 'd':
              var sidesToken = this.expectAndConsume(result, lexer_1.TokenType.Number);
              root.addChild(Ast.Factory.create(Ast.NodeType.DiceSides)).setAttribute('value', Number(sidesToken.value));
              break;

            case 'dF':
              root.addChild(Ast.Factory.create(Ast.NodeType.DiceSides)).setAttribute('value', 'fate');
              break;
          }

          return root;
        };

        DiceParser.prototype.parseExplode = function (result, lhs) {
          var root = Ast.Factory.create(Ast.NodeType.Explode);
          root.setAttribute('compound', false);
          root.setAttribute('penetrate', false);

          if (lhs) {
            root.addChild(lhs);
          }

          this.lexer.getNextToken();
          var token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Exclamation) {
            root.setAttribute('compound', true);
            this.lexer.getNextToken(); // Consume second !.
          }

          token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Identifier) {
            if (token.value === 'p') {
              root.setAttribute('penetrate', true);
            }

            this.lexer.getNextToken(); // Consume p.
          }

          var tokenType = this.lexer.peekNextToken().type;

          if (Object.keys(BooleanOperatorMap).indexOf(tokenType.toString()) > -1) {
            root.addChild(this.parseCompareModifier(result));
          }

          return root;
        };

        DiceParser.prototype.parseCritical = function (result, lhs) {
          var root = Ast.Factory.create(Ast.NodeType.Critical);
          root.setAttribute('type', 'success');

          if (lhs) {
            root.addChild(lhs);
          }

          var token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Identifier) {
            switch (token.value) {
              case 'c':
                root.setAttribute('type', 'success');
                break;

              case 'cs':
                root.setAttribute('type', 'success');
                break;

              case 'cf':
                root.setAttribute('type', 'failure');
                break;

              default:
                this.errorMessage(result, "Unknown critical type " + token.value + ". Must be (c|cs|cf).", token);
            }
          }

          this.lexer.getNextToken();
          var tokenType = this.lexer.peekNextToken().type;

          if (Object.keys(BooleanOperatorMap).indexOf(tokenType.toString()) > -1) {
            root.addChild(this.parseCompareModifier(result));
          }

          return root;
        };

        DiceParser.prototype.parseKeep = function (result, lhs) {
          var root = Ast.Factory.create(Ast.NodeType.Keep);
          root.setAttribute('type', 'highest');

          if (lhs) {
            root.addChild(lhs);
          }

          var token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Identifier) {
            switch (token.value) {
              case 'k':
                root.setAttribute('type', 'highest');
                break;

              case 'kh':
                root.setAttribute('type', 'highest');
                break;

              case 'kl':
                root.setAttribute('type', 'lowest');
                break;

              default:
                this.errorMessage(result, "Unknown keep type " + token.value + ". Must be (k|kh|kl).", token);
            }
          }

          this.lexer.getNextToken(); // Consume.

          var tokenType = this.lexer.peekNextToken().type;

          if (tokenType === lexer_1.TokenType.Number || tokenType === lexer_1.TokenType.ParenthesisOpen) {
            root.addChild(this.parseSimpleFactor(result));
          } else {
            root.addChild(Ast.Factory.create(Ast.NodeType.Number).setAttribute('value', 1));
          }

          return root;
        };

        DiceParser.prototype.parseDrop = function (result, lhs) {
          var root = Ast.Factory.create(Ast.NodeType.Drop);
          root.setAttribute('type', 'lowest');

          if (lhs) {
            root.addChild(lhs);
          }

          var token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Identifier) {
            switch (token.value) {
              case 'd':
                root.setAttribute('type', 'lowest');
                break;

              case 'dh':
                root.setAttribute('type', 'highest');
                break;

              case 'dl':
                root.setAttribute('type', 'lowest');
                break;

              default:
                this.errorMessage(result, "Unknown drop type " + token.value + ". Must be (d|dh|dl).", token);
            }
          }

          this.lexer.getNextToken(); // Consume.

          var tokenType = this.lexer.peekNextToken().type;

          if (tokenType === lexer_1.TokenType.Number || tokenType === lexer_1.TokenType.ParenthesisOpen) {
            root.addChild(this.parseSimpleFactor(result));
          }

          return root;
        };

        DiceParser.prototype.parseReroll = function (result, lhs) {
          var root = Ast.Factory.create(Ast.NodeType.Reroll);
          root.setAttribute('once', false);

          if (lhs) {
            root.addChild(lhs);
          }

          var token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Identifier) {
            switch (token.value) {
              case 'r':
                root.setAttribute('once', false);
                break;

              case 'ro':
                root.setAttribute('once', true);
                break;

              default:
                this.errorMessage(result, "Unknown drop type " + token.value + ". Must be (r|ro).", token);
            }
          }

          this.lexer.getNextToken(); // Consume.

          var tokenType = this.lexer.peekNextToken().type;

          if (Object.keys(BooleanOperatorMap).indexOf(tokenType.toString()) > -1) {
            root.addChild(this.parseCompareModifier(result));
          }

          return root;
        };

        DiceParser.prototype.parseSort = function (result, lhs) {
          var root = Ast.Factory.create(Ast.NodeType.Sort);
          root.setAttribute('direction', 'ascending');

          if (lhs) {
            root.addChild(lhs);
          }

          var token = this.lexer.peekNextToken();

          if (token.type === lexer_1.TokenType.Identifier) {
            switch (token.value) {
              case 's':
                root.setAttribute('direction', 'ascending');
                break;

              case 'sa':
                root.setAttribute('direction', 'ascending');
                break;

              case 'sd':
                root.setAttribute('direction', 'descending');
                break;

              default:
                this.errorMessage(result, "Unknown sort type " + token.value + ". Must be (s|sa|sd).", token);
            }
          }

          this.lexer.getNextToken(); // Consume.

          return root;
        };

        DiceParser.prototype.parseCompareModifier = function (result, lhs) {
          var token = this.lexer.peekNextToken();
          var root;

          if (token.type === lexer_1.TokenType.Number) {
            root = Ast.Factory.create(Ast.NodeType.Equal);
          } else if (Object.keys(BooleanOperatorMap).indexOf(token.type.toString()) > -1) {
            root = Ast.Factory.create(BooleanOperatorMap[token.type]);
            this.lexer.getNextToken();
          } else {
            this.errorToken(result, lexer_1.TokenType.Number, token);
          }

          if (lhs) {
            root.addChild(lhs);
          }

          root.addChild(this.parseSimpleFactor(result));
          return root;
        };

        DiceParser.prototype.parseDiceModifiers = function (result, root) {
          while (true) {
            var token = this.lexer.peekNextToken();

            if (Object.keys(BooleanOperatorMap).indexOf(token.type.toString()) > -1) {
              root = this.parseCompareModifier(result, root);
            } else if (token.type === lexer_1.TokenType.Identifier) {
              switch (token.value[0]) {
                case 'c':
                  root = this.parseCritical(result, root);
                  break;

                case 'd':
                  root = this.parseDrop(result, root);
                  break;

                case 'k':
                  root = this.parseKeep(result, root);
                  break;

                case 'r':
                  root = this.parseReroll(result, root);
                  break;

                case 's':
                  root = this.parseSort(result, root);
                  break;

                default:
                  this.errorToken(result, lexer_1.TokenType.Identifier, token);
                  return root;
              }
            } else if (token.type === lexer_1.TokenType.Exclamation) {
              root = this.parseExplode(result, root);
            } else {
              break;
            }
          }

          return root;
        };

        DiceParser.prototype.parseGroupModifiers = function (result, root) {
          while (true) {
            var token = this.lexer.peekNextToken();

            if (Object.keys(BooleanOperatorMap).indexOf(token.type.toString()) > -1) {
              root = this.parseCompareModifier(result, root);
            } else if (token.type === lexer_1.TokenType.Identifier) {
              switch (token.value[0]) {
                case 'd':
                  root = this.parseDrop(result, root);
                  break;

                case 'k':
                  root = this.parseKeep(result, root);
                  break;

                case 's':
                  root = this.parseSort(result, root);
                  break;

                default:
                  this.errorToken(result, lexer_1.TokenType.Identifier, token);
                  return root;
              }
            } else {
              break;
            }
          }

          return root;
        };

        return DiceParser;
      }(basic_parser_class_1.BasicParser);

    exports.DiceParser = DiceParser;

    /***/
  }),

  /***/ 4745:
  /*!*************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/parser/error-message.class.js ***!
  \*************************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var ParserError =
      /** @class */
      function () {
        function ParserError(message, token, stackTrace) {
          this.message = message;
          this.token = token;
          this.stackTrace = stackTrace;
        }

        return ParserError;
      }();

    exports.ParserError = ParserError;

    /***/
  }),

  /***/ 27:
  /*!***********************************************************!*\
  !*** ./node_modules/dice-typescript/dist/parser/index.js ***!
  \***********************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./error-message.class */ 4745));

    __export(__webpack_require__(/*! ./parse-result.class */ 7824));

    __export(__webpack_require__(/*! ./dice-parser.class */ 9051));

    __export(__webpack_require__(/*! ./basic-parser.class */ 4653));

    /***/
  }),

  /***/ 7824:
  /*!************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/parser/parse-result.class.js ***!
  \************************************************************************/
  /***/ ((__unused_webpack_module, exports) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var ParseResult =
      /** @class */
      function () {
        function ParseResult() {
          this.errors = [];
        }

        return ParseResult;
      }();

    exports.ParseResult = ParseResult;

    /***/
  }),

  /***/ 7133:
  /*!***********************************************************************************!*\
  !*** ./node_modules/dice-typescript/dist/random/default-random-provider.class.js ***!
  \***********************************************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    var Random = __webpack_require__(/*! random-js */ 2932);

    var DefaultRandomProvider =
      /** @class */
      function () {
        function DefaultRandomProvider() {
          this.random = new Random(Random.engines.mt19937().autoSeed());
        }

        DefaultRandomProvider.prototype.numberBetween = function (min, max) {
          return this.random.integer(min, max);
        };

        return DefaultRandomProvider;
      }();

    exports.DefaultRandomProvider = DefaultRandomProvider;

    /***/
  }),

  /***/ 1173:
  /*!***********************************************************!*\
  !*** ./node_modules/dice-typescript/dist/random/index.js ***!
  \***********************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

    "use strict";


    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, "__esModule", ({
      value: true
    }));

    __export(__webpack_require__(/*! ./default-random-provider.class */ 7133));

    /***/
  }),

  /***/ 2932:
  /*!**********************************************!*\
  !*** ./node_modules/random-js/lib/random.js ***!
  \**********************************************/
  /***/ (function (module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_RESULT__;/*jshint eqnull:true*/
    (function (root) {
      "use strict";

      var GLOBAL_KEY = "Random";
      var imul = typeof Math.imul !== "function" || Math.imul(0xffffffff, 5) !== -5 ? function (a, b) {
        var ah = a >>> 16 & 0xffff;
        var al = a & 0xffff;
        var bh = b >>> 16 & 0xffff;
        var bl = b & 0xffff; // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value

        return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
      } : Math.imul;
      var stringRepeat = typeof String.prototype.repeat === "function" && "x".repeat(3) === "xxx" ? function (x, y) {
        return x.repeat(y);
      } : function (pattern, count) {
        var result = "";

        while (count > 0) {
          if (count & 1) {
            result += pattern;
          }

          count >>= 1;
          pattern += pattern;
        }

        return result;
      };

      function Random(engine) {
        if (!(this instanceof Random)) {
          return new Random(engine);
        }

        if (engine == null) {
          engine = Random.engines.nativeMath;
        } else if (typeof engine !== "function") {
          throw new TypeError("Expected engine to be a function, got " + typeof engine);
        }

        this.engine = engine;
      }

      var proto = Random.prototype;
      Random.engines = {
        nativeMath: function () {
          return Math.random() * 0x100000000 | 0;
        },
        mt19937: function (Int32Array) {
          // http://en.wikipedia.org/wiki/Mersenne_twister
          function refreshData(data) {
            var k = 0;
            var tmp = 0;

            for (; (k | 0) < 227; k = k + 1 | 0) {
              tmp = data[k] & 0x80000000 | data[k + 1 | 0] & 0x7fffffff;
              data[k] = data[k + 397 | 0] ^ tmp >>> 1 ^ (tmp & 0x1 ? 0x9908b0df : 0);
            }

            for (; (k | 0) < 623; k = k + 1 | 0) {
              tmp = data[k] & 0x80000000 | data[k + 1 | 0] & 0x7fffffff;
              data[k] = data[k - 227 | 0] ^ tmp >>> 1 ^ (tmp & 0x1 ? 0x9908b0df : 0);
            }

            tmp = data[623] & 0x80000000 | data[0] & 0x7fffffff;
            data[623] = data[396] ^ tmp >>> 1 ^ (tmp & 0x1 ? 0x9908b0df : 0);
          }

          function temper(value) {
            value ^= value >>> 11;
            value ^= value << 7 & 0x9d2c5680;
            value ^= value << 15 & 0xefc60000;
            return value ^ value >>> 18;
          }

          function seedWithArray(data, source) {
            var i = 1;
            var j = 0;
            var sourceLength = source.length;
            var k = Math.max(sourceLength, 624) | 0;
            var previous = data[0] | 0;

            for (; (k | 0) > 0; --k) {
              data[i] = previous = (data[i] ^ imul(previous ^ previous >>> 30, 0x0019660d)) + (source[j] | 0) + (j | 0) | 0;
              i = i + 1 | 0;
              ++j;

              if ((i | 0) > 623) {
                data[0] = data[623];
                i = 1;
              }

              if (j >= sourceLength) {
                j = 0;
              }
            }

            for (k = 623; (k | 0) > 0; --k) {
              data[i] = previous = (data[i] ^ imul(previous ^ previous >>> 30, 0x5d588b65)) - i | 0;
              i = i + 1 | 0;

              if ((i | 0) > 623) {
                data[0] = data[623];
                i = 1;
              }
            }

            data[0] = 0x80000000;
          }

          function mt19937() {
            var data = new Int32Array(624);
            var index = 0;
            var uses = 0;

            function next() {
              if ((index | 0) >= 624) {
                refreshData(data);
                index = 0;
              }

              var value = data[index];
              index = index + 1 | 0;
              uses += 1;
              return temper(value) | 0;
            }

            next.getUseCount = function () {
              return uses;
            };

            next.discard = function (count) {
              uses += count;

              if ((index | 0) >= 624) {
                refreshData(data);
                index = 0;
              }

              while (count - index > 624) {
                count -= 624 - index;
                refreshData(data);
                index = 0;
              }

              index = index + count | 0;
              return next;
            };

            next.seed = function (initial) {
              var previous = 0;
              data[0] = previous = initial | 0;

              for (var i = 1; i < 624; i = i + 1 | 0) {
                data[i] = previous = imul(previous ^ previous >>> 30, 0x6c078965) + i | 0;
              }

              index = 624;
              uses = 0;
              return next;
            };

            next.seedWithArray = function (source) {
              next.seed(0x012bd6aa);
              seedWithArray(data, source);
              return next;
            };

            next.autoSeed = function () {
              return next.seedWithArray(Random.generateEntropyArray());
            };

            return next;
          }

          return mt19937;
        }(typeof Int32Array === "function" ? Int32Array : Array),
        browserCrypto: typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function" && typeof Int32Array === "function" ? function () {
          var data = null;
          var index = 128;
          return function () {
            if (index >= 128) {
              if (data === null) {
                data = new Int32Array(128);
              }

              crypto.getRandomValues(data);
              index = 0;
            }

            return data[index++] | 0;
          };
        }() : null
      };

      Random.generateEntropyArray = function () {
        var array = [];
        var engine = Random.engines.nativeMath;

        for (var i = 0; i < 16; ++i) {
          array[i] = engine() | 0;
        }

        array.push(new Date().getTime() | 0);
        return array;
      };

      function returnValue(value) {
        return function () {
          return value;
        };
      } // [-0x80000000, 0x7fffffff]


      Random.int32 = function (engine) {
        return engine() | 0;
      };

      proto.int32 = function () {
        return Random.int32(this.engine);
      }; // [0, 0xffffffff]


      Random.uint32 = function (engine) {
        return engine() >>> 0;
      };

      proto.uint32 = function () {
        return Random.uint32(this.engine);
      }; // [0, 0x1fffffffffffff]


      Random.uint53 = function (engine) {
        var high = engine() & 0x1fffff;
        var low = engine() >>> 0;
        return high * 0x100000000 + low;
      };

      proto.uint53 = function () {
        return Random.uint53(this.engine);
      }; // [0, 0x20000000000000]


      Random.uint53Full = function (engine) {
        while (true) {
          var high = engine() | 0;

          if (high & 0x200000) {
            if ((high & 0x3fffff) === 0x200000 && (engine() | 0) === 0) {
              return 0x20000000000000;
            }
          } else {
            var low = engine() >>> 0;
            return (high & 0x1fffff) * 0x100000000 + low;
          }
        }
      };

      proto.uint53Full = function () {
        return Random.uint53Full(this.engine);
      }; // [-0x20000000000000, 0x1fffffffffffff]


      Random.int53 = function (engine) {
        var high = engine() | 0;
        var low = engine() >>> 0;
        return (high & 0x1fffff) * 0x100000000 + low + (high & 0x200000 ? -0x20000000000000 : 0);
      };

      proto.int53 = function () {
        return Random.int53(this.engine);
      }; // [-0x20000000000000, 0x20000000000000]


      Random.int53Full = function (engine) {
        while (true) {
          var high = engine() | 0;

          if (high & 0x400000) {
            if ((high & 0x7fffff) === 0x400000 && (engine() | 0) === 0) {
              return 0x20000000000000;
            }
          } else {
            var low = engine() >>> 0;
            return (high & 0x1fffff) * 0x100000000 + low + (high & 0x200000 ? -0x20000000000000 : 0);
          }
        }
      };

      proto.int53Full = function () {
        return Random.int53Full(this.engine);
      };

      function add(generate, addend) {
        if (addend === 0) {
          return generate;
        } else {
          return function (engine) {
            return generate(engine) + addend;
          };
        }
      }

      Random.integer = function () {
        function isPowerOfTwoMinusOne(value) {
          return (value + 1 & value) === 0;
        }

        function bitmask(masking) {
          return function (engine) {
            return engine() & masking;
          };
        }

        function downscaleToLoopCheckedRange(range) {
          var extendedRange = range + 1;
          var maximum = extendedRange * Math.floor(0x100000000 / extendedRange);
          return function (engine) {
            var value = 0;

            do {
              value = engine() >>> 0;
            } while (value >= maximum);

            return value % extendedRange;
          };
        }

        function downscaleToRange(range) {
          if (isPowerOfTwoMinusOne(range)) {
            return bitmask(range);
          } else {
            return downscaleToLoopCheckedRange(range);
          }
        }

        function isEvenlyDivisibleByMaxInt32(value) {
          return (value | 0) === 0;
        }

        function upscaleWithHighMasking(masking) {
          return function (engine) {
            var high = engine() & masking;
            var low = engine() >>> 0;
            return high * 0x100000000 + low;
          };
        }

        function upscaleToLoopCheckedRange(extendedRange) {
          var maximum = extendedRange * Math.floor(0x20000000000000 / extendedRange);
          return function (engine) {
            var ret = 0;

            do {
              var high = engine() & 0x1fffff;
              var low = engine() >>> 0;
              ret = high * 0x100000000 + low;
            } while (ret >= maximum);

            return ret % extendedRange;
          };
        }

        function upscaleWithinU53(range) {
          var extendedRange = range + 1;

          if (isEvenlyDivisibleByMaxInt32(extendedRange)) {
            var highRange = (extendedRange / 0x100000000 | 0) - 1;

            if (isPowerOfTwoMinusOne(highRange)) {
              return upscaleWithHighMasking(highRange);
            }
          }

          return upscaleToLoopCheckedRange(extendedRange);
        }

        function upscaleWithinI53AndLoopCheck(min, max) {
          return function (engine) {
            var ret = 0;

            do {
              var high = engine() | 0;
              var low = engine() >>> 0;
              ret = (high & 0x1fffff) * 0x100000000 + low + (high & 0x200000 ? -0x20000000000000 : 0);
            } while (ret < min || ret > max);

            return ret;
          };
        }

        return function (min, max) {
          min = Math.floor(min);
          max = Math.floor(max);

          if (min < -0x20000000000000 || !isFinite(min)) {
            throw new RangeError("Expected min to be at least " + -0x20000000000000);
          } else if (max > 0x20000000000000 || !isFinite(max)) {
            throw new RangeError("Expected max to be at most " + 0x20000000000000);
          }

          var range = max - min;

          if (range <= 0 || !isFinite(range)) {
            return returnValue(min);
          } else if (range === 0xffffffff) {
            if (min === 0) {
              return Random.uint32;
            } else {
              return add(Random.int32, min + 0x80000000);
            }
          } else if (range < 0xffffffff) {
            return add(downscaleToRange(range), min);
          } else if (range === 0x1fffffffffffff) {
            return add(Random.uint53, min);
          } else if (range < 0x1fffffffffffff) {
            return add(upscaleWithinU53(range), min);
          } else if (max - 1 - min === 0x1fffffffffffff) {
            return add(Random.uint53Full, min);
          } else if (min === -0x20000000000000 && max === 0x20000000000000) {
            return Random.int53Full;
          } else if (min === -0x20000000000000 && max === 0x1fffffffffffff) {
            return Random.int53;
          } else if (min === -0x1fffffffffffff && max === 0x20000000000000) {
            return add(Random.int53, 1);
          } else if (max === 0x20000000000000) {
            return add(upscaleWithinI53AndLoopCheck(min - 1, max - 1), 1);
          } else {
            return upscaleWithinI53AndLoopCheck(min, max);
          }
        };
      }();

      proto.integer = function (min, max) {
        return Random.integer(min, max)(this.engine);
      }; // [0, 1] (floating point)


      Random.realZeroToOneInclusive = function (engine) {
        return Random.uint53Full(engine) / 0x20000000000000;
      };

      proto.realZeroToOneInclusive = function () {
        return Random.realZeroToOneInclusive(this.engine);
      }; // [0, 1) (floating point)


      Random.realZeroToOneExclusive = function (engine) {
        return Random.uint53(engine) / 0x20000000000000;
      };

      proto.realZeroToOneExclusive = function () {
        return Random.realZeroToOneExclusive(this.engine);
      };

      Random.real = function () {
        function multiply(generate, multiplier) {
          if (multiplier === 1) {
            return generate;
          } else if (multiplier === 0) {
            return function () {
              return 0;
            };
          } else {
            return function (engine) {
              return generate(engine) * multiplier;
            };
          }
        }

        return function (left, right, inclusive) {
          if (!isFinite(left)) {
            throw new RangeError("Expected left to be a finite number");
          } else if (!isFinite(right)) {
            throw new RangeError("Expected right to be a finite number");
          }

          return add(multiply(inclusive ? Random.realZeroToOneInclusive : Random.realZeroToOneExclusive, right - left), left);
        };
      }();

      proto.real = function (min, max, inclusive) {
        return Random.real(min, max, inclusive)(this.engine);
      };

      Random.bool = function () {
        function isLeastBitTrue(engine) {
          return (engine() & 1) === 1;
        }

        function lessThan(generate, value) {
          return function (engine) {
            return generate(engine) < value;
          };
        }

        function probability(percentage) {
          if (percentage <= 0) {
            return returnValue(false);
          } else if (percentage >= 1) {
            return returnValue(true);
          } else {
            var scaled = percentage * 0x100000000;

            if (scaled % 1 === 0) {
              return lessThan(Random.int32, scaled - 0x80000000 | 0);
            } else {
              return lessThan(Random.uint53, Math.round(percentage * 0x20000000000000));
            }
          }
        }

        return function (numerator, denominator) {
          if (denominator == null) {
            if (numerator == null) {
              return isLeastBitTrue;
            }

            return probability(numerator);
          } else {
            if (numerator <= 0) {
              return returnValue(false);
            } else if (numerator >= denominator) {
              return returnValue(true);
            }

            return lessThan(Random.integer(0, denominator - 1), numerator);
          }
        };
      }();

      proto.bool = function (numerator, denominator) {
        return Random.bool(numerator, denominator)(this.engine);
      };

      function toInteger(value) {
        var number = +value;

        if (number < 0) {
          return Math.ceil(number);
        } else {
          return Math.floor(number);
        }
      }

      function convertSliceArgument(value, length) {
        if (value < 0) {
          return Math.max(value + length, 0);
        } else {
          return Math.min(value, length);
        }
      }

      Random.pick = function (engine, array, begin, end) {
        var length = array.length;
        var start = begin == null ? 0 : convertSliceArgument(toInteger(begin), length);
        var finish = end === void 0 ? length : convertSliceArgument(toInteger(end), length);

        if (start >= finish) {
          return void 0;
        }

        var distribution = Random.integer(start, finish - 1);
        return array[distribution(engine)];
      };

      proto.pick = function (array, begin, end) {
        return Random.pick(this.engine, array, begin, end);
      };

      function returnUndefined() {
        return void 0;
      }

      var slice = Array.prototype.slice;

      Random.picker = function (array, begin, end) {
        var clone = slice.call(array, begin, end);

        if (!clone.length) {
          return returnUndefined;
        }

        var distribution = Random.integer(0, clone.length - 1);
        return function (engine) {
          return clone[distribution(engine)];
        };
      };

      Random.shuffle = function (engine, array, downTo) {
        var length = array.length;

        if (length) {
          if (downTo == null) {
            downTo = 0;
          }

          for (var i = length - 1 >>> 0; i > downTo; --i) {
            var distribution = Random.integer(0, i);
            var j = distribution(engine);

            if (i !== j) {
              var tmp = array[i];
              array[i] = array[j];
              array[j] = tmp;
            }
          }
        }

        return array;
      };

      proto.shuffle = function (array) {
        return Random.shuffle(this.engine, array);
      };

      Random.sample = function (engine, population, sampleSize) {
        if (sampleSize < 0 || sampleSize > population.length || !isFinite(sampleSize)) {
          throw new RangeError("Expected sampleSize to be within 0 and the length of the population");
        }

        if (sampleSize === 0) {
          return [];
        }

        var clone = slice.call(population);
        var length = clone.length;

        if (length === sampleSize) {
          return Random.shuffle(engine, clone, 0);
        }

        var tailLength = length - sampleSize;
        return Random.shuffle(engine, clone, tailLength - 1).slice(tailLength);
      };

      proto.sample = function (population, sampleSize) {
        return Random.sample(this.engine, population, sampleSize);
      };

      Random.die = function (sideCount) {
        return Random.integer(1, sideCount);
      };

      proto.die = function (sideCount) {
        return Random.die(sideCount)(this.engine);
      };

      Random.dice = function (sideCount, dieCount) {
        var distribution = Random.die(sideCount);
        return function (engine) {
          var result = [];
          result.length = dieCount;

          for (var i = 0; i < dieCount; ++i) {
            result[i] = distribution(engine);
          }

          return result;
        };
      };

      proto.dice = function (sideCount, dieCount) {
        return Random.dice(sideCount, dieCount)(this.engine);
      }; // http://en.wikipedia.org/wiki/Universally_unique_identifier


      Random.uuid4 = function () {
        function zeroPad(string, zeroCount) {
          return stringRepeat("0", zeroCount - string.length) + string;
        }

        return function (engine) {
          var a = engine() >>> 0;
          var b = engine() | 0;
          var c = engine() | 0;
          var d = engine() >>> 0;
          return zeroPad(a.toString(16), 8) + "-" + zeroPad((b & 0xffff).toString(16), 4) + "-" + zeroPad((b >> 4 & 0x0fff | 0x4000).toString(16), 4) + "-" + zeroPad((c & 0x3fff | 0x8000).toString(16), 4) + "-" + zeroPad((c >> 4 & 0xffff).toString(16), 4) + zeroPad(d.toString(16), 8);
        };
      }();

      proto.uuid4 = function () {
        return Random.uuid4(this.engine);
      };

      Random.string = function () {
        // has 2**x chars, for faster uniform distribution
        var DEFAULT_STRING_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
        return function (pool) {
          if (pool == null) {
            pool = DEFAULT_STRING_POOL;
          }

          var length = pool.length;

          if (!length) {
            throw new Error("Expected pool not to be an empty string");
          }

          var distribution = Random.integer(0, length - 1);
          return function (engine, length) {
            var result = "";

            for (var i = 0; i < length; ++i) {
              var j = distribution(engine);
              result += pool.charAt(j);
            }

            return result;
          };
        };
      }();

      proto.string = function (length, pool) {
        return Random.string(pool)(this.engine, length);
      };

      Random.hex = function () {
        var LOWER_HEX_POOL = "0123456789abcdef";
        var lowerHex = Random.string(LOWER_HEX_POOL);
        var upperHex = Random.string(LOWER_HEX_POOL.toUpperCase());
        return function (upper) {
          if (upper) {
            return upperHex;
          } else {
            return lowerHex;
          }
        };
      }();

      proto.hex = function (length, upper) {
        return Random.hex(upper)(this.engine, length);
      };

      Random.date = function (start, end) {
        if (!(start instanceof Date)) {
          throw new TypeError("Expected start to be a Date, got " + typeof start);
        } else if (!(end instanceof Date)) {
          throw new TypeError("Expected end to be a Date, got " + typeof end);
        }

        var distribution = Random.integer(start.getTime(), end.getTime());
        return function (engine) {
          return new Date(distribution(engine));
        };
      };

      proto.date = function (start, end) {
        return Random.date(start, end)(this.engine);
      };

      if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
          return Random;
        }).call(exports, __webpack_require__, exports, module),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {
      }
    })(this);

    /***/
  }),

  /***/ 51:
  /*!*******************************************************************************!*\
  !*** ./src/app/pages/dices/combat-dice/combat-dice.component.scss?ngResource ***!
  \*******************************************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "ion-thumbnail.dices {\n  display: inline-block;\n  margin-right: 15px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJhdC1kaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoiY29tYmF0LWRpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRodW1ibmFpbC5kaWNlcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */";

    /***/
  }),

  /***/ 6853:
  /*!*************************************************************************!*\
  !*** ./src/app/pages/dices/d20-dice/d20-dice.component.scss?ngResource ***!
  \*************************************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "ion-thumbnail.dices {\n  display: inline-block;\n  margin-right: 15px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImQyMC1kaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoiZDIwLWRpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRodW1ibmFpbC5kaWNlcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */";

    /***/
  }),

  /***/ 4708:
  /*!********************************************************!*\
  !*** ./src/app/pages/dices/dices.page.scss?ngResource ***!
  \********************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "/*  #Style Expandable - List big image\n===========================================*/\nli {\n  list-style-type: none;\n}\n[item-accordion] {\n  height: 0;\n  display: block !important;\n  transition: all 300ms;\n  overflow: hidden;\n}\n[item-accordion].active {\n  height: 450px !important;\n}\n[default-item-active] {\n  margin: 8px 0 !important;\n  width: calc(100% - 24px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs0Q0FBQTtBQUVBO0VBQ0UscUJBQUE7QUFDRjtBQUdBO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSx3QkFBQTtBQUFKO0FBSUE7RUFDRSx3QkFBQTtFQUNBLG1DQUFBO0FBREYiLCJmaWxlIjoiZGljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogICNTdHlsZSBFeHBhbmRhYmxlIC0gTGlzdCBiaWcgaW1hZ2VcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi8vIExpc3QgYmlnIGltYWdlIEJvZHlcclxuW2l0ZW0tYWNjb3JkaW9uXSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbltkZWZhdWx0LWl0ZW0tYWN0aXZlXSB7XHJcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

    /***/
  }),

  /***/ 7760:
  /*!*******************************************************************************!*\
  !*** ./src/app/pages/dices/target-dice/target-dice.component.scss?ngResource ***!
  \*******************************************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "ion-thumbnail.dices {\n  display: inline-block;\n  margin-right: 15px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmdldC1kaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoidGFyZ2V0LWRpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRodW1ibmFpbC5kaWNlcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */";

    /***/
  }),

  /***/ 2977:
  /*!*******************************************************************************!*\
  !*** ./src/app/pages/dices/combat-dice/combat-dice.component.html?ngResource ***!
  \*******************************************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "<ion-card>\r\n  <ion-card-content>\r\n    <ion-item>\r\n      <ion-label>Nombre de dès</ion-label>\r\n      <ion-input type=\"number\" name=\"combatDiceCount\" [(ngModel)]=\"combatDiceCount\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"rollCombat()\">Lancer</ion-button>\r\n\r\n    <ion-list *ngIf=\"combatDiceChildren.length > 0\">\r\n      <ion-thumbnail class=\"dices\" *ngFor=\"let child of combatDiceChildren; let i = index\"\r\n                     [attr.data-index]=\"i\">\r\n        <img [src]=\"'/assets/fallout-dice/side' + child.getAttribute('value') + '.png'\"\r\n             [alt]=\"child.getAttribute('value')\"/>\r\n\r\n      </ion-thumbnail>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

    /***/
  }),

  /***/ 8551:
  /*!*************************************************************************!*\
  !*** ./src/app/pages/dices/d20-dice/d20-dice.component.html?ngResource ***!
  \*************************************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "<ion-card>\r\n  <ion-card-content>\r\n    <ion-item>\r\n      <ion-label>Nombre de dès</ion-label>\r\n      <ion-input type=\"number\" name=\"combatDiceCount\" [(ngModel)]=\"d20DiceCount\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"rollD20()\">Lancer</ion-button>\r\n\r\n    <ion-list *ngIf=\"d20DiceResult != null\">\r\n      <ion-list-header>\r\n        <small>Total : {{d20DiceResult.total}}</small>\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let child of d20DiceChildren\">\r\n        {{child.getAttribute('value')}}\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

    /***/
  }),

  /***/ 4302:
  /*!********************************************************!*\
  !*** ./src/app/pages/dices/dices.page.html?ngResource ***!
  \********************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "<ion-app>\r\n\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">Lancer de dès</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ion-list class=\"ion-padding-horizontal\">\r\n            <ul class=\"collapsible ion-no-padding\">\r\n              <li class=\"ion-margin-top border border-radius\" *ngFor=\"let section of sections\">\r\n                <div class=\"collapsible-header\" (click)=\"toggleGroup(section)\">\r\n                  <ion-item lines=\"none\" class=\"default-item\">\r\n                    <ion-label>\r\n                      <h1 class=\"text-color-primary text-size-lg ion-text-wrap\">{{section.label}}</h1>\r\n                    </ion-label>\r\n                    <ion-icon *ngIf=\"!section.opened\" class=\"icon-color-accent\"\r\n                              name=\"chevron-forward-circle\"></ion-icon>\r\n                    <ion-icon *ngIf=\"section.opened\" class=\"icon-color-primary\" name=\"chevron-down-circle\"></ion-icon>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"item-accordion\" [ngClass]=\"{'active': section.opened }\" [hidden]=\"!section.opened\">\r\n                  <ng-container [ngSwitch]=\"section.type\">\r\n                    <app-combat-dice *ngSwitchCase=\"'COMBATDICE'\"></app-combat-dice>\r\n                    <app-d20-dice *ngSwitchCase=\"'D20DICE'\"></app-d20-dice>\r\n                    <app-target-dice *ngSwitchCase=\"'TARGETDICE'\"></app-target-dice>\r\n                  </ng-container>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n";

    /***/
  }),

  /***/ 7468:
  /*!*******************************************************************************!*\
  !*** ./src/app/pages/dices/target-dice/target-dice.component.html?ngResource ***!
  \*******************************************************************************/
  /***/ ((module) => {

    "use strict";
    module.exports = "<ion-card>\r\n  <ion-card-content>\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"HUMAN\">\r\n      <ion-segment-button value=\"HUMAN\">\r\n        <ion-label>Humain</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"QUADRUPEDE\">\r\n        <ion-label>Quadrupède</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"FLYINGINSECT\">\r\n        <ion-label>Insecte volant</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"ROBOT\">\r\n        <ion-label>Robot</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"rollTarget()\">Lancer</ion-button>\r\n\r\n    <ion-item *ngIf=\"targetDiceResult != null\">\r\n      {{target}} &nbsp; <small>({{this.targetDiceResult.total}})</small>\r\n    </ion-item>\r\n\r\n  </ion-card-content>\r\n</ion-card>\r\n";

    /***/
  })

}]);
//# sourceMappingURL=src_app_pages_dices_dices_module_ts.js.map
