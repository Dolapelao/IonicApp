import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AccesPage } from './access.page';

describe('AccessPage', () => {
  let component: AccesPage;
  let fixture: ComponentFixture<AccesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
