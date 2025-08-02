const admin = require("firebase-admin");
const csv = require("csvtojson");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

csv()
  .fromFile("students.csv")
  .then(async (students) => {
    for (const student of students) {
      const { email, password, name } = student;

      try {
        const userRecord = await admin.auth().createUser({
          email: email.trim(),
          password: password.trim(),
          displayName: name ? name.trim() : undefined,
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
  });
