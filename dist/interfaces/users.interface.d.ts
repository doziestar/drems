export interface IUser {
    id: string;
    email?: string;
    phoneNumber?: string;
    isActive?: boolean;
    firstName?: string;
    lastName?: string;
    password: string;
    isVerified?: boolean;
    role: string;
    username?: string;
    fullName?: string;
    hashPassword(): Promise<void>;
    comparePassword(password: string): Promise<boolean>;
    generateToken(): Promise<string>;
    createProfile(): Promise<void>;
}
export interface UserInput {
    email?: string;
    username?: string;
    phoneNumber?: string;
    password: string;
}
export interface IProfile {
    userId: string;
    bio?: string;
    website?: string;
    location?: string;
    birthday?: string;
    avatar?: string;
}
