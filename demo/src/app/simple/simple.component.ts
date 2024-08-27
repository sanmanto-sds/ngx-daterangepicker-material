import { Component, OnInit, ViewChild } from '@angular/core';
import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';

dayjs.extend(utc);
import {
  DaterangepickerComponent,
  DaterangepickerDirective,
  NgxDaterangepickerMd,
} from '../../../../src/daterangepicker/public-api';
import { ChosenDate, TimePeriod } from '../../../../src/daterangepicker/daterangepicker.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'simple',
  templateUrl: './simple.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    FormsModule,
    JsonPipe,
    NgIf,
    NgxDaterangepickerMd,
  ],
})
export class SimpleComponent implements OnInit {
  @ViewChild(DaterangepickerDirective, { static: true }) pickerDirective: DaterangepickerDirective;
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  inlineDate: ChosenDate;
  picker: DaterangepickerComponent;
  startDate = dayjs().utc(true).subtract(5, 'days');
  endDate = dayjs().utc(true).subtract(4, 'days');
  maxDate = dayjs().utc(true).subtract(1, 'days');

  constructor() {
    this.selected = {
      startDate: dayjs('2015-11-18T00:00Z'),
      endDate: dayjs('2015-11-26T00:00Z'),
    };
  }

  ngOnInit(): void {
    this.picker = this.pickerDirective.picker;
  }

  ngModelChange(e: Event): void {
    // eslint-disable-next-line no-console
    console.log({ ['ngModelChange()']: e });
  }

  change(e: TimePeriod | null): void {
    // eslint-disable-next-line no-console
    console.log({ ['change()']: e });
  }

  chosenDate(e: ChosenDate): void {
    this.inlineDate = e;
  }

  chosenDateTime(e: ChosenDate): void {
    this.selected = e;
  }

  open(e: MouseEvent): void {
    this.pickerDirective.open(e);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear(e: MouseEvent): void {
    // this.picker.clear(); // we can do
    this.selected = null; // now we can do
  }

  increaseDate(): void {
    this.selected.endDate = this.selected.endDate.clone().add(1, 'day');
  }

  increaseTime(): void {
    this.selected.endDate = this.selected.endDate.clone().add(1, 'hour');
  }
}
