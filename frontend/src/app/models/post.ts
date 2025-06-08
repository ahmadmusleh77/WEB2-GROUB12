
export interface post {
  job_id: number;        // لازم تضيفه لأنه هو المفتاح الأساسي
  location: string;
  description: string;
  budget: string;        // لأنها قيمة نصية من API
  title: string;
  user: {
    user_id: number;
    name: string;
  }
}


