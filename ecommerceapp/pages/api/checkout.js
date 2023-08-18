import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51Nej9FHMBfPp3rU0lanhr53cGoUN97LTH7T1tSH9JB1cLwAtQF6vLla6Vcsq3ZPATndpFkuypl4JHxLsmwwKzt0800jJvwzxSA');

export default async function handler(req, res) {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1NgElEHMBfPp3rU0PvCTgMua',
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/order/?success=true`,
        cancel_url: `${req.headers.origin}/order/canceled=true`,
    });
    res.status(200).json({ sessionId: session.id });
}
