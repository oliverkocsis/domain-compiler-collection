export const DATA_TABLE_TS_TEMPLATE = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { {{pascal}} } from '../{{kebab}}';
import { {{pascal}}Service } from '../{{kebab}}.service';

@Component({
  selector: 'app-{{kebab}}-table',
  templateUrl: './{{kebab}}-table.component.html',
  styleUrls: ['./{{kebab}}-table.component.scss']
})
export class {{pascal}}TableComponent implements OnInit, OnDestroy {
  displayedColumns = [
    {{#properties}}
    '{{camel}}', 
    {{/properties}}
  ];
  dataSource: MatTableDataSource<{{pascal}}>;
  subscription: Subscription;

  constructor(private service: {{pascal}}Service) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<{{pascal}}>();
    this.subscription = this.service.subscribe((data: {{pascal}}[]) => {
      this.dataSource.data = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
`