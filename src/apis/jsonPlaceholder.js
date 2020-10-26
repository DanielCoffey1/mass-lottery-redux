import axios from 'axios';

const date = new Date();

export default axios.create({
  baseURL: `https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=${date
    .toISOString()
    .substr(0, 10)}&endDate=${date.toISOString().substr(0, 10)}`,
});
