import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

// Custom imports
import {ElasticSearchService} from '../../GlobalServices/elastic-search.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  // Global variable
  private isConnected = false;
  private status: string;

  // Default constructor
  constructor(private es: ElasticSearchService, private cd: ChangeDetectorRef) {
  }

  // Form load
  ngOnInit() {
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
    }).then(() => {
      this.cd.detectChanges();
    });
  }

}
