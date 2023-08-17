import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51Nej9FHMBfPp3rU0lanhr53cGoUN97LTH7T1tSH9JB1cLwAtQF6vLla6Vcsq3ZPATndpFkuypl4JHxLsmwwKzt0800jJvwzxSA');

export default async function handler(req, res) {
    
    if (req.method === 'GET') {
       const intent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({client_secret: intent.client_secret})
      
    } else {
        res.status(405).end();
    }
}