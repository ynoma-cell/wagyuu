
export interface WagyuBrand {
  id: string;
  name: string;
  prefecture: string;
  region: string;
  description: string;
  characteristics: string[];
  recommendedCuts: string[];
  priceRange: string;
  imageUrl: string;
  coordinates: { x: number; y: number }; // Relative coordinates for the map
}

export type ViewType = 'MAP' | 'LIST' | 'STAMP_BOOK' | 'DETAIL';

export interface AppState {
  collectedStamps: string[]; // IDs of collected wagyu
  currentView: ViewType;
  selectedWagyuId: string | null;
}
