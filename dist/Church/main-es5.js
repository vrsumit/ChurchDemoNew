function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-registration/student-registration.component */
    "./src/app/student-registration/student-registration.component.ts");
    /* harmony import */


    var _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cwc-registration/cwc-registration.component */
    "./src/app/cwc-registration/cwc-registration.component.ts");
    /* harmony import */


    var _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ovbs-registration/ovbs-registration.component */
    "./src/app/ovbs-registration/ovbs-registration.component.ts");
    /* harmony import */


    var _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./diploma-exam-registration/diploma-exam-registration.component */
    "./src/app/diploma-exam-registration/diploma-exam-registration.component.ts");
    /* harmony import */


    var _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ttc-registration/ttc-registration.component */
    "./src/app/ttc-registration/ttc-registration.component.ts");
    /* harmony import */


    var _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./textbook-order/textbook-order.component */
    "./src/app/textbook-order/textbook-order.component.ts");
    /* harmony import */


    var src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/portal/portal.component */
    "./src/app/portal/portal.component.ts");
    /* harmony import */


    var _resources_resources_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./resources/resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events.component.ts");
    /* harmony import */


    var _links_links_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./links/links.component */
    "./src/app/links/links.component.ts");
    /* harmony import */


    var _training_training_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./training/training.component */
    "./src/app/training/training.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }, {
      path: 'signin',
      component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }, {
      path: 'register',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    }, {
      path: 'studentRegistration',
      component: _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_5__["StudentRegistration"]
    }, {
      path: 'cwcRegistration',
      component: _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_6__["CWCRegistrationComponent"]
    }, {
      path: 'ovbsRegistration',
      component: _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_7__["OVBSRegistrationComponent"]
    }, {
      path: 'diplomaRegistration',
      component: _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_8__["DiplomaExamRegistrationComponent"]
    }, {
      path: 'ttcRegistration',
      component: _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_9__["TTCRegistrationComponent"]
    }, {
      path: 'textbookOrder',
      component: _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_10__["TextbookOrderComponent"]
    }, {
      path: 'portal',
      component: src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_11__["PortalComponent"]
    }, {
      path: 'resources',
      component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_12__["ResourcesComponent"]
    }, {
      path: 'events',
      component: _events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"]
    }, {
      path: 'links',
      component: _links_links_component__WEBPACK_IMPORTED_MODULE_14__["LinksComponent"]
    }, {
      path: 'training',
      component: _training_training_component__WEBPACK_IMPORTED_MODULE_15__["TrainingComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["home"];
    };

    var _c1 = function _c1() {
      return ["studentRegistration"];
    };

    var _c2 = function _c2() {
      return ["cwcRegistration"];
    };

    var _c3 = function _c3() {
      return ["ovbsRegistration"];
    };

    var _c4 = function _c4() {
      return ["diplomaRegistration"];
    };

    var _c5 = function _c5() {
      return ["ttcRegistration"];
    };

    var _c6 = function _c6() {
      return ["textbookOrder"];
    };

    var _c7 = function _c7() {
      return ["register"];
    };

    var _c8 = function _c8() {
      return ["signin"];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Church';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 46,
      vars: 18,
      consts: [[1, "page-header-wrapper"], [1, "head-container"], [1, "logo-wrapper1"], ["src", "assets/logo1.png", "alt", ""], [1, "logo-wrapper2"], ["src", "assets/logo2.png", "alt", ""], [1, "logo-center-text"], [1, "clear"], [1, "navigation-wrapper"], ["id", "mainNavId", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark", 2, "background-color", "#84130d!important"], [1, "container-fluid"], [1, "nav", "navbar-nav"], ["id", "homeTab", 1, "active", "nav-item"], [1, "nav-link", 3, "routerLink"], ["id", "regTab", 1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "fontFam"], [1, "dropdown-item", 3, "routerLink"], [1, "text-right"], [1, "nav", "navbar-nav", "navbar-right"], ["id", "signinTab", 1, "nav-item"], ["id", "loginTab", 1, "nav-item"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Malankara Orthodox Syrian Church ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Diocese of South-West America");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " REGISTRATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Student Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CWC Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "OVBS Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Diploma Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TTC Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Text Book Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " SIGN UP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " LOGIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c8));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["inputCls[_ngcontent-%COMP%]\r\n{\r\n    border: 2px solid;\r\n}\r\n\r\ndiv.logo-wrapper1[_ngcontent-%COMP%]{text-align: center;margin: 0px 10px;max-width: 100%;float: left;}\r\n\r\ndiv.logo-wrapper1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display: block;margin: 0px auto;width: 40%;}\r\n\r\ndiv.logo-wrapper1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin: 0px;}\r\n\r\ndiv.logo-wrapper2[_ngcontent-%COMP%]{text-align: center;margin: 0px 10px;max-width: 100%;float: right;}\r\n\r\ndiv.logo-wrapper2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display: block;margin: 0px auto;width: 40%;}\r\n\r\ndiv.logo-wrapper2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin: 0px;}\r\n\r\ndiv.logo-center-text[_ngcontent-%COMP%]{\r\n    float:center;text-align: center;margin-left: 10px;margin-right: 10px;\r\n    padding-top: 30px;\r\n    color: white;\r\n    font-size: 22px;\r\n    font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;\r\n}\r\n\r\ndiv.logo-center-text-content[_ngcontent-%COMP%]{ font-size: 12px; }\r\n\r\n.head-container[_ngcontent-%COMP%] {\r\n    margin: 0px auto;\r\n    padding: 0px 10px;\r\n    max-width: 960px;\r\n    position: relative;\r\n}\r\n\r\ndiv.navigation-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0px 10px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%]{\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\ndiv.page-header-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    left: 0px;right: 0px;z-index: 99;\r\n    \r\n\tfilter: alpha(opacity=65);\r\n\t\r\n\ttop: 0px;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n\tleft: 0px;\r\n    background-color: #000000b5;\r\n    padding-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLGtCQUFrQixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDOztBQUNsRixzQkFBc0IsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQzs7QUFDakUscUJBQXFCLFdBQVcsQ0FBQzs7QUFFakMsa0JBQWtCLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7O0FBQ25GLHNCQUFzQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDOztBQUNqRSxxQkFBcUIsV0FBVyxDQUFDOztBQUVqQztJQUNJLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0I7SUFDcEUsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMERBQTBEO0FBQzlEOztBQUNBLDhCQUE4QixlQUFlLEVBQUU7O0FBRS9DO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXO0lBQ2hDLG1CQUFtQjtDQUN0Qix5QkFBeUI7Q0FDekIsd0JBQXdCO0NBQ3hCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLFNBQVM7SUFDTiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBOzs7Ozs7Ozs7R0FTRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRDbHNcclxue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuXHJcbmRpdi5sb2dvLXdyYXBwZXIxe3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW46IDBweCAxMHB4O21heC13aWR0aDogMTAwJTtmbG9hdDogbGVmdDt9IFxyXG5kaXYubG9nby13cmFwcGVyMSBpbWd7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiAwcHggYXV0bzt3aWR0aDogNDAlO30gXHJcbmRpdi5sb2dvLXdyYXBwZXIxIGgxe21hcmdpbjogMHB4O30gXHJcblxyXG5kaXYubG9nby13cmFwcGVyMnt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiAwcHggMTBweDttYXgtd2lkdGg6IDEwMCU7ZmxvYXQ6IHJpZ2h0O30gXHJcbmRpdi5sb2dvLXdyYXBwZXIyIGltZ3tkaXNwbGF5OiBibG9jazttYXJnaW46IDBweCBhdXRvO3dpZHRoOiA0MCU7fSBcclxuZGl2LmxvZ28td3JhcHBlcjIgaDF7bWFyZ2luOiAwcHg7fSBcclxuXHJcbmRpdi5sb2dvLWNlbnRlci10ZXh0e1xyXG4gICAgZmxvYXQ6Y2VudGVyO3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tbGVmdDogMTBweDttYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxIZWx2ZXRpY2EsQXJpYWwsTHVjaWRhLHNhbnMtc2VyaWY7XHJcbn1cclxuZGl2LmxvZ28tY2VudGVyLXRleHQtY29udGVudHsgZm9udC1zaXplOiAxMnB4OyB9XHJcblxyXG4uaGVhZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuZGl2Lm5hdmlnYXRpb24td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNsZWFye1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuZGl2LnBhZ2UtaGVhZGVyLXdyYXBwZXJ7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBsZWZ0OiAwcHg7cmlnaHQ6IDBweDt6LWluZGV4OiA5OTtcclxuICAgIC8qIG9wYWNpdHk6IDAuNjU7ICovXHJcblx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTtcclxuXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcblx0dG9wOiAwcHg7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRib3R0b206IDBweDtcclxuXHRsZWZ0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogZGl2LnBhZ2UtaGVhZGVyLW92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDBweDtcclxuXHRyaWdodDogMHB4O1xyXG5cdGJvdHRvbTogMHB4O1xyXG5cdGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn0gKi9cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student-registration/student-registration.component */
    "./src/app/student-registration/student-registration.component.ts");
    /* harmony import */


    var _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./cwc-registration/cwc-registration.component */
    "./src/app/cwc-registration/cwc-registration.component.ts");
    /* harmony import */


    var _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ovbs-registration/ovbs-registration.component */
    "./src/app/ovbs-registration/ovbs-registration.component.ts");
    /* harmony import */


    var _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./diploma-exam-registration/diploma-exam-registration.component */
    "./src/app/diploma-exam-registration/diploma-exam-registration.component.ts");
    /* harmony import */


    var _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ttc-registration/ttc-registration.component */
    "./src/app/ttc-registration/ttc-registration.component.ts");
    /* harmony import */


    var _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./textbook-order/textbook-order.component */
    "./src/app/textbook-order/textbook-order.component.ts");
    /* harmony import */


    var src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/portal/portal.component */
    "./src/app/portal/portal.component.ts");
    /* harmony import */


    var _resources_resources_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./resources/resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events.component.ts");
    /* harmony import */


    var _links_links_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./links/links.component */
    "./src/app/links/links.component.ts");
    /* harmony import */


    var _training_training_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./training/training.component */
    "./src/app/training/training.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_8__["StudentRegistration"], _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_9__["CWCRegistrationComponent"], _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_10__["OVBSRegistrationComponent"], _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_11__["DiplomaExamRegistrationComponent"], _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_12__["TTCRegistrationComponent"], _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_13__["TextbookOrderComponent"], src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_14__["PortalComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_15__["ResourcesComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_16__["EventsComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_17__["LinksComponent"], _training_training_component__WEBPACK_IMPORTED_MODULE_18__["TrainingComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], src_app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _student_registration_student_registration_component__WEBPACK_IMPORTED_MODULE_8__["StudentRegistration"], _cwc_registration_cwc_registration_component__WEBPACK_IMPORTED_MODULE_9__["CWCRegistrationComponent"], _ovbs_registration_ovbs_registration_component__WEBPACK_IMPORTED_MODULE_10__["OVBSRegistrationComponent"], _diploma_exam_registration_diploma_exam_registration_component__WEBPACK_IMPORTED_MODULE_11__["DiplomaExamRegistrationComponent"], _ttc_registration_ttc_registration_component__WEBPACK_IMPORTED_MODULE_12__["TTCRegistrationComponent"], _textbook_order_textbook_order_component__WEBPACK_IMPORTED_MODULE_13__["TextbookOrderComponent"], src_app_portal_portal_component__WEBPACK_IMPORTED_MODULE_14__["PortalComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_15__["ResourcesComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_16__["EventsComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_17__["LinksComponent"], _training_training_component__WEBPACK_IMPORTED_MODULE_18__["TrainingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cwc-registration/cwc-registration.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/cwc-registration/cwc-registration.component.ts ***!
    \****************************************************************/

  /*! exports provided: CWCRegistrationComponent */

  /***/
  function srcAppCwcRegistrationCwcRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CWCRegistrationComponent", function () {
      return CWCRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CWCRegistrationComponent =
    /*#__PURE__*/
    function () {
      function CWCRegistrationComponent(formBuilder, router) {
        _classCallCheck(this, CWCRegistrationComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.CWCregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          parish: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          tcenter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          loc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          cwcdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(CWCRegistrationComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.CWCregistrationForm.invalid) {
            return;
          }

          ;
        }
      }, {
        key: "submit",
        value: function submit() {
          //   $("#subscribeForm").validate({
          //     rules: {
          //         list: {
          //             required: true,
          //             minlength: 1
          //         }
          //      }
          //  });
          if (this.CWCregistrationForm.invalid) {
            return;
          } // else{
          //   this.router.navigate(['/signin']);
          // }
          //this.CWCregistrationForm.reset(); 

        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.CWCregistrationForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parish: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tcenter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            group: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cwcdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          $("#regTab").addClass("active");
          $("#homeTab").removeClass("active"); // $(".popover-dismiss").popover({
          //   trigger: 'focus'
          // });
        }
      }]);

      return CWCRegistrationComponent;
    }();

    CWCRegistrationComponent.ɵfac = function CWCRegistrationComponent_Factory(t) {
      return new (t || CWCRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CWCRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CWCRegistrationComponent,
      selectors: [["app-cwc-registration"]],
      decls: 142,
      vars: 1,
      consts: [[1, "container", "col-md-6", "col-sm-6", "border", "mt-2rem", "mb-1rem", "card", "p-3", "bg-light"], [1, "text-center", "header-blue"], ["id", "subscribeForm", 3, "formGroup", "ngSubmit"], [1, ""], [1, "row"], [1, "form-group", "col-4"], ["type", "text", "formControlName", "fname", "placeholder", "Enter First Name", "required", "", 1, "form-control", "form-control-sm"], ["type", "text", "id", "mname", "placeholder", "Enter Middle Name", "name", "mname", "required", "", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["type", "text", "formControlName", "lname", "id", "lname", "placeholder", "Enter Last Name", "name", "lname", "required", "", 1, "form-control", "form-control-sm"], [1, "form-group"], ["for", "email", 1, ""], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter Email ID", "name", "email", "required", "", 1, "form-control", "form-control-sm"], [1, "form-row"], [1, "form-group", "col"], ["for", "p1"], ["formControlName", "p1", "id", "p1", 1, "form-control", "form-control-sm"], [1, "form-group", "col-md-6"], ["for", "grade1"], ["formControlName", "grade1", "id", "grade1", 1, "form-control", "form-control-sm"], ["for", "center1"], ["formControlName", "center1", "id", "center1", 1, "form-control", "form-control-sm"], ["for", "test1", 1, ""], ["formControlName", "test1", "id", "test1", 1, "form-control", "form-control-sm"], ["placeholder", "Select date", "type", "date", "formControlName", "cwcdate", 1, "form-control", "form-control-sm", "datepicker"], ["for", "sel1"], ["formControlName", "sel1", "id", "sel1", 1, "form-control", "form-control-sm"], [1, "form-check"], [1, "form-check-label"], ["name", "list", "type", "checkbox", "data-toggle", "popover", "data-trigger", "hover", "data-content", "Some content", "value", "", 1, "form-check-input"], ["name", "list", "type", "checkbox", "value", "", 1, "form-check-input"], ["type", "submit", 1, "btn", "btn-primary", "btn-blue", "float-right", "btn-primary-spacing", "mt-3", 3, "click"]],
      template: function CWCRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CWC REGISTRATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CWCRegistrationComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Student's Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Parish Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Parish Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Teachers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Principals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Staff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Student's Current Grade:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select Student's Current Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Grade Pre-KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Grade KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Grade 1st");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Grade 2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Grade 3rd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Grade 4th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Grade 5th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Grade 6th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Grade 7th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Grade 8th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Grade 9th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Grade 10th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Grade 11th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Grade 12th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Testing Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Select Testing Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Center 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Center 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Center 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Center 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Center 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Location at which you will be testing:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Select the location at which you will be testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Location 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Location 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Location 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Location 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Location 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " CWC date : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Group of the Student's Registration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Select the Group of the Student's Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Group 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Group 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Group 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Group 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Drawing ( Drawing is open to all groups ) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Bible Quiz ( Bible Quiz is open to Groups 2-7 ) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Essay Writing ( Essay Writing is open to Groups 4 -7 ) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Story Writing ( Story Writing is open to Groups 4 -7 ) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Poetry Writing ( Poetry is open to Groups 4 -7 ) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CWCRegistrationComponent_Template_button_click_140_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.CWCregistrationForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N3Yy1yZWdpc3RyYXRpb24vY3djLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CWCRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cwc-registration',
          templateUrl: './cwc-registration.component.html',
          styleUrls: ['./cwc-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/diploma-exam-registration/diploma-exam-registration.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/diploma-exam-registration/diploma-exam-registration.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DiplomaExamRegistrationComponent */

  /***/
  function srcAppDiplomaExamRegistrationDiplomaExamRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiplomaExamRegistrationComponent", function () {
      return DiplomaExamRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DiplomaExamRegistrationComponent_div_48_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DiplomaExamRegistrationComponent_div_48_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DiplomaExamRegistrationComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiplomaExamRegistrationComponent_div_48_div_1_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DiplomaExamRegistrationComponent_div_48_div_2_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.pemail.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.pemail.errors.email);
      }
    }

    function DiplomaExamRegistrationComponent_div_67_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Student's Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DiplomaExamRegistrationComponent_div_67_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DiplomaExamRegistrationComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiplomaExamRegistrationComponent_div_67_div_1_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DiplomaExamRegistrationComponent_div_67_div_2_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.f.semail.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.f.semail.errors.email);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var DiplomaExamRegistrationComponent =
    /*#__PURE__*/
    function () {
      function DiplomaExamRegistrationComponent(formBuilder, router) {
        _classCallCheck(this, DiplomaExamRegistrationComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.DEregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          prname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          semail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sele1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(DiplomaExamRegistrationComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.DEregistrationForm.invalid) {
            return;
          } else {
            alert("You have registered Successfully");
            this.DEregistrationForm.reset();
          }
        }
      }, {
        key: "register",
        value: function register() {
          //   $("#subscribeForm").validate({
          //     rules: {
          //         list: {
          //             required: true,
          //             minlength: 1
          //         }
          //      }
          //  });
          if (this.DEregistrationForm.invalid) {
            return;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.DEregistrationForm = this.formBuilder.group({
            pname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pemail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            phonenum1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonenum2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            semail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            mobile1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.DEregistrationForm.controls;
        }
      }]);

      return DiplomaExamRegistrationComponent;
    }();

    DiplomaExamRegistrationComponent.ɵfac = function DiplomaExamRegistrationComponent_Factory(t) {
      return new (t || DiplomaExamRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DiplomaExamRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DiplomaExamRegistrationComponent,
      selectors: [["app-diploma-exam-registration"]],
      decls: 82,
      vars: 9,
      consts: [[1, "container", "col-md-6", "col-sm-6", "border", "mt-2rem", "mb-1rem", "card", "p-3", "bg-light"], [1, "text-center", "header-blue"], ["id", "subscribeForm", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "pname"], ["type", "text", "id", "pname", "formControlName", "pname", "placeholder", "Enter Parish Name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["for", "addr"], [1, "row"], [1, "form-group", "col-12"], ["type", "text", "placeholder", "Enter Your Address", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your Landmark", 1, "form-control", "form-control-sm"], [1, "form-group", "col-6"], ["type", "text", "placeholder", "Enter Your City", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your State", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your Zip code", 1, "form-control", "form-control-sm"], [1, "form-control", "form-control-sm"], ["for", "prname", 1, ""], ["type", "text", "id", "prname", "formControlName", "prname", "placeholder", "Enter Principal's' Name", 1, "form-control", "form-control-sm"], ["for", "vname", 1, ""], ["type", "text", "id", "vname", "formControlName", "vname", "placeholder", "Enter Vicar Name", 1, "form-control", "form-control-sm"], ["for", "pemail"], ["type", "email", "id", "pemail", "formControlName", "pemail", "placeholder", "Enter Principal's Email ID", "required", "", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "mobile1"], ["type", "text", "formControlName", "mobile1", "placeholder", "Enter Principal's Contact Number", 1, "form-control", "form-control-sm"], ["for", "vname"], ["type", "text", "id", "sname", "formControlName", "sname", "placeholder", "Enter Student's' Name", 1, "form-control", "form-control-sm"], ["for", "phonenum1"], ["type", "text", "formControlName", "phonenum1", "placeholder", "Enter Student's Contact Number", 1, "form-control", "form-control-sm"], ["for", "semail"], ["type", "email", "id", "semail", "formControlName", "semail", "placeholder", "Enter Student's Email ID", "required", "", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "form-group", "w-50"], ["for", "sele1"], ["formControlName", "group", "id", "sele1", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-blue", "btn-primary", "float-right", 3, "click"], [4, "ngIf"]],
      template: function DiplomaExamRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Diploma Exam Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DiplomaExamRegistrationComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Parish Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Parish Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "England");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name of Principal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Name of Vicar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Principal's Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DiplomaExamRegistrationComponent_div_48_Template, 3, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Principal's Contact Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Name of Student:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Student's Phone Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Student's Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DiplomaExamRegistrationComponent_div_67_Template, 3, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Select Exam Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "22/12/2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "01/01/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "13/04/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "28/07/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiplomaExamRegistrationComponent_Template_button_click_80_listener($event) {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.DEregistrationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.pemail.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.pemail.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.semail.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.semail.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcGxvbWEtZXhhbS1yZWdpc3RyYXRpb24vZGlwbG9tYS1leGFtLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiplomaExamRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-diploma-exam-registration',
          templateUrl: './diploma-exam-registration.component.html',
          styleUrls: ['./diploma-exam-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/events/events.component.ts":
  /*!********************************************!*\
    !*** ./src/app/events/events.component.ts ***!
    \********************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/portal"];
    };

    var _c1 = function _c1() {
      return ["/resources"];
    };

    var _c2 = function _c2() {
      return ["/links"];
    };

    var _c3 = function _c3() {
      return ["/training"];
    };

    var EventsComponent =
    /*#__PURE__*/
    function () {
      function EventsComponent() {
        _classCallCheck(this, EventsComponent);
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".page-header-wrapper").hide();
          var user = localStorage.getItem("user");

          if (user === "event_owner") {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".total-people").text("2 Events");
          }

          jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
        }
      }, {
        key: "setClasses",
        value: function setClasses(flag) {
          var user = localStorage.getItem("user");
          var classes = "";

          if (flag === 1 && user === "event_owner") {
            classes = "d-none";
          }

          return classes;
        }
      }, {
        key: "openPerson",
        value: function openPerson(flag) {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").hide();

          if (flag === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
          }
        }
      }, {
        key: "showEvents",
        value: function showEvents(flag) {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ɵfac = function EventsComponent_Factory(t) {
      return new (t || EventsComponent)();
    };

    EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventsComponent,
      selectors: [["app-events"]],
      decls: 283,
      vars: 13,
      consts: [["id", "portalNavId", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark", "fixed-top", 2, "background-color", "#395c80!important"], ["href", "#", 1, "navbar-brand"], [1, "container-fluid"], [1, "nav", "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "active"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "fontFam"], ["data-toggle", "modal", "data-target", "#modalUpload", 1, "dropdown-item"], ["href", "#", "data-toggle", "dropdown", "role", "button", 1, "dropdown-toggle", "nav-link", 2, "margin-left", "-21%"], ["aria-hidden", "true", 1, "fa", "fa-bell", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-2x", 2, "margin-left", "10%"], [1, "dropdown-menu", "notify-drop", "fontFam", 2, "margin-left", "-155%"], [1, "notify-drop-title"], [1, "text-center"], [1, "notify-drop-footer", "text-center"], ["href", "", "data-toggle", "modal", "data-target", "#modalNotify", 1, "dropdown-item"], [1, "", 2, "padding-top", "6rem"], [1, "pl-wrapper", "mb-5"], [1, "total-people"], [1, "p-table"], [3, "ngClass"], [1, ""], [1, "pull-left", "mr-3", "mt-0_5em", "p-icon"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "pull-left", "p-name", "e-width"], ["href", "javascript:void(0);", 1, "link-blue", 3, "click"], [1, "mt-0_5em", "fw-500"], ["href", "javascript:void(0);", 1, "link-blue"], ["id", "flag1", 1, "per-wrapper", "mb-5"], [1, "per-profile-top"], [1, "row"], [1, "col-sm-6"], [1, "person-name"], [1, "person-details"], [1, "person-details-item"], [1, "pl5"], [1, "col-sm-12", "e-total-att"], [1, "row", "person-secondary-details"], [1, "col"], [1, "table", "no_border", "table-condensed", "person_details", "per-table"], [1, "e-border-none"], ["aria-hidden", "true", 1, "fa", "fa-check", "e-yes"], ["aria-hidden", "true", 1, "fa", "fa-times", "e-no"], ["id", "flag2", 1, "per-wrapper", "mb-5"], ["id", "modalUpload", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "modalNotify", "role", "dialog", 1, "modal", "fade"], [1, "modal-header", 2, "background-color", "lavender"], ["href", "/lesson"], [1, "row", "mt-2"], ["id", "commentId", 1, "hide", "mt-1", "row"], ["rows", "3", "placeholder", "Comment here..", 1, "form-control", "mt-4"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "-2%"], [1, "modal-footer", 2, "height", "3rem"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "background-color", "lavender"]],
      template: function EventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CHURCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DASHBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_a_click_12_listener($event) {
            return ctx.showEvents(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPETITION/EXAMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TRAINING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UPLOAD FILE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Errata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teacher's Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Worksheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Review Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "You have 2 notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 1.User 1 uploded pdf for lesson 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2.User 1 uploded pdf for lesson 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "5 Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_a_click_69_listener($event) {
            return ctx.openPerson(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Sunday Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "20th Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Centralized Writting Competition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "25th Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Children's Church");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "5th March 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_a_click_96_listener($event) {
            return ctx.openPerson(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Teachers Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "29th Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Worship with Communion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "20th March 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sunday Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "20th Jan 2020 - 24th Jan 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Number of Attenders : 6 out of 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "table", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Attenders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "20th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "21st Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "22nd Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "23rd Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "24th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Austen, Kate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Baggins, Frodo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Boseman, Chadwick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Teachers Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "31st Jan 2020 - 3rd Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Number of Attenders : 6 out of 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "table", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Attenders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "31st Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "1st Feb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "2nd Feb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "3rd Feb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Flintstone, Pebbles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Flintstone, Wilma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Halpert, Cecelia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Upload PDF/Audio/Video File Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "You can Approve/Delete uploded files here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "View Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "textarea", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Notify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".pl-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    background: #fff;\r\n    \r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.pd-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n}\r\n\r\n.total-people[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 1.3em;\r\n    color: #aaa;\r\n}\r\n\r\n.p-table[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    width: 100%;\r\n}\r\n\r\n.p-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-top: 1px solid #f5f5f5;\r\n    padding: 20px;\r\n}\r\n\r\n.p-icon[_ngcontent-%COMP%]{\r\n    color: #395c80;\r\n}\r\n\r\n.p-name[_ngcontent-%COMP%]{\r\n    font-size: 15pt;\r\n}\r\n\r\n.textCenter[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.mt-0_5em[_ngcontent-%COMP%]{\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.fw-500[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\r\n\r\n.e-width[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n}\r\n\r\n.per-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    background: #fff;\r\n    \r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.per-profile-top[_ngcontent-%COMP%] {\r\n    padding-bottom: 2em;\r\n    margin-bottom: 1em;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.per-profile[_ngcontent-%COMP%]{\r\n    max-width: 300px;\r\n    max-height: 200px;\r\n    width: 100%;\r\n    padding: 4px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0,0,0,0.2);\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n.person-name[_ngcontent-%COMP%] {\r\n    margin: 0em 0em 0.4em 0em;\r\n    padding: 0em;\r\n    line-height: 1em;\r\n    font-size: 3em;\r\n}\r\n\r\n.person-details[_ngcontent-%COMP%] {\r\n    margin-left: .3em;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.person-details-item[_ngcontent-%COMP%] {\r\n    margin: .7em 0em;\r\n}\r\n\r\n.person-secondary-details[_ngcontent-%COMP%] {\r\n    color: #999;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.person-secondary-details-head[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n    padding: 0.8em 1em;\r\n    border-radius: 5px;\r\n    background-color: #F4F8FA;\r\n    color: #555861;\r\n}\r\n\r\n.per-table[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #eee;\r\n    color: #999 !important;\r\n}\r\n\r\n.pl5[_ngcontent-%COMP%]{\r\n    padding-left: 5%;\r\n}\r\n\r\n.e-total-att[_ngcontent-%COMP%]{\r\n    padding-bottom: 1em;\r\n    \r\n    \r\n    color: #999;\r\n    font-size: 1.2em;\r\n    \r\n}\r\n\r\n.e-border-none[_ngcontent-%COMP%]{\r\n    border-bottom: none;\r\n}\r\n\r\n.e-yes[_ngcontent-%COMP%]{\r\n    color: #2bbbad;\r\n}\r\n\r\n.e-no[_ngcontent-%COMP%]{\r\n    color: #ff3547;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBR2pDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGwtd3JhcHBlcntcclxuICAgIC8qIG1hcmdpbi10b3A6IDBweDsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA5MHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UyRUFGMDtcclxufVxyXG5cclxuLnBkLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbn1cclxuXHJcbi50b3RhbC1wZW9wbGV7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMS42ZW07ICovXHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5wLXRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnAtdGFibGUgdGR7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnAtaWNvbntcclxuICAgIGNvbG9yOiAjMzk1YzgwO1xyXG59XHJcbi5wLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbn1cclxuXHJcbi50ZXh0Q2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXQtMF81ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG5cclxuLmZ3LTUwMHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5lLXdpZHRoe1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnBlci13cmFwcGVye1xyXG4gICAgLyogbWFyZ2luLXRvcDogMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDkwcHggIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFQUYwO1xyXG59XHJcblxyXG4ucGVyLXByb2ZpbGUtdG9wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLnBlci1wcm9maWxle1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5wZXJzb24tbmFtZSB7XHJcbiAgICBtYXJnaW46IDBlbSAwZW0gMC40ZW0gMGVtO1xyXG4gICAgcGFkZGluZzogMGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4ucGVyc29uLWRldGFpbHMtaXRlbSB7XHJcbiAgICBtYXJnaW46IC43ZW0gMGVtO1xyXG59XHJcblxyXG4ucGVyc29uLXNlY29uZGFyeS1kZXRhaWxzIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLnBlcnNvbi1zZWNvbmRhcnktZGV0YWlscy1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGOEZBO1xyXG4gICAgY29sb3I6ICM1NTU4NjE7XHJcbn1cclxuXHJcbi5wZXItdGFibGV7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbDV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uZS10b3RhbC1hdHR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMmVtOyAqL1xyXG4gICAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7ICovXHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBcclxufVxyXG5cclxuLmUtYm9yZGVyLW5vbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uZS15ZXN7XHJcbiAgICBjb2xvcjogIzJiYmJhZDtcclxufVxyXG5cclxuLmUtbm97XHJcbiAgICBjb2xvcjogI2ZmMzU0NztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-events',
          templateUrl: './events.component.html',
          styleUrls: ['./events.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__("#homeTab").addClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_1__("#regTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_1__("#loginTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_1__("#signinTab").removeClass("active");
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 54,
      vars: 0,
      consts: [[1, "home-header"], [1, "row"], [1, "col-sm-4"], [1, "card"], [1, "card-body", "boxShadow"], [1, "card-title", "fontFam"], [1, "card-text"], ["href", "#", 1, "card-link"], [1, "col-sm-6"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Diocesan Calendar of Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You will get detail information about upcoming events conducted during this year.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "School Of Servant Leadership");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "February, 5th 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Abuses Reporting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Parish services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Respect Life");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Human Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cathalic Mutual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Finance Dept.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Chancery Bulletin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Marriage Tribunal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Prayer of Our CHURCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Heavenly Father, in every age you have been our refuge. Yet again and still, we stand before you asking for your protection on your holy CHURCH For the victims of abuse and their families, pour out your healing and peace. For the bishops of this country, continue to inspire their decisions, and guide them with your Spirit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  width: 100%\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]{\r\n  background-color: #84130d;\r\n  color:white;\r\n  padding: 5px;\r\n}\r\n\r\n.boxShadow[_ngcontent-%COMP%] {\r\n  -webkit-box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important;\r\n  height: 12rem;\r\n}\r\n\r\n.fontFam[_ngcontent-%COMP%] {\r\n  font-family: Helvetica, Arial, sans-serif !important;\r\n    font-size: 13px !important;\r\n}\r\n\r\n.home-header[_ngcontent-%COMP%]{\r\n  padding-top: 1rem;padding-bottom: 4rem;\r\n  margin: 0px auto;\r\n    max-width: 1140px;\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRGQUE0RjtFQUM1RixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxvREFBb0Q7SUFDbEQsMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCLENBQUMsb0JBQW9CO0VBQ3RDLGdCQUFnQjtJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtPmltZyB7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0MTMwZDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5ib3hTaGFkb3cge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsMCwwLDAuMjQpLDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTJyZW07XHJcbn1cclxuLmZvbnRGYW0ge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtaGVhZGVye1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO3BhZGRpbmctYm90dG9tOiA0cmVtO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/links/links.component.ts":
  /*!******************************************!*\
    !*** ./src/app/links/links.component.ts ***!
    \******************************************/

  /*! exports provided: LinksComponent */

  /***/
  function srcAppLinksLinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinksComponent", function () {
      return LinksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/portal"];
    };

    var _c1 = function _c1() {
      return ["/resources"];
    };

    var _c2 = function _c2() {
      return ["/events"];
    };

    var _c3 = function _c3() {
      return ["/links"];
    };

    var _c4 = function _c4() {
      return ["/training"];
    };

    var LinksComponent =
    /*#__PURE__*/
    function () {
      function LinksComponent() {
        _classCallCheck(this, LinksComponent);

        this.DEregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          prname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          semail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sele1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(LinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__(".page-header-wrapper").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2__("#searchList").show();
          jquery__WEBPACK_IMPORTED_MODULE_2__("#searchResult").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2__("#editView").hide();
        }
      }, {
        key: "openSearch",
        value: function openSearch() {
          jquery__WEBPACK_IMPORTED_MODULE_2__("#searchList").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2__("#searchResult").show();
        }
      }, {
        key: "editView",
        value: function editView() {
          jquery__WEBPACK_IMPORTED_MODULE_2__("#searchList").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2__("#searchResult").hide();
          jquery__WEBPACK_IMPORTED_MODULE_2__("#editView").show();
        }
      }, {
        key: "register",
        value: function register() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {}
      }, {
        key: "f",
        get: function get() {
          return this.DEregistrationForm.controls;
        }
      }]);

      return LinksComponent;
    }();

    LinksComponent.ɵfac = function LinksComponent_Factory(t) {
      return new (t || LinksComponent)();
    };

    LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinksComponent,
      selectors: [["app-links"]],
      decls: 343,
      vars: 11,
      consts: [["id", "portalNavId", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark", "fixed-top", 2, "background-color", "#395c80!important"], ["href", "#", 1, "navbar-brand"], [1, "container-fluid"], [1, "nav", "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "active", "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "fontFam"], ["data-toggle", "modal", "data-target", "#modalUpload", 1, "dropdown-item"], ["href", "#", "data-toggle", "dropdown", "role", "button", 1, "dropdown-toggle", "nav-link", 2, "margin-left", "-21%"], ["aria-hidden", "true", 1, "fa", "fa-bell", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-2x", 2, "margin-left", "10%"], [1, "dropdown-menu", "notify-drop", "fontFam", 2, "margin-left", "-155%"], [1, "notify-drop-title"], [1, "text-center"], [1, "notify-drop-footer", "text-center"], ["href", "", "data-toggle", "modal", "data-target", "#modalNotify", 1, "dropdown-item"], ["id", "searchList", 1, "fragment", "edit-outline", "bulletins", 2, "padding", "8%"], [1, "fragment-list"], [1, "fragment-periodical-list-item", "tp"], [1, "fragment-periodical-list-item__container"], [1, "fragment-item-icon-container"], ["height", "56", "viewBox", "0 0 56 56", "width", "56", "xmlns", "http://www.w3.org/2000/svg", 2, "color", "#395c80"], ["fill", "currentColor"], ["d", "M23 36v1.5c0 1.193-1.194 1.447-1.54 1.496A1.5 1.5 0 0 1 20 37.5V19h15v15h2V18a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v19.5c0 1.93 1.57 3.5 3.5 3.5h15c1.93 0 3.5-1.57 3.5-3.5V36H23z"], ["d", "M23 22h9v2h-9zM23 26h9v2h-9zM23 30h9v2h-9z"], [1, "fragment-periodical-list-item__details", "align-self-center"], [1, "align-self-center"], [1, "fragment-periodical-list-item__date"], ["href", "javascript:void(0);", "rel", "noopener noreferrer", "title", "Diploma", 1, "button--list", "align-self-center", "pr-3", "viewLinks", 3, "click"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", 1, "external-link"], ["fill-rule", "nonzero"], ["fill", "currentColor", "d", "M9.375 0H5v1.25h2.875L3.937 5.188l.876.875L8.75 2.124V5H10V.625C10 .25 9.75 0 9.375 0z"], ["fill", "currentColor", "d", "M8.75 10H.625C.25 10 0 9.75 0 9.375V1.25C0 .875.25.625.625.625h2.5v1.25H1.25V8.75h6.875V6.875h1.25v2.5c0 .375-.25.625-.625.625z"], ["href", "https://faithlife.com/fitcommunitychurch/bulletins/44049796", "target", "_blank", "rel", "noopener noreferrer", "title", "TTC", 1, "button--list", "align-self-center", "pr-3", "viewLinks"], ["href", "https://faithlife.com/fitcommunitychurch/bulletins/44049796", "target", "_blank", "rel", "noopener noreferrer", "title", "CWC", 1, "button--list", "align-self-center", "pr-3", "viewLinks"], [1, "fragment-item-icon-container", 2, "color", "#395c80"], ["height", "56", "viewBox", "0 0 56 56", "width", "56", "xmlns", "http://www.w3.org/2000/svg"], ["href", "https://faithlife.com/fitcommunitychurch/bulletins/44049796", "target", "_blank", "rel", "noopener noreferrer", "title", "OVBS", 1, "button--list", "align-self-center", "pr-3", "viewLinks"], ["id", "searchResult", 2, "padding-top", "6rem"], [1, "pl-wrapper", "mb-5"], [1, "row", "pb-3", 2, "align-items", "center"], [1, "form-group", "col"], ["type", "text", "id", "regId", "formControlName", "regId", "placeholder", "Registration Id", "name", "regId", 1, "form-control", "form-control-sm"], ["type", "text", "id", "studId", "formControlName", "studId", "placeholder", "Student Id", "name", "studId", 1, "form-control", "form-control-sm"], ["type", "text", "id", "parishName", "formControlName", "parishName", "placeholder", "Parish Name", "name", "parishName", 1, "form-control", "form-control-sm"], ["type", "text", "id", "studentName", "formControlName", "studentName", "placeholder", "Student Name", "name", "studentName", 1, "form-control", "form-control-sm"], [1, "btn", "btn-blue", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "row"], [1, "table", "no_border", "table-condensed", "person_details", "per-table"], [1, "e-border-none"], ["type", "button", 1, "btn", "btn-blue", "btn-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-blue", "btn-primary", "btn-sm", "ml-1", 3, "click"], ["type", "button", 1, "btn", "btn-blue", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-blue", "btn-primary", "btn-sm", "ml-1"], ["id", "editView", 1, "container", "col-md-6", "col-sm-6", "border", "mb-1rem", "card", "p-3", "bg-light", 2, "margin-top", "6rem", "background-color", "#fff !important"], [1, "text-center", "header-blue"], ["id", "subscribeForm", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "pname"], ["type", "text", "id", "pname", "formControlName", "pname", "placeholder", "Enter Parish Name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["for", "addr"], [1, "form-group", "col-12"], ["type", "text", "placeholder", "Enter Your Address", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your Landmark", 1, "form-control", "form-control-sm"], [1, "form-group", "col-6"], ["type", "text", "placeholder", "Enter Your City", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your State", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your Zip code", 1, "form-control", "form-control-sm"], [1, "form-control", "form-control-sm"], ["for", "prname", 1, ""], ["type", "text", "id", "prname", "formControlName", "prname", "placeholder", "Enter Principal's' Name", 1, "form-control", "form-control-sm"], ["for", "vname", 1, ""], ["type", "text", "id", "vname", "formControlName", "vname", "placeholder", "Enter Vicar Name", 1, "form-control", "form-control-sm"], ["for", "pemail"], ["type", "email", "id", "pemail", "formControlName", "pemail", "placeholder", "Enter Principal's Email ID", "required", "", 1, "form-control", "form-control-sm"], ["for", "mobile1"], ["type", "text", "formControlName", "mobile1", "placeholder", "Enter Principal's Contact Number", 1, "form-control", "form-control-sm"], ["for", "vname"], ["type", "text", "id", "sname", "formControlName", "sname", "placeholder", "Enter Student's' Name", 1, "form-control", "form-control-sm"], ["for", "phonenum1"], ["type", "text", "formControlName", "phonenum1", "placeholder", "Enter Student's Contact Number", 1, "form-control", "form-control-sm"], ["for", "semail"], ["type", "email", "id", "semail", "formControlName", "semail", "placeholder", "Enter Student's Email ID", "required", "", 1, "form-control", "form-control-sm"], [1, "form-group", "w-50"], ["for", "sele1"], ["formControlName", "group", "id", "sele1", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-blue", "btn-primary", "float-right", 3, "click"], ["id", "modalUpload", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "col"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "modalNotify", "role", "dialog", 1, "modal", "fade"], [1, "modal-header", 2, "background-color", "lavender"], ["href", "/lesson"], [1, "row", "mt-2"], ["id", "commentId", 1, "hide", "mt-1", "row"], ["rows", "3", "placeholder", "Comment here..", 1, "form-control", "mt-4"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "-2%"], [1, "modal-footer", 2, "height", "3rem"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "background-color", "lavender"]],
      template: function LinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CHURCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DASHBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPETITION/EXAMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TRAINING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UPLOAD FILE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Errata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teacher's Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Worksheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Review Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "You have 2 notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 1.User 1 uploded pdf for lesson 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2.User 1 uploded pdf for lesson 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Diploma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_Template_a_click_70_listener($event) {
            return ctx.openSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "TTC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "svg", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "CWC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "svg", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "svg", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "OVBS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_Template_button_click_139_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "table", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Reg. ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Stud. ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Parish Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "121324");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "10001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Acadia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Austen, Kate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_Template_button_click_165_listener($event) {
            return ctx.editView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_Template_button_click_167_listener($event) {
            return ctx.editView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "121225");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "10045");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Allen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Baggins, Frodo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "121254");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "10006");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Bossier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Bourne, Alison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "121266");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "100054");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Caldwell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Flintstone, Fred");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "1212344");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "100012");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "DeSoto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Halpert, Cecelia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h3", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Diploma Exam Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "form", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LinksComponent_Template_form_ngSubmit_229_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Parish Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Parish Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "England");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Name of Principal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Name of Vicar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Principal's Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Principal's Contact Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "label", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Name of Student:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Student's Phone Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "label", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Student's Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "label", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Select Exam Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "select", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "22/12/2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "01/01/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "13/04/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "28/07/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinksComponent_Template_button_click_303_listener($event) {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Upload PDF/Audio/Video File Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "You can Approve/Delete uploded files here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "View Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "textarea", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Notify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "button", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.DEregistrationForm);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
      styles: [".card[_ngcontent-%COMP%]{\r\n    border-bottom: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.light-background[_ngcontent-%COMP%] {\r\n    --text-color:var(--text-dark-color);--text-grey-color:var(--text-grey-dark-color);--hyperlink-color:var(--hyperlink-dark-color);--hyperlink-hover-color:var(--hyperlink-dark-hover-color);--menu-item-color:var(--menu-item-dark-color);--menu-item-hover-color:var(--menu-item-dark-hover-color);--navbar-background-color:var(--navbar-background-dark-color);--fill-1-color:var(--fill-dark-1-color);--fill-2-color:var(--fill-dark-2-color);--fill-3-color:var(--fill-dark-3-color);--background-1-color:var(--fill-light-1-color);--background-2-color:var(--fill-light-2-color);--background-3-color:var(--fill-light-3-color);--image-placeholder-color:var(--image-placeholder-dark-color);--icon-color:var(--icon-dark-color);--icon-background-color:var(--icon-background-dark-color);--icon-border-color:var(--icon-border-dark-color);--border-color:var(--fill-grey-1-color);--button-primary-color:var(--button-primary-dark-color);--button-primary-text-color:var(--button-primary-text-dark-color);--button-primary-hover-color:var(--button-primary-hover-dark-color);--button-primary-hover-text-color:var(--button-primary-hover-text-dark-color);--button-secondary-color:var(--button-secondary-dark-color);--button-secondary-text-color:var(--button-secondary-text-dark-color);--button-secondary-hover-color:var(--button-secondary-hover-dark-color);--button-secondary-hover-text-color:var(--button-secondary-hover-text-dark-color);--button-list-color:var(--button-list-dark-color);--button-list-text-color:var(--button-list-text-dark-color);--button-list-hover-color:var(--button-list-hover-dark-color);--button-list-hover-text-color:var(--button-list-hover-text-dark-color)}\r\n\r\n.dark-background[_ngcontent-%COMP%] {\r\n    --text-color:var(--text-light-color);--text-grey-color:var(--text-grey-light-color);--hyperlink-color:var(--hyperlink-light-color);--hyperlink-hover-color:var(--hyperlink-light-hover-color);--menu-item-color:var(--menu-item-light-color);--menu-item-hover-color:var(--menu-item-light-hover-color);--navbar-background-color:var(--navbar-background-light-color);--fill-1-color:var(--fill-light-1-color);--fill-2-color:var(--fill-light-2-color);--fill-3-color:var(--fill-light-3-color);--background-1-color:var(--fill-dark-1-color);--background-2-color:var(--fill-dark-2-color);--background-3-color:var(--fill-dark-3-color);--border-color:var(--fill-grey-1-color);--image-placeholder-color:var(--image-placeholder-light-color);--icon-color:var(--icon-light-color);--icon-background-color:var(--icon-background-light-color);--icon-border-color:var(--icon-border-light-color);--button-primary-color:var(--button-primary-light-color);--button-primary-text-color:var(--button-primary-text-light-color);--button-primary-hover-color:var(--button-primary-hover-light-color);--button-primary-hover-text-color:var(--button-primary-hover-text-light-color);--button-secondary-color:var(--button-secondary-light-color);--button-secondary-text-color:var(--button-secondary-text-light-color);--button-secondary-hover-color:var(--button-secondary-hover-light-color);--button-secondary-hover-text-color:var(--button-secondary-hover-text-light-color);--button-list-color:var(--button-list-light-color);--button-list-text-color:var(--button-list-text-light-color);--button-list-hover-color:var(--button-list-hover-light-color);--button-list-hover-text-color:var(--button-list-hover-text-light-color)}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n    box-sizing: border-box\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background: var(--site-background);\r\n    color: var(--text-color);\r\n    width: 100%;\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\nbody.nav-open[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    overflow: hidden\r\n}\r\n\r\n.site-disabled-bar__info[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n    font-family: 'Source Sans pro',Sans-Serif\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    border: var(--input-border);\r\n    padding: var(--input-padding);\r\n    border-radius: var(--input-border-radius)\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]:focus {\r\n    border-color: var(--input-focus-border-color);\r\n    outline: none\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n    border: 0\r\n}\r\n\r\n.social-icon--faithlife[_ngcontent-%COMP%] {\r\n    color: #5fbc39\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n    --display-font-size:48px;--display-line-height:1.3;--display-margin-bottom:8px;--heading-line-height:1.3;--h1-font-size:42px;--h2-font-size:32px;--h3-font-size:28px;--h4-font-size:20px;--h5-font-size:18px;--h6-font-size:16px;--edit-item-width:24px;--group-branding-font-size:20px;--group-branding-line-height:1.3;--fragment-title-font-size:32px;--fragment-title-line-height:1.3;--fragment-title-letter-spacing:unset;--fragment-content-background:transparent;--fragment-content-box-shadow:var(--item-box-shadow);--fragment-content-border:initial;--fragment-content-border-width:0;--fragment-content-border-radius:var(--item-border-radius);--fragment-content-padding:0;--body-text-large-font-size:18px;--body-text-medium-font-size:16px;--body-text-small-font-size:14px;--body-text-line-height:1.3;--ui-large-size:18px;--ui-medium-size:16px;--ui-small-size:12px;--ui-line-height:1;--line-clamp-max-height:3.9em;--hero-sub-header-max-width:600px;--hero-border-radius:var(--item-border-radius);--mobile-nav-height:120px;--hero-buttons-margin:0;--hero-min-height:730px;--header-menu-item-height:32px;--slideout-menu-height:calc(100vh - var(--mobile-nav-height));--slideout-menu-padding:0 24px;--site-background:initial;--edit-item-top:-60px;--edit-item-right:-12px;--item-border-radius:0;--button-display:inline-block;--button-box-shadow:0 0 8px -2px #9b9b9b;--button-border:1px solid;--button-border-radius:3px;--button-padding:12px 24px;--button-min-width:120px;--button-transition:all .15s;--button-secondary-border:2px solid;--button-secondary-background:transparent;--fragment-background:initial;--fragment-column-gutter:32px;--multimedia-embed-background:black;--multimedia-aspect-ratio-percentage:66.66666667%;--fragment-title-margin-bottom:32px;--fragment-title-text-align:center;--fragment-title-text-transform:initial;--fragment-cta-align-items:center;--fragment-cta-justify-content:center;--fragment-cta-button-margin-top:24px;--fragment-cta-title-margin:16px 0 12px;--fragment-view-all-margin-top:32px;--fragment-view-all-text-align:center;--fragment-box-shadow:unset;--fragment-border:unset;--fragment-border-width:unset;--fragment-border-radius:var(--item-border-radius);--vertical-fragment-section-padding:0;--fragment-padding:48px 0;--fragment-image-background-position:center center;--fragment-image-background-size:cover;--fragment-overflow:initial;--fragment-two-col-min-height:auto;--item-box-shadow:none;--item-button-width:auto;--item-icon-display:flex;--item-icon-border:1px solid;--item-icon-border-radius:50%;--item-icon-container-diameter:44px;--item-icon-background-color:transparent;--list-item-justify-content:space-between;--list-item-flex-direction:column;--list-item-align-items:flex-start;--list-item-margin:0;--top-list-item-top-padding:0;--list-item-padding:24px 0;--list-item-details-margin:16px 0;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--list-item-border:#dadada solid;--list-item-border-width:0 0 1px;--list-item-border-radius:var(--item-border-radius);--list-item-background:transparent;--list-item-container-width:100%;--list-item-container-align-items:flex-start;--list-item-container-flex-direction:column;--list-item-subtitle-display:flex;--list-item-subtitle-margin:8px 0 0;--button-list-display:block;--button-list-svg-margin:0 0 0 2px;--button-list-border:1px solid;--button-list-border-radius:16px;--button-list-padding:6px 16px;--button-list-margin:12px 0 0;--cta-content-margin:0 auto;--cta-content-height:100%;--cta-content-max-width:520px;--cta-content-text-align:center;--cta-title-margin:0 0 16px;--cta-body-margin:0 0 24px;--cta-body-text-align:center;--cta-background-image-position:absolute;--cta-display:block;--cta-flex-wrap:initial;--cta-content-display:block;--cta-content-flex-direction:initial;--cta-content-justify-content:initial;--cta-content-align-items:initial;--cta-content-padding:32px;--highlight-display:flex;--highlight-flex-direction:column;--highlight-align-items:center;--highlight-justify-content:center;--highlight-content-text-align:center;--highlight-justify-content:normal;--highlight-content-max-width:520px;--highlight-content-margin:16px auto 0;--highlight-title-margin:8px 0;--highlight-button-margin-top:12px;--highlight-border-radius:var(--item-border-radius);--highlight-padding:0;--highlight-background:transparent;--highlight-height:auto;--highlight-view-button-margin-top:16px;--contact-info-container-flex-direction:column;--contact-info-container-justify-content:center;--contact-info-container-align-items:center;--contact-info-item-flex-direction:column;--contact-info-item-justify-content:center;--contact-info-item-align-items:center;--contact-info-item-border:unset;--contact-info-item-border-width:unset;--contact-info-item-border-radius:0;--contact-info-item-margin:0 0 24px;--contact-info-item-padding:0;--contact-info-item-width:unset;--contact-info-item-details-text-align:center;--contact-info-item-details-margin:16px 0 0;--form-container-justify-content:center;--form-container-align-items:center;--form-container-flex-direction:column;--form-container-text-align:center;--form-container-align-items:normal;--form-container-height:auto;--form-justify-content:center;--form-align-items:center;--form-flex-direction:column;--form-input-width:100%;--form-input-margin:0 auto 16px;--form-helper-text-margin:16px 0 0;--form-button-margin:0 auto;--input-border-radius:3px;--input-border:1px solid #ddd;--input-padding:12px;--input-focus-border-color:#278ed4;--service-time-container-margin:16px 0 0 0;--service-times-item-gap:64px;--service-times-item-width:100%;--service-times-item-padding:initial;--service-times-item-box-shadow:initial;--service-times-item-border-radius:initial;--service-times-item-border:initial;--service-times-item-text-align:center;--service-times-item-flex-direction:column;--service-times-item-align-items:center;--service-times-item-time-top-margin:12px;--service-times-item-time-bottom-margin:24px;--service-times-inline-day-display:none;--service-times-icon-display:block;--gallery-grid-row-gap:32px;--gallery-grid-column-gap:32px;--gallery-grid-template-columns:1fr;--grid-item-background:initial;--grid-item-border-width:1px;--grid-item-border-radius:var(--item-border-radius);--grid-item-overflow:inherit;--grid-item-padding:32px;--grid-item-date-margin:0 0 .5rem;--grid-item-title-margin:16px 0 0;--grid-item-title-text-align:center;--grid-item-details-margin:24px 0 0 0;--grid-item-heading-flex:1 0 100%;--grid-item-subtitle-margin:12px 0 0 0;--grid-item-button-container-margin:auto 0 0 0;--grid-item-button-container-padding:16px 0 0 0;--grid-row-gap:24px;--grid-column-gap:32px;--blog-item-image-border-radius:initial;--blog-item-image-height:100%;--blog-item-image-max-height:220px;--blog-grid-item-preview-margin:12px 0;--blog-grid-item-preview-font-size:inherit;--blog-item-details-margin:16px;--blog-list-item-display:block;--blog-list-image-width:100%;--blog-highlight-display:block;--sermon-grid-item-placeholder-height:200px;--sermon-grid-item-media-container-margin:0 0 12px 0;--sermon-grid-item-title-margin:8px 0;--sermon-grid-item-media-container-border-radius:0;--sermon-grid-item-details-margin:0;--verse-image-border-radius:var(--item-border-radius);--header-dropdown-box-shadow:0 10px 20px 0 rgba(0,0,0,0.05);--header-dropdown-text-transform:uppercase;--header-dropdown-border-radius:0;--header-dropdown-border:0;--header-icon-border-radius:5px;--header-default-icon-color:#7a7a7a;--header-menu-item-text-transform:uppercase;--shared-menu-margin:0 0 0 auto;--mobile-header-justify-content:center;--mobile-header-flex-direction:column;--mobile-menu-width:300px;--mobile-menu-top-position:0;--mobile-menu-left-hidden-position:auto;--mobile-menu-right-hidden-position:calc(-1 * var(--mobile-menu-width));--mobile-menu-left-visible-position:auto;--mobile-menu-right-visible-position:0;--mobile-menu-transition:right 400ms ease;--mobile-nav-hamburger-top-position:50%;--mobile-nav-hamburger-left-position:12px;--mobile-nav-hamburger-right-position:0;--mobile-nav-hamburger-transform:translateY(-50%);--mobile-nav-button-text-display:none;--mobile-menu-display:flex;--desktop-header-display:none;--content-container-margin:0 16px;--content-container-max-width:540px;--mosaic-item-width:100%;--mosaic-item-margin:0 0 32px 0}\r\n\r\n@media (min-width: 576px) {\r\n    [_ngcontent-%COMP%]:root {\r\n        --content-container-margin:0 auto\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    [_ngcontent-%COMP%]:root {\r\n        --display-font-size:56px;\r\n        --content-container-max-width:720px;--h2-font-size:48px;--mosaic-item-width:46%;--list-item-details-flex-direction:row;--list-item-details-align-items:center;--button-list-margin:0}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    [_ngcontent-%COMP%]:root {\r\n        --desktop-header-display:flex;\r\n        --mobile-menu-display:none;--content-container-max-width:960px;--mosaic-item-width:31%}\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    [_ngcontent-%COMP%]:root {\r\n        --content-container-max-width:1140px\r\n    }\r\n}\r\n\r\n.fragment-form-container[_ngcontent-%COMP%] {\r\n    --fragment-title-margin-bottom:16px}\r\n\r\n.sermons[_ngcontent-%COMP%] {\r\n    --grid-item-border:none;--grid-item-padding:0;--list-item-container-flex-direction:row;--list-item-details-margin:0 0 0 16px}\r\n\r\n.events[_ngcontent-%COMP%], .event-details[_ngcontent-%COMP%] {\r\n    --highlight-title-margin:4px 0 8px;--event-highlight-details-max-width:80%;--event-highlight-details-margin:8px 0 0 0;--list-item-container-flex-direction:row;--list-item-details-margin:0 0 0 16px;--event-details-display:none;--event-date-inline-display:none;--event-date-square-text-color:var(--icon-color);--event-date-square-display:flex;--event-date-square-justify-content:center;--event-date-square-border:1px solid var(--icon-border-color);--event-date-square-border-radius:5px;--event-date-square-container-diameter:66px;--event-date-square-background:transparent;--event-date-square-multi-day-divider:1px solid var(--icon-border-color);--event-date-square-multi-day-top-padding:2px;--event-date-month-padding:0;--event-date-month-background:transparent;--event-date-small-font-size:12px;--event-date-day-font-size:32px;--event-item-location-margin:0 0 4px 0;--list-item-subtitle-display:block;--event-item-location-date-divider:''}\r\n\r\n.event-details[_ngcontent-%COMP%] {\r\n    --event-date-square-container-diameter:90px;--event-date-square-margin:0 auto 24px}\r\n\r\n.document-list[_ngcontent-%COMP%] {\r\n    --item-icon-border-radius:0;--item-icon-container-diameter:32px;--list-item-details-margin:0 0 0 16px;--list-item-container-flex-direction:row}\r\n\r\n.blog-posts[_ngcontent-%COMP%] {\r\n    --grid-item-border-width:0;--grid-item-padding:0;--highlight-image-container-margin:0;--highlight-title-margin:16px 0 4px;--highlight-content-max-width:none;--highlight-content-text-align:left;--highlight-content-margin:0}\r\n\r\n.blog-highlight[_ngcontent-%COMP%]:not(.blog-highlight--no-image) {\r\n    --highlight-padding:0;--highlight-content-margin:var(--blog-item-details-margin)}\r\n\r\n.blog-highlight--no-image[_ngcontent-%COMP%] {\r\n    --blog-highlight-background-width:0;--blog-highlight-background-height:0;--blog-highlight-grid-template-columns:1fr;--highlight-content-text-align:center;--highlight-content-margin:0 auto}\r\n\r\n.cta[_ngcontent-%COMP%] {\r\n    --fragment-title-margin-bottom:16px}\r\n\r\n.cta--with-image[_ngcontent-%COMP%], .fragment-highlight--with-image[_ngcontent-%COMP%] {\r\n    --background-image-padding:64px 16px;--background-image-max-height:1000px}\r\n\r\n.light-background[_ngcontent-%COMP%], .dark-background[_ngcontent-%COMP%] {\r\n    --fragment-title-text-color:var(--text-color);--list-item-subtitle-color:var(--text-color);--blog-grid-item-title-color:var(--text-color);--grid-item-border:solid var(--fill-2-color);--blog-item-image-container-background:var(--fill-1-color)}\r\n\r\n.light-background[_ngcontent-%COMP%]   .sermons[_ngcontent-%COMP%], .dark-background[_ngcontent-%COMP%]   .sermons[_ngcontent-%COMP%] {\r\n    --multimedia-embed-background:var(--image-placeholder-color)}\r\n\r\n.light-background[_ngcontent-%COMP%]   .sermons[_ngcontent-%COMP%] {\r\n    --sermon-icon-color:var(--icon-light-color)}\r\n\r\n.dark-background[_ngcontent-%COMP%]   .sermons[_ngcontent-%COMP%] {\r\n    --sermon-icon-color:var(--icon-dark-color)}\r\n\r\n@media (min-width: 768px) {\r\n    .fragment-12-col[_ngcontent-%COMP%] {\r\n        --h1-font-size:64px;\r\n        --h2-font-size:48px;--h3-font-size:32px;--h4-font-size:24px;--fragment-title-font-size:48px;--contact-info-container-flex-direction:row;--contact-info-container-align-items:flex-start;--contact-info-item-width:33.33333333%;--contact-info-item-margin:0;--form-flex-direction:row;--form-margin:0 auto;--form-input-width:280px;--form-button-margin:0 16px;--form-input-margin:0;--grid-item-heading-flex:1 0;--grid-item-details-margin:0 0 0 16px;--grid-template-columns:1fr 1fr;--service-times-item-width:33.33333333%;--list-item-flex-direction:row;--list-item-justify-content:space-between;--list-item-align-items:center;--list-item-container-flex-direction:row;--list-item-container-width:100%;--list-item-details-margin:0 24px;--blog-list-item-image-container-margin:0 24px 0 0;--blog-list-item-display:flex;--blog-list-item-width:33.33333333%;--blog-item-image-height:auto;--blog-list-image-width:33.33333333%;--event-details-button-display:initial;--highlight-content-max-width:75%}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .blog-posts[_ngcontent-%COMP%] {\r\n        --highlight-flex-direction:row;--highlight-align-items:center;--highlight-image-container-width:100%}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .blog-posts--few-items[_ngcontent-%COMP%] {\r\n        --grid-template-columns:1fr 1fr}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\r\n        --fragment-padding:64px 0}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .cta--with-image[_ngcontent-%COMP%], .fragment-12-col[_ngcontent-%COMP%]   .fragment-highlight--with-image[_ngcontent-%COMP%] {\r\n        --background-image-padding:128px 0}\r\n}\r\n\r\n@media (min-width: 768px) and (min-width:768px) {\r\n    .fragment-12-col[_ngcontent-%COMP%] {\r\n        --highlight-height:auto\r\n    }\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\r\n        --gallery-grid-template-columns:repeat(2, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 768px) and (min-width:992px) {\r\n    .fragment-12-col[_ngcontent-%COMP%] {\r\n        --list-item-container-width:80%;\r\n        --item-icon-container-diameter:54px;--blog-list-item-display:flex;--blog-highlight-preview-margin:0 0 12px;--blog-highlight-display:grid;--blog-highlight-grid-template-columns:1fr 1fr;--blog-highlight-grid-column-gap:24px}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .blog-list[_ngcontent-%COMP%] {\r\n        --blog-item-image-height:auto}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .blog-posts[_ngcontent-%COMP%], .fragment-12-col[_ngcontent-%COMP%]   .sermons[_ngcontent-%COMP%] {\r\n        --grid-template-columns:1fr 1fr 1fr}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%], .fragment-12-col[_ngcontent-%COMP%]   .events-details[_ngcontent-%COMP%] {\r\n        --list-item-details-margin:0 24px;--event-item-location-margin:0 4px 12px 0;--list-item-subtitle-display:flex;--list-item-subtitle-flex-wrap:wrap;--event-item-location-date-divider:' \xE2\u20AC\xA2'}\r\n\r\n    .fragment-12-col[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\r\n        --gallery-grid-template-columns:repeat(3, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .fragment-6-col[_ngcontent-%COMP%] {\r\n        --form-input-width:280px;\r\n        --form-container-align-items:center;--form-container-height:100%;--contact-info-container-align-items:flex-start;--contact-info-item-margin:0 0 24px;--contact-info-item-details-margin:16px 0 0;--contact-info-item-details-text-align:left;--contact-info-item-width:100%;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--blog-list-image-width:100%;--highlight-justify-content:center;--cta-content-text-align:left;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-6-col[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%] {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-6-col[_ngcontent-%COMP%]   .fragment-highlight__title[_ngcontent-%COMP%] {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) {\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last) {\r\n        --form-input-width:280px;\r\n        --form-container-align-items:center;--form-container-height:100%;--contact-info-container-align-items:flex-start;--contact-info-item-margin:0 0 24px;--contact-info-item-details-margin:16px 0 0;--contact-info-item-details-text-align:left;--contact-info-item-width:100%;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--blog-list-image-width:100%;--highlight-justify-content:center;--cta-content-text-align:left;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last)   .events[_ngcontent-%COMP%] {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last)   .fragment-highlight__title[_ngcontent-%COMP%] {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last) {\r\n        --h4-font-size:18px;\r\n        --h5-font-size:16px;--fragment-title-text-align:left;--fragment-title-margin-bottom:24px;--contact-info-item-margin:0 0 24px;--contact-info-item-flex-direction:row;--contact-info-item-details-margin:0 0 0 16px;--contact-info-item-details-text-align:left;--contact-info-container-justify-content:flex-start;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--contact-info-container-align-items:center;--contact-info-item-width:100%;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--service-times-item-gap:32px;--form-align-items:flex-start;--form-container-text-align:left;--form-button-margin:0;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last)   .events[_ngcontent-%COMP%] {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last)   .cta--with-image[_ngcontent-%COMP%], .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last)   .fragment-highlight--with-image[_ngcontent-%COMP%] {\r\n        --background-image-padding:96px 12px}\r\n\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last)   .fragment-highlight__title[_ngcontent-%COMP%] {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 992px) and (min-width:768px) {\r\n    .fragment-4-col[_ngcontent-%COMP%]:not(.fragment-4-col--last) {\r\n        --event-item-location-date-divider:' \xE2\u20AC\xA2'\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) {\r\n    .fragment-4-col--last[_ngcontent-%COMP%] {\r\n        --h1-font-size:64px;\r\n        --h2-font-size:48px;--h3-font-size:32px;--h4-font-size:24px;--fragment-title-font-size:48px;--contact-info-container-flex-direction:row;--contact-info-container-align-items:flex-start;--contact-info-item-width:33.33333333%;--contact-info-item-margin:0;--form-flex-direction:row;--form-margin:0 auto;--form-input-width:280px;--form-button-margin:0 16px;--form-input-margin:0;--grid-item-heading-flex:1 0;--grid-item-details-margin:0 0 0 16px;--grid-template-columns:1fr 1fr;--service-times-item-width:33.33333333%;--list-item-flex-direction:row;--list-item-justify-content:space-between;--list-item-align-items:center;--list-item-container-flex-direction:row;--list-item-container-width:100%;--list-item-details-margin:0 24px;--blog-list-item-image-container-margin:0 24px 0 0;--blog-list-item-display:flex;--blog-list-item-width:33.33333333%;--blog-item-image-height:auto;--blog-list-image-width:33.33333333%;--event-details-button-display:initial;--highlight-content-max-width:75%}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .blog-posts[_ngcontent-%COMP%] {\r\n        --highlight-flex-direction:row;--highlight-align-items:center;--highlight-image-container-width:100%}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .blog-posts--few-items[_ngcontent-%COMP%] {\r\n        --grid-template-columns:1fr 1fr}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\r\n        --fragment-padding:64px 0}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .cta--with-image[_ngcontent-%COMP%], .fragment-4-col--last[_ngcontent-%COMP%]   .fragment-highlight--with-image[_ngcontent-%COMP%] {\r\n        --background-image-padding:128px 0}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) and (min-width:768px) {\r\n    .fragment-4-col--last[_ngcontent-%COMP%] {\r\n        --highlight-height:auto\r\n    }\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\r\n        --gallery-grid-template-columns:repeat(2, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 768px) and (max-width:991px) and (min-width:992px) {\r\n    .fragment-4-col--last[_ngcontent-%COMP%] {\r\n        --list-item-container-width:80%;\r\n        --item-icon-container-diameter:54px;--blog-list-item-display:flex;--blog-highlight-preview-margin:0 0 12px;--blog-highlight-display:grid;--blog-highlight-grid-template-columns:1fr 1fr;--blog-highlight-grid-column-gap:24px}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .blog-list[_ngcontent-%COMP%] {\r\n        --blog-item-image-height:auto}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .blog-posts[_ngcontent-%COMP%], .fragment-4-col--last[_ngcontent-%COMP%]   .sermons[_ngcontent-%COMP%] {\r\n        --grid-template-columns:1fr 1fr 1fr}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%], .fragment-4-col--last[_ngcontent-%COMP%]   .events-details[_ngcontent-%COMP%] {\r\n        --list-item-details-margin:0 24px;--event-item-location-margin:0 4px 12px 0;--list-item-subtitle-display:flex;--list-item-subtitle-flex-wrap:wrap;--event-item-location-date-divider:' \xE2\u20AC\xA2'}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\r\n        --gallery-grid-template-columns:repeat(3, minmax(0, 1fr))}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .fragment-4-col--last[_ngcontent-%COMP%] {\r\n        --h4-font-size:18px;\r\n        --h5-font-size:16px;--fragment-title-text-align:left;--fragment-title-margin-bottom:24px;--contact-info-item-margin:0 0 24px;--contact-info-item-flex-direction:row;--contact-info-item-details-margin:0 0 0 16px;--contact-info-item-details-text-align:left;--contact-info-container-justify-content:flex-start;--contact-info-container-flex-direction:column;--contact-info-item-justify-content:flex-start;--contact-info-container-align-items:center;--contact-info-item-width:100%;--service-times-item-flex-direction:row;--service-times-item-align-items:end;--service-times-item-text-align:left;--service-time-container-margin:0 0 0 16px;--service-times-item-gap:32px;--form-align-items:flex-start;--form-container-text-align:left;--form-button-margin:0;--list-item-details-flex-direction:column;--list-item-details-align-items:flex-start;--button-list-margin:12px 0 0}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%] {\r\n        --list-item-subtitle-display:block}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .cta--with-image[_ngcontent-%COMP%], .fragment-4-col--last[_ngcontent-%COMP%]   .fragment-highlight--with-image[_ngcontent-%COMP%] {\r\n        --background-image-padding:96px 12px}\r\n\r\n    .fragment-4-col--last[_ngcontent-%COMP%]   .fragment-highlight__title[_ngcontent-%COMP%] {\r\n        --h2-font-size:24px}\r\n}\r\n\r\n@media (min-width: 992px) and (min-width:768px) {\r\n    .fragment-4-col--last[_ngcontent-%COMP%] {\r\n        --event-item-location-date-divider:' \xE2\u20AC\xA2'\r\n    }\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    --fragment-content-box-shadow:none;--fragment-box-shadow:none}\r\n\r\n.footer[_ngcontent-%COMP%]   .fragment-title[_ngcontent-%COMP%] {\r\n    --fragment-title-margin-bottom:24px}\r\n\r\n.footer[_ngcontent-%COMP%]   .footer__sections[_ngcontent-%COMP%] {\r\n    --h4-font-size:var(--body-text-medium-font-size);--fragment-padding:0;--fragment-title-font-size:20px;--fragment-title-text-transform:uppercase;--fragment-content-background:transparent;--fragment-content-padding:0;--item-icon-display:none;--service-times-icon-display:none;--service-times-inline-day-display:inline-block;--service-time-container-margin:0;--service-times-item-gap:16px;--service-times-item-time-top-margin:4px;--service-times-item-time-bottom-margin:12px;--contact-info-item-details-margin:0;--contact-info-item-margin:0 0 16px 0;--hyperlink-color:var(--text-color);--fragment-title-text-align:left;--form-container-justify-content:flex-start;--form-container-align-items:flex-start;--form-align-items:flex-start;--form-input-width:100%;--form-button-margin:0;--contact-info-item-justify-content:normal;--contact-info-item-align-items:flex-start;--contact-info-container-align-items:flex-start;--contact-info-item-details-text-align:left;--service-times-item-text-align:left;--service-times-item-align-items:flex-start}\r\n\r\n.fragment[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    background: var(--fragment-background);\r\n    box-shadow: var(--fragment-box-shadow);\r\n    border: var(--fragment-border);\r\n    border-width: var(--fragment-border-width);\r\n    border-radius: var(--fragment-border-radius);\r\n    padding: var(--fragment-padding);\r\n    overflow: var(--fragment-overflow);\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n.fragment__content[_ngcontent-%COMP%] {\r\n    background: var(--fragment-content-background);\r\n    box-shadow: var(--fragment-content-box-shadow);\r\n    border: var(--fragment-content-border);\r\n    border-width: var(--fragment-content-border-width);\r\n    border-radius: var(--fragment-content-border-radius);\r\n    padding: var(--fragment-content-padding)\r\n}\r\n\r\n.fragment-section[_ngcontent-%COMP%] {\r\n    margin: var(--content-container-margin);\r\n    max-width: var(--content-container-max-width)\r\n}\r\n\r\n.fragment-cta[_ngcontent-%COMP%] {\r\n    background: var(--fragment-background);\r\n    box-shadow: var(--fragment-box-shadow);\r\n    border: var(--fragment-border);\r\n    border-width: var(--fragment-border-width);\r\n    border-radius: var(--fragment-border-radius);\r\n    padding: var(--fragment-padding);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    -webkit-box-pack: var(--fragment-cta-justify-content);\r\n    justify-content: var(--fragment-cta-justify-content);\r\n    -webkit-box-align: var(--fragment-cta-align-items);\r\n    align-items: var(--fragment-cta-align-items)\r\n}\r\n\r\n.fragment-cta__icon[_ngcontent-%COMP%] {\r\n    color: var(--icon-color)\r\n}\r\n\r\n.fragment-cta__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 4px;\r\n    font-size: var(--h3-font-size);\r\n    line-height: var(--heading-line-height);\r\n    margin: var(--fragment-cta-title-margin)\r\n}\r\n\r\n.fragment-cta__subtitle[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-large-size)\r\n}\r\n\r\n.fragment-cta__button[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    -webkit-transition: var(--button-transition);\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    border: var(--button-secondary-border);\r\n    border-color: var(--button-secondary-color);\r\n    background-color: var(--button-secondary-background);\r\n    color: var(--button-secondary-text-color);\r\n    margin-top: var(--fragment-cta-button-margin-top)\r\n}\r\n\r\n.fragment-cta__button[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-cta__button[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-secondary-hover-color);\r\n    background: var(--button-secondary-hover-color);\r\n    color: var(--button-secondary-hover-text-color)\r\n}\r\n\r\n.fragment-form-button[_ngcontent-%COMP%], .highlight-view-button[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    -webkit-transition: var(--button-transition);\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    margin-top: var(--highlight-view-button-margin-top)\r\n}\r\n\r\n.fragment-form-button[_ngcontent-%COMP%]:hover, .highlight-view-button[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-form-button[_ngcontent-%COMP%]:hover, .highlight-view-button[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-highlight[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--highlight-flex-direction);\r\n    -webkit-box-align: var(--highlight-align-items);\r\n    align-items: var(--highlight-align-items);\r\n    -webkit-box-pack: var(--highlight-justify-content);\r\n    justify-content: var(--highlight-justify-content);\r\n    box-shadow: var(--item-box-shadow);\r\n    border-radius: var(--item-border-radius);\r\n    padding: var(--highlight-padding);\r\n    background: var(--highlight-background);\r\n    height: var(--highlight-height)\r\n}\r\n\r\n.fragment-highlight--with-image[_ngcontent-%COMP%] {\r\n    padding: var(--background-image-padding);\r\n    background-position: var(--fragment-image-background-position);\r\n    background-size: var(--fragment-image-background-size)\r\n}\r\n\r\n.fragment-highlight__date[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-highlight__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    display: block;\r\n    margin: var(--highlight-title-margin)\r\n}\r\n\r\n.fragment-highlight__title[_ngcontent-%COMP%]:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.fragment-highlight__subtitle[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\n.fragment-highlight__content[_ngcontent-%COMP%] {\r\n    text-align: var(--highlight-content-text-align);\r\n    max-width: var(--highlight-content-max-width);\r\n    margin: var(--highlight-content-margin)\r\n}\r\n\r\n.fragment-list[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column\r\n}\r\n\r\n.fragment-title[_ngcontent-%COMP%] {\r\n    font-size: var(--fragment-title-font-size);\r\n    line-height: var(--fragment-title-line-height);\r\n    letter-spacing: var(--fragment-title-letter-spacing);\r\n    text-transform: var(--fragment-title-text-transform);\r\n    margin-bottom: var(--fragment-title-margin-bottom);\r\n    text-align: var(--fragment-title-text-align);\r\n    color: var(--fragment-title-text-color)\r\n}\r\n\r\n.fragment-view-all[_ngcontent-%COMP%] {\r\n    margin-top: var(--fragment-view-all-margin-top);\r\n    text-align: var(--fragment-view-all-text-align)\r\n}\r\n\r\n.fragment-view-all__text[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    -webkit-transition: var(--button-transition);\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    border: var(--button-secondary-border);\r\n    border-color: var(--button-secondary-color);\r\n    background-color: var(--button-secondary-background);\r\n    color: var(--button-secondary-text-color)\r\n}\r\n\r\n.fragment-view-all__text[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.fragment-view-all__text[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-secondary-hover-color);\r\n    background: var(--button-secondary-hover-color);\r\n    color: var(--button-secondary-hover-text-color)\r\n}\r\n\r\n.fragment-item-icon-container[_ngcontent-%COMP%] {\r\n    display: var(--item-icon-display);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    border: var(--item-icon-border);\r\n    border-color: var(--icon-border-color);\r\n    border-radius: var(--item-icon-border-radius);\r\n    width: var(--item-icon-container-diameter);\r\n    height: var(--item-icon-container-diameter);\r\n    background-color: var(--item-icon-background-color);\r\n    color: var(--icon-color)\r\n}\r\n\r\na.fragment-item-icon-container[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--icon-hover-color)\r\n}\r\n\r\na.fragment-item-icon-container[_ngcontent-%COMP%]   .fragment-item-icon[_ngcontent-%COMP%] {\r\n    color: var(--icon-color)\r\n}\r\n\r\na.fragment-item-icon-container[_ngcontent-%COMP%]   .fragment-item-icon[_ngcontent-%COMP%]:hover {\r\n    color: var(--icon-color)\r\n}\r\n\r\n.fragment-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding: var(--grid-padding);\r\n    grid-template-columns: var(--grid-template-columns);\r\n    grid-column-gap: var(--grid-column-gap);\r\n    grid-row-gap: var(--grid-row-gap)\r\n}\r\n\r\n.fragment-grid__item[_ngcontent-%COMP%] {\r\n    background: var(--grid-item-background);\r\n    border: var(--grid-item-border);\r\n    border-width: var(--grid-item-border-width);\r\n    border-radius: var(--grid-item-border-radius);\r\n    padding: var(--grid-item-padding);\r\n    box-shadow: var(--item-box-shadow);\r\n    overflow: var(--grid-item-overflow)\r\n}\r\n\r\n.button-reset[_ngcontent-%COMP%] {\r\n    border: none;\r\n    padding: 0;\r\n    background: transparent;\r\n    color: inherit;\r\n    overflow: visible\r\n}\r\n\r\n.button[_ngcontent-%COMP%], .button--primary[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    line-height: 1;\r\n    display: var(--button-display);\r\n    box-shadow: var(--button-box-shadow);\r\n    border: var(--button-border);\r\n    border-color: var(--button-primary-color);\r\n    border-radius: var(--button-border-radius);\r\n    padding: var(--button-padding);\r\n    background: var(--button-primary-color);\r\n    color: var(--button-primary-text-color);\r\n    min-width: var(--button-min-width);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    -webkit-transition: var(--button-transition);\r\n    transition: var(--button-transition);\r\n    white-space: nowrap;\r\n    text-align: center\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover, .button--primary[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-primary-hover-color);\r\n    background-color: var(--button-primary-hover-color);\r\n    color: var(--button-primary-hover-text-color);\r\n    text-decoration: none\r\n}\r\n\r\n.button--secondary[_ngcontent-%COMP%] {\r\n    border: var(--button-secondary-border);\r\n    border-color: var(--button-secondary-color);\r\n    background-color: var(--button-secondary-background);\r\n    color: var(--button-secondary-text-color)\r\n}\r\n\r\n.button--secondary[_ngcontent-%COMP%]:hover {\r\n    border-color: var(--button-secondary-hover-color);\r\n    background: var(--button-secondary-hover-color);\r\n    color: var(--button-secondary-hover-text-color)\r\n}\r\n\r\n.button--list[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size);\r\n    display: var(--button-list-display);\r\n    -webkit-box-align: var(--button-list-align-items);\r\n    align-items: var(--button-list-align-items);\r\n    line-height: 1;\r\n    border: var(--button-list-border);\r\n    border-color: var(--button-list-color);\r\n    border-radius: var(--button-list-border-radius);\r\n    color: var(--button-list-text-color);\r\n    background: transparent;\r\n    padding: var(--button-list-padding);\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: var(--button-list-margin);\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content\r\n}\r\n\r\n.button--list[_ngcontent-%COMP%]:hover {\r\n    color: var(--button-list-hover-text-color);\r\n    background: var(--button-list-hover-color);\r\n    border-color: var(--button-list-hover-color)\r\n}\r\n\r\n.button--list[_ngcontent-%COMP%]:hover:link {\r\n    text-decoration: none\r\n}\r\n\r\n.button--list[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    margin: var(--button-list-svg-margin)\r\n}\r\n\r\n.button-as-link[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    box-shadow: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    min-width: auto;\r\n    background-color: transparent;\r\n    color: var(--hyperlink-color);\r\n    text-transform: none\r\n}\r\n\r\n.button-as-link[_ngcontent-%COMP%]:hover, .button-as-link[_ngcontent-%COMP%]:focus {\r\n    background-color: transparent;\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.desktop-nav__list[_ngcontent-%COMP%], .slideout-nav__list[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\n\r\n.menu-link[_ngcontent-%COMP%] {\r\n    font-size: var(--body-text-small-font-size);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.menu-link[_ngcontent-%COMP%]:hover {\r\n    color: var(--menu-item-hover-color);\r\n    text-decoration: none\r\n}\r\n\r\n.desktop-nav__list[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    list-style-type: none\r\n}\r\n\r\n.desktop-nav__dropdown[_ngcontent-%COMP%] {\r\n    width: 224px;\r\n    box-shadow: var(--header-dropdown-box-shadow);\r\n    text-transform: var(--header-dropdown-text-transform);\r\n    border-radius: var(--header-dropdown-border-radius);\r\n    border: var(--header-dropdown-border)\r\n}\r\n\r\n.desktop-nav__item[_ngcontent-%COMP%] {\r\n    border: none;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    text-transform: var(--header-menu-item-text-transform)\r\n}\r\n\r\n.desktop-nav__dropdown-item[_ngcontent-%COMP%]::after {\r\n    vertical-align: .15em\r\n}\r\n\r\n.desktop-nav__sub-item[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n    white-space: initial\r\n}\r\n\r\n.desktop-nav__sub-item[_ngcontent-%COMP%]:active, .desktop-nav__sub-item[_ngcontent-%COMP%]:focus, .desktop-nav__sub-item[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent\r\n}\r\n\r\n.shared-menus[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    margin: var(--shared-menu-margin);\r\n    position: relative\r\n}\r\n\r\n.shared-menus[_ngcontent-%COMP%]   .slideout-menu[_ngcontent-%COMP%] {\r\n    top: var(--mobile-menu-top-position);\r\n    left: var(--mobile-menu-left-hidden-position);\r\n    right: var(--mobile-menu-right-hidden-position);\r\n    width: var(--mobile-menu-width);\r\n    -webkit-transition: var(--mobile-menu-transition);\r\n    transition: var(--mobile-menu-transition);\r\n    height: var(--slideout-menu-height);\r\n    padding: var(--slideout-menu-padding);\r\n    position: absolute\r\n}\r\n\r\n.shared-menus[_ngcontent-%COMP%]   .slideout-menu.show[_ngcontent-%COMP%] {\r\n    left: var(--mobile-menu-left-visible-position);\r\n    right: var(--mobile-menu-right-visible-position)\r\n}\r\n\r\n.shared-menus[_ngcontent-%COMP%]   .slideout-menu__name[_ngcontent-%COMP%] {\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.shared-menus[_ngcontent-%COMP%]   .desktop-nav__menu-item[_ngcontent-%COMP%] {\r\n    padding: 0\r\n}\r\n\r\n.shared-menus[_ngcontent-%COMP%]   .desktop-nav__item-container[_ngcontent-%COMP%] {\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    padding: 0 12px;\r\n    height: var(--header-menu-item-height);\r\n    -webkit-box-align: center;\r\n    align-items: center\r\n}\r\n\r\n.mobile-nav-container[_ngcontent-%COMP%] {\r\n    position: relative\r\n}\r\n\r\n.shared-mobile-nav[_ngcontent-%COMP%] {\r\n    display: var(--mobile-menu-display);\r\n    -webkit-box-pack: var(--mobile-header-justify-content);\r\n    justify-content: var(--mobile-header-justify-content);\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--mobile-header-flex-direction);\r\n    min-height: var(--mobile-nav-height)\r\n}\r\n\r\n.shared-mobile-nav__icon[_ngcontent-%COMP%] {\r\n    max-width: 180px\r\n}\r\n\r\n.shared-mobile-nav__button-text[_ngcontent-%COMP%] {\r\n    display: var(--mobile-nav-button-text-display);\r\n    margin-left: 12px\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .shared-mobile-nav__name[_ngcontent-%COMP%] {\r\n        margin-left:12px\r\n    }\r\n}\r\n\r\n.shared-mobile-nav__name[_ngcontent-%COMP%], .shared-mobile-nav__button-text[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height);\r\n    text-transform: var(--mobile-header-text-transform);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.shared-mobile-nav__name[_ngcontent-%COMP%]:hover, .shared-mobile-nav__button-text[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.shared-mobile-nav__header[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    flex-wrap: wrap\r\n}\r\n\r\n.shared-mobile-nav__button[_ngcontent-%COMP%] {\r\n    top: var(--mobile-nav-hamburger-top-position);\r\n    left: var(--mobile-nav-hamburger-left-position);\r\n    right: var(--mobile-nav-hamburger-right-position);\r\n    -webkit-transform: var(--mobile-nav-hamburger-transform);\r\n    transform: var(--mobile-nav-hamburger-transform);\r\n    z-index: 999\r\n}\r\n\r\n.fragment-periodical-list-item[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: var(--list-item-justify-content);\r\n    justify-content: var(--list-item-justify-content);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--list-item-flex-direction);\r\n    -webkit-box-align: var(--list-item-align-items);\r\n    align-items: var(--list-item-align-items);\r\n    box-shadow: var(--item-box-shadow);\r\n    border: var(--list-item-border);\r\n    border-width: var(--list-item-border-width);\r\n    border-radius: var(--list-item-border-radius);\r\n    background: var(--list-item-background);\r\n    margin: var(--list-item-margin);\r\n    padding: var(--list-item-padding)\r\n}\r\n\r\n.fragment-periodical-list-item[_ngcontent-%COMP%]:first-child {\r\n    margin-top: 0;\r\n    padding-top: var(--top-list-item-top-padding)\r\n}\r\n\r\n.fragment-periodical-list-item[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.fragment-periodical-list-item__container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-align: var(--list-item-container-align-items);\r\n    align-items: var(--list-item-container-align-items);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--list-item-container-flex-direction);\r\n    width: var(--list-item-container-width)\r\n}\r\n\r\n.fragment-periodical-list-item__date[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-periodical-list-item__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-periodical-list-item__title[_ngcontent-%COMP%]:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.fragment-periodical-list-item__details[_ngcontent-%COMP%] {\r\n    margin: var(--list-item-details-margin);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--list-item-details-flex-direction);\r\n    -webkit-box-align: var(--list-item-details-align-items);\r\n    align-items: var(--list-item-details-align-items);\r\n    word-break: break-word;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    justify-content: space-between\r\n}\r\n\r\n.fragment-periodical-list-item__subtitle[_ngcontent-%COMP%] {\r\n    display: var(--list-item-subtitle-display);\r\n    flex-wrap: var(--list-item-subtitle-flex-wrap);\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    margin: var(--list-item-subtitle-margin);\r\n    color: var(--list-item-subtitle-color)\r\n}\r\n\r\n.fragment-periodical-grid-item[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    word-break: break-word\r\n}\r\n\r\n.fragment-periodical-grid-item__heading[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap\r\n}\r\n\r\n.fragment-periodical-grid-item__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    text-align: var(--grid-item-title-text-align)\r\n}\r\n\r\n.fragment-periodical-grid-item__title[_ngcontent-%COMP%]:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.fragment-periodical-grid-item__details[_ngcontent-%COMP%] {\r\n    margin: var(--grid-item-details-margin);\r\n    -webkit-box-flex: var(--grid-item-heading-flex);\r\n    flex: var(--grid-item-heading-flex)\r\n}\r\n\r\n.fragment-periodical-grid-item__date[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    margin: var(--grid-item-date-margin);\r\n    color: var(--text-color)\r\n}\r\n\r\n.fragment-periodical-grid-item__subtitle[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    margin: var(--grid-item-subtitle-margin)\r\n}\r\n\r\n.fragment-periodical-grid-item__button-container[_ngcontent-%COMP%] {\r\n    margin: var(--grid-item-button-container-margin);\r\n    padding: var(--grid-item-button-container-padding)\r\n}\r\n\r\n.fragment-form-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: var(--form-container-justify-content);\r\n    justify-content: var(--form-container-justify-content);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--form-container-flex-direction);\r\n    text-align: var(--form-container-text-align);\r\n    -webkit-box-align: var(--form-container-align-items);\r\n    align-items: var(--form-container-align-items);\r\n    height: var(--form-container-height)\r\n}\r\n\r\n.fragment-form[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: var(--form-justify-content);\r\n    justify-content: var(--form-justify-content);\r\n    -webkit-box-align: var(--form-align-items);\r\n    align-items: var(--form-align-items);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--form-flex-direction);\r\n    margin: var(--form-margin);\r\n    width: 100%\r\n}\r\n\r\n.fragment-form__helper-text[_ngcontent-%COMP%] {\r\n    margin: var(--form-helper-text-margin)\r\n}\r\n\r\n.fragment-form-input[_ngcontent-%COMP%] {\r\n    width: var(--form-input-width);\r\n    margin: var(--form-input-margin)\r\n}\r\n\r\n.fragment-form-button[_ngcontent-%COMP%] {\r\n    margin: var(--form-button-margin)\r\n}\r\n\r\n.h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .fragment-title[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight)\r\n}\r\n\r\n.display[_ngcontent-%COMP%] {\r\n    margin-bottom: var(--display-margin-bottom);\r\n    font-family: var(--display-font-family);\r\n    font-weight: var(--display-font-weight);\r\n    font-size: var(--display-font-size);\r\n    line-height: var(--display-line-height)\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h1-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 4px;\r\n    font-size: var(--h3-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h6-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\nli[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-small-font-size)\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: var(--hyperlink-color)\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.rich-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.rich-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.rich-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h6-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.rich-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .rich-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .rich-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .rich-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .rich-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\n.rich-text[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    border-left: 4px solid var(--fill-1-color);\r\n    padding-left: 16px\r\n}\r\n\r\n.give[_ngcontent-%COMP%] {\r\n    margin-bottom: 32px;\r\n    background: white\r\n}\r\n\r\n.page[_ngcontent-%COMP%] {\r\n    padding: var(--page-content-padding, 24px 0);\r\n    max-width: var(--page-max-width);\r\n    min-height: 50vh\r\n}\r\n\r\n.page__icon[_ngcontent-%COMP%] {\r\n    margin-bottom: 24px\r\n}\r\n\r\n.page--empty[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 4px;\r\n    font-size: var(--h3-font-size);\r\n    line-height: var(--heading-line-height)\r\n}\r\n\r\n.page--empty__subtitle[_ngcontent-%COMP%] {\r\n    margin: 12px 0;\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size)\r\n}\r\n\r\n.sermon-details__container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    margin: 16px\r\n}\r\n\r\n.sermon-details__cover-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n.sermon-details__no-cover[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    border: 1px solid var(--border-color);\r\n    border-radius: 3px;\r\n    padding: 32px;\r\n    width: 100%;\r\n    min-height: 280px;\r\n    vertical-align: center\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__no-cover[_ngcontent-%COMP%] {\r\n        -webkit-box-orient:horizontal;\r\n        -webkit-box-direction: normal;\r\n        flex-direction: row;\r\n        padding: 64px\r\n    }\r\n}\r\n\r\n.sermon-details__no-cover-icon[_ngcontent-%COMP%] {\r\n    margin: 0 32px 24px 0\r\n}\r\n\r\n.sermon-details__no-cover-date[_ngcontent-%COMP%] {\r\n    margin-bottom: 8px\r\n}\r\n\r\n.sermon-details__no-cover-speaker[_ngcontent-%COMP%] {\r\n    margin: 8px 0\r\n}\r\n\r\n.sermon-details__audio[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    margin: 12px\r\n}\r\n\r\n.sermon-details__actions[_ngcontent-%COMP%] {\r\n    margin-top: 8px\r\n}\r\n\r\n.sermon-details__embed[_ngcontent-%COMP%] {\r\n    border-radius: var(--item-border-radius)\r\n}\r\n\r\n.sermon-details__meta[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    margin-bottom: 24px\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__meta[_ngcontent-%COMP%] {\r\n        -webkit-box-orient:horizontal;\r\n        -webkit-box-direction: normal;\r\n        flex-direction: row;\r\n        margin: 32px 0 24px\r\n    }\r\n}\r\n\r\n.sermon-details__meta-divider[_ngcontent-%COMP%] {\r\n    display: none\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__meta-divider[_ngcontent-%COMP%] {\r\n        display:inline;\r\n        margin: 0 8px;\r\n        line-height: normal\r\n    }\r\n}\r\n\r\n.sermon-details__preached-date[_ngcontent-%COMP%] {\r\n    display: inline\r\n}\r\n\r\n.sermon-details__tag[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border: 1px solid #d6d6d6;\r\n    border-radius: 4px;\r\n    margin: 8px 0 0;\r\n    padding: 8px 12px\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .sermon-details__tag[_ngcontent-%COMP%] {\r\n        margin-right:8px\r\n    }\r\n}\r\n\r\n.sermon-details__tag[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.sermon-details__share[_ngcontent-%COMP%] {\r\n    margin: 24px 0\r\n}\r\n\r\n.sermon-details__description[_ngcontent-%COMP%] {\r\n    border-top: 1px solid var(--border-color);\r\n    margin: 16px 0;\r\n    padding-top: 12px\r\n}\r\n\r\n.event-date-square[_ngcontent-%COMP%] {\r\n    display: var(--event-date-square-display);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    -webkit-box-pack: var(--event-date-square-justify-content);\r\n    justify-content: var(--event-date-square-justify-content);\r\n    border: var(--event-date-square-border);\r\n    border-radius: var(--event-date-square-border-radius);\r\n    width: var(--event-date-square-container-diameter);\r\n    height: var(--event-date-square-container-diameter);\r\n    min-width: var(--event-date-square-container-diameter);\r\n    margin: var(--event-date-square-margin);\r\n    background: var(--event-date-square-background)\r\n}\r\n\r\n.event-date-square__end[_ngcontent-%COMP%] {\r\n    border-top: var(--event-date-square-multi-day-divider);\r\n    font-size: var(--event-date-small-font-size);\r\n    font-family: var(--ui-font-family);\r\n    color: var(--event-date-square-text-color);\r\n    padding-top: var(--event-date-square-multi-day-top-padding);\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.event-date-square__day[_ngcontent-%COMP%] {\r\n    font-size: var(--event-date-day-font-size);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    color: var(--event-date-square-text-color);\r\n    line-height: 1;\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.event-date-square__month[_ngcontent-%COMP%] {\r\n    font-size: var(--event-date-small-font-size);\r\n    font-family: var(--ui-font-family);\r\n    color: var(--event-date-square-text-color);\r\n    padding: var(--event-date-month-padding);\r\n    background: var(--event-date-month-background);\r\n    border-radius: var(--event-date-square-border-radius) var(--event-date-square-border-radius) 0 0;\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.event-item__date-inline[_ngcontent-%COMP%] {\r\n    display: var(--event-date-inline-display);\r\n    margin-right: 4px\r\n}\r\n\r\n.event-item__day-of-week[_ngcontent-%COMP%] {\r\n    margin-right: 4px\r\n}\r\n\r\n.event-item__details[_ngcontent-%COMP%] {\r\n    display: var(--event-details-display)\r\n}\r\n\r\n.event-item__highlight-details[_ngcontent-%COMP%] {\r\n    margin: var(--event-highlight-details-margin);\r\n    max-width: var(--event-highlight-details-max-width);\r\n    text-align: var(--highlight-details-text-align)\r\n}\r\n\r\n.event-item__location[_ngcontent-%COMP%] {\r\n    margin: var(--event-item-location-margin)\r\n}\r\n\r\n.event-item__location[_ngcontent-%COMP%]:after {\r\n    content: var(--event-item-location-date-divider)\r\n}\r\n\r\n.events-month-view[_ngcontent-%COMP%] {\r\n    border: var(--events-month-view-border);\r\n    width: 100%\r\n}\r\n\r\n.events-month-view[_ngcontent-%COMP%]   .event-button[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n    white-space: nowrap;\r\n    text-align: center\r\n}\r\n\r\n.events-month-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.hero[_ngcontent-%COMP%] {\r\n    border-radius: var(--hero-border-radius);\r\n    background-position: center;\r\n    background-size: cover;\r\n    min-height: var(--hero-min-height)\r\n}\r\n\r\n.hero__container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    padding: var(--fragment-padding);\r\n    width: 100%;\r\n    text-align: center;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1\r\n}\r\n\r\n.hero__buttons[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: column;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    margin: var(--hero-buttons-margin)\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .hero__buttons[_ngcontent-%COMP%] {\r\n        -webkit-box-orient:horizontal;\r\n        -webkit-box-direction: normal;\r\n        flex-direction: row;\r\n        -webkit-box-pack: center;\r\n        justify-content: center\r\n    }\r\n}\r\n\r\n.hero__button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin: 8px 0\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    .hero__button[_ngcontent-%COMP%] {\r\n        margin:16px\r\n    }\r\n}\r\n\r\n.hero__header-text[_ngcontent-%COMP%], .hero__sub-header-text[_ngcontent-%COMP%] {\r\n    color: var(--text-color)\r\n}\r\n\r\n.hero__sub-header-text[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    max-width: var(--hero-sub-header-max-width);\r\n    margin: 0 auto\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--1[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 6px rgba(255,255,255,0.17)\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--2[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 8px rgba(255,255,255,0.61)\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--3[_ngcontent-%COMP%] {\r\n    text-shadow: 0 1px 3px #fff\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--1[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.08)\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--2[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.2)\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--3[_ngcontent-%COMP%] {\r\n    text-shadow: 0 1px 3px #000\r\n}\r\n\r\n.html-fragment-iframe[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    width: 100%\r\n}\r\n\r\n.google-map__container[_ngcontent-%COMP%] {\r\n    height: 475px\r\n}\r\n\r\n.google-map[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: inline\r\n}\r\n\r\n.mobile-download-cta[_ngcontent-%COMP%] {\r\n    position: relative\r\n}\r\n\r\n.mobile-download-cta__link[_ngcontent-%COMP%] {\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    margin-right: 8px\r\n}\r\n\r\n.mobile-download-cta__platform-icon[_ngcontent-%COMP%] {\r\n    margin-right: 4px\r\n}\r\n\r\n.verse-of-the-day__image-container[_ngcontent-%COMP%] {\r\n    text-align: center\r\n}\r\n\r\n.verse-of-the-day__image[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    border-radius: var(--verse-image-border-radius)\r\n}\r\n\r\n.cta[_ngcontent-%COMP%] {\r\n    display: var(--cta-display);\r\n    flex-wrap: var(--cta-flex-wrap);\r\n    padding: var(--fragment-padding);\r\n    -webkit-box-align: var(--cta-align-items);\r\n    align-items: var(--cta-align-items)\r\n}\r\n\r\n.cta--with-image[_ngcontent-%COMP%] {\r\n    padding: var(--background-image-padding);\r\n    max-height: var(--background-image-max-height)\r\n}\r\n\r\n.cta__background[_ngcontent-%COMP%] {\r\n    position: var(--cta-background-image-position);\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: var(--cta-background-width);\r\n    min-height: var(--cta-min-height);\r\n    background-position: var(--fragment-image-background-position);\r\n    background-size: var(--fragment-image-background-size);\r\n    background-color: var(--fragment-background-color)\r\n}\r\n\r\n.cta__background-image[_ngcontent-%COMP%] {\r\n    border-radius: var(--item-border-radius)\r\n}\r\n\r\n.cta__content[_ngcontent-%COMP%] {\r\n    display: var(--cta-content-display);\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--cta-content-flex-direction);\r\n    -webkit-box-pack: var(--cta-content-justify-content);\r\n    justify-content: var(--cta-content-justify-content);\r\n    -webkit-box-align: var(--cta-content-align-items);\r\n    align-items: var(--cta-content-align-items);\r\n    -webkit-box-flex: var(--cta-content-flex);\r\n    flex: var(--cta-content-flex);\r\n    position: relative;\r\n    margin: var(--cta-content-margin);\r\n    padding: var(--cta-content-padding);\r\n    max-width: var(--cta-content-max-width);\r\n    text-align: var(--cta-content-text-align);\r\n    height: var(--cta-content-height)\r\n}\r\n\r\n.cta__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    margin: var(--cta-title-margin)\r\n}\r\n\r\n.cta__body[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size);\r\n    color: var(--text-color);\r\n    margin: var(--cta-body-margin);\r\n    text-align: var(--cta-body-text-align)\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--1[_ngcontent-%COMP%]   .cta__title[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--1[_ngcontent-%COMP%]   .cta__body[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.08)\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--2[_ngcontent-%COMP%]   .cta__title[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--2[_ngcontent-%COMP%]   .cta__body[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 6px rgba(0,0,0,0.2)\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--3[_ngcontent-%COMP%]   .cta__title[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .text-shadow--dark.text-shadow--3[_ngcontent-%COMP%]   .cta__body[_ngcontent-%COMP%] {\r\n    text-shadow: 0 1px 3px #000\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--1[_ngcontent-%COMP%]   .cta__title[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--1[_ngcontent-%COMP%]   .cta__body[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 6px rgba(255,255,255,0.17)\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--2[_ngcontent-%COMP%]   .cta__title[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--2[_ngcontent-%COMP%]   .cta__body[_ngcontent-%COMP%] {\r\n    text-shadow: 0 0 8px rgba(255,255,255,0.61)\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--3[_ngcontent-%COMP%]   .cta__title[_ngcontent-%COMP%], .cta[_ngcontent-%COMP%]   .text-shadow--light.text-shadow--3[_ngcontent-%COMP%]   .cta__body[_ngcontent-%COMP%] {\r\n    text-shadow: 0 1px 3px #fff\r\n}\r\n\r\n.contact-info-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--contact-info-container-flex-direction);\r\n    -webkit-box-pack: var(--contact-info-container-justify-content);\r\n    justify-content: var(--contact-info-container-justify-content);\r\n    -webkit-box-align: var(--contact-info-container-align-items);\r\n    align-items: var(--contact-info-container-align-items)\r\n}\r\n\r\n.contact-info-item[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--contact-info-item-flex-direction);\r\n    -webkit-box-pack: var(--contact-info-item-justify-content);\r\n    justify-content: var(--contact-info-item-justify-content);\r\n    -webkit-box-align: var(--contact-info-item-align-items);\r\n    align-items: var(--contact-info-item-align-items);\r\n    border: var(--contact-info-item-border);\r\n    border-width: var(--contact-info-item-border-width);\r\n    border-radius: var(--contact-info-item-border-radius);\r\n    margin: var(--contact-info-item-margin);\r\n    padding: var(--contact-info-item-padding);\r\n    max-width: 100%;\r\n    width: var(--contact-info-item-width)\r\n}\r\n\r\n.contact-info-item[_ngcontent-%COMP%]:last-child {\r\n    --contact-info-item-margin:0}\r\n\r\n.contact-info-item__details[_ngcontent-%COMP%] {\r\n    margin: var(--contact-info-item-details-margin);\r\n    text-align: var(--contact-info-item-details-text-align);\r\n    overflow-wrap: break-word;\r\n    max-width: 100%;\r\n    min-width: 0\r\n}\r\n\r\n.sermon-grid-item__media-container[_ngcontent-%COMP%] {\r\n    margin: var(--sermon-grid-item-media-container-margin);\r\n    border-radius: var(--sermon-grid-item-media-container-border-radius);\r\n    overflow: hidden\r\n}\r\n\r\n.sermon-grid-item__icon[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 64px;\r\n    color: var(--sermon-icon-color)\r\n}\r\n\r\n.sermon-grid-item__details[_ngcontent-%COMP%] {\r\n    margin: var(--sermon-grid-item-details-margin)\r\n}\r\n\r\n.sermon-grid-item__date[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    color: var(--text-color);\r\n    margin: 0\r\n}\r\n\r\n.sermon-grid-item__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color);\r\n    display: inline-block;\r\n    margin: var(--sermon-grid-item-title-margin)\r\n}\r\n\r\n.sermon-grid-item__title[_ngcontent-%COMP%]:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.sermon-grid-item__passages[_ngcontent-%COMP%] {\r\n    margin: 0\r\n}\r\n\r\n.sermon-grid-item__passages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: var(--text-color)\r\n}\r\n\r\n.sermon-item__passage-dot[_ngcontent-%COMP%] {\r\n    margin: 0 4px\r\n}\r\n\r\n.sermon-highlight__passage[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size);\r\n    color: var(--text-color)\r\n}\r\n\r\n.sermon-highlight__passage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: var(--text-color)\r\n}\r\n\r\n.service-times-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: calc(-1 * var(--service-times-item-gap) / 2)\r\n}\r\n\r\n.clock-icon[_ngcontent-%COMP%] {\r\n    color: var(--icon-color);\r\n    display: var(--service-times-icon-display);\r\n    margin-right: 8px\r\n}\r\n\r\n.clock-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px\r\n}\r\n\r\n.service-times-item-wrapper[_ngcontent-%COMP%] {\r\n    padding: calc(var(--service-times-item-gap) / 2);\r\n    width: var(--service-times-item-width);\r\n    -webkit-box-pack: end;\r\n    justify-content: end\r\n}\r\n\r\n.service-times-item[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    flex-direction: var(--service-times-item-flex-direction);\r\n    -webkit-box-align: var(--service-times-item-align-items);\r\n    align-items: var(--service-times-item-align-items);\r\n    background: var(--service-times-item-background);\r\n    padding: var(--service-times-item-padding);\r\n    border: var(--service-times-item-border);\r\n    border-radius: var(--service-times-item-border-radius);\r\n    box-shadow: var(--service-times-item-box-shadow);\r\n    text-align: var(--service-times-item-text-align);\r\n    height: 100%\r\n}\r\n\r\n.service-times-item[_ngcontent-%COMP%]   .fragment-item-icon-container[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-small-font-size)\r\n}\r\n\r\n.service-times-item__inline-day[_ngcontent-%COMP%] {\r\n    display: var(--service-times-inline-day-display)\r\n}\r\n\r\n.service-times-item__service-container[_ngcontent-%COMP%] {\r\n    margin: var(--service-time-container-margin)\r\n}\r\n\r\n.service-times-item__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    overflow-wrap: break-word\r\n}\r\n\r\n.service-times-item__time-container[_ngcontent-%COMP%] {\r\n    margin: var(--service-times-item-time-top-margin) 0 var(--service-times-item-time-bottom-margin);\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size);\r\n    display: -webkit-inline-box;\r\n    display: inline-flex\r\n}\r\n\r\n.service-times-item__time-container[_ngcontent-%COMP%]:last-child {\r\n    margin: var(--service-times-item-time-top-margin) 0 0 0\r\n}\r\n\r\n.blog-preview-text[_ngcontent-%COMP%] {\r\n    word-break: break-word\r\n}\r\n\r\n.blog-preview-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .blog-preview-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .blog-preview-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .blog-preview-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: inherit;\r\n    line-height: inherit\r\n}\r\n\r\n.blog-preview-text[_ngcontent-%COMP%]   br[_ngcontent-%COMP%], .blog-preview-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .blog-preview-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .blog-preview-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: none\r\n}\r\n\r\n.blog-item-details[_ngcontent-%COMP%] {\r\n    margin: var(--blog-item-details-margin)\r\n}\r\n\r\n.blog-item-details__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h4-font-size);\r\n    line-height: var(--heading-line-height);\r\n    color: var(--text-color)\r\n}\r\n\r\n.blog-item-details__title[_ngcontent-%COMP%]:hover {\r\n    color: var(--hyperlink-hover-color)\r\n}\r\n\r\n.blog-item-details__preview[_ngcontent-%COMP%] {\r\n    margin: var(--blog-grid-item-preview-margin)\r\n}\r\n\r\n.blog-item-details__post-info[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    color: var(--text-color);\r\n    margin: 0\r\n}\r\n\r\n.blog-item-image[_ngcontent-%COMP%] {\r\n    background: var(--fill-1-color);\r\n    border-radius: var(--blog-item-image-border-radius);\r\n    background-size: cover;\r\n    background-position: 50%;\r\n    padding-top: var(--multimedia-aspect-ratio-percentage);\r\n    height: var(--blog-item-image-height);\r\n    max-height: var(--blog-item-image-max-height)\r\n}\r\n\r\n.blog-grid-item[_ngcontent-%COMP%] {\r\n    box-shadow: var(--item-box-shadow);\r\n    overflow: hidden\r\n}\r\n\r\n.blog-list-item[_ngcontent-%COMP%] {\r\n    display: var(--blog-list-item-display);\r\n    border: var(--list-item-border);\r\n    padding: var(--list-item-padding);\r\n    margin: var(--list-item-margin);\r\n    border-width: var(--list-item-border-width);\r\n    border-radius: var(--list-item-border-radius);\r\n    box-shadow: var(--item-box-shadow);\r\n    background: var(--list-item-background);\r\n    overflow: hidden\r\n}\r\n\r\n.blog-list-item[_ngcontent-%COMP%]:first-child {\r\n    padding-top: 0\r\n}\r\n\r\n.blog-list-item__image-container[_ngcontent-%COMP%] {\r\n    width: var(--blog-list-image-width);\r\n    -webkit-box-flex: 0;\r\n    flex: 0 0 auto\r\n}\r\n\r\n.blog-highlight[_ngcontent-%COMP%] {\r\n    display: var(--blog-highlight-display);\r\n    grid-template-columns: var(--blog-highlight-grid-template-columns);\r\n    grid-column-gap: var(--blog-highlight-grid-column-gap);\r\n    overflow: hidden\r\n}\r\n\r\n.blog-highlight__icon[_ngcontent-%COMP%] {\r\n    margin: 0 auto\r\n}\r\n\r\n.blog-highlight__image-container[_ngcontent-%COMP%] {\r\n    width: var(--highlight-image-container-width);\r\n    margin: var(--highlight-image-container-margin);\r\n    -webkit-box-flex: 0;\r\n    flex: 0 0 auto\r\n}\r\n\r\n.blog-highlight__post-info[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size);\r\n    color: var(--text-color);\r\n    margin: 0\r\n}\r\n\r\n.blog-highlight__preview[_ngcontent-%COMP%] {\r\n    margin: var(--blog-highlight-preview-margin)\r\n}\r\n\r\n.blog-highlight__detail-page-link[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    cursor: pointer\r\n}\r\n\r\n.blog-highlight--no-image[_ngcontent-%COMP%]   .blog-highlight__image-container[_ngcontent-%COMP%] {\r\n    width: var(--blog-highlight-background-width);\r\n    height: var(--blog-highlight-background-height);\r\n    background: var(--blog-item-image-container-background);\r\n    border-radius: var(--blog-item-image-border-radius)\r\n}\r\n\r\n.live-stream__embed[_ngcontent-%COMP%] {\r\n    border-radius: var(--item-border-radius);\r\n    overflow: hidden\r\n}\r\n\r\n.digital-signage__embed[_ngcontent-%COMP%] {\r\n    border-radius: var(--item-border-radius);\r\n    overflow: hidden\r\n}\r\n\r\n.detail-page__container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n    padding: 0 16px\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .detail-page__container[_ngcontent-%COMP%] {\r\n        padding:0 64px\r\n    }\r\n}\r\n\r\n.event-details[_ngcontent-%COMP%]   .event-date-square__end[_ngcontent-%COMP%] {\r\n    font-family: var(--ui-font-family);\r\n    font-weight: var(--ui-font-weight);\r\n    line-height: var(--ui-line-height);\r\n    font-size: var(--ui-medium-size)\r\n}\r\n\r\n.event-details__title[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    margin-bottom: 8px;\r\n    font-size: var(--h2-font-size);\r\n    line-height: var(--heading-line-height);\r\n    margin-bottom: 12px\r\n}\r\n\r\n.event-details__details[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-medium-font-size)\r\n}\r\n\r\n.event-details__details-header[_ngcontent-%COMP%] {\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    font-size: var(--h5-font-size);\r\n    line-height: var(--heading-line-height);\r\n    margin-bottom: 16px\r\n}\r\n\r\n.event-details__info[_ngcontent-%COMP%] {\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height);\r\n    font-size: var(--body-text-large-font-size)\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    background-color: var(--background-2-color);\r\n    padding: 32px 0;\r\n    color: var(--text-color)\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .block-new-section[_ngcontent-%COMP%] {\r\n    color: var(--text-color);\r\n    border-color: var(--text-color)\r\n}\r\n\r\n.footer__social[_ngcontent-%COMP%] {\r\n    text-align: center\r\n}\r\n\r\n.footer__social-link[_ngcontent-%COMP%] {\r\n    margin: 0 8px\r\n}\r\n\r\n.footer__social-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.footer__social-link[_ngcontent-%COMP%]   .social-icon--faithlife[_ngcontent-%COMP%] {\r\n    color: inherit\r\n}\r\n\r\n.footer__sections[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    margin: 32px 0;\r\n    grid-row-gap: 32px\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .footer__sections[_ngcontent-%COMP%] {\r\n        grid-template-columns:repeat(2, 45%);\r\n        grid-column-gap: 32px;\r\n        margin: 64px 0\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .footer__sections[_ngcontent-%COMP%] {\r\n        grid-template-columns:repeat(4, 22%)\r\n    }\r\n}\r\n\r\n.footer__menu[_ngcontent-%COMP%] {\r\n    margin: 0 0 32px;\r\n    text-align: center\r\n}\r\n\r\n.footer__menu-link[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin: 12px\r\n}\r\n\r\n.footer__copyright[_ngcontent-%COMP%] {\r\n    text-align: center\r\n}\r\n\r\n.members-page[_ngcontent-%COMP%] {\r\n    margin: 32px 0;\r\n    text-align: center\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .members-page[_ngcontent-%COMP%] {\r\n        margin:32px 0\r\n    }\r\n}\r\n\r\n.homepage[_ngcontent-%COMP%] {\r\n    padding: var(--homepage-padding)\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n    padding-bottom: var(--page-header-padding-bottom, 8px);\r\n    font-size: var(--h2-font-size);\r\n    text-align: var(--page-header-text-alignment, center)\r\n}\r\n\r\n.header-engagement[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    height: var(--header-menu-item-height)\r\n}\r\n\r\n.header-engagement__text[_ngcontent-%COMP%] {\r\n    font-size: var(--body-text-small-font-size);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    vertical-align: middle;\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.header-engagement__text[_ngcontent-%COMP%]:hover {\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.header-engagement__profile[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    color: var(--hyperlink-color)\r\n}\r\n\r\n.header-engagement__link-icon[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 8px;\r\n    width: 24px;\r\n    height: 24px\r\n}\r\n\r\n.header-engagement__link-icon--user[_ngcontent-%COMP%] {\r\n    border-radius: var(--header-icon-border-radius)\r\n}\r\n\r\n.header-engagement__link-icon--user-default-icon[_ngcontent-%COMP%] {\r\n    color: var(--header-default-icon-color)\r\n}\r\n\r\n.header-engagement__follow[_ngcontent-%COMP%] {\r\n    margin-left: 4px\r\n}\r\n\r\n.header-engagement__link[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    flex-shrink: 0;\r\n    padding: 0 12px\r\n}\r\n\r\n.header-engagement__link[_ngcontent-%COMP%]:last-child {\r\n    padding-right: 0\r\n}\r\n\r\n.header-engagement__link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .header-engagement__link[_ngcontent-%COMP%] {\r\n        margin-bottom:0\r\n    }\r\n}\r\n\r\n.profile-dropdown[_ngcontent-%COMP%] {\r\n    position: relative\r\n}\r\n\r\n.profile-dropdown__container[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    box-shadow: var(--header-dropdown-box-shadow);\r\n    text-transform: var(--header-dropdown-text-transform);\r\n    border-radius: var(--header-dropdown-border-radius);\r\n    border: var(--header-dropdown-border)\r\n}\r\n\r\n.profile-dropdown__list[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.profile-dropdown__list-item[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 12px\r\n}\r\n\r\n.profile-dropdown__item[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.group-branding[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0 8px 0 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    flex-wrap: wrap\r\n}\r\n\r\n.group-branding__name[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: var(--group-branding-font-size);\r\n    line-height: var(--group-branding-line-height);\r\n    font-family: var(--heading-font-family);\r\n    font-weight: var(--heading-font-weight);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.group-branding__name[_ngcontent-%COMP%], .group-branding__name[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.group-branding__name[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    margin-left: 16px\r\n}\r\n\r\n.group-branding__icon[_ngcontent-%COMP%] {\r\n    border-radius: var(--header-icon-border-radius)\r\n}\r\n\r\n.group-branding__icon--small[_ngcontent-%COMP%] {\r\n    height: 32px\r\n}\r\n\r\n.group-branding__icon--medium[_ngcontent-%COMP%] {\r\n    height: 44px\r\n}\r\n\r\n.group-branding__icon--large[_ngcontent-%COMP%] {\r\n    height: 96px\r\n}\r\n\r\n.group-branding[_ngcontent-%COMP%]   .edit-item[_ngcontent-%COMP%] {\r\n    min-width: unset\r\n}\r\n\r\n.slideout-menu-account[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 24px 0 12px;\r\n    font-family: var(--body-font-family);\r\n    font-weight: var(--body-font-weight);\r\n    line-height: var(--body-text-line-height)\r\n}\r\n\r\n.slideout-menu-account--unauthenticated[_ngcontent-%COMP%] {\r\n    padding-bottom: 32px\r\n}\r\n\r\n.slideout-menu-account__unauthenticated-link[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    margin-right: 24px;\r\n    font-size: var(--body-text-small-font-size);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.slideout-menu-account__unauthenticated-link[_ngcontent-%COMP%]:hover {\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.slideout-menu-account__unauthenticated-icon[_ngcontent-%COMP%] {\r\n    margin-right: 4px;\r\n    width: 24px;\r\n    height: 24px\r\n}\r\n\r\n.slideout-menu-account__profile-image[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    margin-right: 16px;\r\n    width: 44px;\r\n    height: 44px\r\n}\r\n\r\n.slideout-menu-account__sign-out-link[_ngcontent-%COMP%] {\r\n    font-size: var(--body-text-small-font-size);\r\n    color: var(--menu-item-color)\r\n}\r\n\r\n.slideout-menu-account__sign-out-link[_ngcontent-%COMP%]:hover {\r\n    color: var(--menu-item-hover-color)\r\n}\r\n\r\n.slideout-menu-account__name[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n    font-size: var(--body-text-large-font-size)\r\n}\r\n\r\n.tp[_ngcontent-%COMP%]{\r\n            display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n\t-webkit-margin-end: 0px;\r\n\t        margin-inline-end: 0px;\r\n\tbackground-color: white;\r\n\t\t}\r\n\r\n.viewLinks[_ngcontent-%COMP%] {\r\n\t\t\tbackground-color: #395c80 !important;\r\n\t\t\tborder: none;\r\n\t\t\tcolor: white;\r\n\t\t\tpadding: 10px;\r\n\t\t\ttext-align: center;\r\n\t\t\ttext-decoration: none;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tmargin: 4px 2px;\r\n\t\t\tcursor: pointer;\r\n\t\t\tborder-radius: 8px;\r\n\t\t\tmargin-right: 1%;\r\n          }\r\n\r\n.pl-wrapper[_ngcontent-%COMP%]{\r\n            \r\n            background: #fff;\r\n            \r\n            border-radius: 5px;\r\n            padding: 40px;\r\n            position: relative;\r\n            margin: 0px auto;\r\n            max-width: 1140px;\r\n            border: 1px solid #E2EAF0;\r\n        }\r\n\r\n.per-table[_ngcontent-%COMP%]{\r\n            border-bottom: 1px solid #eee;\r\n            color: #999 !important;\r\n        }\r\n\r\n.e-border-none[_ngcontent-%COMP%]{\r\n            border-bottom: none;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlua3MvbGlua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUNBQW1DLENBQUMsNkNBQTZDLENBQUMsNkNBQTZDLENBQUMseURBQXlELENBQUMsNkNBQTZDLENBQUMseURBQXlELENBQUMsNkRBQTZELENBQUMsdUNBQXVDLENBQUMsdUNBQXVDLENBQUMsdUNBQXVDLENBQUMsOENBQThDLENBQUMsOENBQThDLENBQUMsOENBQThDLENBQUMsNkRBQTZELENBQUMsbUNBQW1DLENBQUMseURBQXlELENBQUMsaURBQWlELENBQUMsdUNBQXVDLENBQUMsdURBQXVELENBQUMsaUVBQWlFLENBQUMsbUVBQW1FLENBQUMsNkVBQTZFLENBQUMsMkRBQTJELENBQUMscUVBQXFFLENBQUMsdUVBQXVFLENBQUMsaUZBQWlGLENBQUMsaURBQWlELENBQUMsMkRBQTJELENBQUMsNkRBQTZELENBQUMsdUVBQXVFOztBQUUxbkQ7SUFDSSxvQ0FBb0MsQ0FBQyw4Q0FBOEMsQ0FBQyw4Q0FBOEMsQ0FBQywwREFBMEQsQ0FBQyw4Q0FBOEMsQ0FBQywwREFBMEQsQ0FBQyw4REFBOEQsQ0FBQyx3Q0FBd0MsQ0FBQyx3Q0FBd0MsQ0FBQyx3Q0FBd0MsQ0FBQyw2Q0FBNkMsQ0FBQyw2Q0FBNkMsQ0FBQyw2Q0FBNkMsQ0FBQyx1Q0FBdUMsQ0FBQyw4REFBOEQsQ0FBQyxvQ0FBb0MsQ0FBQywwREFBMEQsQ0FBQyxrREFBa0QsQ0FBQyx3REFBd0QsQ0FBQyxrRUFBa0UsQ0FBQyxvRUFBb0UsQ0FBQyw4RUFBOEUsQ0FBQyw0REFBNEQsQ0FBQyxzRUFBc0UsQ0FBQyx3RUFBd0UsQ0FBQyxrRkFBa0YsQ0FBQyxrREFBa0QsQ0FBQyw0REFBNEQsQ0FBQyw4REFBOEQsQ0FBQyx3RUFBd0U7O0FBRWpwRDtJQUVJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDLDJCQUEyQixDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLCtCQUErQixDQUFDLGdDQUFnQyxDQUFDLCtCQUErQixDQUFDLGdDQUFnQyxDQUFDLHFDQUFxQyxDQUFDLHlDQUF5QyxDQUFDLG9EQUFvRCxDQUFDLGlDQUFpQyxDQUFDLGlDQUFpQyxDQUFDLDBEQUEwRCxDQUFDLDRCQUE0QixDQUFDLGdDQUFnQyxDQUFDLGlDQUFpQyxDQUFDLGdDQUFnQyxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLGlDQUFpQyxDQUFDLDhDQUE4QyxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLDhCQUE4QixDQUFDLDZEQUE2RCxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLHdDQUF3QyxDQUFDLHlCQUF5QixDQUFDLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLDRCQUE0QixDQUFDLG1DQUFtQyxDQUFDLHlDQUF5QyxDQUFDLDZCQUE2QixDQUFDLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLGlEQUFpRCxDQUFDLG1DQUFtQyxDQUFDLGtDQUFrQyxDQUFDLHVDQUF1QyxDQUFDLGlDQUFpQyxDQUFDLHFDQUFxQyxDQUFDLHFDQUFxQyxDQUFDLHVDQUF1QyxDQUFDLG1DQUFtQyxDQUFDLHFDQUFxQyxDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLDZCQUE2QixDQUFDLGtEQUFrRCxDQUFDLHFDQUFxQyxDQUFDLHlCQUF5QixDQUFDLGtEQUFrRCxDQUFDLHNDQUFzQyxDQUFDLDJCQUEyQixDQUFDLGtDQUFrQyxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLDRCQUE0QixDQUFDLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLHdDQUF3QyxDQUFDLHlDQUF5QyxDQUFDLGlDQUFpQyxDQUFDLGtDQUFrQyxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixDQUFDLDBCQUEwQixDQUFDLGlDQUFpQyxDQUFDLHlDQUF5QyxDQUFDLDBDQUEwQyxDQUFDLGdDQUFnQyxDQUFDLGdDQUFnQyxDQUFDLG1EQUFtRCxDQUFDLGtDQUFrQyxDQUFDLGdDQUFnQyxDQUFDLDRDQUE0QyxDQUFDLDJDQUEyQyxDQUFDLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDLDJCQUEyQixDQUFDLGtDQUFrQyxDQUFDLDhCQUE4QixDQUFDLGdDQUFnQyxDQUFDLDhCQUE4QixDQUFDLDZCQUE2QixDQUFDLDJCQUEyQixDQUFDLHlCQUF5QixDQUFDLDZCQUE2QixDQUFDLCtCQUErQixDQUFDLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDLHdDQUF3QyxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLG9DQUFvQyxDQUFDLHFDQUFxQyxDQUFDLGlDQUFpQyxDQUFDLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLDhCQUE4QixDQUFDLGtDQUFrQyxDQUFDLHFDQUFxQyxDQUFDLGtDQUFrQyxDQUFDLG1DQUFtQyxDQUFDLHNDQUFzQyxDQUFDLDhCQUE4QixDQUFDLGtDQUFrQyxDQUFDLG1EQUFtRCxDQUFDLHFCQUFxQixDQUFDLGtDQUFrQyxDQUFDLHVCQUF1QixDQUFDLHVDQUF1QyxDQUFDLDhDQUE4QyxDQUFDLCtDQUErQyxDQUFDLDJDQUEyQyxDQUFDLHlDQUF5QyxDQUFDLDBDQUEwQyxDQUFDLHNDQUFzQyxDQUFDLGdDQUFnQyxDQUFDLHNDQUFzQyxDQUFDLG1DQUFtQyxDQUFDLG1DQUFtQyxDQUFDLDZCQUE2QixDQUFDLCtCQUErQixDQUFDLDZDQUE2QyxDQUFDLDJDQUEyQyxDQUFDLHVDQUF1QyxDQUFDLG1DQUFtQyxDQUFDLHNDQUFzQyxDQUFDLGtDQUFrQyxDQUFDLG1DQUFtQyxDQUFDLDRCQUE0QixDQUFDLDZCQUE2QixDQUFDLHlCQUF5QixDQUFDLDRCQUE0QixDQUFDLHVCQUF1QixDQUFDLCtCQUErQixDQUFDLGtDQUFrQyxDQUFDLDJCQUEyQixDQUFDLHlCQUF5QixDQUFDLDZCQUE2QixDQUFDLG9CQUFvQixDQUFDLGtDQUFrQyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2QixDQUFDLCtCQUErQixDQUFDLG9DQUFvQyxDQUFDLHVDQUF1QyxDQUFDLDBDQUEwQyxDQUFDLG1DQUFtQyxDQUFDLHNDQUFzQyxDQUFDLDBDQUEwQyxDQUFDLHVDQUF1QyxDQUFDLHlDQUF5QyxDQUFDLDRDQUE0QyxDQUFDLHVDQUF1QyxDQUFDLGtDQUFrQyxDQUFDLDJCQUEyQixDQUFDLDhCQUE4QixDQUFDLG1DQUFtQyxDQUFDLDhCQUE4QixDQUFDLDRCQUE0QixDQUFDLG1EQUFtRCxDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDLHFDQUFxQyxDQUFDLGlDQUFpQyxDQUFDLHNDQUFzQyxDQUFDLDhDQUE4QyxDQUFDLCtDQUErQyxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLHVDQUF1QyxDQUFDLDZCQUE2QixDQUFDLGtDQUFrQyxDQUFDLHNDQUFzQyxDQUFDLDBDQUEwQyxDQUFDLCtCQUErQixDQUFDLDhCQUE4QixDQUFDLDRCQUE0QixDQUFDLDhCQUE4QixDQUFDLDJDQUEyQyxDQUFDLG9EQUFvRCxDQUFDLHFDQUFxQyxDQUFDLGtEQUFrRCxDQUFDLG1DQUFtQyxDQUFDLHFEQUFxRCxDQUFDLDJEQUEyRCxDQUFDLDBDQUEwQyxDQUFDLGlDQUFpQyxDQUFDLDBCQUEwQixDQUFDLCtCQUErQixDQUFDLG1DQUFtQyxDQUFDLDJDQUEyQyxDQUFDLCtCQUErQixDQUFDLHNDQUFzQyxDQUFDLHFDQUFxQyxDQUFDLHlCQUF5QixDQUFDLDRCQUE0QixDQUFDLHVDQUF1QyxDQUFDLHVFQUF1RSxDQUFDLHdDQUF3QyxDQUFDLHNDQUFzQyxDQUFDLHlDQUF5QyxDQUFDLHVDQUF1QyxDQUFDLHlDQUF5QyxDQUFDLHVDQUF1QyxDQUFDLGlEQUFpRCxDQUFDLHFDQUFxQyxDQUFDLDBCQUEwQixDQUFDLDZCQUE2QixDQUFDLGlDQUFpQyxDQUFDLG1DQUFtQyxDQUFDLHdCQUF3QixDQUFDLCtCQUErQjs7QUFFem5RO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixtQ0FBbUMsQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxzQ0FBc0MsQ0FBQyxzQ0FBc0MsQ0FBQyxzQkFBc0I7QUFDNUw7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QiwwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQyx1QkFBdUI7QUFDOUY7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQzs7QUFFdkM7SUFDSSx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyx3Q0FBd0MsQ0FBQyxxQ0FBcUM7O0FBRWhJO0lBQ0ksa0NBQWtDLENBQUMsdUNBQXVDLENBQUMsMENBQTBDLENBQUMsd0NBQXdDLENBQUMscUNBQXFDLENBQUMsNEJBQTRCLENBQUMsZ0NBQWdDLENBQUMsZ0RBQWdELENBQUMsZ0NBQWdDLENBQUMsMENBQTBDLENBQUMsNkRBQTZELENBQUMscUNBQXFDLENBQUMsMkNBQTJDLENBQUMsMENBQTBDLENBQUMsd0VBQXdFLENBQUMsNkNBQTZDLENBQUMsNEJBQTRCLENBQUMseUNBQXlDLENBQUMsaUNBQWlDLENBQUMsK0JBQStCLENBQUMsc0NBQXNDLENBQUMsa0NBQWtDLENBQUMscUNBQXFDOztBQUU5NkI7SUFDSSwyQ0FBMkMsQ0FBQyxzQ0FBc0M7O0FBRXRGO0lBQ0ksMkJBQTJCLENBQUMsbUNBQW1DLENBQUMscUNBQXFDLENBQUMsd0NBQXdDOztBQUVsSjtJQUNJLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLG9DQUFvQyxDQUFDLG1DQUFtQyxDQUFDLGtDQUFrQyxDQUFDLG1DQUFtQyxDQUFDLDRCQUE0Qjs7QUFFak87SUFDSSxxQkFBcUIsQ0FBQywwREFBMEQ7O0FBRXBGO0lBQ0ksbUNBQW1DLENBQUMsb0NBQW9DLENBQUMsMENBQTBDLENBQUMscUNBQXFDLENBQUMsaUNBQWlDOztBQUUvTDtJQUNJLG1DQUFtQzs7QUFFdkM7SUFDSSxvQ0FBb0MsQ0FBQyxvQ0FBb0M7O0FBRTdFO0lBQ0ksNkNBQTZDLENBQUMsNENBQTRDLENBQUMsOENBQThDLENBQUMsNENBQTRDLENBQUMsMERBQTBEOztBQUVyUDtJQUNJLDREQUE0RDs7QUFFaEU7SUFDSSwyQ0FBMkM7O0FBRS9DO0lBQ0ksMENBQTBDOztBQUU5QztJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLCtCQUErQixDQUFDLDJDQUEyQyxDQUFDLCtDQUErQyxDQUFDLHNDQUFzQyxDQUFDLDRCQUE0QixDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLHFDQUFxQyxDQUFDLCtCQUErQixDQUFDLHVDQUF1QyxDQUFDLDhCQUE4QixDQUFDLHlDQUF5QyxDQUFDLDhCQUE4QixDQUFDLHdDQUF3QyxDQUFDLGdDQUFnQyxDQUFDLGlDQUFpQyxDQUFDLGtEQUFrRCxDQUFDLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLDZCQUE2QixDQUFDLG9DQUFvQyxDQUFDLHNDQUFzQyxDQUFDLGlDQUFpQzs7SUFFejlCO1FBQ0ksOEJBQThCLENBQUMsOEJBQThCLENBQUMsc0NBQXNDOztJQUV4RztRQUNJLCtCQUErQjs7SUFFbkM7UUFDSSx5QkFBeUI7O0lBRTdCO1FBQ0ksa0NBQWtDO0FBQzFDOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0kseURBQXlEO0FBQ2pFOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsbUNBQW1DLENBQUMsNkJBQTZCLENBQUMsd0NBQXdDLENBQUMsNkJBQTZCLENBQUMsOENBQThDLENBQUMscUNBQXFDOztJQUVqTztRQUNJLDZCQUE2Qjs7SUFFakM7UUFDSSxtQ0FBbUM7O0lBRXZDO1FBQ0ksaUNBQWlDLENBQUMseUNBQXlDLENBQUMsaUNBQWlDLENBQUMsbUNBQW1DLENBQUMseUNBQXlDOztJQUUvTDtRQUNJLHlEQUF5RDtBQUNqRTs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLG1DQUFtQyxDQUFDLDRCQUE0QixDQUFDLCtDQUErQyxDQUFDLG1DQUFtQyxDQUFDLDJDQUEyQyxDQUFDLDJDQUEyQyxDQUFDLDhCQUE4QixDQUFDLDhDQUE4QyxDQUFDLDhDQUE4QyxDQUFDLHVDQUF1QyxDQUFDLG9DQUFvQyxDQUFDLG9DQUFvQyxDQUFDLDBDQUEwQyxDQUFDLDRCQUE0QixDQUFDLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDLHlDQUF5QyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2Qjs7SUFFM3RCO1FBQ0ksa0NBQWtDOztJQUV0QztRQUNJLG1CQUFtQjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLG1DQUFtQyxDQUFDLDRCQUE0QixDQUFDLCtDQUErQyxDQUFDLG1DQUFtQyxDQUFDLDJDQUEyQyxDQUFDLDJDQUEyQyxDQUFDLDhCQUE4QixDQUFDLDhDQUE4QyxDQUFDLDhDQUE4QyxDQUFDLHVDQUF1QyxDQUFDLG9DQUFvQyxDQUFDLG9DQUFvQyxDQUFDLDBDQUEwQyxDQUFDLDRCQUE0QixDQUFDLGtDQUFrQyxDQUFDLDZCQUE2QixDQUFDLHlDQUF5QyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2Qjs7SUFFM3RCO1FBQ0ksa0NBQWtDOztJQUV0QztRQUNJLG1CQUFtQjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLG1DQUFtQyxDQUFDLG1DQUFtQyxDQUFDLHNDQUFzQyxDQUFDLDZDQUE2QyxDQUFDLDJDQUEyQyxDQUFDLG1EQUFtRCxDQUFDLDhDQUE4QyxDQUFDLDhDQUE4QyxDQUFDLDJDQUEyQyxDQUFDLDhCQUE4QixDQUFDLHVDQUF1QyxDQUFDLG9DQUFvQyxDQUFDLG9DQUFvQyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2QixDQUFDLDZCQUE2QixDQUFDLGdDQUFnQyxDQUFDLHNCQUFzQixDQUFDLHlDQUF5QyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2Qjs7SUFFbDJCO1FBQ0ksa0NBQWtDOztJQUV0QztRQUNJLG9DQUFvQzs7SUFFeEM7UUFDSSxtQkFBbUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLCtCQUErQixDQUFDLDJDQUEyQyxDQUFDLCtDQUErQyxDQUFDLHNDQUFzQyxDQUFDLDRCQUE0QixDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLHFDQUFxQyxDQUFDLCtCQUErQixDQUFDLHVDQUF1QyxDQUFDLDhCQUE4QixDQUFDLHlDQUF5QyxDQUFDLDhCQUE4QixDQUFDLHdDQUF3QyxDQUFDLGdDQUFnQyxDQUFDLGlDQUFpQyxDQUFDLGtEQUFrRCxDQUFDLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLDZCQUE2QixDQUFDLG9DQUFvQyxDQUFDLHNDQUFzQyxDQUFDLGlDQUFpQzs7SUFFejlCO1FBQ0ksOEJBQThCLENBQUMsOEJBQThCLENBQUMsc0NBQXNDOztJQUV4RztRQUNJLCtCQUErQjs7SUFFbkM7UUFDSSx5QkFBeUI7O0lBRTdCO1FBQ0ksa0NBQWtDO0FBQzFDOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0kseURBQXlEO0FBQ2pFOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsbUNBQW1DLENBQUMsNkJBQTZCLENBQUMsd0NBQXdDLENBQUMsNkJBQTZCLENBQUMsOENBQThDLENBQUMscUNBQXFDOztJQUVqTztRQUNJLDZCQUE2Qjs7SUFFakM7UUFDSSxtQ0FBbUM7O0lBRXZDO1FBQ0ksaUNBQWlDLENBQUMseUNBQXlDLENBQUMsaUNBQWlDLENBQUMsbUNBQW1DLENBQUMseUNBQXlDOztJQUUvTDtRQUNJLHlEQUF5RDtBQUNqRTs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLG1DQUFtQyxDQUFDLG1DQUFtQyxDQUFDLHNDQUFzQyxDQUFDLDZDQUE2QyxDQUFDLDJDQUEyQyxDQUFDLG1EQUFtRCxDQUFDLDhDQUE4QyxDQUFDLDhDQUE4QyxDQUFDLDJDQUEyQyxDQUFDLDhCQUE4QixDQUFDLHVDQUF1QyxDQUFDLG9DQUFvQyxDQUFDLG9DQUFvQyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2QixDQUFDLDZCQUE2QixDQUFDLGdDQUFnQyxDQUFDLHNCQUFzQixDQUFDLHlDQUF5QyxDQUFDLDBDQUEwQyxDQUFDLDZCQUE2Qjs7SUFFbDJCO1FBQ0ksa0NBQWtDOztJQUV0QztRQUNJLG9DQUFvQzs7SUFFeEM7UUFDSSxtQkFBbUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQyxDQUFDLDBCQUEwQjs7QUFFakU7SUFDSSxtQ0FBbUM7O0FBRXZDO0lBQ0ksZ0RBQWdELENBQUMsb0JBQW9CLENBQUMsK0JBQStCLENBQUMseUNBQXlDLENBQUMseUNBQXlDLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsaUNBQWlDLENBQUMsK0NBQStDLENBQUMsaUNBQWlDLENBQUMsNkJBQTZCLENBQUMsd0NBQXdDLENBQUMsNENBQTRDLENBQUMsb0NBQW9DLENBQUMscUNBQXFDLENBQUMsbUNBQW1DLENBQUMsZ0NBQWdDLENBQUMsMkNBQTJDLENBQUMsdUNBQXVDLENBQUMsNkJBQTZCLENBQUMsdUJBQXVCLENBQUMsc0JBQXNCLENBQUMsMENBQTBDLENBQUMsMENBQTBDLENBQUMsK0NBQStDLENBQUMsMkNBQTJDLENBQUMsb0NBQW9DLENBQUMsMkNBQTJDOztBQUUvZ0M7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBRXBCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFFdEMsc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSw4Q0FBOEM7SUFFOUMsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QyxrREFBa0Q7SUFDbEQsb0RBQW9EO0lBQ3BEO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLHNDQUFzQztJQUV0QyxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IsbUJBQW1CO0lBRW5CLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUN0QixxREFBcUQ7SUFFckQsb0RBQW9EO0lBQ3BELGtEQUFrRDtJQUVsRDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDhCQUE4QjtJQUU5QixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QywyQ0FBMkM7SUFDM0Msb0RBQW9EO0lBQ3BELHlDQUF5QztJQUN6QztBQUNKOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLG1EQUFtRDtJQUNuRCw2Q0FBNkM7SUFDN0M7QUFDSjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCwrQ0FBK0M7SUFDL0M7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsOEJBQThCO0lBRTlCLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsbURBQW1EO0lBQ25ELDZDQUE2QztJQUM3QztBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLCtDQUErQztJQUMvQywrQ0FBK0M7SUFFL0MseUNBQXlDO0lBQ3pDLGtEQUFrRDtJQUVsRCxpREFBaUQ7SUFFakQsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsOERBQThEO0lBQzlEO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFFN0I7QUFDSjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyw4Q0FBOEM7SUFDOUMsb0RBQW9EO0lBQ3BELG9EQUFvRDtJQUNwRCxrREFBa0Q7SUFDbEQsNENBQTRDO0lBQzVDO0FBQ0o7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0M7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsOEJBQThCO0lBRTlCLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDJDQUEyQztJQUMzQyxvREFBb0Q7SUFDcEQ7QUFDSjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsK0NBQStDO0lBQy9DO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBRXhCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFFekIsbUJBQW1CO0lBRW5CLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLG1EQUFtRDtJQUNuRDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixtREFBbUQ7SUFDbkQsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsaUNBQWlDO0lBRWpDLGtDQUFrQztJQUNsQztBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDhCQUE4QjtJQUU5QixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsNkNBQTZDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsMkNBQTJDO0lBQzNDLG9EQUFvRDtJQUNwRDtBQUNKOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELCtDQUErQztJQUMvQztBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyxpREFBaUQ7SUFFakQsMkNBQTJDO0lBQzNDLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsc0NBQXNDO0lBQ3RDLCtDQUErQztJQUMvQyxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLG1CQUFtQjtJQUVuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUVaLDZDQUE2QztJQUM3QyxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25EO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLHlCQUF5QjtJQUV6QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaURBQWlEO0lBQ2pELHlDQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDO0FBQ0o7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBRTNCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUV6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxzREFBc0Q7SUFFdEQscURBQXFEO0lBQ3JELHlCQUF5QjtJQUV6QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3QixtREFBbUQ7SUFDbkQ7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUM7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLG1EQUFtRDtJQUNuRDtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFDYix3QkFBd0I7SUFFeEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUV6QixtQkFBbUI7SUFFbkI7QUFDSjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QywrQ0FBK0M7SUFDL0MsaURBQWlEO0lBQ2pELHdEQUF3RDtJQUN4RCxnREFBZ0Q7SUFDaEQ7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2Isa0RBQWtEO0lBRWxELGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLCtDQUErQztJQUMvQywrQ0FBK0M7SUFFL0MseUNBQXlDO0lBRXpDLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsMkNBQTJDO0lBQzNDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUVuQixZQUFZO0lBQ1oseURBQXlEO0lBRXpELG1EQUFtRDtJQUNuRCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLHlEQUF5RDtJQUN6RDtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3Qix1REFBdUQ7SUFDdkQsdURBQXVEO0lBRXZELGlEQUFpRDtJQUNqRCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBRW5CLFlBQVk7SUFDWixvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLHlCQUF5QjtJQUV6QjtBQUNKOztBQUVBO0lBQ0ksMENBQTBDO0lBRTFDLDhDQUE4QztJQUM5QyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFDNUMsd0NBQXdDO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFFN0Isc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUViO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLCtDQUErQztJQUUvQztBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDO0FBQ0o7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQ7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IsdURBQXVEO0lBRXZELHNEQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLG9EQUFvRDtJQUNwRCw0Q0FBNEM7SUFDNUMsb0RBQW9EO0lBRXBELDhDQUE4QztJQUM5QztBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFDYiw2Q0FBNkM7SUFFN0MsNENBQTRDO0lBQzVDLDBDQUEwQztJQUUxQyxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3QiwwQ0FBMEM7SUFDMUMsMEJBQTBCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFDNUMsMENBQTBDO0lBQzFDO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFFN0Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUV4Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBRXpCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3QixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFFN0IsbUJBQW1CO1FBQ25CO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUVJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFFN0Isc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFFN0IsbUJBQW1CO1FBQ25CO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxhQUFhO1FBQ2I7SUFDSjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUN0QiwwREFBMEQ7SUFFMUQseURBQXlEO0lBQ3pELHVDQUF1QztJQUN2QyxxREFBcUQ7SUFDckQsa0RBQWtEO0lBQ2xELG1EQUFtRDtJQUNuRCxzREFBc0Q7SUFDdEQsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsNENBQTRDO0lBQzVDLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsMkRBQTJEO0lBQzNELFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxrQ0FBa0M7SUFDbEMsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0dBQWdHO0lBQ2hHLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxtREFBbUQ7SUFDbkQ7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBRXhCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFFekIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUVuQjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFFekIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFFN0IsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUV4QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QywyQ0FBMkM7SUFDM0M7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBRXpCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUUzQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHlDQUF5QztJQUV6QztBQUNKOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsOERBQThEO0lBQzlELHNEQUFzRDtJQUN0RDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBRTdCLGlEQUFpRDtJQUNqRCxvREFBb0Q7SUFFcEQsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUVqRCwyQ0FBMkM7SUFDM0MseUNBQXlDO0lBRXpDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3Qiw0REFBNEQ7SUFDNUQsK0RBQStEO0lBRS9ELDhEQUE4RDtJQUM5RCw0REFBNEQ7SUFFNUQ7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUU3Qix1REFBdUQ7SUFDdkQsMERBQTBEO0lBRTFELHlEQUF5RDtJQUN6RCx1REFBdUQ7SUFFdkQsaURBQWlEO0lBQ2pELHVDQUF1QztJQUN2QyxtREFBbUQ7SUFDbkQscURBQXFEO0lBQ3JELHVDQUF1QztJQUN2Qyx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7O0FBRWhDO0lBQ0ksK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsb0VBQW9FO0lBQ3BFO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0M7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUViLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBDQUEwQztJQUMxQztBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBRXJCO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFFN0Isd0RBQXdEO0lBQ3hELHdEQUF3RDtJQUV4RCxrREFBa0Q7SUFDbEQsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFDeEMsc0RBQXNEO0lBRXRELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQ7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QztBQUNKOztBQUVBO0lBQ0ksZ0dBQWdHO0lBQ2hHLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQywyQkFBMkI7SUFFM0I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLDRDQUE0QztJQUM1Qyx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtREFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzREFBc0Q7SUFDdEQscUNBQXFDO0lBQ3JDO0FBQ0o7O0FBRUE7SUFFSSxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBRTdDLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBRW5CO0FBQ0o7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0VBQWtFO0lBQ2xFLHNEQUFzRDtJQUN0RDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QywrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBRW5CO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFDNUMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RDtBQUNKOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDO0FBQ0o7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEM7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG9DQUFvQztRQUNwQyxxQkFBcUI7UUFDckI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFFYixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBRXJCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBRVosNkNBQTZDO0lBQzdDLHFEQUFxRDtJQUNyRCxtREFBbUQ7SUFDbkQ7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFFcEIsYUFBYTtJQUNiLHlCQUF5QjtJQUV6QixtQkFBbUI7SUFFbkIsY0FBYztJQUVkO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMENBQTBDO0lBQzFDLDhDQUE4QztJQUM5Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQztBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUdFO1lBQ1UsY0FBYztJQUN0QiwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQXdCO1lBQXhCLHdCQUF3QjtDQUMzQix1QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtFQUN0Qjs7QUFFQTtHQUNDLG9DQUFvQztHQUNwQyxZQUFZO0dBQ1osWUFBWTtHQUNaLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIscUJBQXFCO0dBQ3JCLHFCQUFxQjtHQUNyQixlQUFlO0dBQ2YsZUFBZTtHQUNmLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsZ0JBQWdCO1VBQ1Q7O0FBR0E7WUFDRSxxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLG9DQUFvQztZQUNwQyxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHlCQUF5QjtRQUM3Qjs7QUFFQTtZQUNJLDZCQUE2QjtZQUM3QixzQkFBc0I7UUFDMUI7O0FBRUE7WUFDSSxtQkFBbUI7UUFDdkIiLCJmaWxlIjoic3JjL2FwcC9saW5rcy9saW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ubGlnaHQtYmFja2dyb3VuZCB7XHJcbiAgICAtLXRleHQtY29sb3I6dmFyKC0tdGV4dC1kYXJrLWNvbG9yKTstLXRleHQtZ3JleS1jb2xvcjp2YXIoLS10ZXh0LWdyZXktZGFyay1jb2xvcik7LS1oeXBlcmxpbmstY29sb3I6dmFyKC0taHlwZXJsaW5rLWRhcmstY29sb3IpOy0taHlwZXJsaW5rLWhvdmVyLWNvbG9yOnZhcigtLWh5cGVybGluay1kYXJrLWhvdmVyLWNvbG9yKTstLW1lbnUtaXRlbS1jb2xvcjp2YXIoLS1tZW51LWl0ZW0tZGFyay1jb2xvcik7LS1tZW51LWl0ZW0taG92ZXItY29sb3I6dmFyKC0tbWVudS1pdGVtLWRhcmstaG92ZXItY29sb3IpOy0tbmF2YmFyLWJhY2tncm91bmQtY29sb3I6dmFyKC0tbmF2YmFyLWJhY2tncm91bmQtZGFyay1jb2xvcik7LS1maWxsLTEtY29sb3I6dmFyKC0tZmlsbC1kYXJrLTEtY29sb3IpOy0tZmlsbC0yLWNvbG9yOnZhcigtLWZpbGwtZGFyay0yLWNvbG9yKTstLWZpbGwtMy1jb2xvcjp2YXIoLS1maWxsLWRhcmstMy1jb2xvcik7LS1iYWNrZ3JvdW5kLTEtY29sb3I6dmFyKC0tZmlsbC1saWdodC0xLWNvbG9yKTstLWJhY2tncm91bmQtMi1jb2xvcjp2YXIoLS1maWxsLWxpZ2h0LTItY29sb3IpOy0tYmFja2dyb3VuZC0zLWNvbG9yOnZhcigtLWZpbGwtbGlnaHQtMy1jb2xvcik7LS1pbWFnZS1wbGFjZWhvbGRlci1jb2xvcjp2YXIoLS1pbWFnZS1wbGFjZWhvbGRlci1kYXJrLWNvbG9yKTstLWljb24tY29sb3I6dmFyKC0taWNvbi1kYXJrLWNvbG9yKTstLWljb24tYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pY29uLWJhY2tncm91bmQtZGFyay1jb2xvcik7LS1pY29uLWJvcmRlci1jb2xvcjp2YXIoLS1pY29uLWJvcmRlci1kYXJrLWNvbG9yKTstLWJvcmRlci1jb2xvcjp2YXIoLS1maWxsLWdyZXktMS1jb2xvcik7LS1idXR0b24tcHJpbWFyeS1jb2xvcjp2YXIoLS1idXR0b24tcHJpbWFyeS1kYXJrLWNvbG9yKTstLWJ1dHRvbi1wcmltYXJ5LXRleHQtY29sb3I6dmFyKC0tYnV0dG9uLXByaW1hcnktdGV4dC1kYXJrLWNvbG9yKTstLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yOnZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWRhcmstY29sb3IpOy0tYnV0dG9uLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjp2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci10ZXh0LWRhcmstY29sb3IpOy0tYnV0dG9uLXNlY29uZGFyeS1jb2xvcjp2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWRhcmstY29sb3IpOy0tYnV0dG9uLXNlY29uZGFyeS10ZXh0LWNvbG9yOnZhcigtLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1kYXJrLWNvbG9yKTstLWJ1dHRvbi1zZWNvbmRhcnktaG92ZXItY29sb3I6dmFyKC0tYnV0dG9uLXNlY29uZGFyeS1ob3Zlci1kYXJrLWNvbG9yKTstLWJ1dHRvbi1zZWNvbmRhcnktaG92ZXItdGV4dC1jb2xvcjp2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLXRleHQtZGFyay1jb2xvcik7LS1idXR0b24tbGlzdC1jb2xvcjp2YXIoLS1idXR0b24tbGlzdC1kYXJrLWNvbG9yKTstLWJ1dHRvbi1saXN0LXRleHQtY29sb3I6dmFyKC0tYnV0dG9uLWxpc3QtdGV4dC1kYXJrLWNvbG9yKTstLWJ1dHRvbi1saXN0LWhvdmVyLWNvbG9yOnZhcigtLWJ1dHRvbi1saXN0LWhvdmVyLWRhcmstY29sb3IpOy0tYnV0dG9uLWxpc3QtaG92ZXItdGV4dC1jb2xvcjp2YXIoLS1idXR0b24tbGlzdC1ob3Zlci10ZXh0LWRhcmstY29sb3IpfVxyXG5cclxuLmRhcmstYmFja2dyb3VuZCB7XHJcbiAgICAtLXRleHQtY29sb3I6dmFyKC0tdGV4dC1saWdodC1jb2xvcik7LS10ZXh0LWdyZXktY29sb3I6dmFyKC0tdGV4dC1ncmV5LWxpZ2h0LWNvbG9yKTstLWh5cGVybGluay1jb2xvcjp2YXIoLS1oeXBlcmxpbmstbGlnaHQtY29sb3IpOy0taHlwZXJsaW5rLWhvdmVyLWNvbG9yOnZhcigtLWh5cGVybGluay1saWdodC1ob3Zlci1jb2xvcik7LS1tZW51LWl0ZW0tY29sb3I6dmFyKC0tbWVudS1pdGVtLWxpZ2h0LWNvbG9yKTstLW1lbnUtaXRlbS1ob3Zlci1jb2xvcjp2YXIoLS1tZW51LWl0ZW0tbGlnaHQtaG92ZXItY29sb3IpOy0tbmF2YmFyLWJhY2tncm91bmQtY29sb3I6dmFyKC0tbmF2YmFyLWJhY2tncm91bmQtbGlnaHQtY29sb3IpOy0tZmlsbC0xLWNvbG9yOnZhcigtLWZpbGwtbGlnaHQtMS1jb2xvcik7LS1maWxsLTItY29sb3I6dmFyKC0tZmlsbC1saWdodC0yLWNvbG9yKTstLWZpbGwtMy1jb2xvcjp2YXIoLS1maWxsLWxpZ2h0LTMtY29sb3IpOy0tYmFja2dyb3VuZC0xLWNvbG9yOnZhcigtLWZpbGwtZGFyay0xLWNvbG9yKTstLWJhY2tncm91bmQtMi1jb2xvcjp2YXIoLS1maWxsLWRhcmstMi1jb2xvcik7LS1iYWNrZ3JvdW5kLTMtY29sb3I6dmFyKC0tZmlsbC1kYXJrLTMtY29sb3IpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWZpbGwtZ3JleS0xLWNvbG9yKTstLWltYWdlLXBsYWNlaG9sZGVyLWNvbG9yOnZhcigtLWltYWdlLXBsYWNlaG9sZGVyLWxpZ2h0LWNvbG9yKTstLWljb24tY29sb3I6dmFyKC0taWNvbi1saWdodC1jb2xvcik7LS1pY29uLWJhY2tncm91bmQtY29sb3I6dmFyKC0taWNvbi1iYWNrZ3JvdW5kLWxpZ2h0LWNvbG9yKTstLWljb24tYm9yZGVyLWNvbG9yOnZhcigtLWljb24tYm9yZGVyLWxpZ2h0LWNvbG9yKTstLWJ1dHRvbi1wcmltYXJ5LWNvbG9yOnZhcigtLWJ1dHRvbi1wcmltYXJ5LWxpZ2h0LWNvbG9yKTstLWJ1dHRvbi1wcmltYXJ5LXRleHQtY29sb3I6dmFyKC0tYnV0dG9uLXByaW1hcnktdGV4dC1saWdodC1jb2xvcik7LS1idXR0b24tcHJpbWFyeS1ob3Zlci1jb2xvcjp2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci1saWdodC1jb2xvcik7LS1idXR0b24tcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOnZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLXRleHQtbGlnaHQtY29sb3IpOy0tYnV0dG9uLXNlY29uZGFyeS1jb2xvcjp2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWxpZ2h0LWNvbG9yKTstLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1jb2xvcjp2YXIoLS1idXR0b24tc2Vjb25kYXJ5LXRleHQtbGlnaHQtY29sb3IpOy0tYnV0dG9uLXNlY29uZGFyeS1ob3Zlci1jb2xvcjp2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLWxpZ2h0LWNvbG9yKTstLWJ1dHRvbi1zZWNvbmRhcnktaG92ZXItdGV4dC1jb2xvcjp2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLXRleHQtbGlnaHQtY29sb3IpOy0tYnV0dG9uLWxpc3QtY29sb3I6dmFyKC0tYnV0dG9uLWxpc3QtbGlnaHQtY29sb3IpOy0tYnV0dG9uLWxpc3QtdGV4dC1jb2xvcjp2YXIoLS1idXR0b24tbGlzdC10ZXh0LWxpZ2h0LWNvbG9yKTstLWJ1dHRvbi1saXN0LWhvdmVyLWNvbG9yOnZhcigtLWJ1dHRvbi1saXN0LWhvdmVyLWxpZ2h0LWNvbG9yKTstLWJ1dHRvbi1saXN0LWhvdmVyLXRleHQtY29sb3I6dmFyKC0tYnV0dG9uLWxpc3QtaG92ZXItdGV4dC1saWdodC1jb2xvcil9XHJcblxyXG4qLCo6YmVmb3JlLCo6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG5odG1sLGJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2l0ZS1iYWNrZ3JvdW5kKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKVxyXG59XHJcblxyXG5ib2R5Lm5hdi1vcGVuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLnNpdGUtZGlzYWJsZWQtYmFyX19pbmZvIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIHBybycsU2Fucy1TZXJpZlxyXG59XHJcblxyXG4udGV4dC1pbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdWktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXVpLWZvbnQtd2VpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS11aS1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXVpLW1lZGl1bS1zaXplKTtcclxuICAgIGJvcmRlcjogdmFyKC0taW5wdXQtYm9yZGVyKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cylcclxufVxyXG5cclxuLnRleHQtaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3IpO1xyXG4gICAgb3V0bGluZTogbm9uZVxyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgYm9yZGVyOiAwXHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbi0tZmFpdGhsaWZlIHtcclxuICAgIGNvbG9yOiAjNWZiYzM5XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIC0tZGlzcGxheS1mb250LXNpemU6NDhweDstLWRpc3BsYXktbGluZS1oZWlnaHQ6MS4zOy0tZGlzcGxheS1tYXJnaW4tYm90dG9tOjhweDstLWhlYWRpbmctbGluZS1oZWlnaHQ6MS4zOy0taDEtZm9udC1zaXplOjQycHg7LS1oMi1mb250LXNpemU6MzJweDstLWgzLWZvbnQtc2l6ZToyOHB4Oy0taDQtZm9udC1zaXplOjIwcHg7LS1oNS1mb250LXNpemU6MThweDstLWg2LWZvbnQtc2l6ZToxNnB4Oy0tZWRpdC1pdGVtLXdpZHRoOjI0cHg7LS1ncm91cC1icmFuZGluZy1mb250LXNpemU6MjBweDstLWdyb3VwLWJyYW5kaW5nLWxpbmUtaGVpZ2h0OjEuMzstLWZyYWdtZW50LXRpdGxlLWZvbnQtc2l6ZTozMnB4Oy0tZnJhZ21lbnQtdGl0bGUtbGluZS1oZWlnaHQ6MS4zOy0tZnJhZ21lbnQtdGl0bGUtbGV0dGVyLXNwYWNpbmc6dW5zZXQ7LS1mcmFnbWVudC1jb250ZW50LWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1mcmFnbWVudC1jb250ZW50LWJveC1zaGFkb3c6dmFyKC0taXRlbS1ib3gtc2hhZG93KTstLWZyYWdtZW50LWNvbnRlbnQtYm9yZGVyOmluaXRpYWw7LS1mcmFnbWVudC1jb250ZW50LWJvcmRlci13aWR0aDowOy0tZnJhZ21lbnQtY29udGVudC1ib3JkZXItcmFkaXVzOnZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cyk7LS1mcmFnbWVudC1jb250ZW50LXBhZGRpbmc6MDstLWJvZHktdGV4dC1sYXJnZS1mb250LXNpemU6MThweDstLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplOjE2cHg7LS1ib2R5LXRleHQtc21hbGwtZm9udC1zaXplOjE0cHg7LS1ib2R5LXRleHQtbGluZS1oZWlnaHQ6MS4zOy0tdWktbGFyZ2Utc2l6ZToxOHB4Oy0tdWktbWVkaXVtLXNpemU6MTZweDstLXVpLXNtYWxsLXNpemU6MTJweDstLXVpLWxpbmUtaGVpZ2h0OjE7LS1saW5lLWNsYW1wLW1heC1oZWlnaHQ6My45ZW07LS1oZXJvLXN1Yi1oZWFkZXItbWF4LXdpZHRoOjYwMHB4Oy0taGVyby1ib3JkZXItcmFkaXVzOnZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cyk7LS1tb2JpbGUtbmF2LWhlaWdodDoxMjBweDstLWhlcm8tYnV0dG9ucy1tYXJnaW46MDstLWhlcm8tbWluLWhlaWdodDo3MzBweDstLWhlYWRlci1tZW51LWl0ZW0taGVpZ2h0OjMycHg7LS1zbGlkZW91dC1tZW51LWhlaWdodDpjYWxjKDEwMHZoIC0gdmFyKC0tbW9iaWxlLW5hdi1oZWlnaHQpKTstLXNsaWRlb3V0LW1lbnUtcGFkZGluZzowIDI0cHg7LS1zaXRlLWJhY2tncm91bmQ6aW5pdGlhbDstLWVkaXQtaXRlbS10b3A6LTYwcHg7LS1lZGl0LWl0ZW0tcmlnaHQ6LTEycHg7LS1pdGVtLWJvcmRlci1yYWRpdXM6MDstLWJ1dHRvbi1kaXNwbGF5OmlubGluZS1ibG9jazstLWJ1dHRvbi1ib3gtc2hhZG93OjAgMCA4cHggLTJweCAjOWI5YjliOy0tYnV0dG9uLWJvcmRlcjoxcHggc29saWQ7LS1idXR0b24tYm9yZGVyLXJhZGl1czozcHg7LS1idXR0b24tcGFkZGluZzoxMnB4IDI0cHg7LS1idXR0b24tbWluLXdpZHRoOjEyMHB4Oy0tYnV0dG9uLXRyYW5zaXRpb246YWxsIC4xNXM7LS1idXR0b24tc2Vjb25kYXJ5LWJvcmRlcjoycHggc29saWQ7LS1idXR0b24tc2Vjb25kYXJ5LWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1mcmFnbWVudC1iYWNrZ3JvdW5kOmluaXRpYWw7LS1mcmFnbWVudC1jb2x1bW4tZ3V0dGVyOjMycHg7LS1tdWx0aW1lZGlhLWVtYmVkLWJhY2tncm91bmQ6YmxhY2s7LS1tdWx0aW1lZGlhLWFzcGVjdC1yYXRpby1wZXJjZW50YWdlOjY2LjY2NjY2NjY3JTstLWZyYWdtZW50LXRpdGxlLW1hcmdpbi1ib3R0b206MzJweDstLWZyYWdtZW50LXRpdGxlLXRleHQtYWxpZ246Y2VudGVyOy0tZnJhZ21lbnQtdGl0bGUtdGV4dC10cmFuc2Zvcm06aW5pdGlhbDstLWZyYWdtZW50LWN0YS1hbGlnbi1pdGVtczpjZW50ZXI7LS1mcmFnbWVudC1jdGEtanVzdGlmeS1jb250ZW50OmNlbnRlcjstLWZyYWdtZW50LWN0YS1idXR0b24tbWFyZ2luLXRvcDoyNHB4Oy0tZnJhZ21lbnQtY3RhLXRpdGxlLW1hcmdpbjoxNnB4IDAgMTJweDstLWZyYWdtZW50LXZpZXctYWxsLW1hcmdpbi10b3A6MzJweDstLWZyYWdtZW50LXZpZXctYWxsLXRleHQtYWxpZ246Y2VudGVyOy0tZnJhZ21lbnQtYm94LXNoYWRvdzp1bnNldDstLWZyYWdtZW50LWJvcmRlcjp1bnNldDstLWZyYWdtZW50LWJvcmRlci13aWR0aDp1bnNldDstLWZyYWdtZW50LWJvcmRlci1yYWRpdXM6dmFyKC0taXRlbS1ib3JkZXItcmFkaXVzKTstLXZlcnRpY2FsLWZyYWdtZW50LXNlY3Rpb24tcGFkZGluZzowOy0tZnJhZ21lbnQtcGFkZGluZzo0OHB4IDA7LS1mcmFnbWVudC1pbWFnZS1iYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7LS1mcmFnbWVudC1pbWFnZS1iYWNrZ3JvdW5kLXNpemU6Y292ZXI7LS1mcmFnbWVudC1vdmVyZmxvdzppbml0aWFsOy0tZnJhZ21lbnQtdHdvLWNvbC1taW4taGVpZ2h0OmF1dG87LS1pdGVtLWJveC1zaGFkb3c6bm9uZTstLWl0ZW0tYnV0dG9uLXdpZHRoOmF1dG87LS1pdGVtLWljb24tZGlzcGxheTpmbGV4Oy0taXRlbS1pY29uLWJvcmRlcjoxcHggc29saWQ7LS1pdGVtLWljb24tYm9yZGVyLXJhZGl1czo1MCU7LS1pdGVtLWljb24tY29udGFpbmVyLWRpYW1ldGVyOjQ0cHg7LS1pdGVtLWljb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstLWxpc3QtaXRlbS1qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjstLWxpc3QtaXRlbS1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1saXN0LWl0ZW0tYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWxpc3QtaXRlbS1tYXJnaW46MDstLXRvcC1saXN0LWl0ZW0tdG9wLXBhZGRpbmc6MDstLWxpc3QtaXRlbS1wYWRkaW5nOjI0cHggMDstLWxpc3QtaXRlbS1kZXRhaWxzLW1hcmdpbjoxNnB4IDA7LS1saXN0LWl0ZW0tZGV0YWlscy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1saXN0LWl0ZW0tZGV0YWlscy1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy0tbGlzdC1pdGVtLWJvcmRlcjojZGFkYWRhIHNvbGlkOy0tbGlzdC1pdGVtLWJvcmRlci13aWR0aDowIDAgMXB4Oy0tbGlzdC1pdGVtLWJvcmRlci1yYWRpdXM6dmFyKC0taXRlbS1ib3JkZXItcmFkaXVzKTstLWxpc3QtaXRlbS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tbGlzdC1pdGVtLWNvbnRhaW5lci13aWR0aDoxMDAlOy0tbGlzdC1pdGVtLWNvbnRhaW5lci1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy0tbGlzdC1pdGVtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1saXN0LWl0ZW0tc3VidGl0bGUtZGlzcGxheTpmbGV4Oy0tbGlzdC1pdGVtLXN1YnRpdGxlLW1hcmdpbjo4cHggMCAwOy0tYnV0dG9uLWxpc3QtZGlzcGxheTpibG9jazstLWJ1dHRvbi1saXN0LXN2Zy1tYXJnaW46MCAwIDAgMnB4Oy0tYnV0dG9uLWxpc3QtYm9yZGVyOjFweCBzb2xpZDstLWJ1dHRvbi1saXN0LWJvcmRlci1yYWRpdXM6MTZweDstLWJ1dHRvbi1saXN0LXBhZGRpbmc6NnB4IDE2cHg7LS1idXR0b24tbGlzdC1tYXJnaW46MTJweCAwIDA7LS1jdGEtY29udGVudC1tYXJnaW46MCBhdXRvOy0tY3RhLWNvbnRlbnQtaGVpZ2h0OjEwMCU7LS1jdGEtY29udGVudC1tYXgtd2lkdGg6NTIwcHg7LS1jdGEtY29udGVudC10ZXh0LWFsaWduOmNlbnRlcjstLWN0YS10aXRsZS1tYXJnaW46MCAwIDE2cHg7LS1jdGEtYm9keS1tYXJnaW46MCAwIDI0cHg7LS1jdGEtYm9keS10ZXh0LWFsaWduOmNlbnRlcjstLWN0YS1iYWNrZ3JvdW5kLWltYWdlLXBvc2l0aW9uOmFic29sdXRlOy0tY3RhLWRpc3BsYXk6YmxvY2s7LS1jdGEtZmxleC13cmFwOmluaXRpYWw7LS1jdGEtY29udGVudC1kaXNwbGF5OmJsb2NrOy0tY3RhLWNvbnRlbnQtZmxleC1kaXJlY3Rpb246aW5pdGlhbDstLWN0YS1jb250ZW50LWp1c3RpZnktY29udGVudDppbml0aWFsOy0tY3RhLWNvbnRlbnQtYWxpZ24taXRlbXM6aW5pdGlhbDstLWN0YS1jb250ZW50LXBhZGRpbmc6MzJweDstLWhpZ2hsaWdodC1kaXNwbGF5OmZsZXg7LS1oaWdobGlnaHQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy0taGlnaGxpZ2h0LWFsaWduLWl0ZW1zOmNlbnRlcjstLWhpZ2hsaWdodC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy0taGlnaGxpZ2h0LWNvbnRlbnQtdGV4dC1hbGlnbjpjZW50ZXI7LS1oaWdobGlnaHQtanVzdGlmeS1jb250ZW50Om5vcm1hbDstLWhpZ2hsaWdodC1jb250ZW50LW1heC13aWR0aDo1MjBweDstLWhpZ2hsaWdodC1jb250ZW50LW1hcmdpbjoxNnB4IGF1dG8gMDstLWhpZ2hsaWdodC10aXRsZS1tYXJnaW46OHB4IDA7LS1oaWdobGlnaHQtYnV0dG9uLW1hcmdpbi10b3A6MTJweDstLWhpZ2hsaWdodC1ib3JkZXItcmFkaXVzOnZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cyk7LS1oaWdobGlnaHQtcGFkZGluZzowOy0taGlnaGxpZ2h0LWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1oaWdobGlnaHQtaGVpZ2h0OmF1dG87LS1oaWdobGlnaHQtdmlldy1idXR0b24tbWFyZ2luLXRvcDoxNnB4Oy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1jb250YWN0LWluZm8tY29udGFpbmVyLWp1c3RpZnktY29udGVudDpjZW50ZXI7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWFsaWduLWl0ZW1zOmNlbnRlcjstLWNvbnRhY3QtaW5mby1pdGVtLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLWNvbnRhY3QtaW5mby1pdGVtLWp1c3RpZnktY29udGVudDpjZW50ZXI7LS1jb250YWN0LWluZm8taXRlbS1hbGlnbi1pdGVtczpjZW50ZXI7LS1jb250YWN0LWluZm8taXRlbS1ib3JkZXI6dW5zZXQ7LS1jb250YWN0LWluZm8taXRlbS1ib3JkZXItd2lkdGg6dW5zZXQ7LS1jb250YWN0LWluZm8taXRlbS1ib3JkZXItcmFkaXVzOjA7LS1jb250YWN0LWluZm8taXRlbS1tYXJnaW46MCAwIDI0cHg7LS1jb250YWN0LWluZm8taXRlbS1wYWRkaW5nOjA7LS1jb250YWN0LWluZm8taXRlbS13aWR0aDp1bnNldDstLWNvbnRhY3QtaW5mby1pdGVtLWRldGFpbHMtdGV4dC1hbGlnbjpjZW50ZXI7LS1jb250YWN0LWluZm8taXRlbS1kZXRhaWxzLW1hcmdpbjoxNnB4IDAgMDstLWZvcm0tY29udGFpbmVyLWp1c3RpZnktY29udGVudDpjZW50ZXI7LS1mb3JtLWNvbnRhaW5lci1hbGlnbi1pdGVtczpjZW50ZXI7LS1mb3JtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1mb3JtLWNvbnRhaW5lci10ZXh0LWFsaWduOmNlbnRlcjstLWZvcm0tY29udGFpbmVyLWFsaWduLWl0ZW1zOm5vcm1hbDstLWZvcm0tY29udGFpbmVyLWhlaWdodDphdXRvOy0tZm9ybS1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy0tZm9ybS1hbGlnbi1pdGVtczpjZW50ZXI7LS1mb3JtLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLWZvcm0taW5wdXQtd2lkdGg6MTAwJTstLWZvcm0taW5wdXQtbWFyZ2luOjAgYXV0byAxNnB4Oy0tZm9ybS1oZWxwZXItdGV4dC1tYXJnaW46MTZweCAwIDA7LS1mb3JtLWJ1dHRvbi1tYXJnaW46MCBhdXRvOy0taW5wdXQtYm9yZGVyLXJhZGl1czozcHg7LS1pbnB1dC1ib3JkZXI6MXB4IHNvbGlkICNkZGQ7LS1pbnB1dC1wYWRkaW5nOjEycHg7LS1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6IzI3OGVkNDstLXNlcnZpY2UtdGltZS1jb250YWluZXItbWFyZ2luOjE2cHggMCAwIDA7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tZ2FwOjY0cHg7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0td2lkdGg6MTAwJTstLXNlcnZpY2UtdGltZXMtaXRlbS1wYWRkaW5nOmluaXRpYWw7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYm94LXNoYWRvdzppbml0aWFsOy0tc2VydmljZS10aW1lcy1pdGVtLWJvcmRlci1yYWRpdXM6aW5pdGlhbDstLXNlcnZpY2UtdGltZXMtaXRlbS1ib3JkZXI6aW5pdGlhbDstLXNlcnZpY2UtdGltZXMtaXRlbS10ZXh0LWFsaWduOmNlbnRlcjstLXNlcnZpY2UtdGltZXMtaXRlbS1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYWxpZ24taXRlbXM6Y2VudGVyOy0tc2VydmljZS10aW1lcy1pdGVtLXRpbWUtdG9wLW1hcmdpbjoxMnB4Oy0tc2VydmljZS10aW1lcy1pdGVtLXRpbWUtYm90dG9tLW1hcmdpbjoyNHB4Oy0tc2VydmljZS10aW1lcy1pbmxpbmUtZGF5LWRpc3BsYXk6bm9uZTstLXNlcnZpY2UtdGltZXMtaWNvbi1kaXNwbGF5OmJsb2NrOy0tZ2FsbGVyeS1ncmlkLXJvdy1nYXA6MzJweDstLWdhbGxlcnktZ3JpZC1jb2x1bW4tZ2FwOjMycHg7LS1nYWxsZXJ5LWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7LS1ncmlkLWl0ZW0tYmFja2dyb3VuZDppbml0aWFsOy0tZ3JpZC1pdGVtLWJvcmRlci13aWR0aDoxcHg7LS1ncmlkLWl0ZW0tYm9yZGVyLXJhZGl1czp2YXIoLS1pdGVtLWJvcmRlci1yYWRpdXMpOy0tZ3JpZC1pdGVtLW92ZXJmbG93OmluaGVyaXQ7LS1ncmlkLWl0ZW0tcGFkZGluZzozMnB4Oy0tZ3JpZC1pdGVtLWRhdGUtbWFyZ2luOjAgMCAuNXJlbTstLWdyaWQtaXRlbS10aXRsZS1tYXJnaW46MTZweCAwIDA7LS1ncmlkLWl0ZW0tdGl0bGUtdGV4dC1hbGlnbjpjZW50ZXI7LS1ncmlkLWl0ZW0tZGV0YWlscy1tYXJnaW46MjRweCAwIDAgMDstLWdyaWQtaXRlbS1oZWFkaW5nLWZsZXg6MSAwIDEwMCU7LS1ncmlkLWl0ZW0tc3VidGl0bGUtbWFyZ2luOjEycHggMCAwIDA7LS1ncmlkLWl0ZW0tYnV0dG9uLWNvbnRhaW5lci1tYXJnaW46YXV0byAwIDAgMDstLWdyaWQtaXRlbS1idXR0b24tY29udGFpbmVyLXBhZGRpbmc6MTZweCAwIDAgMDstLWdyaWQtcm93LWdhcDoyNHB4Oy0tZ3JpZC1jb2x1bW4tZ2FwOjMycHg7LS1ibG9nLWl0ZW0taW1hZ2UtYm9yZGVyLXJhZGl1czppbml0aWFsOy0tYmxvZy1pdGVtLWltYWdlLWhlaWdodDoxMDAlOy0tYmxvZy1pdGVtLWltYWdlLW1heC1oZWlnaHQ6MjIwcHg7LS1ibG9nLWdyaWQtaXRlbS1wcmV2aWV3LW1hcmdpbjoxMnB4IDA7LS1ibG9nLWdyaWQtaXRlbS1wcmV2aWV3LWZvbnQtc2l6ZTppbmhlcml0Oy0tYmxvZy1pdGVtLWRldGFpbHMtbWFyZ2luOjE2cHg7LS1ibG9nLWxpc3QtaXRlbS1kaXNwbGF5OmJsb2NrOy0tYmxvZy1saXN0LWltYWdlLXdpZHRoOjEwMCU7LS1ibG9nLWhpZ2hsaWdodC1kaXNwbGF5OmJsb2NrOy0tc2VybW9uLWdyaWQtaXRlbS1wbGFjZWhvbGRlci1oZWlnaHQ6MjAwcHg7LS1zZXJtb24tZ3JpZC1pdGVtLW1lZGlhLWNvbnRhaW5lci1tYXJnaW46MCAwIDEycHggMDstLXNlcm1vbi1ncmlkLWl0ZW0tdGl0bGUtbWFyZ2luOjhweCAwOy0tc2VybW9uLWdyaWQtaXRlbS1tZWRpYS1jb250YWluZXItYm9yZGVyLXJhZGl1czowOy0tc2VybW9uLWdyaWQtaXRlbS1kZXRhaWxzLW1hcmdpbjowOy0tdmVyc2UtaW1hZ2UtYm9yZGVyLXJhZGl1czp2YXIoLS1pdGVtLWJvcmRlci1yYWRpdXMpOy0taGVhZGVyLWRyb3Bkb3duLWJveC1zaGFkb3c6MCAxMHB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMDUpOy0taGVhZGVyLWRyb3Bkb3duLXRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTstLWhlYWRlci1kcm9wZG93bi1ib3JkZXItcmFkaXVzOjA7LS1oZWFkZXItZHJvcGRvd24tYm9yZGVyOjA7LS1oZWFkZXItaWNvbi1ib3JkZXItcmFkaXVzOjVweDstLWhlYWRlci1kZWZhdWx0LWljb24tY29sb3I6IzdhN2E3YTstLWhlYWRlci1tZW51LWl0ZW0tdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOy0tc2hhcmVkLW1lbnUtbWFyZ2luOjAgMCAwIGF1dG87LS1tb2JpbGUtaGVhZGVyLWp1c3RpZnktY29udGVudDpjZW50ZXI7LS1tb2JpbGUtaGVhZGVyLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLW1vYmlsZS1tZW51LXdpZHRoOjMwMHB4Oy0tbW9iaWxlLW1lbnUtdG9wLXBvc2l0aW9uOjA7LS1tb2JpbGUtbWVudS1sZWZ0LWhpZGRlbi1wb3NpdGlvbjphdXRvOy0tbW9iaWxlLW1lbnUtcmlnaHQtaGlkZGVuLXBvc2l0aW9uOmNhbGMoLTEgKiB2YXIoLS1tb2JpbGUtbWVudS13aWR0aCkpOy0tbW9iaWxlLW1lbnUtbGVmdC12aXNpYmxlLXBvc2l0aW9uOmF1dG87LS1tb2JpbGUtbWVudS1yaWdodC12aXNpYmxlLXBvc2l0aW9uOjA7LS1tb2JpbGUtbWVudS10cmFuc2l0aW9uOnJpZ2h0IDQwMG1zIGVhc2U7LS1tb2JpbGUtbmF2LWhhbWJ1cmdlci10b3AtcG9zaXRpb246NTAlOy0tbW9iaWxlLW5hdi1oYW1idXJnZXItbGVmdC1wb3NpdGlvbjoxMnB4Oy0tbW9iaWxlLW5hdi1oYW1idXJnZXItcmlnaHQtcG9zaXRpb246MDstLW1vYmlsZS1uYXYtaGFtYnVyZ2VyLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOy0tbW9iaWxlLW5hdi1idXR0b24tdGV4dC1kaXNwbGF5Om5vbmU7LS1tb2JpbGUtbWVudS1kaXNwbGF5OmZsZXg7LS1kZXNrdG9wLWhlYWRlci1kaXNwbGF5Om5vbmU7LS1jb250ZW50LWNvbnRhaW5lci1tYXJnaW46MCAxNnB4Oy0tY29udGVudC1jb250YWluZXItbWF4LXdpZHRoOjU0MHB4Oy0tbW9zYWljLWl0ZW0td2lkdGg6MTAwJTstLW1vc2FpYy1pdGVtLW1hcmdpbjowIDAgMzJweCAwfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1jb250ZW50LWNvbnRhaW5lci1tYXJnaW46MCBhdXRvXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tZGlzcGxheS1mb250LXNpemU6NTZweDtcclxuICAgICAgICAtLWNvbnRlbnQtY29udGFpbmVyLW1heC13aWR0aDo3MjBweDstLWgyLWZvbnQtc2l6ZTo0OHB4Oy0tbW9zYWljLWl0ZW0td2lkdGg6NDYlOy0tbGlzdC1pdGVtLWRldGFpbHMtZmxleC1kaXJlY3Rpb246cm93Oy0tbGlzdC1pdGVtLWRldGFpbHMtYWxpZ24taXRlbXM6Y2VudGVyOy0tYnV0dG9uLWxpc3QtbWFyZ2luOjB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tZGVza3RvcC1oZWFkZXItZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIC0tbW9iaWxlLW1lbnUtZGlzcGxheTpub25lOy0tY29udGVudC1jb250YWluZXItbWF4LXdpZHRoOjk2MHB4Oy0tbW9zYWljLWl0ZW0td2lkdGg6MzElfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1jb250ZW50LWNvbnRhaW5lci1tYXgtd2lkdGg6MTE0MHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mcmFnbWVudC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAtLWZyYWdtZW50LXRpdGxlLW1hcmdpbi1ib3R0b206MTZweH1cclxuXHJcbi5zZXJtb25zIHtcclxuICAgIC0tZ3JpZC1pdGVtLWJvcmRlcjpub25lOy0tZ3JpZC1pdGVtLXBhZGRpbmc6MDstLWxpc3QtaXRlbS1jb250YWluZXItZmxleC1kaXJlY3Rpb246cm93Oy0tbGlzdC1pdGVtLWRldGFpbHMtbWFyZ2luOjAgMCAwIDE2cHh9XHJcblxyXG4uZXZlbnRzLC5ldmVudC1kZXRhaWxzIHtcclxuICAgIC0taGlnaGxpZ2h0LXRpdGxlLW1hcmdpbjo0cHggMCA4cHg7LS1ldmVudC1oaWdobGlnaHQtZGV0YWlscy1tYXgtd2lkdGg6ODAlOy0tZXZlbnQtaGlnaGxpZ2h0LWRldGFpbHMtbWFyZ2luOjhweCAwIDAgMDstLWxpc3QtaXRlbS1jb250YWluZXItZmxleC1kaXJlY3Rpb246cm93Oy0tbGlzdC1pdGVtLWRldGFpbHMtbWFyZ2luOjAgMCAwIDE2cHg7LS1ldmVudC1kZXRhaWxzLWRpc3BsYXk6bm9uZTstLWV2ZW50LWRhdGUtaW5saW5lLWRpc3BsYXk6bm9uZTstLWV2ZW50LWRhdGUtc3F1YXJlLXRleHQtY29sb3I6dmFyKC0taWNvbi1jb2xvcik7LS1ldmVudC1kYXRlLXNxdWFyZS1kaXNwbGF5OmZsZXg7LS1ldmVudC1kYXRlLXNxdWFyZS1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy0tZXZlbnQtZGF0ZS1zcXVhcmUtYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pY29uLWJvcmRlci1jb2xvcik7LS1ldmVudC1kYXRlLXNxdWFyZS1ib3JkZXItcmFkaXVzOjVweDstLWV2ZW50LWRhdGUtc3F1YXJlLWNvbnRhaW5lci1kaWFtZXRlcjo2NnB4Oy0tZXZlbnQtZGF0ZS1zcXVhcmUtYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWV2ZW50LWRhdGUtc3F1YXJlLW11bHRpLWRheS1kaXZpZGVyOjFweCBzb2xpZCB2YXIoLS1pY29uLWJvcmRlci1jb2xvcik7LS1ldmVudC1kYXRlLXNxdWFyZS1tdWx0aS1kYXktdG9wLXBhZGRpbmc6MnB4Oy0tZXZlbnQtZGF0ZS1tb250aC1wYWRkaW5nOjA7LS1ldmVudC1kYXRlLW1vbnRoLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ldmVudC1kYXRlLXNtYWxsLWZvbnQtc2l6ZToxMnB4Oy0tZXZlbnQtZGF0ZS1kYXktZm9udC1zaXplOjMycHg7LS1ldmVudC1pdGVtLWxvY2F0aW9uLW1hcmdpbjowIDAgNHB4IDA7LS1saXN0LWl0ZW0tc3VidGl0bGUtZGlzcGxheTpibG9jazstLWV2ZW50LWl0ZW0tbG9jYXRpb24tZGF0ZS1kaXZpZGVyOicnfVxyXG5cclxuLmV2ZW50LWRldGFpbHMge1xyXG4gICAgLS1ldmVudC1kYXRlLXNxdWFyZS1jb250YWluZXItZGlhbWV0ZXI6OTBweDstLWV2ZW50LWRhdGUtc3F1YXJlLW1hcmdpbjowIGF1dG8gMjRweH1cclxuXHJcbi5kb2N1bWVudC1saXN0IHtcclxuICAgIC0taXRlbS1pY29uLWJvcmRlci1yYWRpdXM6MDstLWl0ZW0taWNvbi1jb250YWluZXItZGlhbWV0ZXI6MzJweDstLWxpc3QtaXRlbS1kZXRhaWxzLW1hcmdpbjowIDAgMCAxNnB4Oy0tbGlzdC1pdGVtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpyb3d9XHJcblxyXG4uYmxvZy1wb3N0cyB7XHJcbiAgICAtLWdyaWQtaXRlbS1ib3JkZXItd2lkdGg6MDstLWdyaWQtaXRlbS1wYWRkaW5nOjA7LS1oaWdobGlnaHQtaW1hZ2UtY29udGFpbmVyLW1hcmdpbjowOy0taGlnaGxpZ2h0LXRpdGxlLW1hcmdpbjoxNnB4IDAgNHB4Oy0taGlnaGxpZ2h0LWNvbnRlbnQtbWF4LXdpZHRoOm5vbmU7LS1oaWdobGlnaHQtY29udGVudC10ZXh0LWFsaWduOmxlZnQ7LS1oaWdobGlnaHQtY29udGVudC1tYXJnaW46MH1cclxuXHJcbi5ibG9nLWhpZ2hsaWdodDpub3QoLmJsb2ctaGlnaGxpZ2h0LS1uby1pbWFnZSkge1xyXG4gICAgLS1oaWdobGlnaHQtcGFkZGluZzowOy0taGlnaGxpZ2h0LWNvbnRlbnQtbWFyZ2luOnZhcigtLWJsb2ctaXRlbS1kZXRhaWxzLW1hcmdpbil9XHJcblxyXG4uYmxvZy1oaWdobGlnaHQtLW5vLWltYWdlIHtcclxuICAgIC0tYmxvZy1oaWdobGlnaHQtYmFja2dyb3VuZC13aWR0aDowOy0tYmxvZy1oaWdobGlnaHQtYmFja2dyb3VuZC1oZWlnaHQ6MDstLWJsb2ctaGlnaGxpZ2h0LWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7LS1oaWdobGlnaHQtY29udGVudC10ZXh0LWFsaWduOmNlbnRlcjstLWhpZ2hsaWdodC1jb250ZW50LW1hcmdpbjowIGF1dG99XHJcblxyXG4uY3RhIHtcclxuICAgIC0tZnJhZ21lbnQtdGl0bGUtbWFyZ2luLWJvdHRvbToxNnB4fVxyXG5cclxuLmN0YS0td2l0aC1pbWFnZSwuZnJhZ21lbnQtaGlnaGxpZ2h0LS13aXRoLWltYWdlIHtcclxuICAgIC0tYmFja2dyb3VuZC1pbWFnZS1wYWRkaW5nOjY0cHggMTZweDstLWJhY2tncm91bmQtaW1hZ2UtbWF4LWhlaWdodDoxMDAwcHh9XHJcblxyXG4ubGlnaHQtYmFja2dyb3VuZCwuZGFyay1iYWNrZ3JvdW5kIHtcclxuICAgIC0tZnJhZ21lbnQtdGl0bGUtdGV4dC1jb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTstLWxpc3QtaXRlbS1zdWJ0aXRsZS1jb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTstLWJsb2ctZ3JpZC1pdGVtLXRpdGxlLWNvbG9yOnZhcigtLXRleHQtY29sb3IpOy0tZ3JpZC1pdGVtLWJvcmRlcjpzb2xpZCB2YXIoLS1maWxsLTItY29sb3IpOy0tYmxvZy1pdGVtLWltYWdlLWNvbnRhaW5lci1iYWNrZ3JvdW5kOnZhcigtLWZpbGwtMS1jb2xvcil9XHJcblxyXG4ubGlnaHQtYmFja2dyb3VuZCAuc2VybW9ucywuZGFyay1iYWNrZ3JvdW5kIC5zZXJtb25zIHtcclxuICAgIC0tbXVsdGltZWRpYS1lbWJlZC1iYWNrZ3JvdW5kOnZhcigtLWltYWdlLXBsYWNlaG9sZGVyLWNvbG9yKX1cclxuXHJcbi5saWdodC1iYWNrZ3JvdW5kIC5zZXJtb25zIHtcclxuICAgIC0tc2VybW9uLWljb24tY29sb3I6dmFyKC0taWNvbi1saWdodC1jb2xvcil9XHJcblxyXG4uZGFyay1iYWNrZ3JvdW5kIC5zZXJtb25zIHtcclxuICAgIC0tc2VybW9uLWljb24tY29sb3I6dmFyKC0taWNvbi1kYXJrLWNvbG9yKX1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZyYWdtZW50LTEyLWNvbCB7XHJcbiAgICAgICAgLS1oMS1mb250LXNpemU6NjRweDtcclxuICAgICAgICAtLWgyLWZvbnQtc2l6ZTo0OHB4Oy0taDMtZm9udC1zaXplOjMycHg7LS1oNC1mb250LXNpemU6MjRweDstLWZyYWdtZW50LXRpdGxlLWZvbnQtc2l6ZTo0OHB4Oy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpyb3c7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LS1jb250YWN0LWluZm8taXRlbS13aWR0aDozMy4zMzMzMzMzMyU7LS1jb250YWN0LWluZm8taXRlbS1tYXJnaW46MDstLWZvcm0tZmxleC1kaXJlY3Rpb246cm93Oy0tZm9ybS1tYXJnaW46MCBhdXRvOy0tZm9ybS1pbnB1dC13aWR0aDoyODBweDstLWZvcm0tYnV0dG9uLW1hcmdpbjowIDE2cHg7LS1mb3JtLWlucHV0LW1hcmdpbjowOy0tZ3JpZC1pdGVtLWhlYWRpbmctZmxleDoxIDA7LS1ncmlkLWl0ZW0tZGV0YWlscy1tYXJnaW46MCAwIDAgMTZweDstLWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyOy0tc2VydmljZS10aW1lcy1pdGVtLXdpZHRoOjMzLjMzMzMzMzMzJTstLWxpc3QtaXRlbS1mbGV4LWRpcmVjdGlvbjpyb3c7LS1saXN0LWl0ZW0tanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LS1saXN0LWl0ZW0tYWxpZ24taXRlbXM6Y2VudGVyOy0tbGlzdC1pdGVtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpyb3c7LS1saXN0LWl0ZW0tY29udGFpbmVyLXdpZHRoOjEwMCU7LS1saXN0LWl0ZW0tZGV0YWlscy1tYXJnaW46MCAyNHB4Oy0tYmxvZy1saXN0LWl0ZW0taW1hZ2UtY29udGFpbmVyLW1hcmdpbjowIDI0cHggMCAwOy0tYmxvZy1saXN0LWl0ZW0tZGlzcGxheTpmbGV4Oy0tYmxvZy1saXN0LWl0ZW0td2lkdGg6MzMuMzMzMzMzMzMlOy0tYmxvZy1pdGVtLWltYWdlLWhlaWdodDphdXRvOy0tYmxvZy1saXN0LWltYWdlLXdpZHRoOjMzLjMzMzMzMzMzJTstLWV2ZW50LWRldGFpbHMtYnV0dG9uLWRpc3BsYXk6aW5pdGlhbDstLWhpZ2hsaWdodC1jb250ZW50LW1heC13aWR0aDo3NSV9XHJcblxyXG4gICAgLmZyYWdtZW50LTEyLWNvbCAuYmxvZy1wb3N0cyB7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtZmxleC1kaXJlY3Rpb246cm93Oy0taGlnaGxpZ2h0LWFsaWduLWl0ZW1zOmNlbnRlcjstLWhpZ2hsaWdodC1pbWFnZS1jb250YWluZXItd2lkdGg6MTAwJX1cclxuXHJcbiAgICAuZnJhZ21lbnQtMTItY29sIC5ibG9nLXBvc3RzLS1mZXctaXRlbXMge1xyXG4gICAgICAgIC0tZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnJ9XHJcblxyXG4gICAgLmZyYWdtZW50LTEyLWNvbCAuY3RhIHtcclxuICAgICAgICAtLWZyYWdtZW50LXBhZGRpbmc6NjRweCAwfVxyXG5cclxuICAgIC5mcmFnbWVudC0xMi1jb2wgLmN0YS0td2l0aC1pbWFnZSwuZnJhZ21lbnQtMTItY29sIC5mcmFnbWVudC1oaWdobGlnaHQtLXdpdGgtaW1hZ2Uge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1pbWFnZS1wYWRkaW5nOjEyOHB4IDB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5mcmFnbWVudC0xMi1jb2wge1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDphdXRvXHJcbiAgICB9XHJcblxyXG4gICAgLmZyYWdtZW50LTEyLWNvbCAuZ2FsbGVyeSB7XHJcbiAgICAgICAgLS1nYWxsZXJ5LWdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOjk5MnB4KSB7XHJcbiAgICAuZnJhZ21lbnQtMTItY29sIHtcclxuICAgICAgICAtLWxpc3QtaXRlbS1jb250YWluZXItd2lkdGg6ODAlO1xyXG4gICAgICAgIC0taXRlbS1pY29uLWNvbnRhaW5lci1kaWFtZXRlcjo1NHB4Oy0tYmxvZy1saXN0LWl0ZW0tZGlzcGxheTpmbGV4Oy0tYmxvZy1oaWdobGlnaHQtcHJldmlldy1tYXJnaW46MCAwIDEycHg7LS1ibG9nLWhpZ2hsaWdodC1kaXNwbGF5OmdyaWQ7LS1ibG9nLWhpZ2hsaWdodC1ncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjstLWJsb2ctaGlnaGxpZ2h0LWdyaWQtY29sdW1uLWdhcDoyNHB4fVxyXG5cclxuICAgIC5mcmFnbWVudC0xMi1jb2wgLmJsb2ctbGlzdCB7XHJcbiAgICAgICAgLS1ibG9nLWl0ZW0taW1hZ2UtaGVpZ2h0OmF1dG99XHJcblxyXG4gICAgLmZyYWdtZW50LTEyLWNvbCAuYmxvZy1wb3N0cywuZnJhZ21lbnQtMTItY29sIC5zZXJtb25zIHtcclxuICAgICAgICAtLWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcn1cclxuXHJcbiAgICAuZnJhZ21lbnQtMTItY29sIC5ldmVudHMsLmZyYWdtZW50LTEyLWNvbCAuZXZlbnRzLWRldGFpbHMge1xyXG4gICAgICAgIC0tbGlzdC1pdGVtLWRldGFpbHMtbWFyZ2luOjAgMjRweDstLWV2ZW50LWl0ZW0tbG9jYXRpb24tbWFyZ2luOjAgNHB4IDEycHggMDstLWxpc3QtaXRlbS1zdWJ0aXRsZS1kaXNwbGF5OmZsZXg7LS1saXN0LWl0ZW0tc3VidGl0bGUtZmxleC13cmFwOndyYXA7LS1ldmVudC1pdGVtLWxvY2F0aW9uLWRhdGUtZGl2aWRlcjonIMOi4oKswqInfVxyXG5cclxuICAgIC5mcmFnbWVudC0xMi1jb2wgLmdhbGxlcnkge1xyXG4gICAgICAgIC0tZ2FsbGVyeS1ncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKX1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZnJhZ21lbnQtNi1jb2wge1xyXG4gICAgICAgIC0tZm9ybS1pbnB1dC13aWR0aDoyODBweDtcclxuICAgICAgICAtLWZvcm0tY29udGFpbmVyLWFsaWduLWl0ZW1zOmNlbnRlcjstLWZvcm0tY29udGFpbmVyLWhlaWdodDoxMDAlOy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy0tY29udGFjdC1pbmZvLWl0ZW0tbWFyZ2luOjAgMCAyNHB4Oy0tY29udGFjdC1pbmZvLWl0ZW0tZGV0YWlscy1tYXJnaW46MTZweCAwIDA7LS1jb250YWN0LWluZm8taXRlbS1kZXRhaWxzLXRleHQtYWxpZ246bGVmdDstLWNvbnRhY3QtaW5mby1pdGVtLXdpZHRoOjEwMCU7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLWNvbnRhY3QtaW5mby1pdGVtLWp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy0tc2VydmljZS10aW1lcy1pdGVtLWZsZXgtZGlyZWN0aW9uOnJvdzstLXNlcnZpY2UtdGltZXMtaXRlbS1hbGlnbi1pdGVtczplbmQ7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tdGV4dC1hbGlnbjpsZWZ0Oy0tc2VydmljZS10aW1lLWNvbnRhaW5lci1tYXJnaW46MCAwIDAgMTZweDstLWJsb2ctbGlzdC1pbWFnZS13aWR0aDoxMDAlOy0taGlnaGxpZ2h0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LS1jdGEtY29udGVudC10ZXh0LWFsaWduOmxlZnQ7LS1saXN0LWl0ZW0tZGV0YWlscy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1saXN0LWl0ZW0tZGV0YWlscy1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy0tYnV0dG9uLWxpc3QtbWFyZ2luOjEycHggMCAwfVxyXG5cclxuICAgIC5mcmFnbWVudC02LWNvbCAuZXZlbnRzIHtcclxuICAgICAgICAtLWxpc3QtaXRlbS1zdWJ0aXRsZS1kaXNwbGF5OmJsb2NrfVxyXG5cclxuICAgIC5mcmFnbWVudC02LWNvbCAuZnJhZ21lbnQtaGlnaGxpZ2h0X190aXRsZSB7XHJcbiAgICAgICAgLS1oMi1mb250LXNpemU6MjRweH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCkge1xyXG4gICAgLmZyYWdtZW50LTQtY29sOm5vdCguZnJhZ21lbnQtNC1jb2wtLWxhc3QpIHtcclxuICAgICAgICAtLWZvcm0taW5wdXQtd2lkdGg6MjgwcHg7XHJcbiAgICAgICAgLS1mb3JtLWNvbnRhaW5lci1hbGlnbi1pdGVtczpjZW50ZXI7LS1mb3JtLWNvbnRhaW5lci1oZWlnaHQ6MTAwJTstLWNvbnRhY3QtaW5mby1jb250YWluZXItYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWNvbnRhY3QtaW5mby1pdGVtLW1hcmdpbjowIDAgMjRweDstLWNvbnRhY3QtaW5mby1pdGVtLWRldGFpbHMtbWFyZ2luOjE2cHggMCAwOy0tY29udGFjdC1pbmZvLWl0ZW0tZGV0YWlscy10ZXh0LWFsaWduOmxlZnQ7LS1jb250YWN0LWluZm8taXRlbS13aWR0aDoxMDAlOy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1jb250YWN0LWluZm8taXRlbS1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstLXNlcnZpY2UtdGltZXMtaXRlbS1mbGV4LWRpcmVjdGlvbjpyb3c7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYWxpZ24taXRlbXM6ZW5kOy0tc2VydmljZS10aW1lcy1pdGVtLXRleHQtYWxpZ246bGVmdDstLXNlcnZpY2UtdGltZS1jb250YWluZXItbWFyZ2luOjAgMCAwIDE2cHg7LS1ibG9nLWxpc3QtaW1hZ2Utd2lkdGg6MTAwJTstLWhpZ2hsaWdodC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy0tY3RhLWNvbnRlbnQtdGV4dC1hbGlnbjpsZWZ0Oy0tbGlzdC1pdGVtLWRldGFpbHMtZmxleC1kaXJlY3Rpb246Y29sdW1uOy0tbGlzdC1pdGVtLWRldGFpbHMtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWJ1dHRvbi1saXN0LW1hcmdpbjoxMnB4IDAgMH1cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2w6bm90KC5mcmFnbWVudC00LWNvbC0tbGFzdCkgLmV2ZW50cyB7XHJcbiAgICAgICAgLS1saXN0LWl0ZW0tc3VidGl0bGUtZGlzcGxheTpibG9ja31cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2w6bm90KC5mcmFnbWVudC00LWNvbC0tbGFzdCkgLmZyYWdtZW50LWhpZ2hsaWdodF9fdGl0bGUge1xyXG4gICAgICAgIC0taDItZm9udC1zaXplOjI0cHh9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmZyYWdtZW50LTQtY29sOm5vdCguZnJhZ21lbnQtNC1jb2wtLWxhc3QpIHtcclxuICAgICAgICAtLWg0LWZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgIC0taDUtZm9udC1zaXplOjE2cHg7LS1mcmFnbWVudC10aXRsZS10ZXh0LWFsaWduOmxlZnQ7LS1mcmFnbWVudC10aXRsZS1tYXJnaW4tYm90dG9tOjI0cHg7LS1jb250YWN0LWluZm8taXRlbS1tYXJnaW46MCAwIDI0cHg7LS1jb250YWN0LWluZm8taXRlbS1mbGV4LWRpcmVjdGlvbjpyb3c7LS1jb250YWN0LWluZm8taXRlbS1kZXRhaWxzLW1hcmdpbjowIDAgMCAxNnB4Oy0tY29udGFjdC1pbmZvLWl0ZW0tZGV0YWlscy10ZXh0LWFsaWduOmxlZnQ7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1jb250YWN0LWluZm8taXRlbS1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstLWNvbnRhY3QtaW5mby1jb250YWluZXItYWxpZ24taXRlbXM6Y2VudGVyOy0tY29udGFjdC1pbmZvLWl0ZW0td2lkdGg6MTAwJTstLXNlcnZpY2UtdGltZXMtaXRlbS1mbGV4LWRpcmVjdGlvbjpyb3c7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYWxpZ24taXRlbXM6ZW5kOy0tc2VydmljZS10aW1lcy1pdGVtLXRleHQtYWxpZ246bGVmdDstLXNlcnZpY2UtdGltZS1jb250YWluZXItbWFyZ2luOjAgMCAwIDE2cHg7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tZ2FwOjMycHg7LS1mb3JtLWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LS1mb3JtLWNvbnRhaW5lci10ZXh0LWFsaWduOmxlZnQ7LS1mb3JtLWJ1dHRvbi1tYXJnaW46MDstLWxpc3QtaXRlbS1kZXRhaWxzLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLWxpc3QtaXRlbS1kZXRhaWxzLWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LS1idXR0b24tbGlzdC1tYXJnaW46MTJweCAwIDB9XHJcblxyXG4gICAgLmZyYWdtZW50LTQtY29sOm5vdCguZnJhZ21lbnQtNC1jb2wtLWxhc3QpIC5ldmVudHMge1xyXG4gICAgICAgIC0tbGlzdC1pdGVtLXN1YnRpdGxlLWRpc3BsYXk6YmxvY2t9XHJcblxyXG4gICAgLmZyYWdtZW50LTQtY29sOm5vdCguZnJhZ21lbnQtNC1jb2wtLWxhc3QpIC5jdGEtLXdpdGgtaW1hZ2UsLmZyYWdtZW50LTQtY29sOm5vdCguZnJhZ21lbnQtNC1jb2wtLWxhc3QpIC5mcmFnbWVudC1oaWdobGlnaHQtLXdpdGgtaW1hZ2Uge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1pbWFnZS1wYWRkaW5nOjk2cHggMTJweH1cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2w6bm90KC5mcmFnbWVudC00LWNvbC0tbGFzdCkgLmZyYWdtZW50LWhpZ2hsaWdodF9fdGl0bGUge1xyXG4gICAgICAgIC0taDItZm9udC1zaXplOjI0cHh9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5mcmFnbWVudC00LWNvbDpub3QoLmZyYWdtZW50LTQtY29sLS1sYXN0KSB7XHJcbiAgICAgICAgLS1ldmVudC1pdGVtLWxvY2F0aW9uLWRhdGUtZGl2aWRlcjonIMOi4oKswqInXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCB7XHJcbiAgICAgICAgLS1oMS1mb250LXNpemU6NjRweDtcclxuICAgICAgICAtLWgyLWZvbnQtc2l6ZTo0OHB4Oy0taDMtZm9udC1zaXplOjMycHg7LS1oNC1mb250LXNpemU6MjRweDstLWZyYWdtZW50LXRpdGxlLWZvbnQtc2l6ZTo0OHB4Oy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpyb3c7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LS1jb250YWN0LWluZm8taXRlbS13aWR0aDozMy4zMzMzMzMzMyU7LS1jb250YWN0LWluZm8taXRlbS1tYXJnaW46MDstLWZvcm0tZmxleC1kaXJlY3Rpb246cm93Oy0tZm9ybS1tYXJnaW46MCBhdXRvOy0tZm9ybS1pbnB1dC13aWR0aDoyODBweDstLWZvcm0tYnV0dG9uLW1hcmdpbjowIDE2cHg7LS1mb3JtLWlucHV0LW1hcmdpbjowOy0tZ3JpZC1pdGVtLWhlYWRpbmctZmxleDoxIDA7LS1ncmlkLWl0ZW0tZGV0YWlscy1tYXJnaW46MCAwIDAgMTZweDstLWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyOy0tc2VydmljZS10aW1lcy1pdGVtLXdpZHRoOjMzLjMzMzMzMzMzJTstLWxpc3QtaXRlbS1mbGV4LWRpcmVjdGlvbjpyb3c7LS1saXN0LWl0ZW0tanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LS1saXN0LWl0ZW0tYWxpZ24taXRlbXM6Y2VudGVyOy0tbGlzdC1pdGVtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbjpyb3c7LS1saXN0LWl0ZW0tY29udGFpbmVyLXdpZHRoOjEwMCU7LS1saXN0LWl0ZW0tZGV0YWlscy1tYXJnaW46MCAyNHB4Oy0tYmxvZy1saXN0LWl0ZW0taW1hZ2UtY29udGFpbmVyLW1hcmdpbjowIDI0cHggMCAwOy0tYmxvZy1saXN0LWl0ZW0tZGlzcGxheTpmbGV4Oy0tYmxvZy1saXN0LWl0ZW0td2lkdGg6MzMuMzMzMzMzMzMlOy0tYmxvZy1pdGVtLWltYWdlLWhlaWdodDphdXRvOy0tYmxvZy1saXN0LWltYWdlLXdpZHRoOjMzLjMzMzMzMzMzJTstLWV2ZW50LWRldGFpbHMtYnV0dG9uLWRpc3BsYXk6aW5pdGlhbDstLWhpZ2hsaWdodC1jb250ZW50LW1heC13aWR0aDo3NSV9XHJcblxyXG4gICAgLmZyYWdtZW50LTQtY29sLS1sYXN0IC5ibG9nLXBvc3RzIHtcclxuICAgICAgICAtLWhpZ2hsaWdodC1mbGV4LWRpcmVjdGlvbjpyb3c7LS1oaWdobGlnaHQtYWxpZ24taXRlbXM6Y2VudGVyOy0taGlnaGxpZ2h0LWltYWdlLWNvbnRhaW5lci13aWR0aDoxMDAlfVxyXG5cclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCAuYmxvZy1wb3N0cy0tZmV3LWl0ZW1zIHtcclxuICAgICAgICAtLWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyfVxyXG5cclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCAuY3RhIHtcclxuICAgICAgICAtLWZyYWdtZW50LXBhZGRpbmc6NjRweCAwfVxyXG5cclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCAuY3RhLS13aXRoLWltYWdlLC5mcmFnbWVudC00LWNvbC0tbGFzdCAuZnJhZ21lbnQtaGlnaGxpZ2h0LS13aXRoLWltYWdlIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtaW1hZ2UtcGFkZGluZzoxMjhweCAwfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLmZyYWdtZW50LTQtY29sLS1sYXN0IHtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6YXV0b1xyXG4gICAgfVxyXG5cclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCAuZ2FsbGVyeSB7XHJcbiAgICAgICAgLS1nYWxsZXJ5LWdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLmZyYWdtZW50LTQtY29sLS1sYXN0IHtcclxuICAgICAgICAtLWxpc3QtaXRlbS1jb250YWluZXItd2lkdGg6ODAlO1xyXG4gICAgICAgIC0taXRlbS1pY29uLWNvbnRhaW5lci1kaWFtZXRlcjo1NHB4Oy0tYmxvZy1saXN0LWl0ZW0tZGlzcGxheTpmbGV4Oy0tYmxvZy1oaWdobGlnaHQtcHJldmlldy1tYXJnaW46MCAwIDEycHg7LS1ibG9nLWhpZ2hsaWdodC1kaXNwbGF5OmdyaWQ7LS1ibG9nLWhpZ2hsaWdodC1ncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjstLWJsb2ctaGlnaGxpZ2h0LWdyaWQtY29sdW1uLWdhcDoyNHB4fVxyXG5cclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCAuYmxvZy1saXN0IHtcclxuICAgICAgICAtLWJsb2ctaXRlbS1pbWFnZS1oZWlnaHQ6YXV0b31cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmJsb2ctcG9zdHMsLmZyYWdtZW50LTQtY29sLS1sYXN0IC5zZXJtb25zIHtcclxuICAgICAgICAtLWdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcn1cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmV2ZW50cywuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmV2ZW50cy1kZXRhaWxzIHtcclxuICAgICAgICAtLWxpc3QtaXRlbS1kZXRhaWxzLW1hcmdpbjowIDI0cHg7LS1ldmVudC1pdGVtLWxvY2F0aW9uLW1hcmdpbjowIDRweCAxMnB4IDA7LS1saXN0LWl0ZW0tc3VidGl0bGUtZGlzcGxheTpmbGV4Oy0tbGlzdC1pdGVtLXN1YnRpdGxlLWZsZXgtd3JhcDp3cmFwOy0tZXZlbnQtaXRlbS1sb2NhdGlvbi1kYXRlLWRpdmlkZXI6JyDDouKCrMKiJ31cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmdhbGxlcnkge1xyXG4gICAgICAgIC0tZ2FsbGVyeS1ncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKX1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuZnJhZ21lbnQtNC1jb2wtLWxhc3Qge1xyXG4gICAgICAgIC0taDQtZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgLS1oNS1mb250LXNpemU6MTZweDstLWZyYWdtZW50LXRpdGxlLXRleHQtYWxpZ246bGVmdDstLWZyYWdtZW50LXRpdGxlLW1hcmdpbi1ib3R0b206MjRweDstLWNvbnRhY3QtaW5mby1pdGVtLW1hcmdpbjowIDAgMjRweDstLWNvbnRhY3QtaW5mby1pdGVtLWZsZXgtZGlyZWN0aW9uOnJvdzstLWNvbnRhY3QtaW5mby1pdGVtLWRldGFpbHMtbWFyZ2luOjAgMCAwIDE2cHg7LS1jb250YWN0LWluZm8taXRlbS1kZXRhaWxzLXRleHQtYWxpZ246bGVmdDstLWNvbnRhY3QtaW5mby1jb250YWluZXItanVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstLWNvbnRhY3QtaW5mby1pdGVtLWp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1hbGlnbi1pdGVtczpjZW50ZXI7LS1jb250YWN0LWluZm8taXRlbS13aWR0aDoxMDAlOy0tc2VydmljZS10aW1lcy1pdGVtLWZsZXgtZGlyZWN0aW9uOnJvdzstLXNlcnZpY2UtdGltZXMtaXRlbS1hbGlnbi1pdGVtczplbmQ7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tdGV4dC1hbGlnbjpsZWZ0Oy0tc2VydmljZS10aW1lLWNvbnRhaW5lci1tYXJnaW46MCAwIDAgMTZweDstLXNlcnZpY2UtdGltZXMtaXRlbS1nYXA6MzJweDstLWZvcm0tYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWZvcm0tY29udGFpbmVyLXRleHQtYWxpZ246bGVmdDstLWZvcm0tYnV0dG9uLW1hcmdpbjowOy0tbGlzdC1pdGVtLWRldGFpbHMtZmxleC1kaXJlY3Rpb246Y29sdW1uOy0tbGlzdC1pdGVtLWRldGFpbHMtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWJ1dHRvbi1saXN0LW1hcmdpbjoxMnB4IDAgMH1cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmV2ZW50cyB7XHJcbiAgICAgICAgLS1saXN0LWl0ZW0tc3VidGl0bGUtZGlzcGxheTpibG9ja31cclxuXHJcbiAgICAuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmN0YS0td2l0aC1pbWFnZSwuZnJhZ21lbnQtNC1jb2wtLWxhc3QgLmZyYWdtZW50LWhpZ2hsaWdodC0td2l0aC1pbWFnZSB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWltYWdlLXBhZGRpbmc6OTZweCAxMnB4fVxyXG5cclxuICAgIC5mcmFnbWVudC00LWNvbC0tbGFzdCAuZnJhZ21lbnQtaGlnaGxpZ2h0X190aXRsZSB7XHJcbiAgICAgICAgLS1oMi1mb250LXNpemU6MjRweH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLmZyYWdtZW50LTQtY29sLS1sYXN0IHtcclxuICAgICAgICAtLWV2ZW50LWl0ZW0tbG9jYXRpb24tZGF0ZS1kaXZpZGVyOicgw6LigqzCoidcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICAtLWZyYWdtZW50LWNvbnRlbnQtYm94LXNoYWRvdzpub25lOy0tZnJhZ21lbnQtYm94LXNoYWRvdzpub25lfVxyXG5cclxuLmZvb3RlciAuZnJhZ21lbnQtdGl0bGUge1xyXG4gICAgLS1mcmFnbWVudC10aXRsZS1tYXJnaW4tYm90dG9tOjI0cHh9XHJcblxyXG4uZm9vdGVyIC5mb290ZXJfX3NlY3Rpb25zIHtcclxuICAgIC0taDQtZm9udC1zaXplOnZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKTstLWZyYWdtZW50LXBhZGRpbmc6MDstLWZyYWdtZW50LXRpdGxlLWZvbnQtc2l6ZToyMHB4Oy0tZnJhZ21lbnQtdGl0bGUtdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOy0tZnJhZ21lbnQtY29udGVudC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tZnJhZ21lbnQtY29udGVudC1wYWRkaW5nOjA7LS1pdGVtLWljb24tZGlzcGxheTpub25lOy0tc2VydmljZS10aW1lcy1pY29uLWRpc3BsYXk6bm9uZTstLXNlcnZpY2UtdGltZXMtaW5saW5lLWRheS1kaXNwbGF5OmlubGluZS1ibG9jazstLXNlcnZpY2UtdGltZS1jb250YWluZXItbWFyZ2luOjA7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tZ2FwOjE2cHg7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tdGltZS10b3AtbWFyZ2luOjRweDstLXNlcnZpY2UtdGltZXMtaXRlbS10aW1lLWJvdHRvbS1tYXJnaW46MTJweDstLWNvbnRhY3QtaW5mby1pdGVtLWRldGFpbHMtbWFyZ2luOjA7LS1jb250YWN0LWluZm8taXRlbS1tYXJnaW46MCAwIDE2cHggMDstLWh5cGVybGluay1jb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTstLWZyYWdtZW50LXRpdGxlLXRleHQtYWxpZ246bGVmdDstLWZvcm0tY29udGFpbmVyLWp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy0tZm9ybS1jb250YWluZXItYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWZvcm0tYWxpZ24taXRlbXM6ZmxleC1zdGFydDstLWZvcm0taW5wdXQtd2lkdGg6MTAwJTstLWZvcm0tYnV0dG9uLW1hcmdpbjowOy0tY29udGFjdC1pbmZvLWl0ZW0tanVzdGlmeS1jb250ZW50Om5vcm1hbDstLWNvbnRhY3QtaW5mby1pdGVtLWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LS1jb250YWN0LWluZm8tY29udGFpbmVyLWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LS1jb250YWN0LWluZm8taXRlbS1kZXRhaWxzLXRleHQtYWxpZ246bGVmdDstLXNlcnZpY2UtdGltZXMtaXRlbS10ZXh0LWFsaWduOmxlZnQ7LS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYWxpZ24taXRlbXM6ZmxleC1zdGFydH1cclxuXHJcbi5mcmFnbWVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZyYWdtZW50LWJhY2tncm91bmQpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1mcmFnbWVudC1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWZyYWdtZW50LWJveC1zaGFkb3cpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1mcmFnbWVudC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1mcmFnbWVudC1ib3JkZXItd2lkdGgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZnJhZ21lbnQtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1mcmFnbWVudC1wYWRkaW5nKTtcclxuICAgIG92ZXJmbG93OiB2YXIoLS1mcmFnbWVudC1vdmVyZmxvdyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uZnJhZ21lbnRfX2NvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZnJhZ21lbnQtY29udGVudC1iYWNrZ3JvdW5kKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tZnJhZ21lbnQtY29udGVudC1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWZyYWdtZW50LWNvbnRlbnQtYm94LXNoYWRvdyk7XHJcbiAgICBib3JkZXI6IHZhcigtLWZyYWdtZW50LWNvbnRlbnQtYm9yZGVyKTtcclxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tZnJhZ21lbnQtY29udGVudC1ib3JkZXItd2lkdGgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZnJhZ21lbnQtY29udGVudC1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWZyYWdtZW50LWNvbnRlbnQtcGFkZGluZylcclxufVxyXG5cclxuLmZyYWdtZW50LXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1tYXJnaW4pO1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1tYXgtd2lkdGgpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1jdGEge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZnJhZ21lbnQtYmFja2dyb3VuZCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWZyYWdtZW50LWJveC1zaGFkb3cpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZnJhZ21lbnQtYm94LXNoYWRvdyk7XHJcbiAgICBib3JkZXI6IHZhcigtLWZyYWdtZW50LWJvcmRlcik7XHJcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWZyYWdtZW50LWJvcmRlci13aWR0aCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1mcmFnbWVudC1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWZyYWdtZW50LXBhZGRpbmcpO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiB2YXIoLS1mcmFnbWVudC1jdGEtanVzdGlmeS1jb250ZW50KTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IHZhcigtLWZyYWdtZW50LWN0YS1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB2YXIoLS1mcmFnbWVudC1jdGEtanVzdGlmeS1jb250ZW50KTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiB2YXIoLS1mcmFnbWVudC1jdGEtYWxpZ24taXRlbXMpO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHZhcigtLWZyYWdtZW50LWN0YS1hbGlnbi1pdGVtcyk7XHJcbiAgICBhbGlnbi1pdGVtczogdmFyKC0tZnJhZ21lbnQtY3RhLWFsaWduLWl0ZW1zKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtY3RhX19pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtY3RhX190aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy1mb250LXdlaWdodCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGluZy1saW5lLWhlaWdodCk7XHJcbiAgICBtYXJnaW46IHZhcigtLWZyYWdtZW50LWN0YS10aXRsZS1tYXJnaW4pXHJcbn1cclxuXHJcbi5mcmFnbWVudC1jdGFfX3N1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS11aS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tdWktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXVpLWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdWktbGFyZ2Utc2l6ZSlcclxufVxyXG5cclxuLmZyYWdtZW50LWN0YV9fYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS11aS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tdWktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXVpLWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdWktbWVkaXVtLXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1idXR0b24tZGlzcGxheSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1ib3gtc2hhZG93KTtcclxuICAgIGJvcmRlcjogdmFyKC0tYnV0dG9uLWJvcmRlcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIG1pbi13aWR0aDogdmFyKC0tYnV0dG9uLW1pbi13aWR0aCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLWJ1dHRvbi10cmFuc2l0aW9uKTtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLWJ1dHRvbi10cmFuc2l0aW9uKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktYm9yZGVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1mcmFnbWVudC1jdGEtYnV0dG9uLW1hcmdpbi10b3ApXHJcbn1cclxuXHJcbi5mcmFnbWVudC1jdGFfX2J1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uZnJhZ21lbnQtY3RhX19idXR0b246aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktaG92ZXItY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktaG92ZXItdGV4dC1jb2xvcilcclxufVxyXG5cclxuLmZyYWdtZW50LWZvcm0tYnV0dG9uLC5oaWdobGlnaHQtdmlldy1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXVpLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS11aS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tdWktbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS11aS1tZWRpdW0tc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGRpc3BsYXk6IHZhcigtLWJ1dHRvbi1kaXNwbGF5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWJveC1zaGFkb3cpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWJveC1zaGFkb3cpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1idXR0b24tYm9yZGVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tYnV0dG9uLXBhZGRpbmcpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1idXR0b24tbWluLXdpZHRoKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tYnV0dG9uLXRyYW5zaXRpb24pO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tYnV0dG9uLXRyYW5zaXRpb24pO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWhpZ2hsaWdodC12aWV3LWJ1dHRvbi1tYXJnaW4tdG9wKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtZm9ybS1idXR0b246aG92ZXIsLmhpZ2hsaWdodC12aWV3LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uZnJhZ21lbnQtZm9ybS1idXR0b246aG92ZXIsLmhpZ2hsaWdodC12aWV3LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uZnJhZ21lbnQtaGlnaGxpZ2h0IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiB2YXIoLS1oaWdobGlnaHQtZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHZhcigtLWhpZ2hsaWdodC1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogdmFyKC0taGlnaGxpZ2h0LWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1oaWdobGlnaHQtYWxpZ24taXRlbXMpO1xyXG4gICAgYWxpZ24taXRlbXM6IHZhcigtLWhpZ2hsaWdodC1hbGlnbi1pdGVtcyk7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiB2YXIoLS1oaWdobGlnaHQtanVzdGlmeS1jb250ZW50KTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IHZhcigtLWhpZ2hsaWdodC1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB2YXIoLS1oaWdobGlnaHQtanVzdGlmeS1jb250ZW50KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taXRlbS1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pdGVtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgcGFkZGluZzogdmFyKC0taGlnaGxpZ2h0LXBhZGRpbmcpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWJhY2tncm91bmQpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1oaWdobGlnaHQtaGVpZ2h0KVxyXG59XHJcblxyXG4uZnJhZ21lbnQtaGlnaGxpZ2h0LS13aXRoLWltYWdlIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJhY2tncm91bmQtaW1hZ2UtcGFkZGluZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB2YXIoLS1mcmFnbWVudC1pbWFnZS1iYWNrZ3JvdW5kLXBvc2l0aW9uKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tZnJhZ21lbnQtaW1hZ2UtYmFja2dyb3VuZC1zaXplKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtaGlnaGxpZ2h0X19kYXRlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcclxufVxyXG5cclxuLmZyYWdtZW50LWhpZ2hsaWdodF9fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IHZhcigtLWhpZ2hsaWdodC10aXRsZS1tYXJnaW4pXHJcbn1cclxuXHJcbi5mcmFnbWVudC1oaWdobGlnaHRfX3RpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstaG92ZXItY29sb3IpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1oaWdobGlnaHRfX3N1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2R5LWZvbnQtd2VpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1ib2R5LXRleHQtbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5LXRleHQtbWVkaXVtLWZvbnQtc2l6ZSlcclxufVxyXG5cclxuLmZyYWdtZW50LWhpZ2hsaWdodF9fY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1oaWdobGlnaHQtY29udGVudC10ZXh0LWFsaWduKTtcclxuICAgIG1heC13aWR0aDogdmFyKC0taGlnaGxpZ2h0LWNvbnRlbnQtbWF4LXdpZHRoKTtcclxuICAgIG1hcmdpbjogdmFyKC0taGlnaGxpZ2h0LWNvbnRlbnQtbWFyZ2luKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG59XHJcblxyXG4uZnJhZ21lbnQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcmFnbWVudC10aXRsZS1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZyYWdtZW50LXRpdGxlLWxpbmUtaGVpZ2h0KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mcmFnbWVudC10aXRsZS1sZXR0ZXItc3BhY2luZyk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tZnJhZ21lbnQtdGl0bGUtdGV4dC10cmFuc2Zvcm0pO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZnJhZ21lbnQtdGl0bGUtbWFyZ2luLWJvdHRvbSk7XHJcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1mcmFnbWVudC10aXRsZS10ZXh0LWFsaWduKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mcmFnbWVudC10aXRsZS10ZXh0LWNvbG9yKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtdmlldy1hbGwge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tZnJhZ21lbnQtdmlldy1hbGwtbWFyZ2luLXRvcCk7XHJcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1mcmFnbWVudC12aWV3LWFsbC10ZXh0LWFsaWduKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtdmlldy1hbGxfX3RleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXVpLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS11aS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tdWktbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS11aS1tZWRpdW0tc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGRpc3BsYXk6IHZhcigtLWJ1dHRvbi1kaXNwbGF5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWJveC1zaGFkb3cpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWJveC1zaGFkb3cpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1idXR0b24tYm9yZGVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tYnV0dG9uLXBhZGRpbmcpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1idXR0b24tbWluLXdpZHRoKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tYnV0dG9uLXRyYW5zaXRpb24pO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tYnV0dG9uLXRyYW5zaXRpb24pO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktYmFja2dyb3VuZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS10ZXh0LWNvbG9yKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtdmlldy1hbGxfX3RleHQ6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS1ob3Zlci1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLmZyYWdtZW50LXZpZXctYWxsX190ZXh0OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS1ob3Zlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLXRleHQtY29sb3IpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1pdGVtLWljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHZhcigtLWl0ZW0taWNvbi1kaXNwbGF5KTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGJvcmRlcjogdmFyKC0taXRlbS1pY29uLWJvcmRlcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWljb24tYm9yZGVyLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW0taWNvbi1ib3JkZXItcmFkaXVzKTtcclxuICAgIHdpZHRoOiB2YXIoLS1pdGVtLWljb24tY29udGFpbmVyLWRpYW1ldGVyKTtcclxuICAgIGhlaWdodDogdmFyKC0taXRlbS1pY29uLWNvbnRhaW5lci1kaWFtZXRlcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWljb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcilcclxufVxyXG5cclxuYS5mcmFnbWVudC1pdGVtLWljb24tY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taWNvbi1ob3Zlci1jb2xvcilcclxufVxyXG5cclxuYS5mcmFnbWVudC1pdGVtLWljb24tY29udGFpbmVyIC5mcmFnbWVudC1pdGVtLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpXHJcbn1cclxuXHJcbmEuZnJhZ21lbnQtaXRlbS1pY29uLWNvbnRhaW5lciAuZnJhZ21lbnQtaXRlbS1pY29uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZzogdmFyKC0tZ3JpZC1wYWRkaW5nKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zKTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogdmFyKC0tZ3JpZC1jb2x1bW4tZ2FwKTtcclxuICAgIGdyaWQtcm93LWdhcDogdmFyKC0tZ3JpZC1yb3ctZ2FwKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtZ3JpZF9faXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmlkLWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgICBib3JkZXI6IHZhcigtLWdyaWQtaXRlbS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1ncmlkLWl0ZW0tYm9yZGVyLXdpZHRoKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWdyaWQtaXRlbS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWdyaWQtaXRlbS1wYWRkaW5nKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taXRlbS1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICBvdmVyZmxvdzogdmFyKC0tZ3JpZC1pdGVtLW92ZXJmbG93KVxyXG59XHJcblxyXG4uYnV0dG9uLXJlc2V0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGVcclxufVxyXG5cclxuLmJ1dHRvbiwuYnV0dG9uLS1wcmltYXJ5IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS11aS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tdWktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLXVpLWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdWktbWVkaXVtLXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1idXR0b24tZGlzcGxheSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1ib3gtc2hhZG93KTtcclxuICAgIGJvcmRlcjogdmFyKC0tYnV0dG9uLWJvcmRlcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJ1dHRvbi1wYWRkaW5nKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIG1pbi13aWR0aDogdmFyKC0tYnV0dG9uLW1pbi13aWR0aCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLWJ1dHRvbi10cmFuc2l0aW9uKTtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLWJ1dHRvbi10cmFuc2l0aW9uKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciwuYnV0dG9uLS1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktaG92ZXItY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktaG92ZXItY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5idXR0b24tLXNlY29uZGFyeSB7XHJcbiAgICBib3JkZXI6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktYm9yZGVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1zZWNvbmRhcnktdGV4dC1jb2xvcilcclxufVxyXG5cclxuLmJ1dHRvbi0tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLXNlY29uZGFyeS1ob3Zlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tc2Vjb25kYXJ5LWhvdmVyLXRleHQtY29sb3IpXHJcbn1cclxuXHJcbi5idXR0b24tLWxpc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXVpLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS11aS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tdWktbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS11aS1tZWRpdW0tc2l6ZSk7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1idXR0b24tbGlzdC1kaXNwbGF5KTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiB2YXIoLS1idXR0b24tbGlzdC1hbGlnbi1pdGVtcyk7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogdmFyKC0tYnV0dG9uLWxpc3QtYWxpZ24taXRlbXMpO1xyXG4gICAgYWxpZ24taXRlbXM6IHZhcigtLWJ1dHRvbi1saXN0LWFsaWduLWl0ZW1zKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1idXR0b24tbGlzdC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tbGlzdC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1idXR0b24tbGlzdC1ib3JkZXItcmFkaXVzKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tbGlzdC10ZXh0LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogdmFyKC0tYnV0dG9uLWxpc3QtcGFkZGluZyk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogdmFyKC0tYnV0dG9uLWxpc3QtbWFyZ2luKTtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnRcclxufVxyXG5cclxuLmJ1dHRvbi0tbGlzdDpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWxpc3QtaG92ZXItdGV4dC1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tbGlzdC1ob3Zlci1jb2xvcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1saXN0LWhvdmVyLWNvbG9yKVxyXG59XHJcblxyXG4uYnV0dG9uLS1saXN0OmhvdmVyOmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5idXR0b24tLWxpc3Qgc3ZnIHtcclxuICAgIG1hcmdpbjogdmFyKC0tYnV0dG9uLWxpc3Qtc3ZnLW1hcmdpbilcclxufVxyXG5cclxuLmJ1dHRvbi1hcy1saW5rIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstY29sb3IpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmVcclxufVxyXG5cclxuLmJ1dHRvbi1hcy1saW5rOmhvdmVyLC5idXR0b24tYXMtbGluazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstaG92ZXItY29sb3IpXHJcbn1cclxuXHJcbi5kZXNrdG9wLW5hdl9fbGlzdCwuc2xpZGVvdXQtbmF2X19saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLm1lbnUtbGluayB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1zbWFsbC1mb250LXNpemUpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1jb2xvcilcclxufVxyXG5cclxuLm1lbnUtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWhvdmVyLWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uZGVza3RvcC1uYXZfX2xpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxyXG59XHJcblxyXG4uZGVza3RvcC1uYXZfX2Ryb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMjRweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taGVhZGVyLWRyb3Bkb3duLWJveC1zaGFkb3cpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0taGVhZGVyLWRyb3Bkb3duLWJveC1zaGFkb3cpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWhlYWRlci1kcm9wZG93bi10ZXh0LXRyYW5zZm9ybSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWFkZXItZHJvcGRvd24tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBib3JkZXI6IHZhcigtLWhlYWRlci1kcm9wZG93bi1ib3JkZXIpXHJcbn1cclxuXHJcbi5kZXNrdG9wLW5hdl9faXRlbSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0taGVhZGVyLW1lbnUtaXRlbS10ZXh0LXRyYW5zZm9ybSlcclxufVxyXG5cclxuLmRlc2t0b3AtbmF2X19kcm9wZG93bi1pdGVtOjphZnRlciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLjE1ZW1cclxufVxyXG5cclxuLmRlc2t0b3AtbmF2X19zdWItaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWxcclxufVxyXG5cclxuLmRlc2t0b3AtbmF2X19zdWItaXRlbTphY3RpdmUsLmRlc2t0b3AtbmF2X19zdWItaXRlbTpmb2N1cywuZGVza3RvcC1uYXZfX3N1Yi1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5zaGFyZWQtbWVudXMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IHZhcigtLXNoYXJlZC1tZW51LW1hcmdpbik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLnNoYXJlZC1tZW51cyAuc2xpZGVvdXQtbWVudSB7XHJcbiAgICB0b3A6IHZhcigtLW1vYmlsZS1tZW51LXRvcC1wb3NpdGlvbik7XHJcbiAgICBsZWZ0OiB2YXIoLS1tb2JpbGUtbWVudS1sZWZ0LWhpZGRlbi1wb3NpdGlvbik7XHJcbiAgICByaWdodDogdmFyKC0tbW9iaWxlLW1lbnUtcmlnaHQtaGlkZGVuLXBvc2l0aW9uKTtcclxuICAgIHdpZHRoOiB2YXIoLS1tb2JpbGUtbWVudS13aWR0aCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLW1vYmlsZS1tZW51LXRyYW5zaXRpb24pO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tbW9iaWxlLW1lbnUtdHJhbnNpdGlvbik7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlb3V0LW1lbnUtaGVpZ2h0KTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNsaWRlb3V0LW1lbnUtcGFkZGluZyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxufVxyXG5cclxuLnNoYXJlZC1tZW51cyAuc2xpZGVvdXQtbWVudS5zaG93IHtcclxuICAgIGxlZnQ6IHZhcigtLW1vYmlsZS1tZW51LWxlZnQtdmlzaWJsZS1wb3NpdGlvbik7XHJcbiAgICByaWdodDogdmFyKC0tbW9iaWxlLW1lbnUtcmlnaHQtdmlzaWJsZS1wb3NpdGlvbilcclxufVxyXG5cclxuLnNoYXJlZC1tZW51cyAuc2xpZGVvdXQtbWVudV9fbmFtZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWNvbG9yKVxyXG59XHJcblxyXG4uc2hhcmVkLW1lbnVzIC5kZXNrdG9wLW5hdl9fbWVudS1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnNoYXJlZC1tZW51cyAuZGVza3RvcC1uYXZfX2l0ZW0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItbWVudS1pdGVtLWhlaWdodCk7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLm1vYmlsZS1uYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uc2hhcmVkLW1vYmlsZS1uYXYge1xyXG4gICAgZGlzcGxheTogdmFyKC0tbW9iaWxlLW1lbnUtZGlzcGxheSk7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiB2YXIoLS1tb2JpbGUtaGVhZGVyLWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiB2YXIoLS1tb2JpbGUtaGVhZGVyLWp1c3RpZnktY29udGVudCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHZhcigtLW1vYmlsZS1oZWFkZXItanVzdGlmeS1jb250ZW50KTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogdmFyKC0tbW9iaWxlLWhlYWRlci1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tbW9iaWxlLWhlYWRlci1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1tb2JpbGUtbmF2LWhlaWdodClcclxufVxyXG5cclxuLnNoYXJlZC1tb2JpbGUtbmF2X19pY29uIHtcclxuICAgIG1heC13aWR0aDogMTgwcHhcclxufVxyXG5cclxuLnNoYXJlZC1tb2JpbGUtbmF2X19idXR0b24tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1tb2JpbGUtbmF2LWJ1dHRvbi10ZXh0LWRpc3BsYXkpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2hhcmVkLW1vYmlsZS1uYXZfX25hbWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEycHhcclxuICAgIH1cclxufVxyXG5cclxuLnNoYXJlZC1tb2JpbGUtbmF2X19uYW1lLC5zaGFyZWQtbW9iaWxlLW5hdl9fYnV0dG9uLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLW1vYmlsZS1oZWFkZXItdGV4dC10cmFuc2Zvcm0pO1xyXG4gICAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1jb2xvcilcclxufVxyXG5cclxuLnNoYXJlZC1tb2JpbGUtbmF2X19uYW1lOmhvdmVyLC5zaGFyZWQtbW9iaWxlLW5hdl9fYnV0dG9uLXRleHQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1ob3Zlci1jb2xvcilcclxufVxyXG5cclxuLnNoYXJlZC1tb2JpbGUtbmF2X19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXBcclxufVxyXG5cclxuLnNoYXJlZC1tb2JpbGUtbmF2X19idXR0b24ge1xyXG4gICAgdG9wOiB2YXIoLS1tb2JpbGUtbmF2LWhhbWJ1cmdlci10b3AtcG9zaXRpb24pO1xyXG4gICAgbGVmdDogdmFyKC0tbW9iaWxlLW5hdi1oYW1idXJnZXItbGVmdC1wb3NpdGlvbik7XHJcbiAgICByaWdodDogdmFyKC0tbW9iaWxlLW5hdi1oYW1idXJnZXItcmlnaHQtcG9zaXRpb24pO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHZhcigtLW1vYmlsZS1uYXYtaGFtYnVyZ2VyLXRyYW5zZm9ybSk7XHJcbiAgICB0cmFuc2Zvcm06IHZhcigtLW1vYmlsZS1uYXYtaGFtYnVyZ2VyLXRyYW5zZm9ybSk7XHJcbiAgICB6LWluZGV4OiA5OTlcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogdmFyKC0tbGlzdC1pdGVtLWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiB2YXIoLS1saXN0LWl0ZW0tanVzdGlmeS1jb250ZW50KTtcclxuICAgIGp1c3RpZnktY29udGVudDogdmFyKC0tbGlzdC1pdGVtLWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHZhcigtLWxpc3QtaXRlbS1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tbGlzdC1pdGVtLWZsZXgtZGlyZWN0aW9uKTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiB2YXIoLS1saXN0LWl0ZW0tYWxpZ24taXRlbXMpO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHZhcigtLWxpc3QtaXRlbS1hbGlnbi1pdGVtcyk7XHJcbiAgICBhbGlnbi1pdGVtczogdmFyKC0tbGlzdC1pdGVtLWFsaWduLWl0ZW1zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taXRlbS1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICBib3JkZXI6IHZhcigtLWxpc3QtaXRlbS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1saXN0LWl0ZW0tYm9yZGVyLXdpZHRoKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWxpc3QtaXRlbS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpc3QtaXRlbS1iYWNrZ3JvdW5kKTtcclxuICAgIG1hcmdpbjogdmFyKC0tbGlzdC1pdGVtLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1saXN0LWl0ZW0tcGFkZGluZylcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tdG9wLWxpc3QtaXRlbS10b3AtcGFkZGluZylcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uZnJhZ21lbnQtcGVyaW9kaWNhbC1saXN0LWl0ZW1fX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiB2YXIoLS1saXN0LWl0ZW0tY29udGFpbmVyLWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1saXN0LWl0ZW0tY29udGFpbmVyLWFsaWduLWl0ZW1zKTtcclxuICAgIGFsaWduLWl0ZW1zOiB2YXIoLS1saXN0LWl0ZW0tY29udGFpbmVyLWFsaWduLWl0ZW1zKTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogdmFyKC0tbGlzdC1pdGVtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tbGlzdC1pdGVtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICB3aWR0aDogdmFyKC0tbGlzdC1pdGVtLWNvbnRhaW5lci13aWR0aClcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtX19kYXRlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtX190aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy1mb250LXdlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGluZy1saW5lLWhlaWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtX190aXRsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taHlwZXJsaW5rLWhvdmVyLWNvbG9yKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtcGVyaW9kaWNhbC1saXN0LWl0ZW1fX2RldGFpbHMge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1saXN0LWl0ZW0tZGV0YWlscy1tYXJnaW4pO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiB2YXIoLS1saXN0LWl0ZW0tZGV0YWlscy1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tbGlzdC1pdGVtLWRldGFpbHMtZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHZhcigtLWxpc3QtaXRlbS1kZXRhaWxzLWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1saXN0LWl0ZW0tZGV0YWlscy1hbGlnbi1pdGVtcyk7XHJcbiAgICBhbGlnbi1pdGVtczogdmFyKC0tbGlzdC1pdGVtLWRldGFpbHMtYWxpZ24taXRlbXMpO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtbGlzdC1pdGVtX19zdWJ0aXRsZSB7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1saXN0LWl0ZW0tc3VidGl0bGUtZGlzcGxheSk7XHJcbiAgICAtbXMtZmxleC13cmFwOiB2YXIoLS1saXN0LWl0ZW0tc3VidGl0bGUtZmxleC13cmFwKTtcclxuICAgIGZsZXgtd3JhcDogdmFyKC0tbGlzdC1pdGVtLXN1YnRpdGxlLWZsZXgtd3JhcCk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LW1lZGl1bS1mb250LXNpemUpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1saXN0LWl0ZW0tc3VidGl0bGUtbWFyZ2luKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saXN0LWl0ZW0tc3VidGl0bGUtY29sb3IpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1wZXJpb2RpY2FsLWdyaWQtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmRcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtZ3JpZC1pdGVtX19oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG59XHJcblxyXG4uZnJhZ21lbnQtcGVyaW9kaWNhbC1ncmlkLWl0ZW1fX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWxpbmUtaGVpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIHRleHQtYWxpZ246IHZhcigtLWdyaWQtaXRlbS10aXRsZS10ZXh0LWFsaWduKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtcGVyaW9kaWNhbC1ncmlkLWl0ZW1fX3RpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstaG92ZXItY29sb3IpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1wZXJpb2RpY2FsLWdyaWQtaXRlbV9fZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IHZhcigtLWdyaWQtaXRlbS1kZXRhaWxzLW1hcmdpbik7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiB2YXIoLS1ncmlkLWl0ZW0taGVhZGluZy1mbGV4KTtcclxuICAgIC1tcy1mbGV4OiB2YXIoLS1ncmlkLWl0ZW0taGVhZGluZy1mbGV4KTtcclxuICAgIGZsZXg6IHZhcigtLWdyaWQtaXRlbS1oZWFkaW5nLWZsZXgpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1wZXJpb2RpY2FsLWdyaWQtaXRlbV9fZGF0ZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LW1lZGl1bS1mb250LXNpemUpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1ncmlkLWl0ZW0tZGF0ZS1tYXJnaW4pO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1wZXJpb2RpY2FsLWdyaWQtaXRlbV9fc3VidGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKTtcclxuICAgIG1hcmdpbjogdmFyKC0tZ3JpZC1pdGVtLXN1YnRpdGxlLW1hcmdpbilcclxufVxyXG5cclxuLmZyYWdtZW50LXBlcmlvZGljYWwtZ3JpZC1pdGVtX19idXR0b24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogdmFyKC0tZ3JpZC1pdGVtLWJ1dHRvbi1jb250YWluZXItbWFyZ2luKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWdyaWQtaXRlbS1idXR0b24tY29udGFpbmVyLXBhZGRpbmcpXHJcbn1cclxuXHJcbi5mcmFnbWVudC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IHZhcigtLWZvcm0tY29udGFpbmVyLWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiB2YXIoLS1mb3JtLWNvbnRhaW5lci1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB2YXIoLS1mb3JtLWNvbnRhaW5lci1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiB2YXIoLS1mb3JtLWNvbnRhaW5lci1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tZm9ybS1jb250YWluZXItZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgdGV4dC1hbGlnbjogdmFyKC0tZm9ybS1jb250YWluZXItdGV4dC1hbGlnbik7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogdmFyKC0tZm9ybS1jb250YWluZXItYWxpZ24taXRlbXMpO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHZhcigtLWZvcm0tY29udGFpbmVyLWFsaWduLWl0ZW1zKTtcclxuICAgIGFsaWduLWl0ZW1zOiB2YXIoLS1mb3JtLWNvbnRhaW5lci1hbGlnbi1pdGVtcyk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWZvcm0tY29udGFpbmVyLWhlaWdodClcclxufVxyXG5cclxuLmZyYWdtZW50LWZvcm0ge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiB2YXIoLS1mb3JtLWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiB2YXIoLS1mb3JtLWp1c3RpZnktY29udGVudCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHZhcigtLWZvcm0tanVzdGlmeS1jb250ZW50KTtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiB2YXIoLS1mb3JtLWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1mb3JtLWFsaWduLWl0ZW1zKTtcclxuICAgIGFsaWduLWl0ZW1zOiB2YXIoLS1mb3JtLWFsaWduLWl0ZW1zKTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogdmFyKC0tZm9ybS1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tZm9ybS1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBtYXJnaW46IHZhcigtLWZvcm0tbWFyZ2luKTtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5mcmFnbWVudC1mb3JtX19oZWxwZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IHZhcigtLWZvcm0taGVscGVyLXRleHQtbWFyZ2luKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtZm9ybS1pbnB1dCB7XHJcbiAgICB3aWR0aDogdmFyKC0tZm9ybS1pbnB1dC13aWR0aCk7XHJcbiAgICBtYXJnaW46IHZhcigtLWZvcm0taW5wdXQtbWFyZ2luKVxyXG59XHJcblxyXG4uZnJhZ21lbnQtZm9ybS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1mb3JtLWJ1dHRvbi1tYXJnaW4pXHJcbn1cclxuXHJcbi5oMSxoMSwuaDIsaDIsLmgzLGgzLC5oNCxoNCwuaDUsaDUsLmg2LGg2LC5mcmFnbWVudC10aXRsZSwucGFnZS1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpXHJcbn1cclxuXHJcbi5kaXNwbGF5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWRpc3BsYXktbWFyZ2luLWJvdHRvbSk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGlzcGxheS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tZGlzcGxheS1mb250LXdlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWRpc3BsYXktZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1kaXNwbGF5LWxpbmUtaGVpZ2h0KVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy1mb250LXdlaWdodCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGluZy1saW5lLWhlaWdodClcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpXHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWxpbmUtaGVpZ2h0KVxyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy1mb250LXdlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWg0LWZvbnQtc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGluZy1saW5lLWhlaWdodClcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpXHJcbn1cclxuXHJcbmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDYtZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWxpbmUtaGVpZ2h0KVxyXG59XHJcblxyXG5saSx1bCxvbCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LXNtYWxsLWZvbnQtc2l6ZSlcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0taHlwZXJsaW5rLWNvbG9yKVxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstaG92ZXItY29sb3IpXHJcbn1cclxuXHJcbi5yaWNoLXRleHQgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpXHJcbn1cclxuXHJcbi5yaWNoLXRleHQgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpXHJcbn1cclxuXHJcbi5yaWNoLXRleHQgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNi1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpXHJcbn1cclxuXHJcbi5yaWNoLXRleHQgcCwucmljaC10ZXh0IGxpLC5yaWNoLXRleHQgdWwsLnJpY2gtdGV4dCBvbCwucmljaC10ZXh0IGEge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKVxyXG59XHJcblxyXG4ucmljaC10ZXh0IGJsb2NrcXVvdGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tZmlsbC0xLWNvbG9yKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweFxyXG59XHJcblxyXG4uZ2l2ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1jb250ZW50LXBhZGRpbmcsIDI0cHggMCk7XHJcbiAgICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtbWF4LXdpZHRoKTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmhcclxufVxyXG5cclxuLnBhZ2VfX2ljb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweFxyXG59XHJcblxyXG4ucGFnZS0tZW1wdHkge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWxpbmUtaGVpZ2h0KVxyXG59XHJcblxyXG4ucGFnZS0tZW1wdHlfX3N1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1sYXJnZS1mb250LXNpemUpXHJcbn1cclxuXHJcbi5zZXJtb24tZGV0YWlsc19fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxNnB4XHJcbn1cclxuXHJcbi5zZXJtb24tZGV0YWlsc19fY292ZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19uby1jb3ZlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZXJtb24tZGV0YWlsc19fbm8tY292ZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNjRweFxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VybW9uLWRldGFpbHNfX25vLWNvdmVyLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIDMycHggMjRweCAwXHJcbn1cclxuXHJcbi5zZXJtb24tZGV0YWlsc19fbm8tY292ZXItZGF0ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHhcclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19uby1jb3Zlci1zcGVha2VyIHtcclxuICAgIG1hcmdpbjogOHB4IDBcclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19hdWRpbyB7XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEycHhcclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDhweFxyXG59XHJcblxyXG4uc2VybW9uLWRldGFpbHNfX2VtYmVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cylcclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19tZXRhIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweFxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlcm1vbi1kZXRhaWxzX19tZXRhIHtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6aG9yaXpvbnRhbDtcclxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbjogMzJweCAwIDI0cHhcclxuICAgIH1cclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19tZXRhLWRpdmlkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlcm1vbi1kZXRhaWxzX19tZXRhLWRpdmlkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbFxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VybW9uLWRldGFpbHNfX3ByZWFjaGVkLWRhdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lXHJcbn1cclxuXHJcbi5zZXJtb24tZGV0YWlsc19fdGFnIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweFxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlcm1vbi1kZXRhaWxzX190YWcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo4cHhcclxuICAgIH1cclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX190YWc6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5zZXJtb24tZGV0YWlsc19fc2hhcmUge1xyXG4gICAgbWFyZ2luOiAyNHB4IDBcclxufVxyXG5cclxuLnNlcm1vbi1kZXRhaWxzX19kZXNjcmlwdGlvbiB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHhcclxufVxyXG5cclxuLmV2ZW50LWRhdGUtc3F1YXJlIHtcclxuICAgIGRpc3BsYXk6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLWRpc3BsYXkpO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogdmFyKC0tZXZlbnQtZGF0ZS1zcXVhcmUtanVzdGlmeS1jb250ZW50KTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLWp1c3RpZnktY29udGVudCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLWp1c3RpZnktY29udGVudCk7XHJcbiAgICBib3JkZXI6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHdpZHRoOiB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1jb250YWluZXItZGlhbWV0ZXIpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1jb250YWluZXItZGlhbWV0ZXIpO1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1jb250YWluZXItZGlhbWV0ZXIpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1tYXJnaW4pO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZXZlbnQtZGF0ZS1zcXVhcmUtYmFja2dyb3VuZClcclxufVxyXG5cclxuLmV2ZW50LWRhdGUtc3F1YXJlX19lbmQge1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tZXZlbnQtZGF0ZS1zcXVhcmUtbXVsdGktZGF5LWRpdmlkZXIpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ldmVudC1kYXRlLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdWktZm9udC1mYW1pbHkpO1xyXG4gICAgY29sb3I6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLW11bHRpLWRheS10b3AtcGFkZGluZyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uZXZlbnQtZGF0ZS1zcXVhcmVfX2RheSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWV2ZW50LWRhdGUtZGF5LWZvbnQtc2l6ZSk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy1mb250LXdlaWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0tZXZlbnQtZGF0ZS1zcXVhcmUtdGV4dC1jb2xvcik7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5ldmVudC1kYXRlLXNxdWFyZV9fbW9udGgge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ldmVudC1kYXRlLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdWktZm9udC1mYW1pbHkpO1xyXG4gICAgY29sb3I6IHZhcigtLWV2ZW50LWRhdGUtc3F1YXJlLXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tZXZlbnQtZGF0ZS1tb250aC1wYWRkaW5nKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWV2ZW50LWRhdGUtbW9udGgtYmFja2dyb3VuZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ldmVudC1kYXRlLXNxdWFyZS1ib3JkZXItcmFkaXVzKSAwIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uZXZlbnQtaXRlbV9fZGF0ZS1pbmxpbmUge1xyXG4gICAgZGlzcGxheTogdmFyKC0tZXZlbnQtZGF0ZS1pbmxpbmUtZGlzcGxheSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweFxyXG59XHJcblxyXG4uZXZlbnQtaXRlbV9fZGF5LW9mLXdlZWsge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHhcclxufVxyXG5cclxuLmV2ZW50LWl0ZW1fX2RldGFpbHMge1xyXG4gICAgZGlzcGxheTogdmFyKC0tZXZlbnQtZGV0YWlscy1kaXNwbGF5KVxyXG59XHJcblxyXG4uZXZlbnQtaXRlbV9faGlnaGxpZ2h0LWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1ldmVudC1oaWdobGlnaHQtZGV0YWlscy1tYXJnaW4pO1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1ldmVudC1oaWdobGlnaHQtZGV0YWlscy1tYXgtd2lkdGgpO1xyXG4gICAgdGV4dC1hbGlnbjogdmFyKC0taGlnaGxpZ2h0LWRldGFpbHMtdGV4dC1hbGlnbilcclxufVxyXG5cclxuLmV2ZW50LWl0ZW1fX2xvY2F0aW9uIHtcclxuICAgIG1hcmdpbjogdmFyKC0tZXZlbnQtaXRlbS1sb2NhdGlvbi1tYXJnaW4pXHJcbn1cclxuXHJcbi5ldmVudC1pdGVtX19sb2NhdGlvbjphZnRlciB7XHJcbiAgICBjb250ZW50OiB2YXIoLS1ldmVudC1pdGVtLWxvY2F0aW9uLWRhdGUtZGl2aWRlcilcclxufVxyXG5cclxuLmV2ZW50cy1tb250aC12aWV3IHtcclxuICAgIGJvcmRlcjogdmFyKC0tZXZlbnRzLW1vbnRoLXZpZXctYm9yZGVyKTtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5ldmVudHMtbW9udGgtdmlldyAuZXZlbnQtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5ldmVudHMtbW9udGgtdmlldyBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZXJvLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWhlcm8tbWluLWhlaWdodClcclxufVxyXG5cclxuLmhlcm9fX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogdmFyKC0tZnJhZ21lbnQtcGFkZGluZyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMVxyXG59XHJcblxyXG4uaGVyb19fYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogdmFyKC0taGVyby1idXR0b25zLW1hcmdpbilcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuaGVyb19fYnV0dG9ucyB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvX19idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA4cHggMFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5oZXJvX19idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjoxNnB4XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvX19oZWFkZXItdGV4dCwuaGVyb19fc3ViLWhlYWRlci10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxyXG59XHJcblxyXG4uaGVyb19fc3ViLWhlYWRlci10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWxpbmUtaGVpZ2h0KTtcclxuICAgIG1heC13aWR0aDogdmFyKC0taGVyby1zdWItaGVhZGVyLW1heC13aWR0aCk7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG59XHJcblxyXG4uaGVybyAudGV4dC1zaGFkb3ctLWxpZ2h0LnRleHQtc2hhZG93LS0xIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNylcclxufVxyXG5cclxuLmhlcm8gLnRleHQtc2hhZG93LS1saWdodC50ZXh0LXNoYWRvdy0tMiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDhweCByZ2JhKDI1NSwyNTUsMjU1LDAuNjEpXHJcbn1cclxuXHJcbi5oZXJvIC50ZXh0LXNoYWRvdy0tbGlnaHQudGV4dC1zaGFkb3ctLTMge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCAjZmZmXHJcbn1cclxuXHJcbi5oZXJvIC50ZXh0LXNoYWRvdy0tZGFyay50ZXh0LXNoYWRvdy0tMSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsMCwwLDAuMDgpXHJcbn1cclxuXHJcbi5oZXJvIC50ZXh0LXNoYWRvdy0tZGFyay50ZXh0LXNoYWRvdy0tMiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsMCwwLDAuMilcclxufVxyXG5cclxuLmhlcm8gLnRleHQtc2hhZG93LS1kYXJrLnRleHQtc2hhZG93LS0zIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggIzAwMFxyXG59XHJcblxyXG4uaHRtbC1mcmFnbWVudC1pZnJhbWUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmdvb2dsZS1tYXBfX2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQ3NXB4XHJcbn1cclxuXHJcbi5nb29nbGUtbWFwIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZVxyXG59XHJcblxyXG4ubW9iaWxlLWRvd25sb2FkLWN0YSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLm1vYmlsZS1kb3dubG9hZC1jdGFfX2xpbmsge1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHhcclxufVxyXG5cclxuLm1vYmlsZS1kb3dubG9hZC1jdGFfX3BsYXRmb3JtLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHhcclxufVxyXG5cclxuLnZlcnNlLW9mLXRoZS1kYXlfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnZlcnNlLW9mLXRoZS1kYXlfX2ltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXZlcnNlLWltYWdlLWJvcmRlci1yYWRpdXMpXHJcbn1cclxuXHJcbi5jdGEge1xyXG4gICAgZGlzcGxheTogdmFyKC0tY3RhLWRpc3BsYXkpO1xyXG4gICAgLW1zLWZsZXgtd3JhcDogdmFyKC0tY3RhLWZsZXgtd3JhcCk7XHJcbiAgICBmbGV4LXdyYXA6IHZhcigtLWN0YS1mbGV4LXdyYXApO1xyXG4gICAgcGFkZGluZzogdmFyKC0tZnJhZ21lbnQtcGFkZGluZyk7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogdmFyKC0tY3RhLWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1jdGEtYWxpZ24taXRlbXMpO1xyXG4gICAgYWxpZ24taXRlbXM6IHZhcigtLWN0YS1hbGlnbi1pdGVtcylcclxufVxyXG5cclxuLmN0YS0td2l0aC1pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1iYWNrZ3JvdW5kLWltYWdlLXBhZGRpbmcpO1xyXG4gICAgbWF4LWhlaWdodDogdmFyKC0tYmFja2dyb3VuZC1pbWFnZS1tYXgtaGVpZ2h0KVxyXG59XHJcblxyXG4uY3RhX19iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiB2YXIoLS1jdGEtYmFja2dyb3VuZC1pbWFnZS1wb3NpdGlvbik7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogdmFyKC0tY3RhLWJhY2tncm91bmQtd2lkdGgpO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tY3RhLW1pbi1oZWlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdmFyKC0tZnJhZ21lbnQtaW1hZ2UtYmFja2dyb3VuZC1wb3NpdGlvbik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWZyYWdtZW50LWltYWdlLWJhY2tncm91bmQtc2l6ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcmFnbWVudC1iYWNrZ3JvdW5kLWNvbG9yKVxyXG59XHJcblxyXG4uY3RhX19iYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cylcclxufVxyXG5cclxuLmN0YV9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1jdGEtY29udGVudC1kaXNwbGF5KTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogdmFyKC0tY3RhLWNvbnRlbnQtZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHZhcigtLWN0YS1jb250ZW50LWZsZXgtZGlyZWN0aW9uKTtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IHZhcigtLWN0YS1jb250ZW50LWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiB2YXIoLS1jdGEtY29udGVudC1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB2YXIoLS1jdGEtY29udGVudC1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHZhcigtLWN0YS1jb250ZW50LWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1jdGEtY29udGVudC1hbGlnbi1pdGVtcyk7XHJcbiAgICBhbGlnbi1pdGVtczogdmFyKC0tY3RhLWNvbnRlbnQtYWxpZ24taXRlbXMpO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogdmFyKC0tY3RhLWNvbnRlbnQtZmxleCk7XHJcbiAgICAtbXMtZmxleDogdmFyKC0tY3RhLWNvbnRlbnQtZmxleCk7XHJcbiAgICBmbGV4OiB2YXIoLS1jdGEtY29udGVudC1mbGV4KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogdmFyKC0tY3RhLWNvbnRlbnQtbWFyZ2luKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWN0YS1jb250ZW50LXBhZGRpbmcpO1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1jdGEtY29udGVudC1tYXgtd2lkdGgpO1xyXG4gICAgdGV4dC1hbGlnbjogdmFyKC0tY3RhLWNvbnRlbnQtdGV4dC1hbGlnbik7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWN0YS1jb250ZW50LWhlaWdodClcclxufVxyXG5cclxuLmN0YV9fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jdGEtdGl0bGUtbWFyZ2luKVxyXG59XHJcblxyXG4uY3RhX19ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2R5LWZvbnQtd2VpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1ib2R5LXRleHQtbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5LXRleHQtbGFyZ2UtZm9udC1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbjogdmFyKC0tY3RhLWJvZHktbWFyZ2luKTtcclxuICAgIHRleHQtYWxpZ246IHZhcigtLWN0YS1ib2R5LXRleHQtYWxpZ24pXHJcbn1cclxuXHJcbi5jdGEgLnRleHQtc2hhZG93LS1kYXJrLnRleHQtc2hhZG93LS0xIC5jdGFfX3RpdGxlLC5jdGEgLnRleHQtc2hhZG93LS1kYXJrLnRleHQtc2hhZG93LS0xIC5jdGFfX2JvZHkge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA2cHggcmdiYSgwLDAsMCwwLjA4KVxyXG59XHJcblxyXG4uY3RhIC50ZXh0LXNoYWRvdy0tZGFyay50ZXh0LXNoYWRvdy0tMiAuY3RhX190aXRsZSwuY3RhIC50ZXh0LXNoYWRvdy0tZGFyay50ZXh0LXNoYWRvdy0tMiAuY3RhX19ib2R5IHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKVxyXG59XHJcblxyXG4uY3RhIC50ZXh0LXNoYWRvdy0tZGFyay50ZXh0LXNoYWRvdy0tMyAuY3RhX190aXRsZSwuY3RhIC50ZXh0LXNoYWRvdy0tZGFyay50ZXh0LXNoYWRvdy0tMyAuY3RhX19ib2R5IHtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggIzAwMFxyXG59XHJcblxyXG4uY3RhIC50ZXh0LXNoYWRvdy0tbGlnaHQudGV4dC1zaGFkb3ctLTEgLmN0YV9fdGl0bGUsLmN0YSAudGV4dC1zaGFkb3ctLWxpZ2h0LnRleHQtc2hhZG93LS0xIC5jdGFfX2JvZHkge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjE3KVxyXG59XHJcblxyXG4uY3RhIC50ZXh0LXNoYWRvdy0tbGlnaHQudGV4dC1zaGFkb3ctLTIgLmN0YV9fdGl0bGUsLmN0YSAudGV4dC1zaGFkb3ctLWxpZ2h0LnRleHQtc2hhZG93LS0yIC5jdGFfX2JvZHkge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA4cHggcmdiYSgyNTUsMjU1LDI1NSwwLjYxKVxyXG59XHJcblxyXG4uY3RhIC50ZXh0LXNoYWRvdy0tbGlnaHQudGV4dC1zaGFkb3ctLTMgLmN0YV9fdGl0bGUsLmN0YSAudGV4dC1zaGFkb3ctLWxpZ2h0LnRleHQtc2hhZG93LS0zIC5jdGFfX2JvZHkge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCAjZmZmXHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb250YWN0LWluZm8tY29udGFpbmVyLWZsZXgtZGlyZWN0aW9uKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb250YWN0LWluZm8tY29udGFpbmVyLWZsZXgtZGlyZWN0aW9uKTtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IHZhcigtLWNvbnRhY3QtaW5mby1jb250YWluZXItanVzdGlmeS1jb250ZW50KTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IHZhcigtLWNvbnRhY3QtaW5mby1jb250YWluZXItanVzdGlmeS1jb250ZW50KTtcclxuICAgIGp1c3RpZnktY29udGVudDogdmFyKC0tY29udGFjdC1pbmZvLWNvbnRhaW5lci1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHZhcigtLWNvbnRhY3QtaW5mby1jb250YWluZXItYWxpZ24taXRlbXMpO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHZhcigtLWNvbnRhY3QtaW5mby1jb250YWluZXItYWxpZ24taXRlbXMpO1xyXG4gICAgYWxpZ24taXRlbXM6IHZhcigtLWNvbnRhY3QtaW5mby1jb250YWluZXItYWxpZ24taXRlbXMpXHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8taXRlbSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogdmFyKC0tY29udGFjdC1pbmZvLWl0ZW0tZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHZhcigtLWNvbnRhY3QtaW5mby1pdGVtLWZsZXgtZGlyZWN0aW9uKTtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IHZhcigtLWNvbnRhY3QtaW5mby1pdGVtLWp1c3RpZnktY29udGVudCk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiB2YXIoLS1jb250YWN0LWluZm8taXRlbS1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB2YXIoLS1jb250YWN0LWluZm8taXRlbS1qdXN0aWZ5LWNvbnRlbnQpO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHZhcigtLWNvbnRhY3QtaW5mby1pdGVtLWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1jb250YWN0LWluZm8taXRlbS1hbGlnbi1pdGVtcyk7XHJcbiAgICBhbGlnbi1pdGVtczogdmFyKC0tY29udGFjdC1pbmZvLWl0ZW0tYWxpZ24taXRlbXMpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1jb250YWN0LWluZm8taXRlbS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1jb250YWN0LWluZm8taXRlbS1ib3JkZXItd2lkdGgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFjdC1pbmZvLWl0ZW0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBtYXJnaW46IHZhcigtLWNvbnRhY3QtaW5mby1pdGVtLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWN0LWluZm8taXRlbS1wYWRkaW5nKTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiB2YXIoLS1jb250YWN0LWluZm8taXRlbS13aWR0aClcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mby1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgLS1jb250YWN0LWluZm8taXRlbS1tYXJnaW46MH1cclxuXHJcbi5jb250YWN0LWluZm8taXRlbV9fZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IHZhcigtLWNvbnRhY3QtaW5mby1pdGVtLWRldGFpbHMtbWFyZ2luKTtcclxuICAgIHRleHQtYWxpZ246IHZhcigtLWNvbnRhY3QtaW5mby1pdGVtLWRldGFpbHMtdGV4dC1hbGlnbik7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAwXHJcbn1cclxuXHJcbi5zZXJtb24tZ3JpZC1pdGVtX19tZWRpYS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1zZXJtb24tZ3JpZC1pdGVtLW1lZGlhLWNvbnRhaW5lci1tYXJnaW4pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VybW9uLWdyaWQtaXRlbS1tZWRpYS1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5zZXJtb24tZ3JpZC1pdGVtX19pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tc2VybW9uLWljb24tY29sb3IpXHJcbn1cclxuXHJcbi5zZXJtb24tZ3JpZC1pdGVtX19kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogdmFyKC0tc2VybW9uLWdyaWQtaXRlbS1kZXRhaWxzLW1hcmdpbilcclxufVxyXG5cclxuLnNlcm1vbi1ncmlkLWl0ZW1fX2RhdGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG4uc2VybW9uLWdyaWQtaXRlbV9fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1zZXJtb24tZ3JpZC1pdGVtLXRpdGxlLW1hcmdpbilcclxufVxyXG5cclxuLnNlcm1vbi1ncmlkLWl0ZW1fX3RpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstaG92ZXItY29sb3IpXHJcbn1cclxuXHJcbi5zZXJtb24tZ3JpZC1pdGVtX19wYXNzYWdlcyB7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuLnNlcm1vbi1ncmlkLWl0ZW1fX3Bhc3NhZ2VzIGEge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXHJcbn1cclxuXHJcbi5zZXJtb24taXRlbV9fcGFzc2FnZS1kb3Qge1xyXG4gICAgbWFyZ2luOiAwIDRweFxyXG59XHJcblxyXG4uc2VybW9uLWhpZ2hsaWdodF9fcGFzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LWxhcmdlLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcclxufVxyXG5cclxuLnNlcm1vbi1oaWdobGlnaHRfX3Bhc3NhZ2UgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcclxufVxyXG5cclxuLnNlcnZpY2UtdGltZXMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogY2FsYygtMSAqIHZhcigtLXNlcnZpY2UtdGltZXMtaXRlbS1nYXApIC8gMilcclxufVxyXG5cclxuLmNsb2NrLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgZGlzcGxheTogdmFyKC0tc2VydmljZS10aW1lcy1pY29uLWRpc3BsYXkpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHhcclxufVxyXG5cclxuLmNsb2NrLWljb24gc3ZnIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweFxyXG59XHJcblxyXG4uc2VydmljZS10aW1lcy1pdGVtLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tZ2FwKSAvIDIpO1xyXG4gICAgd2lkdGg6IHZhcigtLXNlcnZpY2UtdGltZXMtaXRlbS13aWR0aCk7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZFxyXG59XHJcblxyXG4uc2VydmljZS10aW1lcy1pdGVtIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHZhcigtLXNlcnZpY2UtdGltZXMtaXRlbS1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogdmFyKC0tc2VydmljZS10aW1lcy1pdGVtLWFsaWduLWl0ZW1zKTtcclxuICAgIC1tcy1mbGV4LWFsaWduOiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYWxpZ24taXRlbXMpO1xyXG4gICAgYWxpZ24taXRlbXM6IHZhcigtLXNlcnZpY2UtdGltZXMtaXRlbS1hbGlnbi1pdGVtcyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tcGFkZGluZyk7XHJcbiAgICBib3JkZXI6IHZhcigtLXNlcnZpY2UtdGltZXMtaXRlbS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VydmljZS10aW1lcy1pdGVtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWl0ZW0tdGV4dC1hbGlnbik7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLnNlcnZpY2UtdGltZXMtaXRlbSAuZnJhZ21lbnQtaXRlbS1pY29uLWNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LXNtYWxsLWZvbnQtc2l6ZSlcclxufVxyXG5cclxuLnNlcnZpY2UtdGltZXMtaXRlbV9faW5saW5lLWRheSB7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1zZXJ2aWNlLXRpbWVzLWlubGluZS1kYXktZGlzcGxheSlcclxufVxyXG5cclxuLnNlcnZpY2UtdGltZXMtaXRlbV9fc2VydmljZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1zZXJ2aWNlLXRpbWUtY29udGFpbmVyLW1hcmdpbilcclxufVxyXG5cclxuLnNlcnZpY2UtdGltZXMtaXRlbV9fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZFxyXG59XHJcblxyXG4uc2VydmljZS10aW1lcy1pdGVtX190aW1lLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IHZhcigtLXNlcnZpY2UtdGltZXMtaXRlbS10aW1lLXRvcC1tYXJnaW4pIDAgdmFyKC0tc2VydmljZS10aW1lcy1pdGVtLXRpbWUtYm90dG9tLW1hcmdpbik7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LWxhcmdlLWZvbnQtc2l6ZSk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxyXG59XHJcblxyXG4uc2VydmljZS10aW1lcy1pdGVtX190aW1lLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogdmFyKC0tc2VydmljZS10aW1lcy1pdGVtLXRpbWUtdG9wLW1hcmdpbikgMCAwIDBcclxufVxyXG5cclxuLmJsb2ctcHJldmlldy10ZXh0IHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmRcclxufVxyXG5cclxuLmJsb2ctcHJldmlldy10ZXh0IGgxLC5ibG9nLXByZXZpZXctdGV4dCBoMiwuYmxvZy1wcmV2aWV3LXRleHQgaDMsLmJsb2ctcHJldmlldy10ZXh0IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0XHJcbn1cclxuXHJcbi5ibG9nLXByZXZpZXctdGV4dCBiciwuYmxvZy1wcmV2aWV3LXRleHQgdWwsLmJsb2ctcHJldmlldy10ZXh0IG9sLC5ibG9nLXByZXZpZXctdGV4dCBpbWcge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uYmxvZy1pdGVtLWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1ibG9nLWl0ZW0tZGV0YWlscy1tYXJnaW4pXHJcbn1cclxuXHJcbi5ibG9nLWl0ZW0tZGV0YWlsc19fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXHJcbn1cclxuXHJcbi5ibG9nLWl0ZW0tZGV0YWlsc19fdGl0bGU6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWh5cGVybGluay1ob3Zlci1jb2xvcilcclxufVxyXG5cclxuLmJsb2ctaXRlbS1kZXRhaWxzX19wcmV2aWV3IHtcclxuICAgIG1hcmdpbjogdmFyKC0tYmxvZy1ncmlkLWl0ZW0tcHJldmlldy1tYXJnaW4pXHJcbn1cclxuXHJcbi5ibG9nLWl0ZW0tZGV0YWlsc19fcG9zdC1pbmZvIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2R5LWZvbnQtd2VpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1ib2R5LXRleHQtbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5LXRleHQtbWVkaXVtLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG5cclxuLmJsb2ctaXRlbS1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsLTEtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmxvZy1pdGVtLWltYWdlLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1tdWx0aW1lZGlhLWFzcGVjdC1yYXRpby1wZXJjZW50YWdlKTtcclxuICAgIGhlaWdodDogdmFyKC0tYmxvZy1pdGVtLWltYWdlLWhlaWdodCk7XHJcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1ibG9nLWl0ZW0taW1hZ2UtbWF4LWhlaWdodClcclxufVxyXG5cclxuLmJsb2ctZ3JpZC1pdGVtIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taXRlbS1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5ibG9nLWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiB2YXIoLS1ibG9nLWxpc3QtaXRlbS1kaXNwbGF5KTtcclxuICAgIGJvcmRlcjogdmFyKC0tbGlzdC1pdGVtLWJvcmRlcik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1saXN0LWl0ZW0tcGFkZGluZyk7XHJcbiAgICBtYXJnaW46IHZhcigtLWxpc3QtaXRlbS1tYXJnaW4pO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1saXN0LWl0ZW0tYm9yZGVyLXdpZHRoKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWxpc3QtaXRlbS1ib3JkZXItcmFkaXVzKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0taXRlbS1ib3gtc2hhZG93KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWl0ZW0tYm94LXNoYWRvdyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saXN0LWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5ibG9nLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMFxyXG59XHJcblxyXG4uYmxvZy1saXN0LWl0ZW1fX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogdmFyKC0tYmxvZy1saXN0LWltYWdlLXdpZHRoKTtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XHJcbiAgICBmbGV4OiAwIDAgYXV0b1xyXG59XHJcblxyXG4uYmxvZy1oaWdobGlnaHQge1xyXG4gICAgZGlzcGxheTogdmFyKC0tYmxvZy1oaWdobGlnaHQtZGlzcGxheSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLWJsb2ctaGlnaGxpZ2h0LWdyaWQtdGVtcGxhdGUtY29sdW1ucyk7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IHZhcigtLWJsb2ctaGlnaGxpZ2h0LWdyaWQtY29sdW1uLWdhcCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5ibG9nLWhpZ2hsaWdodF9faWNvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG59XHJcblxyXG4uYmxvZy1oaWdobGlnaHRfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogdmFyKC0taGlnaGxpZ2h0LWltYWdlLWNvbnRhaW5lci13aWR0aCk7XHJcbiAgICBtYXJnaW46IHZhcigtLWhpZ2hsaWdodC1pbWFnZS1jb250YWluZXItbWFyZ2luKTtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XHJcbiAgICBmbGV4OiAwIDAgYXV0b1xyXG59XHJcblxyXG4uYmxvZy1oaWdobGlnaHRfX3Bvc3QtaW5mbyB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LW1lZGl1bS1mb250LXNpemUpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbi5ibG9nLWhpZ2hsaWdodF9fcHJldmlldyB7XHJcbiAgICBtYXJnaW46IHZhcigtLWJsb2ctaGlnaGxpZ2h0LXByZXZpZXctbWFyZ2luKVxyXG59XHJcblxyXG4uYmxvZy1oaWdobGlnaHRfX2RldGFpbC1wYWdlLWxpbmsge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uYmxvZy1oaWdobGlnaHQtLW5vLWltYWdlIC5ibG9nLWhpZ2hsaWdodF9faW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiB2YXIoLS1ibG9nLWhpZ2hsaWdodC1iYWNrZ3JvdW5kLXdpZHRoKTtcclxuICAgIGhlaWdodDogdmFyKC0tYmxvZy1oaWdobGlnaHQtYmFja2dyb3VuZC1oZWlnaHQpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxvZy1pdGVtLWltYWdlLWNvbnRhaW5lci1iYWNrZ3JvdW5kKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJsb2ctaXRlbS1pbWFnZS1ib3JkZXItcmFkaXVzKVxyXG59XHJcblxyXG4ubGl2ZS1zdHJlYW1fX2VtYmVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5kaWdpdGFsLXNpZ25hZ2VfX2VtYmVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5kZXRhaWwtcGFnZV9fY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE2cHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGV0YWlsLXBhZ2VfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzowIDY0cHhcclxuICAgIH1cclxufVxyXG5cclxuLmV2ZW50LWRldGFpbHMgLmV2ZW50LWRhdGUtc3F1YXJlX19lbmQge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXVpLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS11aS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tdWktbGluZS1oZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS11aS1tZWRpdW0tc2l6ZSlcclxufVxyXG5cclxuLmV2ZW50LWRldGFpbHNfX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkaW5nLWxpbmUtaGVpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHhcclxufVxyXG5cclxuLmV2ZW50LWRldGFpbHNfX2RldGFpbHMge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWJvZHktZm9udC13ZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWJvZHktdGV4dC1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1tZWRpdW0tZm9udC1zaXplKVxyXG59XHJcblxyXG4uZXZlbnQtZGV0YWlsc19fZGV0YWlscy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW1pbHkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctZm9udC13ZWlnaHQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1oNS1mb250LXNpemUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlYWRpbmctbGluZS1oZWlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweFxyXG59XHJcblxyXG4uZXZlbnQtZGV0YWlsc19faW5mbyB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0tYm9keS1mb250LXdlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tYm9keS10ZXh0LWxpbmUtaGVpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LWxhcmdlLWZvbnQtc2l6ZSlcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTItY29sb3IpO1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXHJcbn1cclxuXHJcbi5mb290ZXIgLmJsb2NrLW5ldy1zZWN0aW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcilcclxufVxyXG5cclxuLmZvb3Rlcl9fc29jaWFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uZm9vdGVyX19zb2NpYWwtbGluayB7XHJcbiAgICBtYXJnaW46IDAgOHB4XHJcbn1cclxuXHJcbi5mb290ZXJfX3NvY2lhbC1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uZm9vdGVyX19zb2NpYWwtbGluayAuc29jaWFsLWljb24tLWZhaXRobGlmZSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdFxyXG59XHJcblxyXG4uZm9vdGVyX19zZWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgICBncmlkLXJvdy1nYXA6IDMycHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZm9vdGVyX19zZWN0aW9ucyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCA0NSUpO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMzJweDtcclxuICAgICAgICBtYXJnaW46IDY0cHggMFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5mb290ZXJfX3NlY3Rpb25zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDQsIDIyJSlcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3Rlcl9fbWVudSB7XHJcbiAgICBtYXJnaW46IDAgMCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5mb290ZXJfX21lbnUtbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEycHhcclxufVxyXG5cclxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4ubWVtYmVycy1wYWdlIHtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1lbWJlcnMtcGFnZSB7XHJcbiAgICAgICAgbWFyZ2luOjMycHggMFxyXG4gICAgfVxyXG59XHJcblxyXG4uaG9tZXBhZ2Uge1xyXG4gICAgcGFkZGluZzogdmFyKC0taG9tZXBhZ2UtcGFkZGluZylcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLWhlYWRlci1wYWRkaW5nLWJvdHRvbSwgOHB4KTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcclxuICAgIHRleHQtYWxpZ246IHZhcigtLXBhZ2UtaGVhZGVyLXRleHQtYWxpZ25tZW50LCBjZW50ZXIpXHJcbn1cclxuXHJcbi5oZWFkZXItZW5nYWdlbWVudCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1tZW51LWl0ZW0taGVpZ2h0KVxyXG59XHJcblxyXG4uaGVhZGVyLWVuZ2FnZW1lbnRfX3RleHQge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5LXRleHQtc21hbGwtZm9udC1zaXplKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLWZvbnQtd2VpZ2h0KTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWNvbG9yKVxyXG59XHJcblxyXG4uaGVhZGVyLWVuZ2FnZW1lbnRfX3RleHQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1ob3Zlci1jb2xvcilcclxufVxyXG5cclxuLmhlYWRlci1lbmdhZ2VtZW50X19wcm9maWxlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1oeXBlcmxpbmstY29sb3IpXHJcbn1cclxuXHJcbi5oZWFkZXItZW5nYWdlbWVudF9fbGluay1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHhcclxufVxyXG5cclxuLmhlYWRlci1lbmdhZ2VtZW50X19saW5rLWljb24tLXVzZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVhZGVyLWljb24tYm9yZGVyLXJhZGl1cylcclxufVxyXG5cclxuLmhlYWRlci1lbmdhZ2VtZW50X19saW5rLWljb24tLXVzZXItZGVmYXVsdC1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItZGVmYXVsdC1pY29uLWNvbG9yKVxyXG59XHJcblxyXG4uaGVhZGVyLWVuZ2FnZW1lbnRfX2ZvbGxvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4XHJcbn1cclxuXHJcbi5oZWFkZXItZW5nYWdlbWVudF9fbGluayB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDEycHhcclxufVxyXG5cclxuLmhlYWRlci1lbmdhZ2VtZW50X19saW5rOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMFxyXG59XHJcblxyXG4uaGVhZGVyLWVuZ2FnZW1lbnRfX2xpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhlYWRlci1lbmdhZ2VtZW50X19saW5rIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjBcclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGUtZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5wcm9maWxlLWRyb3Bkb3duX19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1oZWFkZXItZHJvcGRvd24tYm94LXNoYWRvdyk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1oZWFkZXItZHJvcGRvd24tYm94LXNoYWRvdyk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0taGVhZGVyLWRyb3Bkb3duLXRleHQtdHJhbnNmb3JtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlYWRlci1kcm9wZG93bi1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJvcmRlcjogdmFyKC0taGVhZGVyLWRyb3Bkb3duLWJvcmRlcilcclxufVxyXG5cclxuLnByb2ZpbGUtZHJvcGRvd25fX2xpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG4ucHJvZmlsZS1kcm9wZG93bl9fbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTJweFxyXG59XHJcblxyXG4ucHJvZmlsZS1kcm9wZG93bl9faXRlbTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLmdyb3VwLWJyYW5kaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG59XHJcblxyXG4uZ3JvdXAtYnJhbmRpbmdfX25hbWUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZ3JvdXAtYnJhbmRpbmctZm9udC1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1ncm91cC1icmFuZGluZy1saW5lLWhlaWdodCk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbWlseSk7XHJcbiAgICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy1mb250LXdlaWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWNvbG9yKVxyXG59XHJcblxyXG4uZ3JvdXAtYnJhbmRpbmdfX25hbWUsLmdyb3VwLWJyYW5kaW5nX19uYW1lOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uZ3JvdXAtYnJhbmRpbmdfX25hbWU6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHhcclxufVxyXG5cclxuLmdyb3VwLWJyYW5kaW5nX19pY29uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlYWRlci1pY29uLWJvcmRlci1yYWRpdXMpXHJcbn1cclxuXHJcbi5ncm91cC1icmFuZGluZ19faWNvbi0tc21hbGwge1xyXG4gICAgaGVpZ2h0OiAzMnB4XHJcbn1cclxuXHJcbi5ncm91cC1icmFuZGluZ19faWNvbi0tbWVkaXVtIHtcclxuICAgIGhlaWdodDogNDRweFxyXG59XHJcblxyXG4uZ3JvdXAtYnJhbmRpbmdfX2ljb24tLWxhcmdlIHtcclxuICAgIGhlaWdodDogOTZweFxyXG59XHJcblxyXG4uZ3JvdXAtYnJhbmRpbmcgLmVkaXQtaXRlbSB7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0XHJcbn1cclxuXHJcbi5zbGlkZW91dC1tZW51LWFjY291bnQge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDAgMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2R5LWZvbnQtd2VpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1ib2R5LXRleHQtbGluZS1oZWlnaHQpXHJcbn1cclxuXHJcbi5zbGlkZW91dC1tZW51LWFjY291bnQtLXVuYXV0aGVudGljYXRlZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweFxyXG59XHJcblxyXG4uc2xpZGVvdXQtbWVudS1hY2NvdW50X191bmF1dGhlbnRpY2F0ZWQtbGluayB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWNvbG9yKVxyXG59XHJcblxyXG4uc2xpZGVvdXQtbWVudS1hY2NvdW50X191bmF1dGhlbnRpY2F0ZWQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWhvdmVyLWNvbG9yKVxyXG59XHJcblxyXG4uc2xpZGVvdXQtbWVudS1hY2NvdW50X191bmF1dGhlbnRpY2F0ZWQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4XHJcbn1cclxuXHJcbi5zbGlkZW91dC1tZW51LWFjY291bnRfX3Byb2ZpbGUtaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHhcclxufVxyXG5cclxuLnNsaWRlb3V0LW1lbnUtYWNjb3VudF9fc2lnbi1vdXQtbGluayB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHktdGV4dC1zbWFsbC1mb250LXNpemUpO1xyXG4gICAgY29sb3I6IHZhcigtLW1lbnUtaXRlbS1jb2xvcilcclxufVxyXG5cclxuLnNsaWRlb3V0LW1lbnUtYWNjb3VudF9fc2lnbi1vdXQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS1pdGVtLWhvdmVyLWNvbG9yKVxyXG59XHJcblxyXG4uc2xpZGVvdXQtbWVudS1hY2NvdW50X19uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LWxhcmdlLWZvbnQtc2l6ZSlcclxufVxyXG5cclxuXHRcdFxyXG5cdFx0LnRwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG5cdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC52aWV3TGlua3Mge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1YzgwICFpbXBvcnRhbnQ7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdG1hcmdpbjogNHB4IDJweDtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAucGwtd3JhcHBlcntcclxuICAgICAgICAgICAgLyogbWFyZ2luLXRvcDogMHB4OyAqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiA5MHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UyRUFGMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wZXItdGFibGV7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmUtYm9yZGVyLW5vbmV7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-links',
          templateUrl: './links.component.html',
          styleUrls: ['./links.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ovbs-registration/ovbs-registration.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/ovbs-registration/ovbs-registration.component.ts ***!
    \******************************************************************/

  /*! exports provided: OVBSRegistrationComponent */

  /***/
  function srcAppOvbsRegistrationOvbsRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVBSRegistrationComponent", function () {
      return OVBSRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OVBSRegistrationComponent =
    /*#__PURE__*/
    function () {
      function OVBSRegistrationComponent(formBuilder, router) {
        _classCallCheck(this, OVBSRegistrationComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
      }

      _createClass(OVBSRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ovbsRegisterForm = this.formBuilder.group({
            churchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ovbsLoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parishName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emargencyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emargencyPh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            middleName: [''],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regType: [''],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            day_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TshirtSize: [''],
            tshirtQuantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            alergies: [''],
            parentTshirtSize: [''],
            parentTshirtQuantity: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.ovbsRegisterForm.invalid) {
            return;
          } else {
            alert("Student Registered successfully...");
            console.log(this.ovbsRegisterForm.value);
          }

          this.ovbsRegisterForm.reset();
        }
      }]);

      return OVBSRegistrationComponent;
    }();

    OVBSRegistrationComponent.ɵfac = function OVBSRegistrationComponent_Factory(t) {
      return new (t || OVBSRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OVBSRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OVBSRegistrationComponent,
      selectors: [["app-ovbs-registration"]],
      decls: 216,
      vars: 2,
      consts: [[1, "container", "col-md-6", "col-sm-6", "border", "p-3", "mt-2rem", "bg-light", "mb-1rem", 2, "overflow", "auto"], [1, "text-center", "header-blue"], [3, "formGroup"], [1, "form-group"], ["for", "churchName", 1, ""], ["type", "text", "formControlName", "churchName", "placeholder", "Enter Church Name", 1, "form-control", "form-control-sm"], [1, "row"], [1, "form-group", "col"], ["for", "ovbsLoc", 1, ""], ["type", "text", "formControlName", "ovbsLoc", "placeholder", "Enter OVBS Location", 1, "form-control", "form-control-sm"], ["for", "parishName", 1, ""], ["type", "text", "formControlName", "parishName", "placeholder", "Enter Name of Parish", 1, "form-control", "form-control-sm"], ["for", "parentName", 1, ""], ["type", "text", "formControlName", "parentName", "placeholder", "Enter Parent/ Guardian Name", 1, "form-control", "form-control-sm"], ["for", "phNo", 1, ""], ["type", "number", "formControlName", "phNo", "pattern", "\\d{10}", "placeholder", "Enter Phone Number", 1, "form-control", "form-control-sm"], ["for", "email", 1, ""], ["type", "email", "formControlName", "email", "placeholder", "Enter Email Address", 1, "form-control", "form-control-sm"], ["for", "emargencyName", 1, ""], ["type", "text", "formControlName", "emargencyName", "placeholder", "Enter Emergency Contact Name", 1, "form-control", "form-control-sm"], ["for", "emargencyPh", 1, ""], ["type", "number", "formControlName", "emargencyPh", "pattern", "\\d{10}", "placeholder", "Enter Emergency Contact Phone", 1, "form-control", "form-control-sm"], ["id", "childInfo", 1, "container", "borderStyle", "mt-3", "mb-3"], [1, "border-with-text", "bg-light"], [1, ""], [1, "col"], ["type", "text", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control", "form-control-sm", "col"], ["type", "text", "formControlName", "middleName", "placeholder", "Middle Name", 1, "form-control", "form-control-sm", "col"], ["type", "text", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control", "form-control-sm", "col"], [1, "form-row"], ["for", "regType"], ["formControlName", "regType", "id", "regType", 1, "form-control", "form-control-sm"], ["for", "grade"], ["formControlName", "grade", "id", "grade", 1, "form-control", "form-control-sm"], ["for", "age", 1, ""], ["type", "number", "formControlName", "age", "placeholder", "Enter Age", 1, "form-control", "form-control-sm"], ["for", "day_date"], ["formControlName", "day_date", "id", "day_date", 1, "form-control", "form-control-sm"], ["for", "TshirtSize"], ["formControlName", "TshirtSize", "id", "TshirtSize", "placeholder", "Select T-Shirt Size for parent", 1, "form-control", "form-control-sm"], ["for", "tshirtQuantity", 1, ""], ["type", "number", "formControlName", "tshirtQuantity", "pattern", "\\d{1}", "placeholder", "Enter T-shirt Quantity", 1, "form-control", "form-control-sm"], ["for", "alergies", 1, ""], ["type", "text", "formControlName", "alergies", "placeholder", "About Alergies if any", 1, "form-control", "form-control-sm"], ["id", "child2Info", 1, "container", "borderStyle", "mb-3"], ["for", "parentTshirtSize"], ["formControlName", "parentTshirtSize", "id", "parentTshirtSize", "placeholder", "Select T-Shirt Size for parent", 1, "form-control", "form-control-sm"], ["for", "parentTshirtQuantity", 1, ""], ["type", "number", "formControlName", "parentTshirtQuantity", "pattern", "\\d{1}", "placeholder", "Enter T-shirt Quantity", 1, "form-control", "form-control-sm"], [1, "btn", "btn-blue", "btn-success", "ml-4", "float-right", 3, "disabled", "click"]],
      template: function OVBSRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OVBS Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Church Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "OVBS Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name of Parish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Parent/ Guardian Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Emergency Contact Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Emergency Contact Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CHILD 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Registration Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Volunteer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Teacher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "1st");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "3rd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "4th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Days Attending/ Dates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Monday-10 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Tuesday-11 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Wednesday-12 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Thursday-13 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Friday-14 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "T-Shirt Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "XL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "T-shirt Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Alergies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "CHILD 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Registration Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Volunteer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Teacher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "1st");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "3rd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "4th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Days Attending/ Dates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Monday-10 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Tuesday-11 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Wednesday-12 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Thursday-13 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Friday-14 Feb 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "T-Shirt Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "XL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "T-shirt Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Alergies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "T-Shirt Size for parent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "XL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "T-shirt Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OVBSRegistrationComponent_Template_button_click_214_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ovbsRegisterForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ovbsRegisterForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".border-with-text[_ngcontent-%COMP%] {\n  width: 4rem;\n  margin-top: -0.6rem;\n  color: #395c80;\n}\n\n.borderStyle[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6;\n}\n\n#child2Info[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-top: 2rem;\n  margin-left: auto;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#remove[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  background-color: red;\n  color: #fff;\n  height: 2.4rem;\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Zicy1yZWdpc3RyYXRpb24vRjpcXEFfRGlvY2VzZVxcQ0RfQTlcXENodXJjaC9zcmNcXGFwcFxcb3Zicy1yZWdpc3RyYXRpb25cXG92YnMtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdmJzLXJlZ2lzdHJhdGlvbi9vdmJzLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7QUNBSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9vdmJzLXJlZ2lzdHJhdGlvbi9vdmJzLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItd2l0aC10ZXh0e1xyXG4gICAgd2lkdGg6NHJlbTtcclxuICAgIG1hcmdpbi10b3A6LTAuNnJlbTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OjJyZW07XHJcbiAgICBjb2xvcjojMzk1YzgwO1xyXG4gIH1cclxuICAuYm9yZGVyU3R5bGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59IFxyXG4jY2hpbGQySW5mb3tcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbi5zaG93e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbiNyZW1vdmV7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OjIuNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufSIsIi5ib3JkZXItd2l0aC10ZXh0IHtcbiAgd2lkdGg6IDRyZW07XG4gIG1hcmdpbi10b3A6IC0wLjZyZW07XG4gIGNvbG9yOiAjMzk1YzgwO1xufVxuXG4uYm9yZGVyU3R5bGUge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbiNjaGlsZDJJbmZvIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNyZW1vdmUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMi40cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OVBSRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ovbs-registration',
          templateUrl: './ovbs-registration.component.html',
          styleUrls: ['./ovbs-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portal/portal.component.ts":
  /*!********************************************!*\
    !*** ./src/app/portal/portal.component.ts ***!
    \********************************************/

  /*! exports provided: PortalComponent */

  /***/
  function srcAppPortalPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalComponent", function () {
      return PortalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/portal"];
    };

    var _c1 = function _c1() {
      return ["/resources"];
    };

    var _c2 = function _c2() {
      return ["/events"];
    };

    var _c3 = function _c3() {
      return ["/links"];
    };

    var _c4 = function _c4() {
      return ["/training"];
    };

    var PortalComponent =
    /*#__PURE__*/
    function () {
      function PortalComponent(router) {
        _classCallCheck(this, PortalComponent);

        this.router = router;
        this.title = 'Upload a File';
      } // public uploader: FileUploader = new FileUploader({url: URL});


      _createClass(PortalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".page-header-wrapper").hide(); // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
          //     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          //          console.log('FileUpload:uploaded:', item, status, response);
          //  alert('File uploaded successfully');
          //      };
          //  }
        }
      }, {
        key: "view",
        value: function view(e) {
          document.getElementById('masterId').setAttribute('style', 'display:block');
        }
      }, {
        key: "navigate",
        value: function navigate(flag) {
          if (flag === 1) this.router.navigate(['/resources']);else if (flag === 2) this.router.navigate(['/links']);else this.router.navigate(['/events']);
        }
      }]);

      return PortalComponent;
    }();

    PortalComponent.ɵfac = function PortalComponent_Factory(t) {
      return new (t || PortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortalComponent,
      selectors: [["app-portal"]],
      decls: 123,
      vars: 10,
      consts: [["id", "portalNavId", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark", "fixed-top", 2, "background-color", "#395c80!important"], ["href", "#", 1, "navbar-brand"], [1, "container-fluid"], [1, "nav", "navbar-nav"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "fontFam"], ["data-toggle", "modal", "data-target", "#modalUpload", 1, "dropdown-item"], ["href", "#", "data-toggle", "dropdown", "role", "button", 1, "dropdown-toggle", "nav-link", 2, "margin-left", "-21%"], ["aria-hidden", "true", 1, "fa", "fa-bell", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-2x", 2, "margin-left", "10%"], [1, "dropdown-menu", "notify-drop", "fontFam", 2, "margin-left", "-155%"], [1, "notify-drop-title"], [1, "text-center"], [1, "notify-drop-footer", "text-center"], ["href", "", "data-toggle", "modal", "data-target", "#modalNotify", 1, "dropdown-item"], [1, "row", 2, "padding", "10%"], [1, "col-sm-4"], [1, "card", "bg-light", "mb-3", 2, "max-width", "18rem", "height", "16rem", 3, "click"], [1, "card-header", "cardHeaderColor", "d-flex", "justify-content-center"], [1, "card-body"], [1, "d-flex", "justify-content-center", "mt-4"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-5x"], [1, "card-text", "d-flex", "justify-content-center"], ["aria-hidden", "true", 1, "fa", "fa-calendar", "fa-5x"], ["aria-hidden", "true", 1, "fa", "fa-book", "fa-5x"], ["id", "modalUpload", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "col"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "modalNotify", "role", "dialog", 1, "modal", "fade"], [1, "modal-header", 2, "background-color", "lavender"], [1, "row"], ["href", "/lesson"], [1, "row", "mt-2"], ["id", "commentId", 1, "hide", "mt-1", "row"], ["rows", "3", "placeholder", "Comment here..", 1, "form-control", "mt-4"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "-2%"], [1, "modal-footer", 2, "height", "3rem"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "background-color", "lavender"]],
      template: function PortalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CHURCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DASHBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPETITION/EXAMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TRAINING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UPLOAD FILE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Errata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teacher's Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Worksheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Review Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "You have 2 notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 1.User 1 uploded pdf for lesson 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2.User 1 uploded pdf for lesson 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalComponent_Template_div_click_59_listener($event) {
            return ctx.navigate(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Search for PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalComponent_Template_div_click_68_listener($event) {
            return ctx.navigate(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Find Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalComponent_Template_div_click_77_listener($event) {
            return ctx.navigate(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "COMPETITION/EXAMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Find Competition/Exams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Upload PDF/Audio/Video File Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "You can Approve/Delete uploded files here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "View Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "textarea", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Notify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    padding:0%;\r\n margin-right:0%;\r\n}\r\n\r\n#sidebar-container[_ngcontent-%COMP%] {\r\n    min-height: 100vh;   \r\n    background-color: #333;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n.sidebar-expanded[_ngcontent-%COMP%] {\r\n    width: 230px;\r\n}\r\n\r\n.sidebar-collapsed[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    padding-left: 30px;\r\n}\r\n\r\n.sidebar-submenu[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n\r\n.sidebar-separator-title[_ngcontent-%COMP%] {\r\n    background-color: #333;\r\n    height: 35px;\r\n}\r\n\r\n.sidebar-separator[_ngcontent-%COMP%] {\r\n    background-color: #333;\r\n    height: 25px;\r\n}\r\n\r\n.logo-separator[_ngcontent-%COMP%] {\r\n    background-color: #333;    \r\n    height: 60px;\r\n}\r\n\r\n\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[aria-expanded=\"false\"][_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%]::after {\r\n  content: \" \\f0d7\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n\r\n#sidebar-container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[aria-expanded=\"true\"][_ngcontent-%COMP%]   .submenu-icon[_ngcontent-%COMP%]::after {\r\n  content: \" \\f0da\";\r\n  font-family: FontAwesome;\r\n  display: inline;\r\n  text-align: right;\r\n  padding-left: 10px;\r\n}\r\n\r\n.cardHeaderColor[_ngcontent-%COMP%]{\r\n    background-color: #395c80;\r\n    color: white;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    -webkit-box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQSw2Q0FBNkM7O0FBQzdDO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxhQUFhOztBQUNiO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSw0RkFBNEY7SUFDNUYsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBwYWRkaW5nOjAlO1xyXG4gbWFyZ2luLXJpZ2h0OjAlO1xyXG59XHJcblxyXG4jc2lkZWJhci1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogU2lkZWJhciBzaXplcyB3aGVuIGV4cGFuZGVkIGFuZCBleHBhbmRlZCAqL1xyXG4uc2lkZWJhci1leHBhbmRlZCB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbn1cclxuLnNpZGViYXItY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNZW51IGl0ZW0qL1xyXG4jc2lkZWJhci1jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFN1Ym1lbnUgaXRlbSovXHJcbiNzaWRlYmFyLWNvbnRhaW5lciAubGlzdC1ncm91cCAuc2lkZWJhci1zdWJtZW51IGEge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zaWRlYmFyLXN1Ym1lbnUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8qIFNlcGFyYXRvcnMgKi9cclxuLnNpZGViYXItc2VwYXJhdG9yLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLnNpZGViYXItc2VwYXJhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmxvZ28tc2VwYXJhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7ICAgIFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4vKiBDbG9zZWQgc3VibWVudSBpY29uICovXHJcbiNzaWRlYmFyLWNvbnRhaW5lciAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSAuc3VibWVudS1pY29uOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXFxmMGQ3XCI7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLyogT3BlbmVkIHN1Ym1lbnUgaWNvbiAqL1xyXG4jc2lkZWJhci1jb250YWluZXIgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAuc3VibWVudS1pY29uOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXFxmMGRhXCI7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkSGVhZGVyQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1YzgwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwwLDAsMC4yNCksMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portal',
          templateUrl: './portal.component.html',
          styleUrls: ['./portal.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(formBuilder, router) {
        _classCallCheck(this, RegistrationComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          parish: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.parishes = [{
          value: 'teachers-0',
          viewValue: 'Teachers'
        }, {
          value: 'principals-1',
          viewValue: 'Principals'
        }, {
          value: 'staff-2',
          viewValue: 'Staff'
        }];
      }

      _createClass(RegistrationComponent, [{
        key: "submit",
        value: function submit() {
          if (this.registrationForm.invalid) {
            return;
          } else {
            this.router.navigate(['/signin']);
          }

          this.registrationForm.reset();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['/']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__("#homeTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#regTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#loginTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#signinTab").addClass("active");
          this.registrationForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 61,
      vars: 2,
      consts: [[1, "container", "col-6", "border", "card", "p-3", "bg-light", "mt-2rem", "mb-1rem", 2, "border", "15px solid black"], [1, "text-center", "header-blue"], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "fname"], ["type", "text", "id", "fname", "formControlName", "fname", "placeholder", "Enter First Name", "name", "fname", "required", "", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["for", "lname"], ["type", "text", "id", "lname", "formControlName", "lname", "placeholder", "Enter Last Name", "name", "lname", "required", "", 1, "form-control", "form-control-sm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter Email", "name", "email", "required", "", 1, "form-control", "form-control-sm"], ["type", "text", "id", "fname", "formControlName", "username", "placeholder", "Enter Usename", "name", "fname", "required", "", 1, "form-control", "form-control-sm"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter Password", "name", "password", "required", "", 1, "form-control", "form-control-sm"], ["for", "cpassword"], ["type", "password", "id", "cpassword", "formControlName", "cpassword", "placeholder", "Enter Confirm Password", "name", "cpassword", "required", "", 1, "form-control", "form-control-sm"], ["for", "contact"], ["type", "text", "id", "contact", "formControlName", "contact", "NumbersOnly", "", "placeholder", "Enter Contact No", "name", "contact", "required", "", 1, "form-control", "form-control-sm"], ["for", "yourself"], ["rows", "4", "cols", "50", "id", "yourself", "formControlName", "yourself", "NumbersOnly", "", "placeholder", "Enter About Yourself", "name", "yourself", "required", "", 1, "form-control", "form-control-sm"], [2, "padding-top", "2%"], ["type", "submit", 1, "btn", "btn-blue", "btn-primary", "float-right", 3, "disabled", "click"], ["type", "button", 1, "btn", "link-blue", "btn-link", "float-right", 3, "click"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SIGN UP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Username:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirm Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact No:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "About Yourself:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_56_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_59_listener($event) {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registrationForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: [".btn-primary-spacing[_ngcontent-%COMP%]\r\n{\r\n    margin-right: 20px !important; \r\n}\r\n\r\n.width50[_ngcontent-%COMP%]{\r\n    width: 50%;    \r\n  }\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n    display: inline;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnktc3BhY2luZ1xyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi53aWR0aDUwe1xyXG4gICAgd2lkdGg6IDUwJTsgICAgXHJcbiAgfVxyXG4gIC5pbmxpbmV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resources/resources.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/resources/resources.component.ts ***!
    \**************************************************/

  /*! exports provided: ResourcesComponent */

  /***/
  function srcAppResourcesResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function () {
      return ResourcesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/portal"];
    };

    var _c1 = function _c1() {
      return ["/events"];
    };

    var _c2 = function _c2() {
      return ["/links"];
    };

    var _c3 = function _c3() {
      return ["/training"];
    };

    var ResourcesComponent =
    /*#__PURE__*/
    function () {
      function ResourcesComponent() {
        _classCallCheck(this, ResourcesComponent);
      }

      _createClass(ResourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".page-header-wrapper").hide();
          var user = localStorage.getItem("user");

          if (user === "event_owner") {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".total-people").text("3 People");
          }

          jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
        }
      }, {
        key: "setClasses",
        value: function setClasses(flag) {
          var user = localStorage.getItem("user");
          var classes = "";

          if (flag === 1 && user === "event_owner") {
            classes = "d-none";
          }

          return classes;
        }
      }, {
        key: "openPerson",
        value: function openPerson(flag) {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").hide();

          if (flag === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").show();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
          }
        }
      }, {
        key: "showPeople",
        value: function showPeople() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".pl-wrapper").show();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag2").hide();
          jquery__WEBPACK_IMPORTED_MODULE_1__("#flag1").hide();
        }
      }]);

      return ResourcesComponent;
    }();

    ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) {
      return new (t || ResourcesComponent)();
    };

    ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourcesComponent,
      selectors: [["app-resources"]],
      decls: 403,
      vars: 18,
      consts: [["id", "portalNavId", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark", "fixed-top", 2, "background-color", "#395c80!important"], ["href", "#", 1, "navbar-brand"], [1, "container-fluid"], [1, "nav", "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "active", "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "fontFam"], ["data-toggle", "modal", "data-target", "#modalUpload", 1, "dropdown-item"], ["href", "#", "data-toggle", "dropdown", "role", "button", 1, "dropdown-toggle", "nav-link", 2, "margin-left", "-21%"], ["aria-hidden", "true", 1, "fa", "fa-bell", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-2x", 2, "margin-left", "10%"], [1, "dropdown-menu", "notify-drop", "fontFam", 2, "margin-left", "-155%"], [1, "notify-drop-title"], [1, "text-center"], [1, "notify-drop-footer", "text-center"], ["href", "", "data-toggle", "modal", "data-target", "#modalNotify", 1, "dropdown-item"], [1, "", 2, "padding-top", "6rem"], [1, "row", "d-none", "pd-wrapper"], [1, "col-sm-4"], [1, "card", "cardBorder", 2, "width", "18rem"], ["data-src", "holder.js/100px180/?text=Image cap", "alt", "Image cap [100%x180]", "src", "assets/m1.jpg", "data-holder-rendered", "true", 1, "card-img-top", 2, "height", "180px", "width", "100%", "display", "block"], [1, "card-body"], [1, "card-title"], ["aria-hidden", "true", 1, "fa", "fa-phone"], [1, "pl5"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["data-src", "holder.js/100px180/?text=Image cap", "alt", "Image cap [100%x180]", "src", "assets/w2.jpg", "data-holder-rendered", "true", 1, "card-img-top", 2, "height", "180px", "width", "100%", "display", "block"], ["data-src", "holder.js/100px180/?text=Image cap", "alt", "Image cap [100%x180]", "src", "assets/m2.jpg", "data-holder-rendered", "true", 1, "card-img-top", 2, "height", "180px", "width", "100%", "display", "block"], [1, "pl-wrapper", "mb-5"], [1, "total-people"], [1, "p-table"], [3, "ngClass"], [1, ""], [1, "pull-left", "mr-3", "mt-0_5em", "p-icon"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "pull-left", "p-name", "e-width"], ["href", "javascript:void(0);", 1, "link-blue", 3, "click"], [1, "mt-0_5em", "fw-500"], ["href", "javascript:void(0);", 1, "link-blue"], ["id", "flag1", 1, "per-wrapper", "mb-5"], [1, "per-profile-top"], [1, "row"], ["src", "https://files.breezechms.com/img/profiles/upload/5b743818d7771.jpg", 1, "per-profile"], [1, "col-sm-8"], [1, "person-name"], [1, "person-details"], [1, "person-details-item"], [1, "row", "person-secondary-details"], [1, "col"], [1, "person-secondary-details-head"], [1, "table", "no_border", "table-condensed", "person_details", "per-table"], [1, "birthdate"], ["id", "flag2", 1, "per-wrapper", "mb-5"], ["id", "modalUpload", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "modalNotify", "role", "dialog", 1, "modal", "fade"], [1, "modal-header", 2, "background-color", "lavender"], ["href", "/lesson"], [1, "row", "mt-2"], ["id", "commentId", 1, "hide", "mt-1", "row"], ["rows", "3", "placeholder", "Comment here..", 1, "form-control", "mt-4"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "-2%"], [1, "modal-footer", 2, "height", "3rem"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "background-color", "lavender"]],
      template: function ResourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CHURCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DASHBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_Template_a_click_9_listener($event) {
            return ctx.showPeople();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPETITION/EXAMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TRAINING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UPLOAD FILE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Errata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teacher's Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Worksheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Review Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "You have 2 notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 1.User 1 uploded pdf for lesson 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2.User 1 uploded pdf for lesson 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Frodo Baggins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Teacher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "kausten@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "11 Sheldon Ave NE Grand Rapids, MI 49503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Kate Austen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "kausten@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "11 Sheldon Ave NE Grand Rapids, MI 49503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Phillip Halpert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Priest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "kausten@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "11 Sheldon Ave NE Grand Rapids, MI 49503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "10 People");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "table", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_Template_a_click_130_listener($event) {
            return ctx.openPerson(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Austen, Kate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Female (20)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Baggins, Frodo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Male (22)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Boseman, Chadwick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Male (30)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Bourne, Alison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Female (20)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Bourne, Jason");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Male (19)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Bourne, Marie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Female (21)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Flintstone, Fred");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Male (22)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourcesComponent_Template_a_click_193_listener($event) {
            return ctx.openPerson(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Flintstone, Pebbles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Female (23)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Flintstone, Wilma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Female (24)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Halpert, Cecelia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Female (26)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h3", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Kate Austen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "kausten@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "11 Sheldon Ave NE Grand Rapids, MI 49503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Kate Austen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "35 Years Old ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "August 21, 1984");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "kausten@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "11 Sheldon Ave NE Grand Rapids, MI 49503 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h3", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Pebbles Flintstone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "p.flintstone@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "11 Sheldon Ave NE Grand Rapids, MI 49503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Pebbles Flintstone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "35 Years Old ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "August 21, 1984");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "table", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "(616) 555-5555");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "p.flintstone@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "11 Sheldon Ave NE Grand Rapids, MI 49503 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Upload PDF/Audio/Video File Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "You can Approve/Delete uploded files here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "View Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "textarea", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Notify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses(2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".cardBorder[_ngcontent-%COMP%]{\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    padding: 4px;\r\n}\r\n\r\n.pl5[_ngcontent-%COMP%]{\r\n    padding-left: 5%;\r\n}\r\n\r\n.pl-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    background: #fff;\r\n    \r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.pd-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n}\r\n\r\n.total-people[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 1.3em;\r\n    color: #aaa;\r\n}\r\n\r\n.p-table[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    width: 100%;\r\n}\r\n\r\n.p-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-top: 1px solid #f5f5f5;\r\n    padding: 20px;\r\n}\r\n\r\n.p-icon[_ngcontent-%COMP%]{\r\n    color: #395c80;\r\n}\r\n\r\n.p-name[_ngcontent-%COMP%]{\r\n    font-size: 15pt;\r\n}\r\n\r\n.textCenter[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.mt-0_5em[_ngcontent-%COMP%]{\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.fw-500[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\r\n\r\n.e-width[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n}\r\n\r\n.per-wrapper[_ngcontent-%COMP%]{\r\n    \r\n    background: #fff;\r\n    \r\n    border-radius: 5px;\r\n    padding: 40px;\r\n    position: relative;\r\n    margin: 0px auto;\r\n    max-width: 1140px;\r\n    border: 1px solid #E2EAF0;\r\n}\r\n\r\n.per-profile-top[_ngcontent-%COMP%] {\r\n    padding-bottom: 3em;\r\n    margin-bottom: 4em;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.per-profile[_ngcontent-%COMP%]{\r\n    max-width: 300px;\r\n    max-height: 200px;\r\n    width: 100%;\r\n    padding: 4px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0,0,0,0.2);\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n.person-name[_ngcontent-%COMP%] {\r\n    margin: 0em 0em 0.4em 0em;\r\n    padding: 0em;\r\n    line-height: 1em;\r\n    font-size: 3em;\r\n}\r\n\r\n.person-details[_ngcontent-%COMP%] {\r\n    margin-left: .3em;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.person-details-item[_ngcontent-%COMP%] {\r\n    margin: .7em 0em;\r\n}\r\n\r\n.person-secondary-details[_ngcontent-%COMP%] {\r\n    color: #999;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.person-secondary-details-head[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n    padding: 0.8em 1em;\r\n    border-radius: 5px;\r\n    background-color: #F4F8FA;\r\n    color: #555861;\r\n}\r\n\r\n.per-table[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #eee;\r\n    color: #999 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBR2pDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQm9yZGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnBsNXtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5wbC13cmFwcGVye1xyXG4gICAgLyogbWFyZ2luLXRvcDogMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDkwcHggIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFQUYwO1xyXG59XHJcblxyXG4ucGQtd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcclxufVxyXG5cclxuLnRvdGFsLXBlb3BsZXtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAxLjZlbTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLnAtdGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucC10YWJsZSB0ZHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ucC1pY29ue1xyXG4gICAgY29sb3I6ICMzOTVjODA7XHJcbn1cclxuLnAtbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLnRleHRDZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tdC0wXzVlbXtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcblxyXG4uZnctNTAwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmUtd2lkdGh7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ucGVyLXdyYXBwZXJ7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogOTBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkVBRjA7XHJcbn1cclxuXHJcbi5wZXItcHJvZmlsZS10b3Age1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4ucGVyLXByb2ZpbGV7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLnBlcnNvbi1uYW1lIHtcclxuICAgIG1hcmdpbjogMGVtIDBlbSAwLjRlbSAwZW07XHJcbiAgICBwYWRkaW5nOiAwZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5wZXJzb24tZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjNlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuXHJcbi5wZXJzb24tZGV0YWlscy1pdGVtIHtcclxuICAgIG1hcmdpbjogLjdlbSAwZW07XHJcbn1cclxuXHJcbi5wZXJzb24tc2Vjb25kYXJ5LWRldGFpbHMge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4ucGVyc29uLXNlY29uZGFyeS1kZXRhaWxzLWhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY4RkE7XHJcbiAgICBjb2xvcjogIzU1NTg2MTtcclxufVxyXG5cclxuLnBlci10YWJsZXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgY29sb3I6ICM5OTkgIWltcG9ydGFudDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resources',
          templateUrl: './resources.component.html',
          styleUrls: ['./resources.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/signin.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signin/signin.component.ts ***!
    \********************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SigninComponent =
    /*#__PURE__*/
    function () {
      function SigninComponent(formBuilder, router) {
        _classCallCheck(this, SigninComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.users = [];
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          uname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          agree: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(SigninComponent, [{
        key: "submit",
        value: function submit() {
          if (this.signinForm.invalid) {
            return;
          } else {
            if (this.signinForm.value.uname == "admin") {
              localStorage.setItem("user", "admin");
            } else if (this.signinForm.value.uname == "event_owner") {
              localStorage.setItem("user", "event_owner");
            }

            this.router.navigate(['/portal']); // if (this.signinForm.value.uname == "user" && this.signinForm.value.pwd == "user") {
            //   this.router.navigate(['/portal']);
            // } else
            //   if (this.signinForm.value.uname == "admin" && this.signinForm.value.pwd == "admin") {
            //     this.router.navigate(['/admin']);
            //   } else {
            //     alert("Invalid Username or Password");
            //   }
          }

          this.signinForm.reset();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__("#homeTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#regTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#signinTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#loginTab").addClass("active");
          this.signinForm = this.formBuilder.group({
            uname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // this.subscription = this.testservice.getMessage().subscribe(message => { this.message = message; });
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 19,
      vars: 2,
      consts: [[1, "container", "col-5", "border", "card", "p-3", "bg-light", "mt-2rem", 2, "border", "15px solid black"], [1, "mt-3"], [1, "text-center", 2, "color", "#395c80"], [3, "formGroup"], [1, "form-group"], ["for", "uname"], ["type", "text", "id", "uname", "formControlName", "uname", "placeholder", "Enter username", "name", "uname", "required", "", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["for", "pwd"], ["type", "password", "id", "pwd", "formControlName", "pwd", "placeholder", "Enter password", "name", "pswd", "required", "", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-blue", "btn-primary", "float-right", "btn-primary-spacing", 3, "disabled", "click"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " LOGIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_17_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signinForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: [".btn-primary-spacing[_ngcontent-%COMP%]\r\n{\r\n    margin-right: 20px !important; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcHJpbWFyeS1zcGFjaW5nXHJcbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50OyBcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student-registration/student-registration.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/student-registration/student-registration.component.ts ***!
    \************************************************************************/

  /*! exports provided: StudentRegistration */

  /***/
  function srcAppStudentRegistrationStudentRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRegistration", function () {
      return StudentRegistration;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { AlertifyService } from 'src/app/alertify.service';


    function StudentRegistration_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_11_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
      }
    }

    function StudentRegistration_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Middle Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_14_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.middleName.errors.required);
      }
    }

    function StudentRegistration_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_17_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.lastName.errors.required);
      }
    }

    function StudentRegistration_div_57_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Father's Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_57_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.fatherName.errors.required);
      }
    }

    function StudentRegistration_div_62_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mother's Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_62_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.motherName.errors.required);
      }
    }

    function StudentRegistration_div_67_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_67_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.address1.errors.required);
      }
    }

    function StudentRegistration_div_72_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_72_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.address2.errors.required);
      }
    }

    function StudentRegistration_div_115_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_115_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.fatherEmail.errors.required);
      }
    }

    function StudentRegistration_div_120_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentRegistration_div_120_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentRegistration_div_120_div_1_Template, 2, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.fatherEmail.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var StudentRegistration =
    /*#__PURE__*/
    function () {
      function StudentRegistration(formBuilder, router) {
        _classCallCheck(this, StudentRegistration);

        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(StudentRegistration, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__("#homeTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#regTab").addClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#loginTab").removeClass("active");
          jquery__WEBPACK_IMPORTED_MODULE_2__("#signinTab").removeClass("active");
          this.studRegisterForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^(\+\d{1,3}[- ]?)?\d{10}$")],
            fatherEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            motherEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            studentEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            note: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.studRegisterForm.invalid) {
            return;
          } else {} //this.alertify.success("Student Registered successfully...");
          // this.loading = true;
          // this.router.navigate(['/login']);
          // error => {
          //   this.loading = false;

        }
      }, {
        key: "reset",
        value: function reset() {
          this.studRegisterForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.studRegisterForm.controls;
        }
      }]);

      return StudentRegistration;
    }();

    StudentRegistration.ɵfac = function StudentRegistration_Factory(t) {
      return new (t || StudentRegistration)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    StudentRegistration.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentRegistration,
      selectors: [["app-student-registration"]],
      decls: 132,
      vars: 50,
      consts: [[1, "container", "col-md-6", "col-sm-6", "border", "p-3", "mt-2rem", "bg-light", "mb-1rem", 2, "overflow", "auto"], [1, "text-center", "header-blue"], [3, "formGroup"], [1, "form-group"], ["for", "lastName"], [1, "row"], [1, "col"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "firstName", 1, "form-control", "form-control-sm", "col", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Enter Middle Name", "formControlName", "middleName", 1, "form-control", "form-control-sm", "col", 3, "ngClass"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "lastName", 1, "form-control", "form-control-sm", "col", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col"], ["for", "grade"], ["formControlName", "grade", "id", "grade", 1, "form-control", "form-control-sm"], [1, "form-group", "col-6"], ["for", "DOB"], ["type", "date", "name", "DOB", "formControlName", "DOB", 2, "width", "100%", "background-color", "#fff", "height", "calc(1.5em + .75rem + 2px)", "border", "1px solid #ced4da"], ["for", "username"], ["type", "text", "placeholder", "Enter Father's Name", "formControlName", "fatherName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "motherName"], ["type", "text", "placeholder", "Enter Mother's Name", "formControlName", "motherName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "address1"], ["type", "text", "placeholder", "Enter Address", "formControlName", "address1", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "address2"], ["type", "text", "placeholder", "Enter Address", "formControlName", "address2", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "city"], ["formControlName", "city", "id", "city", 1, "form-control", "form-control-sm"], ["for", "zip"], ["formControlName", "zip", "id", "zip", 1, "form-control", "form-control-sm"], ["type", "number", "placeholder", "Enter Telephone Number", "formControlName", "telNo", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "number", "placeholder", "Enter Mobile Number", "formControlName", "mobile", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "fatherEmail"], ["type", "email", "placeholder", "Enter Email Name", "formControlName", "fatherEmail", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "motherEmail"], ["type", "email", "placeholder", "Enter Email Name", "formControlName", "motherEmail", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "studentEmail"], ["type", "email", "placeholder", "Enter Email Name", "formControlName", "studentEmail", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "note"], ["type", "text", "placeholder", "Enter Note", "formControlName", "note", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "form-group", "text-center"], [1, "btn", "btn-blue", "btn-success", "ml-4", "float-right", 3, "disabled", "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function StudentRegistration_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " STUDENT REGISTRATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentRegistration_div_11_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentRegistration_div_14_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudentRegistration_div_17_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Student's Grade:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select Student's Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pre-KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1st");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "3rd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "4th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "5th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "6th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "7th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "8th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "9th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "10th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Student's Date Of Birth:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Father's Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, StudentRegistration_div_57_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Mother's Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, StudentRegistration_div_62_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Address Line 1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, StudentRegistration_div_67_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Address Line 2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, StudentRegistration_div_72_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "City:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Mumbai");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Trivandrum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Pune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Banglore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Zip Code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Select Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "400055");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "400365");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "422355");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "403214");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Telephone Number Home : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Mobile : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Email Address(Father) : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, StudentRegistration_div_115_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Email Address(Mother): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, StudentRegistration_div_120_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Email Address(Student if any) : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Note (if any)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentRegistration_Template_button_click_130_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studRegisterForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.firstName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.middleName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.middleName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.lastName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.fatherName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fatherName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.matherName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.motherName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.address1.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.address1.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.submitted && ctx.f.address2.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.address2.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.submitted && ctx.f.address2.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.submitted && ctx.f.address2.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx.submitted && ctx.f.fatherEmail.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fatherEmail.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.submitted && ctx.f.fatherEmail.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fatherEmail.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx.submitted && ctx.f.address2.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx.submitted && ctx.f.address2.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.studRegisterForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["html[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1yZWdpc3RyYXRpb24vRjpcXEFfRGlvY2VzZVxcQ0RfQTlcXENodXJjaC9zcmNcXGFwcFxcc3R1ZGVudC1yZWdpc3RyYXRpb25cXHN0dWRlbnQtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LXJlZ2lzdHJhdGlvbi9zdHVkZW50LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LXJlZ2lzdHJhdGlvbi9zdHVkZW50LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgIFxyXG59XHJcbi8vIGJvZHl7XHJcbi8vICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbi8vIH0iLCJodG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentRegistration, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-registration',
          templateUrl: './student-registration.component.html',
          styleUrls: ['./student-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/textbook-order/textbook-order.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/textbook-order/textbook-order.component.ts ***!
    \************************************************************/

  /*! exports provided: TextbookOrderComponent */

  /***/
  function srcAppTextbookOrderTextbookOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextbookOrderComponent", function () {
      return TextbookOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TextbookOrderComponent =
    /*#__PURE__*/
    function () {
      function TextbookOrderComponent(formBuilder, router) {
        _classCallCheck(this, TextbookOrderComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
      }

      _createClass(TextbookOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.textbookOrderForm = this.formBuilder.group({
            parishName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parishAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            principalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            principalContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shippingAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            contactPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            alternatePhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            schoolStartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gestureNo: [''],
            preKgBooks: [''],
            KGBooks: [''],
            firstBooks: [''],
            secondBooks: [''],
            thirdBooks: [''],
            fourthBooks: [''],
            fifthBooks: [''],
            sixthBooks: [''],
            seventhBooks: [''],
            eighthBooks: [''],
            ninethBooks: [''],
            tenthBooks: [''],
            eleventhBooks: [''],
            twelthBooks: [''],
            comments: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.textbookOrderForm.invalid) {
            return;
          } else {
            alert("TextBooks ordered successfully...");
            console.log(this.textbookOrderForm.value);
          }

          this.textbookOrderForm.reset();
        }
      }]);

      return TextbookOrderComponent;
    }();

    TextbookOrderComponent.ɵfac = function TextbookOrderComponent_Factory(t) {
      return new (t || TextbookOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TextbookOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextbookOrderComponent,
      selectors: [["app-textbook-order"]],
      decls: 123,
      vars: 2,
      consts: [[1, "container", "col-md-6", "col-sm-6", "border", "p-3", "mt-2rem", "bg-light", "mb-1rem"], [1, "text-center", "header-blue"], [3, "formGroup"], [1, "form-group"], ["for", "parishName"], ["type", "text", "formControlName", "parishName", "placeholder", "Enter Parish Name", 1, "form-control", "form-control-sm"], ["for", "parishAddress"], ["type", "text", "formControlName", "parishAddress", "placeholder", "Enter Parish Address", 1, "form-control", "form-control-sm"], ["for", "principalName"], ["type", "text", "formControlName", "principalName", "placeholder", "Enter Name of Parish Principal", 1, "form-control", "form-control-sm"], ["for", "principalContact"], ["type", "number", "formControlName", "principalContact", "placeholder", "Enter Principal's Contact Number", 1, "form-control", "form-control-sm"], ["for", "contactName"], ["type", "text", "formControlName", "contactName", "placeholder", "Enter Contact Name", 1, "form-control", "form-control-sm"], ["for", "shippingAddr"], ["type", "text", "formControlName", "shippingAddr", "placeholder", "Enter Address Where books will be shipped.", 1, "form-control", "form-control-sm"], ["for", "contactEmail"], ["type", "email", "formControlName", "contactEmail", "placeholder", "Enter Contact Email Address", 1, "form-control", "form-control-sm"], [1, "row"], [1, "form-group", "col"], ["for", "contactPhone"], ["type", "number", "formControlName", "contactPhone", "pattern", "\\d{10}", "placeholder", "Enter Contact Phone Number", 1, "form-control", "form-control-sm"], ["for", "alternatePhone"], ["type", "number", "formControlName", "alternatePhone", "pattern", "\\d{10}", "placeholder", "Enter Alternate Phone Number", 1, "form-control", "form-control-sm"], ["for", "schoolStartDate"], ["type", "date", "name", "schoolStartDate", "data-provider", "datepicker", "formControlName", "schoolStartDate", "id", "datetimepicker", 1, "form-control", "form-control-sm", 2, "width", "100%", "background-color", "#fff", "height", "calc(1.5em + .75rem + 2px)", "border", "1px solid #ced4da"], ["id", "orderDetails", 1, "container", "borderStyle", "mt-4", "mb-3"], [1, "border-with-text", "bg-light", 2, "font-size", "1.1rem"], [1, "form-group", "row"], ["for", "gestureNo", 1, "col"], ["type", "number", "formControlName", "gestureNo", "placeholder", "Enter No of Books", 1, "form-control", "form-control-sm", "col", "mr-2"], [1, "form-group", "col", "row"], ["for", "preKgBooks", 1, "col"], ["type", "number", "formControlName", "preKgBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "KGBooks", 1, "col"], ["type", "number", "formControlName", "KGBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "firstBooks", 1, "col"], ["type", "number", "formControlName", "firstBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "secondBooks", 1, "col"], ["type", "number", "formControlName", "secondBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "thirdBooks", 1, "col"], ["type", "number", "formControlName", "thirdBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "fourthBooks", 1, "col"], ["type", "number", "formControlName", "fourthBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "fifthBooks", 1, "col"], ["type", "number", "formControlName", "fifthBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "sixthBooks", 1, "col"], ["type", "number", "formControlName", "sixthBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "seventhBooks", 1, "col"], ["type", "number", "formControlName", "seventhBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "eighthBooks", 1, "col"], ["type", "number", "formControlName", "eighthBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "ninethBooks", 1, "col"], ["type", "number", "formControlName", "ninethBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "tenthBooks", 1, "col"], ["type", "number", "formControlName", "tenthBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "eleventhBooks", 1, "col-sm"], ["type", "number", "formControlName", "eleventhBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "twelthBooks", 1, "col-sm"], ["type", "number", "formControlName", "twelthBooks", "placeholder", "No of Books", 1, "form-control", "form-control-sm", "col-sm-5", "mr-2"], ["for", "comments"], ["formControlName", "comments", "placeholder", "Enter Additional Comments or Needs", 1, "form-control", "form-control-sm"], [1, "form-group", "text-right"], [1, "btn", "btn-blue", "btn-success", 3, "disabled", "click"]],
      template: function TextbookOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Text Book Order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Parish Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Parish Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name of Parish Principal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Principal's Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shipping Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact's Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact's Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Alternate Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "When is the anticipated start date of your parish Sunday School? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Order Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Gestures of the Liturgy Booklet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pre-KG Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "KG Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "1st Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2nd Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "3rd Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "4th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "5th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "6th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "7th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "8th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "9th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "10th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "11th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "12th Grade Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Additional Comments or Needs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "textarea", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextbookOrderComponent_Template_button_click_121_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.textbookOrderForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.textbookOrderForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]],
      styles: [".border-with-text[_ngcontent-%COMP%] {\n  width: 7rem;\n  margin-top: -0.6rem;\n  color: #395c80;\n}\n\n.borderStyle[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dGJvb2stb3JkZXIvRjpcXEFfRGlvY2VzZVxcQ0RfQTlcXENodXJjaC9zcmNcXGFwcFxcdGV4dGJvb2stb3JkZXJcXHRleHRib29rLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXh0Ym9vay1vcmRlci90ZXh0Ym9vay1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUVFLGNBQUE7QUNBSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RleHRib29rLW9yZGVyL3RleHRib29rLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci13aXRoLXRleHR7XHJcbiAgd2lkdGg6N3JlbTtcclxuICBtYXJnaW4tdG9wOi0wLjZyZW07XHJcbiAgICAvLyBtYXJnaW4tbGVmdDoycmVtO1xyXG4gICAgY29sb3I6IzM5NWM4MDtcclxuICB9XHJcbiAgLmJvcmRlclN0eWxle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufSAiLCIuYm9yZGVyLXdpdGgtdGV4dCB7XG4gIHdpZHRoOiA3cmVtO1xuICBtYXJnaW4tdG9wOiAtMC42cmVtO1xuICBjb2xvcjogIzM5NWM4MDtcbn1cblxuLmJvcmRlclN0eWxlIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextbookOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-textbook-order',
          templateUrl: './textbook-order.component.html',
          styleUrls: ['./textbook-order.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/training/training.component.ts":
  /*!************************************************!*\
    !*** ./src/app/training/training.component.ts ***!
    \************************************************/

  /*! exports provided: TrainingComponent */

  /***/
  function srcAppTrainingTrainingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrainingComponent", function () {
      return TrainingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/portal"];
    };

    var _c1 = function _c1() {
      return ["/resources"];
    };

    var _c2 = function _c2() {
      return ["/events"];
    };

    var _c3 = function _c3() {
      return ["/links"];
    };

    var _c4 = function _c4() {
      return ["/training"];
    };

    var TrainingComponent =
    /*#__PURE__*/
    function () {
      function TrainingComponent() {
        _classCallCheck(this, TrainingComponent);
      }

      _createClass(TrainingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('.panel-collapse').on('show.bs.collapse', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).siblings('.panel-heading').addClass('active');
          });
          jquery__WEBPACK_IMPORTED_MODULE_1__('.panel-collapse').on('hide.bs.collapse', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).siblings('.panel-heading').removeClass('active');
          });
        }
      }]);

      return TrainingComponent;
    }();

    TrainingComponent.ɵfac = function TrainingComponent_Factory(t) {
      return new (t || TrainingComponent)();
    };

    TrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrainingComponent,
      selectors: [["app-training"]],
      decls: 129,
      vars: 10,
      consts: [["id", "portalNavId", 1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark", "fixed-top", 2, "background-color", "#395c80!important"], ["href", "#", 1, "navbar-brand"], [1, "container-fluid"], [1, "nav", "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "active"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "fontFam"], ["data-toggle", "modal", "data-target", "#modalUpload", 1, "dropdown-item"], ["href", "#", "data-toggle", "dropdown", "role", "button", 1, "dropdown-toggle", "nav-link", 2, "margin-left", "-21%"], ["aria-hidden", "true", 1, "fa", "fa-bell", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-2x", 2, "margin-left", "10%"], [1, "dropdown-menu", "notify-drop", "fontFam", 2, "margin-left", "-155%"], [1, "notify-drop-title"], [1, "text-center"], [1, "notify-drop-footer", "text-center"], ["href", "", "data-toggle", "modal", "data-target", "#modalNotify", 1, "dropdown-item"], [2, "padding", "8%"], [1, "col_12", "program", "white", 2, "padding", "2%"], [1, "intro"], [1, "tp"], [1, "mb-0"], ["href", "#", "target", "No", 1, "btn", "solid", 2, "display", "inline-block"], ["id", "modalUpload", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "col"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "modalNotify", "role", "dialog", 1, "modal", "fade"], [1, "modal-header", 2, "background-color", "lavender"], [1, "row"], ["href", "/lesson"], [1, "row", "mt-2"], ["id", "commentId", 1, "hide", "mt-1", "row"], ["rows", "3", "placeholder", "Comment here..", 1, "form-control", "mt-4"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "-2%"], [1, "modal-footer", 2, "height", "3rem"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "background-color", "lavender"]],
      template: function TrainingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CHURCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DASHBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PEOPLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COMPETITION/EXAMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TRAINING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UPLOAD FILE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Errata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teacher's Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Worksheets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Review Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "You have 2 notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 1.User 1 uploded pdf for lesson 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2.User 1 uploded pdf for lesson 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Classical Education Graduate Program");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Join the classical education movement, and advance your career in teaching or administration as you study the history of liberal education, pedagogy and the classics of the Western tradition with the most accomplished classical educators in the nation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Three Classical Education Graduate Program Tracks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Master of Arts in Humanities with Classical Education Concentration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Master of Humanities with Classical Education Concentration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Certificate of Classical Learning\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Learn More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Catholic Teacher Certificate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "With the University of Dallas Catholic Teacher Certificate, you will meet all of the Texas Catholic Conference Education Department pedagogy requirements for teaching in Texas Catholic schools. The program is comprised of 18 credit hours and offers emphases in elementary or secondary education. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Learn More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Master of Catholic School Leadership");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " The University of Dallas Master of Catholic School Leadership is designed to prepare you for leadership in Catholic education. Whether seeking to be a principal, president or administrator at the elementary, secondary or diocesan levels, you will deepen your knowledge of the Catholic tradition and gain practical, experience-based skills for leadership through the Master of Catholic School Leadership. This program is an interdisciplinary graduate degree, offered by the Ann and Joe O. Neuhoff School of Ministry in conjunction with the Department of Education in the Braniff Graduate School of Liberal Arts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Learn More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Upload PDF/Audio/Video File Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "You can Approve/Delete uploded files here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "View Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "textarea", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Notify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["#l-content[_ngcontent-%COMP%]   .m-inlineImage[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: right;\r\n    margin-left: 0;\r\n    \r\n}\r\n\t  \r\n\t  .col_2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t  text-align: center;\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .col_2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t  display: inline-block; \r\n\t  margin-left: auto; \r\n\t  margin-right: auto;\r\n\t  }\r\n\t  \r\n\t  .btn.solid[_ngcontent-%COMP%] {\r\n\t  border: 1px solid #eda300;\r\n\t  border-radius: 6px;\r\n\t  }\r\n\t  \r\n\t  a.btn.solid[_ngcontent-%COMP%] {\r\n\t  \r\n\t  background-color: #A6B12F;\r\n      border: 1px solid #A6B12F;\r\n      color: #fff;\r\n\t  }\r\n\t  \r\n\t  .cta[_ngcontent-%COMP%]   a.btn.solid[_ngcontent-%COMP%] {\r\n\t  width: 100%;\r\n\t  }\r\n\t  \r\n\t  @media (max-width: 800px) {\r\n\t  div.col_3.cta[_ngcontent-%COMP%], a.btn.solid[_ngcontent-%COMP%] {\r\n\t  width: 100%;\r\n\t  }\r\n\t  }\r\n\t  \r\n\t  a.btn.solid[_ngcontent-%COMP%]:hover {\r\n\t  background-color: #7e8624;\r\n\t  }\r\n\t  \r\n\t  a.solid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\t  margin-top: 5px;\r\n\t  }\r\n\t  \r\n\t  #l-content[_ngcontent-%COMP%]   .l-main[_ngcontent-%COMP%]   div.rome-story[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t  border-bottom: 5px solid rgb(0, 134, 193);\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t  display: block;\r\n    overflow: hidden;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 50%;\r\n\t  border: none !important;\r\n\t  }\r\n\t  \r\n\t  #l-content[_ngcontent-%COMP%]   .l-main[_ngcontent-%COMP%]   div.rome-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\t  margin-top: 5px;\r\n\t  padding-top: 0;\r\n\t  }\r\n\t  \r\n\t  #l-content[_ngcontent-%COMP%]   .l-main[_ngcontent-%COMP%]   div.rome-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t  font-family: 'Oswald', sans-serif;\r\n\t  text-decoration: none;\r\n\t  }\r\n\t  \r\n\t  .careers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t  font-style: italic;\r\n\t  color: rgb(0, 134, 193);\r\n\t  }\r\n\t  \r\n\t  .careers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\t  color: #0F3A71;\r\n\t  }\r\n\t  \r\n\t  .commitment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\t  font-family: 'Oswald', sans-serif;\r\n\t  text-transform: uppercase;\r\n\t  color: rgb(0, 134, 193);\r\n\t  font-weight: 400;\r\n\t  }\r\n\t  \r\n\t  .commitment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\t  color: #2e343b;\r\n\t  \r\n\t  }\r\n\t  \r\n\t  .commitment[_ngcontent-%COMP%]   span.fa-li[_ngcontent-%COMP%] {top: 0;}\r\n\t  \r\n\t  .program[_ngcontent-%COMP%] {margin-bottom:10px;\r\n\t  padding-top: 0; padding-bottom: 15px;padding-left: 15px;\r\n    padding-right: 15px;\r\n\t  }\r\n\t  \r\n\t  .program[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {text-decoration:none !important;}\r\n\t  \r\n\t  .white[_ngcontent-%COMP%]{background-color: #fff;}\r\n\t  \r\n\t  .tp[_ngcontent-%COMP%]{\r\n            display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaW5pbmcvdHJhaW5pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYzs7QUFFbEI7O0dBRUc7R0FDQSxrQkFBa0I7O0dBRWxCOztHQUNBO0dBQ0EscUJBQXFCO0dBQ3JCLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEI7O0dBSUQ7R0FDQyx5QkFBeUI7R0FDekIsa0JBQWtCO0dBQ2xCOztHQUdBO0dBQ0EsZ0JBQWdCO0dBQ2hCLHlCQUF5QjtNQUN0Qix5QkFBeUI7TUFDekIsV0FBVztHQUNkOztHQUVBO0dBQ0EsV0FBVztHQUNYOztHQUNBO0dBQ0E7R0FDQSxXQUFXO0dBQ1g7R0FDQTs7R0FDRDtHQUNDLHlCQUF5QjtHQUN6Qjs7R0FFQTtHQUNBLGVBQWU7R0FDZjs7R0FFQTtHQUNBLHlDQUF5Qzs7R0FFekM7O0dBQ0E7R0FDQSxjQUFjO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7R0FDbkIsdUJBQXVCO0dBQ3ZCOztHQUVBO0dBQ0EsZUFBZTtHQUNmLGNBQWM7R0FDZDs7R0FDQztHQUNELGlDQUFpQztHQUNqQyxxQkFBcUI7R0FDckI7O0dBRUE7R0FDQSxrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCOztHQUNBO0dBQ0EsY0FBYztHQUNkOztHQUVBO0dBQ0EsaUNBQWlDO0dBQ2pDLHlCQUF5QjtHQUN6Qix1QkFBdUI7R0FDdkIsZ0JBQWdCO0dBQ2hCOztHQUNBO0dBQ0EsY0FBYzs7R0FFZDs7R0FDRCx3QkFBd0IsTUFBTSxDQUFDOztHQUM5QixVQUFVLGtCQUFrQjtHQUM1QixjQUFjLEVBQUUsb0JBQW9CLENBQUMsa0JBQWtCO0lBQ3RELG1CQUFtQjtHQUNwQjs7R0FFQSxjQUFjLCtCQUErQixDQUFDOztHQUM5QyxPQUFPLHNCQUFzQixDQUFDOztHQUUvQjtZQUNVLGNBQWM7SUFDdEIsMEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtRQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbC1jb250ZW50IC5tLWlubGluZUltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBcclxufVxyXG5cdCAgXHJcblx0ICAuY29sXzIgcCB7XHJcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICBcclxuXHQgIH1cclxuXHQgIC5jb2xfMiBwIGEgaW1nIHtcclxuXHQgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcblx0ICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcblx0ICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0ICB9XHJcblx0ICBcclxuXHRcclxuXHQgIFxyXG5cdCAuYnRuLnNvbGlkIHtcclxuXHQgIGJvcmRlcjogMXB4IHNvbGlkICNlZGEzMDA7XHJcblx0ICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0ICB9XHJcblx0IFxyXG5cdCAgXHJcblx0ICBhLmJ0bi5zb2xpZCB7XHJcblx0ICAvKiB3aWR0aDogMjAlOyAqL1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI0E2QjEyRjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0E2QjEyRjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcblx0ICB9XHJcblx0ICBcclxuXHQgIC5jdGEgYS5idG4uc29saWQge1xyXG5cdCAgd2lkdGg6IDEwMCU7XHJcblx0ICB9XHJcblx0ICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHQgIGRpdi5jb2xfMy5jdGEsIGEuYnRuLnNvbGlkIHtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdCAgfVxyXG5cdCAgfVxyXG5cdCBhLmJ0bi5zb2xpZDpob3ZlciB7XHJcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4NjI0O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICBhLnNvbGlkIGkge1xyXG5cdCAgbWFyZ2luLXRvcDogNXB4O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAjbC1jb250ZW50IC5sLW1haW4gZGl2LnJvbWUtc3RvcnkgaW1nIHtcclxuXHQgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMCwgMTM0LCAxOTMpO1xyXG5cdCAgXHJcblx0ICB9XHJcblx0ICAucXVvdGUgaW1nIHtcclxuXHQgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgI2wtY29udGVudCAubC1tYWluIGRpdi5yb21lLXN0b3J5IGgzIHtcclxuXHQgIG1hcmdpbi10b3A6IDVweDtcclxuXHQgIHBhZGRpbmctdG9wOiAwO1xyXG5cdCAgfVxyXG4gICAgI2wtY29udGVudCAubC1tYWluIGRpdi5yb21lLXN0b3J5IGgzIGEge1xyXG5cdCAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG5cdCAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuY2FyZWVycyBsaXtcclxuXHQgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHQgIGNvbG9yOiByZ2IoMCwgMTM0LCAxOTMpO1xyXG5cdCAgfVxyXG5cdCAgLmNhcmVlcnMgbGkgaSB7XHJcblx0ICBjb2xvcjogIzBGM0E3MTtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmNvbW1pdG1lbnQgbGkge1xyXG5cdCAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG5cdCAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQgIGNvbG9yOiByZ2IoMCwgMTM0LCAxOTMpO1xyXG5cdCAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHQgIH1cclxuXHQgIC5jb21taXRtZW50IGxpIGkge1xyXG5cdCAgY29sb3I6ICMyZTM0M2I7XHJcblx0ICBcclxuXHQgIH1cclxuXHQgLmNvbW1pdG1lbnQgc3Bhbi5mYS1saSB7dG9wOiAwO31cclxuXHQgIC5wcm9ncmFtIHttYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0ICBwYWRkaW5nLXRvcDogMDsgcGFkZGluZy1ib3R0b206IDE1cHg7cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLnByb2dyYW0gcCBhIHt0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O31cclxuXHQgIC53aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuXHRcdFxyXG5cdFx0LnRwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-training',
          templateUrl: './training.component.html',
          styleUrls: ['./training.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ttc-registration/ttc-registration.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ttc-registration/ttc-registration.component.ts ***!
    \****************************************************************/

  /*! exports provided: TTCRegistrationComponent */

  /***/
  function srcAppTtcRegistrationTtcRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTCRegistrationComponent", function () {
      return TTCRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TTCRegistrationComponent_div_48_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TTCRegistrationComponent_div_48_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TTCRegistrationComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTCRegistrationComponent_div_48_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TTCRegistrationComponent_div_48_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.f.pemail.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.f.pemail.errors.email);
      }
    }

    function TTCRegistrationComponent_div_67_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Student's Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TTCRegistrationComponent_div_67_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TTCRegistrationComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTCRegistrationComponent_div_67_div_1_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TTCRegistrationComponent_div_67_div_2_Template, 2, 0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.f.semail.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.f.semail.errors.email);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var TTCRegistrationComponent =
    /*#__PURE__*/
    function () {
      function TTCRegistrationComponent(formBuilder, router) {
        _classCallCheck(this, TTCRegistrationComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.TTCregistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          pname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          prname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          pemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          phonenum3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          semail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          sele1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(TTCRegistrationComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.TTCregistrationForm.invalid) {
            return;
          } else {
            alert("You have registered Successfully");
            this.TTCregistrationForm.reset();
          }
        }
      }, {
        key: "register",
        value: function register() {
          //   $("#subscribeForm").validate({
          //     rules: {
          //         list: {
          //             required: true,
          //             minlength: 1
          //         }
          //      }
          //  });
          if (this.TTCregistrationForm.invalid) {
            return;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.TTCregistrationForm = this.formBuilder.group({
            pname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pemail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            phonenum1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonenum2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            semail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            mobile1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.TTCregistrationForm.controls;
        }
      }]);

      return TTCRegistrationComponent;
    }();

    TTCRegistrationComponent.ɵfac = function TTCRegistrationComponent_Factory(t) {
      return new (t || TTCRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TTCRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TTCRegistrationComponent,
      selectors: [["app-ttc-registration"]],
      decls: 82,
      vars: 9,
      consts: [[1, "container", "col-md-6", "col-sm-6", "border", "mt-2rem", "mb-1rem", "card", "p-3", "bg-light"], [1, "text-center", "header-blue"], ["id", "subscribeForm", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "pname"], ["type", "text", "id", "pname", "formControlName", "pname", "placeholder", "Enter Parish Name", 1, "form-control", "form-control-sm"], [1, "invalid-feedback"], ["for", "addr"], [1, "row"], [1, "form-group", "col-12"], ["type", "text", "placeholder", "Enter Your Address", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your Landmark", 1, "form-control", "form-control-sm"], [1, "form-group", "col-6"], ["type", "text", "placeholder", "Enter Your City", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your State", 1, "form-control", "form-control-sm"], ["type", "text", "placeholder", "Enter Your Zip code", 1, "form-control", "form-control-sm"], [1, "form-control", "form-control-sm"], ["for", "prname", 1, ""], ["type", "text", "id", "prname", "formControlName", "prname", "placeholder", "Enter Principal's' Name", 1, "form-control", "form-control-sm"], ["for", "vname", 1, ""], ["type", "text", "id", "vname", "formControlName", "vname", "placeholder", "Enter Vicar Name", 1, "form-control", "form-control-sm"], ["for", "pemail"], ["type", "email", "id", "pemail", "formControlName", "pemail", "placeholder", "Enter Principal's Email ID", "required", "", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "mobile1"], ["type", "text", "formControlName", "mobile1", "placeholder", "Enter Principal's Contact Number", 1, "form-control", "form-control-sm"], ["type", "text", "id", "sname", "formControlName", "sname", "placeholder", "Enter Student's' Name", 1, "form-control", "form-control-sm"], ["for", "phonenum1"], ["type", "text", "min", "-999", "max", "999", "maxlength", "3", "formControlName", "phonenum1", "placeholder", "Enter Teacher's Contact Number", 1, "form-control", "form-control-sm"], ["for", "semail"], ["type", "email", "id", "semail", "formControlName", "semail", "placeholder", "Enter Student's Email ID", "required", "", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "form-group", "w-50"], ["for", "sele1"], ["formControlName", "group", "id", "sele1", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-blue", "btn-primary", "float-right", 3, "click"], [4, "ngIf"]],
      template: function TTCRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " TTC Registration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TTCRegistrationComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Parish Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Parish Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "England");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name of Principal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Name of Vicar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Principal's Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TTCRegistrationComponent_div_48_Template, 3, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Principal's Contact Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Name of Teacher:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Please fill out this field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Teacher's Phone Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Teacher's Email Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TTCRegistrationComponent_div_67_Template, 3, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Select Exam Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "22/12/2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "01/01/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "13/04/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "28/07/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TTCRegistrationComponent_Template_button_click_80_listener($event) {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.TTCregistrationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.pemail.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.pemail.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.semail.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.semail.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R0Yy1yZWdpc3RyYXRpb24vdHRjLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TTCRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ttc-registration',
          templateUrl: './ttc-registration.component.html',
          styleUrls: ['./ttc-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\A_Diocese\CD_A9\Church\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map