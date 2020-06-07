import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { DetailsComponent } from './feature/details/details.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromRoot from './core/state-management/reducers';
import { superHeroesReducers } from './core/state-management/reducers';


export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<fromRoot.AppState>>('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(APP_REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_REDUCER_TOKEN,
      useValue: superHeroesReducers,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
