export interface Property {
    area: string | null
    area_in_sqft: string
    availablefor: string | null
    brochure: string
    construction_status: string
    created_at: string
    description: string
    emirate: string
    featured: number
    floor_plan: string
    id: number
    images: string
    list_order: string | null
    location: string
    main_image: string | null
    map: string
    number_of_bathroom: string
    number_of_bedroom: number
    payment_terms: string
    price: number
    project_name: string | null
    property_name: string
    property_type: string
    services: string
    status: number
    unique_id: string
    updated_at: string
    video: string
  }

  export interface Something {
    id: number;
    unique_id: string;
    construction_status: string;
    property_type: string;
    availablefor: string;
    emirate: string;
    area: string;
    project_name: string | null;
    property_name: string;
    price: number;
    number_of_bedroom: number;
    number_of_bathroom: string;
    area_in_sqft: string;
    description: string;
    main_image: string;
    images: string;
    video: string;
    floor_plan: string;
    brochure: string;
    services: string;
    location: string;
    map: string;
    payment_terms: string | null;
    status: number;
    list_order: number | null;
    featured: number;
    updated_at: string;
    created_at: string;
}


  export interface UpcomingProperties {
    current_page: number;
    data: Property[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }

  export interface PropertyCardProps {
    id?: number;
    imageUrl?: string | null;
    altText?: string;
    title?: string;
    description?: string;
    location?: string;
    bedrooms?: number;
    bathrooms?: string;
    area?: string;
    price?: number;
}
  
  export interface APIContextProviderProps {
    children: React.ReactNode;
  }