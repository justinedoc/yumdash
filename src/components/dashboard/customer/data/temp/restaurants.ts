import { RestaurantCardProps } from "@/types/restaurantCardTypes";

export const restaurants: RestaurantCardProps[] = [
  {
    id: "kfc-ipaja",
    name: "KFC",
    description:
      "KFC is an American fast food restaurant chain that specializes in fried chicken.",
    logoUrl: "/src/assets/images/temp/restaurant.png",
    contact: {
      phone: "+234 906 4444 708",
      location: "Ipaja Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
    },
    rating: {
      average: 5.5,
      total: 1234,
      breakdown: { 5: 800, 4: 300, 3: 100, 2: 24, 1: 10 },
    },
    hours: { isOpen24Hours: true, currentlyOpen: true },
    tags: ["Fast Food", "Chicken", "American", "Delivery"],
  },
  {
    id: "mcdonalds-ipaja",
    name: "McDonald's",
    description:
      "McDonald's is a global fast food chain known for its burgers and fries.",
    logoUrl: "/src/assets/images/temp/restaurant.png",
    contact: {
      phone: "+234 906 4444 709",
      location: "Ipaja Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
    },
    rating: {
      average: 4.2,
      total: 876,
      breakdown: { 5: 300, 4: 350, 3: 150, 2: 50, 1: 26 },
    },
    hours: {
      isOpen24Hours: false,
      currentlyOpen: false,
      openingTime: "8:00 AM",
      closingTime: "10:00 PM",
    },
    tags: ["Fast Food", "Burgers", "American", "Family"],
  },
  {
    id: "kfc-ipaja2",
    name: "KFC",
    description:
      "KFC is an American fast food restaurant chain that specializes in fried chicken.",
    logoUrl: "/src/assets/images/temp/restaurant.png",
    contact: {
      phone: "+234 906 4444 708",
      location: "Ipaja Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
    },
    rating: {
      average: 5.5,
      total: 1234,
      breakdown: { 5: 800, 4: 300, 3: 100, 2: 24, 1: 10 },
    },
    hours: { isOpen24Hours: true, currentlyOpen: true },
    tags: ["Fast Food", "Chicken", "American", "Delivery"],
  },
  {
    id: "mcdonalds-ipaja2",
    name: "McDonald's",
    description:
      "McDonald's is a global fast food chain known for its burgers and fries.",
    logoUrl: "/src/assets/images/temp/restaurant.png",
    contact: {
      phone: "+234 906 4444 709",
      location: "Ipaja Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
    },
    rating: {
      average: 4.2,
      total: 876,
      breakdown: { 5: 300, 4: 350, 3: 150, 2: 50, 1: 26 },
    },
    hours: {
      isOpen24Hours: false,
      currentlyOpen: false,
      openingTime: "8:00 AM",
      closingTime: "10:00 PM",
    },
    tags: ["Fast Food", "Burgers", "American", "Family"],
  },
  {
    id: "kfc-ipaja3",
    name: "KFC",
    description:
      "KFC is an American fast food restaurant chain that specializes in fried chicken.",
    logoUrl: "/src/assets/images/temp/restaurant.png",
    contact: {
      phone: "+234 906 4444 708",
      location: "Ipaja Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
    },
    rating: {
      average: 5.5,
      total: 1234,
      breakdown: { 5: 800, 4: 300, 3: 100, 2: 24, 1: 10 },
    },
    hours: { isOpen24Hours: true, currentlyOpen: true },
    tags: ["Fast Food", "Chicken", "American", "Delivery"],
  },
  {
    id: "mcdonalds-ipaja3",
    name: "McDonald's",
    description:
      "McDonald's is a global fast food chain known for its burgers and fries.",
    logoUrl: "/src/assets/images/temp/restaurant.png",
    contact: {
      phone: "+234 906 4444 709",
      location: "Ipaja Lagos",
      coordinates: { lat: 6.5244, lng: 3.3792 },
    },
    rating: {
      average: 4.2,
      total: 876,
      breakdown: { 5: 300, 4: 350, 3: 150, 2: 50, 1: 26 },
    },
    hours: {
      isOpen24Hours: false,
      currentlyOpen: false,
      openingTime: "8:00 AM",
      closingTime: "10:00 PM",
    },
    tags: ["Fast Food", "Burgers", "American", "Family"],
  },
];
