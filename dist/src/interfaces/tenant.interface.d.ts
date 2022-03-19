import { Property } from './property.interface';
interface Tenant {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    image: string;
    imagePath: string;
    properties: Property[];
}
export { Tenant };
