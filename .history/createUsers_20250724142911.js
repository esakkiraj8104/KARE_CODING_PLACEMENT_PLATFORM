// File: createUsers.js

import admin from "firebase-admin";
import { readFileSync } from "fs";

// ✅ Replace with your actual service account path
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// ✅ Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ✅ Read student data from JSON file
const students = JSON.parse(readFileSync("./students.json", "utf-8"));

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

      // 🔐 Optionally add to Firestore (uncomment if needed)
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
