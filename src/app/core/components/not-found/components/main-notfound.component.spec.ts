import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainNotfoundComponent } from './main-notfound.component';

describe('MainNotfoundComponent', () => {
  let component: MainNotfoundComponent;
  let fixture: ComponentFixture<MainNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNotfoundComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe existir el FormLoginComponent', () => {
    const fixture = TestBed.createComponent(MainNotfoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
