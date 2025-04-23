import { collection, getDocs } from "firebase/firestore";
import db from "./../firebase";

const fetchProjects = async () => {
  const colRef = collection(db, "projects");
  const snapshot = await getDocs(colRef);
  const projects = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  console.log(projects)
  return projects;
};

export default fetchProjects
