import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JugComponent } from './components/jug/jug.component';
import { InfoComponent } from './components/info/info.component';
import { RoutingModule } from './modules/routing/routing.module';
import { GlassesComponent } from './components/glasses/glasses.component';

@NgModule({
  declarations: [
    AppComponent,
    JugComponent,
    InfoComponent,
    GlassesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
