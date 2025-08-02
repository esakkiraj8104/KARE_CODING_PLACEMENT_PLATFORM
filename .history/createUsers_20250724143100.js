import admin from "firebase-admin";
import { readFile } from "fs/promises";

// ✅ Dynamically import the service account JSON
const serviceAccount = JSON.parse(
  await readFile(new URL('./serviceAccountKey.json', import.meta.url))
);

// ✅ Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ✅ Load students list from JSON
const students = JSON.parse(
  await readFile(new URL('./students.json', import.meta.url))
);

// ✅ Create each user
const createUsers = async () => {
  for (const student of students) {
    const email = `${student.registerNumber}@klu.ac.in`;
    const password = student.registerNumber;

    try {
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });

      console.log(`✅ Created: ${email}`);

      // Optional: Store in Firestore
      // await admin.firestore().collection("users").doc(userRecord.uid).set({
      //   name: student.name,
      //   registerNumber: student.registerNumber,
      //   role: "student",
      // });

    } catch (error) {
      console.error(`❌ Error creating ${email}:`, error.message);
    }
  }
};

createUsers();
