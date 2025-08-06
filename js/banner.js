
/ ////////////////////////////////////////////////////////////////////////////////////////////////


// typewriter
 {
  const sentences = [
  "Designing clean, responsive websites.",
  "Creating bold and intuitive interfaces.",
  "Delivering seamless digital experiences.",
  "“Interfaces that move with purpose."
  ];

  const el = document.getElementById("typewriter");
  let sentenceIndex = 0;
  let wordIndex = 0;
  let isDeleting = false;
  let lastTime = 0;
  let delay = 300;
  const pauseTime = 2000;

  function typeWriterEffect(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;

    if (delta > delay) {
      const sentence = sentences[sentenceIndex];
      const words = sentence.split(" ");

      if (!isDeleting) {
        wordIndex++;
        el.textContent = words.slice(0, wordIndex).join(" ");

        delay = wordIndex === words.length ? pauseTime : 300;
        isDeleting = wordIndex === words.length;
      } else {
        wordIndex--;
        el.textContent = words.slice(0, wordIndex).join(" ");

        delay = wordIndex === 0 ? 400 : 100;
        if (wordIndex === 0) {
          isDeleting = false;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
        }
      }

      lastTime = timestamp;
    }

    requestAnimationFrame(typeWriterEffect);
  }

  requestAnimationFrame(typeWriterEffect);
}
////////////////////////////////////////////////////////////////////////////////////////////////

