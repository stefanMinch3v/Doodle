import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutesModule } from './app.routes.module';
import { AccountModule } from './components/account/account.module';
import { SharedModule } from './components/shared/shared.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './core/services/guards/auth.guard';
import { AdminGuard } from './core/services/guards/admin.guard';
import { CanvasModule } from './components/canvas/canvas.module';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    AccountModule,
    SharedModule,
    CanvasModule
  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
