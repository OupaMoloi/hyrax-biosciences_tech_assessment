import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCountryPage } from './view-country.page';

describe('ViewCountryPage', () => {
  let component: ViewCountryPage;
  let fixture: ComponentFixture<ViewCountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCountryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
