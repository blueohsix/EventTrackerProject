export class Site {
  id: number;
  siteName: string;
  siteNumber: string;
  siteOwner: string;
  towerType: string;
  towerHeight: number;
  longitude: number;
  latitude: number;
  imageUrl: string;

  constructor(
    id?: number,
    siteName?: string,
    siteNumber?: string,
    siteOwner?: string,
    towerType?: string,
    towerHeight?: number,
    longitude?: number,
    latitude?: number,
    imageUrl?: string
  ) {
    this.id = id;
    this.siteName = siteName;
    this.siteNumber = siteNumber;
    this.siteOwner = siteOwner;
    this.towerType = towerType;
    this.towerHeight = towerHeight;
    this.latitude = latitude;
    this.longitude = longitude;
    this.imageUrl = imageUrl;
  }
}
