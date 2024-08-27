import { Component } from '@angular/core';
import dayjs from 'dayjs/esm';
import { DaterangepickerDirective, NgxDaterangepickerMd } from '../../../../src/daterangepicker/public-api';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'timepicker',
  templateUrl: './timepicker.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatToolbarModule,
    NgxDaterangepickerMd,
  ],
})
export class TimepickerComponent {
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };

  constructor() {
    this.selected = {
      startDate: dayjs('2015-11-18T00:00Z'),
      endDate: dayjs('2015-11-26T00:00Z'),
    };
  }
}
