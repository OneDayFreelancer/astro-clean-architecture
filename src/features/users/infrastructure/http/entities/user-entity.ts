export interface UserEntity {
    id?: number;
    name: string;
    username: string;
    email: string;
    address?: AddressEntity;
    phone?: string;
    website?: string;
    company?: CompanyEntity;
}

interface AddressEntity {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoEntity;
}

interface GeoEntity { lat: string; lng: string }

interface CompanyEntity {
    name: string;
    catchPhrase: string;
    bs: string;
}