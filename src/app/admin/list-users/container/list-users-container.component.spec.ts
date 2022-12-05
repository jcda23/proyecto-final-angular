import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersContainerComponent } from './list-users-container.component';

describe('ListUsersContainerComponent', () => {
  let component: ListUsersContainerComponent;
  let fixture: ComponentFixture<ListUsersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
