export const menuItems = [
  {
    id: "services",
    i18nKey: "services",
    href: "/services",
    children: [
      {
        id: "service01",
        i18nKey: "services.childrens.item01",
        href: "/services/service01",
      },
      {
        id: "services02",
        i18nKey: "services.childrens.item02",
        href: "/services/service02",
      },
      {
        id: "services03",
        i18nKey: "services.childrens.item03",
        href: "/services/service03",
      },
    ],
    featured: {
      id: "featured",
      i18nKey: "services.featured",
      href: "/services/featured",
      imageUrl: "/asset/images/header/featured.webp",
    },
  },
  {
    id: "products",
    i18nKey: "products",
    href: "/products",
    children: [
      {
        id: "product01",
        i18nKey: "products.childrens.item01",
        href: "/products/product01",
      },
      {
        id: "product02",
        i18nKey: "products.childrens.item02",
        href: "/products/product02",
      },
      {
        id: "product03",
        i18nKey: "products.childrens.item03",
        href: "/products/product03",
      },
    ],
  },
  {
    id: "blog",
    i18nKey: "blog",
    href: "/blog",
  },
  {
    id: "contact",
    i18nKey: "contact",
    href: "/contact",
  },
];
