/* eslint-disable no-case-declarations */
import express from 'express';
import { Payment } from '../../models/Payments';
const router = express.Router();

// create payment intent
// post request
// /api/v1/payments/create
router.post('/', async (req, res, next) => {
  try {
    const { phone_number, token, provider } = req.body;

    // descrypt token to see if live or test
    const mode = 'test';

    if (mode === 'test') {
      const newPayment = new Payment({
        phone_number,
        token,
        provider,
        mode,
      });

      switch (phone_number) {
        case '0777000000':
          // logic goes here
          return res.status(200).send({
            message: 'Your payment was successfully requested',
            status: 'requested',
          });
        case '0777333333':
          return res.status(200).send({
            message: 'Your payment was cancelled by user',
            status: 'cancelled',
          });

        case '0777444444':
          return res.status(500).send({
            message: 'You have insufficient balance',
            status: 'insuffucient',
          });
        default:
          const payment = await newPayment.save();
          return res.status(200).send({
            message: 'Your payment was successfully created',
            status: 'pending',
            payment: payment,
          });
      }
    } else {
      // do live stuff
    }
  } catch (error) {
    next(error);
  }
});

export default router;
