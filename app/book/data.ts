type ServiceInfo = {
  name: string
  description: string
  features: string[]
}

type ServiceNames = Record<string, ServiceInfo>

export const serviceNames: ServiceNames = {
  'fidelity': {
    name: 'Fidelity & Guaranty (Future Income)',
    description: 'Comprehensive annuity solutions offering flexible rates, retirement protection, and guaranteed lifetime income.',
    features: [
      'Wide range of annuity options: fixed and indexed options* with participation rates',
      'Downside protection of retirement',
      'Growth potential and guaranteed income for life'
    ]
  },
  'american-national': {
    name: 'American National',
    description: 'Tailored life and retirement solutions with comprehensive benefits and guaranteed lifetime income.',
    features: [
      'Life, retirement, and business solutions',
      'Lifetime income',
      'Living benefits rider included at no extra costs'
    ]
  },
  'national-life': {
    name: 'National Life Group',
    description: 'Advanced life insurance products with diverse market solutions and comprehensive living benefits.',
    features: [
      'Variety of life, retirement, and advanced market products',
      'Lifetime income',
      'Living benefits rider included at no extra costs'
    ]
  },
  'foresters': {
    name: 'Foresters Financial',
    description: 'Exclusive life insurance offerings with unique member benefits and comprehensive coverage options.',
    features: [
      'Variety of life insurance products',
      'Exclusive member benefits such as Foresters Go, Law Assure, and Foresters Renew',
      'Living benefits rider included at no extra costs'
    ]
  },
  'mutual-omaha': {
    name: 'Mutual of Omaha',
    description: 'Comprehensive life insurance solutions with specialized long-term care and expedited underwriting.',
    features: [
      'Variety of life insurance solutions',
      'Long-term care—cancer, heart attack, and stroke insurance',
      'Express underwriting'
    ]
  }
}
