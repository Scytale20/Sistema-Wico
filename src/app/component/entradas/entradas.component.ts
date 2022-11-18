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
  btnEditar: boolean = false;
  btnDelete: boolean = false;
  btnCheckbox: boolean = true;
  allCheckbox: boolean = false;
  
  allEntradas: Ientradas[] = []

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
      estado:[''], 
      checkbox:[false]
    })
   }

  
  	
  
  ngOnInit(): void {
    this.getEntradas()
  }

  onSubmit(){
    let entrada: Ientradas = this.entradasForm.value
    this.entradaService.nuevaEntrada(entrada)    
    .subscribe(() => {
      this.getEntradas()

    })    
    this.entradasForm.reset()    
  }


  private getEntradas(){
    this.entradaService.mostrarEntrada().subscribe((entradas) => {       
      this.allEntradas = entradas;
    })
  }

  // Metodo para las checkbox
  checkboxChanged($event) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;   

     const checkedMap = this.allEntradas.map((value) => {
       if(value.id == id) {
         value.checkbox = isChecked;
         this.allCheckbox = false;         
         return value 
       }
       if(id == -1){
        value.checkbox = this.allCheckbox
        return value 
      }
       return value          
     })     
     const check = checkedMap.some((x) => {
      if(x.checkbox === true){
        return true;
      }else{
        return false;
      }
     })
     this.btnEditar = check;         
  }
}
