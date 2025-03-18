import type { AWSData } from '$lib/types';

const API_URL = 'https://north-case-api.vercel.app/api';
const AUTH_TOKEN = '8WT05LTmEmJBmBWHROWGYmjulMDp3EIa38thJTBzc0R4VAGBVMpsifRsXu3bYPz7';

export async function fetchAWSData(): Promise<AWSData> {
    // const res = await fetch(API_URL, {
    //     headers: { Authorization: AUTH_TOKEN }
    // });

    // if (!res.ok) throw new Error('Failed to fetch AWS Savings data');
    // console.log(res);
    // return res.json();
    return {
        "overview": {
          "totalSavings": 1200.50,
          "currentMonthSavings": 200.75,
          "percentageChange": 15.5
        },
        "savingsTrends": [
          {"month": "January", "savings": 150.00},
          {"month": "February", "savings": 175.00},
          {"month": "March", "savings": 200.00},
          {"month": "April", "savings": 225.00},
          {"month": "May", "savings": 250.00},
          {"month": "June", "savings": 200.75}
        ],
        "savingsByCategory": [
          {"service": "EC2", "savings": 500.00},
          {"service": "S3", "savings": 300.00},
          {"service": "RDS", "savings": 250.00},
          {"service": "Lambda", "savings": 150.00}
        ],
        "detailedSavings": [
          {"date": "2025-06-01", "service": "EC2", "amount": 50.00},
          {"date": "2025-06-02", "service": "S3", "amount": 30.00},
          {"date": "2025-06-03", "service": "RDS", "amount": 25.00},
          {"date": "2025-06-04", "service": "Lambda", "amount": 15.00},
          {"date": "2025-06-05", "service": "EC2", "amount": 60.00},
          {"date": "2025-06-06", "service": "S3", "amount": 40.00}
        ]
      };      
}
