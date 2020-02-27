import {Injectable} from '@angular/core';

// Custom imports
import {Client} from 'elasticsearch';

@Injectable({
  providedIn: 'root'
})
export class ElasticSearchService {
  // Global variable
  private client: Client;

  // Default constructor
  constructor() {
    if (!this.client) {
      this.Connect();
    }
  }

  // Connection function
  private Connect() {
    this.client = new Client({host: 'http://localhost:9200', log: 'trace'});
  }

  // Connection availability check
  isAvailable(): any {
    return this.client.ping({requestTimeout: Infinity, body: 'NSP is here!'});
  }
}
