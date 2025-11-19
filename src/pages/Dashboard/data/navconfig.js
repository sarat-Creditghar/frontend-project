// export const navConfig = [
//   {
//     "id": "overview",
//     "title": "OVERVIEW",
//     "items": [
//       { "id": "app", "title": "App", "icon": "Zap" },
//       { "id": "ecommerce", "title": "Ecommerce", "icon": "ShoppingBag" },
//       { "id": "analytics", "title": "Analytics", "icon": "TrendingUp" },
//       { "id": "banking", "title": "Banking", "icon": "CreditCard" },
//       { "id": "booking", "title": "Booking", "icon": "Calendar" },
//       { "id": "file", "title": "File", "icon": "FileText" },
//       { "id": "course", "title": "Course", "icon": "BookOpen" }
//     ]
//   },
//   {
//     "id": "management",
//     "title": "MANAGEMENT",
//     "items": [
//       {
//         "id": "user",
//         "title": "User",
//         "icon": "User",
//         "children": [
//           { "id": "user-list", "title": "User List", "icon": "User" },
//           { "id": "user-profile", "title": "User Profile", "icon": "User" }
//         ]
//       },
//       {
//         "id": "product",
//         "title": "Product",
//         "icon": "Package",
//         "children": [
//           { "id": "product-list", "title": "Product List", "icon": "Package" },
//           { "id": "product-details", "title": "Product Details", "icon": "Package" }
//         ]
//       },
//       {
//         "id": "order",
//         "title": "Order",
//         "icon": "ShoppingCart",
//         "children": [
//           { "id": "order-list", "title": "Order List", "icon": "ShoppingCart" },
//           { "id": "order-details", "title": "Order Details", "icon": "ShoppingCart" }
//         ]
//       },
//       {
//         "id": "invoice",
//         "title": "Invoice",
//         "icon": "FileDown",
//         "children": [
//           { "id": "invoice-list", "title": "Invoice List", "icon": "FileDown" },
//           { "id": "invoice-details", "title": "Invoice Details", "icon": "FileDown" }
//         ]
//       },
//       {
//         "id": "blog",
//         "title": "Blog",
//         "icon": "FileEdit",
//         "children": [
//           { "id": "blog-list", "title": "Blog List", "icon": "FileEdit" },
//           { "id": "blog-post", "title": "Blog Post", "icon": "FileEdit" }
//         ]
//       }
//     ]
//   }
// ];

export const navConfig = [
  {
    id: "overview",
    title: "OVERVIEW",
    items: [
      { id: "app", title: "App", icon: "appIcon" },
      { id: "ecommerce", title: "Ecommerce", icon: "ecommerceIcon" },
      { id: "analytics", title: "Analytics", icon: "analyticsIcon" },
      { id: "banking", title: "Banking", icon: "bankingIcon" },
      { id: "booking", title: "Booking", icon: "bookingIcon" },
      { id: "file", title: "File", icon: "fileIcon" },
      { id: "course", title: "Course", icon: "courseIcon" },
    ],
  },
  {
    id: "management",
    title: "MANAGEMENT",
    items: [
      {
        id: "user",
        title: "User",
        icon: "userIcon",
        children: [
          { id: "user-list", title: "User List" },
          { id: "user-profile", title: "User Profile" },
        ],
      },
      {
        id: "product",
        title: "Product",
        icon: "productIcon",
        children: [
          { id: "product-list", title: "Product List" },
          { id: "product-details", title: "Product Details" },
        ],
      },
      {
        id: "order",
        title: "Order",
        icon: "orderIcon",
        children: [
          { id: "order-list", title: "Order List" },
          { id: "order-details", title: "Order Details" },
        ],
      },
      {
        id: "invoice",
        title: "Invoice",
        icon: "invoiceIcon",
        children: [
          { id: "invoice-list", title: "Invoice List" },
          { id: "invoice-details", title: "Invoice Details" },
        ],
      },
      {
        id: "blog",
        title: "Blog",
        icon: "fileIcon",
        children: [
          { id: "blog-list", title: "Blog List" },
          { id: "blog-post", title: "Blog Post" },
        ],
      },
    ],
  },
];
