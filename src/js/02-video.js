import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  // Зберегти час відтворення в локальне сховище
  localStorage.setItem('videoplayer-current-time', currentTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
player.on('timeupdate', throttle(function(data) {
  const currentTime = data.seconds;
  // Зберегти час відтворення в локальне сховище
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));