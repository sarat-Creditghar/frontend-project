

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
          { id: "user-profile", title: "Profile" },
          { id: "user-card", title: "Card" },
          { id: "user-list", title: "List" },
          { id: "user-create", title: "Create" },
          { id: "user-edit", title: "Edit" },
          { id: "user-account", title: "Account" },
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
