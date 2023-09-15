import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReprodPage } from './reprod.page';

describe('ReprodPage', () => {
  let component: ReprodPage;
  let fixture: ComponentFixture<ReprodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
