import { Project } from '../models/content.models';

export const PROJECTS: Project[] = [
  {
    id: 'sugbudeals',
    name: 'SugbuDeals',
    subtitle: 'AI Local Discount Discovery',
    kind: 'Mobile app',
    summary:
      'Helped build a mobile app that lets shoppers find local deals and promotions, using AI to match products to users and giving small retailers more visibility.',
    stack: ['React Native', 'Node.js', 'NestJS', 'PostgreSQL'],
    flow: [
      'Small retailers list promos',
      'AI matches products to shoppers',
      'Shoppers find local deals',
    ],
  },
  {
    id: 'timerph',
    name: 'TimerPH',
    kind: 'Mobile app',
    summary:
      'Co-built a mobile attendance app that uses AWS Rekognition for face recognition and a location check for employee time tracking.',
    stack: ['React Native', 'ASP.NET', 'AWS Rekognition', 'PostgreSQL'],
    flow: ['Face scan · AWS Rekognition', 'Location check', 'Attendance time logged'],
  },
];
