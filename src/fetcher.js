import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  wordsPerSentence: {
    min: 3,
    max: 5,
  },
});

export function fetchData() {
  const seconds = new Date().getSeconds();

  if (seconds % 10 > 5) {
    throw new Error("An error occured");
  }

  return Array.from({ length: 10 }, () => {
    const id = lorem.generateWords(30);
    const value = lorem.generateSentences(1);
    return {
      id,
      value,
    };
  });
}
