import {
  Component, OnInit, Input, OnChanges, SimpleChanges
} from '@angular/core';

import { Bee } from '../models/bee';
import { BeesService } from '../shared/services/bees.service';

@Component({
  selector: 'app-bee-list',
  templateUrl: './bee-list.component.html',
  styleUrls: ['./bee-list.component.scss']
})

export class BeeListComponent implements OnInit, OnChanges {
  @Input() public selectedBeeId: string;

  public bees: Bee[] = [];
  public selectedBee: Bee;

  constructor(
    private service: BeesService
  ) {}

  public ngOnInit(): void {
    this.service
      .getBees()
      .subscribe(bees => this.bees = bees);
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.service
      .getBee(this.selectedBeeId)
      .subscribe(bee => this.selectedBee = bee);
  }
}
