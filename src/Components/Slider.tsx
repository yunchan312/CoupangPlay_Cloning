import { IGetMoviesResult, getPopularMovies } from "../api";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useState } from "react";
import { makeImagePath } from "../Router/util";

const Row = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div``;

const Loader = styled.div``;

const Box = styled.div<{ bgphoto: string }>`
  background-color: white;
  width: 300px;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-position: center center;
  background-size: cover;
`;

const offset = 6;

export default function Slider() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "popular"],
    getPopularMovies
  );
  const listLn = data?.results.length;
  const [index, setIndex] = useState(0);
  return (
    <>
      <Container>
        {isLoading ? (
          <Loader>loading</Loader>
        ) : (
          <Row>
            {data?.results.slice(0, 6).map((movie) => (
              <Box bgphoto={makeImagePath(movie.backdrop_path, "w500")}></Box>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
