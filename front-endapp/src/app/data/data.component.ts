import { Component } from '@angular/core';
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  data: any;

  constructor(private dataService: SharedService) {
    this.data = this.dataService.getData();
  }
}
