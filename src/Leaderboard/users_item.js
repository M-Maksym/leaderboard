//get JSON file from backend
const actualData = await fetch(
  `http://localhost:1337/api/leaderboard`  //paste URL from backend
).then(response => response.json());



let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export function getInitialData() {
  // Перевірка, чи actualData є масивом
  if (Array.isArray(actualData)) {
    currentData = actualData.map(mapWithRank);
  } else if (actualData && actualData.data && actualData.data.length) {
    // Змінено перевірку на наявність даних у полі "data"
    currentData = actualData.data.map(mapWithRank);
  } else {
    console.error('Invalid response format'); // Додайте додаткову обробку відповіді за потреби
  }

  return currentData;
}
