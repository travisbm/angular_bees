import {
  Component, OnInit
} from '@angular/core';

import { Bee } from '../models/bee';
import { BeesService } from '../shared/services/bees.service';

@Component({
  selector: 'app-bee-list',
  templateUrl: './bee-list.component.html',
  styleUrls: ['./bee-list.component.scss']
})

export class BeeListComponent implements OnInit {
  public bees: Bee[] = [];
  public currentlySelectedBee: Bee;

  constructor(
    private service: BeesService
  ) {}

  public ngOnInit(): void {
    this.service
    .fetch()
    .subscribe(bees => this.bees = bees);
    this.service
      .currentlySelectedBee
      .subscribe(bee => this.currentlySelectedBee = bee);
  }

  public selectBee(bee: Bee): void {
    this.service.setSelectedBee(bee);
  }
}
