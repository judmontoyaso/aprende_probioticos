// Types generados automáticamente desde Supabase
// Para regenerar: npx supabase gen types typescript --project-id bjpcnewtuuttgwozqqok > lib/supabase/types.ts

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string | null;
  image_url: string;
  image_alt: string;
  category: string;
  published_at: string;
  read_time: string;
  featured: boolean;
  use_template: boolean;
  author: string;
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
  meta_keywords: string[] | null;
  meta_og_image: string | null;
  status: 'draft' | 'published' | 'archived';
  searchable?: unknown; // tsvector
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  color: string | null;
  icon: string | null;
  article_count: number;
  created_at: string;
  updated_at: string;
}

export interface ArticleWithStats extends Article {
  category_name: string | null;
  category_color: string | null;
  category_icon: string | null;
  days_since_published: number;
  is_new: boolean;
}

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: Article;
        Insert: Omit<Article, 'id' | 'created_at' | 'updated_at' | 'views' | 'likes' | 'searchable'>;
        Update: Partial<Omit<Article, 'id' | 'created_at' | 'searchable'>>;
      };
      categories: {
        Row: Category;
        Insert: Omit<Category, 'id' | 'created_at' | 'updated_at' | 'article_count'>;
        Update: Partial<Omit<Category, 'id' | 'created_at'>>;
      };
    };
    Views: {
      articles_with_stats: {
        Row: ArticleWithStats;
      };
    };
    Functions: {
      increment_article_views: {
        Args: { article_slug: string };
        Returns: void;
      };
      get_related_articles: {
        Args: { article_slug: string; max_results?: number };
        Returns: Array<Pick<Article, 'id' | 'slug' | 'title' | 'description' | 'image_url' | 'category' | 'published_at' | 'read_time'>>;
      };
      search_articles: {
        Args: { search_query: string };
        Returns: Array<{
          id: string;
          slug: string;
          title: string;
          description: string;
          image_url: string;
          category: string;
          rank: number;
        }>;
      };
    };
  };
}
