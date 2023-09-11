const Joke = document.getElementById('joke-p');
const JokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        Joke.innerHTML = JSON.parse(this.responseText).value;
      } else {
        Joke.innerHTML = 'Something went Worng (Not Funny)';
      }
    }
  };
  xhr.send();
};

JokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
