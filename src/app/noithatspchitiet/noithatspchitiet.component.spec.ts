import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoithatspchitietComponent } from './noithatspchitiet.component';

describe('NoithatspchitietComponent', () => {
  let component: NoithatspchitietComponent;
  let fixture: ComponentFixture<NoithatspchitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoithatspchitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoithatspchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
