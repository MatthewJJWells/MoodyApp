import getEnvVars from '../environment';
import { MoodRecord } from '../Utilities/AddMood.utilities';
const { url } = getEnvVars();

export interface Record {
  user_id: number;
  rating: number;
  datetime: Date;
  mood_text: string;
  personal_note: string;
  shared: boolean;
}

const addRecord = function (record: Record): Promise<Record> {
  try {
    return fetch(url + '/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        record: record,
      }),
    }).then((res) => res.json());
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getUserRecords = async function (user_id: number): Promise<MoodRecord[]> {
  try {
    const response = await fetch(`${url}/records/${user_id}`, {
      method: 'GET',
    });
    const records = await response.json();
    return records.reverse();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { addRecord, getUserRecords };
