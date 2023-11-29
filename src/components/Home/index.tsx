import React from "react";
import {
  HeroContainer,
  HeaderContainer,
  UserContainer,
  ResumeContainer,
  PortfolioContainer,
  Portfolio,
  Projects,
  DisplayContainer,
  AppDownload,
  Mail,
} from "./styles";

const Home = () => {
  return (
    <HeroContainer>
      <HeaderContainer>
        <UserContainer />
        <ResumeContainer />
      </HeaderContainer>
      <PortfolioContainer>
        <Portfolio href="https://joel-deon-dsouza.netlify.app" />
        <Projects href="https://github.com/JoelDeonDsouza" />
      </PortfolioContainer>
      <DisplayContainer>
        <AppDownload href="https://codwell-services.onrender.com" />
        <Mail />
      </DisplayContainer>
    </HeroContainer>
  );
};

export default Home;
