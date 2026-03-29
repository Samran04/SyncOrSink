export interface Question {
  question: string;
  optionA: string;
  optionB: string;
}

export const staticQuestions: Question[] = [
  { question: "Lose ₹500 OR lose your phone for 1 day?", optionA: "Lose ₹500", optionB: "Lose phone" },
  { question: "Tell your best friend a harsh truth OR lie to keep them happy?", optionA: "Harsh truth", optionB: "Lie" },
  { question: "Cook a 3-course meal OR order fast food?", optionA: "Cook", optionB: "Order food" },
  { question: "Steal your friend's crush OR let a stranger steal them?", optionA: "Steal crush", optionB: "Let stranger" },
  { question: "Be rich but alone OR poor with great friends?", optionA: "Rich & Alone", optionB: "Poor but Friends" },
  { question: "Send a risky text and throw phone OR draft it and delete it?", optionA: "Send & Throw", optionB: "Draft & Delete" },
  { question: "Win a free vacation but you leave in 1 hour OR get $100 right now?", optionA: "Vacation", optionB: "$100 Now" },
  { question: "Betray your group for a million dollars OR stick with them?", optionA: "Betray for $1M", optionB: "Stick with them" },
  { question: "Always be 10 minutes late OR always be 30 minutes early?", optionA: "10 min late", optionB: "30 min early" },
  { question: "Share your browsing history OR lose all your money?", optionA: "Share history", optionB: "Lose money" },
];

export const getRandomFallbackQuestions = (count: number = 10) => {
  const shuffled = [...staticQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
