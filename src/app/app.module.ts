import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppointmentsSeed } from './appointments.seed';

/* COMPONENTES */
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

/* SERVIÇOS */
import { CalendarService } from './calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AppointmentsSeed, { dataEncapsulation: false }
    )
  ],
  providers: [
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

