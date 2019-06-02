import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

import { Aluno } from '../../model/aluno.model';
import { AlunoService } from 'src/providers/aluno.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  scheduled = [];
  alunos: Aluno[];
  id: String;
  src_image: String;
  constructor(
    private plt: Platform,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController,
    private alunoService: AlunoService,
    private router: Router
  ) {
    this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        console.log('click', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });

      this.localNotifications.on('trigger').subscribe(res => {
        console.log('trigger', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
    });

  }

  ngOnInit() {
    this.id = "95630422d42d5b2d8621d9bc2c2ab194";
    this.src_image = "../../assets/img/profile.jpg";
    this.getInfoAluno();
    setTimeout(() => {
      this.scheduleNotification()
    }, 8000);
  }

  public getInfoAluno() {
    this.alunoService.getAluno(this.id).subscribe(data => {
      this.alunos = data as Array<Aluno>;

      for (let aluno of this.alunos) {
        if (aluno.curso == "enfUNASP") {
          aluno.curso = "ENFERMAGEM";
        } else if (aluno.curso == "adsUNASP") {
          aluno.curso = "ADS";
        } else if (aluno.curso == "pedUNASP") {
          aluno.curso = "PEDAGOGIA";
        }
      }
      console.log('Lista de alunos', this.alunos)
    });
  }

  public modifyUser() {
    if (this.id == "95630422d42d5b2d8621d9bc2c2ab194") {
      this.id = "20c90cf36b587f7338ed256a8d822e1234";
      this.src_image = "../../assets/img/profile_catossi.jpg";
    } else if (this.id == "20c90cf36b587f7338ed256a8d822e1234") {
      this.id = "20c90cf36b587f7338ed256a8d822eb1234";
      this.src_image = "../../assets/img/profile_gustavo.jpg";
    } else if (this.id = "20c90cf36b587f7338ed256a8d822eb1234") {
      this.id = "95630422d42d5b2d8621d9bc2c2ab194";
      this.src_image = "../../assets/img/profile.jpg";
    }

    this.getInfoAluno();
  }

  scheduleNotification() {
    console.log("CHAMAAAA")
    this.localNotifications.schedule({
      title: 'My first notification',
      text: 'Thats pretty easy...',
      foreground: true
    });
  }

  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.id
      }
    };
    this.router.navigate(['/ranking'], navigationExtras);
  }

  getAll() {
    this.localNotifications.getAll().then(res => {
      this.scheduled = res;
      console.log(this.scheduled)
    });
  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['Quero responder']
    }).then(alert => alert.present());
  }

}
