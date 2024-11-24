import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModuleModule } from './components/shared/shared-module/shared-module.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModuleModule
  ],
  bootstrap: [AppComponent]  // Bootstrap the main AppComponent
})
export class AppModule { }
