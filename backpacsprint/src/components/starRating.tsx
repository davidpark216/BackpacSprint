import React, { useState } from "react";
import styled from "styled-components";

const Star = ({ selected = false, onClick = (f: any) => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const StarRating = () => {
  const [starsSelected, selectStar] = useState(0);
  return (
    <StarWrap>
      {[...Array(5)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        />
      ))}
    </StarWrap>
  );
};

export default StarRating;

const StarWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0 10px 0;
  .star {
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    background-color: grey;
    -webkit-clip-path: polygon(
      50% 0%,
      63% 38%,
      100% 38%,
      69% 59%,
      82% 100%,
      50% 75%,
      18% 100%,
      31% 59%,
      0% 38%,
      37% 38%
    );
    clip-path: polygon(
      50% 0%,
      63% 38%,
      100% 38%,
      69% 59%,
      82% 100%,
      50% 75%,
      18% 100%,
      31% 59%,
      0% 38%,
      37% 38%
    );
  }

  .star.selected {
    background-color: rgb(255, 204, 000);
  }
`;
