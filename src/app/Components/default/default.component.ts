import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

// Custom imports
import {ElasticSearchService} from '../../GlobalServices/elastic-search.service';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PersonAddComponent} from '../person-add/person-add.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  // Global variable
  private Data;

// Data Table
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['Person ID', 'First Name', 'Last Name', 'Email'];

  // Default constructor
  constructor(private es: ElasticSearchService, public dialog: MatDialog) {
  }

  // Form load
  ngOnInit() {
    // Load data
    this.getPeople();
  }

  // Get people
  getPeople() {
    this.es.GetPeople()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource<any>(data.hits.hits);
        }
      );
  }

  // Open dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(PersonAddComponent);
    dialogRef.afterClosed().subscribe(result => this.getPeople());
  }

  // Search filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
