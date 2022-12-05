import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewsComponent } from './book-news.component';

describe('BookNewsComponent', () => {
  let component: BookNewsComponent;
  let fixture: ComponentFixture<BookNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
