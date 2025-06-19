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
categoriesId:string[];
brandsId:string[];
}