package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	public List<Site> index(HttpServletRequest request, HttpServletResponse response) {
		try {
			List<Site> sites = service.showAll();
			if (sites == null) {
				response.setStatus(404);
			} else {
				response.setStatus(200);
			}
			return sites;
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@GetMapping("sites/{siteNumber}")
	public List<Site> searchBySiteNumber(@PathVariable String siteNumber, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			List<Site> sites = service.showBySiteNumber(siteNumber);
			if (sites.isEmpty()) {
				response.setStatus(404);
			} else {
				System.err.println(sites);
				response.setStatus(200);
			}
			return sites;
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping("sites")
	public Site addSite(@RequestBody Site site, HttpServletRequest request, HttpServletResponse response) {
		try {
			Site newSite = new Site();
			newSite = site;
			StringBuffer url = request.getRequestURL();
			url.append("/");
			url.append(newSite.getId());
			System.err.println(url);
			response.setStatus(201);
			response.setHeader("Location", url.toString());
			return service.addSite(newSite);
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}

	}

	@PutMapping("sites/{id}")
	public Site updateSite(@PathVariable int id, @RequestBody Site site, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			Site newSite = new Site();
			newSite = site;
			StringBuffer url = request.getRequestURL();
			url.append("/");
			url.append(newSite.getId());
			System.err.println(url);
			response.setStatus(200);
			response.setHeader("Location", url.toString());
			return service.updateSite(id, site);
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}

	}

	@DeleteMapping("sites/{id}")
	public boolean deleteSite(@PathVariable int id, HttpServletRequest request, HttpServletResponse response) {
		try {
			StringBuffer url = request.getRequestURL();
			url.append("/success");
			System.err.println(url);
			response.setStatus(204);
			response.setHeader("Location", url.toString());
			return service.deleteSite(id);
		} catch (Exception e) {
			StringBuffer url = request.getRequestURL();
			url.append("/fail");
			System.err.println(url);
			response.setStatus(400);
			e.printStackTrace();
			return false;
		}

	}

}
