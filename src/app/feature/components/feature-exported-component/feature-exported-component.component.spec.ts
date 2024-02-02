import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExportedComponentComponent } from './feature-exported-component.component';

describe('FeatureExportedComponentComponent', () => {
  let component: FeatureExportedComponentComponent;
  let fixture: ComponentFixture<FeatureExportedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureExportedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureExportedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
