import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { InfoComponent } from 'src/app/components/info/info.component';
import { GlassesComponent } from 'src/app/components/glasses/glasses.component';

const routes:Routes=[
  {path:'', redirectTo:"/glasses", pathMatch:'full'},
  {path:'glasses', component:GlassesComponent, pathMatch:'full'},
  {path:'info', component:InfoComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
