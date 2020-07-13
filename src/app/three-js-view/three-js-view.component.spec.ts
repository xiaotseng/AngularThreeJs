import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJsViewComponent } from './three-js-view.component';

describe('ThreeJsViewComponent', () => {
  let component: ThreeJsViewComponent;
  let fixture: ComponentFixture<ThreeJsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeJsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeJsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
