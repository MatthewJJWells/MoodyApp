import dayjs from 'dayjs';

function getTimeDate(timeDate: Date): { time: string; date: string } {
  const time = dayjs(timeDate).format('HH:mm');
  const date = dayjs(timeDate).format('DD/MM/YY');
  return { time, date };
}

export default getTimeDate;
