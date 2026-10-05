export type CaptionStatus = "captioned" | "no-captions";
export type CaptionSource = "manual" | "automatic" | null;

export type CatalogVideo = {
  id: string;
  title: string;
  titleZh: string;
  descriptionZh: string;
  duration: number;
  channel: string;
  thumbnail: string;
  webpageUrl: string;
  captionStatus: CaptionStatus;
  captionSource: CaptionSource;
  cueCount: number;
};

export type Catalog = {
  channelUrl: string;
  channelName: string;
  note?: string;
  videos: CatalogVideo[];
};

export type VideoRecord = CatalogVideo & {
  description: string;
  channelId: string;
  viewCount: string;
  uploadDate: string | null;
  originalLanguage: string | null;
  translation: {
    engine: string;
    source: string;
    target: string;
    targetParam: string;
    keyless: boolean;
  } | null;
};

export type Cue = {
  start: number;
  end: number;
  text: string;
};
