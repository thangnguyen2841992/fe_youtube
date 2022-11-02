import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindVideoByHastagComponent } from './find-video-by-hastag.component';

describe('FindVideoByHastagComponent', () => {
  let component: FindVideoByHastagComponent;
  let fixture: ComponentFixture<FindVideoByHastagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindVideoByHastagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindVideoByHastagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
