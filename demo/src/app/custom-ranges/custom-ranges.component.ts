import { Component } from '@angular/core';
import {
  DateRange,
  DaterangepickerComponent,
  DateRanges,
  TimePeriod,
} from '../../../../src/daterangepicker/daterangepicker.component';
import dayjs, { Dayjs } from 'dayjs/esm';
import { DaterangepickerDirective } from '../../../../src/daterangepicker';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JsonPipe } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-ranges',
  templateUrl: './custom-ranges.component.html',
  imports: [
    DaterangepickerDirective,
    FormsModule,
    MatToolbarModule,
    JsonPipe,
    DaterangepickerComponent,
  ],
  standalone: true,
})
export class CustomRangesComponent {
  selected: TimePeriod;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  maxDate: dayjs.Dayjs;
  minDate: dayjs.Dayjs;
  invalidDates: dayjs.Dayjs[] = [];
  tooltips = [
    { date: dayjs(), text: 'Today is just unselectable' },
    { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' },
  ];

  inlineDateTime: TimePeriod;
  ranges: DateRanges = {
    ['Today']: [dayjs().startOf('day'), dayjs().endOf('day')],
    ['Yesterday']: [dayjs().subtract(1, 'days').startOf('day'), dayjs().subtract(1, 'days').endOf('day')],
    ['Last 7 Days']: [dayjs().subtract(6, 'days').startOf('day'), dayjs().endOf('day')],
    ['Last 30 Days']: [dayjs().subtract(29, 'days').startOf('day'), dayjs().endOf('day')],
    ['This Month']: [dayjs().startOf('month'), dayjs().endOf('month')],
    ['Last Month']: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
    ['This Year']: [dayjs().startOf('year'), dayjs().endOf('year')],
    ['Last Year']: [dayjs().subtract(1, 'year').startOf('year'), dayjs().subtract(1, 'year').endOf('year')],
  };

  constructor() {
    this.maxDate = dayjs().add(2, 'weeks');
    this.minDate = dayjs().subtract(3, 'days');

    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    // this.selected = {
    //   startDate: dayjs().subtract(1, 'days').set('hours', 0).set('minutes', 0),
    //   endDate: dayjs().subtract(1, 'days').set('hours', 23).set('minutes', 59),
    // };
  }

  isInvalidDate = (m: dayjs.Dayjs): boolean => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  isTooltipDate = (m: Dayjs): string | boolean | null => {
    const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
    if (tooltip) {
      return tooltip.text;
    } else {
      return false;
    }
  };

  rangeClicked(range: DateRange): void {
    // eslint-disable-next-line no-console
    console.log('[rangeClicked] range is : ', range);
  }

  datesUpdated(range: TimePeriod): void {
    // eslint-disable-next-line no-console
    console.log('[datesUpdated] range is : ', range);
  }

  chosenDateTime(e: TimePeriod): void {
    this.inlineDateTime = e;
  }
}
