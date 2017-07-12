import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyVehiclesComponent } from './list-my-vehicles.component';

describe('ListMyVehiclesComponent', () => {
  let component: ListMyVehiclesComponent;
  let fixture: ComponentFixture<ListMyVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
