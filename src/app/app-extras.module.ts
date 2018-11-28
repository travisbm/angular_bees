import { NgModule } from '@angular/core';
import { BeesService } from './shared/services/bees.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [BeesService],
  entryComponents: []
})
export class AppExtrasModule { }
