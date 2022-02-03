import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Glass } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';
import { JugComponent } from '../jug/jug.component';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.scss']
})
export class GlassesComponent implements OnInit {

  glasses = this.service.getGlasses();
  @ViewChild(JugComponent) jug!:JugComponent;

  constructor(private service:DataService){}

  ngOnInit(){}


  chooseGlass(currentGlass:Glass){

    this.service.chooseGlass(currentGlass);

    if(currentGlass.empty===false){
      this.jug.fillJug(currentGlass.nr)
    } else{
      this.jug.fillJug(currentGlass.nr-1)
    }


  }

}
