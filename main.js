"use strict";
document.querySelector('[type=search]').focus();
document.querySelector('[type=search]').addEventListener('keyup', evt => {
    const input = evt.target;
    console.debug(evt);
    const query = input.value;
    if (['person', 'car', 'umbrella'].includes(query)) {
        render(325, 'video/IngestFile-30054623.mp4');
    }
    else {
        document.querySelector('.results')
            .innerHTML = `<h4>Kunne ikke finde noget :L</h4>`;
    }
});
function render(frameNum, src) {
    const fps = 25;
    const frametime = 1000 / fps;
    document.querySelector('.results')
        .innerHTML = `

<article class="grid-x grid-margin-x">
  <div class="cell small-12"><h4>Results: 1 yay</h4></div>
  
  <div class="cell shrink">
      <p><img src="video/predictions.jpg"></p>
      <p>${src}</p>
  </div>
  <div class="cell shrink">
      <p><video style="background: #000;" controls src="${src}" preload="auto"></video></p>
      <p>frame ${frameNum}</p>
  </div>
</article>
    `;
    document.querySelector('video')
        .addEventListener('loadedmetadata', evt => {
        console.debug(evt);
        const video = evt.target;
        video.currentTime = (frametime * frameNum + (frametime * .99)) / 1000;
    }, { once: true });
}
