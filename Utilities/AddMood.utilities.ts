const moodsArray = [
  { mood_text: 'happy' },
  { mood_text: 'sad' },
  { mood_text: 'meh' },
  { mood_text: 'angry' },
  { mood_text: 'mad' },
  { mood_text: 'hopeful' },
  { mood_text: 'doubtfull' },
  { mood_text: 'cheese' },
  { mood_text: 'random' },
  { mood_text: 'neutral' },
  { mood_text: 'sun' },
  { mood_text: 'moon' },
  { mood_text: 'rage' },
  { mood_text: 'rahh' },
  { mood_text: 'dangerous' },
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
    user_id: 0,
    rating: 5,
    datetime: currentDate,
    mood_text: mood,
    personal_note: note,
    shared: isChecked,
  };
};

export { moodsArray, createMoodRecord };
