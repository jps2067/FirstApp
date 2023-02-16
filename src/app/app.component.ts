import { Component } from '@angular/core';

import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';


ngOnInit(): void {

firebase.initializeApp({

  apiKey: "AIzaSyAknn55KeTepNn7i1ivM-Y8u5rsYy0ro0M",
  authDomain: "giasapp-ea313.firebaseapp.com",

});

}

}
