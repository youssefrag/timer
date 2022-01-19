args = process.argv
const times = args.splice(2, args.length - 1)
times.forEach(time => {
  const timeInSeconds = Number(time) * 100
  if (!(typeof timeInSeconds === 'number') || time < 0) return;
  // console.log(timeInSeconds, "is a positive number")
  // console.log(typeof timeInSeconds)
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * timeInSeconds);
})

// process.stdout.write('\x07');
// setTimeout(() => {
//   process.stdout.write('\x07');
// }, 10000);