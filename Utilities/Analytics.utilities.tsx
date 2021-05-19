import { Record } from '../services/ApiService';
import { ChartMoods } from '../Interfaces/index';
import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';

export const colours: { [key: string]: string } = {
  Happy: '#37F511',
  Sad: '#1148F5',
  Meh: '#F4D826',
  Angry: '#F71607',
  Edgy: '#000000',
  Hopeful: '#F329F3',
  Doubtful: '#AF6E24',
  Cheese: '#FFF300',
  Lonely: '#69EDF5',
  Neutral: '#a178b1',
  Excited: '#D4FC6E',
  Guilty: '#7A1BCA',
  Rage: '#F2742D',
  Positive: '#F22D63',
};

function getCount(
  records: Record[],
  setOverallMoods: Dispatch<SetStateAction<ChartMoods[]>>,
  monthlyCheck: boolean,
): void {
  const overallCounterObject: { [key: string]: number } = {
    Happy: 0,
    Sad: 0,
    Meh: 0,
    Angry: 0,
    Edgy: 0,
    Hopeful: 0,
    Doubtful: 0,
    Cheese: 0,
    Lonely: 0,
    Neutral: 0,
    Excited: 0,
    Guilty: 0,
    Rage: 0,
    Positive: 0,
  };
  for (let i = 0; i < records.length; i++) {
    if (monthlyCheck) {
      const dateOfRecord = dayjs(records[i].datetime).format('MMM');
      const currentDate = dayjs().format('MMM');
      if (dateOfRecord === currentDate) {
        if (Object.keys(overallCounterObject).includes(records[i].mood_text)) {
          overallCounterObject[records[i].mood_text]++;
        }
      }
    } else {
      if (Object.keys(overallCounterObject).includes(records[i].mood_text)) {
        overallCounterObject[records[i].mood_text]++;
      }
    }
  }
  createOverallObject(setOverallMoods, overallCounterObject, monthlyCheck);
}

let monthlyMoodsArr: ChartMoods[];
let overallMoodsArr: ChartMoods[];
function createOverallObject(
  setMoods: Dispatch<SetStateAction<ChartMoods[]>>,
  counterObject: { [key: string]: number },
  monthlyCheck: boolean,
) {
  const keyList = Object.keys(counterObject);
  if (monthlyCheck) {
    monthlyMoodsArr = [];
  } else {
    overallMoodsArr = [];
  }
  for (let i = 0; i < keyList.length; i++) {
    if (counterObject[keyList[i]] > 0) {
      if (monthlyCheck) {
        monthlyMoodsArr.push({
          name: `- ${keyList[i]}`,
          population: counterObject[keyList[i]],
          color: colours[keyList[i]],
          legendFontColor: '#a178b1',
          legendFontSize: 12,
        });
      } else {
        overallMoodsArr.push({
          name: `- ${keyList[i]}`,
          population: counterObject[keyList[i]],
          color: colours[keyList[i]],
          legendFontColor: '#a178b1',
          legendFontSize: 12,
        });
      }
    }
  }
  if (monthlyCheck) setMoods(monthlyMoodsArr);
  else setMoods(overallMoodsArr);
}

export { getCount };
