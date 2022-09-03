import styled from "styled-components";

export const ProjectCardStyle = styled.div`
  display: block;
  background-color: #fff;
  border: 4px solid #000;
  box-shadow: 7px 7px 7px 7px #808080;
  border-radius: 20px;
  margin: 3rem auto;
  width: 90%;
  box-sizing: border-box;
  position: relative;
  .title {
    display: block;
    text-align: left;
    font-size: 2rem;
    padding: 3rem 3rem 2rem 4.5rem;
  }

  hr {
    width: 91%;
    margin: 0 auto;
    border: 1px solid #808080;
  }

  .content {
    display: flex;
    padding: 2rem 1rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      box-sizing: border-box;
    }
    .content-detail {
      box-sizing: border-box;
      width: 50%;
      .fc {
        display: block;
        text-align: center;
        line-height: 30px;
        padding: 1.5rem 2rem;
      }

      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0 0 0;
        a {
          display: block;
          margin: 0 2rem;
        }
        img {
          width: 100px;
        }
      }
      div {
        display: block;
        justify-content: space-between;
        padding: 1rem;
        .tech-name {
          font-size: 1.2rem;
          font-weight: 700;
        }
        p {
          display: block;
          text-align: left;
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 1170px) {
    .title {
      padding: 2rem 3rem 1.5rem 2.5rem;
      font-size: 1.5rem;
    }
    .content {
      display: block;
      margin: 0 auto;
      text-align: center;
      .image {
        width: 100%;
      }
      .content-detail {
        width: 100%;
      }
    }
  }
`;
