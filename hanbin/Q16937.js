const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(file).toString().trim().split("\n");

function solution() {
  let idx = 0;
  const [H, W] = input[idx++].split(" ").map(Number);
  const N = Number(input[idx++]);
  const stickers = Array(N)
    .fill()
    .map(() => {
      return input[idx++].split(" ").map(Number);
    });

  const condition = [
    (a, b) => a[0] + b[0] <= W && Math.max(a[1], b[1]) <= H,
    (a, b) => a[0] + b[1] <= W && Math.max(a[1], b[0]) <= H,
    (a, b) => a[1] + b[0] <= W && Math.max(a[0], b[1]) <= H,
    (a, b) => a[1] + b[1] <= W && Math.max(a[0], b[0]) <= H,
    (a, b) => a[0] + b[0] <= H && Math.max(a[1], b[1]) <= W,
    (a, b) => a[0] + b[1] <= H && Math.max(a[1], b[0]) <= W,
    (a, b) => a[1] + b[0] <= H && Math.max(a[0], b[1]) <= W,
    (a, b) => a[1] + b[1] <= H && Math.max(a[0], b[0]) <= W,
  ];

  let size = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const sticker_1 = stickers[i];
      const sticker_2 = stickers[j];

      if (areAttachable(sticker_1, sticker_2)) {
        size = Math.max(
          size,
          sticker_1[0] * sticker_1[1] + sticker_2[0] * sticker_2[1]
        );
      }
    }
  }

  function areAttachable(a, b) {
    return condition.some((func) => func(a, b));
  }

  return size;
}

console.log(solution());
