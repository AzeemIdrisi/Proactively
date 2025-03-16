const { GoogleAuth } = require("google-auth-library"); // Fix import
const serviceAccount = require("./proactively-service.json"); // Ensure the correct path

async function getAccessToken() {
  const auth = new GoogleAuth({
    credentials: serviceAccount,
    scopes: ["https://www.googleapis.com/auth/firebase.messaging"], // Ensure it's an array
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  console.log("Access Token:", accessToken.token);
  return accessToken.token;
}

getAccessToken().catch(console.error);
