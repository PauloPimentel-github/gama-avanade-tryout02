import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { Appointments } from './model/Appointments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CalendarService {

  private appointmentsUrl = 'api/appointments';  // URL to web api

  constructor( private httpClient: HttpClient) { }

  /** GET events from the server */
  get(): Observable<Appointments[]> {
    return this.httpClient.get<Appointments[]>(this.appointmentsUrl)
      .pipe(catchError(this.handleError('get', []))
    );
  }

  /** GET event by id. Will 404 if id not found */
  getOne(id: string): Observable<Appointments> {
    const url = `${this.appointmentsUrl}/${id}`;
    return this.httpClient.get<Appointments>(url).pipe(
      catchError(this.handleError<Appointments>(`getOne id=${id}`))
    );
  }

  /** GET event by id. Return `undefined` when id not found */
  getNo404<Data>(id: number): Observable<Appointments> {
    const url = `${this.appointmentsUrl}/?id=${id}`;
    return this.httpClient.get<Appointments[]>(url)
      .pipe(
        map(appointments => appointments[0]), // returns a {0|1} element array
        catchError(this.handleError<Appointments>(`getNo404 id=${id}`))
      );
  }

  /** POST: add a new event to the server */
  post(appointment: Appointments): Observable<Appointments> {
    return this.httpClient.post<Appointments>(this.appointmentsUrl, appointment, httpOptions).pipe(
      catchError(this.handleError<Appointments>('post'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    // tslint:disable-next-line:no-shadowed-variable
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
