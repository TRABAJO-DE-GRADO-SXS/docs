import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/app/components/date-picker-enhanced/date-picker-enhanced.component.ts
var date_picker_enhanced_component_exports = {};
__export(date_picker_enhanced_component_exports, {
  DatePickerEnhancedComponent: () => DatePickerEnhancedComponent
});
import { Component, EventEmitter, Output } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i0 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i1 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_datepicker.js?v=e170828d";
import * as i2 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import * as i3 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_button.js?v=e170828d";
import * as i4 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
import * as i5 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
var DatePickerEnhancedComponent;
var init_date_picker_enhanced_component = __esm({
  "src/app/components/date-picker-enhanced/date-picker-enhanced.component.ts"() {
    "use strict";
    DatePickerEnhancedComponent = class _DatePickerEnhancedComponent {
      selectedRangeDates = [];
      getData = new EventEmitter();
      maxDate = /* @__PURE__ */ new Date();
      onRangeChange(dates) {
        if (!dates || dates.length !== 2 || !dates[1]) {
          return;
        }
        const [start, end] = dates;
        this.getData.emit({ start, end });
      }
      clearRange() {
        this.selectedRangeDates = [];
        this.getData.emit({ start: void 0, end: void 0 });
      }
      static \u0275fac = function DatePickerEnhancedComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DatePickerEnhancedComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _DatePickerEnhancedComponent, selectors: [["app-date-picker-enhanced"]], outputs: { getData: "getData" }, standalone: false, decls: 3, vars: 2, consts: [[1, "flex", "justify-between", "items-center", "mb-2", "gap-1"], ["selectionMode", "range", "showIcon", "true", "placeholder", "Selecciona rango", 1, "w-48", 3, "ngModelChange", "ngModel", "maxDate"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "p-button-text", "p-2", "!text-gray-400", "hover:!bg-gray-100", 3, "click"]], template: function DatePickerEnhancedComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275elementStart(0, "div", 0)(1, "p-datePicker", 1);
          i0.\u0275\u0275twoWayListener("ngModelChange", function DatePickerEnhancedComponent_Template_p_datePicker_ngModelChange_1_listener($event) {
            i0.\u0275\u0275twoWayBindingSet(ctx.selectedRangeDates, $event) || (ctx.selectedRangeDates = $event);
            return $event;
          });
          i0.\u0275\u0275listener("ngModelChange", function DatePickerEnhancedComponent_Template_p_datePicker_ngModelChange_1_listener($event) {
            return ctx.onRangeChange($event);
          });
          i0.\u0275\u0275elementEnd();
          i0.\u0275\u0275elementStart(2, "button", 2);
          i0.\u0275\u0275listener("click", function DatePickerEnhancedComponent_Template_button_click_2_listener() {
            return ctx.clearRange();
          });
          i0.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i0.\u0275\u0275advance();
          i0.\u0275\u0275twoWayProperty("ngModel", ctx.selectedRangeDates);
          i0.\u0275\u0275property("maxDate", ctx.maxDate);
        }
      }, dependencies: [i1.DatePicker, i2.Header, i2.Footer, i2.PrimeTemplate, i3.ButtonDirective, i3.Button, i3.ButtonLabel, i3.ButtonIcon, i4.\u0275NgNoValidate, i4.NgSelectOption, i4.\u0275NgSelectMultipleOption, i4.DefaultValueAccessor, i4.NumberValueAccessor, i4.RangeValueAccessor, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.SelectMultipleControlValueAccessor, i4.RadioControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i4.PatternValidator, i4.CheckboxRequiredValidator, i4.EmailValidator, i4.MinValidator, i4.MaxValidator, i4.NgModel, i4.NgModelGroup, i4.NgForm, i5.NgClass, i5.NgComponentOutlet, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i5.NgStyle, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i5.NgPlural, i5.NgPluralCase, i5.AsyncPipe, i5.UpperCasePipe, i5.LowerCasePipe, i5.JsonPipe, i5.SlicePipe, i5.DecimalPipe, i5.PercentPipe, i5.TitleCasePipe, i5.CurrencyPipe, i5.DatePipe, i5.I18nPluralPipe, i5.I18nSelectPipe, i5.KeyValuePipe], encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(DatePickerEnhancedComponent, [{
        type: Component,
        args: [{ selector: "app-date-picker-enhanced", standalone: false, template: '<div class="flex justify-between items-center mb-2 gap-1">\r\n  <p-datePicker [(ngModel)]="selectedRangeDates" (ngModelChange)="onRangeChange($event)" selectionMode="range" [maxDate]="maxDate" showIcon="true" placeholder="Selecciona rango" class="w-48">\r\n  </p-datePicker>\r\n  <button pButton type="button" icon="pi pi-times" class="p-button-text p-2 !text-gray-400 hover:!bg-gray-100" (click)="clearRange()"></button>\r\n</div>' }]
      }], null, { getData: [{
        type: Output
      }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(DatePickerEnhancedComponent, { className: "DatePickerEnhancedComponent", filePath: "src/app/components/date-picker-enhanced/date-picker-enhanced.component.ts", lineNumber: 14 });
    })();
    (() => {
      const id = "src%2Fapp%2Fcomponents%2Fdate-picker-enhanced%2Fdate-picker-enhanced.component.ts%40DatePickerEnhancedComponent";
      function DatePickerEnhancedComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(DatePickerEnhancedComponent, m.default, [i0, i1, i2, i3, i4, i5], [Component, Output], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && DatePickerEnhancedComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DatePickerEnhancedComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/components/components.module.ts
import { NgModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { CommonModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import { FormsModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
import { ButtonModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_button.js?v=e170828d";
import { DatePickerModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_datepicker.js?v=e170828d";
import * as i02 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var ComponentsModule;
var init_components_module = __esm({
  "src/app/components/components.module.ts"() {
    "use strict";
    init_date_picker_enhanced_component();
    ComponentsModule = class _ComponentsModule {
      static \u0275fac = function ComponentsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ComponentsModule)();
      };
      static \u0275mod = /* @__PURE__ */ i02.\u0275\u0275defineNgModule({ type: _ComponentsModule });
      static \u0275inj = /* @__PURE__ */ i02.\u0275\u0275defineInjector({ imports: [DatePickerModule, ButtonModule, FormsModule, CommonModule] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
          declarations: [DatePickerEnhancedComponent],
          imports: [DatePickerModule, ButtonModule, FormsModule, CommonModule],
          exports: [DatePickerEnhancedComponent]
        }]
      }], null, null);
    })();
  }
});

// environment/environment.ts
var environment;
var init_environment = __esm({
  "environment/environment.ts"() {
    "use strict";
    environment = {
      production: false,
      apiUrl: "http://localhost:3000/api/v1"
    };
  }
});

// src/services/api.service.ts
var api_service_exports = {};
__export(api_service_exports, {
  ApiService: () => ApiService
});
import { HttpHeaders } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import { Injectable } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i03 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i12 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
var ApiService;
var init_api_service = __esm({
  "src/services/api.service.ts"() {
    "use strict";
    init_environment();
    ApiService = class _ApiService {
      http;
      headers;
      prefixPath;
      constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
          "Content-Type": "application/json",
          Accept: "application/json"
        });
        this.prefixPath = environment.apiUrl;
      }
      //Método HTTP para obtener datos de la API.
      get(route = "/", parameters) {
        return this.http.get(`${this.prefixPath}${route}`, {
          headers: this.headers,
          params: parameters,
          responseType: "json"
        });
      }
      //Método HTTP para descargar un archivo XLSX desde la API.
      downloadExcel(route = "/", parameters) {
        const httpOpt = {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          }),
          params: parameters,
          responseType: "blob"
        };
        return this.http.get(`${this.prefixPath}${route}`, httpOpt);
      }
      static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ApiService)(i03.\u0275\u0275inject(i12.HttpClient));
      };
      static \u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(ApiService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{ type: i12.HttpClient }], null);
    })();
  }
});

// src/app/kpis/books-faculty/books-faculty.component.ts
var books_faculty_component_exports = {};
__export(books_faculty_component_exports, {
  BooksFacultyComponent: () => BooksFacultyComponent
});
import { Component as Component2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i04 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
function BooksFacultyComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "tr")(1, "th");
    i04.\u0275\u0275text(2, "Facultad");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(3, "th");
    i04.\u0275\u0275text(4, "Disponible");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(5, "th");
    i04.\u0275\u0275text(6, "No disponible");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(7, "th");
    i04.\u0275\u0275text(8, "Descartado");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(9, "th");
    i04.\u0275\u0275text(10, "Trasladado");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(11, "th", 7);
    i04.\u0275\u0275text(12, "Total");
    i04.\u0275\u0275elementEnd()();
  }
}
function BooksFacultyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "tr")(1, "td");
    i04.\u0275\u0275text(2);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(3, "td");
    i04.\u0275\u0275text(4);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(5, "td");
    i04.\u0275\u0275text(6);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(7, "td");
    i04.\u0275\u0275text(8);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(9, "td");
    i04.\u0275\u0275text(10);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(11, "td", 8);
    i04.\u0275\u0275text(12);
    i04.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", row_r1.facultyName, " ");
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", row_r1.availableBooks, " ");
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", row_r1.nonAvailableBooks, " ");
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", row_r1.discardedBooks, " ");
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", row_r1.movedBooks, " ");
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", row_r1.totalBooks, " ");
  }
}
var _c0, BooksFacultyComponent;
var init_books_faculty_component = __esm({
  "src/app/kpis/books-faculty/books-faculty.component.ts"() {
    "use strict";
    init_api_service();
    _c0 = () => ({ "min-width": "0" });
    BooksFacultyComponent = class _BooksFacultyComponent {
      api;
      booksByFaculty = [];
      booksData;
      constructor(api) {
        this.api = api;
      }
      ngOnInit() {
        this.getBooksPerFaculty();
      }
      // Chart options
      vertOptions = {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: "index",
            intersect: false,
            callbacks: {
              footer: (ctx) => {
                const isHorizontal = this.vertOptions.indexAxis === "y";
                const total = ctx.reduce((sum, itm) => sum + (isHorizontal ? itm.parsed.x : itm.parsed.y), 0);
                return `Total: ${total.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          x: { grid: { display: false }, stacked: true, ticks: { display: false } },
          y: {
            beginAtZero: true,
            stacked: true
          }
        }
      };
      //Getter para los datos de los préstamos por facultad
      getBooksPerFaculty(startDate, endDate) {
        this.api.get("/faculties/books/all").subscribe((res) => {
          this.booksByFaculty = res;
          this.updateChartData(res);
        });
      }
      updateChartData(books) {
        const labels = books.map((l) => l.facultyName);
        const nonAvailableBooks = books.map((l) => l.nonAvailableBooks);
        const discardedBooks = books.map((l) => l.discardedBooks);
        const movedBooks = books.map((l) => l.movedBooks);
        const availableBooks = books.map((l) => l.availableBooks);
        this.booksData = {
          labels,
          datasets: [
            {
              label: "Disponibles",
              data: availableBooks,
              backgroundColor: "#5882F8"
            },
            {
              label: "No disponibles",
              data: nonAvailableBooks,
              backgroundColor: "#000087"
            },
            {
              label: "Descartados",
              data: discardedBooks,
              backgroundColor: "#DF7D00"
            },
            {
              label: "Trasladados",
              data: movedBooks,
              backgroundColor: "#FFCD28"
            }
          ]
        };
      }
      static \u0275fac = function BooksFacultyComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BooksFacultyComponent)(i04.\u0275\u0275directiveInject(ApiService));
      };
      static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _BooksFacultyComponent, selectors: [["app-books-faculty"]], standalone: false, decls: 8, vars: 10, consts: [["cardBlock", "", 1, "p-4"], [1, "text-lg", "mb-2", "font-bold"], ["type", "bar", "height", "370", 1, "w-full", 3, "data", "options"], [1, "mt-4", "overflow-auto"], ["currentPageReportTemplate", "{first} a {last} de {totalRecords}", "scrollHeight", "flex", 1, "p-datatable-sm", "p-datatable-gridlines", "w-full", "table-auto", 3, "value", "rows", "paginator", "showCurrentPageReport", "scrollable", "autoLayout", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-right"], [1, "text-right", "text-purple-600"]], template: function BooksFacultyComponent_Template(rf, ctx) {
        if (rf & 1) {
          i04.\u0275\u0275elementStart(0, "p-card", 0)(1, "h3", 1);
          i04.\u0275\u0275text(2, "Cantidad de libros por facultad");
          i04.\u0275\u0275elementEnd();
          i04.\u0275\u0275element(3, "p-chart", 2);
          i04.\u0275\u0275elementStart(4, "div", 3)(5, "p-table", 4);
          i04.\u0275\u0275template(6, BooksFacultyComponent_ng_template_6_Template, 13, 0, "ng-template", 5)(7, BooksFacultyComponent_ng_template_7_Template, 13, 6, "ng-template", 6);
          i04.\u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          i04.\u0275\u0275advance(3);
          i04.\u0275\u0275property("data", ctx.booksData)("options", ctx.vertOptions);
          i04.\u0275\u0275advance(2);
          i04.\u0275\u0275property("value", ctx.booksByFaculty)("rows", 5)("paginator", true)("showCurrentPageReport", true)("scrollable", true)("autoLayout", true)("tableStyle", i04.\u0275\u0275pureFunction0(9, _c0));
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(BooksFacultyComponent, [{
        type: Component2,
        args: [{ standalone: false, selector: "app-books-faculty", template: `<p-card cardBlock class="p-4">\r
  <h3 class="text-lg mb-2 font-bold">Cantidad de libros por facultad</h3>\r
  <p-chart type="bar" [data]="booksData" [options]="vertOptions" class="w-full" height="370">\r
  </p-chart>\r
\r
  <div class="mt-4 overflow-auto">\r
    <p-table [value]="booksByFaculty" class="p-datatable-sm p-datatable-gridlines w-full table-auto" [rows]="5" [paginator]="true" [showCurrentPageReport]="true" currentPageReportTemplate="{first} a {last} de {totalRecords}" [scrollable]="true" scrollHeight="flex" [autoLayout]="true" [tableStyle]="{'min-width': '0'}">\r
\r
      <ng-template pTemplate="header">\r
        <tr>\r
          <th>Facultad</th>\r
          <th>Disponible</th>\r
          <th>No disponible</th>\r
          <th>Descartado</th>\r
          <th>Trasladado</th>\r
          <th class="text-right">Total</th>\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template pTemplate="body" let-row>\r
        <tr>\r
          <td>\r
            {{ row.facultyName }}\r
          </td>\r
          <td>\r
            {{ row.availableBooks }}\r
          </td>\r
          <td>\r
            {{ row.nonAvailableBooks }}\r
          </td>\r
          <td>\r
            {{ row.discardedBooks }}\r
          </td>\r
          <td>\r
            {{ row.movedBooks }}\r
          </td>\r
          <td class="text-right text-purple-600">\r
            {{ row.totalBooks }}\r
          </td>\r
        </tr>\r
      </ng-template>\r
\r
    </p-table>\r
  </div>\r
</p-card>` }]
      }], () => [{ type: ApiService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(BooksFacultyComponent, { className: "BooksFacultyComponent", filePath: "src/app/kpis/books-faculty/books-faculty.component.ts", lineNumber: 12 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Fbooks-faculty%2Fbooks-faculty.component.ts%40BooksFacultyComponent";
      function BooksFacultyComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(BooksFacultyComponent, m.default, [i04, api_service_exports], [Component2], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && BooksFacultyComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && BooksFacultyComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/loan-role/loan-role.component.ts
var loan_role_component_exports = {};
__export(loan_role_component_exports, {
  LoanRoleComponent: () => LoanRoleComponent
});
import { Component as Component3 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { HttpParams } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import * as i05 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i22 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
function LoanRoleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275element(0, "p-chart", 5);
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275propertyInterpolate("height", ctx_r0.loansByRole.length * 40);
    i05.\u0275\u0275property("data", ctx_r0.prestData)("options", ctx_r0.horiOptions);
  }
}
var LoanRoleComponent;
var init_loan_role_component = __esm({
  "src/app/kpis/loan-role/loan-role.component.ts"() {
    "use strict";
    init_api_service();
    LoanRoleComponent = class _LoanRoleComponent {
      api;
      msg;
      prestLabels = [];
      prestData;
      loansByRole = [];
      // Chart options
      vertOptions = {
        responsive: true,
        scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
      };
      horiOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { beginAtZero: true },
          y: { grid: { display: false } }
        }
      };
      barColors = [
        "#C084FC",
        "#D8B4FE",
        "#E9D5FF",
        "#F0ABFC",
        "#F9A8D4",
        "#E5E7EB",
        "#D1D5DB"
      ];
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getLoansByRole();
      }
      //Getter para los datos de los préstamos por facultad
      getLoansByRole(startDate, endDate) {
        let httpParams = new HttpParams();
        if (startDate) {
          httpParams = httpParams.set("startDate", startDate.toISOString().split("T")[0]);
        }
        if (endDate) {
          httpParams = httpParams.set("endDate", endDate.toISOString().split("T")[0]);
        }
        this.api.get("/roles/loans/all", httpParams).subscribe((res) => {
          this.loansByRole = res;
          this.updateChartData(res);
        }, (error) => {
          this.msg.add({
            severity: "error",
            summary: "Error",
            detail: error.error
          });
        });
      }
      updateChartData(loans) {
        const labels = loans.map((l) => l.t_tipousuario);
        const data = loans.map((l) => l.total_prestamos);
        const backgroundColor = loans.map((_, i) => this.barColors[i % this.barColors.length]);
        this.prestData = {
          labels,
          datasets: [{ data, backgroundColor }]
        };
      }
      static \u0275fac = function LoanRoleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LoanRoleComponent)(i05.\u0275\u0275directiveInject(ApiService), i05.\u0275\u0275directiveInject(i22.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _LoanRoleComponent, selectors: [["app-loan-role"]], standalone: false, decls: 7, vars: 3, consts: [[1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold"], [3, "getData"], [1, "overflow-y-auto"], ["type", "bar", 3, "data", "options", "height"]], template: function LoanRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1)(2, "h3", 2);
          i05.\u0275\u0275text(3, "Comparaci\xF3n de pr\xE9stamos por rol");
          i05.\u0275\u0275elementEnd();
          i05.\u0275\u0275elementStart(4, "app-date-picker-enhanced", 3);
          i05.\u0275\u0275listener("getData", function LoanRoleComponent_Template_app_date_picker_enhanced_getData_4_listener($event) {
            return ctx.getLoansByRole($event.start, $event.end);
          });
          i05.\u0275\u0275elementEnd()();
          i05.\u0275\u0275elementStart(5, "div", 4);
          i05.\u0275\u0275template(6, LoanRoleComponent_Conditional_6_Template, 1, 3, "p-chart", 5);
          i05.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i05.\u0275\u0275advance(5);
          i05.\u0275\u0275styleProp("max-height", 300, "px");
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.loansByRole.length > 0 ? 6 : -1);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(LoanRoleComponent, [{
        type: Component3,
        args: [{ standalone: false, selector: "app-loan-role", template: '<p-card class="p-4">\r\n  <div class="flex justify-between items-center mb-2">\r\n    <h3 class="text-lg font-bold">Comparaci\xF3n de pr\xE9stamos por rol</h3>\r\n    <app-date-picker-enhanced (getData)="getLoansByRole($event.start, $event.end)"></app-date-picker-enhanced>\r\n  </div>\r\n  <div class="overflow-y-auto" [style.max-height.px]="300">\r\n    @if (loansByRole.length > 0) {\r\n    <p-chart type="bar" [data]="prestData" [options]="horiOptions" height="{{loansByRole.length * 40}}">\r\n    </p-chart>\r\n    }\r\n  </div>\r\n</p-card>' }]
      }], () => [{ type: ApiService }, { type: i22.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(LoanRoleComponent, { className: "LoanRoleComponent", filePath: "src/app/kpis/loan-role/loan-role.component.ts", lineNumber: 14 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Floan-role%2Floan-role.component.ts%40LoanRoleComponent";
      function LoanRoleComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(LoanRoleComponent, m.default, [i05, api_service_exports, i22], [Component3], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && LoanRoleComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoanRoleComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/loan-student/loan-student.component.ts
var loan_student_component_exports = {};
__export(loan_student_component_exports, {
  LoanStudentComponent: () => LoanStudentComponent
});
import { Component as Component4 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { HttpParams as HttpParams2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import * as i06 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i23 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
function LoanStudentComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275element(0, "p-chart", 5);
  }
  if (rf & 2) {
    const ctx_r0 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275propertyInterpolate("height", ctx_r0.loansByStudent.length * 40);
    i06.\u0275\u0275property("data", ctx_r0.prestData)("options", ctx_r0.horiOptions);
  }
}
var LoanStudentComponent;
var init_loan_student_component = __esm({
  "src/app/kpis/loan-student/loan-student.component.ts"() {
    "use strict";
    init_api_service();
    LoanStudentComponent = class _LoanStudentComponent {
      api;
      msg;
      prestLabels = [];
      prestData;
      loansByStudent = [];
      // Chart options
      vertOptions = {
        responsive: true,
        scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
      };
      horiOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: "index",
            callbacks: {
              /* first (bold) line */
              title: (ctx) => {
                const row = this.loansByStudent[Number(ctx[0].dataIndex)];
                return row.studentName;
              },
              /* remaining lines */
              label: (ctx) => {
                const row = this.loansByStudent[Number(ctx.dataIndex)];
                return [
                  `Pr\xE9stamos: ${row.totalLoans}`,
                  `Facultad: ${row.facultyName}`,
                  `Email: ${row.email}`,
                  `ID UPB: ${row.upbId}`
                ];
              }
            }
          }
        },
        scales: {
          x: { beginAtZero: true },
          y: { grid: { display: false } }
        }
      };
      barColors = [
        "#C084FC",
        "#D8B4FE",
        "#E9D5FF",
        "#F0ABFC",
        "#F9A8D4",
        "#E5E7EB",
        "#D1D5DB"
      ];
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getLoansByStudent();
      }
      //Getter para los datos de los préstamos por facultad
      getLoansByStudent(startDate, endDate) {
        let httpParams = new HttpParams2();
        if (startDate) {
          httpParams = httpParams.set("startDate", startDate.toISOString().split("T")[0]);
        }
        if (endDate) {
          httpParams = httpParams.set("endDate", endDate.toISOString().split("T")[0]);
        }
        this.api.get("/students/loans/all", httpParams).subscribe({
          next: (res) => {
            this.loansByStudent = res;
            this.updateChartData(res);
          },
          error: (error) => {
            this.msg.add({
              severity: "error",
              summary: "Error",
              detail: error.error
            });
          }
        });
      }
      updateChartData(loans) {
        const labels = loans.map((l) => l.studentName);
        const data = loans.map((l) => l.totalLoans);
        const backgroundColor = loans.map((_, i) => this.barColors[i % this.barColors.length]);
        this.prestData = {
          labels,
          datasets: [{ data, backgroundColor }]
        };
      }
      static \u0275fac = function LoanStudentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LoanStudentComponent)(i06.\u0275\u0275directiveInject(ApiService), i06.\u0275\u0275directiveInject(i23.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _LoanStudentComponent, selectors: [["app-loan-student"]], standalone: false, decls: 7, vars: 3, consts: [[1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold"], [3, "getData"], [1, "overflow-y-auto"], ["type", "bar", 3, "data", "options", "height"]], template: function LoanStudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          i06.\u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1)(2, "h3", 2);
          i06.\u0275\u0275text(3, "Comparaci\xF3n de pr\xE9stamos por estudiante");
          i06.\u0275\u0275elementEnd();
          i06.\u0275\u0275elementStart(4, "app-date-picker-enhanced", 3);
          i06.\u0275\u0275listener("getData", function LoanStudentComponent_Template_app_date_picker_enhanced_getData_4_listener($event) {
            return ctx.getLoansByStudent($event.start, $event.end);
          });
          i06.\u0275\u0275elementEnd()();
          i06.\u0275\u0275elementStart(5, "div", 4);
          i06.\u0275\u0275template(6, LoanStudentComponent_Conditional_6_Template, 1, 3, "p-chart", 5);
          i06.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i06.\u0275\u0275advance(5);
          i06.\u0275\u0275styleProp("max-height", 300, "px");
          i06.\u0275\u0275advance();
          i06.\u0275\u0275conditional(ctx.loansByStudent.length > 0 ? 6 : -1);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(LoanStudentComponent, [{
        type: Component4,
        args: [{ standalone: false, selector: "app-loan-student", template: '<p-card class="p-4">\r\n  <div class="flex justify-between items-center mb-2">\r\n    <h3 class="text-lg font-bold">Comparaci\xF3n de pr\xE9stamos por estudiante</h3>\r\n    <app-date-picker-enhanced (getData)="getLoansByStudent($event.start, $event.end)"></app-date-picker-enhanced>\r\n  </div>\r\n  <div class="overflow-y-auto" [style.max-height.px]="300">\r\n    @if (loansByStudent.length > 0) {\r\n    <p-chart type="bar" [data]="prestData" [options]="horiOptions" height="{{loansByStudent.length * 40}}">\r\n    </p-chart>\r\n    }\r\n  </div>\r\n</p-card>' }]
      }], () => [{ type: ApiService }, { type: i23.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(LoanStudentComponent, { className: "LoanStudentComponent", filePath: "src/app/kpis/loan-student/loan-student.component.ts", lineNumber: 14 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Floan-student%2Floan-student.component.ts%40LoanStudentComponent";
      function LoanStudentComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(LoanStudentComponent, m.default, [i06, api_service_exports, i23], [Component4], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && LoanStudentComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoanStudentComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/total-books/total-books.component.ts
var total_books_component_exports = {};
__export(total_books_component_exports, {
  TotalBooksComponent: () => TotalBooksComponent
});
import { Component as Component5, LOCALE_ID } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i07 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i24 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
function TotalBooksComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "p-card", 7)(1, "div", 8);
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(3, "div", 9);
    i07.\u0275\u0275text(4);
    i07.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    i07.\u0275\u0275styleMap(i07.\u0275\u0275pureFunction0(4, _c02));
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate1(" ", s_r1.statusName, " ");
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate1(" ", s_r1.amount, " ");
  }
}
function TotalBooksComponent_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "p", 6);
    i07.\u0275\u0275text(1, "No hay estados de libros.");
    i07.\u0275\u0275elementEnd();
  }
}
var _c02, _forTrack0, TotalBooksComponent;
var init_total_books_component = __esm({
  "src/app/kpis/total-books/total-books.component.ts"() {
    "use strict";
    init_api_service();
    _c02 = () => ({ "background-color": "#000087", "color": "#FFFFFF" });
    _forTrack0 = ($index, $item) => $item.statusName;
    TotalBooksComponent = class _TotalBooksComponent {
      api;
      msg;
      totalBooks;
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getTotalBooks();
      }
      getTotalBooks() {
        this.api.get("/totalbooks/total").subscribe((res) => {
          this.totalBooks = res;
        });
      }
      static \u0275fac = function TotalBooksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _TotalBooksComponent)(i07.\u0275\u0275directiveInject(ApiService), i07.\u0275\u0275directiveInject(i24.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _TotalBooksComponent, selectors: [["app-total-books"]], standalone: false, features: [i07.\u0275\u0275ProvidersFeature([{ provide: LOCALE_ID, useValue: "es-ES" }])], decls: 11, vars: 5, consts: [[1, "p-4"], [1, "text-lg", "mb-2", "font-bold"], [1, "flex", "items-center", "text-4xl", "font-normal"], [1, "pi", "pi-book", "ml-2", "text-5xl", "text-[#000087]"], [1, "grid", "grid-cols-2", "gap-2", "mt-4"], [1, "text-center", "py-2", 3, "style"], [1, "italic", "text-gray-500"], [1, "text-center", "py-2"], [1, "text-sm"], [1, "text-xl", "font-bold"]], template: function TotalBooksComponent_Template(rf, ctx) {
        if (rf & 1) {
          i07.\u0275\u0275elementStart(0, "p-card", 0)(1, "h2", 1);
          i07.\u0275\u0275text(2, "Cantidad de libros en total");
          i07.\u0275\u0275elementEnd();
          i07.\u0275\u0275elementStart(3, "div", 2);
          i07.\u0275\u0275text(4);
          i07.\u0275\u0275pipe(5, "number");
          i07.\u0275\u0275element(6, "i", 3);
          i07.\u0275\u0275elementEnd();
          i07.\u0275\u0275elementStart(7, "div", 4);
          i07.\u0275\u0275repeaterCreate(8, TotalBooksComponent_For_9_Template, 5, 5, "p-card", 5, _forTrack0, false, TotalBooksComponent_ForEmpty_10_Template, 2, 0, "p", 6);
          i07.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          let tmp_0_0;
          i07.\u0275\u0275advance(4);
          i07.\u0275\u0275textInterpolate1(" ", i07.\u0275\u0275pipeBind2(5, 2, (tmp_0_0 = ctx.totalBooks == null ? null : ctx.totalBooks.totalBooks) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : 0, "1.0-0"), " ");
          i07.\u0275\u0275advance(4);
          i07.\u0275\u0275repeater(ctx.totalBooks == null ? null : ctx.totalBooks.amountStatus);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(TotalBooksComponent, [{
        type: Component5,
        args: [{ standalone: false, selector: "app-total-books", providers: [{ provide: LOCALE_ID, useValue: "es-ES" }], template: `<!-- Total Books -->\r
<p-card class="p-4">\r
  <h2 class="text-lg mb-2 font-bold">Cantidad de libros en total</h2>\r
  <div class="flex items-center text-4xl font-normal">\r
    {{ totalBooks?.totalBooks ?? 0 | number:'1.0-0' }}\r
    <i class="pi pi-book ml-2 text-5xl text-[#000087]"></i>\r
  </div>\r
  <div class="grid grid-cols-2 gap-2 mt-4">\r
    @for (s of totalBooks?.amountStatus; track s.statusName) {\r
    <p-card class="text-center py-2" [style]="{ 'background-color': '#000087', 'color': '#FFFFFF' }">\r
      <div class="text-sm">\r
        {{ s.statusName }}\r
      </div>\r
      <div class="text-xl font-bold">\r
        {{ s.amount }}\r
      </div>\r
    </p-card>\r
    } @empty {\r
    <p class="italic text-gray-500">No hay estados de libros.</p>\r
    }\r
  </div>\r
</p-card>` }]
      }], () => [{ type: ApiService }, { type: i24.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(TotalBooksComponent, { className: "TotalBooksComponent", filePath: "src/app/kpis/total-books/total-books.component.ts", lineNumber: 13 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Ftotal-books%2Ftotal-books.component.ts%40TotalBooksComponent";
      function TotalBooksComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(TotalBooksComponent, m.default, [i07, api_service_exports, i24], [LOCALE_ID, Component5], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && TotalBooksComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && TotalBooksComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/genre/genre.component.ts
var genre_component_exports = {};
__export(genre_component_exports, {
  GenreComponent: () => GenreComponent
});
import { Component as Component6 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { HttpParams as HttpParams3 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import * as i08 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i25 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
function GenreComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275element(0, "p-chart", 5);
  }
  if (rf & 2) {
    const ctx_r0 = i08.\u0275\u0275nextContext();
    i08.\u0275\u0275property("data", ctx_r0.prestData)("options", ctx_r0.horiOptions);
  }
}
var GenreComponent;
var init_genre_component = __esm({
  "src/app/kpis/genre/genre.component.ts"() {
    "use strict";
    init_api_service();
    GenreComponent = class _GenreComponent {
      api;
      msg;
      prestLabels = [];
      prestData;
      genres = [];
      horiOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { beginAtZero: true },
          y: { grid: { display: false } }
        }
      };
      barColors = [
        "#C084FC",
        "#D8B4FE",
        "#E9D5FF",
        "#F0ABFC",
        "#F9A8D4",
        "#E5E7EB",
        "#D1D5DB"
      ];
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getGenres();
      }
      //Getter para los datos de los préstamos por facultad
      getGenres(startDate, endDate) {
        let httpParams = new HttpParams3();
        if (startDate) {
          httpParams = httpParams.set("startDate", startDate.toISOString().split("T")[0]);
        }
        if (endDate) {
          httpParams = httpParams.set("endDate", endDate.toISOString().split("T")[0]);
        }
        this.api.get("/genres/all", httpParams).subscribe({
          next: (res) => {
            this.genres = res;
            this.updateChartData(res);
          },
          error: (error) => {
            this.msg.add({
              severity: "error",
              summary: "Error",
              detail: error.error
            });
          }
        });
      }
      updateChartData(genres) {
        const labels = genres.map((l) => l.decimalDewey);
        const data = genres.map((l) => l.amount);
        const backgroundColor = genres.map((_, i) => this.barColors[i % this.barColors.length]);
        this.prestData = {
          labels,
          datasets: [{ data, backgroundColor }]
        };
      }
      static \u0275fac = function GenreComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _GenreComponent)(i08.\u0275\u0275directiveInject(ApiService), i08.\u0275\u0275directiveInject(i25.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _GenreComponent, selectors: [["app-genre"]], standalone: false, decls: 7, vars: 1, consts: [[1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold"], [3, "getData"], [1, "overflow-y-auto"], ["type", "radar", "height", "300", 3, "data", "options"]], template: function GenreComponent_Template(rf, ctx) {
        if (rf & 1) {
          i08.\u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1)(2, "h3", 2);
          i08.\u0275\u0275text(3, "G\xE9neros");
          i08.\u0275\u0275elementEnd();
          i08.\u0275\u0275elementStart(4, "app-date-picker-enhanced", 3);
          i08.\u0275\u0275listener("getData", function GenreComponent_Template_app_date_picker_enhanced_getData_4_listener($event) {
            return ctx.getGenres($event.start, $event.end);
          });
          i08.\u0275\u0275elementEnd()();
          i08.\u0275\u0275elementStart(5, "div", 4);
          i08.\u0275\u0275template(6, GenreComponent_Conditional_6_Template, 1, 2, "p-chart", 5);
          i08.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i08.\u0275\u0275advance(6);
          i08.\u0275\u0275conditional(ctx.genres.length > 0 ? 6 : -1);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(GenreComponent, [{
        type: Component6,
        args: [{ selector: "app-genre", standalone: false, template: '<p-card class="p-4">\r\n  <div class="flex justify-between items-center mb-2">\r\n    <h3 class="text-lg font-bold">G\xE9neros</h3>\r\n    <app-date-picker-enhanced (getData)="getGenres($event.start, $event.end)"></app-date-picker-enhanced>\r\n  </div>\r\n  <div class="overflow-y-auto">\r\n    @if (genres.length > 0) {\r\n    <p-chart type="radar" [data]="prestData" [options]="horiOptions" height="300">\r\n    </p-chart>\r\n    }\r\n  </div>\r\n</p-card>' }]
      }], () => [{ type: ApiService }, { type: i25.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(GenreComponent, { className: "GenreComponent", filePath: "src/app/kpis/genre/genre.component.ts", lineNumber: 14 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Fgenre%2Fgenre.component.ts%40GenreComponent";
      function GenreComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(GenreComponent, m.default, [i08, api_service_exports, i25], [Component6], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && GenreComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && GenreComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/services/loader.service.ts
import { Injectable as Injectable2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { BehaviorSubject } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/rxjs.js?v=e170828d";
import * as i09 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var LoaderService;
var init_loader_service = __esm({
  "src/services/loader.service.ts"() {
    "use strict";
    LoaderService = class _LoaderService {
      reqs = 0;
      _loading$ = new BehaviorSubject(false);
      loading$ = this._loading$.asObservable();
      show() {
        if (++this.reqs === 1)
          this._loading$.next(true);
      }
      hide() {
        if (this.reqs && --this.reqs === 0)
          this._loading$.next(false);
      }
      static \u0275fac = function LoaderService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LoaderService)();
      };
      static \u0275prov = /* @__PURE__ */ i09.\u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(LoaderService, [{
        type: Injectable2,
        args: [{ providedIn: "root" }]
      }], null, null);
    })();
  }
});

// src/directives/global-loader.directive.ts
var global_loader_directive_exports = {};
__export(global_loader_directive_exports, {
  GlobalLoaderDirective: () => GlobalLoaderDirective
});
import { Directive, Inject, PLATFORM_ID } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { isPlatformBrowser } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import { Skeleton } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_skeleton.js?v=e170828d";
import { ProgressSpinner } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_progressspinner.js?v=e170828d";
import * as i010 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var GlobalLoaderDirective;
var init_global_loader_directive = __esm({
  "src/directives/global-loader.directive.ts"() {
    "use strict";
    init_loader_service();
    GlobalLoaderDirective = class _GlobalLoaderDirective {
      host;
      vcr;
      injector;
      renderer;
      loader;
      platformId;
      loaderSub;
      skHost;
      spinnerRef;
      constructor(host, vcr, injector, renderer, loader, platformId) {
        this.host = host;
        this.vcr = vcr;
        this.injector = injector;
        this.renderer = renderer;
        this.loader = loader;
        this.platformId = platformId;
      }
      ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
          return;
        }
        const container = this.host.nativeElement;
        this.renderer.setStyle(container, "position", "relative");
        this.renderer.setStyle(container, "min-height", "100vh");
        const skRef = this.vcr.createComponent(Skeleton, {
          injector: this.injector
        });
        const skInst = skRef.instance;
        this.skHost = skRef.location.nativeElement;
        Object.assign(this.skHost.style, {
          position: "absolute",
          inset: "0",
          zIndex: "1000",
          display: "none"
        });
        skInst.width = "100%";
        skInst.height = "100%";
        skRef.changeDetectorRef.detectChanges();
        this.renderer.appendChild(container, this.skHost);
        this.spinnerRef = this.vcr.createComponent(ProgressSpinner, {
          injector: this.injector
        });
        const spinnerEl = this.spinnerRef.location.nativeElement;
        Object.assign(spinnerEl.style, {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        });
        this.renderer.appendChild(this.skHost, spinnerEl);
        this.loaderSub = this.loader.loading$.subscribe((loading) => {
          if (loading) {
            this.renderer.setStyle(this.skHost, "display", "block");
            Array.from(container.children).forEach((child) => {
              if (child !== this.skHost) {
                this.renderer.setStyle(child, "visibility", "hidden");
              }
            });
          } else {
            this.renderer.setStyle(this.skHost, "display", "none");
            Array.from(container.children).forEach((child) => {
              if (child !== this.skHost) {
                this.renderer.setStyle(child, "visibility", "visible");
              }
            });
          }
        });
      }
      ngOnDestroy() {
        this.loaderSub?.unsubscribe();
        this.spinnerRef?.destroy();
      }
      static \u0275fac = function GlobalLoaderDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _GlobalLoaderDirective)(i010.\u0275\u0275directiveInject(i010.ElementRef), i010.\u0275\u0275directiveInject(i010.ViewContainerRef), i010.\u0275\u0275directiveInject(i010.Injector), i010.\u0275\u0275directiveInject(i010.Renderer2), i010.\u0275\u0275directiveInject(LoaderService), i010.\u0275\u0275directiveInject(PLATFORM_ID));
      };
      static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({ type: _GlobalLoaderDirective, selectors: [["", "appGlobalLoader", ""]], standalone: false });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(GlobalLoaderDirective, [{
        type: Directive,
        args: [{
          selector: "[appGlobalLoader]",
          standalone: false
        }]
      }], () => [{ type: i010.ElementRef }, { type: i010.ViewContainerRef }, { type: i010.Injector }, { type: i010.Renderer2 }, { type: LoaderService }, { type: void 0, decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }] }], null);
    })();
  }
});

// src/app/kpis/book-lent-faculty/book-lent-faculty.component.ts
var book_lent_faculty_component_exports = {};
__export(book_lent_faculty_component_exports, {
  BookLentFacultyComponent: () => BookLentFacultyComponent
});
import { Component as Component7 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { HttpParams as HttpParams4 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import * as i011 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i26 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
function BookLentFacultyComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    i011.\u0275\u0275element(0, "p-chart", 7);
  }
  if (rf & 2) {
    const ctx_r0 = i011.\u0275\u0275nextContext();
    i011.\u0275\u0275property("data", ctx_r0.prestData)("options", ctx_r0.horiOptions);
  }
}
var BookLentFacultyComponent;
var init_book_lent_faculty_component = __esm({
  "src/app/kpis/book-lent-faculty/book-lent-faculty.component.ts"() {
    "use strict";
    init_api_service();
    BookLentFacultyComponent = class _BookLentFacultyComponent {
      api;
      msg;
      prestLabels = [];
      prestData;
      booksLentPerFaculty = [];
      faculties = [];
      selectedFaculty;
      startDate;
      endDate;
      // Chart options
      horiOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { left: 12, right: 24 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const row = this.booksLentPerFaculty[ctx.dataIndex];
                return [
                  `Pr\xE9stamos: ${row.loansAmount}`,
                  `Decimal Dewey: ${row.decimalDewey}`,
                  `Clave de autor: ${row.authorKey}`
                ];
              }
            }
          }
        },
        scales: {
          x: { beginAtZero: true, ticks: { display: false } },
          y: {
            grid: { display: false }
          }
        }
      };
      barColors = [
        "#C084FC",
        "#D8B4FE",
        "#E9D5FF",
        "#F0ABFC",
        "#F9A8D4",
        "#E5E7EB",
        "#D1D5DB"
      ];
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getAllFaculties();
        this.getBooksLentPerFaculty();
      }
      //Getter para los datos de los préstamos por facultad
      getBooksLentPerFaculty(startDate, endDate, facultyId) {
        let httpParams = new HttpParams4();
        if (startDate) {
          httpParams = httpParams.set("startDate", startDate.toISOString().split("T")[0]);
        }
        if (endDate) {
          httpParams = httpParams.set("endDate", endDate.toISOString().split("T")[0]);
        }
        if (facultyId) {
          httpParams = httpParams.set("facultyId", facultyId);
        }
        this.startDate = startDate;
        this.endDate = endDate;
        this.api.get("/faculties/loans/books/all", httpParams).subscribe({
          next: (res) => {
            this.booksLentPerFaculty = res;
            this.updateChartData(res);
          },
          error: (error) => {
            this.msg.add({
              severity: "error",
              summary: "Error",
              detail: error.error
            });
          }
        });
      }
      //Getter para las facultades
      getAllFaculties() {
        this.api.get("/faculties/all").subscribe({
          next: (res) => {
            this.faculties = res;
          },
          error: (error) => {
            this.msg.add({
              severity: "error",
              summary: "Error",
              detail: error.error
            });
          }
        });
      }
      updateChartData(booksLent) {
        const labels = booksLent.map((l) => l.bookName);
        const data = booksLent.map((l) => l.loansAmount);
        const backgroundColor = booksLent.map((_, i) => this.barColors[i % this.barColors.length]);
        this.prestData = {
          labels,
          datasets: [{ data, backgroundColor }]
        };
      }
      static \u0275fac = function BookLentFacultyComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BookLentFacultyComponent)(i011.\u0275\u0275directiveInject(ApiService), i011.\u0275\u0275directiveInject(i26.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i011.\u0275\u0275defineComponent({ type: _BookLentFacultyComponent, selectors: [["app-book-lent-faculty"]], standalone: false, decls: 9, vars: 5, consts: [[1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold"], [1, "flex", "flex-col", "gap-2"], ["optionValue", "facultyId", "optionLabel", "facultyName", "placeholder", "Selecciona una facultad", 1, "w-full", "md:w-56", 3, "ngModelChange", "onChange", "options", "ngModel", "checkmark", "showClear"], [3, "getData"], [1, "overflow-y-auto"], ["type", "line", "height", "300", 3, "data", "options"]], template: function BookLentFacultyComponent_Template(rf, ctx) {
        if (rf & 1) {
          i011.\u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1)(2, "h3", 2);
          i011.\u0275\u0275text(3, "Comparaci\xF3n de libros prestados por facultad");
          i011.\u0275\u0275elementEnd();
          i011.\u0275\u0275elementStart(4, "div", 3)(5, "p-select", 4);
          i011.\u0275\u0275twoWayListener("ngModelChange", function BookLentFacultyComponent_Template_p_select_ngModelChange_5_listener($event) {
            i011.\u0275\u0275twoWayBindingSet(ctx.selectedFaculty, $event) || (ctx.selectedFaculty = $event);
            return $event;
          });
          i011.\u0275\u0275listener("onChange", function BookLentFacultyComponent_Template_p_select_onChange_5_listener($event) {
            return ctx.getBooksLentPerFaculty(ctx.startDate, ctx.endDate, $event.value);
          });
          i011.\u0275\u0275elementEnd();
          i011.\u0275\u0275elementStart(6, "app-date-picker-enhanced", 5);
          i011.\u0275\u0275listener("getData", function BookLentFacultyComponent_Template_app_date_picker_enhanced_getData_6_listener($event) {
            return ctx.getBooksLentPerFaculty($event.start, $event.end, ctx.selectedFaculty == null ? null : ctx.selectedFaculty.facultyId);
          });
          i011.\u0275\u0275elementEnd()()();
          i011.\u0275\u0275elementStart(7, "div", 6);
          i011.\u0275\u0275template(8, BookLentFacultyComponent_Conditional_8_Template, 1, 2, "p-chart", 7);
          i011.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i011.\u0275\u0275advance(5);
          i011.\u0275\u0275property("options", ctx.faculties);
          i011.\u0275\u0275twoWayProperty("ngModel", ctx.selectedFaculty);
          i011.\u0275\u0275property("checkmark", true)("showClear", true);
          i011.\u0275\u0275advance(3);
          i011.\u0275\u0275conditional(ctx.booksLentPerFaculty.length > 0 ? 8 : -1);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(BookLentFacultyComponent, [{
        type: Component7,
        args: [{ selector: "app-book-lent-faculty", standalone: false, template: '<p-card class="p-4">\r\n  <div class="flex justify-between items-center mb-2">\r\n    <h3 class="text-lg font-bold">Comparaci\xF3n de libros prestados por facultad</h3>\r\n    <div class="flex flex-col gap-2">\r\n      <p-select [options]="faculties" [(ngModel)]="selectedFaculty" [checkmark]="true" optionValue="facultyId" optionLabel="facultyName" [showClear]="true" (onChange)="getBooksLentPerFaculty(startDate, endDate, $event.value)" placeholder="Selecciona una facultad" class="w-full md:w-56" />\r\n      <app-date-picker-enhanced (getData)="getBooksLentPerFaculty($event.start, $event.end, selectedFaculty?.facultyId)"></app-date-picker-enhanced>\r\n    </div>\r\n  </div>\r\n  <div class="overflow-y-auto">\r\n    @if (booksLentPerFaculty.length > 0) {\r\n    <p-chart type="line" [data]="prestData" [options]="horiOptions" height="300">\r\n    </p-chart>\r\n    }\r\n  </div>\r\n</p-card>' }]
      }], () => [{ type: ApiService }, { type: i26.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassDebugInfo(BookLentFacultyComponent, { className: "BookLentFacultyComponent", filePath: "src/app/kpis/book-lent-faculty/book-lent-faculty.component.ts", lineNumber: 15 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Fbook-lent-faculty%2Fbook-lent-faculty.component.ts%40BookLentFacultyComponent";
      function BookLentFacultyComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i011.\u0275\u0275replaceMetadata(BookLentFacultyComponent, m.default, [i011, api_service_exports, i26], [Component7], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && BookLentFacultyComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && BookLentFacultyComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/library-uses/library-uses.component.ts
var library_uses_component_exports = {};
__export(library_uses_component_exports, {
  LibraryUsesComponent: () => LibraryUsesComponent
});
import { Component as Component8 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { HttpParams as HttpParams5 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import * as i012 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i27 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
function LibraryUsesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i012.\u0275\u0275element(0, "p-chart", 5);
  }
  if (rf & 2) {
    const ctx_r0 = i012.\u0275\u0275nextContext();
    i012.\u0275\u0275property("data", ctx_r0.prestData)("options", ctx_r0.horiOptions);
  }
}
var LibraryUsesComponent;
var init_library_uses_component = __esm({
  "src/app/kpis/library-uses/library-uses.component.ts"() {
    "use strict";
    init_api_service();
    LibraryUsesComponent = class _LibraryUsesComponent {
      api;
      msg;
      prestLabels = [];
      prestData;
      libraryUses = [];
      startDate;
      endDate;
      // Chart options
      horiOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const row = this.libraryUses[ctx.dataIndex];
                return [
                  `Pr\xE9stamos: ${row.totalUses}`,
                  `Decimal Dewey: ${row.decimalDewey}`,
                  `Clave de autor: ${row.authorKey}`
                ];
              }
            }
          }
        },
        scales: {
          x: { beginAtZero: true, ticks: { display: false } },
          y: {
            grid: { display: false }
          }
        }
      };
      barColors = [
        "#C084FC",
        "#D8B4FE",
        "#E9D5FF",
        "#F0ABFC",
        "#F9A8D4",
        "#E5E7EB",
        "#D1D5DB"
      ];
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getLibraryUses();
      }
      //Getter para los datos de los préstamos por facultad
      getLibraryUses(startDate, endDate, facultyId) {
        let httpParams = new HttpParams5();
        if (startDate) {
          httpParams = httpParams.set("startDate", startDate.toISOString().split("T")[0]);
        }
        if (endDate) {
          httpParams = httpParams.set("endDate", endDate.toISOString().split("T")[0]);
        }
        if (facultyId) {
          httpParams = httpParams.set("facultyId", facultyId);
        }
        this.startDate = startDate;
        this.endDate = endDate;
        this.api.get("/library/uses/all", httpParams).subscribe({
          next: (res) => {
            this.libraryUses = res;
            this.updateChartData(res);
          },
          error: (error) => {
            this.msg.add({
              severity: "error",
              summary: "Error",
              detail: error.error
            });
          }
        });
      }
      updateChartData(libraryUses) {
        const labels = libraryUses.map((l) => l.title);
        const data = libraryUses.map((l) => l.totalUses);
        const backgroundColor = libraryUses.map((_, i) => this.barColors[i % this.barColors.length]);
        this.prestData = {
          labels,
          datasets: [{ data, backgroundColor }]
        };
      }
      static \u0275fac = function LibraryUsesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LibraryUsesComponent)(i012.\u0275\u0275directiveInject(ApiService), i012.\u0275\u0275directiveInject(i27.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i012.\u0275\u0275defineComponent({ type: _LibraryUsesComponent, selectors: [["app-library-uses"]], standalone: false, decls: 7, vars: 1, consts: [[1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold"], [3, "getData"], [1, "overflow-y-auto"], ["type", "bar", "height", "300", 3, "data", "options"]], template: function LibraryUsesComponent_Template(rf, ctx) {
        if (rf & 1) {
          i012.\u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1)(2, "h3", 2);
          i012.\u0275\u0275text(3, "Comparaci\xF3n de libros por uso en sala");
          i012.\u0275\u0275elementEnd();
          i012.\u0275\u0275elementStart(4, "app-date-picker-enhanced", 3);
          i012.\u0275\u0275listener("getData", function LibraryUsesComponent_Template_app_date_picker_enhanced_getData_4_listener($event) {
            return ctx.getLibraryUses($event.start, $event.end);
          });
          i012.\u0275\u0275elementEnd()();
          i012.\u0275\u0275elementStart(5, "div", 4);
          i012.\u0275\u0275template(6, LibraryUsesComponent_Conditional_6_Template, 1, 2, "p-chart", 5);
          i012.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i012.\u0275\u0275advance(6);
          i012.\u0275\u0275conditional(ctx.libraryUses.length > 0 ? 6 : -1);
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassMetadata(LibraryUsesComponent, [{
        type: Component8,
        args: [{ selector: "app-library-uses", standalone: false, template: '<p-card class="p-4">\r\n  <div class="flex justify-between items-center mb-2">\r\n    <h3 class="text-lg font-bold">Comparaci\xF3n de libros por uso en sala</h3>\r\n    <app-date-picker-enhanced (getData)="getLibraryUses($event.start, $event.end)"></app-date-picker-enhanced>\r\n  </div>\r\n  <div class="overflow-y-auto">\r\n    @if (libraryUses.length > 0) {\r\n    <p-chart type="bar" [data]="prestData" [options]="horiOptions" height="300">\r\n    </p-chart>\r\n    }\r\n  </div>\r\n</p-card>' }]
      }], () => [{ type: ApiService }, { type: i27.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(LibraryUsesComponent, { className: "LibraryUsesComponent", filePath: "src/app/kpis/library-uses/library-uses.component.ts", lineNumber: 14 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Flibrary-uses%2Flibrary-uses.component.ts%40LibraryUsesComponent";
      function LibraryUsesComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i012.\u0275\u0275replaceMetadata(LibraryUsesComponent, m.default, [i012, api_service_exports, i27], [Component8], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && LibraryUsesComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LibraryUsesComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/loan-faculty/loan-faculty.component.ts
var loan_faculty_component_exports = {};
__export(loan_faculty_component_exports, {
  LoanFacultyComponent: () => LoanFacultyComponent
});
import { Component as Component9 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { HttpParams as HttpParams6 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import * as i013 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i28 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import * as i32 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import * as i42 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import * as i52 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_table.js?v=e170828d";
import * as i6 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_scroller.js?v=e170828d";
import * as i7 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_chart.js?v=e170828d";
import * as i8 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
import * as i10 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_skeleton.js?v=e170828d";
import * as i11 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_select.js?v=e170828d";
function LoanFacultyComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i013.\u0275\u0275element(0, "p-chart", 5);
  }
  if (rf & 2) {
    const ctx_r0 = i013.\u0275\u0275nextContext();
    i013.\u0275\u0275propertyInterpolate("height", ctx_r0.loansByFaculty.length * 40);
    i013.\u0275\u0275property("data", ctx_r0.prestData)("options", ctx_r0.horiOptions);
  }
}
function LoanFacultyComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    i013.\u0275\u0275elementStart(0, "tr")(1, "th");
    i013.\u0275\u0275text(2, "Carrera");
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(3, "th", 10);
    i013.\u0275\u0275text(4, "Total");
    i013.\u0275\u0275elementEnd()();
  }
}
function LoanFacultyComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    i013.\u0275\u0275elementStart(0, "tr")(1, "td");
    i013.\u0275\u0275text(2);
    i013.\u0275\u0275elementEnd();
    i013.\u0275\u0275elementStart(3, "td", 11);
    i013.\u0275\u0275text(4);
    i013.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275textInterpolate1(" ", row_r2.facultyName, " ");
    i013.\u0275\u0275advance(2);
    i013.\u0275\u0275textInterpolate1(" ", row_r2.loansAmount, " ");
  }
}
var LoanFacultyComponent;
var init_loan_faculty_component = __esm({
  "src/app/kpis/loan-faculty/loan-faculty.component.ts"() {
    "use strict";
    init_api_service();
    init_date_picker_enhanced_component();
    init_books_faculty_component();
    init_loan_role_component();
    init_loan_student_component();
    init_total_books_component();
    init_genre_component();
    init_global_loader_directive();
    init_book_lent_faculty_component();
    init_library_uses_component();
    LoanFacultyComponent = class _LoanFacultyComponent {
      api;
      msg;
      prestLabels = [];
      prestData;
      loansByFaculty = [];
      selectedRangeDates = [];
      maxDate = /* @__PURE__ */ new Date();
      chartHeightPx = 0;
      // Chart options
      vertOptions = {
        responsive: true,
        scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
      };
      horiOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        // honour our fixed h px
        scales: {
          y: {
            ticks: {
              font: { size: 12 },
              autoSkip: false
              // show every label
            }
          },
          x: { beginAtZero: true }
        },
        plugins: { legend: { display: false } }
      };
      barColors = [
        "#C084FC",
        "#D8B4FE",
        "#E9D5FF",
        "#F0ABFC",
        "#F9A8D4",
        "#E5E7EB",
        "#D1D5DB"
      ];
      constructor(api, msg) {
        this.api = api;
        this.msg = msg;
      }
      ngOnInit() {
        this.getLoansByFaculty();
        const rows = this.loansByFaculty.length;
        this.chartHeightPx = rows * 20;
      }
      //Getter para los datos de los préstamos por facultad
      getLoansByFaculty(startDate, endDate) {
        let httpParams = new HttpParams6();
        if (startDate) {
          httpParams = httpParams.set("startDate", startDate.toISOString().split("T")[0]);
        }
        if (endDate) {
          httpParams = httpParams.set("endDate", endDate.toISOString().split("T")[0]);
        }
        this.api.get("/faculties/loans/all", httpParams).subscribe({
          next: (res) => {
            this.loansByFaculty = res;
            this.updateChartData(res);
          },
          error: (error) => {
            this.msg.add({
              severity: "error",
              summary: "Error",
              detail: error.error
            });
          }
        });
      }
      updateChartData(loans) {
        const data = loans.map((l) => l.loansAmount);
        const backgroundColor = loans.map((_, i) => this.barColors[i % this.barColors.length]);
        this.prestData = {
          labels: this.loansByFaculty.map((f) => this.wrapLabel(f.facultyName, 25)),
          datasets: [{ data, backgroundColor, barThickness: 20 }]
        };
      }
      wrapLabel(label, width = 20) {
        return label.length <= width ? label : RegExp(new RegExp(`.{1,${width}}`, "g")).exec(label).join("\n");
      }
      static \u0275fac = function LoanFacultyComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LoanFacultyComponent)(i013.\u0275\u0275directiveInject(ApiService), i013.\u0275\u0275directiveInject(i28.MessageService));
      };
      static \u0275cmp = /* @__PURE__ */ i013.\u0275\u0275defineComponent({ type: _LoanFacultyComponent, selectors: [["app-loan-faculty"]], standalone: false, decls: 11, vars: 8, consts: [[1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-lg", "font-bold"], [3, "getData"], [1, "overflow-y-auto"], ["type", "bar", 3, "data", "options", "height"], [1, "mt-4", "overflow-auto"], ["currentPageReportTemplate", "{first} a {last} de {totalRecords}", "scrollHeight", "flex", 1, "p-datatable-sm", "p-datatable-gridlines", 3, "value", "rows", "paginator", "showCurrentPageReport", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-right"], [1, "text-right", "text-purple-600"]], template: function LoanFacultyComponent_Template(rf, ctx) {
        if (rf & 1) {
          i013.\u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1)(2, "h3", 2);
          i013.\u0275\u0275text(3, "Comparaci\xF3n de pr\xE9stamos por facultad");
          i013.\u0275\u0275elementEnd();
          i013.\u0275\u0275elementStart(4, "app-date-picker-enhanced", 3);
          i013.\u0275\u0275listener("getData", function LoanFacultyComponent_Template_app_date_picker_enhanced_getData_4_listener($event) {
            return ctx.getLoansByFaculty($event.start, $event.end);
          });
          i013.\u0275\u0275elementEnd()();
          i013.\u0275\u0275elementStart(5, "div", 4);
          i013.\u0275\u0275template(6, LoanFacultyComponent_Conditional_6_Template, 1, 3, "p-chart", 5);
          i013.\u0275\u0275elementEnd();
          i013.\u0275\u0275elementStart(7, "div", 6)(8, "p-table", 7);
          i013.\u0275\u0275template(9, LoanFacultyComponent_ng_template_9_Template, 5, 0, "ng-template", 8)(10, LoanFacultyComponent_ng_template_10_Template, 5, 2, "ng-template", 9);
          i013.\u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          i013.\u0275\u0275advance(5);
          i013.\u0275\u0275styleProp("max-height", 450, "px");
          i013.\u0275\u0275advance();
          i013.\u0275\u0275conditional(ctx.loansByFaculty.length > 0 ? 6 : -1);
          i013.\u0275\u0275advance(2);
          i013.\u0275\u0275property("value", ctx.loansByFaculty)("rows", 5)("paginator", true)("showCurrentPageReport", true)("scrollable", true);
        }
      }, dependencies: [i32.NgClass, i32.NgComponentOutlet, i32.NgForOf, i32.NgIf, i32.NgTemplateOutlet, i32.NgStyle, i32.NgSwitch, i32.NgSwitchCase, i32.NgSwitchDefault, i32.NgPlural, i32.NgPluralCase, i42.Card, i28.Header, i28.Footer, i28.PrimeTemplate, i52.Table, i52.SortableColumn, i52.FrozenColumn, i52.RowGroupHeader, i52.SelectableRow, i52.RowToggler, i52.ContextMenuRow, i52.ResizableColumn, i52.ReorderableColumn, i52.EditableColumn, i52.CellEditor, i52.SortIcon, i52.TableRadioButton, i52.TableCheckbox, i52.TableHeaderCheckbox, i52.ReorderableRowHandle, i52.ReorderableRow, i52.SelectableRowDblClick, i52.EditableRow, i52.InitEditableRow, i52.SaveEditableRow, i52.CancelEditableRow, i52.ColumnFilter, i52.ColumnFilterFormElement, i6.Scroller, i7.UIChart, i8.\u0275NgNoValidate, i8.NgSelectOption, i8.\u0275NgSelectMultipleOption, i8.DefaultValueAccessor, i8.NumberValueAccessor, i8.RangeValueAccessor, i8.CheckboxControlValueAccessor, i8.SelectControlValueAccessor, i8.SelectMultipleControlValueAccessor, i8.RadioControlValueAccessor, i8.NgControlStatus, i8.NgControlStatusGroup, i8.RequiredValidator, i8.MinLengthValidator, i8.MaxLengthValidator, i8.PatternValidator, i8.CheckboxRequiredValidator, i8.EmailValidator, i8.MinValidator, i8.MaxValidator, i8.NgModel, i8.NgModelGroup, i8.NgForm, DatePickerEnhancedComponent, i10.Skeleton, i11.Select, BooksFacultyComponent, LoanRoleComponent, LoanStudentComponent, TotalBooksComponent, GenreComponent, GlobalLoaderDirective, BookLentFacultyComponent, LibraryUsesComponent, i32.AsyncPipe, i32.UpperCasePipe, i32.LowerCasePipe, i32.JsonPipe, i32.SlicePipe, i32.DecimalPipe, i32.PercentPipe, i32.TitleCasePipe, i32.CurrencyPipe, i32.DatePipe, i32.I18nPluralPipe, i32.I18nSelectPipe, i32.KeyValuePipe], encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassMetadata(LoanFacultyComponent, [{
        type: Component9,
        args: [{ standalone: false, selector: "app-loan-faculty", template: ' <p-card class="p-4">\r\n   <div class="flex justify-between items-center mb-2">\r\n     <h3 class="text-lg font-bold">Comparaci\xF3n de pr\xE9stamos por facultad</h3>\r\n     <app-date-picker-enhanced (getData)="getLoansByFaculty($event.start, $event.end)"></app-date-picker-enhanced>\r\n   </div>\r\n   <div class="overflow-y-auto" [style.max-height.px]="450">\r\n     @if (loansByFaculty.length > 0) {\r\n     <p-chart type="bar" [data]="prestData" [options]="horiOptions" height="{{loansByFaculty.length * 40}}">\r\n     </p-chart>\r\n     }\r\n   </div>\r\n\r\n   <div class="mt-4 overflow-auto">\r\n     <p-table [value]="loansByFaculty" class="p-datatable-sm p-datatable-gridlines" [rows]="5" [paginator]="true" [showCurrentPageReport]="true" currentPageReportTemplate="{first} a {last} de {totalRecords}" [scrollable]="true" scrollHeight="flex">\r\n\r\n       <ng-template pTemplate="header">\r\n         <tr>\r\n           <th>Carrera</th>\r\n           <th class="text-right">Total</th>\r\n         </tr>\r\n       </ng-template>\r\n\r\n       <ng-template pTemplate="body" let-row>\r\n         <tr>\r\n           <td>\r\n             {{ row.facultyName }}\r\n           </td>\r\n           <td class="text-right text-purple-600">\r\n             {{ row.loansAmount }}\r\n           </td>\r\n         </tr>\r\n       </ng-template>\r\n\r\n     </p-table>\r\n   </div>\r\n </p-card>' }]
      }], () => [{ type: ApiService }, { type: i28.MessageService }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassDebugInfo(LoanFacultyComponent, { className: "LoanFacultyComponent", filePath: "src/app/kpis/loan-faculty/loan-faculty.component.ts", lineNumber: 14 });
    })();
    (() => {
      const id = "src%2Fapp%2Fkpis%2Floan-faculty%2Floan-faculty.component.ts%40LoanFacultyComponent";
      function LoanFacultyComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i013.\u0275\u0275replaceMetadata(LoanFacultyComponent, m.default, [i013, i32, i42, i28, i52, i6, i7, i8, date_picker_enhanced_component_exports, i10, i11, books_faculty_component_exports, loan_role_component_exports, loan_student_component_exports, total_books_component_exports, genre_component_exports, global_loader_directive_exports, book_lent_faculty_component_exports, library_uses_component_exports, api_service_exports], [Component9], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && LoanFacultyComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoanFacultyComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/kpis/kpis.module.ts
import { NgModule as NgModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { CommonModule as CommonModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import { CardModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import { TableModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_table.js?v=e170828d";
import { ChartModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_chart.js?v=e170828d";
import { FormsModule as FormsModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
import { SkeletonModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_skeleton.js?v=e170828d";
import { SelectModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_select.js?v=e170828d";
import * as i014 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i13 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import * as i29 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import * as i33 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import * as i43 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_table.js?v=e170828d";
import * as i53 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_scroller.js?v=e170828d";
import * as i62 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_chart.js?v=e170828d";
import * as i72 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
import * as i9 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_skeleton.js?v=e170828d";
import * as i102 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_select.js?v=e170828d";
var KpisModule;
var init_kpis_module = __esm({
  "src/app/kpis/kpis.module.ts"() {
    "use strict";
    init_components_module();
    init_loan_faculty_component();
    init_books_faculty_component();
    init_loan_role_component();
    init_loan_student_component();
    init_total_books_component();
    init_genre_component();
    init_global_loader_directive();
    init_book_lent_faculty_component();
    init_library_uses_component();
    init_date_picker_enhanced_component();
    KpisModule = class _KpisModule {
      static \u0275fac = function KpisModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _KpisModule)();
      };
      static \u0275mod = /* @__PURE__ */ i014.\u0275\u0275defineNgModule({ type: _KpisModule });
      static \u0275inj = /* @__PURE__ */ i014.\u0275\u0275defineInjector({ imports: [
        CommonModule2,
        CardModule,
        TableModule,
        ChartModule,
        FormsModule2,
        ComponentsModule,
        SkeletonModule,
        SelectModule
      ] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassMetadata(KpisModule, [{
        type: NgModule2,
        args: [{
          declarations: [
            LoanFacultyComponent,
            BooksFacultyComponent,
            LoanRoleComponent,
            LoanStudentComponent,
            TotalBooksComponent,
            GenreComponent,
            GlobalLoaderDirective,
            BookLentFacultyComponent,
            LibraryUsesComponent
          ],
          imports: [
            CommonModule2,
            CardModule,
            TableModule,
            ChartModule,
            FormsModule2,
            ComponentsModule,
            SkeletonModule,
            SelectModule
          ],
          exports: [
            LoanFacultyComponent,
            BooksFacultyComponent,
            LoanRoleComponent,
            LoanStudentComponent,
            TotalBooksComponent,
            GenreComponent,
            GlobalLoaderDirective,
            BookLentFacultyComponent,
            LibraryUsesComponent
          ]
        }]
      }], null, null);
    })();
    i014.\u0275\u0275setComponentScope(BooksFacultyComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      LoanRoleComponent,
      LoanStudentComponent,
      TotalBooksComponent,
      GenreComponent,
      GlobalLoaderDirective,
      BookLentFacultyComponent,
      LibraryUsesComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
    i014.\u0275\u0275setComponentScope(LoanRoleComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      BooksFacultyComponent,
      LoanStudentComponent,
      TotalBooksComponent,
      GenreComponent,
      GlobalLoaderDirective,
      BookLentFacultyComponent,
      LibraryUsesComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
    i014.\u0275\u0275setComponentScope(LoanStudentComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      BooksFacultyComponent,
      LoanRoleComponent,
      TotalBooksComponent,
      GenreComponent,
      GlobalLoaderDirective,
      BookLentFacultyComponent,
      LibraryUsesComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
    i014.\u0275\u0275setComponentScope(TotalBooksComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      BooksFacultyComponent,
      LoanRoleComponent,
      LoanStudentComponent,
      GenreComponent,
      GlobalLoaderDirective,
      BookLentFacultyComponent,
      LibraryUsesComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
    i014.\u0275\u0275setComponentScope(GenreComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      BooksFacultyComponent,
      LoanRoleComponent,
      LoanStudentComponent,
      TotalBooksComponent,
      GlobalLoaderDirective,
      BookLentFacultyComponent,
      LibraryUsesComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
    i014.\u0275\u0275setComponentScope(BookLentFacultyComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      BooksFacultyComponent,
      LoanRoleComponent,
      LoanStudentComponent,
      TotalBooksComponent,
      GenreComponent,
      GlobalLoaderDirective,
      LibraryUsesComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
    i014.\u0275\u0275setComponentScope(LibraryUsesComponent, [
      i13.NgClass,
      i13.NgComponentOutlet,
      i13.NgForOf,
      i13.NgIf,
      i13.NgTemplateOutlet,
      i13.NgStyle,
      i13.NgSwitch,
      i13.NgSwitchCase,
      i13.NgSwitchDefault,
      i13.NgPlural,
      i13.NgPluralCase,
      i29.Card,
      i33.Header,
      i33.Footer,
      i33.PrimeTemplate,
      i43.Table,
      i43.SortableColumn,
      i43.FrozenColumn,
      i43.RowGroupHeader,
      i43.SelectableRow,
      i43.RowToggler,
      i43.ContextMenuRow,
      i43.ResizableColumn,
      i43.ReorderableColumn,
      i43.EditableColumn,
      i43.CellEditor,
      i43.SortIcon,
      i43.TableRadioButton,
      i43.TableCheckbox,
      i43.TableHeaderCheckbox,
      i43.ReorderableRowHandle,
      i43.ReorderableRow,
      i43.SelectableRowDblClick,
      i43.EditableRow,
      i43.InitEditableRow,
      i43.SaveEditableRow,
      i43.CancelEditableRow,
      i43.ColumnFilter,
      i43.ColumnFilterFormElement,
      i53.Scroller,
      i62.UIChart,
      i72.\u0275NgNoValidate,
      i72.NgSelectOption,
      i72.\u0275NgSelectMultipleOption,
      i72.DefaultValueAccessor,
      i72.NumberValueAccessor,
      i72.RangeValueAccessor,
      i72.CheckboxControlValueAccessor,
      i72.SelectControlValueAccessor,
      i72.SelectMultipleControlValueAccessor,
      i72.RadioControlValueAccessor,
      i72.NgControlStatus,
      i72.NgControlStatusGroup,
      i72.RequiredValidator,
      i72.MinLengthValidator,
      i72.MaxLengthValidator,
      i72.PatternValidator,
      i72.CheckboxRequiredValidator,
      i72.EmailValidator,
      i72.MinValidator,
      i72.MaxValidator,
      i72.NgModel,
      i72.NgModelGroup,
      i72.NgForm,
      DatePickerEnhancedComponent,
      i9.Skeleton,
      i102.Select,
      LoanFacultyComponent,
      BooksFacultyComponent,
      LoanRoleComponent,
      LoanStudentComponent,
      TotalBooksComponent,
      GenreComponent,
      GlobalLoaderDirective,
      BookLentFacultyComponent
    ], [i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe]);
  }
});

// src/app/dashboard/dashboard.component.ts
import { CommonModule as CommonModule3 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import { Component as Component10 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { FormsModule as FormsModule3 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
import { SharedModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import { CardModule as CardModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import { SelectModule as SelectModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_select.js?v=e170828d";
import { ToolbarModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_toolbar.js?v=e170828d";
import * as i015 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i14 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_toolbar.js?v=e170828d";
import * as i210 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import * as i34 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import * as i44 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_select.js?v=e170828d";
import * as i54 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import * as i63 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_forms.js?v=e170828d";
var DashboardComponent;
var init_dashboard_component = __esm({
  "src/app/dashboard/dashboard.component.ts"() {
    "use strict";
    init_kpis_module();
    init_loan_faculty_component();
    init_books_faculty_component();
    init_loan_role_component();
    init_loan_student_component();
    init_total_books_component();
    init_genre_component();
    init_global_loader_directive();
    init_book_lent_faculty_component();
    init_library_uses_component();
    DashboardComponent = class _DashboardComponent {
      static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DashboardComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-main-page"]], decls: 17, vars: 0, consts: [[1, "p-6", "w-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-2", "w-full"], [1, "col-span-1", "md:col-span-2", "lg:col-span-3", "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "w-full"], [1, "grid", "grid-cols-1", "col-span-1", "justify-between", "gap-6", "w-full"], [1, "w-full"], [1, "col-span-2", "md:col-span-2", "lg:grid-cols-2", "gap-6"], [1, "col-span-1", "md:col-span-2", "lg:col-span-3", "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "flex", "flex-col", "justify-between", "gap-2"], [1, "col-span-1", "md:col-span-2", "lg:col-span-3", "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"]], template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          i015.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          i015.\u0275\u0275element(4, "app-total-books", 4)(5, "app-loan-role", 4);
          i015.\u0275\u0275elementEnd();
          i015.\u0275\u0275elementStart(6, "div", 5);
          i015.\u0275\u0275element(7, "app-books-faculty", 4);
          i015.\u0275\u0275elementEnd()();
          i015.\u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
          i015.\u0275\u0275element(10, "app-genre")(11, "app-book-lent-faculty");
          i015.\u0275\u0275elementEnd();
          i015.\u0275\u0275elementStart(12, "div", 5);
          i015.\u0275\u0275element(13, "app-loan-faculty", 4);
          i015.\u0275\u0275elementEnd()();
          i015.\u0275\u0275elementStart(14, "div", 8);
          i015.\u0275\u0275element(15, "app-library-uses", 4)(16, "app-loan-student", 4);
          i015.\u0275\u0275elementEnd()()();
        }
      }, dependencies: [
        ToolbarModule,
        i14.Toolbar,
        i210.Header,
        i210.Footer,
        i210.PrimeTemplate,
        SharedModule,
        CardModule2,
        i34.Card,
        SelectModule2,
        i44.Select,
        CommonModule3,
        i54.NgClass,
        i54.NgComponentOutlet,
        i54.NgForOf,
        i54.NgIf,
        i54.NgTemplateOutlet,
        i54.NgStyle,
        i54.NgSwitch,
        i54.NgSwitchCase,
        i54.NgSwitchDefault,
        i54.NgPlural,
        i54.NgPluralCase,
        i54.AsyncPipe,
        i54.UpperCasePipe,
        i54.LowerCasePipe,
        i54.JsonPipe,
        i54.SlicePipe,
        i54.DecimalPipe,
        i54.PercentPipe,
        i54.TitleCasePipe,
        i54.CurrencyPipe,
        i54.DatePipe,
        i54.I18nPluralPipe,
        i54.I18nSelectPipe,
        i54.KeyValuePipe,
        FormsModule3,
        i63.\u0275NgNoValidate,
        i63.NgSelectOption,
        i63.\u0275NgSelectMultipleOption,
        i63.DefaultValueAccessor,
        i63.NumberValueAccessor,
        i63.RangeValueAccessor,
        i63.CheckboxControlValueAccessor,
        i63.SelectControlValueAccessor,
        i63.SelectMultipleControlValueAccessor,
        i63.RadioControlValueAccessor,
        i63.NgControlStatus,
        i63.NgControlStatusGroup,
        i63.RequiredValidator,
        i63.MinLengthValidator,
        i63.MaxLengthValidator,
        i63.PatternValidator,
        i63.CheckboxRequiredValidator,
        i63.EmailValidator,
        i63.MinValidator,
        i63.MaxValidator,
        i63.NgModel,
        i63.NgModelGroup,
        i63.NgForm,
        KpisModule,
        LoanFacultyComponent,
        BooksFacultyComponent,
        LoanRoleComponent,
        LoanStudentComponent,
        TotalBooksComponent,
        GenreComponent,
        GlobalLoaderDirective,
        BookLentFacultyComponent,
        LibraryUsesComponent
      ], encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassMetadata(DashboardComponent, [{
        type: Component10,
        args: [{ selector: "app-main-page", standalone: true, imports: [
          ToolbarModule,
          SharedModule,
          CardModule2,
          SelectModule2,
          CommonModule3,
          FormsModule3,
          KpisModule
        ], template: '<div class="p-6 w-full">\r\n  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">\r\n    <div class="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">\r\n      <div class="grid grid-cols-1 col-span-1 justify-between gap-6 w-full">\r\n        <!-- CARD DE TOTAL DE LIBROS CON SUS ESTADOS -->\r\n        <app-total-books class="w-full"></app-total-books>\r\n\r\n        <!-- CARD DE PR\xC9STAMOS POR ROLES -->\r\n        <app-loan-role class="w-full"></app-loan-role>\r\n      </div>\r\n\r\n      <div class="col-span-2 md:col-span-2 lg:grid-cols-2 gap-6">\r\n        <!-- CARD DE CANTIDAD DE LIBROS POR FACULTAD -->\r\n        <app-books-faculty class="w-full"></app-books-faculty>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">\r\n      <div class="flex flex-col justify-between gap-2">\r\n        <!-- CARD DE G\xC9NEROS -->\r\n        <app-genre></app-genre>\r\n\r\n        <!-- CARD DE LIBROS PRESTADOS POR FACULTAD -->\r\n        <app-book-lent-faculty></app-book-lent-faculty>\r\n      </div>\r\n\r\n      <div class="col-span-2 md:col-span-2 lg:grid-cols-2 gap-6">\r\n        <!-- CARD DE COMPARACI\xD3N DE PR\xC9STAMOS POR FACULTAD -->\r\n        <app-loan-faculty class="w-full"></app-loan-faculty>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">\r\n      <app-library-uses class="w-full"></app-library-uses>\r\n      <app-loan-student class="w-full"></app-loan-student>\r\n    </div>\r\n  </div>\r\n</div>' }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 25 });
    })();
    (() => {
      const id = "src%2Fapp%2Fdashboard%2Fdashboard.component.ts%40DashboardComponent";
      function DashboardComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i015.\u0275\u0275replaceMetadata(DashboardComponent, m.default, [i015, i14, i210, i34, i44, i54, i63, loan_faculty_component_exports, books_faculty_component_exports, loan_role_component_exports, loan_student_component_exports, total_books_component_exports, genre_component_exports, global_loader_directive_exports, book_lent_faculty_component_exports, library_uses_component_exports], [ToolbarModule, SharedModule, CardModule2, SelectModule2, CommonModule3, FormsModule3, KpisModule, Component10], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && DashboardComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DashboardComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/analytics/analytics.component.ts
import { Component as Component11 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i016 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var AnalyticsComponent;
var init_analytics_component = __esm({
  "src/app/analytics/analytics.component.ts"() {
    "use strict";
    AnalyticsComponent = class _AnalyticsComponent {
      static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AnalyticsComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], decls: 2, vars: 0, template: function AnalyticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          i016.\u0275\u0275elementStart(0, "p");
          i016.\u0275\u0275text(1, "analytics works!");
          i016.\u0275\u0275elementEnd();
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassMetadata(AnalyticsComponent, [{
        type: Component11,
        args: [{ selector: "app-analytics", imports: [], template: "<p>analytics works!</p>\r\n" }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/analytics/analytics.component.ts", lineNumber: 9 });
    })();
    (() => {
      const id = "src%2Fapp%2Fanalytics%2Fanalytics.component.ts%40AnalyticsComponent";
      function AnalyticsComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i016.\u0275\u0275replaceMetadata(AnalyticsComponent, m.default, [i016], [Component11], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && AnalyticsComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AnalyticsComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/favorites/favorites.component.ts
import { Component as Component12 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i017 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var FavoritesComponent;
var init_favorites_component = __esm({
  "src/app/favorites/favorites.component.ts"() {
    "use strict";
    FavoritesComponent = class _FavoritesComponent {
      static \u0275fac = function FavoritesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FavoritesComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ i017.\u0275\u0275defineComponent({ type: _FavoritesComponent, selectors: [["app-favorites"]], decls: 2, vars: 0, template: function FavoritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          i017.\u0275\u0275elementStart(0, "p");
          i017.\u0275\u0275text(1, "favorites works!");
          i017.\u0275\u0275elementEnd();
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassMetadata(FavoritesComponent, [{
        type: Component12,
        args: [{ selector: "app-favorites", imports: [], template: "<p>favorites works!</p>\r\n" }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassDebugInfo(FavoritesComponent, { className: "FavoritesComponent", filePath: "src/app/favorites/favorites.component.ts", lineNumber: 9 });
    })();
    (() => {
      const id = "src%2Fapp%2Ffavorites%2Ffavorites.component.ts%40FavoritesComponent";
      function FavoritesComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i017.\u0275\u0275replaceMetadata(FavoritesComponent, m.default, [i017], [Component12], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && FavoritesComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && FavoritesComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/reports/reports.component.ts
import { Component as Component13 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i018 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var ReportsComponent;
var init_reports_component = __esm({
  "src/app/reports/reports.component.ts"() {
    "use strict";
    ReportsComponent = class _ReportsComponent {
      static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ReportsComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ i018.\u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 2, vars: 0, template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          i018.\u0275\u0275elementStart(0, "p");
          i018.\u0275\u0275text(1, "reports works!");
          i018.\u0275\u0275elementEnd();
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassMetadata(ReportsComponent, [{
        type: Component13,
        args: [{ selector: "app-reports", imports: [], template: "<p>reports works!</p>\r\n" }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/reports/reports.component.ts", lineNumber: 9 });
    })();
    (() => {
      const id = "src%2Fapp%2Freports%2Freports.component.ts%40ReportsComponent";
      function ReportsComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i018.\u0275\u0275replaceMetadata(ReportsComponent, m.default, [i018], [Component13], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && ReportsComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ReportsComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/home/home.component.ts
import { Component as Component14 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i019 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
var HomeComponent;
var init_home_component = __esm({
  "src/app/home/home.component.ts"() {
    "use strict";
    HomeComponent = class _HomeComponent {
      static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HomeComponent)();
      };
      static \u0275cmp = /* @__PURE__ */ i019.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          i019.\u0275\u0275elementStart(0, "p");
          i019.\u0275\u0275text(1, "home works!");
          i019.\u0275\u0275elementEnd();
        }
      }, encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassMetadata(HomeComponent, [{
        type: Component14,
        args: [{ selector: "app-home", imports: [], template: "<p>home works!</p>\r\n" }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 9 });
    })();
    (() => {
      const id = "src%2Fapp%2Fhome%2Fhome.component.ts%40HomeComponent";
      function HomeComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i019.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i019], [Component14], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HomeComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/app/app.routes.ts
var routes;
var init_app_routes = __esm({
  "src/app/app.routes.ts"() {
    "use strict";
    init_dashboard_component();
    init_analytics_component();
    init_favorites_component();
    init_reports_component();
    init_home_component();
    routes = [
      {
        path: "",
        component: HomeComponent,
        data: { title: "Inicio" }
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "Dashboard" }
      },
      // Main page
      {
        path: "analytics",
        component: AnalyticsComponent,
        data: { title: "Anal\xEDtica" }
      },
      {
        path: "favorites",
        component: FavoritesComponent,
        data: { title: "Gr\xE1ficas favoritas" }
      },
      {
        path: "reports",
        component: ReportsComponent,
        data: { title: "Reportes" }
      }
    ];
  }
});

// src/interceptors/loader.interceptor.ts
import { inject } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { finalize } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/rxjs.js?v=e170828d";
var loaderInterceptor;
var init_loader_interceptor = __esm({
  "src/interceptors/loader.interceptor.ts"() {
    "use strict";
    init_loader_service();
    loaderInterceptor = (req, next) => {
      const loader = inject(LoaderService);
      if (req.headers.has("x-skip-loader")) {
        return next(req.clone({ headers: req.headers.delete("x-skip-loader") }));
      }
      loader.show();
      return next(req).pipe(finalize(() => loader.hide()));
    };
  }
});

// src/app/app.config.ts
import { importProvidersFrom, LOCALE_ID as LOCALE_ID2, provideZoneChangeDetection } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { provideRouter } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_router.js?v=e170828d";
import { BrowserModule, provideClientHydration, withEventReplay } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_platform-browser.js?v=e170828d";
import { CommonModule as CommonModule4 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import { ToolbarModule as ToolbarModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_toolbar.js?v=e170828d";
import { CardModule as CardModule3 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import { ChartModule as ChartModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_chart.js?v=e170828d";
import { DropdownModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_dropdown.js?v=e170828d";
import { providePrimeNG } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_config.js?v=e170828d";
import Aura from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@primeng_themes_aura.js?v=e170828d";
import { provideHttpClient, withInterceptors } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_http.js?v=e170828d";
import { BrowserAnimationsModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_platform-browser_animations.js?v=e170828d";
import { MessageService as MessageService8 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
var appConfig;
var init_app_config = __esm({
  "src/app/app.config.ts"() {
    "use strict";
    init_app_routes();
    init_loader_interceptor();
    init_global_loader_directive();
    appConfig = {
      providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(withInterceptors([loaderInterceptor])),
        provideClientHydration(withEventReplay()),
        importProvidersFrom(BrowserModule, CommonModule4, ToolbarModule2, CardModule3, ChartModule2, DropdownModule, BrowserAnimationsModule, GlobalLoaderDirective),
        providePrimeNG({
          theme: {
            preset: Aura
          }
        }),
        { provide: LOCALE_ID2, useValue: "es-ES" },
        MessageService8
      ]
    };
  }
});

// src/app/app.component.ts
import { Component as Component15, effect, signal } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import { NavigationEnd, RouterModule, RouterOutlet } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_router.js?v=e170828d";
import { SharedModule as SharedModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import { CardModule as CardModule4 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import { DropdownModule as DropdownModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_dropdown.js?v=e170828d";
import { ToolbarModule as ToolbarModule3 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_toolbar.js?v=e170828d";
import { MenuModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_menu.js?v=e170828d";
import { BadgeModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_badge.js?v=e170828d";
import { RippleModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_ripple.js?v=e170828d";
import { AvatarModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_avatar.js?v=e170828d";
import { CommonModule as CommonModule5 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import { DrawerModule } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_drawer.js?v=e170828d";
import { ButtonModule as ButtonModule2 } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_button.js?v=e170828d";
import { filter } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/rxjs.js?v=e170828d";
import * as i020 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_core.js?v=e170828d";
import * as i15 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_router.js?v=e170828d";
import * as i211 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_toolbar.js?v=e170828d";
import * as i35 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_api.js?v=e170828d";
import * as i45 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_card.js?v=e170828d";
import * as i55 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_dropdown.js?v=e170828d";
import * as i64 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_overlay.js?v=e170828d";
import * as i73 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_scroller.js?v=e170828d";
import * as i82 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_menu.js?v=e170828d";
import * as i92 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_avatar.js?v=e170828d";
import * as i103 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_ripple.js?v=e170828d";
import * as i112 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_badge.js?v=e170828d";
import * as i122 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import * as i132 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_drawer.js?v=e170828d";
import * as i142 from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/primeng_button.js?v=e170828d";
function AppComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    i020.\u0275\u0275elementStart(0, "a", 16);
    i020.\u0275\u0275element(1, "i");
    i020.\u0275\u0275elementStart(2, "span", 17);
    i020.\u0275\u0275text(3);
    i020.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i020.\u0275\u0275property("routerLink", item_r2.routerLink)("routerLinkActiveOptions", i020.\u0275\u0275pureFunction0(5, _c2));
    i020.\u0275\u0275advance();
    i020.\u0275\u0275classMap(item_r2.icon + " pi-lg");
    i020.\u0275\u0275advance(2);
    i020.\u0275\u0275textInterpolate1(" ", item_r2.label, "");
  }
}
var _c03, _c1, _c2, AppComponent;
var init_app_component = __esm({
  "src/app/app.component.ts"() {
    "use strict";
    _c03 = () => ({ width: "calc(100% - 15rem)" });
    _c1 = () => ({ width: "100%" });
    _c2 = () => ({ exact: true });
    AppComponent = class _AppComponent {
      router;
      ar;
      title = "dashboard-app";
      sidebarVisible = false;
      items = [
        { label: "Inicio", icon: "pi pi-home", routerLink: ["/"] },
        { label: "Dashboard", icon: "pi pi-chart-pie", routerLink: ["/dashboard"] },
        { label: "Reportes", icon: "pi pi-chart-line", routerLink: ["/reports"] },
        { label: "Anal\xEDtica", icon: "pi pi-chart-bar", routerLink: ["/analytics"] },
        {
          label: "Gr\xE1ficas favoritas",
          icon: "pi pi-heart-fill",
          routerLink: ["/favorites"]
        }
      ];
      pageTitle = signal("");
      constructor(router, ar) {
        this.router = router;
        this.ar = ar;
        effect(() => this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
          let r = this.ar;
          while (r.firstChild)
            r = r.firstChild;
          this.pageTitle.set(r.snapshot.data["title"] ?? "");
        }));
      }
      ngOnInit() {
      }
      toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
      }
      static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AppComponent)(i020.\u0275\u0275directiveInject(i15.Router), i020.\u0275\u0275directiveInject(i15.ActivatedRoute));
      };
      static \u0275cmp = /* @__PURE__ */ i020.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 22, vars: 9, consts: [["item", ""], [1, "h-screen", "relative"], [1, "fixed", "inset-y-0", "left-0", "w-60", "bg-[#000087]", "shadow-lg", "z-40", "transform", "transition-transform", "duration-300", "p-2", "flex", "flex-col", "border-r", "!border-gray-300"], [1, "p-4", "flex", "items-center", "justify-center"], ["src", "assets/upb_logo.svg", "alt", "UPB logo", 1, "h-7", "w-auto", "pr-2"], [1, "border-l", "border-white", "pl-2", "text-3xl", "font-semibold", "text-white"], ["styleClass", "w-full !border-none !bg-[#000087]", 1, "flex-1", "py-5", "z-20", 3, "model"], ["pButton", "", "pRipple", "", 1, "p-button", "!bg-white", "!border-white", "!text-[#000087]", "hover:!bg-[#000087]", "hover:!text-white", "flex", "items-center", "w-full", "p-4", "rounded-none", 3, "click"], ["image", "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png", "shape", "circle", 1, "mr-3"], [1, "text-left"], [1, "font-bold"], [1, "text-sm"], [1, "fixed", "top-0", "inset-x-0", "h-16", "bg-[#000087]", "shadow-xl", "flex", "items-center", "gap-4", "z-10", "transition-[padding-left]", "duration-300"], ["pButton", "", "icon", "pi pi-bars", "type", "button", 1, "w-10", "h-10", "rounded-full", "shadow-md", "flex", "items-center", "justify-center", "!text-[#000087]", "!bg-white", "!border-white", "hover:!bg-[#000087]", "hover:!border-white", "hover:!text-white", 3, "click"], [1, "text-2xl", "font-bold", "m-0", "text-white"], [1, "h-full", "transition-[margin,width]", "duration-300", "ml-auto", "py-10", 3, "ngStyle"], ["pRipple", "", "routerLinkActive", "bg-white !text-[#000087]", 1, "flex", "items-center", "p-2", "rounded", "text-white", "hover:bg-surface-200", "hover:!text-[#000087]", 3, "routerLink", "routerLinkActiveOptions"], [1, "ml-2"]], template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = i020.\u0275\u0275getCurrentView();
          i020.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
          i020.\u0275\u0275element(3, "img", 4);
          i020.\u0275\u0275elementStart(4, "span", 5);
          i020.\u0275\u0275text(5, " SABIB ");
          i020.\u0275\u0275elementEnd()();
          i020.\u0275\u0275elementStart(6, "p-menu", 6);
          i020.\u0275\u0275template(7, AppComponent_ng_template_7_Template, 4, 6, "ng-template", null, 0, i020.\u0275\u0275templateRefExtractor);
          i020.\u0275\u0275elementEnd();
          i020.\u0275\u0275elementStart(9, "button", 7);
          i020.\u0275\u0275listener("click", function AppComponent_Template_button_click_9_listener() {
            i020.\u0275\u0275restoreView(_r1);
            return i020.\u0275\u0275resetView(ctx.toggleSidebar());
          });
          i020.\u0275\u0275element(10, "p-avatar", 8);
          i020.\u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
          i020.\u0275\u0275text(13, "Yerika Russi");
          i020.\u0275\u0275elementEnd();
          i020.\u0275\u0275elementStart(14, "div", 11);
          i020.\u0275\u0275text(15, "Administradora");
          i020.\u0275\u0275elementEnd()()()();
          i020.\u0275\u0275elementStart(16, "header", 12)(17, "button", 13);
          i020.\u0275\u0275listener("click", function AppComponent_Template_button_click_17_listener() {
            i020.\u0275\u0275restoreView(_r1);
            return i020.\u0275\u0275resetView(ctx.toggleSidebar());
          });
          i020.\u0275\u0275elementEnd();
          i020.\u0275\u0275elementStart(18, "h1", 14);
          i020.\u0275\u0275text(19);
          i020.\u0275\u0275elementEnd()();
          i020.\u0275\u0275elementStart(20, "div", 15);
          i020.\u0275\u0275element(21, "router-outlet");
          i020.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i020.\u0275\u0275advance();
          i020.\u0275\u0275classProp("-translate-x-full", !ctx.sidebarVisible);
          i020.\u0275\u0275advance(5);
          i020.\u0275\u0275property("model", ctx.items);
          i020.\u0275\u0275advance(10);
          i020.\u0275\u0275styleProp("padding-left", ctx.sidebarVisible ? "16rem" : "1rem");
          i020.\u0275\u0275advance(3);
          i020.\u0275\u0275textInterpolate1(" ", ctx.pageTitle(), " ");
          i020.\u0275\u0275advance();
          i020.\u0275\u0275property("ngStyle", ctx.sidebarVisible ? i020.\u0275\u0275pureFunction0(7, _c03) : i020.\u0275\u0275pureFunction0(8, _c1));
        }
      }, dependencies: [
        RouterOutlet,
        RouterModule,
        i15.RouterLink,
        i15.RouterLinkActive,
        i15.\u0275EmptyOutletComponent,
        ToolbarModule3,
        i211.Toolbar,
        i35.Header,
        i35.Footer,
        i35.PrimeTemplate,
        SharedModule2,
        CardModule4,
        i45.Card,
        DropdownModule2,
        i55.Dropdown,
        i64.Overlay,
        i73.Scroller,
        MenuModule,
        i82.Menu,
        i82.SafeHtmlPipe,
        AvatarModule,
        i92.Avatar,
        RippleModule,
        i103.Ripple,
        BadgeModule,
        i112.Badge,
        i112.BadgeDirective,
        CommonModule5,
        i122.NgClass,
        i122.NgComponentOutlet,
        i122.NgForOf,
        i122.NgIf,
        i122.NgTemplateOutlet,
        i122.NgStyle,
        i122.NgSwitch,
        i122.NgSwitchCase,
        i122.NgSwitchDefault,
        i122.NgPlural,
        i122.NgPluralCase,
        i122.AsyncPipe,
        i122.UpperCasePipe,
        i122.LowerCasePipe,
        i122.JsonPipe,
        i122.SlicePipe,
        i122.DecimalPipe,
        i122.PercentPipe,
        i122.TitleCasePipe,
        i122.CurrencyPipe,
        i122.DatePipe,
        i122.I18nPluralPipe,
        i122.I18nSelectPipe,
        i122.KeyValuePipe,
        DrawerModule,
        i132.Drawer,
        ButtonModule2,
        i142.ButtonDirective,
        i142.Button,
        i142.ButtonLabel,
        i142.ButtonIcon
      ], encapsulation: 2 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassMetadata(AppComponent, [{
        type: Component15,
        args: [{ selector: "app-root", imports: [
          RouterOutlet,
          RouterModule,
          ToolbarModule3,
          SharedModule2,
          CardModule4,
          DropdownModule2,
          MenuModule,
          AvatarModule,
          RippleModule,
          BadgeModule,
          CommonModule5,
          DrawerModule,
          ButtonModule2
        ], standalone: true, template: `<div class="h-screen relative">\r
\r
  <div class="fixed inset-y-0 left-0 w-60 bg-[#000087] shadow-lg z-40\r
           transform transition-transform duration-300 p-2 flex flex-col border-r !border-gray-300" [class.-translate-x-full]="!sidebarVisible">\r
\r
    <!-- Logo -->\r
    <div class="p-4 flex items-center justify-center">\r
      <img src="assets/upb_logo.svg" alt="UPB logo" class="h-7 w-auto pr-2" />\r
      <span class="border-l border-white pl-2 text-3xl font-semibold text-white">\r
        SABIB\r
      </span>\r
    </div>\r
\r
    <!-- El men\xFA con las rutas -->\r
    <p-menu [model]="items" class="flex-1 py-5 z-20" styleClass="w-full !border-none !bg-[#000087]">\r
      <ng-template #item let-item>\r
        <a pRipple [routerLink]="item.routerLink" routerLinkActive="bg-white !text-[#000087]" [routerLinkActiveOptions]="{ exact: true }" class="flex items-center p-2 rounded text-white hover:bg-surface-200 hover:!text-[#000087]">\r
          <i [class]="item.icon + ' pi-lg'"></i>\r
          <span class="ml-2">\r
            {{ item.label }}</span>\r
        </a>\r
      </ng-template>\r
    </p-menu>\r
\r
    <!-- Card del usuario -->\r
    <button pButton pRipple class="p-button !bg-white !border-white !text-[#000087]\r
             hover:!bg-[#000087] hover:!text-white flex items-center w-full p-4 rounded-none" (click)="toggleSidebar()">\r
      <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" class="mr-3"></p-avatar>\r
      <div class="text-left">\r
        <div class="font-bold">Yerika Russi</div>\r
        <div class="text-sm">Administradora</div>\r
      </div>\r
    </button>\r
  </div>\r
\r
  <header class="fixed top-0 inset-x-0 h-16\r
           bg-[#000087] shadow-xl flex items-center gap-4 z-10\r
           transition-[padding-left] duration-300" [style.paddingLeft]="sidebarVisible ? '16rem' : '1rem'">\r
    <button pButton icon="pi pi-bars" type="button" (click)="toggleSidebar()" class="w-10 h-10 rounded-full shadow-md flex items-center justify-center\r
             !text-[#000087] !bg-white !border-white\r
             hover:!bg-[#000087] hover:!border-white hover:!text-white"></button>\r
\r
    <!-- Este es el t\xEDtulo de la p\xE1gina en la que se encuentra. Es din\xE1mico dependiendo de la data en el router -->\r
    <h1 class="text-2xl font-bold m-0 text-white">\r
      {{ pageTitle() }}\r
    </h1>\r
  </header>\r
\r
  <!-- P\xE1gina a renderizar -->\r
  <div class="h-full transition-[margin,width] duration-300 ml-auto py-10" [ngStyle]="sidebarVisible\r
      ? { width: 'calc(100% - 15rem)' }\r
      : { width: '100%' }">\r
    <router-outlet></router-outlet>\r
  </div>\r
</div>` }]
      }], () => [{ type: i15.Router }, { type: i15.ActivatedRoute }], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 43 });
    })();
    (() => {
      const id = "src%2Fapp%2Fapp.component.ts%40AppComponent";
      function AppComponent_HmrLoad(t) {
        import(
          /* @vite-ignore */
          __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
        ).then((m) => m.default && i020.\u0275\u0275replaceMetadata(AppComponent, m.default, [i020, i15, i211, i35, i45, i55, i64, i73, i82, i92, i103, i112, i122, i132, i142], [RouterOutlet, RouterModule, ToolbarModule3, SharedModule2, CardModule4, DropdownModule2, MenuModule, AvatarModule, RippleModule, BadgeModule, CommonModule5, DrawerModule, ButtonModule2, Component15], import.meta, id));
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
      (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
    })();
  }
});

// src/main.ts
import { bootstrapApplication } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_platform-browser.js?v=e170828d";
import { registerLocaleData } from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common.js?v=e170828d";
import localeEs from "/@fs/C:/UPB/08/trabajo grado/Dashboard/frontend/.angular/cache/19.2.9/dashboard-app/vite/deps/@angular_common_locales_es.js?v=e170828d";
var require_main = __commonJS({
  "src/main.ts"() {
    init_app_config();
    init_app_component();
    registerLocaleData(localeEs, "es-ES");
    bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
  }
});
export default require_main();


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXRlLXBpY2tlci1lbmhhbmNlZC9kYXRlLXBpY2tlci1lbmhhbmNlZC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGF0ZS1waWNrZXItZW5oYW5jZWQvZGF0ZS1waWNrZXItZW5oYW5jZWQuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUudHMiLCJlbnZpcm9ubWVudC9lbnZpcm9ubWVudC50cyIsInNyYy9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsInNyYy9hcHAva3Bpcy9ib29rcy1mYWN1bHR5L2Jvb2tzLWZhY3VsdHkuY29tcG9uZW50LnRzIiwic3JjL2FwcC9rcGlzL2Jvb2tzLWZhY3VsdHkvYm9va3MtZmFjdWx0eS5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAva3Bpcy9sb2FuLXJvbGUvbG9hbi1yb2xlLmNvbXBvbmVudC50cyIsInNyYy9hcHAva3Bpcy9sb2FuLXJvbGUvbG9hbi1yb2xlLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9rcGlzL2xvYW4tc3R1ZGVudC9sb2FuLXN0dWRlbnQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9rcGlzL2xvYW4tc3R1ZGVudC9sb2FuLXN0dWRlbnQuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2twaXMvdG90YWwtYm9va3MvdG90YWwtYm9va3MuY29tcG9uZW50LnRzIiwic3JjL2FwcC9rcGlzL3RvdGFsLWJvb2tzL3RvdGFsLWJvb2tzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9rcGlzL2dlbnJlL2dlbnJlLmNvbXBvbmVudC50cyIsInNyYy9hcHAva3Bpcy9nZW5yZS9nZW5yZS5jb21wb25lbnQuaHRtbCIsInNyYy9zZXJ2aWNlcy9sb2FkZXIuc2VydmljZS50cyIsInNyYy9kaXJlY3RpdmVzL2dsb2JhbC1sb2FkZXIuZGlyZWN0aXZlLnRzIiwic3JjL2FwcC9rcGlzL2Jvb2stbGVudC1mYWN1bHR5L2Jvb2stbGVudC1mYWN1bHR5LmNvbXBvbmVudC50cyIsInNyYy9hcHAva3Bpcy9ib29rLWxlbnQtZmFjdWx0eS9ib29rLWxlbnQtZmFjdWx0eS5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAva3Bpcy9saWJyYXJ5LXVzZXMvbGlicmFyeS11c2VzLmNvbXBvbmVudC50cyIsInNyYy9hcHAva3Bpcy9saWJyYXJ5LXVzZXMvbGlicmFyeS11c2VzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9rcGlzL2xvYW4tZmFjdWx0eS9sb2FuLWZhY3VsdHkuY29tcG9uZW50LnRzIiwic3JjL2FwcC9rcGlzL2xvYW4tZmFjdWx0eS9sb2FuLWZhY3VsdHkuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2twaXMva3Bpcy5tb2R1bGUudHMiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQudHMiLCJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2ludGVyY2VwdG9ycy9sb2FkZXIuaW50ZXJjZXB0b3IudHMiLCJzcmMvYXBwL2FwcC5jb25maWcudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUV2ZW50IHtcclxuICBzdGFydD86IERhdGU7XHJcbiAgZW5kPzogRGF0ZTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZS1waWNrZXItZW5oYW5jZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXBpY2tlci1lbmhhbmNlZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2RhdGUtcGlja2VyLWVuaGFuY2VkLmNvbXBvbmVudC5jc3MnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckVuaGFuY2VkQ29tcG9uZW50IHtcclxuICBwdWJsaWMgc2VsZWN0ZWRSYW5nZURhdGVzOiBEYXRlW10gPSBbXTtcclxuICBAT3V0cHV0KCkgZ2V0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZUV2ZW50PigpO1xyXG4gIHB1YmxpYyBtYXhEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgb25SYW5nZUNoYW5nZShkYXRlczogRGF0ZVtdIHwgbnVsbCkge1xyXG4gICAgLy9UaGlzIGNvbmRpdGlvbiBjaGVja3MgaWYgdGhlIHJhbmdlIG9mIGRhdGVzIGlzIHNlbGVjdGVkIGJlZm9yZSBjYWxsaW5nIHRoZSBmdW5jdGlvbi5cclxuICAgIGlmICghZGF0ZXMgfHwgZGF0ZXMubGVuZ3RoICE9PSAyIHx8ICFkYXRlc1sxXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gZGF0ZXM7XHJcbiAgICB0aGlzLmdldERhdGEuZW1pdCh7IHN0YXJ0LCBlbmQgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclJhbmdlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFJhbmdlRGF0ZXMgPSBbXTtcclxuICAgIHRoaXMuZ2V0RGF0YS5lbWl0KHsgc3RhcnQ6IHVuZGVmaW5lZCwgZW5kOiB1bmRlZmluZWQgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMiBnYXAtMVwiPlxyXG4gIDxwLWRhdGVQaWNrZXIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFJhbmdlRGF0ZXNcIiAobmdNb2RlbENoYW5nZSk9XCJvblJhbmdlQ2hhbmdlKCRldmVudClcIiBzZWxlY3Rpb25Nb2RlPVwicmFuZ2VcIiBbbWF4RGF0ZV09XCJtYXhEYXRlXCIgc2hvd0ljb249XCJ0cnVlXCIgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25hIHJhbmdvXCIgY2xhc3M9XCJ3LTQ4XCI+XHJcbiAgPC9wLWRhdGVQaWNrZXI+XHJcbiAgPGJ1dHRvbiBwQnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGkgcGktdGltZXNcIiBjbGFzcz1cInAtYnV0dG9uLXRleHQgcC0yICF0ZXh0LWdyYXktNDAwIGhvdmVyOiFiZy1ncmF5LTEwMFwiIChjbGljayk9XCJjbGVhclJhbmdlKClcIj48L2J1dHRvbj5cclxuPC9kaXY+IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJFbmhhbmNlZENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXItZW5oYW5jZWQvZGF0ZS1waWNrZXItZW5oYW5jZWQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRGF0ZVBpY2tlckVuaGFuY2VkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbRGF0ZVBpY2tlck1vZHVsZSwgQnV0dG9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbRGF0ZVBpY2tlckVuaGFuY2VkQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge31cclxuIiwiZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gIHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gIGFwaVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEnLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICBwdWJsaWMgcHJlZml4UGF0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcmVmaXhQYXRoID0gZW52aXJvbm1lbnQuYXBpVXJsO1xyXG4gIH1cclxuXHJcbiAgLy9Nw6l0b2RvIEhUVFAgcGFyYSBvYnRlbmVyIGRhdG9zIGRlIGxhIEFQSS5cclxuICBwdWJsaWMgZ2V0KHJvdXRlOiBzdHJpbmcgPSAnLycsIHBhcmFtZXRlcnM/OiBIdHRwUGFyYW1zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7dGhpcy5wcmVmaXhQYXRofSR7cm91dGV9YCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgIHBhcmFtczogcGFyYW1ldGVycyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vTcOpdG9kbyBIVFRQIHBhcmEgZGVzY2FyZ2FyIHVuIGFyY2hpdm8gWExTWCBkZXNkZSBsYSBBUEkuXHJcbiAgcHVibGljIGRvd25sb2FkRXhjZWwoXHJcbiAgICByb3V0ZTogc3RyaW5nID0gJy8nLFxyXG4gICAgcGFyYW1ldGVycz86IEh0dHBQYXJhbXNcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgaHR0cE9wdCA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9KSxcclxuICAgICAgcGFyYW1zOiBwYXJhbWV0ZXJzLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJyBhcyAnanNvbicsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucHJlZml4UGF0aH0ke3JvdXRlfWAsIGh0dHBPcHQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IEJvb2tzRmFjdWx0eSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0Jvb2tzRmFjdWx0eSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YSwgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdhcHAtYm9va3MtZmFjdWx0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2tzLWZhY3VsdHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9ib29rcy1mYWN1bHR5LmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9va3NGYWN1bHR5Q29tcG9uZW50IHtcclxuICBwdWJsaWMgYm9va3NCeUZhY3VsdHk6IEJvb2tzRmFjdWx0eVtdID0gW107XHJcbiAgcHVibGljIGJvb2tzRGF0YTogQ2hhcnREYXRhIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFwaTogQXBpU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvL0NhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzLCBhbmQgdGhlIGZpcnN0IGNhbGwgdG8gbmdPbkNoYW5nZXMuXHJcbiAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkluaXQnIHRvIHRoZSBjbGFzcy5cclxuICAgIHRoaXMuZ2V0Qm9va3NQZXJGYWN1bHR5KCk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGFydCBvcHRpb25zXHJcbiAgdmVydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9LFxyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgbW9kZTogJ2luZGV4JyxcclxuICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgZm9vdGVyOiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMudmVydE9wdGlvbnMuaW5kZXhBeGlzID09PSAneSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gY3R4LnJlZHVjZShcclxuICAgICAgICAgICAgICAoc3VtLCBpdG0pID0+IHN1bSArIChpc0hvcml6b250YWwgPyBpdG0ucGFyc2VkLnggOiBpdG0ucGFyc2VkLnkpLFxyXG4gICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGBUb3RhbDogJHt0b3RhbC50b0xvY2FsZVN0cmluZygpfWA7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHsgZ3JpZDogeyBkaXNwbGF5OiBmYWxzZSB9LCBzdGFja2VkOiB0cnVlLCB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9IH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvL0dldHRlciBwYXJhIGxvcyBkYXRvcyBkZSBsb3MgcHLDqXN0YW1vcyBwb3IgZmFjdWx0YWRcclxuICBwdWJsaWMgZ2V0Qm9va3NQZXJGYWN1bHR5KHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKSB7XHJcbiAgICB0aGlzLmFwaS5nZXQoJy9mYWN1bHRpZXMvYm9va3MvYWxsJykuc3Vic2NyaWJlKChyZXM6IEJvb2tzRmFjdWx0eVtdKSA9PiB7XHJcbiAgICAgIHRoaXMuYm9va3NCeUZhY3VsdHkgPSByZXM7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoYXJ0RGF0YShib29rczogQm9va3NGYWN1bHR5W10pIHtcclxuICAgIGNvbnN0IGxhYmVscyA9IGJvb2tzLm1hcCgobCkgPT4gbC5mYWN1bHR5TmFtZSk7XHJcbiAgICBjb25zdCBub25BdmFpbGFibGVCb29rcyA9IGJvb2tzLm1hcCgobCkgPT4gbC5ub25BdmFpbGFibGVCb29rcyk7XHJcbiAgICBjb25zdCBkaXNjYXJkZWRCb29rcyA9IGJvb2tzLm1hcCgobCkgPT4gbC5kaXNjYXJkZWRCb29rcyk7XHJcbiAgICBjb25zdCBtb3ZlZEJvb2tzID0gYm9va3MubWFwKChsKSA9PiBsLm1vdmVkQm9va3MpO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlQm9va3MgPSBib29rcy5tYXAoKGwpID0+IGwuYXZhaWxhYmxlQm9va3MpO1xyXG5cclxuICAgIHRoaXMuYm9va3NEYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0Rpc3BvbmlibGVzJyxcclxuICAgICAgICAgIGRhdGE6IGF2YWlsYWJsZUJvb2tzLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU4ODJGOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ05vIGRpc3BvbmlibGVzJyxcclxuICAgICAgICAgIGRhdGE6IG5vbkF2YWlsYWJsZUJvb2tzLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDA4NycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ0Rlc2NhcnRhZG9zJyxcclxuICAgICAgICAgIGRhdGE6IGRpc2NhcmRlZEJvb2tzLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0RGN0QwMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ1RyYXNsYWRhZG9zJyxcclxuICAgICAgICAgIGRhdGE6IG1vdmVkQm9va3MsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZDRDI4JyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiPHAtY2FyZCBjYXJkQmxvY2sgY2xhc3M9XCJwLTRcIj5cclxuICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIG1iLTIgZm9udC1ib2xkXCI+Q2FudGlkYWQgZGUgbGlicm9zIHBvciBmYWN1bHRhZDwvaDM+XHJcbiAgPHAtY2hhcnQgdHlwZT1cImJhclwiIFtkYXRhXT1cImJvb2tzRGF0YVwiIFtvcHRpb25zXT1cInZlcnRPcHRpb25zXCIgY2xhc3M9XCJ3LWZ1bGxcIiBoZWlnaHQ9XCIzNzBcIj5cclxuICA8L3AtY2hhcnQ+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJtdC00IG92ZXJmbG93LWF1dG9cIj5cclxuICAgIDxwLXRhYmxlIFt2YWx1ZV09XCJib29rc0J5RmFjdWx0eVwiIGNsYXNzPVwicC1kYXRhdGFibGUtc20gcC1kYXRhdGFibGUtZ3JpZGxpbmVzIHctZnVsbCB0YWJsZS1hdXRvXCIgW3Jvd3NdPVwiNVwiIFtwYWdpbmF0b3JdPVwidHJ1ZVwiIFtzaG93Q3VycmVudFBhZ2VSZXBvcnRdPVwidHJ1ZVwiIGN1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGU9XCJ7Zmlyc3R9IGEge2xhc3R9IGRlIHt0b3RhbFJlY29yZHN9XCIgW3Njcm9sbGFibGVdPVwidHJ1ZVwiIHNjcm9sbEhlaWdodD1cImZsZXhcIiBbYXV0b0xheW91dF09XCJ0cnVlXCIgW3RhYmxlU3R5bGVdPVwieydtaW4td2lkdGgnOiAnMCd9XCI+XHJcblxyXG4gICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPkZhY3VsdGFkPC90aD5cclxuICAgICAgICAgIDx0aD5EaXNwb25pYmxlPC90aD5cclxuICAgICAgICAgIDx0aD5ObyBkaXNwb25pYmxlPC90aD5cclxuICAgICAgICAgIDx0aD5EZXNjYXJ0YWRvPC90aD5cclxuICAgICAgICAgIDx0aD5UcmFzbGFkYWRvPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj5Ub3RhbDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJib2R5XCIgbGV0LXJvdz5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHt7IHJvdy5mYWN1bHR5TmFtZSB9fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAge3sgcm93LmF2YWlsYWJsZUJvb2tzIH19XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICB7eyByb3cubm9uQXZhaWxhYmxlQm9va3MgfX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIHt7IHJvdy5kaXNjYXJkZWRCb29rcyB9fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAge3sgcm93Lm1vdmVkQm9va3MgfX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHRleHQtcHVycGxlLTYwMFwiPlxyXG4gICAgICAgICAgICB7eyByb3cudG90YWxCb29rcyB9fVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDwvcC10YWJsZT5cclxuICA8L2Rpdj5cclxuPC9wLWNhcmQ+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBMb2Fuc1JvbGUgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9Mb2Fuc1JvbGUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9hbi1yb2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hbi1yb2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbG9hbi1yb2xlLmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hblJvbGVDb21wb25lbnQge1xyXG4gIHB1YmxpYyBwcmVzdExhYmVsczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgcHJlc3REYXRhOiBDaGFydERhdGEgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGxvYW5zQnlSb2xlOiBMb2Fuc1JvbGVbXSA9IFtdO1xyXG5cclxuICAvLyBDaGFydCBvcHRpb25zXHJcbiAgcHVibGljIHZlcnRPcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHNjYWxlczogeyB4OiB7IGdyaWQ6IHsgZGlzcGxheTogZmFsc2UgfSB9LCB5OiB7IGJlZ2luQXRaZXJvOiB0cnVlIH0gfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgaG9yaU9wdGlvbnMgPSB7XHJcbiAgICBpbmRleEF4aXM6ICd5JyxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHsgYmVnaW5BdFplcm86IHRydWUgfSxcclxuICAgICAgeTogeyBncmlkOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGJhckNvbG9ycyA9IFtcclxuICAgICcjQzA4NEZDJyxcclxuICAgICcjRDhCNEZFJyxcclxuICAgICcjRTlENUZGJyxcclxuICAgICcjRjBBQkZDJyxcclxuICAgICcjRjlBOEQ0JyxcclxuICAgICcjRTVFN0VCJyxcclxuICAgICcjRDFENURCJyxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBpOiBBcGlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtc2c6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cclxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgdGhpcy5nZXRMb2Fuc0J5Um9sZSgpO1xyXG4gIH1cclxuXHJcbiAgLy9HZXR0ZXIgcGFyYSBsb3MgZGF0b3MgZGUgbG9zIHByw6lzdGFtb3MgcG9yIGZhY3VsdGFkXHJcbiAgcHVibGljIGdldExvYW5zQnlSb2xlKHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKSB7XHJcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcblxyXG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXHJcbiAgICAgICAgc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuZERhdGUpIHtcclxuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KFxyXG4gICAgICAgICdlbmREYXRlJyxcclxuICAgICAgICBlbmREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBpLmdldCgnL3JvbGVzL2xvYW5zL2FsbCcsIGh0dHBQYXJhbXMpLnN1YnNjcmliZShcclxuICAgICAgKHJlczogTG9hbnNSb2xlW10pID0+IHtcclxuICAgICAgICB0aGlzLmxvYW5zQnlSb2xlID0gcmVzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKHJlcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMubXNnLmFkZCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIHN1bW1hcnk6ICdFcnJvcicsXHJcbiAgICAgICAgICBkZXRhaWw6IGVycm9yLmVycm9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hhcnREYXRhKGxvYW5zOiBMb2Fuc1JvbGVbXSkge1xyXG4gICAgY29uc3QgbGFiZWxzID0gbG9hbnMubWFwKChsKSA9PiBsLnRfdGlwb3VzdWFyaW8pO1xyXG4gICAgY29uc3QgZGF0YSA9IGxvYW5zLm1hcCgobCkgPT4gbC50b3RhbF9wcmVzdGFtb3MpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gbG9hbnMubWFwKFxyXG4gICAgICAoXywgaSkgPT4gdGhpcy5iYXJDb2xvcnNbaSAlIHRoaXMuYmFyQ29sb3JzLmxlbmd0aF1cclxuICAgICk7XHJcbiAgICB0aGlzLnByZXN0RGF0YSA9IHtcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBkYXRhc2V0czogW3sgZGF0YSwgYmFja2dyb3VuZENvbG9yIH1dLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiPHAtY2FyZCBjbGFzcz1cInAtNFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgPGgzIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGRcIj5Db21wYXJhY2nDs24gZGUgcHLDqXN0YW1vcyBwb3Igcm9sPC9oMz5cclxuICAgIDxhcHAtZGF0ZS1waWNrZXItZW5oYW5jZWQgKGdldERhdGEpPVwiZ2V0TG9hbnNCeVJvbGUoJGV2ZW50LnN0YXJ0LCAkZXZlbnQuZW5kKVwiPjwvYXBwLWRhdGUtcGlja2VyLWVuaGFuY2VkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy15LWF1dG9cIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCIzMDBcIj5cclxuICAgIEBpZiAobG9hbnNCeVJvbGUubGVuZ3RoID4gMCkge1xyXG4gICAgPHAtY2hhcnQgdHlwZT1cImJhclwiIFtkYXRhXT1cInByZXN0RGF0YVwiIFtvcHRpb25zXT1cImhvcmlPcHRpb25zXCIgaGVpZ2h0PVwie3tsb2Fuc0J5Um9sZS5sZW5ndGggKiA0MH19XCI+XHJcbiAgICA8L3AtY2hhcnQ+XHJcbiAgICB9XHJcbiAgPC9kaXY+XHJcbjwvcC1jYXJkPiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCBMb2Fuc1N0dWRlbnQgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9Mb2Fuc1N0dWRlbnQnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWxvYW4tc3R1ZGVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYW4tc3R1ZGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2xvYW4tc3R1ZGVudC5jb21wb25lbnQuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYW5TdHVkZW50Q29tcG9uZW50IHtcclxuICBwdWJsaWMgcHJlc3RMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHVibGljIHByZXN0RGF0YTogQ2hhcnREYXRhIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBsb2Fuc0J5U3R1ZGVudDogTG9hbnNTdHVkZW50W10gPSBbXTtcclxuXHJcbiAgLy8gQ2hhcnQgb3B0aW9uc1xyXG4gIHB1YmxpYyB2ZXJ0T3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY2FsZXM6IHsgeDogeyBncmlkOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSwgeTogeyBiZWdpbkF0WmVybzogdHJ1ZSB9IH0sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGhvcmlPcHRpb25zID0ge1xyXG4gICAgaW5kZXhBeGlzOiAneScsXHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9LFxyXG4gICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgbW9kZTogJ2luZGV4JyxcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgIC8qIGZpcnN0IChib2xkKSBsaW5lICovXHJcbiAgICAgICAgICB0aXRsZTogKGN0eDogeyBkYXRhSW5kZXg6IHN0cmluZyB8IG51bWJlciB9W10pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5sb2Fuc0J5U3R1ZGVudFtOdW1iZXIoY3R4WzBdLmRhdGFJbmRleCldO1xyXG4gICAgICAgICAgICByZXR1cm4gcm93LnN0dWRlbnROYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8qIHJlbWFpbmluZyBsaW5lcyAqL1xyXG4gICAgICAgICAgbGFiZWw6IChjdHg6IHsgZGF0YUluZGV4OiBzdHJpbmcgfCBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmxvYW5zQnlTdHVkZW50W051bWJlcihjdHguZGF0YUluZGV4KV07XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgYFByw6lzdGFtb3M6ICR7cm93LnRvdGFsTG9hbnN9YCxcclxuICAgICAgICAgICAgICBgRmFjdWx0YWQ6ICR7cm93LmZhY3VsdHlOYW1lfWAsXHJcbiAgICAgICAgICAgICAgYEVtYWlsOiAke3Jvdy5lbWFpbH1gLFxyXG4gICAgICAgICAgICAgIGBJRCBVUEI6ICR7cm93LnVwYklkfWAsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHsgYmVnaW5BdFplcm86IHRydWUgfSxcclxuICAgICAgeTogeyBncmlkOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBwdWJsaWMgYmFyQ29sb3JzID0gW1xyXG4gICAgJyNDMDg0RkMnLFxyXG4gICAgJyNEOEI0RkUnLFxyXG4gICAgJyNFOUQ1RkYnLFxyXG4gICAgJyNGMEFCRkMnLFxyXG4gICAgJyNGOUE4RDQnLFxyXG4gICAgJyNFNUU3RUInLFxyXG4gICAgJyNEMUQ1REInLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcGk6IEFwaVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1zZzogTWVzc2FnZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgLy9BZGQgJ2ltcGxlbWVudHMgT25Jbml0JyB0byB0aGUgY2xhc3MuXHJcbiAgICB0aGlzLmdldExvYW5zQnlTdHVkZW50KCk7XHJcbiAgfVxyXG5cclxuICAvL0dldHRlciBwYXJhIGxvcyBkYXRvcyBkZSBsb3MgcHLDqXN0YW1vcyBwb3IgZmFjdWx0YWRcclxuICBwdWJsaWMgZ2V0TG9hbnNCeVN0dWRlbnQoc3RhcnREYXRlPzogRGF0ZSwgZW5kRGF0ZT86IERhdGUpIHtcclxuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuXHJcbiAgICBpZiAoc3RhcnREYXRlKSB7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChcclxuICAgICAgICAnc3RhcnREYXRlJyxcclxuICAgICAgICBzdGFydERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5kRGF0ZSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXHJcbiAgICAgICAgJ2VuZERhdGUnLFxyXG4gICAgICAgIGVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcGkuZ2V0KCcvc3R1ZGVudHMvbG9hbnMvYWxsJywgaHR0cFBhcmFtcykuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKHJlczogTG9hbnNTdHVkZW50W10pID0+IHtcclxuICAgICAgICB0aGlzLmxvYW5zQnlTdHVkZW50ID0gcmVzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKHJlcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLm1zZy5hZGQoe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgICBzdW1tYXJ5OiAnRXJyb3InLFxyXG4gICAgICAgICAgZGV0YWlsOiBlcnJvci5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hhcnREYXRhKGxvYW5zOiBMb2Fuc1N0dWRlbnRbXSkge1xyXG4gICAgY29uc3QgbGFiZWxzID0gbG9hbnMubWFwKChsKSA9PiBsLnN0dWRlbnROYW1lKTtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2Fucy5tYXAoKGwpID0+IGwudG90YWxMb2Fucyk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBsb2Fucy5tYXAoXHJcbiAgICAgIChfLCBpKSA9PiB0aGlzLmJhckNvbG9yc1tpICUgdGhpcy5iYXJDb2xvcnMubGVuZ3RoXVxyXG4gICAgKTtcclxuICAgIHRoaXMucHJlc3REYXRhID0ge1xyXG4gICAgICBsYWJlbHMsXHJcbiAgICAgIGRhdGFzZXRzOiBbeyBkYXRhLCBiYWNrZ3JvdW5kQ29sb3IgfV0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCI8cC1jYXJkIGNsYXNzPVwicC00XCI+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPkNvbXBhcmFjacOzbiBkZSBwcsOpc3RhbW9zIHBvciBlc3R1ZGlhbnRlPC9oMz5cclxuICAgIDxhcHAtZGF0ZS1waWNrZXItZW5oYW5jZWQgKGdldERhdGEpPVwiZ2V0TG9hbnNCeVN0dWRlbnQoJGV2ZW50LnN0YXJ0LCAkZXZlbnQuZW5kKVwiPjwvYXBwLWRhdGUtcGlja2VyLWVuaGFuY2VkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy15LWF1dG9cIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCIzMDBcIj5cclxuICAgIEBpZiAobG9hbnNCeVN0dWRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgPHAtY2hhcnQgdHlwZT1cImJhclwiIFtkYXRhXT1cInByZXN0RGF0YVwiIFtvcHRpb25zXT1cImhvcmlPcHRpb25zXCIgaGVpZ2h0PVwie3tsb2Fuc0J5U3R1ZGVudC5sZW5ndGggKiA0MH19XCI+XHJcbiAgICA8L3AtY2hhcnQ+XHJcbiAgICB9XHJcbiAgPC9kaXY+XHJcbjwvcC1jYXJkPiIsImltcG9ydCB7IENvbXBvbmVudCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCBUb3RhbEJvb2tzIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvVG90YWxCb29rcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdhcHAtdG90YWwtYm9va3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b3RhbC1ib29rcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3RvdGFsLWJvb2tzLmNvbXBvbmVudC5jc3MnLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogJ2VzLUVTJyB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdGFsQm9va3NDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0b3RhbEJvb2tzOiBUb3RhbEJvb2tzIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBpOiBBcGlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtc2c6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cclxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgdGhpcy5nZXRUb3RhbEJvb2tzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VG90YWxCb29rcygpIHtcclxuICAgIHRoaXMuYXBpLmdldCgnL3RvdGFsYm9va3MvdG90YWwnKS5zdWJzY3JpYmUoKHJlczogVG90YWxCb29rcykgPT4ge1xyXG4gICAgICB0aGlzLnRvdGFsQm9va3MgPSByZXM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBUb3RhbCBCb29rcyAtLT5cclxuPHAtY2FyZCBjbGFzcz1cInAtNFwiPlxyXG4gIDxoMiBjbGFzcz1cInRleHQtbGcgbWItMiBmb250LWJvbGRcIj5DYW50aWRhZCBkZSBsaWJyb3MgZW4gdG90YWw8L2gyPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LTR4bCBmb250LW5vcm1hbFwiPlxyXG4gICAge3sgdG90YWxCb29rcz8udG90YWxCb29rcyA/PyAwIHwgbnVtYmVyOicxLjAtMCcgfX1cclxuICAgIDxpIGNsYXNzPVwicGkgcGktYm9vayBtbC0yIHRleHQtNXhsIHRleHQtWyMwMDAwODddXCI+PC9pPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yIG10LTRcIj5cclxuICAgIEBmb3IgKHMgb2YgdG90YWxCb29rcz8uYW1vdW50U3RhdHVzOyB0cmFjayBzLnN0YXR1c05hbWUpIHtcclxuICAgIDxwLWNhcmQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS0yXCIgW3N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwMDA4NycsICdjb2xvcic6ICcjRkZGRkZGJyB9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAge3sgcy5zdGF0dXNOYW1lIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC14bCBmb250LWJvbGRcIj5cclxuICAgICAgICB7eyBzLmFtb3VudCB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvcC1jYXJkPlxyXG4gICAgfSBAZW1wdHkge1xyXG4gICAgPHAgY2xhc3M9XCJpdGFsaWMgdGV4dC1ncmF5LTUwMFwiPk5vIGhheSBlc3RhZG9zIGRlIGxpYnJvcy48L3A+XHJcbiAgICB9XHJcbiAgPC9kaXY+XHJcbjwvcC1jYXJkPiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgR2VucmUgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9HZW5yZSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YSwgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWdlbnJlJyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2VucmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9nZW5yZS5jb21wb25lbnQuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlbnJlQ29tcG9uZW50IHtcclxuICBwdWJsaWMgcHJlc3RMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHVibGljIHByZXN0RGF0YTogQ2hhcnREYXRhIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBnZW5yZXM6IEdlbnJlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGhvcmlPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XHJcbiAgICBpbmRleEF4aXM6ICd5JyxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHsgYmVnaW5BdFplcm86IHRydWUgfSxcclxuICAgICAgeTogeyBncmlkOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGJhckNvbG9ycyA9IFtcclxuICAgICcjQzA4NEZDJyxcclxuICAgICcjRDhCNEZFJyxcclxuICAgICcjRTlENUZGJyxcclxuICAgICcjRjBBQkZDJyxcclxuICAgICcjRjlBOEQ0JyxcclxuICAgICcjRTVFN0VCJyxcclxuICAgICcjRDFENURCJyxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBpOiBBcGlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtc2c6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cclxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgdGhpcy5nZXRHZW5yZXMoKTtcclxuICB9XHJcblxyXG4gIC8vR2V0dGVyIHBhcmEgbG9zIGRhdG9zIGRlIGxvcyBwcsOpc3RhbW9zIHBvciBmYWN1bHRhZFxyXG4gIHB1YmxpYyBnZXRHZW5yZXMoc3RhcnREYXRlPzogRGF0ZSwgZW5kRGF0ZT86IERhdGUpIHtcclxuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuXHJcbiAgICBpZiAoc3RhcnREYXRlKSB7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChcclxuICAgICAgICAnc3RhcnREYXRlJyxcclxuICAgICAgICBzdGFydERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5kRGF0ZSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXHJcbiAgICAgICAgJ2VuZERhdGUnLFxyXG4gICAgICAgIGVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcGkuZ2V0KCcvZ2VucmVzL2FsbCcsIGh0dHBQYXJhbXMpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXM6IEdlbnJlW10pID0+IHtcclxuICAgICAgICB0aGlzLmdlbnJlcyA9IHJlcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0RGF0YShyZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tc2cuYWRkKHtcclxuICAgICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgICAgc3VtbWFyeTogJ0Vycm9yJyxcclxuICAgICAgICAgIGRldGFpbDogZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoYXJ0RGF0YShnZW5yZXM6IEdlbnJlW10pIHtcclxuICAgIGNvbnN0IGxhYmVscyA9IGdlbnJlcy5tYXAoKGwpID0+IGwuZGVjaW1hbERld2V5KTtcclxuICAgIGNvbnN0IGRhdGEgPSBnZW5yZXMubWFwKChsKSA9PiBsLmFtb3VudCk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBnZW5yZXMubWFwKFxyXG4gICAgICAoXywgaSkgPT4gdGhpcy5iYXJDb2xvcnNbaSAlIHRoaXMuYmFyQ29sb3JzLmxlbmd0aF1cclxuICAgICk7XHJcbiAgICB0aGlzLnByZXN0RGF0YSA9IHtcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBkYXRhc2V0czogW3sgZGF0YSwgYmFja2dyb3VuZENvbG9yIH1dLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiPHAtY2FyZCBjbGFzcz1cInAtNFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgPGgzIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGRcIj5Hw6luZXJvczwvaDM+XHJcbiAgICA8YXBwLWRhdGUtcGlja2VyLWVuaGFuY2VkIChnZXREYXRhKT1cImdldEdlbnJlcygkZXZlbnQuc3RhcnQsICRldmVudC5lbmQpXCI+PC9hcHAtZGF0ZS1waWNrZXItZW5oYW5jZWQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgQGlmIChnZW5yZXMubGVuZ3RoID4gMCkge1xyXG4gICAgPHAtY2hhcnQgdHlwZT1cInJhZGFyXCIgW2RhdGFdPVwicHJlc3REYXRhXCIgW29wdGlvbnNdPVwiaG9yaU9wdGlvbnNcIiBoZWlnaHQ9XCIzMDBcIj5cclxuICAgIDwvcC1jaGFydD5cclxuICAgIH1cclxuICA8L2Rpdj5cclxuPC9wLWNhcmQ+IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlcXMgPSAwO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvYWRpbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgcmVhZG9ubHkgbG9hZGluZyQgPSB0aGlzLl9sb2FkaW5nJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgc2hvdygpIHtcclxuICAgIGlmICgrK3RoaXMucmVxcyA9PT0gMSkgdGhpcy5fbG9hZGluZyQubmV4dCh0cnVlKTtcclxuICB9XHJcbiAgaGlkZSgpIHtcclxuICAgIGlmICh0aGlzLnJlcXMgJiYgLS10aGlzLnJlcXMgPT09IDApIHRoaXMuX2xvYWRpbmckLm5leHQoZmFsc2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5qZWN0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIENvbXBvbmVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdwcmltZW5nL3NrZWxldG9uJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAncHJpbWVuZy9wcm9ncmVzc3NwaW5uZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwR2xvYmFsTG9hZGVyXScsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBsb2FkZXJTdWI/OiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBza0hvc3QhOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHNwaW5uZXJSZWY/OiBDb21wb25lbnRSZWY8UHJvZ3Jlc3NTcGlubmVyPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbG9hZGVyOiBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBvYmplY3RcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAvLyBNYWtlIGNvbnRhaW5lciBmaWxsIHZpZXdwb3J0IGFuZCBiZSBhIHBvc2l0aW9uaW5nIGNvbnRleHRcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAnbWluLWhlaWdodCcsICcxMDB2aCcpO1xyXG5cclxuICAgIC8vIOKRoCBDcmVhdGUgZnVsbC1jb3ZlciBTa2VsZXRvblxyXG4gICAgY29uc3Qgc2tSZWYgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoU2tlbGV0b24sIHtcclxuICAgICAgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNrSW5zdCA9IHNrUmVmLmluc3RhbmNlO1xyXG4gICAgdGhpcy5za0hvc3QgPSBza1JlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5za0hvc3Quc3R5bGUsIHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGluc2V0OiAnMCcsXHJcbiAgICAgIHpJbmRleDogJzEwMDAnLFxyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBMZXQgdGhlIGdyYXBoaWMgc3RyZXRjaFxyXG4gICAgc2tJbnN0LndpZHRoID0gJzEwMCUnO1xyXG4gICAgc2tJbnN0LmhlaWdodCA9ICcxMDAlJztcclxuICAgIHNrUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgdGhpcy5za0hvc3QpO1xyXG5cclxuICAgIC8vIOKRoSBDcmVhdGUgJiBjZW50ZXIgc3Bpbm5lciBpbnNpZGUgdGhlIHNrZWxldG9uXHJcbiAgICB0aGlzLnNwaW5uZXJSZWYgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoUHJvZ3Jlc3NTcGlubmVyLCB7XHJcbiAgICAgIGluamVjdG9yOiB0aGlzLmluamVjdG9yLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzcGlubmVyRWwgPSB0aGlzLnNwaW5uZXJSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHNwaW5uZXJFbC5zdHlsZSwge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuc2tIb3N0LCBzcGlubmVyRWwpO1xyXG5cclxuICAgIC8vIOKRoiBUb2dnbGUgb3ZlcmxheSB2cy4gcmVhbCBjb250ZW50XHJcbiAgICB0aGlzLmxvYWRlclN1YiA9IHRoaXMubG9hZGVyLmxvYWRpbmckLnN1YnNjcmliZSgobG9hZGluZykgPT4ge1xyXG4gICAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5za0hvc3QsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChjaGlsZCAhPT0gdGhpcy5za0hvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNrSG9zdCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2hpbGQgIT09IHRoaXMuc2tIb3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubG9hZGVyU3ViPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zcGlubmVyUmVmPy5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IEJvb2tzTGVudFBlckZhY3VsdHkgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9Cb29rc0xlbnRQZXJGYWN1bHR5JztcclxuaW1wb3J0IHsgQ2hhcnREYXRhLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCBGYWN1bHR5IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvRmFjdWx0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ib29rLWxlbnQtZmFjdWx0eScsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2stbGVudC1mYWN1bHR5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vYm9vay1sZW50LWZhY3VsdHkuY29tcG9uZW50LmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29rTGVudEZhY3VsdHlDb21wb25lbnQge1xyXG4gIHB1YmxpYyBwcmVzdExhYmVsczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgcHJlc3REYXRhOiBDaGFydERhdGEgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGJvb2tzTGVudFBlckZhY3VsdHk6IEJvb2tzTGVudFBlckZhY3VsdHlbXSA9IFtdO1xyXG4gIHB1YmxpYyBmYWN1bHRpZXM6IEZhY3VsdHlbXSA9IFtdO1xyXG4gIHB1YmxpYyBzZWxlY3RlZEZhY3VsdHk6IEZhY3VsdHkgfCB1bmRlZmluZWQ7XHJcbiAgcHVibGljIHN0YXJ0RGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgZW5kRGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gQ2hhcnQgb3B0aW9uc1xyXG4gIHB1YmxpYyBob3JpT3B0aW9uczogQ2hhcnRPcHRpb25zPCdiYXInPiA9IHtcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIGxheW91dDogeyBwYWRkaW5nOiB7IGxlZnQ6IDEyLCByaWdodDogMjQgfSB9LFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSxcclxuICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgbGFiZWw6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5ib29rc0xlbnRQZXJGYWN1bHR5W2N0eC5kYXRhSW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgIGBQcsOpc3RhbW9zOiAke3Jvdy5sb2Fuc0Ftb3VudH1gLFxyXG4gICAgICAgICAgICAgIGBEZWNpbWFsIERld2V5OiAke3Jvdy5kZWNpbWFsRGV3ZXl9YCxcclxuICAgICAgICAgICAgICBgQ2xhdmUgZGUgYXV0b3I6ICR7cm93LmF1dGhvcktleX1gLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4OiB7IGJlZ2luQXRaZXJvOiB0cnVlLCB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9IH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICBncmlkOiB7IGRpc3BsYXk6IGZhbHNlIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBiYXJDb2xvcnMgPSBbXHJcbiAgICAnI0MwODRGQycsXHJcbiAgICAnI0Q4QjRGRScsXHJcbiAgICAnI0U5RDVGRicsXHJcbiAgICAnI0YwQUJGQycsXHJcbiAgICAnI0Y5QThENCcsXHJcbiAgICAnI0U1RTdFQicsXHJcbiAgICAnI0QxRDVEQicsXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwaTogQXBpU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbXNnOiBNZXNzYWdlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvL0NhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzLCBhbmQgdGhlIGZpcnN0IGNhbGwgdG8gbmdPbkNoYW5nZXMuXHJcbiAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkluaXQnIHRvIHRoZSBjbGFzcy5cclxuICAgIHRoaXMuZ2V0QWxsRmFjdWx0aWVzKCk7XHJcbiAgICB0aGlzLmdldEJvb2tzTGVudFBlckZhY3VsdHkoKTtcclxuICB9XHJcblxyXG4gIC8vR2V0dGVyIHBhcmEgbG9zIGRhdG9zIGRlIGxvcyBwcsOpc3RhbW9zIHBvciBmYWN1bHRhZFxyXG4gIHB1YmxpYyBnZXRCb29rc0xlbnRQZXJGYWN1bHR5KFxyXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcclxuICAgIGVuZERhdGU/OiBEYXRlLFxyXG4gICAgZmFjdWx0eUlkPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcblxyXG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXHJcbiAgICAgICAgc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuZERhdGUpIHtcclxuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KFxyXG4gICAgICAgICdlbmREYXRlJyxcclxuICAgICAgICBlbmREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGZhY3VsdHlJZCkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoJ2ZhY3VsdHlJZCcsIGZhY3VsdHlJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XHJcbiAgICB0aGlzLmVuZERhdGUgPSBlbmREYXRlO1xyXG5cclxuICAgIHRoaXMuYXBpLmdldCgnL2ZhY3VsdGllcy9sb2Fucy9ib29rcy9hbGwnLCBodHRwUGFyYW1zKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAocmVzOiBCb29rc0xlbnRQZXJGYWN1bHR5W10pID0+IHtcclxuICAgICAgICB0aGlzLmJvb2tzTGVudFBlckZhY3VsdHkgPSByZXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEocmVzKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMubXNnLmFkZCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIHN1bW1hcnk6ICdFcnJvcicsXHJcbiAgICAgICAgICBkZXRhaWw6IGVycm9yLmVycm9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0dldHRlciBwYXJhIGxhcyBmYWN1bHRhZGVzXHJcbiAgcHVibGljIGdldEFsbEZhY3VsdGllcygpIHtcclxuICAgIHRoaXMuYXBpLmdldCgnL2ZhY3VsdGllcy9hbGwnKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAocmVzOiBGYWN1bHR5W10pID0+IHtcclxuICAgICAgICB0aGlzLmZhY3VsdGllcyA9IHJlcztcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMubXNnLmFkZCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIHN1bW1hcnk6ICdFcnJvcicsXHJcbiAgICAgICAgICBkZXRhaWw6IGVycm9yLmVycm9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGFydERhdGEoYm9va3NMZW50OiBCb29rc0xlbnRQZXJGYWN1bHR5W10pIHtcclxuICAgIGNvbnN0IGxhYmVscyA9IGJvb2tzTGVudC5tYXAoKGwpID0+IGwuYm9va05hbWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IGJvb2tzTGVudC5tYXAoKGwpID0+IGwubG9hbnNBbW91bnQpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gYm9va3NMZW50Lm1hcChcclxuICAgICAgKF8sIGkpID0+IHRoaXMuYmFyQ29sb3JzW2kgJSB0aGlzLmJhckNvbG9ycy5sZW5ndGhdXHJcbiAgICApO1xyXG4gICAgdGhpcy5wcmVzdERhdGEgPSB7XHJcbiAgICAgIGxhYmVscyxcclxuICAgICAgZGF0YXNldHM6IFt7IGRhdGEsIGJhY2tncm91bmRDb2xvciB9XSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsIjxwLWNhcmQgY2xhc3M9XCJwLTRcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgIDxoMyBjbGFzcz1cInRleHQtbGcgZm9udC1ib2xkXCI+Q29tcGFyYWNpw7NuIGRlIGxpYnJvcyBwcmVzdGFkb3MgcG9yIGZhY3VsdGFkPC9oMz5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgIDxwLXNlbGVjdCBbb3B0aW9uc109XCJmYWN1bHRpZXNcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRmFjdWx0eVwiIFtjaGVja21hcmtdPVwidHJ1ZVwiIG9wdGlvblZhbHVlPVwiZmFjdWx0eUlkXCIgb3B0aW9uTGFiZWw9XCJmYWN1bHR5TmFtZVwiIFtzaG93Q2xlYXJdPVwidHJ1ZVwiIChvbkNoYW5nZSk9XCJnZXRCb29rc0xlbnRQZXJGYWN1bHR5KHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgJGV2ZW50LnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uYSB1bmEgZmFjdWx0YWRcIiBjbGFzcz1cInctZnVsbCBtZDp3LTU2XCIgLz5cclxuICAgICAgPGFwcC1kYXRlLXBpY2tlci1lbmhhbmNlZCAoZ2V0RGF0YSk9XCJnZXRCb29rc0xlbnRQZXJGYWN1bHR5KCRldmVudC5zdGFydCwgJGV2ZW50LmVuZCwgc2VsZWN0ZWRGYWN1bHR5Py5mYWN1bHR5SWQpXCI+PC9hcHAtZGF0ZS1waWNrZXItZW5oYW5jZWQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICBAaWYgKGJvb2tzTGVudFBlckZhY3VsdHkubGVuZ3RoID4gMCkge1xyXG4gICAgPHAtY2hhcnQgdHlwZT1cImxpbmVcIiBbZGF0YV09XCJwcmVzdERhdGFcIiBbb3B0aW9uc109XCJob3JpT3B0aW9uc1wiIGhlaWdodD1cIjMwMFwiPlxyXG4gICAgPC9wLWNoYXJ0PlxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG48L3AtY2FyZD4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCBMaWJyYXJ5VXNlcyBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0xpYnJhcnlVc2VzJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1saWJyYXJ5LXVzZXMnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saWJyYXJ5LXVzZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9saWJyYXJ5LXVzZXMuY29tcG9uZW50LmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5VXNlc0NvbXBvbmVudCB7XHJcbiAgcHVibGljIHByZXN0TGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyBwcmVzdERhdGE6IENoYXJ0RGF0YSB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgbGlicmFyeVVzZXM6IExpYnJhcnlVc2VzW10gPSBbXTtcclxuICBwdWJsaWMgc3RhcnREYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBlbmREYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvLyBDaGFydCBvcHRpb25zXHJcbiAgcHVibGljIGhvcmlPcHRpb25zOiBDaGFydE9wdGlvbnM8J2Jhcic+ID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSxcclxuICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgbGFiZWw6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5saWJyYXJ5VXNlc1tjdHguZGF0YUluZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICBgUHLDqXN0YW1vczogJHtyb3cudG90YWxVc2VzfWAsXHJcbiAgICAgICAgICAgICAgYERlY2ltYWwgRGV3ZXk6ICR7cm93LmRlY2ltYWxEZXdleX1gLFxyXG4gICAgICAgICAgICAgIGBDbGF2ZSBkZSBhdXRvcjogJHtyb3cuYXV0aG9yS2V5fWAsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHsgYmVnaW5BdFplcm86IHRydWUsIHRpY2tzOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICAgICAgeToge1xyXG4gICAgICAgIGdyaWQ6IHsgZGlzcGxheTogZmFsc2UgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGJhckNvbG9ycyA9IFtcclxuICAgICcjQzA4NEZDJyxcclxuICAgICcjRDhCNEZFJyxcclxuICAgICcjRTlENUZGJyxcclxuICAgICcjRjBBQkZDJyxcclxuICAgICcjRjlBOEQ0JyxcclxuICAgICcjRTVFN0VCJyxcclxuICAgICcjRDFENURCJyxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBpOiBBcGlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtc2c6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cclxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxyXG4gICAgdGhpcy5nZXRMaWJyYXJ5VXNlcygpO1xyXG4gIH1cclxuXHJcbiAgLy9HZXR0ZXIgcGFyYSBsb3MgZGF0b3MgZGUgbG9zIHByw6lzdGFtb3MgcG9yIGZhY3VsdGFkXHJcbiAgcHVibGljIGdldExpYnJhcnlVc2VzKHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlLCBmYWN1bHR5SWQ/OiBudW1iZXIpIHtcclxuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuXHJcbiAgICBpZiAoc3RhcnREYXRlKSB7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChcclxuICAgICAgICAnc3RhcnREYXRlJyxcclxuICAgICAgICBzdGFydERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5kRGF0ZSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXHJcbiAgICAgICAgJ2VuZERhdGUnLFxyXG4gICAgICAgIGVuZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmFjdWx0eUlkKSB7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCgnZmFjdWx0eUlkJywgZmFjdWx0eUlkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcclxuICAgIHRoaXMuZW5kRGF0ZSA9IGVuZERhdGU7XHJcblxyXG4gICAgdGhpcy5hcGkuZ2V0KCcvbGlicmFyeS91c2VzL2FsbCcsIGh0dHBQYXJhbXMpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXM6IExpYnJhcnlVc2VzW10pID0+IHtcclxuICAgICAgICB0aGlzLmxpYnJhcnlVc2VzID0gcmVzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKHJlcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLm1zZy5hZGQoe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgICBzdW1tYXJ5OiAnRXJyb3InLFxyXG4gICAgICAgICAgZGV0YWlsOiBlcnJvci5lcnJvcixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hhcnREYXRhKGxpYnJhcnlVc2VzOiBMaWJyYXJ5VXNlc1tdKSB7XHJcbiAgICBjb25zdCBsYWJlbHMgPSBsaWJyYXJ5VXNlcy5tYXAoKGwpID0+IGwudGl0bGUpO1xyXG4gICAgY29uc3QgZGF0YSA9IGxpYnJhcnlVc2VzLm1hcCgobCkgPT4gbC50b3RhbFVzZXMpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gbGlicmFyeVVzZXMubWFwKFxyXG4gICAgICAoXywgaSkgPT4gdGhpcy5iYXJDb2xvcnNbaSAlIHRoaXMuYmFyQ29sb3JzLmxlbmd0aF1cclxuICAgICk7XHJcbiAgICB0aGlzLnByZXN0RGF0YSA9IHtcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBkYXRhc2V0czogW3sgZGF0YSwgYmFja2dyb3VuZENvbG9yIH1dLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiPHAtY2FyZCBjbGFzcz1cInAtNFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgPGgzIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGRcIj5Db21wYXJhY2nDs24gZGUgbGlicm9zIHBvciB1c28gZW4gc2FsYTwvaDM+XHJcbiAgICA8YXBwLWRhdGUtcGlja2VyLWVuaGFuY2VkIChnZXREYXRhKT1cImdldExpYnJhcnlVc2VzKCRldmVudC5zdGFydCwgJGV2ZW50LmVuZClcIj48L2FwcC1kYXRlLXBpY2tlci1lbmhhbmNlZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICBAaWYgKGxpYnJhcnlVc2VzLmxlbmd0aCA+IDApIHtcclxuICAgIDxwLWNoYXJ0IHR5cGU9XCJiYXJcIiBbZGF0YV09XCJwcmVzdERhdGFcIiBbb3B0aW9uc109XCJob3JpT3B0aW9uc1wiIGhlaWdodD1cIjMwMFwiPlxyXG4gICAgPC9wLWNoYXJ0PlxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG48L3AtY2FyZD4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IExvYW5zRmFjdWx0eSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0xvYW5zRmFjdWx0eSc7XHJcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBDaGFydE9wdGlvbnMsIENoYXJ0RGF0YSB9IGZyb20gJ2NoYXJ0LmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWxvYW4tZmFjdWx0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYW4tZmFjdWx0eS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2xvYW4tZmFjdWx0eS5jb21wb25lbnQuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYW5GYWN1bHR5Q29tcG9uZW50IHtcclxuICBwdWJsaWMgcHJlc3RMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHVibGljIHByZXN0RGF0YTogQ2hhcnREYXRhIHwgdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBsb2Fuc0J5RmFjdWx0eTogTG9hbnNGYWN1bHR5W10gPSBbXTtcclxuICBwdWJsaWMgc2VsZWN0ZWRSYW5nZURhdGVzOiBEYXRlW10gPSBbXTtcclxuICBwdWJsaWMgbWF4RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHVibGljIGNoYXJ0SGVpZ2h0UHggPSAwO1xyXG5cclxuICAvLyBDaGFydCBvcHRpb25zXHJcbiAgcHVibGljIHZlcnRPcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHNjYWxlczogeyB4OiB7IGdyaWQ6IHsgZGlzcGxheTogZmFsc2UgfSB9LCB5OiB7IGJlZ2luQXRaZXJvOiB0cnVlIH0gfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgaG9yaU9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcclxuICAgIGluZGV4QXhpczogJ3knLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLCAvLyBob25vdXIgb3VyIGZpeGVkIGjigK9weFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHk6IHtcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgZm9udDogeyBzaXplOiAxMiB9LFxyXG4gICAgICAgICAgYXV0b1NraXA6IGZhbHNlLCAvLyBzaG93IGV2ZXJ5IGxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeDogeyBiZWdpbkF0WmVybzogdHJ1ZSB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHsgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0gfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgYmFyQ29sb3JzID0gW1xyXG4gICAgJyNDMDg0RkMnLFxyXG4gICAgJyNEOEI0RkUnLFxyXG4gICAgJyNFOUQ1RkYnLFxyXG4gICAgJyNGMEFCRkMnLFxyXG4gICAgJyNGOUE4RDQnLFxyXG4gICAgJyNFNUU3RUInLFxyXG4gICAgJyNEMUQ1REInLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcGk6IEFwaVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1zZzogTWVzc2FnZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgLy9BZGQgJ2ltcGxlbWVudHMgT25Jbml0JyB0byB0aGUgY2xhc3MuXHJcbiAgICB0aGlzLmdldExvYW5zQnlGYWN1bHR5KCk7XHJcblxyXG4gICAgY29uc3Qgcm93cyA9IHRoaXMubG9hbnNCeUZhY3VsdHkubGVuZ3RoO1xyXG4gICAgdGhpcy5jaGFydEhlaWdodFB4ID0gcm93cyAqIDIwO1xyXG4gIH1cclxuXHJcbiAgLy9HZXR0ZXIgcGFyYSBsb3MgZGF0b3MgZGUgbG9zIHByw6lzdGFtb3MgcG9yIGZhY3VsdGFkXHJcbiAgcHVibGljIGdldExvYW5zQnlGYWN1bHR5KHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKSB7XHJcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcblxyXG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZScsXHJcbiAgICAgICAgc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuZERhdGUpIHtcclxuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KFxyXG4gICAgICAgICdlbmREYXRlJyxcclxuICAgICAgICBlbmREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBpLmdldCgnL2ZhY3VsdGllcy9sb2Fucy9hbGwnLCBodHRwUGFyYW1zKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAocmVzOiBMb2Fuc0ZhY3VsdHlbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hbnNCeUZhY3VsdHkgPSByZXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGFydERhdGEocmVzKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMubXNnLmFkZCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIHN1bW1hcnk6ICdFcnJvcicsXHJcbiAgICAgICAgICBkZXRhaWw6IGVycm9yLmVycm9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGFydERhdGEobG9hbnM6IExvYW5zRmFjdWx0eVtdKSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9hbnMubWFwKChsKSA9PiBsLmxvYW5zQW1vdW50KTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGxvYW5zLm1hcChcclxuICAgICAgKF8sIGkpID0+IHRoaXMuYmFyQ29sb3JzW2kgJSB0aGlzLmJhckNvbG9ycy5sZW5ndGhdXHJcbiAgICApO1xyXG4gICAgdGhpcy5wcmVzdERhdGEgPSB7XHJcbiAgICAgIGxhYmVsczogdGhpcy5sb2Fuc0J5RmFjdWx0eS5tYXAoKGYpID0+IHRoaXMud3JhcExhYmVsKGYuZmFjdWx0eU5hbWUsIDI1KSksXHJcbiAgICAgIGRhdGFzZXRzOiBbeyBkYXRhLCBiYWNrZ3JvdW5kQ29sb3IsIGJhclRoaWNrbmVzczogMjAgfV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3cmFwTGFiZWwobGFiZWw6IHN0cmluZywgd2lkdGggPSAyMCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbGFiZWwubGVuZ3RoIDw9IHdpZHRoXHJcbiAgICAgID8gbGFiZWxcclxuICAgICAgOiBSZWdFeHAobmV3IFJlZ0V4cChgLnsxLCR7d2lkdGh9fWAsICdnJykpXHJcbiAgICAgICAgICAuZXhlYyhsYWJlbCkhXHJcbiAgICAgICAgICAuam9pbignXFxuJyk7XHJcbiAgfVxyXG59XHJcbiIsIiA8cC1jYXJkIGNsYXNzPVwicC00XCI+XHJcbiAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgIDxoMyBjbGFzcz1cInRleHQtbGcgZm9udC1ib2xkXCI+Q29tcGFyYWNpw7NuIGRlIHByw6lzdGFtb3MgcG9yIGZhY3VsdGFkPC9oMz5cclxuICAgICA8YXBwLWRhdGUtcGlja2VyLWVuaGFuY2VkIChnZXREYXRhKT1cImdldExvYW5zQnlGYWN1bHR5KCRldmVudC5zdGFydCwgJGV2ZW50LmVuZClcIj48L2FwcC1kYXRlLXBpY2tlci1lbmhhbmNlZD5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy15LWF1dG9cIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCI0NTBcIj5cclxuICAgICBAaWYgKGxvYW5zQnlGYWN1bHR5Lmxlbmd0aCA+IDApIHtcclxuICAgICA8cC1jaGFydCB0eXBlPVwiYmFyXCIgW2RhdGFdPVwicHJlc3REYXRhXCIgW29wdGlvbnNdPVwiaG9yaU9wdGlvbnNcIiBoZWlnaHQ9XCJ7e2xvYW5zQnlGYWN1bHR5Lmxlbmd0aCAqIDQwfX1cIj5cclxuICAgICA8L3AtY2hhcnQ+XHJcbiAgICAgfVxyXG4gICA8L2Rpdj5cclxuXHJcbiAgIDxkaXYgY2xhc3M9XCJtdC00IG92ZXJmbG93LWF1dG9cIj5cclxuICAgICA8cC10YWJsZSBbdmFsdWVdPVwibG9hbnNCeUZhY3VsdHlcIiBjbGFzcz1cInAtZGF0YXRhYmxlLXNtIHAtZGF0YXRhYmxlLWdyaWRsaW5lc1wiIFtyb3dzXT1cIjVcIiBbcGFnaW5hdG9yXT1cInRydWVcIiBbc2hvd0N1cnJlbnRQYWdlUmVwb3J0XT1cInRydWVcIiBjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlPVwie2ZpcnN0fSBhIHtsYXN0fSBkZSB7dG90YWxSZWNvcmRzfVwiIFtzY3JvbGxhYmxlXT1cInRydWVcIiBzY3JvbGxIZWlnaHQ9XCJmbGV4XCI+XHJcblxyXG4gICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxyXG4gICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgPHRoPkNhcnJlcmE8L3RoPlxyXG4gICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj5Ub3RhbDwvdGg+XHJcbiAgICAgICAgIDwvdHI+XHJcbiAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJib2R5XCIgbGV0LXJvdz5cclxuICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgIHt7IHJvdy5mYWN1bHR5TmFtZSB9fVxyXG4gICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1yaWdodCB0ZXh0LXB1cnBsZS02MDBcIj5cclxuICAgICAgICAgICAgIHt7IHJvdy5sb2Fuc0Ftb3VudCB9fVxyXG4gICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgIDwvdHI+XHJcbiAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICA8L3AtdGFibGU+XHJcbiAgIDwvZGl2PlxyXG4gPC9wLWNhcmQ+IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2FyZCc7XHJcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJsZSc7XHJcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGFydCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvYW5GYWN1bHR5Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FuLWZhY3VsdHkvbG9hbi1mYWN1bHR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJvb2tzRmFjdWx0eUNvbXBvbmVudCB9IGZyb20gJy4vYm9va3MtZmFjdWx0eS9ib29rcy1mYWN1bHR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYW5Sb2xlQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FuLXJvbGUvbG9hbi1yb2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYW5TdHVkZW50Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FuLXN0dWRlbnQvbG9hbi1zdHVkZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdGFsQm9va3NDb21wb25lbnQgfSBmcm9tICcuL3RvdGFsLWJvb2tzL3RvdGFsLWJvb2tzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlbnJlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW5yZS9nZW5yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxMb2FkZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2dsb2JhbC1sb2FkZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3NrZWxldG9uJztcclxuaW1wb3J0IHsgQm9va0xlbnRGYWN1bHR5Q29tcG9uZW50IH0gZnJvbSAnLi9ib29rLWxlbnQtZmFjdWx0eS9ib29rLWxlbnQtZmFjdWx0eS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3NlbGVjdCc7XHJcbmltcG9ydCB7IExpYnJhcnlVc2VzQ29tcG9uZW50IH0gZnJvbSAnLi9saWJyYXJ5LXVzZXMvbGlicmFyeS11c2VzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9hbkZhY3VsdHlDb21wb25lbnQsXHJcbiAgICBCb29rc0ZhY3VsdHlDb21wb25lbnQsXHJcbiAgICBMb2FuUm9sZUNvbXBvbmVudCxcclxuICAgIExvYW5TdHVkZW50Q29tcG9uZW50LFxyXG4gICAgVG90YWxCb29rc0NvbXBvbmVudCxcclxuICAgIEdlbnJlQ29tcG9uZW50LFxyXG4gICAgR2xvYmFsTG9hZGVyRGlyZWN0aXZlLFxyXG4gICAgQm9va0xlbnRGYWN1bHR5Q29tcG9uZW50LFxyXG4gICAgTGlicmFyeVVzZXNDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBDYXJkTW9kdWxlLFxyXG4gICAgVGFibGVNb2R1bGUsXHJcbiAgICBDaGFydE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tcG9uZW50c01vZHVsZSxcclxuICAgIFNrZWxldG9uTW9kdWxlLFxyXG4gICAgU2VsZWN0TW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTG9hbkZhY3VsdHlDb21wb25lbnQsXHJcbiAgICBCb29rc0ZhY3VsdHlDb21wb25lbnQsXHJcbiAgICBMb2FuUm9sZUNvbXBvbmVudCxcclxuICAgIExvYW5TdHVkZW50Q29tcG9uZW50LFxyXG4gICAgVG90YWxCb29rc0NvbXBvbmVudCxcclxuICAgIEdlbnJlQ29tcG9uZW50LFxyXG4gICAgR2xvYmFsTG9hZGVyRGlyZWN0aXZlLFxyXG4gICAgQm9va0xlbnRGYWN1bHR5Q29tcG9uZW50LFxyXG4gICAgTGlicmFyeVVzZXNDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEtwaXNNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhcmQnO1xyXG5pbXBvcnQgeyBTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3NlbGVjdCc7XHJcbmltcG9ydCB7IFRvb2xiYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBLcGlzTW9kdWxlIH0gZnJvbSAnLi4va3Bpcy9rcGlzLm1vZHVsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tYWluLXBhZ2UnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgVG9vbGJhck1vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBTZWxlY3RNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEtwaXNNb2R1bGUsXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHt9XHJcbiIsIjxkaXYgY2xhc3M9XCJwLTYgdy1mdWxsXCI+XHJcbiAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTIgdy1mdWxsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMSBtZDpjb2wtc3Bhbi0yIGxnOmNvbC1zcGFuLTMgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNiB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgY29sLXNwYW4tMSBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgPCEtLSBDQVJEIERFIFRPVEFMIERFIExJQlJPUyBDT04gU1VTIEVTVEFET1MgLS0+XHJcbiAgICAgICAgPGFwcC10b3RhbC1ib29rcyBjbGFzcz1cInctZnVsbFwiPjwvYXBwLXRvdGFsLWJvb2tzPlxyXG5cclxuICAgICAgICA8IS0tIENBUkQgREUgUFLDiVNUQU1PUyBQT1IgUk9MRVMgLS0+XHJcbiAgICAgICAgPGFwcC1sb2FuLXJvbGUgY2xhc3M9XCJ3LWZ1bGxcIj48L2FwcC1sb2FuLXJvbGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMiBsZzpncmlkLWNvbHMtMiBnYXAtNlwiPlxyXG4gICAgICAgIDwhLS0gQ0FSRCBERSBDQU5USURBRCBERSBMSUJST1MgUE9SIEZBQ1VMVEFEIC0tPlxyXG4gICAgICAgIDxhcHAtYm9va3MtZmFjdWx0eSBjbGFzcz1cInctZnVsbFwiPjwvYXBwLWJvb2tzLWZhY3VsdHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEgbWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0zIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgPCEtLSBDQVJEIERFIEfDiU5FUk9TIC0tPlxyXG4gICAgICAgIDxhcHAtZ2VucmU+PC9hcHAtZ2VucmU+XHJcblxyXG4gICAgICAgIDwhLS0gQ0FSRCBERSBMSUJST1MgUFJFU1RBRE9TIFBPUiBGQUNVTFRBRCAtLT5cclxuICAgICAgICA8YXBwLWJvb2stbGVudC1mYWN1bHR5PjwvYXBwLWJvb2stbGVudC1mYWN1bHR5PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTIgbGc6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cclxuICAgICAgICA8IS0tIENBUkQgREUgQ09NUEFSQUNJw5NOIERFIFBSw4lTVEFNT1MgUE9SIEZBQ1VMVEFEIC0tPlxyXG4gICAgICAgIDxhcHAtbG9hbi1mYWN1bHR5IGNsYXNzPVwidy1mdWxsXCI+PC9hcHAtbG9hbi1mYWN1bHR5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xIG1kOmNvbC1zcGFuLTIgbGc6Y29sLXNwYW4tMyBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XHJcbiAgICAgIDxhcHAtbGlicmFyeS11c2VzIGNsYXNzPVwidy1mdWxsXCI+PC9hcHAtbGlicmFyeS11c2VzPlxyXG4gICAgICA8YXBwLWxvYW4tc3R1ZGVudCBjbGFzcz1cInctZnVsbFwiPjwvYXBwLWxvYW4tc3R1ZGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFuYWx5dGljcycsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuYWx5dGljcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2FuYWx5dGljcy5jb21wb25lbnQuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0NvbXBvbmVudCB7fVxyXG4iLCI8cD5hbmFseXRpY3Mgd29ya3MhPC9wPlxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZhdm9yaXRlcycsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zhdm9yaXRlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIiwiPHA+ZmF2b3JpdGVzIHdvcmtzITwvcD5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yZXBvcnRzJyxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3JlcG9ydHMuY29tcG9uZW50LmNzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNDb21wb25lbnQge1xyXG5cclxufVxyXG4iLCI8cD5yZXBvcnRzIHdvcmtzITwvcD5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2hvbWUuY29tcG9uZW50LmNzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG5cclxufVxyXG4iLCI8cD5ob21lIHdvcmtzITwvcD5cclxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuYWx5dGljc0NvbXBvbmVudCB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVwb3J0c0NvbXBvbmVudCB9IGZyb20gJy4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxyXG4gICAgZGF0YTogeyB0aXRsZTogJ0luaWNpbycgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdkYXNoYm9hcmQnLFxyXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7IHRpdGxlOiAnRGFzaGJvYXJkJyB9LFxyXG4gIH0sIC8vIE1haW4gcGFnZVxyXG4gIHtcclxuICAgIHBhdGg6ICdhbmFseXRpY3MnLFxyXG4gICAgY29tcG9uZW50OiBBbmFseXRpY3NDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7IHRpdGxlOiAnQW5hbMOtdGljYScgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdmYXZvcml0ZXMnLFxyXG4gICAgY29tcG9uZW50OiBGYXZvcml0ZXNDb21wb25lbnQsXHJcbiAgICBkYXRhOiB7IHRpdGxlOiAnR3LDoWZpY2FzIGZhdm9yaXRhcycgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdyZXBvcnRzJyxcclxuICAgIGNvbXBvbmVudDogUmVwb3J0c0NvbXBvbmVudCxcclxuICAgIGRhdGE6IHsgdGl0bGU6ICdSZXBvcnRlcycgfSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVySW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvckZuID0gKHJlcSwgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRlciA9IGluamVjdChMb2FkZXJTZXJ2aWNlKTtcclxuICBpZiAocmVxLmhlYWRlcnMuaGFzKCd4LXNraXAtbG9hZGVyJykpIHtcclxuICAgIHJldHVybiBuZXh0KHJlcS5jbG9uZSh7IGhlYWRlcnM6IHJlcS5oZWFkZXJzLmRlbGV0ZSgneC1za2lwLWxvYWRlcicpIH0pKTtcclxuICB9XHJcbiAgbG9hZGVyLnNob3coKTtcclxuICByZXR1cm4gbmV4dChyZXEpLnBpcGUoZmluYWxpemUoKCkgPT4gbG9hZGVyLmhpZGUoKSkpO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uQ29uZmlnLFxyXG4gIGltcG9ydFByb3ZpZGVyc0Zyb20sXHJcbiAgTE9DQUxFX0lELFxyXG4gIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwcm92aWRlUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7XHJcbiAgQnJvd3Nlck1vZHVsZSxcclxuICBwcm92aWRlQ2xpZW50SHlkcmF0aW9uLFxyXG4gIHdpdGhFdmVudFJlcGxheSxcclxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbGJhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9vbGJhcic7XHJcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhcmQnO1xyXG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2hhcnQnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBwcm92aWRlUHJpbWVORyB9IGZyb20gJ3ByaW1lbmcvY29uZmlnJztcclxuaW1wb3J0IEF1cmEgZnJvbSAnQHByaW1lbmcvdGhlbWVzL2F1cmEnO1xyXG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCwgd2l0aEludGVyY2VwdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgbG9hZGVySW50ZXJjZXB0b3IgfSBmcm9tICcuLi9pbnRlcmNlcHRvcnMvbG9hZGVyLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgR2xvYmFsTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9nbG9iYWwtbG9hZGVyLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLFxyXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpLFxyXG4gICAgcHJvdmlkZUh0dHBDbGllbnQod2l0aEludGVyY2VwdG9ycyhbbG9hZGVySW50ZXJjZXB0b3JdKSksXHJcbiAgICBwcm92aWRlQ2xpZW50SHlkcmF0aW9uKHdpdGhFdmVudFJlcGxheSgpKSxcclxuICAgIGltcG9ydFByb3ZpZGVyc0Zyb20oXHJcbiAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgVG9vbGJhck1vZHVsZSxcclxuICAgICAgQ2FyZE1vZHVsZSxcclxuICAgICAgQ2hhcnRNb2R1bGUsXHJcbiAgICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgR2xvYmFsTG9hZGVyRGlyZWN0aXZlXHJcbiAgICApLFxyXG4gICAgcHJvdmlkZVByaW1lTkcoe1xyXG4gICAgICB0aGVtZToge1xyXG4gICAgICAgIHByZXNldDogQXVyYSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZXMtRVMnIH0sXHJcbiAgICBNZXNzYWdlU2VydmljZSxcclxuICBdLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGVmZmVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aXZhdGVkUm91dGUsXHJcbiAgTmF2aWdhdGlvbkVuZCxcclxuICBSb3V0ZXIsXHJcbiAgUm91dGVyTW9kdWxlLFxyXG4gIFJvdXRlck91dGxldCxcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgU2hhcmVkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYXJkJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgVG9vbGJhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9vbGJhcic7XHJcbmltcG9ydCB7IE1lbnVNb2R1bGUgfSBmcm9tICdwcmltZW5nL21lbnUnO1xyXG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xyXG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XHJcbmltcG9ydCB7IEF2YXRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYXZhdGFyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHJhd2VyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcmF3ZXInO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyT3V0bGV0LFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgVG9vbGJhck1vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgIE1lbnVNb2R1bGUsXHJcbiAgICBBdmF0YXJNb2R1bGUsXHJcbiAgICBSaXBwbGVNb2R1bGUsXHJcbiAgICBCYWRnZU1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIERyYXdlck1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2FwcC5jb21wb25lbnQuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgdGl0bGUgPSAnZGFzaGJvYXJkLWFwcCc7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaXRlbXM6IE1lbnVJdGVtW10gPSBbXHJcbiAgICB7IGxhYmVsOiAnSW5pY2lvJywgaWNvbjogJ3BpIHBpLWhvbWUnLCByb3V0ZXJMaW5rOiBbJy8nXSB9LFxyXG4gICAgeyBsYWJlbDogJ0Rhc2hib2FyZCcsIGljb246ICdwaSBwaS1jaGFydC1waWUnLCByb3V0ZXJMaW5rOiBbJy9kYXNoYm9hcmQnXSB9LFxyXG4gICAgeyBsYWJlbDogJ1JlcG9ydGVzJywgaWNvbjogJ3BpIHBpLWNoYXJ0LWxpbmUnLCByb3V0ZXJMaW5rOiBbJy9yZXBvcnRzJ10gfSxcclxuICAgIHsgbGFiZWw6ICdBbmFsw610aWNhJywgaWNvbjogJ3BpIHBpLWNoYXJ0LWJhcicsIHJvdXRlckxpbms6IFsnL2FuYWx5dGljcyddIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnR3LDoWZpY2FzIGZhdm9yaXRhcycsXHJcbiAgICAgIGljb246ICdwaSBwaS1oZWFydC1maWxsJyxcclxuICAgICAgcm91dGVyTGluazogWycvZmF2b3JpdGVzJ10sXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmVhZG9ubHkgcGFnZVRpdGxlID0gc2lnbmFsKCcnKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcjogQWN0aXZhdGVkUm91dGVcclxuICApIHtcclxuICAgIC8vIGJ1bXAgdGhlIHNpZ25hbCBldmVyeSB0aW1lIHRoZSByb3V0ZSBjaGFuZ2VzXHJcbiAgICBlZmZlY3QoKCkgPT5cclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKChlKSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgciA9IHRoaXMuYXI7XHJcbiAgICAgICAgICB3aGlsZSAoci5maXJzdENoaWxkKSByID0gci5maXJzdENoaWxkOyAvLyBkZWVwZXN0IGNoaWxkXHJcbiAgICAgICAgICB0aGlzLnBhZ2VUaXRsZS5zZXQoci5zbmFwc2hvdC5kYXRhWyd0aXRsZSddID8/ICcnKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxyXG4gICAgLy9BZGQgJ2ltcGxlbWVudHMgT25Jbml0JyB0byB0aGUgY2xhc3MuXHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy5zaWRlYmFyVmlzaWJsZSA9ICF0aGlzLnNpZGViYXJWaXNpYmxlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiaC1zY3JlZW4gcmVsYXRpdmVcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZpeGVkIGluc2V0LXktMCBsZWZ0LTAgdy02MCBiZy1bIzAwMDA4N10gc2hhZG93LWxnIHotNDBcclxuICAgICAgICAgICB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHAtMiBmbGV4IGZsZXgtY29sIGJvcmRlci1yICFib3JkZXItZ3JheS0zMDBcIiBbY2xhc3MuLXRyYW5zbGF0ZS14LWZ1bGxdPVwiIXNpZGViYXJWaXNpYmxlXCI+XHJcblxyXG4gICAgPCEtLSBMb2dvIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8aW1nIHNyYz1cImFzc2V0cy91cGJfbG9nby5zdmdcIiBhbHQ9XCJVUEIgbG9nb1wiIGNsYXNzPVwiaC03IHctYXV0byBwci0yXCIgLz5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJib3JkZXItbCBib3JkZXItd2hpdGUgcGwtMiB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICBTQUJJQlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEVsIG1lbsO6IGNvbiBsYXMgcnV0YXMgLS0+XHJcbiAgICA8cC1tZW51IFttb2RlbF09XCJpdGVtc1wiIGNsYXNzPVwiZmxleC0xIHB5LTUgei0yMFwiIHN0eWxlQ2xhc3M9XCJ3LWZ1bGwgIWJvcmRlci1ub25lICFiZy1bIzAwMDA4N11cIj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNpdGVtIGxldC1pdGVtPlxyXG4gICAgICAgIDxhIHBSaXBwbGUgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImJnLXdoaXRlICF0ZXh0LVsjMDAwMDg3XVwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7IGV4YWN0OiB0cnVlIH1cIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHAtMiByb3VuZGVkIHRleHQtd2hpdGUgaG92ZXI6Ymctc3VyZmFjZS0yMDAgaG92ZXI6IXRleHQtWyMwMDAwODddXCI+XHJcbiAgICAgICAgICA8aSBbY2xhc3NdPVwiaXRlbS5pY29uICsgJyBwaS1sZydcIj48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTJcIj5cclxuICAgICAgICAgICAge3sgaXRlbS5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3AtbWVudT5cclxuXHJcbiAgICA8IS0tIENhcmQgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICA8YnV0dG9uIHBCdXR0b24gcFJpcHBsZSBjbGFzcz1cInAtYnV0dG9uICFiZy13aGl0ZSAhYm9yZGVyLXdoaXRlICF0ZXh0LVsjMDAwMDg3XVxyXG4gICAgICAgICAgICAgaG92ZXI6IWJnLVsjMDAwMDg3XSBob3ZlcjohdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgcC00IHJvdW5kZWQtbm9uZVwiIChjbGljayk9XCJ0b2dnbGVTaWRlYmFyKClcIj5cclxuICAgICAgPHAtYXZhdGFyIGltYWdlPVwiaHR0cHM6Ly9wcmltZWZhY2VzLm9yZy9jZG4vcHJpbWVuZy9pbWFnZXMvZGVtby9hdmF0YXIvYW15ZWxzbmVyLnBuZ1wiIHNoYXBlPVwiY2lyY2xlXCIgY2xhc3M9XCJtci0zXCI+PC9wLWF2YXRhcj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGRcIj5ZZXJpa2EgUnVzc2k8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPkFkbWluaXN0cmFkb3JhPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxoZWFkZXIgY2xhc3M9XCJmaXhlZCB0b3AtMCBpbnNldC14LTAgaC0xNlxyXG4gICAgICAgICAgIGJnLVsjMDAwMDg3XSBzaGFkb3cteGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgei0xMFxyXG4gICAgICAgICAgIHRyYW5zaXRpb24tW3BhZGRpbmctbGVmdF0gZHVyYXRpb24tMzAwXCIgW3N0eWxlLnBhZGRpbmdMZWZ0XT1cInNpZGViYXJWaXNpYmxlID8gJzE2cmVtJyA6ICcxcmVtJ1wiPlxyXG4gICAgPGJ1dHRvbiBwQnV0dG9uIGljb249XCJwaSBwaS1iYXJzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVTaWRlYmFyKClcIiBjbGFzcz1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgICAgICAhdGV4dC1bIzAwMDA4N10gIWJnLXdoaXRlICFib3JkZXItd2hpdGVcclxuICAgICAgICAgICAgIGhvdmVyOiFiZy1bIzAwMDA4N10gaG92ZXI6IWJvcmRlci13aGl0ZSBob3ZlcjohdGV4dC13aGl0ZVwiPjwvYnV0dG9uPlxyXG5cclxuICAgIDwhLS0gRXN0ZSBlcyBlbCB0w610dWxvIGRlIGxhIHDDoWdpbmEgZW4gbGEgcXVlIHNlIGVuY3VlbnRyYS4gRXMgZGluw6FtaWNvIGRlcGVuZGllbmRvIGRlIGxhIGRhdGEgZW4gZWwgcm91dGVyIC0tPlxyXG4gICAgPGgxIGNsYXNzPVwidGV4dC0yeGwgZm9udC1ib2xkIG0tMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIHt7IHBhZ2VUaXRsZSgpIH19XHJcbiAgICA8L2gxPlxyXG4gIDwvaGVhZGVyPlxyXG5cclxuICA8IS0tIFDDoWdpbmEgYSByZW5kZXJpemFyIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdHJhbnNpdGlvbi1bbWFyZ2luLHdpZHRoXSBkdXJhdGlvbi0zMDAgbWwtYXV0byBweS0xMFwiIFtuZ1N0eWxlXT1cInNpZGViYXJWaXNpYmxlXHJcbiAgICAgID8geyB3aWR0aDogJ2NhbGMoMTAwJSAtIDE1cmVtKScgfVxyXG4gICAgICA6IHsgd2lkdGg6ICcxMDAlJyB9XCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiIsImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4vYXBwL2FwcC5jb25maWcnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IGxvY2FsZUVzIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2VzJztcclxuXHJcbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVFcywgJ2VzLUVTJyk7XHJcblxyXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIGFwcENvbmZpZykuY2F0Y2goKGVycikgPT5cclxuICBjb25zb2xlLmVycm9yKGVycilcclxuKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O1NBQVMsV0FBVyxjQUFjLGNBQWM7Ozs7Ozs7QUFBaEQsSUFhYTtBQWJiOzs7QUFhTSxJQUFPLDhCQUFQLE1BQU8sNkJBQTJCO01BQy9CLHFCQUE2QixDQUFBO01BQzFCLFVBQVUsSUFBSSxhQUFZO01BQzdCLFVBQVUsb0JBQUksS0FBSTtNQUV6QixjQUFjLE9BQW9CO0FBRWhDLFlBQUksQ0FBQyxTQUFTLE1BQU0sV0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7QUFDN0M7UUFDRjtBQUVBLGNBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSTtBQUNyQixhQUFLLFFBQVEsS0FBSyxFQUFFLE9BQU8sSUFBRyxDQUFFO01BQ2xDO01BRUEsYUFBVTtBQUNSLGFBQUsscUJBQXFCLENBQUE7QUFDMUIsYUFBSyxRQUFRLEtBQUssRUFBRSxPQUFPLFFBQVcsS0FBSyxPQUFTLENBQUU7TUFDeEQ7O3lDQWxCVyw4QkFBMkI7TUFBQTtnRkFBM0IsOEJBQTJCLFdBQUEsQ0FBQSxDQUFB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O01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUZqQjtNQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQW9CLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7dUNBTHBCLHNCQUFvQjtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BSHBCO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFBb0IsR0FBQSxDQUFBLGVBQUEsbUJBQUEsbUJBQUEsY0FBQSxlQUFBLGlCQUFBLGlCQUFBLG1CQUFBLGtCQUFBLGNBQUEsb0JBQUEsb0JBQUEsZ0JBQUEsQ0FBQTt1Q0FKcEIscUJBQW1CO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFKbkI7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQTtJQUFvQixHQUFBLENBQUEsZUFBQSxtQkFBQSxtQkFBQSxjQUFBLGVBQUEsaUJBQUEsaUJBQUEsbUJBQUEsa0JBQUEsY0FBQSxvQkFBQSxvQkFBQSxnQkFBQSxDQUFBO3VDQUhwQixnQkFBYztNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BTGQ7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtJQUFvQixHQUFBLENBQUEsZUFBQSxtQkFBQSxtQkFBQSxjQUFBLGVBQUEsaUJBQUEsaUJBQUEsbUJBQUEsa0JBQUEsY0FBQSxvQkFBQSxvQkFBQSxnQkFBQSxDQUFBO3VDQURwQiwwQkFBd0I7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQVB4QjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUVBO0lBQW9CLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7dUNBQXBCLHNCQUFvQjtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BUnBCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFBd0IsR0FBQSxDQUFB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QkFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLE9BQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxxQkFBQSxFQUFBLFNBQUEsQ0FBQTtJQUFBLEdBQUE7Ozs7O0FFMUN6QixTQUFTLDRCQUE0QjtBQUdyQyxTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLGNBQWM7QUFKckI7O0FBQ0E7QUFDQTtBQUlBLHVCQUFtQixVQUFVLE9BQU87QUFFcEMseUJBQXFCLGNBQWMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUNuRCxRQUFRLE1BQU0sR0FBRyxDQUFDOzs7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpMCIsImkyIiwiQ29tcG9uZW50IiwiSHR0cFBhcmFtcyIsImkwIiwiaTIiLCJDb21wb25lbnQiLCJfYzAiLCJpMCIsImkyIiwiQ29tcG9uZW50IiwiSHR0cFBhcmFtcyIsImkwIiwiaTIiLCJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiSHR0cFBhcmFtcyIsImkwIiwiaTIiLCJDb21wb25lbnQiLCJIdHRwUGFyYW1zIiwiaTAiLCJpMiIsIkNvbXBvbmVudCIsIkh0dHBQYXJhbXMiLCJpMCIsImkzIiwiaTQiLCJpMiIsImk1IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkZvcm1zTW9kdWxlIiwiQ2FyZE1vZHVsZSIsIlNlbGVjdE1vZHVsZSIsImkwIiwiaTEiLCJpMiIsImkzIiwiaTQiLCJpNSIsImk2IiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiaTAiLCJMT0NBTEVfSUQiLCJDb21tb25Nb2R1bGUiLCJUb29sYmFyTW9kdWxlIiwiQ2FyZE1vZHVsZSIsIkNoYXJ0TW9kdWxlIiwiTWVzc2FnZVNlcnZpY2UiLCJDb21wb25lbnQiLCJTaGFyZWRNb2R1bGUiLCJDYXJkTW9kdWxlIiwiRHJvcGRvd25Nb2R1bGUiLCJUb29sYmFyTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQnV0dG9uTW9kdWxlIiwiX2MwIiwiaTAiLCJpMSIsImkyIiwiaTMiLCJpNCIsImk1IiwiaTYiLCJpNyIsImk4IiwiaTkiLCJpMTAiLCJpMTEiLCJpMTIiLCJpMTMiLCJpMTQiXX0=