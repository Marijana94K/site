const faders = document.querySelectorAll('.fade-in');

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

const config = { 
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
};

const scrollFade = new IntersectionObserver(function(entries, scrollFade){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('appear');
            scrollFade.unobserve(entry.target);
        }
    });
}, config);

faders.forEach(fader => {
    scrollFade.observe(fader);
})