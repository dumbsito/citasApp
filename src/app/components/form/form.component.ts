import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

 nombre=""
 fecha=""
 hora=""
 sintomas=""
 newmostrar:any
@Output() nuevaCita=new EventEmitter<any>();
 constructor(private servi:DataService){

 }
mostrar(){
  console.log(this.fecha);
  let num=1;
  let newCita={
    id:num,
    nombre:this.nombre,
    fecha:this.fecha,
    hora:this.hora,
    sintomas:this.sintomas
  }
  num++;

  this.nuevaCita.emit(newCita)

  this.newmostrar=false
}
}
