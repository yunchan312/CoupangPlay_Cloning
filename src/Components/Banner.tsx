import styled from "styled-components";
import { IGetMoviesResult } from "../api";
import { makeImagePath } from "../Router/util";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";

const Banner = styled(motion.div)<{ bgphoto: string }>`
  padding: 40px;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.bgphoto});
  background-position: center center;
  background-size: cover;
  display: flex;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: bolder;
`;

const Overview = styled.p`
  margin: 5px;
  font-size: 25px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  width: 50vw;
`;

const LeftSide = styled.div`
  display: flex;
`;

const Dots = styled.div`
  margin-top: 5px;
  display: flex;
`;

const Dot = styled.div<{ bgcolor?: string }>`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  background-color: ${(props) => props.bgcolor};

  &:hover {
    background-color: #66e2e7;
  }
  cursor: pointer;
`;

const DotIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function BigBanner({ data }: { data?: IGetMoviesResult }) {
  const [index, setIndex] = useState(0);
  const onClickLeft = () => {
    if (index == 0) {
      setIndex(10);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  const onClickRight = () => {
    if (index == 10) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const onClickDots = (i: number) => {
    setIndex(i);
  };

  return (
    <Banner bgphoto={makeImagePath(data?.results[index].backdrop_path || "")}>
      <LeftSide>
        <GoArrowLeft
          style={{
            fontSize: "50px",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "10px",
            color: "gray",
            cursor: "pointer",
          }}
          onClick={onClickLeft}
        />
        <Items>
          <Title>{data?.results[index].title}</Title>
          <Overview>{data?.results[index].overview}</Overview>
          <Dots>
            {DotIndex.map((i) => (
              <Dot
                bgcolor={index === i ? "#66e2e7" : "gray"}
                key={i}
                onClick={() => {
                  onClickDots(i);
                }}
              />
            ))}
          </Dots>
        </Items>
      </LeftSide>
      <GoArrowRight
        style={{
          fontSize: "50px",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          color: "gray",
          cursor: "pointer",
        }}
        onClick={onClickRight}
      />
    </Banner>
  );
}
