export interface Blog {
  title: string;
  description: string;
  image: string;
  slug: string;
  popular?: boolean;
  content?: string;
  date?: string;
  author?: string;
  category?: string;
}

export interface Comment {
  user: string;
  comment: string;
  replies?: { user: string; reply: string }[];
}

export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  image: string;
  popular: boolean;
  slug: string;
  category: string;
  content: string;
  author: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  views: number;
  likes: number;
  comments: Comment[];
}
