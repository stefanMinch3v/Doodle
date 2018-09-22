import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasComponent } from './canvas.component';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { CanvasRoutesModule } from './canvas.routes.module';

@NgModule({
    imports: [CommonModule, CanvasWhiteboardModule, CanvasRoutesModule],
    declarations: [CanvasComponent],
    providers: []
})
export class CanvasModule { }