import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import db from "./../firebase";

// Update Firestore entry
const updateSolvedCount = async (platform, newSolvedCount) => {
  const colRef = collection(db, "solvedProblems");
  const q = query(colRef, where("platform", "==", platform));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (document) => {
    const docRef = doc(db, "solvedProblems", document.id);
    await updateDoc(docRef, { solved: newSolvedCount });
    console.log(`Updated ${platform}: ${newSolvedCount}`);
  });
};

export default updateSolvedCount;
