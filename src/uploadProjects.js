import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";

const projectsData = [
  {
    name: "ShopVerse Rest-API",
    description: "This project, Shopverse, serves as the backend for an online e-commerce platform...",
    techStack: ["Java", "Spring Boot", "MySql"],
    imageUrl: "/assets/shopverse-api-ss.png",
    liveLink: "https://myecommerce.com",
    sourceLink: "https://github.com/myecommerce"
  },
  {
    name: "Personal Finance Management",
    description: "A web-based application designed to track personal finances, manage transactions...",
    techStack: ["HTML", "CSS", "Java", "MySql"],
    imageUrl: "assets/personal-finance-management-ss.png",
    liveLink: "https://myecommerce.com",
    sourceLink: "https://github.com/rajin-siam/personal-finance-management"
  },
  {
    name: "Inventory Management System",
    description: "Created an Inventory Management System to help businesses easily track stock levels...",
    techStack: ["HTML", "CSS", "PhP", "MySql"],
    imageUrl: "/assets/inventory-management-system-ss.png",
    liveLink: "https://myportfolio.com",
    sourceLink: "https://github.com/myportfolio"
  }
];

const uploadProjects = async () => {
  const colRef = collection(db, "projects");
  for (const project of projectsData) {
    try {
      await addDoc(colRef, project);
      console.log(`✅ Uploaded: ${project.name}`);
    } catch (err) {
      console.error(`❌ Error uploading ${project.name}:`, err);
    }
  }
};

export default uploadProjects;
