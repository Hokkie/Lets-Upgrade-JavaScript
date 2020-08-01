const quotes = [
  'It’s not about ideas. It’s about making ideas happen. -Scott Belsky',
  'Always deliver more than expected. -Larry Page',
  'The most courageous act is still to think for yourself. Aloud. -Coco Chanel',
  'What would you do if you were not afraid? -Sheryl Sandberg',
  'Nothing will work unless you do -Maya Angelou',
  'Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me -Arianna Huffington',
  'Gantungkan cita-cita mu setinggi langit! Bermimpilah setinggi langit. Jika engkau jatuh, engkau akan jatuh di antara bintang-bintang. -Soekarno',

]

function newQuote() {
  const randomNum = Math.floor(Math.random() * 7);
  document.getElementById('quoteDisp').innerHTML = quotes[randomNum];
}
