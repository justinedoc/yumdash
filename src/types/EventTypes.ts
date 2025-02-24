export type TimelineEvent = {
  title: string;
  description?: string;
  time?: string;
  isCompleted?: boolean;
  isLocation?: boolean;
  address?: {
    name?: string;
    street?: string;
    city?: string;
  };
};
