import { Schema, model } from 'mongoose';

const TicSchema  = new Schema({
    name:{
        type: String,
        enum: [
            'Aashu Singh',
            'Aman Singh',
            'Amandeep Kaur',
            'Ayush Pandey',
            'Aditya Aryan',
            'Deepak',
            'Priya Brahma',
            'Rahul Kumar',
            'Vinay Ojha',
            'Swati Thakur',
            'Suruchi Sagar',
            'Taher Malik'
        ]
    }
})

export const TIC_Schema = model('TIC_Schema', TicSchema);