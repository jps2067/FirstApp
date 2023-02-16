import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{  background-color: aquamarine}"]
})

export class EmpleadoComponent {

  nombre="Juan";
  apellido="Diaz";
  edad=31;
  empresa="Google";


  //getedad(){

   //
  //}

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){

    this.usuRegistrado=true;
  }

  llamaEmpresa(value:string){
  }

  setUsuarioRegistrado(event:Event){

    //alert("El usuario se ha registrado")



    if((<HTMLInputElement>event.target).value=="si"){

      this.textoDeRegistro="El usuario se acaba de registrar";
    }else
    {
      this.textoDeRegistro="No hay nadie registrado";
    }

  }

}
