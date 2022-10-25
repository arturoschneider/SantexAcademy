import {Users} from './user'
export interface Encuestas extends Users {
  id_encuesta: number;
  user: Users;
  cod_area: number;
  fecha: Date;
  num_listado: number;
  num_vivienda: number;
  num_hogar: number;
  accion: string;


}

/* DATE.JS (MOMENT.JS) TUTORIAL */
