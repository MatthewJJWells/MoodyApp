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
      headers: {
        'Content-Type': 'application/json',
      },
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

const getUserRecords = async function (user_id: number): Promise<unknown> {
  try {
    const response = await fetch(`${url}/records/${user_id}`, {
      method: 'GET',
    });
    const records = await response.json();
    return records;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { addRecord, getUserRecords };
