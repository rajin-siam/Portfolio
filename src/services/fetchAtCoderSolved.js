import updateSolvedCount from "./updateSolvedCounts";

export const fetchAtCoderSolved = async (username) => {
  try {
    const response = await fetch(`https://kenkoooo.com/atcoder/atcoder-api/v3/user/ac_rank?user=${username}`);
    const data = await response.json();
    const solvedCount = data.count

    await updateSolvedCount("AtCoder", solvedCount);
  } catch (error) {
    console.error("🔥 Error fetching AtCoder data:", error);
  }
};

export default fetchAtCoderSolved;
