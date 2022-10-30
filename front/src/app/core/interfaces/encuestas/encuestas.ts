import {Users} from './user'
export interface Encuestas extends Users {
  id: number;
  encuestador: string;
  cod_area: number;
  fecha: Date;
  num_listado: number;
  num_vivienda: number;
  num_hogar: number;
  accion: string;


}

/* DATE.JS (MOMENT.JS) TUTORIAL */
