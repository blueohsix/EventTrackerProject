package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Site;

public interface SiteService {
	List<Site> showAll();

	List<Site> showBySiteNumber(String siteNumber);
	
	Site showById(Integer id);

	Site addSite(Site site);
	
	Site updateSite(Integer id, Site site);
	
	boolean deleteSite(Integer id);
	
	
	
}
