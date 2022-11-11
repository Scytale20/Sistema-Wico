import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EntradasService } from 'src/app/service/entradas.service';
import { Ientradas } from 'src/assets/models/entradas';


@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  
  entradasForm: FormGroup;
  btnActive: boolean = true;
  
  entradas: Ientradas[] = [
    {id: 4333, fecha: new Date('2022/10/28'), fecha_remito: new Date('2022/10/28'), yacimiento: 'Rincon de las Cenizas', producto: 'Crudo', proveedor: 'Total Austral S.A.', nominal: 35000, bruto: 43500, tara: 13200, neto: 30300, descargado: 34750, remito: 15223, densidad_15: 0.755, estado: 'terminado'},
    {id: 4334, fecha: new Date('2022/10/28'), fecha_remito: new Date('2022/10/28'), yacimiento: 'Rincon de las Cenizas', producto: 'Crudo', proveedor: 'Total Austral S.A.', nominal: 35000, bruto: 43500, tara: 13200, neto: 30300, descargado: 34750, remito: 15223, densidad_15: 0.755, estado: 'terminado'},
    {id: 4335, fecha: new Date('2022/10/28'), fecha_remito: new Date('2022/10/28'), yacimiento: 'Rincon de las Cenizas', producto: 'Crudo', proveedor: 'Total Austral S.A.', nominal: 35000, bruto: 43500, tara: 13200, neto: 30300, descargado: 34750, remito: 15223, densidad_15: 0.755, estado: 'terminado'},
    {id: 4336, fecha: new Date('2022/10/28'), fecha_remito: new Date('2022/10/28'), yacimiento: 'Rincon de las Cenizas', producto: 'Crudo', proveedor: 'Total Austral S.A.', nominal: 35000, bruto: 43500, tara: 13200, neto: 30300, descargado: 34750, remito: 15223, densidad_15: 0.755, estado: 'terminado'},
    {id: 4337, fecha: new Date('2022/10/28'), fecha_remito: new Date('2022/10/28'), yacimiento: 'Rincon de las Cenizas', producto: 'Crudo', proveedor: 'Total Austral S.A.', nominal: 35000, bruto: 43500, tara: 13200, neto: 30300, descargado: 34750, remito: 15223, densidad_15: 0.755, estado: 'terminado'},
  ]

  constructor(private formBuilder: FormBuilder, private entradaService: EntradasService) {

    this.entradasForm = this.formBuilder.group({
      id:[''], 
      fecha:[''],
      fecha_remito:[''],
      yacimiento:[''],
      producto:[''],
      proveedor:[''],
      nominal:[''],
      bruto:[''],
      tara:[''],
      neto:[''],
      remito:[''],
      densidad_15:[''],
      descargado:[''],
      estado:['']
    })
   }

  
  	
  
  ngOnInit(): void {
    this.getEntradas()
  }

  onSubmit(){
    let entrada: Ientradas = this.entradasForm.value
    this.entradaService.nuevaEntrada(entrada).subscribe((res) => {
      console.log(res)
    })
    
    // this.entradasForm.reset()
    
  }

  private getEntradas(){
    this.entradaService.mostrarEntrada().subscribe((res) => { 
      console.log(res);
    })
  }

}
