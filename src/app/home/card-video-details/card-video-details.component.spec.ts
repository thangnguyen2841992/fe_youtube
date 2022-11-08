import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVideoDetailsComponent } from './card-video-details.component';

describe('CardVideoDetailsComponent', () => {
  let component: CardVideoDetailsComponent;
  let fixture: ComponentFixture<CardVideoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVideoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
