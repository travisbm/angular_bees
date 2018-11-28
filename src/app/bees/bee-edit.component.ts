import {
  Component, Input, OnInit
} from '@angular/core';
import { Bee } from '../models/bee';
import { BeesService } from '../shared/services/bees.service';

@Component({
  selector: 'app-bee-edit',
  templateUrl: './bee-edit.component.html',
  styleUrls: ['./bee-edit.component.scss']
})
export class BeeEditComponent implements OnInit {
  @Input()

  public bee: Bee;

  constructor(
    public service: BeesService
  ) {}

  public ngOnInit(): void {
    this.bee = this.service.selectedBee();
  }

  public submitBee(): void {
    this.service
      .create(this.bee)
      .subscribe(
        bee => this.bee = new Bee(), // success handler
        err => console.log('There was an error: ', err) // error handler
      );
  }
}
