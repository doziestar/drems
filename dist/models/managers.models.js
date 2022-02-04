"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyManager = void 0;
const mongoose_1 = require("mongoose");
// models for property manager
const propertyManagerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    landlord: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Landlord',
        required: true,
    },
    properties: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Property',
        },
    ],
    tenants: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Tenant',
        },
    ],
});
const PropertyManager = (0, mongoose_1.model)('PropertyManager', propertyManagerSchema);
exports.PropertyManager = PropertyManager;
//# sourceMappingURL=managers.models.js.map