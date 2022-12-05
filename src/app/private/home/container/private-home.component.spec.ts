import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrivateHomeComponent } from './private-home.component';

describe('PrivateHomeComponent', () => {
  let component: PrivateHomeComponent;
  let fixture: ComponentFixture<PrivateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateHomeComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe existir el PrivateHomeComponent', () => {
    const fixture = TestBed.createComponent(PrivateHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
