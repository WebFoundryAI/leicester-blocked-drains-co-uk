import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 10 locations', () => {
      expect(LOCATIONS).toHaveLength(10);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within South Yorkshire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(53.2);
        expect(loc.latitude).toBeLessThan(53.6);
      }
    });

    it('every location has longitude within South Yorkshire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-1.8);
        expect(loc.longitude).toBeLessThan(-1.1);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "sheffield"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('sheffield');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 10 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(10);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('sheffield');
      expect(slugs).toContain('rotherham');
      expect(slugs).toContain('doncaster');
      expect(slugs).toContain('barnsley');
      expect(slugs).toContain('chesterfield');
      expect(slugs).toContain('dronfield');
      expect(slugs).toContain('chapeltown');
      expect(slugs).toContain('stocksbridge');
      expect(slugs).toContain('hillsborough');
      expect(slugs).toContain('ecclesall');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "sheffield"', () => {
      const loc = getLocationBySlug('sheffield');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Sheffield');
    });

    it('returns correct location for "ecclesall"', () => {
      const loc = getLocationBySlug('ecclesall');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Ecclesall');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
