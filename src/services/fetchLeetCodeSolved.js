
import updateSolvedCount from "./updateSolvedCounts";

export const fetchLeetCodeSolved = async (username) => {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
  
    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode data");
    }
  
    const data = await response.json();
    let solvedCount = data.totalSolved
  
    updateSolvedCount("LeetCode", solvedCount);
  };
  