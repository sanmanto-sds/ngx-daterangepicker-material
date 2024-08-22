import { Injectable, Inject, Renderer2, RendererFactory2, inject } from '@angular/core';
import { DefaultThemeConfig, THEME_CONFIG, ThemeConfig } from './daterangepicker.config';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ThemeService {
  private renderer!: Renderer2;
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);

  constructor(
    @Inject(THEME_CONFIG) private configHolder: ThemeConfig,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  get themeConfig() {
    if (!this.configHolder) {
      return DefaultThemeConfig;
    }
    return { ...DefaultThemeConfig, ...this.configHolder };
  }

  setThemeToElement(element: HTMLElement = this.document.documentElement) {
    Object.keys(this.themeConfig).forEach(item => {
      const variableName = `--datepicker-${item}`;
      const value = this.themeConfig[item];

      this.setCSSVariable(element, variableName, value);
    });
  }

  private setCSSVariable(element: HTMLElement, variableName: string, value: string): void {
    element.style.setProperty(variableName, value);
    this.renderer.setStyle(element, variableName, value);
  }

}
