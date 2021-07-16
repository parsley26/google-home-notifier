var fs = require('fs');
var VoiceText = require('voicetext');

var voice = new VoiceText('@API-KEY@');
const voiceFilePath = '/opt/google-home-notifier/voice.wav';
const voiceUrlPath = 'http://192.168.1.2:8091/voice';
 
class VoiceTextWriter{
    convertToText(text){
        return new Promise(function(resolve,reject){
            voice
                .speaker(voice.SPEAKER.HIKARI)
                .emotion(voice.EMOTION.HAPPINESS)
                //	.emotion_level(voice.EMOTION_LEVEL.HIGH)
                .emotion_level(2)
                .speed(100)
                .volume(120)
                .speak(text, function(e, buf){
                    if(e){
                        console.error(e);
                        reject(e);
                    }else{
                        fs.writeFileSync(voiceFilePath, buf, 'binary');
                        resolve(voiceUrlPath);
                    }
                });
        });
    }
}
module.exports = VoiceTextWriter;
