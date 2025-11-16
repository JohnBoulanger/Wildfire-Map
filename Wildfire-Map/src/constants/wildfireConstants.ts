export const FireSeverity = {
    Rank1: "Rank 1",
    Rank2: "Rank 2",
    Rank3: "Rank 3",
    Rank4: "Rank 4",
    Rank5: "Rank 5",
    Rank6: "Rank 6"
} as const;

export interface FireData {
    id: string;
    severity: string;
    lat: number;
    lon: number;
}

export const wildfireMarkers: FireData[] = [
  // Montclair, California
  { id: "1",  severity: FireSeverity.Rank2, lat: 34.0775, lon: -117.6898 },
  { id: "2",  severity: FireSeverity.Rank4, lat: 34.0801, lon: -117.6983 },
  { id: "3",  severity: FireSeverity.Rank1, lat: 34.0754, lon: -117.6841 },
  { id: "4",  severity: FireSeverity.Rank3, lat: 34.0832, lon: -117.6930 },
  { id: "5",  severity: FireSeverity.Rank5, lat: 34.0719, lon: -117.7025 },

  // Banff, Alberta
  { id: "6",  severity: FireSeverity.Rank1, lat: 51.1784, lon: -115.5708 },
  { id: "7",  severity: FireSeverity.Rank4, lat: 51.1851, lon: -115.5614 },
  { id: "8",  severity: FireSeverity.Rank2, lat: 51.1719, lon: -115.5822 },
  { id: "9",  severity: FireSeverity.Rank3, lat: 51.1642, lon: -115.5560 },
  { id: "10", severity: FireSeverity.Rank5, lat: 51.1903, lon: -115.5876 },

  // Jasper, Alberta
  { id: "11", severity: FireSeverity.Rank3, lat: 52.8734, lon: -118.0824 },
  { id: "12", severity: FireSeverity.Rank1, lat: 52.8790, lon: -118.0951 },
  { id: "13", severity: FireSeverity.Rank4, lat: 52.8672, lon: -118.0783 },
  { id: "14", severity: FireSeverity.Rank5, lat: 52.8861, lon: -118.0719 },
  { id: "15", severity: FireSeverity.Rank2, lat: 52.8628, lon: -118.1037 },

  // Toronto, Downtown Core
  { id: "16", severity: FireSeverity.Rank4, lat: 43.6532, lon: -79.3832 },
  { id: "17", severity: FireSeverity.Rank1, lat: 43.6500, lon: -79.3870 },
  { id: "18", severity: FireSeverity.Rank5, lat: 43.6578, lon: -79.3802 },
  { id: "19", severity: FireSeverity.Rank3, lat: 43.6484, lon: -79.3755 },
  { id: "20", severity: FireSeverity.Rank2, lat: 43.6551, lon: -79.3908 },
]

export const severityToColor: Record<string, string> = {
    [FireSeverity.Rank1]: "#ffd600",
    [FireSeverity.Rank2]: "#ffc100",
    [FireSeverity.Rank3]: "#ff9a00",
    [FireSeverity.Rank4]: "#ff7400",
    [FireSeverity.Rank5]: "#ff4d00",
    [FireSeverity.Rank6]: "#ff0000"
}