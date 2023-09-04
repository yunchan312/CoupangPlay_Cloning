import styled from "styled-components";
import { IGetMoviesResult, getMovies } from "../api";
import { useQuery } from "react-query";
import BigBanner from "../Components/Banner";
import { makeImagePath } from "./util";

const Wrapper = styled.div`
  height: 200vh;
`;

const Loader = styled.div``;

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <BigBanner data={data}></BigBanner>
        )}
      </Wrapper>
    </>
  );
}
