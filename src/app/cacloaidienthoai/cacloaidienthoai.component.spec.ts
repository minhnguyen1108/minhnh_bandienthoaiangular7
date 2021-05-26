import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacloaidienthoaiComponent } from './cacloaidienthoai.component';

describe('CacloaidienthoaiComponent', () => {
  let component: CacloaidienthoaiComponent;
  let fixture: ComponentFixture<CacloaidienthoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacloaidienthoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacloaidienthoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
