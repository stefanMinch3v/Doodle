// https://github.com/WebFactoryMk/ng2-canvas-whiteboard

import { Component } from '@angular/core';

import { CanvasWhiteboardUpdate } from 'ng2-canvas-whiteboard';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html'
})
export class CanvasComponent {

    // default options
    sendBatchUpdate(updates: CanvasWhiteboardUpdate[]) { }
    onCanvasClear() { }
    onCanvasUndo(updateUUID: string) { }
    onCanvasRedo(updateUUID: string) { }
}
