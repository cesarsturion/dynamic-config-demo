import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppInitService } from './app.init';
import {HttpClientModule} from '@angular/common/http';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent],
  imports: [BrowserModule, CoreModule, HttpClientModule],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}