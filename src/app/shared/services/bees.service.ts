// import { Http } from '@andular/http';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Observable } from 'rxjs/Observable';
import { Bee } from '../../models/bee';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BeesService {
  public currentlySelectedBee: BehaviorSubject<Bee>;

  constructor(private service: SkyAuthHttp) {
    this.currentlySelectedBee = new BehaviorSubject<Bee>(undefined);
  }

  public setSelectedBee(bee: Bee): void {
    this.currentlySelectedBee.next(bee);
  }

  public fetch(): Observable<Bee[]> {
    return this.service
      .get('https://buzzbaud.curtissimo.com/v1/bees')
      .map(response => response.json().bees);
  }

  // public updateBee(bee: Bee) {
  //   return this.service
  //     .put('https://buzzbaud.curtissimo.com/v1/bees/{{ bee.id }}');
  // }

  public create(bee: Bee): Observable<Bee> {
    return this.service
      .post('https://buzzbaud.curtissimo.com/v1/bees', bee)
      .map(response => response.json());
  }

  // public selectedBee(bee: Bee): void {
  //   this.currentlySelectedBee = bee;
  // }
}
