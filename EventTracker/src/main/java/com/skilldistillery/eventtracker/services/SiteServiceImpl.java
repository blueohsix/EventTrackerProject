package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Site;
import com.skilldistillery.eventtracker.repositories.SiteRepository;

@Service
public class SiteServiceImpl implements SiteService {
	@Autowired
	private SiteRepository repo;

	@Override
	public List<Site> showAll() {
		List<Site> sites = repo.findAll();
		return sites;
	}

	@Override
	public List<Site> showBySiteNumber(String siteNumber) {
		String numberLike = "%" + siteNumber + "%";
		List<Site> sites = repo.findBySiteNumberLike(numberLike);
		return sites;
	}

	@Override
	public Site addSite(Site site) {
		Site newSite = repo.saveAndFlush(site);
		return newSite;
	}

	@Override
	public boolean deleteSite(Integer id) {
		Optional<Site> site = repo.findById(id);
		if (site.isPresent()) {
			Site siteForDeletion = site.get();
			repo.delete(siteForDeletion);
			return true;
		} else {
			System.err.println("site is not present");
			return false;
		}
	}

	@Override
	public Site updateSite(Integer id, Site site) {
		Optional<Site> siteOpt = repo.findById(id);
		if (siteOpt.isPresent()) {
			Site siteForUpdate = siteOpt.get();
			siteForUpdate = site;
			siteForUpdate.setId(id);
			Site updatedSite = repo.saveAndFlush(siteForUpdate);
			return updatedSite;
		} else {
			return null;
		}

	}

	@Override
	public Site showById(Integer id) {
		Optional<Site> siteOpt = repo.findById(id);
		Site site = new Site();
		if(siteOpt.isPresent()) {
			site = siteOpt.get();
		}
		return site;
	}

}
