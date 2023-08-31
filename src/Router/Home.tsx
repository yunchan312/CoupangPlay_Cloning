import styled from "styled-components";
import { IGetMoviesResult, getMovies } from "../api";
import { useQuery } from "react-query";
import { makeImagePath } from "./util";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Wrapper = styled.div`
  height: 100vh;
`;

const Banner = styled.div<{ bgphoto: string }>`
  padding: 40px;
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.bgphoto});

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Loader = styled.div``;

const Title = styled.h1`
  font-size: 100px;
  font-weight: bolder;
`;

const Overview = styled.p`
  margin: 5px;
  font-size: 25px;
  width: 50%;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: auto;
  margin-bottom: auto;
`;

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  console.log(data?.results[0].title);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Banner bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}>
          <GoArrowLeft
            style={{
              fontSize: "50px",
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "10px",
              color: "gray",
              cursor: "pointer",
            }}
          />
          <Items>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Items>
          <GoArrowRight
            style={{
              fontSize: "50px",
              marginTop: "auto",
              marginBottom: "auto",
              cursor: "pointer",
            }}
          />
        </Banner>
      )}
    </Wrapper>
  );
}
