export interface StudioItem {
  studioNum: number;
  teamId: number[];
}

export const STUDIO_LIST: StudioItem[] = [
  {
    studioNum: 1,
    teamId: [6, 8, 13, 16, 18],
  },
  {
    studioNum: 2,
    teamId: [4, 5, 7, 10, 11],
  },
  {
    studioNum: 3,
    teamId: [3, 14, 17, 19, 21],
  },
  {
    studioNum: 4,
    teamId: [1, 9, 15, 20],
  },
  {
    studioNum: 5,
    teamId: [23],
  },
  {
    studioNum: 6,
    teamId: [2],
  },
  {
    studioNum: 10,
    teamId: [12, 22],
  },
];
