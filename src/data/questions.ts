export type Trait = "money" | "attachment" | "chaos" | "lazy" | "overthinker" | "betrayal" | "loyalty";

export interface Option {
  text: string;
  trait: Trait;
}

export interface Question {
  id: number;
  text: string;
  optionA: Option;
  optionB: Option;
}

export const questions: Question[] = [
  { id: 1, text: "Lose ₹500 OR lose your phone for 1 day?", optionA: { text: "Lose ₹500", trait: "money" }, optionB: { text: "Lose phone", trait: "attachment" } },
  { id: 2, text: "Tell your best friend a harsh truth OR lie to keep them happy?", optionA: { text: "Harsh truth", trait: "chaos" }, optionB: { text: "Lie", trait: "loyalty" } },
  { id: 3, text: "Cook a 3-course meal OR order fast food?", optionA: { text: "Cook", trait: "overthinker" }, optionB: { text: "Order food", trait: "lazy" } },
  { id: 4, text: "Steal your friend's crush OR let a stranger steal them?", optionA: { text: "Steal crush", trait: "betrayal" }, optionB: { text: "Let stranger", trait: "loyalty" } },
  { id: 5, text: "Be rich but alone OR poor with great friends?", optionA: { text: "Rich & Alone", trait: "money" }, optionB: { text: "Poor but Friends", trait: "attachment" } },
  { id: 6, text: "Send a risky text and throw phone OR draft it and delete it?", optionA: { text: "Send & Throw", trait: "chaos" }, optionB: { text: "Draft & Delete", trait: "overthinker" } },
  { id: 7, text: "Win a free vacation but you leave in 1 hour OR get $100 right now?", optionA: { text: "Vacation", trait: "chaos" }, optionB: { text: "$100 Now", trait: "lazy" } },
  { id: 8, text: "Betray your group for a million dollars OR stick with them?", optionA: { text: "Betray for $1M", trait: "betrayal" }, optionB: { text: "Stick with them", trait: "loyalty" } },
  { id: 9, text: "Always be 10 minutes late OR always be 30 minutes early?", optionA: { text: "10 min late", trait: "lazy" }, optionB: { text: "30 min early", trait: "overthinker" } },
  { id: 10, text: "Share your browsing history OR lose all your money?", optionA: { text: "Share history", trait: "chaos" }, optionB: { text: "Lose money", trait: "money" } },
  { id: 11, text: "Cancel plans at the last minute OR show up and be miserable?", optionA: { text: "Cancel plans", trait: "lazy" }, optionB: { text: "Show up miserable", trait: "loyalty" } },
  { id: 12, text: "Have a perfect memory OR be able to forget anything?", optionA: { text: "Perfect memory", trait: "overthinker" }, optionB: { text: "Forget anything", trait: "chaos" } },
  { id: 13, text: "Find true love OR find a suitcase with $5 Million?", optionA: { text: "True Love", trait: "attachment" }, optionB: { text: "$5 Million", trait: "money" } },
  { id: 14, text: "Never use social media again OR never watch movies/shows again?", optionA: { text: "No Social Media", trait: "lazy" }, optionB: { text: "No Movies", trait: "attachment" } },
  { id: 15, text: "Spill a secret to your mom OR spill it on Instagram?", optionA: { text: "To Mom", trait: "loyalty" }, optionB: { text: "On Instagram", trait: "chaos" } },
  { id: 16, text: "Plan an entire trip OR show up at the airport with no bag?", optionA: { text: "Plan everything", trait: "overthinker" }, optionB: { text: "No bag", trait: "chaos" } },
  { id: 17, text: "Take all the credit for a group project OR do all the work silently?", optionA: { text: "Take credit", trait: "betrayal" }, optionB: { text: "Do the work", trait: "loyalty" } },
  { id: 18, text: "Live without music OR live without internet?", optionA: { text: "No Music", trait: "lazy" }, optionB: { text: "No Internet", trait: "attachment" } },
  { id: 19, text: "Get caught in a lie OR confess before getting caught?", optionA: { text: "Get caught", trait: "chaos" }, optionB: { text: "Confess", trait: "overthinker" } },
  { id: 20, text: "Give up you favorite food OR give up your best friend for a year?", optionA: { text: "Favorite food", trait: "loyalty" }, optionB: { text: "Best friend", trait: "betrayal" } }
];

export const getRandomQuestions = (count: number = 10) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
