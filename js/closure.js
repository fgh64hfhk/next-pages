function createCounter(fn, delay) {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const CounterA = createCounter();
const CounterB = createCounter();

CounterA();
CounterA();
CounterB();
CounterB();
