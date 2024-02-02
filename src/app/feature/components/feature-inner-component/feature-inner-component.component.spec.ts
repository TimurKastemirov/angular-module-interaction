import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureInnerComponentComponent } from './feature-inner-component.component';

describe('FeatureInnerComponentComponent', () => {
  let component: FeatureInnerComponentComponent;
  let fixture: ComponentFixture<FeatureInnerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureInnerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureInnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
