// Express using Atlas MongoDB instead of local instance.
import { MongoClient, ServerApiVersion } from 'mongodb';

// This is the X.509 certificate file that you downloaded from the Atlas UI. 
// You have to create a new user and download the certificate file.
// *.pem is added to the .gitignore file to avoid uploading the certificate to the repository.
const credentials = 'X509-cert-8907696871428997325.pem'

const client = new MongoClient('mongodb+srv://cluster0.kmrzslb.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  tlsCertificateKeyFile: credentials,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
  } finally {
    // Ensures that the client will close when you finish/error.
    await client.close();
  }
}
run().catch(console.dir);
