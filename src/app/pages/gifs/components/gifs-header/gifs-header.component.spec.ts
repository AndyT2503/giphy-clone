import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsHeaderComponent } from './gifs-header.component';

describe('GifsHeaderComponent', () => {
  let component: GifsHeaderComponent;
  let fixture: ComponentFixture<GifsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
