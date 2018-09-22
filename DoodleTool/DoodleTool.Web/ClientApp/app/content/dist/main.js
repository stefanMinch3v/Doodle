(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h3>Hi from Angular :-)</h3>\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-example';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes.module */ "./app/app.routes.module.ts");
/* harmony import */ var _components_item_item_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item/item.module */ "./app/components/item/item.module.ts");
/* harmony import */ var _components_account_account_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account/account.module */ "./app/components/account/account.module.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/shared.module */ "./app/components/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _core_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/guards/auth.guard */ "./app/core/services/guards/auth.guard.ts");
/* harmony import */ var _core_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/guards/admin.guard */ "./app/core/services/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _components_item_item_module__WEBPACK_IMPORTED_MODULE_4__["ItemModule"],
                _components_account_account_module__WEBPACK_IMPORTED_MODULE_5__["AccountModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            providers: [_core_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _core_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app.routes.module.ts":
/*!**********************************!*\
  !*** ./app/app.routes.module.ts ***!
  \**********************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_item_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/item/item.module */ "./app/components/item/item.module.ts");
/* harmony import */ var _components_account_account_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account/account.module */ "./app/components/account/account.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'items',
        loadChildren: function () { return _components_item_item_module__WEBPACK_IMPORTED_MODULE_2__["ItemModule"]; } // lazy loading items...
    },
    {
        path: 'account',
        loadChildren: function () { return _components_account_account_module__WEBPACK_IMPORTED_MODULE_3__["AccountModule"]; } // lazy loading items...
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./app/components/account/account.module.ts":
/*!**************************************************!*\
  !*** ./app/components/account/account.module.ts ***!
  \**************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _account_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.routes.module */ "./app/components/account/account.routes.module.ts");
/* harmony import */ var _core_services_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/account/account.service */ "./app/core/services/account/account.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "./app/components/account/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _account_routes_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            declarations: ___WEBPACK_IMPORTED_MODULE_7__["accountComponents"].slice(),
            providers: [_core_services_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./app/components/account/account.routes.module.ts":
/*!*********************************************************!*\
  !*** ./app/components/account/account.routes.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutesModule", function() { return AccountRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./app/components/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./app/components/account/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
];
var AccountRoutesModule = /** @class */ (function () {
    function AccountRoutesModule() {
    }
    AccountRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountRoutesModule);
    return AccountRoutesModule;
}());



/***/ }),

/***/ "./app/components/account/index.ts":
/*!*****************************************!*\
  !*** ./app/components/account/index.ts ***!
  \*****************************************/
/*! exports provided: accountComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountComponents", function() { return accountComponents; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./app/components/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./app/components/account/register/register.component.ts");


var accountComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
];


/***/ }),

/***/ "./app/components/account/login/login.component.html":
/*!***********************************************************!*\
  !*** ./app/components/account/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Login</h3>\r\n<form #loginForm=\"ngForm\" (submit)=\"login()\">\r\n    <div>\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               id=\"username\"\r\n               name=\"username\"\r\n               #email=\"ngModel\"\r\n               [(ngModel)]=\"user.username\"\r\n               required />\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\"\r\n               class=\"form-control\"\r\n               id=\"password\"\r\n               name=\"password\"\r\n               #password=\"ngModel\"\r\n               [(ngModel)]=\"user.password\"\r\n               required />\r\n    </div>\r\n\r\n    <button type=\"submit\"\r\n            [disabled]=\"!loginForm.form.valid\">\r\n        Login\r\n    </button>\r\n</form>"

/***/ }),

/***/ "./app/components/account/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./app/components/account/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/account/account.service */ "./app/core/services/account/account.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var _core_models_account_account_login_input_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/models/account/account-login.input.model */ "./app/core/models/account/account-login.input.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountService, authService, router) {
        this.accountService = accountService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new _core_models_account_account_login_input_model__WEBPACK_IMPORTED_MODULE_4__["AccountLoginModel"]();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.accountService.login(this.user)
            .subscribe(function (res) {
            _this.authService.authenticateUser(res['token']);
            _this.authService.saveUser(_this.user.username);
            _this.authService.saveRoles(res['roles']);
            _this.authService.saveExpirationTime(res['expiration']);
            _this.router.navigate(['/']);
        }, function (error) { return console.log(error.error); }); // handle error
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./app/components/account/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/components/account/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./app/components/account/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Register</h3>\r\n<form #registerForm=\"ngForm\" (submit)=\"register()\">\r\n    <div>\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\"\r\n               id=\"username\"\r\n               name=\"username\"\r\n               #name=\"ngModel\"\r\n               [(ngModel)]=\"user.username\"\r\n               required />\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"email\">Email:</label>\r\n        <input type=\"text\"\r\n               id=\"email\"\r\n               name=\"email\"\r\n               #email=\"ngModel\"\r\n               [(ngModel)]=\"user.email\"\r\n               required />\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\"\r\n               id=\"password\"\r\n               name=\"password\"\r\n               #password=\"ngModel\"\r\n               [(ngModel)]=\"user.password\"\r\n               required />\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"passwordConfirmation\">Confirm Password:</label>\r\n        <input type=\"password\"\r\n               id=\"passwordConfirmation\"\r\n               name=\"passwordConfirmation\"\r\n               #passwordConfirmation=\"ngModel\"\r\n               [(ngModel)]=\"user.passwordConfirmation\"\r\n               required />\r\n    </div>\r\n\r\n    <button type=\"submit\"\r\n            [disabled]=\"!registerForm.form.valid\">\r\n        Submit\r\n    </button>\r\n</form>"

/***/ }),

/***/ "./app/components/account/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./app/components/account/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/account/account.service */ "./app/core/services/account/account.service.ts");
/* harmony import */ var _core_models_account_account_register_input_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/account/account-register.input.model */ "./app/core/models/account/account-register.input.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new _core_models_account_account_register_input_model__WEBPACK_IMPORTED_MODULE_3__["AccountRegisterModel"]();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.register(this.user)
            .subscribe(function (success) { return _this.router.navigate(['/account/login']); }, // handle success
        function (// handle success
        error) { return console.log(error.error); }); // handle error
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./app/components/account/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/components/item/all/all-items.component.html":
/*!**********************************************************!*\
  !*** ./app/components/item/all/all-items.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Items page</h2>\r\n<div *ngIf=\"items\">\r\n    <div *ngFor=\"let item of items\">\r\n        <p>{{item.id}}</p>\r\n        <p>{{item.title}}</p>\r\n        <p>{{item.quantity}}</p>\r\n        <p>{{item.dateOfAdded}}</p>\r\n        <a routerLink=\"/items/details/{{item.id}}\">Details</a>\r\n        <p>----------------------</p>\r\n    </div>\r\n</div>\r\n<p *ngIf=\"!items || items.length === 0\">No items available.</p>"

/***/ }),

/***/ "./app/components/item/all/all-items.component.ts":
/*!********************************************************!*\
  !*** ./app/components/item/all/all-items.component.ts ***!
  \********************************************************/
/*! exports provided: AllItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllItemsComponent", function() { return AllItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/item/item.service */ "./app/core/services/item/item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllItemsComponent = /** @class */ (function () {
    function AllItemsComponent(itemService) {
        this.itemService = itemService;
    }
    AllItemsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    AllItemsComponent.prototype.getAll = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }); // handle error
    };
    AllItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-items',
            template: __webpack_require__(/*! ./all-items.component.html */ "./app/components/item/all/all-items.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], AllItemsComponent);
    return AllItemsComponent;
}());

;


/***/ }),

/***/ "./app/components/item/create/create-item.component.html":
/*!***************************************************************!*\
  !*** ./app/components/item/create/create-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create item page</h2>\r\n<form #createItemFrom=\"ngForm\" (submit)=\"create()\">\r\n    <div>\r\n        <label for=\"title\">Title:</label>\r\n        <input type=\"text\"\r\n               id=\"title\"\r\n               name=\"title\"\r\n               #make=\"ngModel\"\r\n               [(ngModel)]=\"item.title\"\r\n               required />\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"quantity\">Quantity:</label>\r\n        <input type=\"number\"\r\n               id=\"quantity\"\r\n               name=\"quantity\"\r\n               #model=\"ngModel\"\r\n               [(ngModel)]=\"item.quantity\"\r\n               required />\r\n    </div>\r\n\r\n    <button type=\"submit\"\r\n            [disabled]=\"!createItemFrom.form.valid\">\r\n        Submit\r\n    </button>\r\n</form>"

/***/ }),

/***/ "./app/components/item/create/create-item.component.ts":
/*!*************************************************************!*\
  !*** ./app/components/item/create/create-item.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemComponent", function() { return CreateItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/item/item.service */ "./app/core/services/item/item.service.ts");
/* harmony import */ var _core_models_item_item_form_input_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/models/item/item-form.input.model */ "./app/core/models/item/item-form.input.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateItemComponent = /** @class */ (function () {
    function CreateItemComponent(itemService) {
        this.itemService = itemService;
    }
    CreateItemComponent.prototype.ngOnInit = function () {
        this.item = new _core_models_item_item_form_input_model__WEBPACK_IMPORTED_MODULE_2__["ItemFormInputModel"]();
    };
    CreateItemComponent.prototype.create = function () {
        // add validations
        this.itemService.create(this.item)
            .subscribe(function (success) { return console.log(success); }, // handle success
        function (// handle success
        error) { return console.log(error); }); // handle error
    };
    CreateItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-item',
            template: __webpack_require__(/*! ./create-item.component.html */ "./app/components/item/create/create-item.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], CreateItemComponent);
    return CreateItemComponent;
}());

;


/***/ }),

/***/ "./app/components/item/details/item-details.component.html":
/*!*****************************************************************!*\
  !*** ./app/components/item/details/item-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Item details page</h3>\r\n<div *ngIf=\"item\">\r\n    <p>Title: {{item.title}}</p>\r\n    <p>Description: {{item.quantity}}</p>\r\n    <div *ngIf=\"isUserAdm()\">\r\n        <button (click)=\"deleteItem()\">Delete this item</button> |\r\n        <button routerLink=\"/items/edit/{{id}}\">Edit this item</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/components/item/details/item-details.component.ts":
/*!***************************************************************!*\
  !*** ./app/components/item/details/item-details.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/item/item.service */ "./app/core/services/item/item.service.ts");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/role.service */ "./app/core/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemDetailsComponent = /** @class */ (function () {
    function ItemDetailsComponent(itemService, route, router, roleService) {
        this.itemService = itemService;
        this.route = route;
        this.router = router;
        this.roleService = roleService;
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.getDetails(this.id);
    };
    ItemDetailsComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.itemService.getSingle(this.id)
            .subscribe(function (item) { return _this.item = item; }, function (error) { return console.log(error); }); // handle error
    };
    ItemDetailsComponent.prototype.deleteItem = function () {
        var _this = this;
        this.itemService.remove(this.id)
            .subscribe(function (success) {
            console.log(success);
            _this.router.navigate(['/']);
        }, function (error) { return console.log(error); }); // handle error
    };
    ItemDetailsComponent.prototype.isUserAdm = function () {
        return this.roleService.isUserAdmin();
    };
    ItemDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'item-details',
            template: __webpack_require__(/*! ./item-details.component.html */ "./app/components/item/details/item-details.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());



/***/ }),

/***/ "./app/components/item/edit/edit-item.component.html":
/*!***********************************************************!*\
  !*** ./app/components/item/edit/edit-item.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1>Edit item</h1>\r\n<div>\r\n    <form (ngSubmit)=\"edit()\" #itemForm=\"ngForm\">\r\n        <div>\r\n            <label for=\"title\">Title</label>\r\n            <input type=\"text\"\r\n                    id=\"title\"\r\n                    name=\"title\"\r\n                    [(ngModel)]=\"item.title\"\r\n                    required\r\n                    #title=\"ngModel\"\r\n                    value=\"{{item.title}}\" />\r\n            <div [hidden]=\"title.valid || title.pristine\">\r\n                Invalid title!\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <label for=\"quantity\">Quantity</label>\r\n            <input type=\"number\"\r\n                    id=\"quantity\"\r\n                    name=\"quantity\"\r\n                    [(ngModel)]=\"item.quantity\"\r\n                    required\r\n                    value=\"item.quantity\" />\r\n        </div>\r\n        <button type=\"submit\" [disabled]=\"!itemForm.form.valid\">Edit</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./app/components/item/edit/edit-item.component.ts":
/*!*********************************************************!*\
  !*** ./app/components/item/edit/edit-item.component.ts ***!
  \*********************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/item/item.service */ "./app/core/services/item/item.service.ts");
/* harmony import */ var _core_models_item_item_form_input_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/item/item-form.input.model */ "./app/core/models/item/item-form.input.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = new _core_models_item_item_form_input_model__WEBPACK_IMPORTED_MODULE_3__["ItemFormInputModel"]();
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.itemService.getSingle(this.id)
            .subscribe(function (item) { return _this.item = item; }, function (error) { return console.log(error); });
    };
    EditItemComponent.prototype.edit = function () {
        // add validations
        this.itemService.edit(this.id, this.item)
            .subscribe(function (success) { return console.log(success); }, function (error) { return console.log(error); });
    };
    EditItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-item',
            template: __webpack_require__(/*! ./edit-item.component.html */ "./app/components/item/edit/edit-item.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditItemComponent);
    return EditItemComponent;
}());

;


/***/ }),

/***/ "./app/components/item/index.ts":
/*!**************************************!*\
  !*** ./app/components/item/index.ts ***!
  \**************************************/
/*! exports provided: itemsComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsComponents", function() { return itemsComponents; });
/* harmony import */ var _all_all_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all/all-items.component */ "./app/components/item/all/all-items.component.ts");
/* harmony import */ var _details_item_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/item-details.component */ "./app/components/item/details/item-details.component.ts");
/* harmony import */ var _create_create_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create-item.component */ "./app/components/item/create/create-item.component.ts");
/* harmony import */ var _edit_edit_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit-item.component */ "./app/components/item/edit/edit-item.component.ts");




var itemsComponents = [
    _all_all_items_component__WEBPACK_IMPORTED_MODULE_0__["AllItemsComponent"],
    _details_item_details_component__WEBPACK_IMPORTED_MODULE_1__["ItemDetailsComponent"],
    _create_create_item_component__WEBPACK_IMPORTED_MODULE_2__["CreateItemComponent"],
    _edit_edit_item_component__WEBPACK_IMPORTED_MODULE_3__["EditItemComponent"]
];


/***/ }),

/***/ "./app/components/item/item.module.ts":
/*!********************************************!*\
  !*** ./app/components/item/item.module.ts ***!
  \********************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _item_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.routes.module */ "./app/components/item/item.routes.module.ts");
/* harmony import */ var _core_services_item_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/item/item.service */ "./app/core/services/item/item.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "./app/components/item/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ItemModule = /** @class */ (function () {
    function ItemModule() {
    }
    ItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _item_routes_module__WEBPACK_IMPORTED_MODULE_4__["ItemRoutesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            declarations: ___WEBPACK_IMPORTED_MODULE_7__["itemsComponents"].slice(),
            providers: [_core_services_item_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
        })
    ], ItemModule);
    return ItemModule;
}());



/***/ }),

/***/ "./app/components/item/item.routes.module.ts":
/*!***************************************************!*\
  !*** ./app/components/item/item.routes.module.ts ***!
  \***************************************************/
/*! exports provided: ItemRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRoutesModule", function() { return ItemRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_all_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all/all-items.component */ "./app/components/item/all/all-items.component.ts");
/* harmony import */ var _details_item_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/item-details.component */ "./app/components/item/details/item-details.component.ts");
/* harmony import */ var _create_create_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create-item.component */ "./app/components/item/create/create-item.component.ts");
/* harmony import */ var _edit_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-item.component */ "./app/components/item/edit/edit-item.component.ts");
/* harmony import */ var _core_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/guards/auth.guard */ "./app/core/services/guards/auth.guard.ts");
/* harmony import */ var _core_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/guards/admin.guard */ "./app/core/services/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'all', component: _all_all_items_component__WEBPACK_IMPORTED_MODULE_2__["AllItemsComponent"] },
    { path: 'details/:id', component: _details_item_details_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsComponent"], canActivate: [_core_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'create', component: _create_create_item_component__WEBPACK_IMPORTED_MODULE_4__["CreateItemComponent"], canActivate: [_core_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]] },
    { path: 'edit/:id', component: _edit_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["EditItemComponent"], canActivate: [_core_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]] }
];
var ItemRoutesModule = /** @class */ (function () {
    function ItemRoutesModule() {
    }
    ItemRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ItemRoutesModule);
    return ItemRoutesModule;
}());



/***/ }),

/***/ "./app/components/shared/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./app/components/shared/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <footer>\r\n        <p>&#9400;2018 Some random footer </p>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./app/components/shared/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./app/components/shared/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./app/components/shared/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/components/shared/header/header.component.html":
/*!************************************************************!*\
  !*** ./app/components/shared/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <a routerLink=\"/\">Home</a>\r\n    <div>\r\n        <ul>\r\n            <!-- Anonymous -->\r\n            <li>\r\n                <a routerLink=\"/items/all\">Items</a>\r\n            </li>\r\n            <li *ngIf=\"isUserAuth() && isUserAdm()\">\r\n                <a routerLink=\"/items/create\">Create Item</a>\r\n            </li>\r\n            <!-- Authenticated -->\r\n            <!-- Current User -->\r\n            <li *ngIf=\"isUserAuth()\">\r\n                <p>Hello, {{authService.getUser()}}</p>\r\n            </li>\r\n        </ul>\r\n        <ul>\r\n            <!-- Anonymous -->\r\n            <!-- Login -->\r\n            <li *ngIf=\"!isUserAuth()\">\r\n                <a routerLink=\"/account/login\">Login</a>\r\n            </li>\r\n            <!-- Register -->\r\n            <li *ngIf=\"!isUserAuth()\">\r\n                <a routerLink=\"/account/register\">Register</a>\r\n            </li>\r\n            <!-- Logout -->\r\n            <li *ngIf=\"isUserAuth()\">\r\n                <a href=\"\" (click)=\"logout()\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./app/components/shared/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./app/components/shared/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/account/account.service */ "./app/core/services/account/account.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/role.service */ "./app/core/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(accountService, authService, roleService) {
        this.accountService = accountService;
        this.authService = authService;
        this.roleService = roleService;
    }
    HeaderComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    HeaderComponent.prototype.isUserAuth = function () {
        return this.authService.isUserAuthenticated();
    };
    HeaderComponent.prototype.isUserAdm = function () {
        return this.roleService.isUserAdmin();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./app/components/shared/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./app/components/shared/index.ts":
/*!****************************************!*\
  !*** ./app/components/shared/index.ts ***!
  \****************************************/
/*! exports provided: sharedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedComponents", function() { return sharedComponents; });
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./app/components/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./app/components/shared/footer/footer.component.ts");


var sharedComponents = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]
];


/***/ }),

/***/ "./app/components/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./app/components/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./app/components/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: ___WEBPACK_IMPORTED_MODULE_3__["sharedComponents"].slice(),
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: ___WEBPACK_IMPORTED_MODULE_3__["sharedComponents"].slice()
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./app/core/models/account/account-login.input.model.ts":
/*!**************************************************************!*\
  !*** ./app/core/models/account/account-login.input.model.ts ***!
  \**************************************************************/
/*! exports provided: AccountLoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginModel", function() { return AccountLoginModel; });
var AccountLoginModel = /** @class */ (function () {
    function AccountLoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return AccountLoginModel;
}());



/***/ }),

/***/ "./app/core/models/account/account-register.input.model.ts":
/*!*****************************************************************!*\
  !*** ./app/core/models/account/account-register.input.model.ts ***!
  \*****************************************************************/
/*! exports provided: AccountRegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRegisterModel", function() { return AccountRegisterModel; });
var AccountRegisterModel = /** @class */ (function () {
    function AccountRegisterModel(username, email, password, passwordConfirmation) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }
    return AccountRegisterModel;
}());



/***/ }),

/***/ "./app/core/models/item/item-form.input.model.ts":
/*!*******************************************************!*\
  !*** ./app/core/models/item/item-form.input.model.ts ***!
  \*******************************************************/
/*! exports provided: ItemFormInputModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormInputModel", function() { return ItemFormInputModel; });
var ItemFormInputModel = /** @class */ (function () {
    function ItemFormInputModel(title, quantity) {
        this.title = title;
        this.quantity = quantity;
    }
    return ItemFormInputModel;
}());



/***/ }),

/***/ "./app/core/services/account/account.service.ts":
/*!******************************************************!*\
  !*** ./app/core/services/account/account.service.ts ***!
  \******************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = /** @class */ (function () {
    function AccountService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    AccountService.prototype.login = function (user) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].localhost.url + '/account/login';
        return this.http.post(url, user);
    };
    AccountService.prototype.register = function (user) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].localhost.url + '/account/register';
        return this.http.post(url, user);
    };
    AccountService.prototype.logout = function () {
        this.authService.deauthenticateUser();
        this.router.navigate(['/']);
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./app/core/services/auth.service.ts":
/*!*******************************************!*\
  !*** ./app/core/services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService_1 = AuthService;
    AuthService.prototype.saveUser = function (user) {
        window.localStorage.setItem(AuthService_1.USER_KEY, user);
    };
    AuthService.prototype.getUser = function () {
        return window.localStorage.getItem(AuthService_1.USER_KEY);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return window.localStorage.getItem(AuthService_1.TOKEN_KEY) !== null;
    };
    AuthService.prototype.authenticateUser = function (token) {
        window.localStorage.setItem(AuthService_1.TOKEN_KEY, token);
    };
    AuthService.prototype.deauthenticateUser = function () {
        this.removeUser();
        this.removeToken();
        this.removeRoles();
        this.removeExpirationTime();
    };
    AuthService.prototype.getToken = function () {
        return window.localStorage.getItem(AuthService_1.TOKEN_KEY);
    };
    AuthService.prototype.saveRoles = function (roles) {
        window.localStorage.setItem(AuthService_1.ROLES_KEY, roles);
    };
    AuthService.prototype.getRoles = function () {
        return window.localStorage.getItem(AuthService_1.ROLES_KEY);
    };
    AuthService.prototype.saveExpirationTime = function (expiration) {
        window.localStorage.setItem(AuthService_1.EXPIRE_KEY, expiration);
    };
    AuthService.prototype.getExpirationTime = function () {
        return window.localStorage.getItem(AuthService_1.EXPIRE_KEY);
    };
    AuthService.prototype.removeExpirationTime = function () {
        window.localStorage.removeItem(AuthService_1.EXPIRE_KEY);
    };
    AuthService.prototype.removeRoles = function () {
        window.localStorage.removeItem(AuthService_1.ROLES_KEY);
    };
    AuthService.prototype.removeUser = function () {
        window.localStorage.removeItem(AuthService_1.USER_KEY);
    };
    AuthService.prototype.removeToken = function () {
        window.localStorage.removeItem(AuthService_1.TOKEN_KEY);
    };
    AuthService.USER_KEY = 'user';
    AuthService.TOKEN_KEY = 'token';
    AuthService.ROLES_KEY = 'roles';
    AuthService.EXPIRE_KEY = 'expiration';
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "./app/core/services/guards/admin.guard.ts":
/*!*************************************************!*\
  !*** ./app/core/services/guards/admin.guard.ts ***!
  \*************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.service */ "./app/core/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, authService, roleSerivce) {
        this.router = router;
        this.authService = authService;
        this.roleSerivce = roleSerivce;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AdminGuard.prototype.check = function () {
        var expirationTime = new Date(this.authService.getExpirationTime());
        if (!this.authService.isUserAuthenticated() || expirationTime < new Date) {
            this.authService.deauthenticateUser();
            this.router.navigate(['/account/login']);
            return;
        }
        return this.roleSerivce.isUserAdmin();
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./app/core/services/guards/auth.guard.ts":
/*!************************************************!*\
  !*** ./app/core/services/guards/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthGuard.prototype.check = function () {
        var expirationTime = new Date(this.authService.getExpirationTime());
        if (this.authService.isUserAuthenticated() && expirationTime > new Date) {
            return true;
        }
        this.authService.deauthenticateUser();
        this.router.navigate(['/account/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./app/core/services/item/item.service.ts":
/*!************************************************!*\
  !*** ./app/core/services/item/item.service.ts ***!
  \************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./app/core/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var dbUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].localhost.url;
var itemsUrl = dbUrl + "/items";
var ItemService = /** @class */ (function () {
    function ItemService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    ItemService.prototype.getAll = function () {
        return this.http.get(itemsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return Object.values(res); }));
    };
    ItemService.prototype.getSingle = function (id) {
        // add validations
        var url = itemsUrl + "/" + id;
        var headers = this.prepareBearerTokenHeaders(false);
        return this.http.get(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return Object.assign(res); }));
    };
    ItemService.prototype.remove = function (id) {
        // add validations
        var url = itemsUrl + "/" + id;
        var headers = this.prepareBearerTokenHeaders(false);
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return Object.assign(res); }));
    };
    ItemService.prototype.edit = function (id, editItemModel) {
        // add validations
        var url = itemsUrl + "/" + id;
        var headers = this.prepareBearerTokenHeaders(false);
        return this.http.put(url, editItemModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return Object.assign(res); }));
    };
    ItemService.prototype.create = function (createItemModel) {
        // add validations
        var headers = this.prepareBearerTokenHeaders(true);
        return this.http.post(itemsUrl, createItemModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return Object.assign(res); }));
    };
    ItemService.prototype.prepareBearerTokenHeaders = function (isPostReq) {
        var token = this.authService.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer " + token
        });
        if (isPostReq) {
            headers.set('Content-Type', 'application/json');
        }
        else {
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        return headers;
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemService);
    return ItemService;
}());

;


/***/ }),

/***/ "./app/core/services/role.service.ts":
/*!*******************************************!*\
  !*** ./app/core/services/role.service.ts ***!
  \*******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleService = /** @class */ (function () {
    function RoleService(authService) {
        this.authService = authService;
    }
    RoleService.prototype.isUserAdmin = function () {
        var roles = this.authService.getRoles();
        if (roles.includes('Admin')) {
            return true;
        }
        return false;
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    localhost: {
        url: 'https://localhost:5001/api'
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Browser-Downloads\Internship\DoodleApp\DoodleTool\DoodleTool.Web\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map