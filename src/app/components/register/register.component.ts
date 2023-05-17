import { Component } from '@angular/core';
import { GlobalServicesService } from 'src/app/services/global-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  novoUsuario: FormGroup;

  constructor(private globalServicesService: GlobalServicesService, private fb: FormBuilder) {
    this.novoUsuario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  criarUsuario() {
    const dadosUsuario = this.novoUsuario.value;
    this.globalServicesService.novoUsuario(dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha).subscribe((data) => {
      console.log(data);
    },(error) => {
      console.log("Erro ao salvar: ", error);
    });
  }

}
