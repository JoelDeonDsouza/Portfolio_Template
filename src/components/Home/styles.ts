import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  padding: 40px 40px;
  height: 750px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 1800px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90%;
    margin-left: 0;
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 90%;
  background-image: url("https://i.ibb.co/Rp4MgNj/profile.png");
  margin-bottom: 20px;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90%;
  }
`;

export const ResumeContainer = styled.a`
  width: 100%;
  height: 40%;
  background-color: white;
  background-image: url("https://i.ibb.co/1RSbHL1/cv.png");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    margin-bottom: 20px;
  }
`;

export const PortfolioContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60%;
    margin-left: 0;
  }
`;

export const Portfolio = styled.a`
  width: 100%;
  height: 30%;
  background-image: url("https://i.ibb.co/8jmTykz/visit.png");
  margin-bottom: 20px;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 25%;
  }
`;

export const Projects = styled.a`
  width: 100%;
  height: 100%;
  background-image: url("https://i.ibb.co/PmD6dqw/projects.png");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 65%;
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
`;

export const AppDownload = styled.a`
  width: 100%;
  height: 100%;
  background-image: url("https://i.ibb.co/GcWytWh/app.png");
  margin-bottom: 20px;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 110%;
  }
`;

export const Mail = styled.a`
  width: 100%;
  height: 10%;
  background-image: url("https://i.ibb.co/2MGZQS2/gmail.png");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 20%;
    margin-bottom: 20px;
  }
`;