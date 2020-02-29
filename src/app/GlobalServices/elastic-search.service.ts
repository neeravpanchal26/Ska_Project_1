import {Injectable} from '@angular/core';

// Custom imports
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestOptions} from 'http';

@Injectable({
  providedIn: 'root'
})
export class ElasticSearchService {
  // Global variable
  private apiUrl = environment.api;

  // Default constructor
  constructor(private httpClient: HttpClient) {
  }

  // Get People Data
  GetPeople(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'ska_project_1/people/_search') as Observable<any>;
  }

  // Create person
  AddPerson(param: IAddPerson): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'ska_project_1/people/', param) as Observable<any>;
  }
}

// Wrapper Interface
export interface IAddPerson {
  firstName: string;
  lastName: string;
  email: string;
}
