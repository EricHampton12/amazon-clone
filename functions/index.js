const functions = require("firebase-functions");
const cors = require("cors");
const { responsiveFontSizes } = require("@material-ui/core");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51GsE6hG468jMlYSeFKa9nxErCZ9oJCCryIPOTcVUDRCM3DWV0q6NScWa2LNv11lVVUMeORoF4ShWvPsbj7AknXRr00JDZe1SZD");


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello there"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);
