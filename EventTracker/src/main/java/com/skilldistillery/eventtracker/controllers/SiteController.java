package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Site;
import com.skilldistillery.eventtracker.services.SiteService;

@RequestMapping("api")
@RestController
public class SiteController {
	@Autowired
	private SiteService service;

	@GetMapping("ping")
	public String ping() {
		return "pong\n";
	}

	@GetMapping("sites")
	public List<Site> index() {
		return service.showAll();
	}

	@GetMapping("sites/{siteNumber}")
	public List<Site> searchBySiteNumber(@PathVariable String siteNumber) {
		return service.showBySiteNumber(siteNumber);
	}

	@PostMapping("sites")
	public Site addSite(@RequestBody Site site) {
		Site newSite = new Site();
		newSite = site;
		return service.addSite(newSite);
	}

	@PutMapping("sites/{id}")
	public Site updateSite(@PathVariable int id, @RequestBody Site site) {
		return service.updateSite(id, site);
	}

	@DeleteMapping("sites/{id}")
	public boolean deleteSite(@PathVariable int id) {
		return service.deleteSite(id);
	}

}
