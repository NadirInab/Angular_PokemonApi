import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInfoComponent } from './poke-info.component';

describe('PokeInfoComponent', () => {
  let component: PokeInfoComponent;
  let fixture: ComponentFixture<PokeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeInfoComponent]
    });
    fixture = TestBed.createComponent(PokeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
