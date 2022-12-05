import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookContainerComponent } from './add-book-container.component';

describe('AddBookContainerComponent', () => {
  let component: AddBookContainerComponent;
  let fixture: ComponentFixture<AddBookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
