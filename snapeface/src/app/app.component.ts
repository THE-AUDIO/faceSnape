import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaceSnap } from './models/face-snaps.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps! : FaceSnap[] ;
  ngOnInit(){
    this.faceSnaps= [
      {
        title :'Nounours',
        description :'mon meilleur amis depuis tout petit',
        location : 'Mahanoro',
        createdDate : new Date(),
        snaps : 100,
        imageurl :'https://ressources.mynoors.com/files/pages/mini/2016/07/31/gros-nounours-75-cm-avec-noeud-plush-company-4323.jpg' ,
        },

        {
          title :'la voiture',
          description :'mon voiture de reve depuis tres long temps',
          createdDate :new Date(),
          snaps :52,
          imageurl :'https://images.frandroid.com/wp-content/uploads/2022/01/tesla-model-s-2013-scaled.jpg'
        } ,
        {
          title : 'la maison',
          description :'la maison que j\' ai toujours voulus durant toute ma vie',
          createdDate :new Date(),
          snaps : 20,
          imageurl : 'https://media.inmobalia.com/imgV1/B8vEv5Xh_VThvnEqMx4G0ZxU_YC_pCgmETwWNQKyeMqLb9Afo_WSoi~kcK5mwaepLzuL4w12nr62dxrO5EAxYLxEmCaagiS9BqQgqCxwr3Q46qENJYnfu2x6FOZ6WEbK_PJMjkt2WUPe8NL0anm75FGt_Od2O3bGQ5FYwfF9XmGtjpZvMiWK51wNAidIWWdEja9~TdAOwWnQY70saNtaFd75h_1xY5qtDJ7atIynKjD9vF__1~nPyAmnf5sNunTr6YT~KkqF30WNTFfl12BaVjH4FyQ9dhMswye7WF~IKij8HQ789s3he9LcB6ZF0DujJpYh2NcL2rqqsxE01vIZ0h5ZrIhpf5dJrDQE69MqtrTbDUr04YQ-.jpg'
        },
        {
          title :'Nounours',
          description :'mon meilleur amis depuis tout petit',
          location : 'Mahanoro',
          createdDate : new Date(),
          snaps : 40,
          imageurl :'https://ressources.mynoors.com/files/pages/mini/2016/07/31/gros-nounours-75-cm-avec-noeud-plush-company-4323.jpg' ,
          },
  
          {
            title :'la voiture',
            description :'mon voiture de reve depuis tres long temps',
            createdDate :new Date(),
            snaps :120,
            imageurl :'https://images.frandroid.com/wp-content/uploads/2022/01/tesla-model-s-2013-scaled.jpg'
          } ,
          {
            title : 'la maison',
            description :'la maison que j\' ai toujours voulus durant toute ma vie',
            createdDate :new Date(),
            snaps : 1000,
            imageurl : 'https://media.inmobalia.com/imgV1/B8vEv5Xh_VThvnEqMx4G0ZxU_YC_pCgmETwWNQKyeMqLb9Afo_WSoi~kcK5mwaepLzuL4w12nr62dxrO5EAxYLxEmCaagiS9BqQgqCxwr3Q46qENJYnfu2x6FOZ6WEbK_PJMjkt2WUPe8NL0anm75FGt_Od2O3bGQ5FYwfF9XmGtjpZvMiWK51wNAidIWWdEja9~TdAOwWnQY70saNtaFd75h_1xY5qtDJ7atIynKjD9vF__1~nPyAmnf5sNunTr6YT~KkqF30WNTFfl12BaVjH4FyQ9dhMswye7WF~IKij8HQ789s3he9LcB6ZF0DujJpYh2NcL2rqqsxE01vIZ0h5ZrIhpf5dJrDQE69MqtrTbDUr04YQ-.jpg'
          }
      
    ]
  }
}
