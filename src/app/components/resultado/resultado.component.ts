import { Component, EventEmitter, Input ,OnInit, Output} from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{

   @Input() lista:any
    @Output() deleteCita=new EventEmitter<number>()
   mostrar:boolean=true
  constructor() { 
    
  }

  eliminar(index:number){
this.deleteCita.emit(index)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
