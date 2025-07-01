export interface ServiceData {
    id: string;
    icon: string;
    title: string;
    features: string[];
    accentColor: string;
  }
  
  export const servicesData: ServiceData[] = [
    {
      id: 'paid-ads',
      icon: '◉',
      title: 'Paid Ads',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'Campaign Optimization',
        'Performance Analytics'
      ],
      accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
    },
    {
      id: 'social-media',
      icon: '○',
      title: 'Social Media Management',
      features: [
        'Content Strategy',
        'Community Management',
        'Brand Voice Development',
        'Engagement Analytics'
      ],
      accentColor: 'bg-[#7252A5] hover:bg-[#6341a0]'
    },
    {
      id: 'content-creation',
      icon: '|||',
      title: 'Creator Content',
      features: [
        'Video Production',
        'Photography Services',
        'Graphic Design',
        'Content Calendar Planning'
      ],
      accentColor: 'bg-[#759CCF] hover:bg-[#6589c1]'
    },
    {
      id: 'web-development',
      icon: '⚡',
      title: 'Web Development',
      features: [
        'Website Design',
        'E-commerce Development',
        'Mobile Optimization',
        'SEO Implementation'
      ],
      accentColor: 'bg-[#F2AE1F] hover:bg-[#e09d0e]'
    }
  ];