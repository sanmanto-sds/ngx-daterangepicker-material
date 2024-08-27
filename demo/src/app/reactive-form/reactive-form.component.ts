import { Component } from '@angular/core';
import dayjs from 'dayjs/esm';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  LocaleConfig,
  NgxDaterangepickerMd,
} from '../../../../src/daterangepicker/public-api';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgClass } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    ReactiveFormsModule,
    NgClass,
    NgxDaterangepickerMd,
  ],
})
export class ReactiveFormComponent {
  form: FormGroup;
  form2: FormGroup;
  locale: LocaleConfig = {
    format: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    displayFormat: 'YYYY-MM-DD',
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selected: [
        {
          startDate: dayjs('2015-11-24T00:00Z'),
          endDate: dayjs('2015-11-26T00:00Z'),
        },
        Validators.required,
      ],
    });

    this.form2 = this.fb.group({
      selected: [
        {
          startDate: '2019-12-11T18:30:00.000Z',
          endDate: '2019-12-12T18:29:59.000Z',
        },
        Validators.required,
      ],
    });
  }

  submit(): void {
    // eslint-disable-next-line no-console
    console.log(this.form.value);
  }

  submit2(): void {
    // eslint-disable-next-line no-console
    console.log(this.form2.value);
  }

  toggleDisable(form: FormGroup): void {
    if (form.disabled) {
      form.enable();
    } else {
      form.disable();
    }
  }
}
