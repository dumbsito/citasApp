import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas:any[] = [];
 mostrarModal:boolean=false;
  agregarCita(cita:any){
    console.log(cita);
    if(this.listCitas.length>1){
      Swal.fire({
        title: 'El maximo de citas es de 2',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }else{
      this.listCitas.push(cita)
      console.log(this.listCitas);
    }  
  }

  eliminarCita(index:number){
     this.listCitas.splice(index,1)
  }
}
