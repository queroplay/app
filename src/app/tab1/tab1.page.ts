import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

import { Aluno } from '../../model/aluno.model';
import { AlunoService } from 'src/providers/aluno.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  scheduled = [];
  alunos: Aluno[];

  constructor(
    private plt: Platform,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController,
    private alunoService: AlunoService
  ) {
    // this.plt.ready().then(() => {
    //   this.localNotifications.on('click').subscribe(res => {
    //     console.log('click', res);
    //     let msg = res.data ? res.data.mydata : '';
    //     this.showAlert(res.title, res.text, msg);
    //   });

    //   this.localNotifications.on('trigger').subscribe(res => {
    //     console.log('trigger', res);
    //     let msg = res.data ? res.data.mydata : '';
    //     this.showAlert(res.title, res.text, msg);
    //   });
    // });

  }

  ngOnInit() {
        this.alunoService.getAluno().subscribe(data => {
      this.alunos = data as Array<Aluno>;
      console.log('Lista de alunos', this.alunos)
    });
  
    }

  // scheduleNotification() {
  //   this.localNotifications.schedule({
  //     title: 'My first notification',
  //     text: 'Thats pretty easy...',
  //     foreground: true
  //   });
  // }
  // getAll() {
  //   this.localNotifications.getAll().then(res => {
  //     this.scheduled = res;
  //   });
  // }

  // showAlert(header, sub, msg) {
  //   this.alertCtrl.create({
  //     header: header,
  //     subHeader: sub,
  //     message: msg,
  //     buttons: ['Quero responder']
  //   }).then(alert => alert.present());
  //}

}
