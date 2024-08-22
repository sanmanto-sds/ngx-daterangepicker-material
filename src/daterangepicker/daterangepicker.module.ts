import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DaterangepickerComponent } from './daterangepicker.component';
import { DaterangepickerDirective } from './daterangepicker.directive';
import { LocaleConfig, LOCALE_CONFIG, THEME_CONFIG, ThemeConfig } from './daterangepicker.config';
import { LocaleService } from './locale.service';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DaterangepickerComponent, DaterangepickerDirective],
  providers: [],
  exports: [DaterangepickerComponent, DaterangepickerDirective],
})
export class NgxDaterangepickerMd {
  constructor() {
  }

  static forRoot(config: LocaleConfig = {}, theme: ThemeConfig = {}): ModuleWithProviders<NgxDaterangepickerMd> {
    return {
      ngModule: NgxDaterangepickerMd,
      providers: [
        { provide: LOCALE_CONFIG, useValue: config },
        { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] },
        { provide: THEME_CONFIG, useValue: theme },
        { provide: ThemeService, useClass: ThemeService, deps: [THEME_CONFIG] },
      ],
    };
  }
}
