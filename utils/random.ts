import { readableStreamFromIterable } from "./readable_stream_from_iterable";

const generateRandomText = () =>
  Math.random().toString(36).substring(2, 15) + "\n";

async function* randomTextGenerator() {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    yield generateRandomText();
  }
}

export const edgeStream = () =>
  readableStreamFromIterable(randomTextGenerator());
