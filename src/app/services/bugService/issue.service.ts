import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Issue } from './issue';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IssueService {

  baseurl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // POST
  CreateIssue(data: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.baseurl + '/issueTracking/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  GetIssue(id: string): Observable<Issue> {
    return this.http.get<Issue>(this.baseurl + '/issueTracking/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  GetIssues(): Observable<Issue> {
    return this.http.get<Issue>(this.baseurl + '/issueTracking/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT
  UpdateIssue(id: string, data: Issue): Observable<Issue> {
    return this.http.put<Issue>(this.baseurl + '/issueTracking/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE
  DeleteIssue(id: string) {
    return this.http.delete<Issue>(this.baseurl + '/issueTracking/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
