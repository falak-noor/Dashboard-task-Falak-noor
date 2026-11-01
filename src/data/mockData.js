export const INITIAL_KPIS = [
  {
    id: 'total-users',
    title: 'Total Users',
    value: '128',
    change: '+12%',
    isPositive: true,
    comparison: '+26 from last month',
    iconType: 'user',
  },
  {
    id: 'active-users',
    title: 'Active Users',
    value: '196',
    change: '8%',
    isPositive: true,
    comparison: '+14 from last month',
    iconType: 'users',
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '196',
    change: '↓ 5%',
    isPositive: false,
    comparison: '-3 from last month',
    iconType: 'revenue',
  },
  {
    id: 'total-orders',
    title: 'Total Orders',
    value: '182',
    change: '15%',
    isPositive: true,
    comparison: '+24 from last month',
    iconType: 'orders',
  },
];

export const INITIAL_USERS = [
  {
    id: 1,
    name: 'Sara',
    email: 'sara@org.com',
    userType: 'Internal',
    program: 'School Education',
    role: 'User manager',
    status: 'Active',
    lastLogin: '24 Nov 2025',
  },
  {
    id: 2,
    name: 'Fatima',
    email: 'fatima@org.com',
    userType: 'External',
    program: 'CPD Program',
    role: 'Editor',
    status: 'Active',
    lastLogin: '23 Nov 2025',
  },
  {
    id: 3,
    name: 'Ayesha',
    email: 'ayesha@org.com',
    userType: 'Internal',
    program: 'AssesmentProgram',
    role: 'viewer',
    status: 'Inactive',
    lastLogin: '23 Nov 2025',
  },
  {
    id: 4,
    name: 'Bilal Khan',
    email: 'bilal@org.com',
    userType: 'Internal',
    program: 'School Education',
    role: 'Editor',
    status: 'Active',
    lastLogin: '22 Nov 2025',
  },
  {
    id: 5,
    name: 'Zainab Tariq',
    email: 'zainab@org.com',
    userType: 'External',
    program: 'CPD Program',
    role: 'viewer',
    status: 'Pending Activation',
    lastLogin: 'Pending',
  },
];

export const AVAILABLE_PROGRAMS = [
  'School Education',
  'CPD Program',
  'AssesmentProgram',
  'Digital Learning',
];

export const AVAILABLE_ROLES = [
  'User manager',
  'Editor',
  'viewer',
  'Administrator',
];

export const AVAILABLE_USER_TYPES = ['Internal', 'External'];
