package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Site;

public interface SiteRepository extends JpaRepository<Site, Integer>{
	List<Site> findBySiteNumberLike(String siteNumber);
	
}
