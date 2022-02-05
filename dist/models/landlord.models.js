"use strict";
// landlord model
Object.defineProperty(exports, "__esModule", { value: true });
exports.Landlord = void 0;
const mongoose_1 = require("mongoose");
const landlordSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    properties: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Property',
        },
    ],
    propertyManagers: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'PropertyManager',
        },
    ],
});
const Landlord = (0, mongoose_1.model)('Landlord', landlordSchema);
exports.Landlord = Landlord;
//# sourceMappingURL=landlord.models.js.map