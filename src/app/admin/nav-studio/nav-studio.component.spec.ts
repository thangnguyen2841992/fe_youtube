import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStudioComponent } from './nav-studio.component';

describe('NavStudioComponent', () => {
  let component: NavStudioComponent;
  let fixture: ComponentFixture<NavStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
