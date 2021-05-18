const moodsArray = [
  { mood_text: 'Happy' },
  { mood_text: 'Sad' },
  { mood_text: 'Meh' },
  { mood_text: 'Angry' },
  { mood_text: 'Edgy' },
  { mood_text: 'Hopeful' },
  { mood_text: 'Doubtful' },
  { mood_text: 'Cheese' },
  { mood_text: 'Lonely' },
  { mood_text: 'Neutral' },
  { mood_text: 'Excited' },
  { mood_text: 'Guilty' },
  { mood_text: 'Rage' },
  { mood_text: 'Positive' },
];

type MoodRecord = {
  user_id: number;
  rating: number;
  datetime: Date;
  mood_text: string;
  personal_note: string;
  shared: boolean;
};

const createMoodRecord = (
  mood: string,
  isChecked: boolean,
  note: string,
): MoodRecord => {
  const currentDate = new Date();
  return {
    user_id: 99,
    rating: 5,
    datetime: currentDate,
    mood_text: mood,
    personal_note: note,
    shared: isChecked,
  };
};

export { moodsArray, createMoodRecord };
