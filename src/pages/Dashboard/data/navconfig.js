export const navConfig = 
  [
  {
    "item": "overview",
    "children": [
      { "title": "App", "icon": "appIcon", "path": "/app" },
      { "title": "Ecommerce", "icon": "ecommerceIcon", "path": "/ecommerce" },
      { "title": "Analytics", "icon": "analyticsIcon", "path": "/analytics" },
      { "title": "Banking", "icon": "bankingIcon", "path": "/banking" },
      { "title": "Booking", "icon": "bookingIcon", "path": "/booking" },
      { "title": "File", "icon": "fileIcon", "path": "/file" },
      { "title": "Course", "icon": "courseIcon", "path": "/course" }
    ]
  },

  {
    "item": "management",
    "children": [
      {
        "title": "User",
        "icon": "userIcon",
        "children": [
          { "title": "Profile", "path": "/user/profile" },
          { "title": "Cards", "path": "/user/cards" },
          { "title": "List", "path": "/user/list" },
          { "title": "Create", "path": "/user/create" },
          { "title": "Edit", "path": "/user/edit" },
          { "title": "Account", "path": "/user/account" }
        ]
      },
      {
        "title": "Product",
        "icon": "productIcon",
        "children": [
          { "title": "List", "path": "/product/list" },
          { "title": "Details", "path": "/product/details" },
          { "title": "Create", "path": "/product/create" },
          { "title": "Edit", "path": "/product/edit" }
        ]
      },
      {
        "title": "Order",
        "icon": "orderIcon",
        "children": [
          { "title": "List", "path": "/order/list" },
          { "title": "Details", "path": "/order/details" }
        ]
      },
      {
        "title": "Invoice",
        "icon": "invoiceIcon",
        "children": [
          { "title": "List", "path": "/invoice/list" },
          { "title": "Details", "path": "/invoice/details" }
        ]
      }
    ]
  }
]

