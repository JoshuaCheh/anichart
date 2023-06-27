import { gql } from "@apollo/client";

export interface Anime {
  id: number;
  idMal: number;
  title: {
    romaji: string;
    english: string;
  };
  description: string;
  meanScore: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  popularity: number;
}

export interface GetAniListArgs {
  seasonYear: number;
}

export interface GetAniListResults {
  Page: {
    media: Anime[];
  };
}

export const GET_ANI_LIST = gql`
  query getAniList($seasonYear: Int) {
    Page(page: 1, perPage: 10) {
      media(seasonYear: $seasonYear, type: ANIME, sort: SCORE_DESC) {
        id
        idMal
        title {
          romaji
          english
        }
        description
        meanScore
        startDate {
          year
          month
          day
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        popularity
      }
    }
  }
`;
