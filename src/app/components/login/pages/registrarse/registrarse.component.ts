import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

    //Variable
    hide = true;
  constructor() { }

  ngOnInit(): void {
  }
/* <div class="row-2">
                                <mat-form-field  class="font1 padding-5" appearance="outline">
                                    <mat-label>Seleccione su Comuna</mat-label>
                                    <mat-select>
                                        <mat-option value="one">Comuna 1</mat-option>
                                        <mat-option value="one">Comuna 2</mat-option>
                                        <mat-option value="one">Comuna 3</mat-option>
                                        <mat-option value="one">Comuna 4</mat-option>
                                        <mat-option value="one">Comuna 5</mat-option>
                                        <mat-option value="one">Comuna 6</mat-option>
                                        <mat-option value="one">Comuna 7</mat-option>
                                    </mat-select>
                                </mat-form-field>
                                <mat-form-field  class="font1 padding-5" appearance="outline">
                                    <mat-label>Seleccione su Barrio</mat-label>
                                    <mat-select>
                                        <mat-option value="one">San Fernando</mat-option>
                                        <mat-option value="two">12 Octubre</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>*/
}
