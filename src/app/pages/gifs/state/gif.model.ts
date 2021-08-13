export interface IGifListResponse {
  data: IGifData[];
  meta: IMetaData;
  pagination: IPagination;
}

export interface IGifResponse {
  data: IGifData;
  meta: IMetaData;
}

export interface IViewCountResponse {
  userId: string;
  gifId: string;
  uploadDate: number;
  viewCount: number;
}

export interface IPagination {
  total_count: number;
  count: number;
  offset: number
}

export interface IMetaData {
  status: number;
  msg: string;
  response_id: string;
}

export interface IGifData {
  featured_tags: string[];
  images: IImage;
  slug: string;
  title: string;
  tags: string;
  bitly_gif_url: string;
  bitly_url: string;
  user: IUserData;
}

export interface IUserData {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: string;
  website_url: string;
  instagram_url: string;
}

export interface IImage {
  fixed_height: IImageDetail;
  original: IImageDetail;
}

export interface IImageDetail {
  frames: number;
  hash: string;
  height: number;
  mp4: string;
  url: string;
  webp: string;
  width: number
}
