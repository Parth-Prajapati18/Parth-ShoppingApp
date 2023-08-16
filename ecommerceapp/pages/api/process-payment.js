import Stripe from 'stripe';


const stripe = new Stripe(
    'sk_test_51Nej9FHMBfPp3rU0lanhr53cGoUN97LTH7T1tSH9JB1cLwAtQF6vLla6Vcsq3ZPATndpFkuypl4JHxLsmwwKzt0800jJvwzxSA',
    { apiVersion: '2023-08-16' });

export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        try {
            const { amount, currency, description, token } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
                description,
                payment_method_types: ['card'],
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    } else {
        res.status(405).end();
    }
}