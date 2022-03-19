"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyController = void 0;
const Property_repo_1 = require("../repositories/Property.repo");
class PropertyController {
    constructor() {
        this.propertyRepo = new Property_repo_1.PropertyRepository();
        this.createProperty = async (req, res, next) => {
            try {
                const propertyData = req.body;
                const createPropertyData = await this.propertyRepo.create(propertyData);
                res.status(201).json({ data: createPropertyData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateProperty = async (req, res, next) => {
            try {
                const propertyId = req.params.id;
                const propertyData = req.body;
                if (await this.propertyRepo.update(propertyData, propertyId)) {
                    res.status(200).json({ data: propertyData, message: 'updated' });
                }
                else {
                    res.status(404).json({ message: 'not found' });
                }
                // res.status(200).json({ data: updatePropertyData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteProperty = async (req, res, next) => {
            try {
                const propertyId = req.params.id;
                await this.propertyRepo.delete(propertyId);
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.PropertyController = PropertyController;
