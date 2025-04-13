import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseManagementPage } from './expense-management.page';

describe('ExpenseManagementPage', () => {
  let component: ExpenseManagementPage;
  let fixture: ComponentFixture<ExpenseManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
