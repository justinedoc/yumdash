export interface RestaurantHours {
  isOpen24Hours: boolean;
  currentlyOpen: boolean;
  openingTime?: string;
  closingTime?: string;
}

export interface RestaurantRating {
  average: number;
  total: number;
  breakdown: Record<number, number>;
}

export interface RestaurantContact {
  phone: string;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface RestaurantCardProps {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  contact: RestaurantContact;
  rating: RestaurantRating;
  hours: RestaurantHours;
  tags?: string[];
  isFavorite?: boolean;
  className?: string;
}