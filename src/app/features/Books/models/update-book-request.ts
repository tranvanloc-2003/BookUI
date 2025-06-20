export interface UpdateBookRequest {
    title: string;
    description: string;
    author: string;
    content: string;
    featuredImage: string;
    publicshedDate: Date;
    urlHandle: string;
    price: number;
    isVisible: boolean;
    CategoriesId: string[];
    BrandId: string[];
}