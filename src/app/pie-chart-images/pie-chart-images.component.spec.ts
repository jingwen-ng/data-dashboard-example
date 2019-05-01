import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartImagesComponent } from './pie-chart-images.component';

describe('PieChartImagesComponent', () => {
  let component: PieChartImagesComponent;
  let fixture: ComponentFixture<PieChartImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
