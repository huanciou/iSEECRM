import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  table_ID: {
    type: String,
    required: true,
  },
  order_Items: [
    {
      item_ID: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      tags: {
        type: String,
      },
      qty: {
        type: Number,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
      },
      main_image: {
        type: String,
      },
      category: {
        type: String,
      },
    },
  ],
  requests: {
    type: String,
  },
  order_Time: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    select: false,
  },
});

orderSchema.pre('save', function (next) {
  if (!this.order_Time) {
    this.order_Time = this._id.getTimestamp();
  }
  next();
});

orderSchema.pre('save', function (next) {
  this.order_Items.forEach((item) => {
    if (!item.amount) {
      item.amount = item.price * item.qty;
    }
  });
  next();
});

orderSchema.pre('find', function (next) {
  this.where({ isDeleted: false });
  next();
});

export default orderSchema;
