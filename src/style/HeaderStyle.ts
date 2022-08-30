import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: sticky;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px #00000090;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  transition: 0.3s;
  z-index: 10;
  #header {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    padding: 1.5rem 1rem;
    #title {
      cursor: pointer;
      display: block;
      margin: 0;
      font-size: 1.5rem;
      text-align: center;
      font-weight: 900;
    }
    .scroll {
      display: flex;
      .menu {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #80808090;
        transition: 0.5s;
        padding: 0 1.5rem;
        &:hover {
          color: #000;
        }
      }
      hr {
        border: 2px solid #000;
      }
    }
  }
`;
