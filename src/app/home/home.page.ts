import { Component } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tSpeech: string;
  rate: number;
  language: string;

  constructor(private tts: TextToSpeech) {
    this.tSpeech = 'Initial';
    this.rate = 1;
    this.language = 'en-US';
  }

  speak() {
    // @ts-ignore
    this.tts.speak({
      text: this.tSpeech,
      locale: this.language,
      rate: this.rate
    })
        .then((success) => console.log('Success!'))
        .catch((reason: any) => console.log(reason));

    console.log(`${this.tSpeech}, ${this.rate}, ${this.language}`);
  }
}
