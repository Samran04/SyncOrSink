export interface Question {
  question: string;
  optionA: string;
  optionB: string;
}

export const staticQuestions: Question[] = [
  // --- CLASSIC DILEMMAS ---
  { question: "Lose ₹500 OR lose your phone for 1 day?", optionA: "Lose ₹500", optionB: "Lose phone" },
  { question: "Tell your best friend a harsh truth OR lie to keep them happy?", optionA: "Harsh truth", optionB: "Lie" },
  { question: "Steal your friend's crush OR let a stranger steal them?", optionA: "Steal crush", optionB: "Let stranger" },
  { question: "Be rich but alone OR poor with great friends?", optionA: "Rich & Alone", optionB: "Poor but Friends" },
  { question: "Send a risky text and throw phone OR draft it and delete it?", optionA: "Send & Throw", optionB: "Draft & Delete" },
  { question: "Win a free vacation but you leave in 1 hour OR get $100 right now?", optionA: "Vacation", optionB: "$100 Now" },
  { question: "Betray your group for a million dollars OR stick with them?", optionA: "Betray for $1M", optionB: "Stick with them" },
  { question: "Always be 10 minutes late OR always be 30 minutes early?", optionA: "10 min late", optionB: "30 min early" },
  { question: "Share your browsing history OR lose all your money?", optionA: "Share history", optionB: "Lose money" },
  { question: "Cook a 3-course meal OR order fast food?", optionA: "Cook", optionB: "Order food" },

  // --- SOCIAL CHAOS ---
  { question: "Your ex texts 'I miss you' at 2AM — reply OR screenshot to the group chat?", optionA: "Reply", optionB: "Screenshot" },
  { question: "Accidentally like your crush's photo from 3 years ago OR send them a voice note?", optionA: "Like old pic", optionB: "Voice note" },
  { question: "Get caught trash-talking a friend OR have them find your notes app rant about them?", optionA: "Caught talking", optionB: "Notes app found" },
  { question: "Your best friend reads your DMs for a day OR your parents read them?", optionA: "Best friend", optionB: "Parents" },
  { question: "Post your screen time report OR your Spotify wrapped?", optionA: "Screen time", optionB: "Spotify Wrapped" },
  { question: "Have your crush see your camera roll OR your search history?", optionA: "Camera roll", optionB: "Search history" },
  { question: "Get roasted by your friends for 10 min straight OR roast yourself on a stage?", optionA: "Friends roast me", optionB: "Self-roast on stage" },
  { question: "Accidentally call your teacher 'Mom' OR accidentally send a love text to your boss?", optionA: "Teacher = Mom", optionB: "Love text to boss" },
  { question: "Have everyone see your Uber rating OR your average reply time?", optionA: "Uber rating", optionB: "Reply time" },
  { question: "Your group chat gets leaked OR your finsta goes public?", optionA: "Group chat leak", optionB: "Finsta public" },

  // --- UNHINGED INTERNET ---
  { question: "Be a main character on TikTok for a cringe trend OR go viral for a fail compilation?", optionA: "Cringe trend", optionB: "Fail compilation" },
  { question: "Have your Google Maps timeline made public OR your YouTube watch history?", optionA: "Maps timeline", optionB: "YouTube history" },
  { question: "Lose access to Instagram for a year OR lose access to Spotify for a year?", optionA: "No Instagram", optionB: "No Spotify" },
  { question: "Only communicate through memes for a week OR only speak in movie quotes?", optionA: "Memes only", optionB: "Movie quotes" },
  { question: "Have your Snapchat AI share your conversations publicly OR have your Alexa play your searches aloud?", optionA: "Snap AI leaks", optionB: "Alexa reads searches" },
  { question: "Get cancelled on Twitter for something dumb OR have your TikTok drafts posted without your approval?", optionA: "Twitter cancel", optionB: "TikTok drafts posted" },
  { question: "Be stuck in a group project with 5 strangers OR do the entire project alone?", optionA: "5 strangers", optionB: "Solo project" },
  { question: "Never use emojis again OR never use autocorrect again?", optionA: "No emojis", optionB: "No autocorrect" },
  { question: "Have a robot best friend who's super smart OR a human best friend who's super loyal?", optionA: "Robot BFF", optionB: "Human BFF" },
  { question: "Your phone dies at 1% during an emergency OR your WiFi cuts during a final exam?", optionA: "Phone dies", optionB: "WiFi cuts" },

  // --- EXISTENTIAL DREAD ---
  { question: "Know exactly when you'll die OR know exactly how you'll die?", optionA: "Know when", optionB: "Know how" },
  { question: "Relive the most embarrassing moment of your life every day OR never make a new memory?", optionA: "Relive cringe", optionB: "No new memories" },
  { question: "Everyone forgets you exist for a month OR everyone can hear your thoughts for a day?", optionA: "Forgotten", optionB: "Thoughts exposed" },
  { question: "Live in a simulation you can't escape OR live in reality but you can never dream?", optionA: "Simulation", optionB: "No dreams" },
  { question: "Forget your happiest memory OR relive your worst one every night?", optionA: "Forget happiness", optionB: "Relive nightmare" },
  { question: "Know the truth about everything but be unable to tell anyone OR live a blissful lie?", optionA: "Know truth", optionB: "Blissful lie" },
  { question: "Be immortal in a world where everyone you love ages normally OR live a normal life?", optionA: "Immortal & alone", optionB: "Normal life" },
  { question: "Time freezes but you're completely alone OR time speeds up but you're always surrounded?", optionA: "Frozen & alone", optionB: "Fast & crowded" },
  { question: "Your life is a TV show everyone watches OR your thoughts are published as a book?", optionA: "TV show", optionB: "Thought book" },
  { question: "Redo your entire life from age 10 but lose all current relationships OR keep everything as is?", optionA: "Redo from 10", optionB: "Keep as is" },

  // --- AWKWARD & SOCIAL ---
  { question: "Walk around with spinach in your teeth all day OR your fly open?", optionA: "Spinach teeth", optionB: "Fly open" },
  { question: "Accidentally send 'I love you' to your group chat OR to your professor?", optionA: "Group chat", optionB: "Professor" },
  { question: "Get caught singing on a Zoom call OR get caught picking your nose on camera?", optionA: "Singing", optionB: "Nose picking" },
  { question: "Wear your shirt inside out all day without knowing OR have toilet paper stuck to your shoe?", optionA: "Inside out shirt", optionB: "TP on shoe" },
  { question: "Trip and fall in front of your crush OR burp loudly in a silent room?", optionA: "Trip in front of crush", optionB: "Loud burp" },
  { question: "Sit next to your ex on a 12-hour flight OR sit next to a crying baby?", optionA: "Next to ex", optionB: "Crying baby" },
  { question: "Accidentally fart during a job interview OR during a first date?", optionA: "Job interview", optionB: "First date" },
  { question: "Wave back at someone who wasn't waving at you OR hold a door for someone too far away?", optionA: "Wrong wave", optionB: "Awkward door hold" },
  { question: "Be caught staring at someone OR be caught talking to yourself?", optionA: "Caught staring", optionB: "Caught talking" },
  { question: "Mispronounce someone's name 5 times OR forget their name mid-conversation?", optionA: "Mispronounce", optionB: "Forget name" },

  // --- POP CULTURE / GEN Z ---
  { question: "Only watch Bollywood movies for life OR only watch anime?", optionA: "Bollywood only", optionB: "Anime only" },
  { question: "Be Drake's ghostwriter OR be Taylor Swift's backup dancer?", optionA: "Drake ghostwriter", optionB: "Taylor backup dancer" },
  { question: "Have Elon Musk as your dad OR have Gordon Ramsay as your chef instructor?", optionA: "Elon dad", optionB: "Gordon chef" },
  { question: "Live in the Harry Potter universe OR the Marvel universe?", optionA: "Harry Potter", optionB: "Marvel" },
  { question: "Be in a K-drama but never find love OR be in a horror movie but survive?", optionA: "K-drama no love", optionB: "Horror survivor" },
  { question: "Have Beyoncé follow you on Instagram OR have MrBeast give you $10,000?", optionA: "Beyoncé follows", optionB: "MrBeast $10K" },
  { question: "Only listen to one song for the rest of your life OR never listen to music again?", optionA: "One song forever", optionB: "No music ever" },
  { question: "Star in a cringe reality show OR be a villain in a soap opera?", optionA: "Reality show", optionB: "Soap villain" },
  { question: "Have the power of any Avenger but everyone knows OR be normal and invisible?", optionA: "Avenger powers", optionB: "Invisible normie" },
  { question: "Be the funniest person nobody takes seriously OR the most serious person nobody finds fun?", optionA: "Funny but ignored", optionB: "Serious but boring" },

  // --- CHAOTIC CHOICES ---
  { question: "Eat cereal with water OR eat pizza with mayo?", optionA: "Cereal + water", optionB: "Pizza + mayo" },
  { question: "Wear wet socks for a week OR eat soup with a fork for a month?", optionA: "Wet socks", optionB: "Soup + fork" },
  { question: "Have hiccups forever OR feel like you need to sneeze but never can?", optionA: "Hiccups forever", optionB: "Eternal sneeze" },
  { question: "Step on a Lego every morning OR stub your toe every night?", optionA: "Lego morning", optionB: "Stub toe night" },
  { question: "Only eat spicy food forever OR only eat bland food forever?", optionA: "Spicy forever", optionB: "Bland forever" },
  { question: "Have your alarm go off at random times OR never be able to set an alarm?", optionA: "Random alarm", optionB: "No alarm" },
  { question: "Always feel like someone's watching you OR always hear faint whispering?", optionA: "Being watched", optionB: "Hear whispers" },
  { question: "Sleep on a bed of nails for one night OR sit on a cactus for an hour?", optionA: "Bed of nails", optionB: "Sit on cactus" },
  { question: "Fight 100 duck-sized horses OR one horse-sized duck?", optionA: "100 tiny horses", optionB: "1 giant duck" },
  { question: "Have hands for feet OR feet for hands?", optionA: "Hands for feet", optionB: "Feet for hands" },

  // --- MONEY & CAREER ---
  { question: "Work your dream job for ₹20K/month OR a boring job for ₹2L/month?", optionA: "Dream job ₹20K", optionB: "Boring job ₹2L" },
  { question: "Win the lottery but lose all your friends OR stay broke but keep everyone?", optionA: "Lottery + no friends", optionB: "Broke + friends" },
  { question: "Have unlimited money but no free time OR unlimited free time but no money?", optionA: "Money, no time", optionB: "Time, no money" },
  { question: "Start a company that fails publicly OR work for someone you hate for 10 years?", optionA: "Public failure", optionB: "10yr hate job" },
  { question: "Be a famous YouTuber with no privacy OR an unknown millionaire?", optionA: "Famous no privacy", optionB: "Unknown millionaire" },
  { question: "Never get a promotion but love your job OR get promoted every year but hate the work?", optionA: "No promo, love it", optionB: "Promo, hate it" },
  { question: "Have free Wi-Fi everywhere forever OR free food everywhere forever?", optionA: "Free WiFi", optionB: "Free food" },
  { question: "Live in a mansion with no AC OR a tiny apartment with perfect temperature?", optionA: "Mansion no AC", optionB: "Tiny + perfect temp" },
  { question: "Double your salary but work weekends OR keep current salary with 4-day weeks?", optionA: "2x salary + weekends", optionB: "Same + 4-day week" },
  { question: "Be the CEO of a dying company OR a janitor at the best company in the world?", optionA: "CEO dying co.", optionB: "Janitor best co." },

  // --- TRUST & RELATIONSHIPS ---
  { question: "Find out your partner went through your phone OR find out they lied about where they were?", optionA: "Phone snooping", optionB: "Lied about location" },
  { question: "Have a friend who's brutally honest OR one who always agrees with you?", optionA: "Brutally honest", optionB: "Always agrees" },
  { question: "Date someone your friends hate OR be single until your friends approve?", optionA: "Friends hate them", optionB: "Wait for approval" },
  { question: "Find out your best friend talks about you behind your back OR find out they've been lying about small things?", optionA: "Trash talks me", optionB: "Small lies" },
  { question: "Your partner becomes best friends with your ex OR your best friend starts dating your ex?", optionA: "Partner + ex friends", optionB: "BFF dates ex" },
  { question: "Know your friend's biggest secret they'll never tell you OR have them know yours?", optionA: "Know their secret", optionB: "They know mine" },
  { question: "Be in a relationship with no arguments ever OR one with passionate fights and makeups?", optionA: "No arguments", optionB: "Fights & makeups" },
  { question: "Forgive someone who hurt you deeply OR hold a grudge forever?", optionA: "Forgive", optionB: "Grudge forever" },
  { question: "Have 1 ride-or-die friend OR 100 acquaintances?", optionA: "1 ride-or-die", optionB: "100 acquaintances" },
  { question: "Trust someone who's lied to you once OR never trust anyone again?", optionA: "Trust again", optionB: "Trust no one" },

  // --- WILD CARD ---
  { question: "Live without mirrors OR live without photos of yourself?", optionA: "No mirrors", optionB: "No photos" },
  { question: "Have a rewind button for your life OR a pause button?", optionA: "Rewind", optionB: "Pause" },
  { question: "Speak every language fluently OR play every instrument perfectly?", optionA: "All languages", optionB: "All instruments" },
  { question: "Always know when someone is lying OR always get away with lying?", optionA: "Detect lies", optionB: "Get away with it" },
  { question: "Be able to talk to animals OR speak every human language?", optionA: "Talk to animals", optionB: "All human languages" },
  { question: "Read minds but can't turn it off OR be invisible but can't turn it off?", optionA: "Read minds always", optionB: "Invisible always" },
  { question: "Time travel to the past but can't change anything OR to the future but can't come back?", optionA: "Past, no changes", optionB: "Future, no return" },
  { question: "Have the world's best memory OR the world's best creativity?", optionA: "Best memory", optionB: "Best creativity" },
  { question: "Live in the year 1900 with modern knowledge OR in 2100 knowing nothing?", optionA: "1900 + knowledge", optionB: "2100 + clueless" },
  { question: "Be feared by everyone OR loved by everyone but they secretly pity you?", optionA: "Feared", optionB: "Loved + pitied" },
  { question: "Have a photographic memory OR be able to forget anything at will?", optionA: "Photographic memory", optionB: "Forget at will" },
  { question: "Always have to say everything on your mind OR never be able to speak again?", optionA: "Say everything", optionB: "Never speak" },
  { question: "Be the star of a movie that wins an Oscar OR the author of a book that sells 10M copies?", optionA: "Movie star", optionB: "Best-selling author" },
  { question: "Be able to fly but only at walking speed OR be able to run at 80mph but only for 10 seconds a day?", optionA: "Fly slow", optionB: "Run fast" },
  { question: "Only be able to whisper everything OR only be able to shout everything?", optionA: "Whisper", optionB: "Shout" },
  { question: "Have a tail that moves according to your mood OR have ears that double in size when you hear a secret?", optionA: "Mood tail", optionB: "Secret ears" },
  { question: "Always know the weather 24 hours in advance OR always know the winning lottery numbers but you can't play them?", optionA: "Weather forecast", optionB: "Lottery numbers" },
  { question: "Spend a year in space alone OR spend a year in a submarine with 10 people you dislike?", optionA: "Space alone", optionB: "Submarine with jerks" },
  { question: "Be able to breathe underwater OR be immune to fire?", optionA: "Breathe underwater", optionB: "Immune to fire" },
  { question: "Never have to sleep again but still feel tired OR sleep 12 hours a day and feel perfectly rested?", optionA: "No sleep/tired", optionB: "12hr sleep/rested" },
  { question: "Always have a popcorn kernel stuck in your teeth OR always have a tiny rock in your shoe?", optionA: "Popcorn teeth", optionB: "Rock in shoe" },
  { question: "Be a genius in a world of idiots OR an idiot in a world of geniuses?", optionA: "Genius/Idiots", optionB: "Idiot/Geniuses" },
  { question: "Always smell like fresh cookies OR always look like you're wearing expensive clothes?", optionA: "Smell cookies", optionB: "Expensive look" },
  { question: "Have a mute button for everyone else OR a rewind button for your own life (30 seconds)?", optionA: "Mute others", optionB: "Rewind self" },
  { question: "Never have to wait in line again OR never have to pay for a taxi again?", optionA: "No lines", optionB: "No taxi costs" },
  { question: "Be famous for something bad OR be forgotten for something good?", optionA: "Bad/Famous", optionB: "Good/Forgotten" },
  { question: "Have a third eye on the back of your head OR a third arm?", optionA: "Third eye", optionB: "Third arm" },
  { question: "Only be able to eat food that is blue OR only be able to eat food that is square?", optionA: "Blue food", optionB: "Square food" },
  { question: "Be able to teleport but only to places you've been before OR be able to jump 50 feet in the air?", optionA: "Teleport", optionB: "Super jump" },
];

export const getRandomFallbackQuestions = (count: number = 10) => {
  const shuffled = [...staticQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
