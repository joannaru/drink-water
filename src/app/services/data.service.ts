import { Injectable } from '@angular/core';
import '../data/data';
import { BehaviorSubject } from 'rxjs';
import { IGlass } from '../interfaces/glass.interface';
import { GLASSES } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private glasses = new BehaviorSubject<IGlass[]>([]);
  constructor() {
    // simulating time to get datas from web API
    setTimeout(() => {
      this.glasses.next(GLASSES);
    }, 500);
  }

  getGlasses() {
    return this.glasses;
  }

  chooseGlass(currentGlass: IGlass) {
    currentGlass.empty = !currentGlass.empty;

    this.glasses.subscribe((data) =>
      data.forEach((glass) => {
        // current glass full
        if (glass.nr != currentGlass.nr) {
          if (currentGlass.empty === false) {
            // full glasses before currentGlass
            if (glass.nr < currentGlass.nr) glass.empty = false;
          } else {
            // current glass empty
            // empty glasses after currentGlass
            if (glass.nr > currentGlass.nr) glass.empty = true;
          }
        }
      })
    );
  }

  sumGlassesCapacity(lastGlassNr: number | null) {
    let sum = 0; // reset
    this.glasses.subscribe((glasses) => {
      glasses.forEach((glass) => {
        if (lastGlassNr === null || glass.nr <= lastGlassNr)
          sum += glass.capacity;
      });
    });
    return sum;
  }
}
