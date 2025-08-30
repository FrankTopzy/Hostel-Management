export type ExclusiveOfferType = {
  _id: number;
  title: string;
  description: string;
  priceOff: number;
  expiryDate: string;
  image: string;
}

export type TestimonialType = {
  id: number;
  name: string;
  address: string;
  image: string;
  rating: number;
  review: string;
}

export type FacilityIconType = {
  "Free WiFi": string;
  "Free Breakfast": string;
  "Room Service": string;
  "Mountain View": string;
  "Pool Access": string;
}

export type RoomCommonDataType = {
  icon: string;
  title: string;
  description: string;
}

export type UserDummyDataType = {
  _id: string;
  username: string;
  email: string;
  image: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  recentSearchedCities: string[];
}

export type HotelDummyDataType = {
  _id: string;
  name: string;
  address: string;
  contact: string;
  owner: UserDummyDataType;
  city: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type RoomsDummyDataType = {
  _id: string;
  hotel: HotelDummyDataType;
  roomType: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type UserBookingDummyDataType = {
  _id: string;
  user: UserDummyDataType;
  room: RoomsDummyDataType;
  hotel: HotelDummyDataType;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  guests: number;
  status: "pending" | "completed";
  paymentMethod: "Stripe" | "Pay At Hotel";
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type HotelCardType = {
  room: RoomsDummyDataType;
  index: number
}

export type TitleType = {
  title: string;
  subTitle: string;
  align: string;
  font: string;
}