import { Component } from '@angular/core';

class Music {
    title : string;
    completed : boolean;

    constructor(title:string, completed:boolean = false){
        this.title = title;
        this.completed = completed;
    }
}

const musics : Music[] = [
    {
       title : 'AC/DC',
       completed : true
    },
    {
        title  : 'Guns&Roses',
        completed : false
    },
    {
        title : 'Black Sabbath',
        completed : false
    },
    {
        title : 'Led Zeppelin',
        completed : false
    },
    {
        title : 'The Beatles',
        completed : false
    },
    {
        title : 'Pink Floyd',
        completed : false
    }
    
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    musics : Music[] = musics;
    newMusicTitle : string = '';

    create(){  
        let music : Music = new Music(this.newMusicTitle);       
        this.musics.push(music);
        this.newMusicTitle = '';       
    }

    toggle(music:Music) {
        music.completed = !music.completed;
        console.error("Error!");
    }

    delete(music:Music){
        let index = this.musics.indexOf(music);
        if(index > -1){
            this.musics.splice(index, 1);
        }         
    }
}