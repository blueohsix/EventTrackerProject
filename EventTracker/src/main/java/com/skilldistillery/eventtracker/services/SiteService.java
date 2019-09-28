package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Site;

public interface SiteService {
	List<Site> showAll();

	List<Site> showBySiteNumber(String siteNumber);

	Site addSite(Site site);
	
	Site updateSite(int id, Site site);
	
	Boolean deleteSite(int id);
	
	
	
}
