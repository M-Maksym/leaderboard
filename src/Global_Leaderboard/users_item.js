//get JSON file from backend
const actualData = await fetch(
    `https://jsonplaceholder.typicode.com/users`  //paste URL from backend
    ).then(response => response.json());
  
    
  let currentData = [];
  
  function mapWithRank(row, i) {
    return { ...row, ranking: i + 1 };
  }
  
  export function getInitialData() {
    currentData = actualData.map(mapWithRank);
    return currentData;
  }
  