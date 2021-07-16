# google-home-notifier

色々なサイトを参考させて頂き、2021年7月にforkしました。  
「google-tts-api」「ngrok」を除去して「voicetext」を利用するように修正  

## 設定
###VoiceTextWrite.js
```javascript
var voice = new VoiceText('@API-KEY@');
const voiceFilePath = '/opt/google-home-notifier/voice.wav';
const voiceUrlPath = 'http://192.168.1.2:8091/voice';
```
@API-KEY@: https://cloud.voicetext.jp/webapi で取得  
voiceFilePath: vocetextを利用して作成するwavファイルを置く場所    
voiceUrlPath: Google Homeからgoogle-home-notifierを実行しているサーバへアクセス可能なURLにしてください  

### example.js
```javascript
const serverPort = 8091; // Port
const voiceFilePath = '/opt/google-home-notifier/voice.wav';

var deviceName = 'Nest Hub';
var ip = '192.168.1.20'; // Google Home IP
var defaultLanguage = 'ja';
```
serverPort: VoiceTextWrite.jsのvoiceUrlPathと合わせる  
voiceFilePath: VoiceTextWrite.jsと合わせる  
ip: Google Home端末のIP  
defaultLanguage: デフォルトの言語設定  