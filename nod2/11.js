

const func = () => {
  setTimeout(() => {
    console.log('Hello after 4 seconds');
    setTimeout(() => {
      console.log('Hello after 8 seconds')
    },4000)
  },4000)
}

func()