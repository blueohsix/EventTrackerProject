package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "site")
public class Site {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="site_name")
	private String siteName;
	@Column(name="site_number")
	private String siteNumber;
	@Column(name="site_owner")
	private String siteOwner;
	@Column(name="tower_type")
	private String towerType;
	@Column(name="tower_height")
	private Double towerHeight;
	private Double longitude;
	private Double latitude;
	@Column(name="image_url")
	private String imageUrl;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSiteName() {
		return siteName;
	}
	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}
	public String getSiteNumber() {
		return siteNumber;
	}
	public void setSiteNumber(String siteNumber) {
		this.siteNumber = siteNumber;
	}
	public String getSiteOwner() {
		return siteOwner;
	}
	public void setSiteOwner(String siteOwner) {
		this.siteOwner = siteOwner;
	}
	public String getTowerType() {
		return towerType;
	}
	public void setTowerType(String towerType) {
		this.towerType = towerType;
	}
	public Double getTowerHeight() {
		return towerHeight;
	}
	public void setTowerHeight(Double towerHeight) {
		this.towerHeight = towerHeight;
	}
	public Double getLongitude() {
		return longitude;
	}
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	public Double getLatitude() {
		return latitude;
	}
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public Site(String siteName, String siteNumber, String siteOwner, String towerType, Double towerHeight,
			Double longitude, Double latitude, String imageUrl) {
		super();
		this.siteName = siteName;
		this.siteNumber = siteNumber;
		this.siteOwner = siteOwner;
		this.towerType = towerType;
		this.towerHeight = towerHeight;
		this.longitude = longitude;
		this.latitude = latitude;
		this.imageUrl = imageUrl;
	}
	public Site() {
		super();
	}
	@Override
	public String toString() {
		return "Site [id=" + id + ", siteName=" + siteName + ", siteNumber=" + siteNumber + ", siteOwner=" + siteOwner
				+ ", towerType=" + towerType + ", towerHeight=" + towerHeight + ", longitude=" + longitude
				+ ", latitude=" + latitude + ", imageUrl=" + imageUrl + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Site other = (Site) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
}
