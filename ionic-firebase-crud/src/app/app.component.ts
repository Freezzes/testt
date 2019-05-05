import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBeQWH77zoT38ODXz28XOMU0i8vZkkz02k",
    authDomain: "crud-43ffb.firebaseapp.com",
    databaseURL: "https://crud-43ffb.firebaseio.com",
    projectId: "crud-43ffb",
    storageBucket: "crud-43ffb.appspot.com",
    };
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
