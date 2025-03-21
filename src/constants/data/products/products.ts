import {
  SHOPIFY_BASIC_PACKAGE_FEATURES,
  SHOPIFY_ENTERPRISE_PACKAGE_FEATURES,
  SHOPIFY_PROFESSIONAL_PACKAGE_FEATURES,
  DOMAIN_HOSTING_BASIC_FEATURES,
  DOMAIN_HOSTING_PROFESSIONAL_FEATURES,
  DOMAIN_HOSTING_ENTERPRISE_FEATURES,
  WEB_DEV_BASIC_FEATURES,
  WEB_DEV_PROFESSIONAL_FEATURES,
  WEB_DEV_ENTERPRISE_FEATURES,
  UI_UX_BASIC_FEATURES,
  UI_UX_PROFESSIONAL_FEATURES,
  UI_UX_ENTERPRISE_FEATURES,
  MOBILE_APP_BASIC_FEATURES,
  MOBILE_APP_PROFESSIONAL_FEATURES,
  MOBILE_APP_ENTERPRISE_FEATURES,
  MAINTENANCE_BASIC_FEATURES,
  MAINTENANCE_PROFESSIONAL_FEATURES,
  MAINTENANCE_ENTERPRISE_FEATURES,
  CLOUD_SERVICES_BASIC_FEATURES,
  CLOUD_SERVICES_PROFESSIONAL_FEATURES,
  CLOUD_SERVICES_ENTERPRISE_FEATURES,
  WORDPRESS_BASIC_FEATURES,
  WORDPRESS_PROFESSIONAL_FEATURES,
  WORDPRESS_ENTERPRISE_FEATURES
} from './productFeatureData'

export enum productNames {
  SHOPIFY = 'Shopify',
  DOMAIN_HOST_MIS = 'Domain Hosting MIS',
  WEB_DEVELOPMENT = 'Web Development',
  UI_UX = 'UI/UX Design',
  MOBILE_APP = 'Mobile App Development',
  MAINTENANCE = 'Maintenance & Support',
  CLOUD_SERVICES = 'Cloud Services',
  WORDPRESS = 'WordPress'
}

export const productsData = [
  {
    title: 'UI/UX Design',
    packages: {
      basic: {
        name: 'Basic',
        features: [...UI_UX_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...UI_UX_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...UI_UX_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...UI_UX_BASIC_FEATURES,
      ...UI_UX_PROFESSIONAL_FEATURES.slice(1),
      ...UI_UX_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://www.nullplex.com/uploads/blogs/coverimages/fad4b53c-9630-48ab-bcbf-2a9b3c536119-20240130071903.png',
  },
  {
    title: 'Cloud Services',
    packages: {
      basic: {
        name: 'Basic',
        features: [...CLOUD_SERVICES_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...CLOUD_SERVICES_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...CLOUD_SERVICES_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...CLOUD_SERVICES_BASIC_FEATURES,
      ...CLOUD_SERVICES_PROFESSIONAL_FEATURES.slice(1),
      ...CLOUD_SERVICES_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://www.pulsion.co.uk/wp-content/uploads/2024/01/aws-vs-azure-blog-featured.png',
  },
  {
    title: 'Web Development',
    packages: {
      basic: {
        name: 'Basic',
        features: [...WEB_DEV_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...WEB_DEV_PROFESSIONAL_FEATURES], 
      },

      enterprise: {
        name: 'Enterprise',
        features: [...WEB_DEV_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...WEB_DEV_BASIC_FEATURES,
      ...WEB_DEV_PROFESSIONAL_FEATURES.slice(1),
      ...WEB_DEV_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg',
  },
  {
    title: 'Maintenance & Support',
    packages: {
      basic: {
        name: 'Basic',
        features: [...MAINTENANCE_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...MAINTENANCE_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...MAINTENANCE_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...MAINTENANCE_BASIC_FEATURES,
      ...MAINTENANCE_PROFESSIONAL_FEATURES.slice(1),
      ...MAINTENANCE_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://bairesdev.mo.cloudinary.net/blog/2023/10/IT-Maintenance-Support.jpg',
  },
  {
    title: 'Domain Hosting MIS',
    packages: {
      basic: {
        name: 'Basic',
        features: [...DOMAIN_HOSTING_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional', 
        features: [...DOMAIN_HOSTING_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...DOMAIN_HOSTING_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...DOMAIN_HOSTING_BASIC_FEATURES,
      ...DOMAIN_HOSTING_PROFESSIONAL_FEATURES.slice(1),
      ...DOMAIN_HOSTING_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://i.pinimg.com/736x/2b/e1/b9/2be1b972579a7fec9d7cb9a6eaf4e22f.jpg',
  },
  {
    title: 'Mobile App Development',
    packages: {
      basic: {
        name: 'Basic',
        features: [...MOBILE_APP_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...MOBILE_APP_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...MOBILE_APP_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...MOBILE_APP_BASIC_FEATURES,
      ...MOBILE_APP_PROFESSIONAL_FEATURES.slice(1),
      ...MOBILE_APP_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://i.pinimg.com/736x/71/77/b6/7177b6767cac546d5860d28d21fe15a6.jpg',
  },
  {
    title: 'Shopify',
    packages: {
      basic: {
        name: 'Basic',
        features: [...SHOPIFY_BASIC_PACKAGE_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...SHOPIFY_PROFESSIONAL_PACKAGE_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...SHOPIFY_ENTERPRISE_PACKAGE_FEATURES],
      },
    },
    features: [
      ...SHOPIFY_BASIC_PACKAGE_FEATURES,
      ...SHOPIFY_PROFESSIONAL_PACKAGE_FEATURES.slice(1),
      ...SHOPIFY_ENTERPRISE_PACKAGE_FEATURES.slice(1),
    ],
    image:
      'https://i.pinimg.com/736x/07/10/4f/07104f00872551c28907f821554ec4ad.jpg',
  },
  {
    title: 'WordPress',
    packages: {
      basic: {
        name: 'Basic',
        features: [...WORDPRESS_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...WORDPRESS_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...WORDPRESS_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...WORDPRESS_BASIC_FEATURES,
      ...WORDPRESS_PROFESSIONAL_FEATURES.slice(1),
      ...WORDPRESS_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://i.pinimg.com/736x/27/93/2d/27932d86dbbea73ccd6f5e472ef668cf.jpg',
  }
]
