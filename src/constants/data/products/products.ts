import {
  ECOMMERCE_BASIC_PACKAGE_FEATURES,
  ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES,
  ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES,
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
  DIGITAL_MARKETING_BASIC_FEATURES,
  DIGITAL_MARKETING_PROFESSIONAL_FEATURES,
  DIGITAL_MARKETING_ENTERPRISE_FEATURES
} from './productFeatureData'

export enum productNames {
  ECOMMERCE = 'Ecommerce',
  DOMAIN_HOST_MIS = 'Domain Hosting MIS',
  WEB_DEVELOPMENT = 'Web Development',
  UI_UX = 'UI/UX Design',
  MOBILE_APP = 'Mobile App Development',
  MAINTENANCE = 'Maintenance & Support',
  CLOUD_SERVICES = 'Cloud Services',
  DIGITAL_MARKETING = 'Digital Marketing'
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
      'https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png',
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
      'https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png',
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
      'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png',
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
      'https://cdn.pixabay.com/photo/2018/03/27/12/16/analytics-3265840_1280.jpg',
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
      'https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg',
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
      'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg',
  },
  {
    title: 'Ecommerce',
    packages: {
      basic: {
        name: 'Basic',
        features: [...ECOMMERCE_BASIC_PACKAGE_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES],
      },
    },
    features: [
      ...ECOMMERCE_BASIC_PACKAGE_FEATURES,
      ...ECOMMERCE_PROFESSIONAL_PACKAGE_FEATURES.slice(1),
      ...ECOMMERCE_ENTERPRISE_PACKAGE_FEATURES.slice(1),
    ],
    image:
      'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
  },
  {
    title: 'Digital Marketing',
    packages: {
      basic: {
        name: 'Basic',
        features: [...DIGITAL_MARKETING_BASIC_FEATURES],
      },

      professional: {
        name: 'Professional',
        features: [...DIGITAL_MARKETING_PROFESSIONAL_FEATURES],
      },

      enterprise: {
        name: 'Enterprise',
        features: [...DIGITAL_MARKETING_ENTERPRISE_FEATURES],
      },
    },
    features: [
      ...DIGITAL_MARKETING_BASIC_FEATURES,
      ...DIGITAL_MARKETING_PROFESSIONAL_FEATURES.slice(1),
      ...DIGITAL_MARKETING_ENTERPRISE_FEATURES.slice(1),
    ],
    image:
      'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg',
  }
]
