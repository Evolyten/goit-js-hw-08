import Vimeo from "@vimeo/player"
import throttle from "lodash.throttle"

const iframe = document.querySelector('#vimeo-player');
console.log(iframe)
const player = new Vimeo(iframe);
let LOCALSTORAGE_KEY = 'videoplayer-current-time'

const onPlay = (e) => {

localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(e['seconds']))   
        console.log(e)
    }
   
player.on("timeupdate", throttle(onPlay,1000))
let curentTime = localStorage.getItem(LOCALSTORAGE_KEY)

console.log(localStorage.getItem(LOCALSTORAGE_KEY))
if (curentTime)
{
    player.setCurrentTime(curentTime).then(function (seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
localStorage.setItem(LOCALSTORAGE_KEY, 0)
}
