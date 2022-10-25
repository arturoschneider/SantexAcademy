import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { EncuestaService } from 'src/app/core/services/encuesta/encuesta.service'

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog-page.component.html',
  styleUrls: ['./new-dog-page.component.scss']
})
export class NewDogPageComponent {
  public NuevaEncuestaForm = this.formBuilder.group({});
  public tipoEncuesta = [];


  constructor(private formBuilder: UntypedFormBuilder, private datePipe: DatePipe,
    public encuestaService: EncuestaService,) {}

  ngOnInit(): void {
    this.NuevaEncuestaForm = this.formBuilder.group({
      cod_area: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])),

      num_listado: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),

      fecha: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
        ),

      num_vivienda: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),

      num_hogar: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),

      respondiente: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  onSubmit() {
    if (this.NuevaEncuestaForm.valid) {
        const value = this.NuevaEncuestaForm.value;
        //value.Date = this.datePipe.transform(value.Date, 'dd-MM-yyyy HH:mm');
      this.encuestaService.createEncuestas('http://localhost:4001/instancia/crearInstancia', value).subscribe((res)=> {
        console.log('Encuesta creada')
    })
    }
  }
}
