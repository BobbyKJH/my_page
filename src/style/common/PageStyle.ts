import styled from "styled-components";

interface PageType {
  bgc: string;
}

export const PageStyle = styled.div<PageType>`
  position: relative;
  display: block;
  background-color: gray;
  padding: 3rem 0;
  background-color: ${(props) => props.bgc};
  .name {
    text-align: center;
    display: block;
    color: #000;
    font-size: 2.5rem;
    padding-bottom: 3rem;
  }

  #about {
    position: absolute;
    bottom: 81px;
    border: none;
  }
  #skill {
    position: absolute;
    bottom: 81px;
    border: none;
  }
  #archiving {
    position: absolute;
    bottom: 81px;
    border: none;
  }
  #project {
    position: absolute;
    bottom: 81px;
    border: none;
  }
`;
