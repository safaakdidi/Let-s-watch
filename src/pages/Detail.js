import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import NavBar from "../components/NavBar";
import { Grid } from "@mui/material";

export default function Detail() {
  //css-in-js to style the detail page
  const ShowContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ShowIntro = styled.div`
    width: 90%;
  `;
  const ShowBackdrop = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 0 35%;
  `;
  const ShowDetail = styled.div`
    align-items: center;
    width: 75%;
    display: flex;
    position: relative;
    bottom: 225px;
  `;
  const ShowDetailLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const PosterBox = styled.div`
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
  `;
  const PosterBoxEp = styled.div`
    width: 200px;
    padding: 10px;
    border-radius: 4px;
  `;
  const Poster = styled.img`
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
  `;
  const PosterEp = styled.img`
    width: 200px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 22px 40px 6px;
    padding: 8px;
  `;
  const ShowDetailRight = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content: space-between;
  `;
  const ShowDetailRightTop = styled.div`
    text-shadow: 0px 0px 5px #000000;
    margin-bottom: 1rem;
  `;
  const ShowDetailRightBottom = styled.div`
    margin: 2rem 0;
    flex: 0.8;
  `;
  const ShowName = styled.div`
    font-weight: 600;
    font-size: 3rem;
  `;
  const ShowTagline = styled.div`
    font-weight: 150;
    font-size: 1.5rem;
  `;
  const ShowRating = styled.div`
    text-align: center;
  `;
  const ShowVoteCount = styled.span`
    margin-left: 1rem;
  `;
  const ShowGenres = styled.div`
    margin: 0.25rem 1rem;
  `;
  const ShowGenre = styled.span`
    display: inline-block;
    backdrop-filter: blur(10px);
    padding: 0.3rem;
    border: 2px solid white;
    border-radius: 20px;
    margin-top: 0.5rem;
  `;
  const SynopsisText = styled.div`
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    font-weight: 600;
    display: flex;
    position: relative;
    align-items: center;
  `;
  const ShowHeading = styled.div`
    font-size: 2.2rem;
  `;
  const ShowProduction = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 4rem;
  `;
  const ShowProductionCompanyImage = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ShowProductionComapany = styled.img`
    width: 200px;
    margin: 2rem;
  `;
  const EpisodeList = styled.div`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  `;
  const SeasonsDisplay = styled.div`
    width: 90%;
  `;
  const Card1 = styled.div`
    display: inline-block;
    padding: 5px;
  `;
  const ShowSeasons = styled.div`
    width: 100%;
  `;
  const SeasonName = styled.div`
    font-weight: 150;
    font-size: 1.5rem;
  `;
//get TV Show by id that we get from the URL
  let { showId } = useParams();
  const [showInfo, setShowInfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${showId}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US`
      )
      .then((response) => {
        console.log(response);
        setShowInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showId]);

  return (
    //details of th TV Show
    <div>
      <NavBar />
      {showInfo ? (
        <ShowContainer>
          <ShowIntro>
            <ShowBackdrop
              src={`https://image.tmdb.org/t/p/original${
                showInfo ? showInfo.backdrop_path : ""
              }`}
            />
          </ShowIntro>
          <ShowDetail>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <ShowDetailLeft>
                  <PosterBox>
                    <Poster
                      src={`https://image.tmdb.org/t/p/original${
                        showInfo ? showInfo.poster_path : ""
                      }`}
                    />
                  </PosterBox>
                </ShowDetailLeft>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={8}>
                <ShowDetailRight>
                  <ShowDetailRightTop>
                    <ShowName>{showInfo ? showInfo.name : ""}</ShowName>
                    <ShowTagline>
                      {showInfo ? showInfo.tagline : ""}
                    </ShowTagline>
                    <ShowRating>
                      <StarIcon />
                      {showInfo ? showInfo.vote_average : ""}{" "}
                      <ShowVoteCount>
                        {showInfo ? "(" + showInfo.vote_count + ") votes" : ""}
                      </ShowVoteCount>
                    </ShowRating>
                    <div>
                      {showInfo
                        ? "Last Air Date " + showInfo.last_air_date
                        : ""}
                    </div>

                    <ShowGenres>
                      <Grid container spacing={0}>
                        {showInfo && showInfo.genres
                          ? showInfo.genres.map((genre, index) => (
                              <Grid item xs={12} md={12} lg={4} key={index}>
                                <ShowGenre id={genre.id}>
                                  {genre.name}
                                </ShowGenre>
                              </Grid>
                            ))
                          : ""}
                      </Grid>
                    </ShowGenres>
                  </ShowDetailRightTop>
                  <ShowDetailRightBottom>
                    <SynopsisText>Synopsis</SynopsisText>
                    <div>{showInfo ? showInfo.overview : ""}</div>
                  </ShowDetailRightBottom>
                </ShowDetailRight>
              </Grid>
            </Grid>
          </ShowDetail>

          <SeasonsDisplay>
            <ShowSeasons>
              {showInfo && showInfo.seasons
                ? showInfo.seasons.map((season, index) => {
                    if (
                      season.poster_path !== null &&
                      season.poster_path !== ""
                    ) {
                      return (
                        <>
                          <SeasonName>{season.name} :</SeasonName>
                          <EpisodeList>
                            {[...Array(season.episode_count)].map((e, i) => (
                              <Card1>
                                <PosterBoxEp>
                                  <PosterEp
                                    src={`https://image.tmdb.org/t/p/original${
                                      season ? season.poster_path : ""
                                    }`}
                                  />
                                </PosterBoxEp>
                                <p>Episode {i + 1}</p>
                              </Card1>
                            ))}
                          </EpisodeList>
                        </>
                      );
                    }
                  })
                : ""}
            </ShowSeasons>
          </SeasonsDisplay>

          <ShowHeading>Production companies</ShowHeading>
          <ShowProduction>
            {showInfo &&
              showInfo.production_companies &&
              showInfo.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <ShowProductionCompanyImage>
                      <ShowProductionComapany
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          company.logo_path
                        }
                      />
                      <span>{company.name}</span>
                    </ShowProductionCompanyImage>
                  )}
                </>
              ))}
          </ShowProduction>
        </ShowContainer>
      ) : (
        //Loader
        "Loading..."
      )}
    </div>
  );
}
