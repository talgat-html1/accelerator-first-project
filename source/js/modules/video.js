const video = document.querySelector('.about__video-container');
const button = document.querySelector('.about__button');
const youtubeUrl = 'https://www.youtube-nocookie.com/embed/9TZXsZItgdw?si=jI9g8kkppSUViXm_';
let iframe;

const createIframe = (data) => {
  iframe = document.createElement('iframe');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('src', data);
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.src += '&autoplay=1';
  return iframe;
};

const replacePicture = () => {
  createIframe(youtubeUrl);
  video.innerHTML = '';
  video.appendChild(iframe);
};

button.addEventListener('click', (evt) => {
  evt.preventDefault();
  replacePicture();
});
