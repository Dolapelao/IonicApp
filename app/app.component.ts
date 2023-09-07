import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router: Router,
    private platform: Platform,
//    private splashScreen: SplashScreen,
//    private statusBar: StatusBar
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
  //    this.statusBar.styleDefault();
  //    this.splashScreen.hide();
    });
    this.router.navigateByUrl('home')
  };
}
