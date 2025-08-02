// createUsers.js
import admin from "firebase-admin";
import csv from "csvtojson";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Read the CSV and create users
const students = await csv().fromFile("students.csv");

for (const student of students) {
  const { email, password, name } = student;

  try {
    const userRecord = await admin.auth().createUser({
      email: email.trim(),
      password: password.trim(),
      displayName: name?.trim(),
    });

    console.log(`✅ Created: ${email}`);
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      console.log(`⚠️ Already exists: ${email}`);
    } else {
      console.error(`❌ Error creating ${email}: ${error.message}`);
    }
  }
}
