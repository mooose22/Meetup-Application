import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.data;

    const client = await MongoClient.connect(
      "mongodb+srv://mooose22:db2admin@cluster0.cczgtca.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added!" });
  }
}

export default handler;
