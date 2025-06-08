export interface sure {
  user_id: number;
  name: string;
  email: string;
  status?: 'pending' | 'accepted';
}
