'use strict';

var mongoose      = require('mongoose')
  , Schema        = mongoose.Schema;

var OrderSchema = new Schema({
	id:				{ type: Number, required: true, unique: true, index: true },
	created:		{ type: Date, default: Date.now },
	updated:		{ type: Date, default: null },
	price:			{ type: Number, default: 0 },
			
    
	customer:		{
		id:		    { type: Number },
		first_name:	{ type: String },
		last_name:	{ type: String }
	},
	items:			[{
		id:				{ type: Number, required: true }, // product_id
		quantity:	{ type: Number, required: true },
		price:		{ type: Number, default: 0 }
	}],
	
    
});

mongoose.model('Order', OrderSchema);