export interface JobPost {
    job_id: number;
    title: string;
    description: string;
    budget: number;
    location: string;
    deadline: string;
    image: string | null;
  }