import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookContainerComponent } from './list-book-container.component';

describe('ListBookContainerComponent', () => {
  let component: ListBookContainerComponent;
  let fixture: ComponentFixture<ListBookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
