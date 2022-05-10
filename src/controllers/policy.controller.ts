import { PolicyService } from '@/services/policy.service';
import { NextFunction, Request, Response } from 'express';
// import { Delete, Get, Post, Put, Route } from 'tsoa';

// @Route('/api/v1/policies')
export class PolicyController {
  public policyService = new PolicyService();

  // @Get()
  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policies = await this.policyService.index();

      res.status(200).json({ data: policies, message: 'Policies' });
    } catch (error) {
      next(error);
    }
  };

  // @Get('{id}')
  public show = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policy = await this.policyService.show(req.params.id);

      res.status(200).json({ data: policy, message: 'Policy' });
    } catch (error) {
      next(error);
    }
  };

  // @Post()
  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policy = await this.policyService.create(req.body);

      res.status(201).json({ data: policy, message: 'Policy' });
    } catch (error) {
      next(error);
    }
  };

  // @Put('{id}')
  public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policy = await this.policyService.update(req.params.id, req.body);

      res.status(200).json({ data: policy, message: 'Policy' });
    } catch (error) {
      next(error);
    }
  };

  // @Delete('{id}')
  public destroy = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const policy = await this.policyService.destroy(req.params.id);

      res.status(200).json({ data: policy, message: 'Policy' });
    } catch (error) {
      next(error);
    }
  };
}
