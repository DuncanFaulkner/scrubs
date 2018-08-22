export interface Product {
  productId: string;
  name: string;
  code: string;
  description: string;
  onSale: boolean;
  featured: boolean;
  price: number;
  salePrice: number;
  starRating: number;
  colour: string;
  imageUrl: string;
  quantity: string[];
}

//  "productId": 1,
//     "name": "Leaf Rake",
//     "code": "123456",
//     "description": "Leaf Rake",
//     "onSale": false,
//     "featured": false,
//     "price": "25.00",
//     "salePrice": "0.00",
//     "starRating": "3.2",
//     "colour": "",
//     "imageUrl": "../assets/img/products/action_hero.png",
//     "quantity": [
//       {
//         "small": "5",
//         "medium": "6",
//         "large": "3",
//         "extraLarge": "6"
//       }
//     ]
