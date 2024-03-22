import styled from "styled-components";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  font-weight: 400;
  background-color: #fff;
  text-align: center;
  .header {
    background-color: #f8f8f8;
    border-radius: 30px;
    margin-bottom: 20px;
    padding: 10px;
  }
  img {
    max-width: 100%;
  }
  .advantages {
    border: 1.5px dashed var(--secondary-color);
    border-radius: 30px;
    padding: 20px 20px;
  }
  .start-button {
    display: block;
    margin: 0 auto;
    padding: 16px 88px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    &:hover {
      background-color: var(--secondary-hover-color);
    }
  }
  .adv-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    p {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      font-size: 14px;
      font-weight: 400;
    }
    span {
      font-size: 28px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  @media screen and (min-width: 768px) {
    .advantages {
      .adv-content {
        flex-direction: row;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    .advantages {
      .adv-content {
        flex-direction: row;
      }
    }
  }
`;

export default HomePage;
