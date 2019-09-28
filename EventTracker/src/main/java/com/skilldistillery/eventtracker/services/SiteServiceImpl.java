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
	public Boolean deleteSite(int id) {
		Boolean success;
		Optional<Site> site = repo.findById(id);
		if (site.isPresent()) {
			Site siteForDeletion = site.get();
			repo.delete(siteForDeletion);
			success = true;
			return success;
		} else {
			return false;
		}

	}

	@Override
	public Site updateSite(int id, Site site) {
		Optional<Site> siteOpt = repo.findById(id);
		if (siteOpt.isPresent()) {
			Site siteForUpdate = siteOpt.get();
			siteForUpdate = site;
			repo.saveAndFlush(siteForUpdate);
			return siteForUpdate;
		} else {
			return null;
		}

	}

}
