import { InjectionToken } from '@angular/core';
import dayjs from 'dayjs/esm';
import localeData from 'dayjs/esm/plugin/localeData';

dayjs.extend(localeData);

export const LOCALE_CONFIG = new InjectionToken<LocaleConfig>('daterangepicker.config');
export const THEME_CONFIG = new InjectionToken<ThemeConfig>('daterangepicker.config');

/**
 *  LocaleConfig Interface
 */
export interface LocaleConfig {
  direction?: string;
  separator?: string;
  weekLabel?: string;
  applyLabel?: string;
  cancelLabel?: string;
  clearLabel?: string;
  customRangeLabel?: string;
  ongoingLabel?: string;
  daysOfWeek?: string[];
  monthNames?: string[];
  firstDay?: number;
  format?: string;
  displayFormat?: string;
  locale?: any;
}

/**
 *  DefaultLocaleConfig
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DefaultLocaleConfig: LocaleConfig = {
  direction: 'ltr',
  separator: ' - ',
  weekLabel: 'W',
  applyLabel: 'Apply',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  customRangeLabel: 'Custom range',
  ongoingLabel: 'Ongoing',
  daysOfWeek: dayjs.weekdaysMin(),
  monthNames: dayjs.monthsShort(),
  firstDay: dayjs.localeData().firstDayOfWeek(),
};

/**
 * ThemeConfig Interface
 */
export interface ThemeConfig {
  color?: string;
  bgColor?: string;
  inRangeColor?: string;
  inRangeBorderColor?: string;
  inRangeBgColor?: string;
  inRangeFontWeight?: string;
  activeColor?: string;
  activeBgColor?: string;
  activeBorderColor?: string;
  activeFontWeight?: string,
  unselectedColor?: string;
  unselectedBgColor?: string;
  unselectedBorderColor?: string;
  width?: string;
  widthDouble?: string;
  borderColor?: string;
  calendarMargin?: string;
  calendarBgColor?: string;
  calendarBorderSize?: string;
  calendarBorderColor?: string;
  calendarBorderRadius?: string;
  cellColor?: string;
  cellBorderColor?: string;
  cellBgColor?: string;
  cellFontSize?: string,
  cellFontWeight?: string,
  cellHoverColor?: string;
  cellHoverBorderColor?: string;
  cellHoverBgColor?: string;
  cellHoverFontWeight?: string,
  cellSize?: string;
  cellWidth?: string;
  cellHeight?: string;
  cellBorderRadius?: string;
  cellBorderSize?: string;
  cellWeekdayNameColor?: string,
  cellWeekdayNameFontWeight?: string,
  cellWeekdayNameFontSize?: string,
  controlHeight?: string;
  controlLineHeight?: string;
  controlColor?: string;
  controlBorderSize?: string;
  controlBorderColor?: string;
  controlBorderRadius?: string;
  controlActiveBorderSize?: string;
  controlActiveBorderColor?: string;
  controlActiveBorderRadius?: string;
  controlDisabledColor?: string;
  selectBorder?: string;
  selectBackground?: string;
  selectPadding?: string;
  selectRadius?: string;
  selectFontSize?: string;
  selectColor?: string;
  inputHeight?: string;
  separatorColor?: string;
}

/**
 * Default Theme Config
 */
export const DefaultThemeConfig: ThemeConfig = {
  color: 'inherit',
  bgColor: '#fff',
  inRangeColor: '#5A5A5A',
  inRangeBorderColor: 'transparent',
  inRangeBgColor: '#FAFAFA',
  inRangeFontWeight: '600',
  activeColor: '#ffffff',
  activeBgColor: '#151F6D',
  activeBorderColor: 'transparent',
  activeFontWeight: '600',
  unselectedColor: 'rgba(90, 90, 90, .5)',
  unselectedBorderColor: 'transparent',
  unselectedBgColor: '#fff',
  width: '278px',
  widthDouble: 'auto',
  borderColor: '#ccc',
  calendarMargin: '12px',
  calendarBgColor: '#fff',
  calendarBorderSize: '1px',
  calendarBorderColor: 'transparent',
  calendarBorderRadius: '4px',
  cellSize: '32px',
  cellHeight: '32px',
  cellWidth: '32px',
  cellBorderRadius: '4px',
  cellBorderSize: '1px',
  cellColor: '#5A5A5A',
  cellBorderColor: 'transparent',
  cellBgColor: '#fff',
  cellFontSize: '14px',
  cellFontWeight: '400',
  cellHoverColor: '#5A5A5A',
  cellHoverBorderColor: 'trnsparent',
  cellHoverBgColor: '#FAFAFA',
  cellHoverFontWeight: '600',
  cellWeekdayNameColor: '#5A5A5A',
  cellWeekdayNameFontWeight: '700',
  cellWeekdayNameFontSize: '12px',
  controlHeight: '30px',
  controlLineHeight: '30px',
  controlColor: '#555',
  controlBorderSize: '1px',
  controlBorderColor: '#ccc',
  controlBorderRadius: '4px',
  controlActiveBorderSize: '1px',
  controlActiveBorderColor: '#08c',
  controlActiveBorderRadius: '4px',
  controlDisabledColor: '#ccc',
  selectBorder: '1px solid #E8E8E8',
  selectBackground: '#ffffff',
  selectPadding: '0 8px',
  selectRadius: '4px',
  selectFontSize: '14px',
  selectColor: '#000000',
  inputHeight: '32px',
  separatorColor: '#E8E8E8',
};
