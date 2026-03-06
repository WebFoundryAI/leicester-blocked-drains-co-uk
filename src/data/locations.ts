export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "sheffield",
  name: "Sheffield",
  countyOrRegion: "South Yorkshire",
  latitude: 53.3811,
  longitude: -1.4701,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "rotherham",
    name: "Rotherham",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4326,
    longitude: -1.3635,
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    countyOrRegion: "South Yorkshire",
    latitude: 53.5228,
    longitude: -1.1285,
  },
  {
    slug: "barnsley",
    name: "Barnsley",
    countyOrRegion: "South Yorkshire",
    latitude: 53.5529,
    longitude: -1.4793,
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    countyOrRegion: "Derbyshire",
    latitude: 53.2350,
    longitude: -1.4218,
  },
  {
    slug: "dronfield",
    name: "Dronfield",
    countyOrRegion: "Derbyshire",
    latitude: 53.3013,
    longitude: -1.4672,
  },
  {
    slug: "chapeltown",
    name: "Chapeltown",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4615,
    longitude: -1.4688,
  },
  {
    slug: "stocksbridge",
    name: "Stocksbridge",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4790,
    longitude: -1.5928,
  },
  {
    slug: "hillsborough",
    name: "Hillsborough",
    countyOrRegion: "South Yorkshire",
    latitude: 53.4080,
    longitude: -1.5005,
  },
  {
    slug: "ecclesall",
    name: "Ecclesall",
    countyOrRegion: "South Yorkshire",
    latitude: 53.3585,
    longitude: -1.5055,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
