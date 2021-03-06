// import { Http } from '@andular/http';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Observable } from 'rxjs/Observable';
import { Bee } from '../../models/bee';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BeesService {
  // public currentlySelectedBee: BehaviorSubject<Bee>;

  constructor(
    private service: SkyAuthHttp
  ) {}

  // public setSelectedBee(bee: Bee): void {
  //   this.currentlySelectedBee.next(bee);
  // }

  public getBees(): Observable<Bee[]> {
    return this.service
      .get('https://buzzbaud.curtissimo.com/v1/bees')
      .map(response => response.json().bees);
  }

  public getBee(id: string): Observable<Bee> {
    return this.service
      .get(`https://buzzbaud.curtissimo.com/v1/bees/${id}`)
      .map(response => response.json());
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

  public delete(bee: Bee): Observable<Bee> {
    return this.service
      .delete(`https://buzzbaud.curtissimo.com/v1/bees/${bee.id}`, bee);
  }
}
