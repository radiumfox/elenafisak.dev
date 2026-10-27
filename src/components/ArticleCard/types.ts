export interface ArticleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  timeToRead: string;
  category: string;
  date: Date;
  href?: string;
}
