import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-management',
  templateUrl: './expense-management.page.html',
  styleUrls: ['./expense-management.page.scss'],
  standalone:false
})
export class ExpenseManagementPage implements OnInit {
  constructor() { }
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }


  ngOnInit() {
  }

}
