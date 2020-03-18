import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleService } from '../simple.service';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GreetComponent } from './greet.component';

describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetComponent ],
      imports: [FormsModule],
      providers: [SimpleService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get greetings', () => {
    component.username = 'Sai Sampath Kumar';
    expect(component.getGreeting()).toBe('Hello Sai Sampath Kumar');
  });

  it('Handle state change', () => {
    component.username = 'Bob';

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Hello Bob');
  });

  it('Add numbers', () => {
    component.numberA = 10;
    component.numberB = 20;

    const button: DebugElement = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').textContent).toBe('30');
  });
});
