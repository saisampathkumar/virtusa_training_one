import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleService);
  });

  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    service = TestBed.get(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call sayHello', () => {
    const name = 'Bod';
    const greeting = service.sayHello(name);

    expect(greeting).toBe(`Hello ${name}`);
  });

  it('should add numbers', (done) => {
    service.addNummbers(3, 8).subscribe((result) => {
      expect(result).toBe(11);
      done();
    });
  });

});
