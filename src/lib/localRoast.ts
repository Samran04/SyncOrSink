// Local roast generator — used as fallback when Gemini API is unreachable

type AnswerData = {
  question: string;
  answer: string;
};

type LocalRoast = {
  title: string;
  roast: string[];
  emoji: string;
};

const titles = [
  "Certified Overthinker", "Walking Red Flag", "Chaotic Neutral Energy",
  "Main Character Syndrome", "NPC With Anxiety", "Plot Twist Personified",
  "Villain Origin Story", "Emotional Damage Dealer", "Professional Yapper",
  "The Unhinged One", "Suspiciously Normal", "Trust Issues Embodied",
  "Drama Magnet Supreme", "Dangerously Indecisive", "Agent of Chaos",
  "Morally Questionable Legend", "Unfiltered & Unbothered", "Overthinking Champion",
  "The Cold Strategist", "Menace to Society", "The People Pleaser",
  "Silent Storm", "Friendly Backstabber", "Calculated Risk Taker",
  "Total Wildcard", "The Lone Wolf", "Chaotic Bestie Material",
  "Therapist's Nightmare", "Woke But Broke", "Lowkey Genius",
  "Certified Delusional", "Secretly a Menace", "Emotional Rollercoaster",
  "Living Manifestation of Anxiety", "The 'I Can Fix Him/Her' Specialist",
  "Professional Bridge Burner", "Walking Identity Crisis", "The Unexpected Plot Hole",
  "Human Version of a 404 Error", "Main Antagonist Energy", "The Reluctant Hero",
  "Side Character with Lore", "Professional Gaslighter", "Deep Sea Level Mystery",
  "Walking 'Wait, What?'", "The Ultimate Contrarian", "Socially Savvy Saboteur",
  "Master of Misplaced Confidence", "The Aesthetic Wanderer", "Chaotic Good...ish",
];

const roastTemplates = [
  (a: AnswerData) => `You picked "${a.answer}" for "${a.question}" — that says more about you than your therapist ever could.`,
  (a: AnswerData) => `Choosing "${a.answer}" when the question was "${a.question}"?! You're genuinely unhinged and I respect it.`,
  (a: AnswerData) => `"${a.answer}" was your gut reaction to "${a.question}"? Some choices can't be taken back, and this is one of them.`,
  (a: AnswerData) => `The fact that "${a.answer}" was your pick for "${a.question}" is concerning on multiple levels. Seek help.`,
  (a: AnswerData) => `"${a.question}" and you went with "${a.answer}" without hesitation? You're either fearless or clueless.`,
  (a: AnswerData) => `Your answer of "${a.answer}" reveals a terrifying level of confidence for someone who probably cries in the shower.`,
  (a: AnswerData) => `"${a.answer}" for "${a.question}" — wow, you really woke up and chose violence today.`,
  (a: AnswerData) => `Going with "${a.answer}" tells me you'd survive a horror movie but only because even the killer would avoid you.`,
  (a: AnswerData) => `"${a.answer}" for "${a.question}"? You definitely prioritize chaos over common sense.`,
  (a: AnswerData) => `Choosing "${a.answer}" shows you have the survival instincts of a dodo bird.`,
  (a: AnswerData) => `"${a.answer}"?! For "${a.question}"?! I've seen better decision-making in a horror movie basement.`,
  (a: AnswerData) => `You picked "${a.answer}" for "${a.question}"... I bet you clap when the plane lands too.`,
  (a: AnswerData) => `"${a.answer}" is a choice, I guess. Not a good one, but a choice.`,
  (a: AnswerData) => `Your pick of "${a.answer}" for "${a.question}" is giving 'I ignore red flags for the plot' energy.`,
  (a: AnswerData) => `"${a.answer}"? Really? That's the most 'I have a Pinterest board for my existential crisis' thing I've ever heard.`,
  (a: AnswerData) => `Choosing "${a.answer}" for "${a.question}" makes me think you're the person who asks for a straw in a five-star restaurant.`,
  (a: AnswerData) => `"${a.answer}" for "${a.question}" — you're the reason instructions are printed on shampoo bottles.`,
  (a: AnswerData) => `Picking "${a.answer}" tells me you're the type to say 'It is what it is' while your life is literally on fire.`,
  (a: AnswerData) => `"${a.answer}" for "${a.question}"? Your internal compass isn't just broken; it's actively trying to get you lost.`,
  (a: AnswerData) => `Choosing "${a.answer}" is exactly why your friends haven't added you to the 'serious' group chat yet.`,
  (a: AnswerData) => `"${a.answer}" for "${a.question}"... you definitely put the milk in before the cereal.`,
  (a: AnswerData) => `Your reaction to "${a.question}" was "${a.answer}"? You're a walking argument for why we need basic logic tests.`,
  (a: AnswerData) => `Picking "${a.answer}" confirms you're the person who brings a guitar to a party when nobody asked.`,
  (a: AnswerData) => `"${a.answer}" for "${a.question}" — I've met rocks with more consistent logic than you.`,
  (a: AnswerData) => `Choosing "${a.answer}" shows you're definitely the main character, but in a psychological thriller.`,
];

const closingRoasts = [
  "Your choices tell a story, and honestly? It needs a content warning.",
  "If cognitive dissonance was a sport, you'd be an Olympic gold medalist.",
  "Somewhere, a psychology textbook is being rewritten because of you.",
  "Your decision-making process is a masterclass in controlled chaos.",
  "Someone needs to study your brain. For science. And maybe therapy.",
  "You made these choices in 5 seconds and honestly it shows.",
  "The AI tried to understand your logic and gave up. Twice.",
  "If 'trust the process' was a person, it would NOT be you.",
  "Your choices are giving 'unread terms and conditions energy'.",
  "Honestly impressive — most people at least pretend to think things through.",
  "The bar was on the floor and you brought a shovel.",
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "I'm not saying you're the problem, but if you were a math equation, there'd be no solution.",
  "You have a very 'skip the tutorial' personality, and it shows.",
  "Your logic is like a screen door on a submarine. Entirely useless but technically there.",
  "If 'I'll do it later' was a lifestyle, this would be the results page.",
  "You're the person everyone warns the new guy about.",
  "Your decision-making was the jump scare I wasn't prepped for.",
  "You probably have 437 unread emails and honestly, it fits the vibe.",
  "I've seen more stability in a Jenga tower during an earthquake.",
  "You're not just a red flag; you're the whole parade.",
  "Your energy is very 'I drank three energy drinks and now I'm seeing sounds'.",
  "If you were a spice, you'd be flour.",
  "You're the reason people have to sign waivers.",
  "I'd roast you harder, but nature already did a pretty thorough job.",
];

const emojis = ["🤡", "💀", "🔥", "😭", "🫠", "🧠", "👀", "🚩", "⚡", "🫣", "😈", "🤯", "🎭", "💅", "🥴", "🤢", "🤡", "👺", "🧟", "📉"];

export function generateLocalRoast(answers: string[], questions: { question: string }[]): LocalRoast {
  const answerData: AnswerData[] = answers.map((a, i) => ({
    question: questions[i]?.question || "Unknown question",
    answer: a,
  }));

  // Pick a random title
  const title = titles[Math.floor(Math.random() * titles.length)];

  // Pick 1-2 specific roasts based on actual answers
  const shuffledAnswers = [...answerData].sort(() => 0.5 - Math.random());
  const roastLines: string[] = [];

  const templatePool = [...roastTemplates].sort(() => 0.5 - Math.random());
  for (let i = 0; i < Math.min(2, shuffledAnswers.length); i++) {
    const template = templatePool[i % templatePool.length];
    roastLines.push(template(shuffledAnswers[i]));
  }

  // Add a closing roast
  roastLines.push(closingRoasts[Math.floor(Math.random() * closingRoasts.length)]);

  // Pick a random emoji
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  return { title, roast: roastLines, emoji };
}

// Group roast generator for multiplayer fallback
type PlayerInfo = { id: string; displayName?: string; answers: string[] };

const groupRoastTemplates = [
  "This group's collective decision-making is a masterclass in chaos theory.",
  "Y'all answered like you've never met each other. Are you sure you're friends?",
  "The level of disagreement here suggests this friend group is held together by nothing but wifi and denial.",
  "Some of you chose chaos, and some chose stability. None of you chose wisely.",
  "If this group was a sitcom, it'd get cancelled after one episode for being too chaotic.",
  "Not a single brain cell was shared between you all during this game.",
  "The disagreements here are giving 'passive-aggressive group chat' energy.",
  "Statistically, you'd have more in common with strangers. Let that sink in.",
  "This group is like a broken compass — no direction, just spinning in circles.",
  "If you guys were a boy band, you'd be called 'One Direction (South)'.",
  "The synergy in this room is non-existent. It's like watching a group of cats try to build a bookshelf.",
  "I've seen more cooperation in a room full of toddlers fighting over a single toy.",
  "This group is the physical manifestation of a 'reply all' email chain that won't end.",
  "You guys are exactly why group projects always fail.",
  "The vibe here is less 'besties' and more 'strangers trapped in an elevator'.",
  "If 'awkward silence' was a person, it would be this entire friendship group.",
  "You guys agree on so little that I'm surprised you even made it into the same lobby.",
  "This group's collective IQ dropped 50 points the moment the first question appeared.",
  "I've seen better teamwork in a game of solo Solitaire.",
  "You guys are the reason 'unfollow' exists.",
  "The amount of 'IDK' energy in this group is enough to power a small city.",
  "If this group was a meal, it would be a bowl of lukewarm water.",
  "You all look like you're in a middle school dance where nobody wants to be the first to move.",
  "The collective chaos here is genuinely impressive, in a tragic sort of way.",
  "I wouldn't trust this group to order a pizza, let alone make life choices together.",
];

const playerAwardTitles = [
  "Most Likely to Betray Everyone", "Agent of Pure Chaos",
  "Suspiciously Basic", "The Unpredictable One",
  "Walking Plot Twist", "NPC Energy Award",
  "The People Pleaser", "Most Likely to Overthink a Pizza Order",
  "Certified Wildcard", "The Silent Menace",
  "Chaotic Bestie Material", "Most Main Character Energy",
  "The Final Boss of Social Awkwardness", "Professional Vibe Killer",
  "The Unexpected Liability", "Most Likely to Start a Cult",
  "Certified Glue (The Only Normal One)", "The Liability Award",
  "Professional Bridge Burner", "The Human Question Mark",
  "Master of Misinterpretation", "The Chaos Consultant",
  "The Socially Selective Hazard", "Most Likely to Be the First One Out",
  "The Silent Architect of Self-Destruction",
];

const playerAwardRoasts = [
  "Picked the weirdest options like it was a personality trait. It is.",
  "Your answers were so chaotic even the algorithm gave up trying to categorize you.",
  "You went against the group on literally everything. Contrarian or just unhinged?",
  "Your choices suggest you peaked in chaos mode and never left.",
  "The group needed unity and you said 'no thanks, I choose violence.'",
  "You agreed with everyone just enough to seem normal. We're onto you.",
  "Your answers were the most predictable thing since Monday morning traffic.",
  "You matched with nobody. Either you're a genius or you need new friends.",
  "You chose the options nobody else even considered. Thinking outside the box, or just lost?",
  "Your logic is a mystery that even SCOOBY-DOO couldn't solve.",
  "You were the wildcard that actually made things worse. Impressive.",
  "You matched with the group on 0 questions. Is this your first day being human?",
  "Your answers were so basic I almost fell asleep checking them.",
  "You're the reason the 'Sync' in SyncOrSink is failing.",
  "Your thought process is like a game of Flappy Bird — lots of effort, no real progress.",
  "You picked the options that make me want to check your browsing history.",
  "You're definitely the one who sends 15 separate messages instead of one paragraph.",
  "Your choices are the equivalent of wearing sandals with socks in a formal setting.",
  "You're not just 'different'; you're 'legal liability' levels of different.",
  "If 'suspicious behavior' was an award, you'd own the trophy cabinet.",
  "You chose the options that scream 'I have a secret bunker'.",
  "Your answers are the physical embodiment of the 👁️👄👁️ emoji.",
  "You're the person who brings a salad to a BBQ and asks why nobody's eating it.",
  "Your choices were so unhinged that I'm actually a little concerned for your well-being.",
  "You matched with the group by accident. Don't let it go to your head.",
];

export function generateLocalGroupRoasts(players: PlayerInfo[]): { title: string; msg: string }[] {
  const roasts: { title: string; msg: string }[] = [];

  // Group roast
  roasts.push({
    title: "💥 Group Roast",
    msg: groupRoastTemplates[Math.floor(Math.random() * groupRoastTemplates.length)]
  });

  // Pick up to 3 players for awards
  const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
  const awardCount = Math.min(3, shuffledPlayers.length);
  const shuffledTitles = [...playerAwardTitles].sort(() => 0.5 - Math.random());
  const shuffledAwardRoasts = [...playerAwardRoasts].sort(() => 0.5 - Math.random());

  for (let i = 0; i < awardCount; i++) {
    const player = shuffledPlayers[i];
    roasts.push({
      title: `🏆 ${player.displayName || `Player ${i + 1}`}: ${shuffledTitles[i]}`,
      msg: shuffledAwardRoasts[i]
    });
  }

  return roasts;
}
