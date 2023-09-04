import styled from "styled-components";
import { IGetMoviesResult, getPlayingMovies, getPopularMovies } from "../api";
import { useQuery } from "react-query";
import BigBanner from "../Components/Banner";
import Slider from "../Components/Slider";

const Wrapper = styled.div`
  height: 200vh;
`;

const Loader = styled.div``;

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getPlayingMovies
  );
  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <BigBanner data={data}></BigBanner>
        )}
        <Slider></Slider>
      </Wrapper>
    </>
  );
}
