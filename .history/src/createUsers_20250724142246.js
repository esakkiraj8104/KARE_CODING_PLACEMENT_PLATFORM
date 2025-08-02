const admin = require("firebase-admin");
const csv = require("csvtojson");
const fs = require("fs");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json"))
});

// Read CSV file and convert to JSON
csv()
  .fromFile("students.csv")
  .then(async (students) => {
    for (let student of students) {
      try {
        // Create user in Firebase Auth
        await admin.auth().createUser({
          email: student.email,
          password: student.password,
        });

        // (Optional) Add user to Firestore
        const regNo = student.email.split('@')[0];
        await admin.firestore().collection("students").doc(regNo).set({
          regNo: regNo,
          email: student.email,
          role: "student"
        });

        console.log(`✅ Created: ${student.email}`);
      } catch (error) {
        console.error(`❌ Failed for ${student.email}: ${error.message}`);
      }
    }
  });
