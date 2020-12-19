import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WareHousePage } from './ware-house.page';

describe('WareHousePage', () => {
  let component: WareHousePage;
  let fixture: ComponentFixture<WareHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WareHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
