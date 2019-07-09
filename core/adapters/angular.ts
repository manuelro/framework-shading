import './angular/polyfills'
import { Component, NgModule, Input } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { IConfig } from './angular/interfaces'

export default (config: IConfig) : any => {
  @Component({ selector: config.node, template: config.view })
  class AppComponent {
    model: any = config.model
  }

  @NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  class AppModule {}

  platformBrowserDynamic().bootstrapModule(AppModule)
}
