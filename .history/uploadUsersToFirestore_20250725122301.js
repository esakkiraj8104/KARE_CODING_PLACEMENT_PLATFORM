const admin = require("firebase-admin");
const csv = require("csv-parser");
const fs = require("fs");

admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json")),
});

const db = admin.firestore();

fs.createReadStream("s.csv")
  .pipe(csv())
  .on("data", async (row) => {
    try {
      const { name, email } = row;

      if (email && name) {
        await db.collection("users").doc(email).set({
          name,
          email,
        });
        console.log(`✅ Uploaded: ${email}`);
      }
    } catch (error) {
      console.error("❌ Error uploading user:", error);
    }
  })
  .on("end", () => {
    console.log("✅ CSV upload complete.");
  });
