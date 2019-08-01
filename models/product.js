const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
	  id:				{ type: Number, required: true, unique: true, index: true },
	  created:	{ type: Date, default: Date.now },
	  updated:	{ type: Date, default: null },
	  title:		{ type: String },	// product.title
	  name:			{ type: String },	// product.variants[0].barcode
	  type:			{ type: String },	// product.product_type
	  image:		{ type: String },	// product.image.src
	  handle:		{ type: String }	// product.handle
   });

mongoose.model('Product', ProductSchema);