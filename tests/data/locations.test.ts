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

    it('every location has latitude within Leicestershire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(52.3);
        expect(loc.latitude).toBeLessThan(53.0);
      }
    });

    it('every location has longitude within Leicestershire bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-1.6);
        expect(loc.longitude).toBeLessThan(-0.7);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "leicester"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('leicester');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes leicester slug', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('leicester');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "leicester"', () => {
      const loc = getLocationBySlug('leicester');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Leicester');
    });

    it('returns correct location for "loughborough"', () => {
      const loc = getLocationBySlug('loughborough');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Loughborough');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
