export type RestaurantsReponse = {
  title: string;
  version: number;
  totalElements: number;
  offset: number;
  rankingType: string;
  elements: Restaurant[];
  rankingRequestID: string;
};

export type Restaurant = {
  type: FluffyType;
  singleData: SingleData;
  groupData: GroupData | null;
};

export type GroupData = {
  id: string;
  elements: SingleData[];
  title: string;
  subtitle: null;
  icon: Icon;
  browsable: boolean;
  headerElements: null;
  animatedBackground: null;
};

export type SingleData = {
  type: SingleDataType;
  storeData: StoreData;
  storeProductsData: null;
  storeWithProductCarouselData: null;
  bannerData: BannerData | null;
};

export type BannerData = {
  type: string;
  primeData: null;
  ecoBannerData: null;
  promotionEventData: null;
  bannerData: null;
  lottieBannerData: null;
  groceriesData: null;
  combosData: null;
};

export type StoreData = {
  store: Store;
  filters: Filter[];
};

export type Filter = {
  name: string;
};

export type Store = {
  type: PurpleType;
  id: number;
  urn: string;
  name: string;
  slug: string;
  fiscalName: null;
  imageId: string;
  open: boolean;
  emulateOpen: boolean;
  mcdPartner: boolean;
  food: boolean;
  cityCode: CityCode;
  scheduling: Scheduling;
  closedStatusMessage: null;
  nextOpeningTime: null;
  serviceFee: number;
  deliveryFeeInfo: DeliveryFeeInfo;
  categoryID: number;
  cartUniqueElements: null;
  cartTotalElements: null;
  note: null | string;
  distance: Distance;
  addressID: number;
  location: Location | null;
  customDescriptionAllowed: boolean;
  productsInformationText: null | string;
  productsInformationLink: null | string;
  deliveryNotAvailable: boolean;
  deliveryNotAvailableMessage: null;
  specialRequirementsAllowed: boolean;
  etaEnabled: boolean;
  allergiesInformationAllowed: boolean;
  legalCheckboxRequired: boolean;
  dataSharingRequested: boolean;
  marketplace: boolean;
  cashSupported: boolean;
  promotions: Promotion[];
  primeAvailable: boolean;
  cutleryRequestAllowed: boolean;
  ratingInfo: RatingInfo;
  selectedStrategyType: SelectedStrategyTypeEnum;
  supportedStrategies: SupportedStrategy[];
  itemsType: ItemsType;
  suggestionKeywords: string[];
  phoneNumber: string;
  address: string;
  viewType: ViewType;
  sponsored: boolean;
  feesPricingCalculationID: string;
  rankingScore: null;
  edenredEnabled: boolean;
};

export type CityCode = "BCN";

export type DeliveryFeeInfo = {
  fee: number;
  style: Style;
};

export type Style = "DEFAULT";

export type Distance = "<100m";

export type ItemsType = "CATEGORIZED" | "MENUS";

export type Location = {
  latitude: number;
  longitude: number;
};

export type Promotion = {
  id: number;
  title: string;
  description: Description;
  type: PromotionType;
  isPrime: boolean;
  origin: Origin;
};

export type Description = "algunos productos" | "todo el menú";

export type Origin = "PARTNER_PROMOTION";

export type PromotionType = "PERCENTAGE_DISCOUNT" | "TWO_FOR_ONE";

export type RatingInfo = {
  cardLabel: string;
  detailsLabel: DetailsLabel | null;
  totalRatingLabel: null | string;
  icon: Icon;
  color: Color | null;
  backgroundColor: Color | null;
};

export type Color = {
  lightColorHex: LightColorHex;
  darkColorHex: DarkColorHex;
};

export type DarkColorHex = "#5D4109" | "#009f82" | "#4a958e" | "";

export type LightColorHex = "#FFDE99" | "#2abb9b" | "#6ad5cb" | "";

export type DetailsLabel = "Excelente" | "Muy bueno" | "";

export type Icon = {
  lightImageID: string;
  darkImageID: string;
};

export type Scheduling = {
  enabled: boolean;
  message: null;
};

export type SelectedStrategyTypeEnum = "DELIVERY" | "PICKUP";

export type SupportedStrategy = {
  type: SelectedStrategyTypeEnum;
};

export type PurpleType = "web";

export type ViewType = "LIST_VIEW_LAYOUT";

export type SingleDataType = "STORE" | "BANNER";

export type FluffyType = "SINGLE" | "GROUP";
