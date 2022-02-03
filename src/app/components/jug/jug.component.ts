import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Glass, Jug } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-jug',
  templateUrl: './jug.component.html',
  styleUrls: ['./jug.component.scss']
})
export class JugComponent implements OnInit{
  filling=0;
  unit='ml';
  fillingPercent=0;
  remain=0
  total=0
  height=0;
  jugHeightMax = 22;//rem

  constructor(private service:DataService){}

  ngOnInit(): void {
    this.total = this.remain = this.service.sumGlassesCapacity(null);
  }


  fillJug(lastGlassNr:number){
    this.filling=this.service.sumGlassesCapacity(lastGlassNr);

    this.remain = this.total - this.filling;
    this.fillingPercent = Math.floor(this.filling/this.total *100)

    this.height =  this.fillingPercent/100 * this.jugHeightMax;
  }

}
