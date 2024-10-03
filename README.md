# ngx-daterangepicker-material

> Angular 17+ Date range picker.

This `Angularl` plugin is compatible with Angular 17. It leverages `dayjs` to handle date manipulation and parsing. The base for this plugin was originally the [Bootstrap Date Range Picker](http://www.daterangepicker.com), but its dependencies on jQuery, Bootstrap and dayjs.js were removed.

---

## Versions

| Angular  | ngx-daterangepicker-material |
|----------|:----------------------------:|
| >=17.0.0 |            v1.x.x            |

---

## Installation

Install the plugin from npm:

`npm i @sanmanto-sds/ngx-daterangepicker-material` .

import **NgxDaterangepickerMd** in your module:

````typescript
...
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from '@sanmanto-sds/ngx-daterangepicker-material';
import { App } from './app';

@NgModule({
  imports: [
    FormsModule,
    NgxDaterangepickerMd.forRoot()
  ],
  declarations: [App],
  bootstrap: [App]
})

export class AppModule {
}
````

or add it in your app.config.ts file for standalone usage

````typescript
...
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxDaterangepickerMd } from '@sanmanto-sds/ngx-daterangepicker-material';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      NgxDaterangepickerMd.forRoot(),
    ]),
  ],
};

````

## Usage example

Html:

```html
<input type="text" ngxDaterangepickerMd [(ngModel)]="selected" class="form-control" />
```

Typescript:

````typescript
selected: {
  startDate: Dayjs, endDate
:
  Dayjs
}
;
````

### with some options:

Html:

```html
<input type="text" matInput
       ngxDaterangepickerMd
       [locale]="{applyLabel: 'ok', format: 'DD-MM-YYYY'}"
       startKey="start"
       endKey="end"
       [(ngModel)]="selected"
       name="daterange" />
```

Typescript:

````typescript
selected: {
  start: Dayjs,
    end
:
  Dayjs,
}
;
````

## Inline usage

You can use the component directly in your templates, which will set its `inline` mode to **true**, in which case the calendar won't hide after date/range selection. You can then use the events: `rangeClicked` or `datesUpdated` or `choosedDate` to get its selection state.

```html

<ngx-daterangepicker-material (choosedDate)="choosedDate($event)">
</ngx-daterangepicker-material>
```

## Available options

### Global locale

For setting the global locale, pass this object to NgxDaterangepickerMd.forRoot().

eg:

````typescript
@NgModule({
  imports: [
    FormsModule,
    NgxDaterangepickerMd.forRoot({
      separator: ' - ',
      applyLabel: 'Okay',
    })
  ],
  declarations: [App],
  bootstrap: [App]
})
````

or for standalone:

````typescript
...
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxDaterangepickerMd } from '@sanmanto-sds/ngx-daterangepicker-material';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      NgxDaterangepickerMd.forRoot({
        separator: ' - ',
        applyLabel: 'Okay',
      }),
    ]),
  ],
};
````

### Available locale options

| Option name       | Option type |
|-------------------|-------------|
| direction?        | string      |
| separator?        | string      |
| weekLabel?        | string      |
| applyLabel?       | string      |
| cancelLabel?      | string      |
| clearLabel?       | string      |
| customRangeLabel? | string      |
| ongoingLabel?     | string      |
| daysOfWeek?       | string[]    |
| monthNames?       | string[]    |
| firstDay?         | number      |
| format?           | string      |
| displayFormat?    | string      |
| locale?           | any         |

you can also use locale like an object in props:

````typescript
export class myComponent {
  locale = {
    format: 'MM/DD/YYYY', // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
    displayFormat: 'MM/DD/YYYY', // default is format value
    direction: 'ltr', // could be rtl
    weekLabel: 'W',
    separator: ' To ', // default is ' - '
    cancelLabel: 'Cancel', // detault is 'Cancel'
    applyLabel: 'Okay', // detault is 'Apply'
    clearLabel: 'Clear', // detault is 'Clear'
    customRangeLabel: 'Custom range',
    daysOfWeek: dayjs.weekdaysMin(),
    monthNames: dayjs.monthsShort(),
    firstDay: 1 // first day is monday
  }
}
````

## Theming

You can pass the theme object to NgxDaterangepickerMd.forRoot() for changing theme variables.

For example:

````typescript
@NgModule({
  imports: [
    FormsModule,
    NgxDaterangepickerMd.forRoot({}, {
      color: '#0a0a0a',
      bgColor: '#fafafa',
      width: '300px',
    }),
  ],
  declarations: [App],
  bootstrap: [App],
})
````

or for standalone:

````typescript
...
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxDaterangepickerMd } from '@sanmanto-sds/ngx-daterangepicker-material';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      NgxDaterangepickerMd.forRoot({}, {
        color: '#0a0a0a',
        bgColor: '#fafafa',
        width: '300px',
      }),
    ]),
  ],
};
````

### Available theme options

| Option                      | Type   | Default value          |
|-----------------------------|--------|------------------------|
| color?                      | string | 'inherit'              |
| bgColor?                    | string | '#FFFFFF'              |
| inRangeColor?               | string | '#5A5A5A'              |
| inRangeBorderColor?         | string | 'transparent'          |
| inRangeBgColor?             | string | '#FAFAFA'              |
| inRangeFontWeight?          | string | '600'                  |
| activeColor?                | string | '#FFFFFF'              |
| activeBgColor?              | string | '#151F6D'              |
| activeBorderColor?          | string | 'transparent'          |
| activeFontWeight?           | string | '600'                  |
| unselectedColor?            | string | 'rgba(90, 90, 90, .5)' |
| unselectedBgColor?          | string | 'transparent'          |
| unselectedBorderColor?      | string | '#FFFFFF'              |
| width?                      | string | '278px'                |
| widthDouble?                | string | 'auto'                 |
| borderColor?                | string | '#CCCCCC'              |
| calendarMargin?             | string | '12px'                 |
| calendarBgColor?            | string | '#FFFFFF'              |
| calendarBorderSize?         | string | '1px'                  |
| calendarBorderColor?        | string | 'transparent'          |
| calendarBorderRadius?       | string | '4px'                  |
| cellColor?                  | string | '#5A5A5A'              |
| cellBorderColor?            | string | 'transparent'          |
| cellBgColor?                | string | '#FFFFFF'              |
| cellFontSize?               | string | '14px'                 |
| cellFontWeight?             | string | '400'                  |
| cellHoverColor?             | string | '#5A5A5A'              |
| cellHoverBorderColor?       | string | 'transparent'          |
| cellHoverBgColor?           | string | '#FAFAFA'              |
| cellHoverFontWeight?        | string | '600'                  |
| cellSize?                   | string | '32px'                 |
| cellWidth?                  | string | '32px'                 |
| cellHeight?                 | string | '32px'                 |
| cellBorderRadius?           | string | '4px'                  |
| cellBorderSize?             | string | '1px'                  |
| cellWeekdayNameColor?       | string | '#5A5A5A'              |
| cellWeekdayNameFontWeight?  | string | '700'                  |
| cellWeekdayNameFontSize?    | string | '12px'                 |
| controlHeight?              | string | '30px'                 |
| controlLineHeight?          | string | '30px'                 |
| controlColor?               | string | '#555'                 |
| controlBorderSize?          | string | '1px'                  |
| controlBorderColor?         | string | '#ccc'                 |
| controlBorderRadius?        | string | '4px'                  |
| controlActiveBorderSize?    | string | '1px'                  |
| controlActiveBorderColor?   | string | '#08c'                 |
| controlActiveBorderRadius?  | string | '4px'                  |
| controlDisabledColor?       | string | '#ccc'                 |
| selectBorder?               | string | '1px solid #E8E8E8'    |
| selectBackground?           | string | '#ffffff'              |
| selectPadding?              | string | '0 8px'                |
| selectRadius?               | string | '4px'                  |
| selectFontSize?             | string | '14px'                 |
| selectColor?                | string | '#000000'              |
| inputHeight?                | string | '#000000'              |
| separatorColor?             | string | '#E8E8E8'              |
| hoverCustomRangeBorderColor | string | '#BFBFBF'              |                     

## Props that can be passed to component

| Name                         | Type                                       | Default value          | Description                                                                                                                             |
|------------------------------|--------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| startDate                    | dayjs.Dayjs                                | dayjs().startOf('day') | Start date of range                                                                                                                     |
| endDate                      | dayjs.Dayjs                                | dayjs().endOf('day')   | End date of range                                                                                                                       |
| dateLimit                    | number                                     | -                      | Max date limit in range                                                                                                                 |
| autoApply                    | boolean                                    | false                  | Auto apply on range select                                                                                                              |
| singleDatePicker             | boolean                                    | false                  | Display only one calendar                                                                                                               |
| showDropdowns                | boolean                                    | false                  | Display selects for year and month                                                                                                      |
| showWeekNumbers              | boolean                                    | false                  | Display week numbers on calendar                                                                                                        |
| showISOWeekNumbers           | boolean                                    | false                  | Display week numbers on calendar in ISO format                                                                                          |
| linkedCalendars              | boolean                                    | false                  | When true, calendars display 2 month 1 by 1, when false, every calendar can show its own month                                          |
| autoUpdateInput              | boolean                                    | true                   | Automatically update chosen label, input and date                                                                                       |
| alwaysShowCalendars          | boolean                                    | false                  | Always show calendars                                                                                                                   |
| lockStartDate                | boolean                                    | false                  | Set to true if you want to lock start date and change only the end date                                                                 |
| timePicker                   | boolean                                    | false                  | Set to true if you want to display timepicker                                                                                           |
| timePicker24Hour             | boolean                                    | false                  | 24 hours for timepicker format                                                                                                          |
| timePickerIncrement          | number                                     | 1                      | Increment for timepicker                                                                                                                |
| timePickerSeconds            | boolean                                    | false                  | Show seconds on timepicker                                                                                                              |
| showClearButton              | boolean                                    | false                  | Show clear button                                                                                                                       |
| firstMonthDayClass           | string                                     | -                      | Class for element with first day of month                                                                                               |
| lastMonthDayClass            | string                                     | -                      | Class for element with last day of month                                                                                                |
| emptyWeekRowClass            | string                                     | -                      | Class for empty week row                                                                                                                |
| emptyWeekColumnClass         | string                                     | -                      | Class for empty week column                                                                                                             |
| firstDayOfNextMonthClass     | string                                     | -                      | Class for element with first day of next month                                                                                          |
| lastDayOfPreviousMonthClass  | string                                     | -                      | Class for element with last day of prev month                                                                                           |
| lastDayOfPreviousMonthClass  | string                                     | -                      | Class for element with last day of prev month                                                                                           |
| keepCalendarOpeningWithRange | boolean                                    | false                  | Set to true if you want the calendar won't be closed after choosing a range                                                             |
| showCustomRangeLabel         | boolean                                    | false                  | Show custom label for range                                                                                                             |
| showCancel                   | boolean                                    | false                  | Show cansel button                                                                                                                      |
| showRangeLabelOnInput        | boolean                                    | false                  | Set to true if you want to display the range label on input                                                                             |
| customRangeDirection         | boolean                                    | false                  | Set to true if you want to allow selection range from end date first                                                                    |
| rangeWithOngoingButton       | boolean                                    | false                  | Set to true if you want to display ongoing button in ranges                                                                             |
| drops                        | up, down                                   | -                      | Position the calendar to the up or down of the calendar                                                                                 |
| opens                        | 'left' \| 'center' \| 'right'              | -                      | Position the calendar from the input element                                                                                            |
| closeOnAutoApply             | boolean                                    | false                  | Close calendar when its automatically applied                                                                                           |
| minDate                      | dayjs.Dayjs \| string                      | -                      | Minimal enabled date                                                                                                                    |
| maxDate                      | dayjs.Dayjs \| string                      | -                      | Max enabled date                                                                                                                        |
| locale                       | LocaleConfig                               | -                      | Locale config                                                                                                                           |
| ranges                       | DateRanges                                 | {}                     | Ranges object                                                                                                                           |
| ongoing                      | boolean                                    | false                  | Ongoing value                                                                                                                           |
| isInvalidDate                | (date: Dayjs) => boolean                   | (date) => false        | function for checking is date invalid                                                                                                   |
| isCustomDate                 | (date: Dayjs) => boolean                   | (date) => false        | function for checking is date custom                                                                                                    |
| isTooltipDate                | (date: Dayjs) => boolean \| string \| null | (date) => false        | A function that is passed each date in the two calendars before they are displayed, and may return a text to be displayed as a tooltip. |

## Available events

| Event name       | Description                      |
|------------------|----------------------------------|
| choosedDate      | Fires when date is chosen        |
| rangeClicked     | Fires when range label clicked   |
| datesUpdated     | Fires when range is updated      |
| startDateChanged | Fires when start date changed    |
| endDateChanged   | Fires when end date changed      |
| cancelClicked    | Fires when cancel button clicked |
| clearClicked     | Fires when clear button clicked  |
| ongoingChange    | Fires when ongoing value changed |
| calendarShow     | Fires when calendar show         |
| calendarHide     | Fires when calendar hide         |

#### Open datepicker from outside

It is possible to open datepicker from outside. You should create an input with attached datepicker directive and a button with "ngx-daterangepicker-action" class (to prevent triggering of clickOutside).

```html
<input
  ngxDaterangepickerMd
  [closeOnAutoApply]="true"
  [autoApply]="true"
  [singleDatePicker]="true"
  [linkedCalendars]="true"
  [(ngModel)]="selected"
  (datesUpdated)="datesUpdated($event)"
  class="datepicker-calendar-icon">

<a class="ngx-daterangepicker-action" (click)="openDatepicker()">
  Open
</a>
```

```javascript

...
@ViewChild(DaterangepickerDirective, { static: false })
pickerDirective
:
DaterangepickerDirective;
...
...
openDatepicker()
{
  this.pickerDirective.open();
}
```

## Development

### Prepare your environment

Install local dependencies: `npm install`.

### Development server

Run `npm start` to start a development server on a port 4200.

Open `http//:localhost:4200` on your browser.

## [License](https://github.com/fetrarij/ngx-daterangepicker-material/blob/master/LICENSE)

MIT
