"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyController = void 0;
const policy_service_1 = require("../services/policy.service");
// import { Delete, Get, Post, Put, Route } from 'tsoa';
// @Route('/api/v1/policies')
class PolicyController {
    constructor() {
        this.policyService = new policy_service_1.PolicyService();
        // @Get()
        this.index = async (req, res, next) => {
            try {
                const policies = await this.policyService.index();
                res.status(200).json({ data: policies, message: 'Policies' });
            }
            catch (error) {
                next(error);
            }
        };
        // @Get('{id}')
        this.show = async (req, res, next) => {
            try {
                const policy = await this.policyService.show(req.params.id);
                res.status(200).json({ data: policy, message: 'Policy' });
            }
            catch (error) {
                next(error);
            }
        };
        // @Post()
        this.create = async (req, res, next) => {
            try {
                const policy = await this.policyService.create(req.body);
                res.status(201).json({ data: policy, message: 'Policy' });
            }
            catch (error) {
                next(error);
            }
        };
        // @Put('{id}')
        this.update = async (req, res, next) => {
            try {
                const policy = await this.policyService.update(req.params.id, req.body);
                res.status(200).json({ data: policy, message: 'Policy' });
            }
            catch (error) {
                next(error);
            }
        };
        // @Delete('{id}')
        this.destroy = async (req, res, next) => {
            try {
                const policy = await this.policyService.destroy(req.params.id);
                res.status(200).json({ data: policy, message: 'Policy' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.PolicyController = PolicyController;
