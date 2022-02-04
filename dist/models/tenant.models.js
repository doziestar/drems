"use strict";
// tenant model
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantModel = void 0;
const mongoose_1 = require("mongoose");
const TenantSchema = new mongoose_1.Schema({
    name: {
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
    property: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
});
const TenantModel = (0, mongoose_1.model)('Tenant', TenantSchema);
exports.TenantModel = TenantModel;
//# sourceMappingURL=tenant.models.js.map