import { useEffect, useState } from "react";
import axios from "axios";
import ShowCard from "../components/ShowCard";
import { Grid } from "@mui/material";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

//css-in-js to style the Search Component
const SearchContainer = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
const Search = () => {
    //used the use navigate Hook to go to an other page
  let navigate = useNavigate();
  const [shows, setShows] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    //Search function
    if (searchValue !== null && searchValue !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&query=${searchValue}`
        )
        .then((response) => {
          console.log(response);
          setShows(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=15e383204c1b8a09dbfaaa4c01ed7e17&page=1`
        )
        .then((response) => {
          console.log(response);
          setShows(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchValue]);

  return (
    <>
      {shows ? (
        //passed the searchValue and setSearchValue as props in the component to use the value to do the search 
        <>
          <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <SearchContainer>
            <Grid container spacing={4}>
              {shows.map((show, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  key={index}
                  onClick={() => {
                    //navigation to an other page
                    navigate(`/detail/${show.id}`);
                  }}
                >
                  <ShowCard key={index} {...show} />
                </Grid>
              ))}
            </Grid>
          </SearchContainer>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Search;
