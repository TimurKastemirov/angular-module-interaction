import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreExportedComponentComponent } from './core-exported-component.component';

describe('CoreExportedComponentComponent', () => {
  let component: CoreExportedComponentComponent;
  let fixture: ComponentFixture<CoreExportedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreExportedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreExportedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
