import { IGetMoviesResult, getPopularMovies } from "../api";
import styled from "styled-components";
import { useQuery } from "react-query";

const Row = styled.div``;

const Box = styled.div``;

export default function Slider() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "popular"],
    getPopularMovies
  );
  return (
    <>
      <Row>
        <Box></Box>
      </Row>
    </>
  );
}
