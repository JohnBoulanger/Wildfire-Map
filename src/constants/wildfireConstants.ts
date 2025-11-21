import fire1 from "../assets/fire-1.png";
import fire2 from "../assets/fire-2.png";
import fire3 from "../assets/fire-3.png";
import fire4 from "../assets/fire-4.png";
import fire5 from "../assets/fire-5.png";
import fire6 from "../assets/fire-6.png";

export const FireSeverity = [
  "Rank 1",
  "Rank 2",
  "Rank 3",
  "Rank 4",
  "Rank 5",
  "Rank 6",
];

export const CompatibleLocations = ["Canada", "United States"];

export interface FireData {
  id: string;
  severity: string;
  date: string;
  lat: number;
  lon: number;
  imagePath: string;
}

export const severityToImage: Record<string, string> = {
  [FireSeverity[0]]: fire1,
  [FireSeverity[1]]: fire2,
  [FireSeverity[2]]: fire3,
  [FireSeverity[3]]: fire4,
  [FireSeverity[4]]: fire5,
  [FireSeverity[5]]: fire6,
};

export const wildfireMarkers: FireData[] = [
  // Banff, Alberta
  {
  id: "6",
  severity: FireSeverity[0],
  date: "2025-11-18",
  lat: 51.2051,
  lon: -115.6423,
  imagePath: severityToImage[FireSeverity[0]],
},
{
  id: "7",
  severity: FireSeverity[3],
  date: "2025-11-20",
  lat: 51.1538,
  lon: -115.6089,
  imagePath: severityToImage[FireSeverity[3]],
},
{
  id: "8",
  severity: FireSeverity[1],
  date: "2025-11-19",
  lat: 51.2274,
  lon: -115.5212,
  imagePath: severityToImage[FireSeverity[1]],
},
{
  id: "9",
  severity: FireSeverity[2],
  date: "2025-11-17",
  lat: 51.1462,
  lon: -115.5943,
  imagePath: severityToImage[FireSeverity[2]],
},
{
  id: "10",
  severity: FireSeverity[4],
  date: "2025-11-21",
  lat: 51.1987,
  lon: -115.5121,
  imagePath: severityToImage[FireSeverity[4]],
},


  {
  id: "11",
  severity: FireSeverity[2],
  date: "2025-11-20",
  lat: 52.8972,
  lon: -118.1415,
  imagePath: severityToImage[FireSeverity[2]],
},
{
  id: "12",
  severity: FireSeverity[0],
  date: "2025-11-18",
  lat: 52.8487,
  lon: -118.0583,
  imagePath: severityToImage[FireSeverity[0]],
},
{
  id: "13",
  severity: FireSeverity[3],
  date: "2025-11-21",
  lat: 52.9154,
  lon: -118.1027,
  imagePath: severityToImage[FireSeverity[3]],
},
{
  id: "14",
  severity: FireSeverity[4],
  date: "2025-11-19",
  lat: 52.8591,
  lon: -118.1264,
  imagePath: severityToImage[FireSeverity[4]],
},
{
  id: "15",
  severity: FireSeverity[1],
  date: "2025-11-17",
  lat: 52.9013,
  lon: -118.0448,
  imagePath: severityToImage[FireSeverity[1]],
},


  // Toronto
  {
    id: "16",
    severity: FireSeverity[3],
    date: "2025-11-20",
    lat: 43.6532,
    lon: -79.3832,
    imagePath: severityToImage[FireSeverity[3]],
  },
  {
    id: "17",
    severity: FireSeverity[0],
    date: "2025-11-18",
    lat: 43.65,
    lon: -79.387,
    imagePath: severityToImage[FireSeverity[0]],
  },
  {
    id: "18",
    severity: FireSeverity[4],
    date: "2025-11-21",
    lat: 43.6578,
    lon: -79.3802,
    imagePath: severityToImage[FireSeverity[4]],
  },
  {
    id: "19",
    severity: FireSeverity[2],
    date: "2025-11-19",
    lat: 43.6484,
    lon: -79.3755,
    imagePath: severityToImage[FireSeverity[2]],
  },
  {
    id: "20",
    severity: FireSeverity[1],
    date: "2025-11-17",
    lat: 43.6551,
    lon: -79.3908,
    imagePath: severityToImage[FireSeverity[1]],
  },
];

export const severityToColor: Record<string, string> = {
  [FireSeverity[0]]: "#ffd600",
  [FireSeverity[1]]: "#ffc100",
  [FireSeverity[2]]: "#ff9a00",
  [FireSeverity[3]]: "#ff7400",
  [FireSeverity[4]]: "#ff4d00",
  [FireSeverity[5]]: "#ff0000",
};
