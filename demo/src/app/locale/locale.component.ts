import { Component } from '@angular/core';
import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import * as fr from 'dayjs/locale/fr';
import { DaterangepickerDirective, NgxDaterangepickerMd } from '../../../../src/daterangepicker/public-api';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

dayjs.extend(utc);

@Component({
  selector: 'locale',
  templateUrl: './locale.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatToolbarModule,
    NgxDaterangepickerMd,
  ],
})
export class LocaleComponent {
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  locale = fr;
}
