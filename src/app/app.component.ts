import { Component, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listaTareasApp';


  listaTareas: string[] = [];
  nuevaTarea: string = '';


  constructor(private tareasService: TareasService) {


  }

  ngOnInit(): void {
    this.listaTareas = this.tareasService.getTareas();
  }

  agregarTarea(){
    this.tareasService.addTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this.tareasService.getTareas();
  }

  eliminarTarea(index:number){
   this.tareasService.deleteTarea(index);
   this.listaTareas = this.tareasService.getTareas();

  }


}
