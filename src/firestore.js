import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Example — save a syllabus submission
await addDoc(collection(db, "syllabi"), {
    term,
    department,
    courseNumber,
    courseName,
    instructor,
    uploadedAt: new Date()
});