

const func = () => {
    let numb = 1000;
  setInterval(() => {
    console.log(`Hello world ${numb}`);
    numb = numb + 1000;
  },numb)
}

func();