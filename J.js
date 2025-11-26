const inputText = document.getElementById('inputText');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
  const text = inputText.value.trim().toUpperCase();
  output.innerHTML = '';

  if (!text) {
    alert('Please enter some text.');
    return;
  }
  const words = text.split(" ");

  words.forEach(word => {
    if (!word) return; 
    const wordImg = `Images/${word}.gif`;
    const img = document.createElement('img');
    img.src = wordImg;
    img.alt = word;

    img.onerror = () => {
      [...word].forEach(char => {
        if (char.match(/[A-Z]/)) {
          const letterImg = document.createElement('img');
          letterImg.src = `Images/${char}.jpg`;
          letterImg.alt = char;
          output.appendChild(letterImg);
        } else {
          const fallback = document.createElement('span');
          fallback.textContent = char;
          fallback.style.padding = '5px';
          fallback.style.fontSize = '1.2rem';
          output.appendChild(fallback);
        }
      });
    };
    img.onload = () => {
      output.appendChild(img);
    };
    output.appendChild(img);
    const spacer = document.createElement('div');
    spacer.style.width = '20px';
    spacer.style.display = 'inline-block';
    output.appendChild(spacer);
  });
})
