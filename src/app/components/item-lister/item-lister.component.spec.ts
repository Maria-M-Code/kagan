import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListerComponent } from './item-lister.component';

describe('ItemListerComponent', () => {
  let component: ItemListerComponent;
  let fixture: ComponentFixture<ItemListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
