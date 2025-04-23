import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";

const solvedProblems = [
  {
    platform: "LeetCode",
    username: "rajinsiam9",
    solved: 111,
    profileUrl: "https://leetcode.com/rajinsiam9"
  },
  {
    platform: "Codeforces",
    username: "rajin_siam",
    solved: 213,
    profileUrl: "https://codeforces.com/profile/rajin_siam"
  },
  {
    platform: "AtCoder",
    username: "rajin_siam",
    solved: 196,
    profileUrl: "https://atcoder.jp/users/rajin_siam"
  },
  {
    platform: "UVA",
    username: "rajin_siam",
    solved: 103,
    profileUrl: "https://uhunt.onlinejudge.org/id/your-id"
  },
  {
    platform: "HackerRank",
    username: "RajinSiam",
    solved: 70,
    profileUrl: "https://www.hackerrank.com/RajinSiam"
  },
  {
    platform: "Spoj",
    username: "rajin_siam",
    solved: 11,
    profileUrl: "https://www.spoj.com/users/rajin_siam"
  },
  {
    platform: "HackerEarth",
    username: "gogeta14",
    solved: 10,
    profileUrl: "https://www.hackerearth.com/@gogeta14"
  },
  {
    platform: "CodeChef",
    username: "rajin_siam",
    solved: 6,
    profileUrl: "https://www.codechef.com/users/rajin_siam"
  }
];

const uploadData = async () => {
  const colRef = collection(db, "solvedProblems");
  for (const problem of solvedProblems) {
    try {
      await addDoc(colRef, problem);
      console.log(`Uploaded: ${problem.platform}`);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  }
};

uploadData();
