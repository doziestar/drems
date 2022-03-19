// import { PropertyManager as PropertyManagerInterface } from '../interfaces/managers.interface';
// import { PropertyManagerService } from '../services/manager.service';
// import { NextFunction, Request, Response } from 'express';
// class PropertyManagerController {
//   public async getPropertyManagers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManagers: PropertyManagerInterface[] = await PropertyManagerService.getPropertyManagers();
//       return res.status(200).json(propertyManagers);
//     } catch (error) {
//       next(error);
//     }
//   }
//   public async getPropertyManagerById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManager: PropertyManagerInterface = await PropertyManagerService.getPropertyManagerById(req.params.propertyManagerId);
//       return res.status(200).json(propertyManager);
//     } catch (error) {
//       next(error);
//     }
//   }
//   public async createPropertyManager(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManager: PropertyManagerInterface = await PropertyManagerService.createPropertyManager(req.body);
//       return res.status(201).json(propertyManager);
//     } catch (error) {
//       next(error);
//     }
//   }
//   public async updatePropertyManager(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManager: PropertyManagerInterface = await PropertyManagerService.updatePropertyManager(req.params.propertyManagerId, req.body);
//       return res.status(200).json(propertyManager);
//     } catch (error) {
//       next(error);
//     }
//   }
//   public async deletePropertyManager(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManager: PropertyManagerInterface = await PropertyManagerService.deletePropertyManager(req.params.propertyManagerId);
//       return res.status(200).json(propertyManager);
//     } catch (error) {
//       next(error);
//     }
//   }
//   public async getPropertyManagerByLandlordId(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManager: PropertyManagerInterface = await PropertyManagerService.getPropertyManagerByLandlordId(req.params.landlordId);
//       return res.status(200).json(propertyManager);
//     } catch (error) {
//       next(error);
//     }
//   }
//   public async getPropertyManagerByPropertyId(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const propertyManager: PropertyManagerInterface = await PropertyManagerService.getPropertyManagerByPropertyId(req.params.propertyId);
//       return res.status(200).json(propertyManager);
//     } catch (error) {
//       next(error);
//     }
//   }
// }
// export default PropertyManagerController;
