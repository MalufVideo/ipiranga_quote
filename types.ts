export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

export interface EquipmentItem {
  name: string;
  detail: string;
  icon?: string;
}

export interface ProposalOption {
  id: 'A' | 'B';
  name: string;
  tagline: string;
  description: string;
  priceVideo: number;
  priceAudio: number;
  total: number;
  features: string[];
  techHighlight: string;
}