import { BrandRequestModel } from "../../Brands/models/brand-request-model";
import { CategoriesRequestModel } from "../../Categories/models/categories-request-model";

export interface BookRequestModel {
id:string;
title:string;
description:string;
author:string;
content:string;
featuredImage:string;
publicshedDate:Date;
urlHandle:string;
price:number;
isVisible:boolean;
categoriesDtos:CategoriesRequestModel[];
brandDtos:BrandRequestModel[];
}