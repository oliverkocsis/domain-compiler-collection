import { DATA_CLASS_TEMPLATE } from './templates/data-class';
import { DATA_SERVICE_TEMPLATE } from './templates/data-service';
import { DATA_FORM_HTML_TEMPLATE } from './templates/data-form/data-form.html';
import { DATA_FORM_SCSS_TEMPLATE } from './templates/data-form/data-form.scss';
import { DATA_FORM_TS_TEMPLATE } from './templates/data-form/data-form.ts';
import { DATA_TABLE_HTML_TEMPLATE } from './templates/data-table/data-table.html';
import { DATA_TABLE_SCSS_TEMPLATE } from './templates/data-table/data-table.scss';
import { DATA_TABLE_TS_TEMPLATE } from './templates/data-table/data-table.ts';
import { DATA_COMPONENT_HTML_TEMPLATE } from './templates/data-component.html';
import { DATA_COMPONENT_SCSS_TEMPLATE } from './templates/data-component.scss';
import { DATA_COMPONENT_TS_TEMPLATE } from './templates/data-component.ts';
import { APP_COMPONENT_HTML_TEMPLATE } from './templates/app.component.html';
import { APP_COMPONENT_SCSS_TEMPLATE } from './templates/app.component.scss';
import { APP_COMPONENT_TS_TEMPLATE } from './templates/app.component.ts';
import { APP_ROUTING_TEMPLATE } from './templates/app-routing.module.ts';
import { APP_MODULE_TEMPLATE } from './templates/app.module.ts';

export class AngularTempate {

  static getClassTemplate(): string {
    return DATA_CLASS_TEMPLATE;
  }

  static getServiceTemplate(): string {
    return DATA_SERVICE_TEMPLATE;
  }

  public static getFormComponentHTMLTemplate(): string {
    return DATA_FORM_HTML_TEMPLATE;
  }

  public static getFormComponentSCSSTemplate(): string {
    return DATA_FORM_SCSS_TEMPLATE;
  }

  public static getFormComponentTSTemplate(): string {
    return DATA_FORM_TS_TEMPLATE;
  }

  public static getTableComponentHTMLTemplate(): string {
    return DATA_TABLE_HTML_TEMPLATE;
  }

  public static getTableComponentSCSSTemplate(): string {
    return DATA_TABLE_SCSS_TEMPLATE;
  }

  public static getTableComponentTSTemplate(): string {
    return DATA_TABLE_TS_TEMPLATE;
  }

  public static getComponentHTMLTemplate(): string {
    return DATA_COMPONENT_HTML_TEMPLATE;
  }

  public static getComponentSCSSTemplate(): string {
    return DATA_COMPONENT_SCSS_TEMPLATE;
  }

  public static getComponentTSTemplate(): string {
    return DATA_COMPONENT_TS_TEMPLATE;
  }

  public static getAppRoutingTemplate(): string {
    return APP_ROUTING_TEMPLATE;
  }

  public static getAppHTMLTemplate(): string {
    return APP_COMPONENT_HTML_TEMPLATE;
  }

  public static getAppSCSSTemplate(): string {
    return APP_COMPONENT_SCSS_TEMPLATE;
  }

  public static getAppTSTemplate(): string {
    return APP_COMPONENT_TS_TEMPLATE;
  }

  public static getAppModuleTemplate(): string {
    return APP_MODULE_TEMPLATE;
  }

}