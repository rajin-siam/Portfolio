import updateSolvedCount from "./updateSolvedCounts";

// Fetch solved problems from Codeforces API
const fetchCodeforcesSolved = async (username) => {
  try {
    const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
    const data = await response.json();

    if (data.status === "OK") {
      const solvedSet = new Set();
      data.result.forEach((submission) => {
        if (submission.verdict === "OK") {
          solvedSet.add(submission.problem.contestId + "-" + submission.problem.index);
        }
      });
      const solvedCount = solvedSet.size;
      await updateSolvedCount("Codeforces", solvedCount);
    } else {
      console.error("Failed to fetch Codeforces data:", data.comment);
    }
  } catch (error) {
    console.error("Error fetching Codeforces data:", error);
  }
};

export default fetchCodeforcesSolved;
