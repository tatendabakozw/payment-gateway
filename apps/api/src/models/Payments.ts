import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    phone_number:{
        type: String,
        default: ''
    },
    token:{
        type: String,
        required: true,
        default: ''
    },
    provider:{
        type: String,
        required: true,
        default: ''
    },
    mode:{
        type: String,
        enum: ['test, live'],
        default: 'test'
    }
},{
    timestamps: true
})

export const Payment = mongoose.model('Payment', paymentSchema);