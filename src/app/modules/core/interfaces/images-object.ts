export interface ImagesObject {
  id:                       string;
  created_at:               Date;
  updated_at:               Date;
  promoted_at:              Date;
  width:                    number;
  height:                   number;
  color:                    string;
  blur_hash:                string;
  description:              null;
  alt_description:          null;
  urls:                     Urls;
  links:                    ImagesResponseLinks;
  categories:               any[];
  likes:                    number;
  liked_by_user:            boolean;
  current_user_collections: any[];
  sponsorship:              null;
  topic_submissions:        TopicSubmissions;
  user:                     User;
  exif:                     Exif;
  location:                 Location;
  views:                    number;
  downloads:                number;
}

export interface Exif {
  make:          string;
  model:         string;
  name:          string;
  exposure_time: string;
  aperture:      string;
  focal_length:  string;
  iso:           number;
}

export interface ImagesResponseLinks {
  self:              string;
  html:              string;
  download:          string;
  download_location: string;
}

export interface Location {
  title:    null | string;
  name:     null | string;
  city:     null | string;
  country:  null | string;
  position: Position;
}

export interface Position {
  latitude:  number | null;
  longitude: number | null;
}

export interface TopicSubmissions {
  wallpapers?: Wallpapers;
}

export interface Wallpapers {
  status: string;
}

export interface Urls {
  raw:     string;
  full:    string;
  regular: string;
  small:   string;
  thumb:   string;
}

export interface User {
  id:                 string;
  updated_at:         Date;
  username:           string;
  name:               string;
  first_name:         string;
  last_name:          string;
  twitter_username:   null | string;
  portfolio_url:      null | string;
  bio:                string;
  location:           null | string;
  links:              UserLinks;
  profile_image:      ProfileImage;
  instagram_username: null | string;
  total_collections:  number;
  total_likes:        number;
  total_photos:       number;
  accepted_tos:       boolean;
  for_hire:           boolean;
  social:             Social;
}

export interface UserLinks {
  self:      string;
  html:      string;
  photos:    string;
  likes:     string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small:  string;
  medium: string;
  large:  string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url:      null | string;
  twitter_username:   null | string;
  paypal_email:       null;
}


