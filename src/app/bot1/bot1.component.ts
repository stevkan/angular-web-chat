import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare global {
  interface Window {
    WebChat: any;
  }
}

window.WebChat = window.WebChat || {};
@Component( {
  selector: 'app-bot1',
  templateUrl: './bot1.component.html',
  styleUrls: [ './bot1.component.css' ],
  standalone: false
} )
export class Bot1Component implements OnInit {
  @ViewChild( 'botWindow' ) botWindowElement: ElementRef;
  public BotChat: any;
  public CognitiveServices: any;
  async ngOnInit(): Promise<void> {
    this.init();
  }

  async init() {

    const res = await fetch( 'http://localhost:3500/directline/token', { method: 'POST' } );
    const { token } = await res.json();

    const directLine = window.WebChat.createDirectLine( {
      secret: token,
      webSocket: true
    } );

    // const speechToTextPonyfillFactory = await window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory( {
    //   // We are passing the Promise function to the authorizationToken field.
    //   // This function will be called every time the token is being used.
    //   subscriptionKey: '58d6bc1b83d448bea26c2a3a38191918',
    //   region: 'westus2'
    //   // ,
    //   // speechRecognitionEndpointId: 'https://westus2.api.cognitive.microsoft.com/sts/v1.0/issuetoken',
    // } )

    const textToSpeechPonyfillFactory = await window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory( {
      subscriptionKey: '',
      region: '',
      speechSynthesisDeploymentId: ''
    } );

    // const webSpeechPonyfillFactory = await window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory( {
    //   // We are passing the Promise function to the authorizationToken field.
    //   // This function will be called every time the token is being used.
    //   subscriptionKey: '58d6bc1b83d448bea26c2a3a38191918',
    //   region: 'westus2'
    //   // ,
    //   // speechRecognitionEndpointId: 'https://westus2.api.cognitive.microsoft.com/sts/v1.0/issuetoken',
    // } );

    const styleOptions = {
      bubbleNubOffset: 'center',
      bubbleNubSize: 10,
      bubbleFromUserNubOffset: 'top',
      bubbleFromUserNubSize: 10,
      bubbleFromUserBackground: 'rgba(241,98,54,1)',
      bubbleFromUserTextColor: 'white',
      bubbleMinWidth: 80,
      bubblefontSize: '30px',

    };

    const groupTimestamp = true;
    window.WebChat.renderWebChat(
      {
        userID: 'dl_happy8',
        username: 'My Favorite Martian',
        locale: 'en-US',
        directLine,
        styleOptions,
        groupTimestamp,
        // selectVoice: () => ( { voiceURI: 'My Voice' } ),
        // webSpeechPonyfillFactory: options => {
        //   // tslint:disable-next-line: max-line-length
        //   const { speechSynthesis, SpeechSynthesisUtterance, SpeechGrammarList, SpeechRecognition } = textToSpeechPonyfillFactory( options );
        //   return {
        //     SpeechGrammarList,
        //     SpeechRecognition,
        //     speechSynthesis,
        //     SpeechSynthesisUtterance
        //   };
        // }
      },
      this.botWindowElement.nativeElement
    );
  }
}
