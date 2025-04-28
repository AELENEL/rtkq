interface getProductRes{
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: Array<{
    _id: number;
    photo: string;
    price: string;
    title: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    description: string;
  }>;
};
