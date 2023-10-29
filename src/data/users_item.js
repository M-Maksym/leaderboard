import data from "./users_data.json";

let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export function getInitialData() {
  currentData = data.map(mapWithRank);
  return currentData;
}
//--------------------------------------------------------------------------------
/*let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export async function getInitialData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Use your actual backend URL instead of '/your-backend-endpoint/data.json'.
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from the backend.');
    }

    const data = await response.json();
    currentData = data.map(mapWithRank);
    return currentData;
  } catch (error) {
    // Error handling, for example, you can throw or log an error.
    console.error('Error fetching data:', error);
    throw error;
  }
}
*/
//--------------------------------------------------------------------------------



/*import axios from "axios";

let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export function getInitialData() {
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      currentData = response.data.map(mapWithRank);
      return currentData;
    });
}*/