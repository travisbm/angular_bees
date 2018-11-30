import { Component, Input } from '@angular/core';
import { Bee } from '../models/bee';
import { BeesService } from '../shared/services/bees.service';

@Component({
  selector: 'app-bee-detail',
  templateUrl: './bee-detail.component.html',
  styleUrls: ['./bee-detail.component.scss']
})
export class BeeDetailComponent {
  @Input() public bee: Bee;

  constructor(
    public service: BeesService
  ) {}

  public deleteBee(bee: Bee): void {
    this.service
      .delete(bee)
      .subscribe ();
  }
}
