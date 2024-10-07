let h1 = document.querySelector("h1");
let h1Text = h1.textContent;
let htmlSpan = "";

// Funtion to split the letter of h1 text
function breakText() {
  let splittedText = h1Text.split(""); // To split letter of the text
  splittedText.forEach((letter) => {
    htmlSpan += `<span class="letters">${letter}</span>`;
  });
}
breakText();
h1.innerHTML = htmlSpan;

gsap.from(".letters", {
  y: 80,
  duration: 0.5,
  delay: 0.2,
  opacity: 0,
  stagger: {
    amount: 0.5,
    // from: "edges",
  },
});
