(document.querySelector('[type=search]') as HTMLInputElement).focus();

(document.querySelector('[type=search]') as HTMLElement).addEventListener('keyup', evt => {
  const input = evt.target as HTMLInputElement
  console.debug(evt)
  const query:string = input.value

  if (['person','car','umbrella'].includes(query)) {
    render(325, 'video/IngestFile-30054623.mp4')
  }
  else {
    (document.querySelector('.results') as HTMLElement)
      .innerHTML = `<h4>Kunne ikke finde noget :L</h4>`
  }
})

function render(frameNum:number, src:string) {
  const fps = 25
  const frametime = 1000/fps

  ;(document.querySelector('.results') as HTMLElement)
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
    `


  ;(document.querySelector('video') as HTMLElement)
    .addEventListener('loadedmetadata', evt => {
    console.debug(evt)
    const video = evt.target as HTMLVideoElement

    video.currentTime = (frametime * frameNum + (frametime * .99)) / 1000

  },{once: true})
}