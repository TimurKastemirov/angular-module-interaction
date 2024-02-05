import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaredInAppModuleComponent } from './declared-in-app-module.component';

describe('DeclaredInAppModuleComponent', () => {
  let component: DeclaredInAppModuleComponent;
  let fixture: ComponentFixture<DeclaredInAppModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclaredInAppModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclaredInAppModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
