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

const addRecord = function (record: Record): Promise<Record> {
  try {
    // const response = await
    // let newRecord;
    return fetch(url + '/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        record: record,
      }),
    }).then((res) => res.json());
    // .then((res) => console.log({ res }));
    // console.log('res:', response.json());
    // response.json();
    // console.log(response);

    // return response;
  } catch (error) {
    console.error(error);

    return error;
  }
};

const getUserRecords = async function (
  user_id: number,
): Promise<(prevState: never[]) => never[]> {
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
