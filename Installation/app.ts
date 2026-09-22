class Countdown {
  constructor(private start: number) {}

  // Hook into JavaScript's iteration system
  [Symbol.iterator]() {
    let counter = this.start;
    return {
      next() {
        if (counter > 0) {
          return { value: counter--, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
}

const count = new Countdown(3);

for (const num of count) {
  console.log(num); // Logs: 3, then 2, then 1
}