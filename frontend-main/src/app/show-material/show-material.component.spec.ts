import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMaterialComponent } from './show-material.component';

describe('ShowMaterialComponent', () => {
  let component: ShowMaterialComponent;
  let fixture: ComponentFixture<ShowMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
