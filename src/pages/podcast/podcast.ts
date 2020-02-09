import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
// import { NativeAudio } from '@ionic-native/native-audio';
// import { MusicControls } from '@ionic-native/music-controls';

// import { AudioProvider } from 'ionic-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
    selector: 'page-podcast',
    templateUrl: 'podcast.html',
})
export class PodcastPage {

    // myTracks: any[];
    // allTracks: any[];


    file: MediaObject;

    audio = new Audio();
    player: HTMLAudioElement;

    @ViewChild('radio') set playerRef(ref: any) {
        this.player = ref.nativeElement;
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public platform: Platform,
        // private nativeAudio: NativeAudio,
        // private _audioProvider: AudioProvider,
        public musicControls: MusicControls, public media: Media) {

        // The Native Audio plugin can only be called once the platform is ready
        this.platform.ready().then(() => {
            console.log("platform ready");

            // // This is used to unload the track. It's useful if you're experimenting with track locations
            // this.nativeAudio.unload('trackID').then(function () {
            //     console.log("unloaded audio!");
            // }, function (err) {
            //     console.log("couldn't unload audio... " + err);
            // });

            // // 'trackID' can be anything
            // this.nativeAudio.preloadComplex('trackID', 'https://www.fundacionlengua.com/extra/descargas/des_64/A1C1/A1_1_kzm55dfgv.mp3', 1, 1, 0).then(function () {
            //     console.log("audio loaded!");
            // }, function (err) {
            //     console.log("audio failed: " + err);
            // });
        });


        // // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
        // this.myTracks = [{
        //     src: 'https://www.fundacionlengua.com/extra/descargas/des_64/A1C1/A1_1_kzm55dfgv.mp3',
        //     artist: 'Fundación Lengua',
        //     title: 'Clase B1 - 1',
        //     art: 'https://img.freepik.com/vector-gratis/disco-vinilo-caja-papel_100823-2364.jpg?size=338&ext=jpg',
        //     preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        // },
        // {
        //     src: 'https://www.fundacionlengua.com/extra/descargas/des_64/A1C1/A1_1_kzm55dfgv.mp3',
        //     artist: 'Fundación Lengua',
        //     title: 'Calse B1 - 2',
        //     art: 'https://img.freepik.com/vector-gratis/disco-vinilo-caja-papel_100823-2364.jpg?size=338&ext=jpg',
        //     preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
        // }];



        // this.musicControls.subscribe().subscribe(action => {

        //     function events(action) {
        //         const message = JSON.parse(action).message;
        //         switch (message) {
        //             case 'music-controls-next':
        //                 // Do something
        //                 break;
        //             case 'music-controls-previous':
        //                 // Do something
        //                 break;
        //             case 'music-controls-pause':
        //                 // Do something
        //                 break;
        //             case 'music-controls-play':
        //                 // Do something
        //                 break;
        //             case 'music-controls-destroy':
        //                 // Do something
        //                 break;

        //             // External controls (iOS only)
        //             case 'music-controls-toggle-play-pause':
        //                 // Do something
        //                 break;
        //             case 'music-controls-seek-to':
        //                 const seekToInSeconds = JSON.parse(action).position;
        //                 this.musicControls.updateElapsed({
        //                     elapsed: seekToInSeconds,
        //                     isPlaying: true
        //                 });
        //                 // Do something
        //                 break;
        //             case 'music-controls-skip-forward':
        //                 // Do something
        //                 break;
        //             case 'music-controls-skip-backward':
        //                 // Do something
        //                 break;

        //             // Headset events (Android only)
        //             // All media button events are listed below
        //             case 'music-controls-media-button':
        //                 // Do something
        //                 break;
        //             case 'music-controls-headset-unplugged':
        //                 // Do something
        //                 break;
        //             case 'music-controls-headset-plugged':
        //                 // Do something
        //                 break;
        //             default:
        //                 break;
        //         }
        //     }

        //     this.musicControls.listen(); // activates the observable above

        //     this.musicControls.updateIsPlaying(true);

        // });

    }

    settingMusicControl() {
        this.musicControls.destroy(); // it's the same with or without the destroy 
        this.musicControls.create({
            track: 'Test track',        // optional, default : ''
            artist: 'test artist',                       // optional, default : ''
            cover: '',      // optional, default : nothing
            // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
            //           or a remote url ('http://...', 'https://...', 'ftp://...')
            isPlaying: true,                         // optional, default : true
            dismissable: true,                         // optional, default : false

            // hide previous/next/close buttons:
            hasPrev: false,      // show previous button, optional, default: true
            hasNext: false,      // show next button, optional, default: true
            hasClose: true,       // show close button, optional, default: false
            hasSkipForward: false,  // show skip forward button, optional, default: false
            hasSkipBackward: false, // show skip backward button, optional, default: false
            skipForwardInterval: 15, // display number for skip forward, optional, default: 0
            skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
            // iOS only, optional
            album: 'test album',     // optional, default: ''
            duration: 0, // optional, default: 0
            elapsed: 0, // optional, default: 0

            // Android only, optional
            // text displayed in the status bar when the notific\ation (and the ticker) are updated
            ticker: 'Now playing test'
        });
        this.musicControls.subscribe().subscribe((action) => {
            console.log('action', action);
            const message = JSON.parse(action).message;
            console.log('message', message);
            switch (message) {
                case 'music-controls-next':
                    // Do something
                    break;
                case 'music-controls-previous':
                    // Do something
                    break;
                case 'music-controls-pause':
                    // Do something
                    console.log('music pause');
                    this.file.pause();
                    this.musicControls.listen();
                    this.musicControls.updateIsPlaying(false);
                    break;
                case 'music-controls-play':
                    // Do something
                    console.log('music play');
                    this.file.play();
                    this.musicControls.listen();
                    this.musicControls.updateIsPlaying(true);
                    break;
                case 'music-controls-destroy':
                    // Do something
                    break;
                // External controls (iOS only)
                case 'music-controls-toggle-play-pause':
                    // Do something
                    break;
                case 'music-controls-seek-to':
                    // Do something
                    break;
                case 'music-controls-skip-forward':
                    // Do something
                    break;
                case 'music-controls-skip-backward':
                    // Do something
                    break;

                // Headset events (Android only)
                // All media button events are listed below
                case 'music-controls-media-button':
                    // Do something
                    break;
                case 'music-controls-headset-unplugged':
                    // Do something
                    break;
                case 'music-controls-headset-plugged':
                    // Do something
                    break;
                default:
                    break;
            }
        });
        this.musicControls.listen(); // activates the observable above
        this.musicControls.updateIsPlaying(true);
    }

    play() {
        this.file = this.media.create('https://www.fundacionlengua.com/extra/descargas/des_64/A1C1/A1_1_kzm55dfgv.mp3');
        this.file.play();
        this.settingMusicControl();
    }

    pause() {
        this.file.pause();
        this.musicControls.listen();
        this.musicControls.updateIsPlaying(false);
    }

    // ngAfterContentInit() {
    //     // get all tracks managed by AudioProvider so we can control playback via the API
    //     this.allTracks = this._audioProvider.tracks;
    // }

    // playSelectedTrack() {
    //     // use AudioProvider to control selected track 
    //     this.musicControls.create({
    //         track: this.myTracks[0].title,        // optional, default : ''
    //         artist: this.myTracks[0].artist,                       // optional, default : ''
    //         cover: this.myTracks[0].art,      // optional, default : nothing
    //         // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
    //         //           or a remote url ('http://...', 'https://...', 'ftp://...')
    //         isPlaying: true,                         // optional, default : true
    //         dismissable: true,                         // optional, default : false

    //         // hide previous/next/close buttons:
    //         hasPrev: false,      // show previous button, optional, default: true
    //         hasNext: false,      // show next button, optional, default: true
    //         hasClose: true,       // show close button, optional, default: false
    //     });
    //     this._audioProvider.play(this.myTracks[0]);
    // }

    // pauseSelectedTrack() {
    //     // use AudioProvider to control selected track 
    //     this._audioProvider.pause(this.myTracks[0]);
    // }

    // onTrackFinished(track: any) {
    //     console.log('Track finished', track)
    // }

    // playAudio() {
    //     console.log("playing audio");

    //     this.nativeAudio.play('trackID').then(function () {
    //         console.log("playing audio!");
    //     }, function (err) {
    //         console.log("error playing audio: " + err);
    //     });
    // }

    reproducir(): void {
        // this.audio.src = 'https://www.fundacionlengua.com/extra/descargas/des_64/A1C1/A1_1_kzm55dfgv.mp3';
        // this.audio.play();
        this.player.src = 'https://www.fundacionlengua.com/extra/descargas/des_64/A1C1/A1_1_kzm55dfgv.mp3';
        this.player.play();
    }

    parar(): void {
        this.player.pause();
    }

}
