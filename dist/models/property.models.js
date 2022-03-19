"use strict";
// models for property
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyModel = void 0;
const mongoose_1 = require("mongoose");
const propertySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    landlord: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Landlord',
        required: true,
    },
    propertyManager: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PropertyManager',
        required: true,
    },
    tenants: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Tenant',
        },
    ],
});
const PropertyModel = (0, mongoose_1.model)('Property', propertySchema);
exports.PropertyModel = PropertyModel;
