import getEnvVars from '../environment';
const { url } = getEnvVars();

interface Record {
  user_id: number;
  rating: number;
  datetime: Date;
  mood_text: string;
  personal_note: string;
  shared: boolean;
}

const addRecord = async function (record: Record): Promise<unknown> {
  try {
    const response = await fetch(url + '/records', {
      method: 'POST',
      body: JSON.stringify({
        record: record,
      }),
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { addRecord };
