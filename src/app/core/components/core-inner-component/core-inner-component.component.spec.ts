import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreInnerComponentComponent } from './core-inner-component.component';

describe('CoreInnerComponentComponent', () => {
  let component: CoreInnerComponentComponent;
  let fixture: ComponentFixture<CoreInnerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreInnerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreInnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
