import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let statusBarSpy, platformReadySpy, platformSpy: { ready: any; }, homeScreenSpy, routerReadySpy: Promise<void>, routerSpy: { ready: any; };

  beforeEach(async () => {
    //statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    //homeScreenSpy = jasmine.createSpyObj('HomeScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    routerReadySpy = Promise.resolve();
    routerSpy = jasmine.createSpyObj('router', { ready: routerReadySpy });
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
       // { provide: StatusBar, useValue: statusBarSpy },
       // { provide: HomeScreen, useValue: homeScreenSpy },
        { provide: Router, useValue: routerSpy },
        { provide: Platform, useValue: platformSpy },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);

    expect(platformSpy.ready).toHaveBeenCalled();
    await routerReadySpy;
    //expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    //expect(homeScreenSpy.hide).toHaveBeenCalled();
  });


});
