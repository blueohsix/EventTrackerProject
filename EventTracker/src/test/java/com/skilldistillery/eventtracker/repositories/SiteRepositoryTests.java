package com.skilldistillery.eventtracker.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.Site;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SiteRepositoryTests {
	@Autowired
	private SiteRepository repo;
	
	@Test
	@DisplayName("Tests if repo is mapped correctly")
	public void test1() {
		Optional<Site> siteOpt = repo.findById(1);
		Site site = null;
		if (siteOpt.isPresent()) {
			site = siteOpt.get();
		}
		assertEquals("INDOT", site.getSiteOwner());
		assertEquals("Self-Support", site.getTowerType());
	}
}
