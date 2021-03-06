// https://github.com/WebFactoryMk/ng2-canvas-whiteboard
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var CanvasComponent = /** @class */ (function () {
    function CanvasComponent() {
    }
    // default options
    CanvasComponent.prototype.sendBatchUpdate = function (updates) { };
    CanvasComponent.prototype.onCanvasClear = function () { };
    CanvasComponent.prototype.onCanvasUndo = function (updateUUID) { };
    CanvasComponent.prototype.onCanvasRedo = function (updateUUID) { };
    CanvasComponent = __decorate([
        Component({
            selector: 'app-canvas',
            templateUrl: './canvas.component.html'
        })
    ], CanvasComponent);
    return CanvasComponent;
}());
export { CanvasComponent };
//# sourceMappingURL=canvas.component.js.map