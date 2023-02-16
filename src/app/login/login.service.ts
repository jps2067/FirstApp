import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import { getIdToken } from "firebase/auth";

@Injectable()
export class LoginService{

constructor(private router:Router){


}

token:string | undefined;


login(email:string, password:string){

  firebase.auth().signInWithEmailAndPassword(email, password).then(

    Response=>{

      firebase.auth().currentUser?.getIdToken().then(

        token=>(

          this.token=token,
          this.router.navigate(["/tarjetas"])

        )

      )

    }

  )

}

getIdToken(){

  return this.token;

}

}


