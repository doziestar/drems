// import { CreatePropertyDto } from '@/dtos/property.dto';
// import { IProperty } from '@/interfaces/property.interface';
// import { PropertyRepository } from '@/repositories/Property.repo';
// import { NextFunction, Request, Response } from 'express';

// export class PropertyController {
//   public propertyRepo = new PropertyRepository();

//   public createProperty = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const propertyData: CreatePropertyDto = req.body;
//       console.log(propertyData);
//       const createPropertyData: IProperty = await this.propertyRepo.create(propertyData);

//       res.status(201).json({ data: createPropertyData, message: 'created' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public updateProperty = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const propertyId = req.params.id;
//       const propertyData: IProperty = req.body;
//       if (await this.propertyRepo.update(propertyData, propertyId)) {
//         res.status(200).json({ data: propertyData, message: 'updated' });
//       } else {
//         res.status(404).json({ message: 'not found' });
//       }

//       // res.status(200).json({ data: updatePropertyData, message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public deleteProperty = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const propertyId = req.params.id;
//       await this.propertyRepo.delete(propertyId);
//     } catch (error) {
//       next(error);
//     }
//   };
// }
