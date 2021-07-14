import {
  MainContainer,
  Container,
  MainText,
  MainImage,
  ContainerSVG,
  TipsContainer,
  SecondaryText,
  SecondaryImage,
  ExpenseContainer,
  BudgetContainer,
  DevelopersContainer,
  Developer,
  ImgContainer,
  DeveloperImg,
  LinksContaner,
  DevelopersText,
  DeveloperWrap,
} from "./styles";
import homeMain from "../../assets/lotties/homeMain.json";
import homeTips from "../../assets/lotties/homeTips.json";
import homeExpense from "../../assets/lotties/homeExpense.json";
import homeBudget from "../../assets/lotties/homeBudget.json";

import allef from "../../assets/developers/allef.jpeg";
import leomar from "../../assets/developers/leomar.jpeg";
import humberto from "../../assets/developers/humberto.jpeg";
import diogo from "../../assets/developers/diogo.jpeg";
import paulo from "../../assets/developers/paulo.jpeg";
import daniel from "../../assets/developers/daniel.jpeg";

import { VscGithubAlt } from "react-icons/vsc";
import { FiGitlab } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import Lottie from "react-lottie";
const lottieOptions = {
  loop: true,

  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home = () => {
  return (
    <Container>
      <div>
        <ContainerSVG>
          <MainContainer>
            <MainText>
              <h2>A sua independência financeira a um passo de você !</h2>
              <h3>Organizar e controlar o seu dinheiro nunca foi tão fácil</h3>
            </MainText>
            <MainImage className="mainImg">
              <Lottie options={{ ...lottieOptions, animationData: homeMain }} />
            </MainImage>

            <svg
              width="541"
              height="464"
              viewBox="0 0 491 414"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="top"
            >
              <path
                d="M490.629 0C477.051 19.0781 463.474 38.243 424.183 47.0883C384.994 55.9336 319.989 54.5461 333.874 75.4453C347.657 96.3445 440.434 139.53 448.56 156.614C456.686 173.698 380.263 164.592 348.274 169.535C316.286 174.478 328.834 193.47 340.251 220.179C351.669 246.802 362.057 281.229 346.937 292.502C331.817 303.689 291.189 291.809 263.623 289.641C236.057 287.473 221.554 295.191 205.2 299.613C188.846 304.123 170.64 305.423 155.829 317.304C141.12 329.098 129.909 351.558 113.657 357.715C97.4057 363.785 76.0114 353.639 56.2629 360.23C36.4114 366.82 18.2057 390.234 0 413.648V0H490.629Z"
                fill="#29E0E8"
              />
            </svg>
            <svg
              width="541"
              height="464"
              viewBox="0 0 491 414"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bottom"
            >
              <path
                d="M0.371094 414C54.7825 402.727 109.194 391.54 97.3654 370.294C85.5368 349.134 7.46822 318.002 17.1368 306.902C26.8054 295.889 124.211 304.908 163.194 299.531C202.074 294.068 182.531 274.209 191.685 268.312C200.84 262.416 238.794 270.567 232.314 246.633C225.834 222.698 175.125 166.678 174.611 147.253C174.097 127.915 223.983 145.172 259.365 159.48C294.748 173.702 315.628 185.063 323.342 169.193C331.057 153.323 325.503 110.311 337.537 101.552C349.468 92.7938 378.988 118.376 397.811 120.804C416.634 123.319 424.863 102.593 438.645 78.6586C452.428 54.7242 471.663 27.5812 491 0.351562V414H0.371094Z"
                fill="#29E0E8"
              />
            </svg>
          </MainContainer>
        </ContainerSVG>
      </div>
      <TipsContainer>
        <SecondaryText>
          <h2>Não sabe por onde começar ?</h2>
          <h3>
            Na sessão dicas para o bolso você encontra as melhores dicas e
            pesquisas ensinando a começar a guardar dinheiro de forma consciente
            e sustentável
          </h3>
        </SecondaryText>
        <SecondaryImage>
          <Lottie options={{ ...lottieOptions, animationData: homeTips }} />
        </SecondaryImage>
      </TipsContainer>
      <ExpenseContainer>
        <SecondaryText>
          <h2 style={{ color: "var(--white-green)" }}>
            Controle suas receitas e despesas
          </h2>
          <h3 style={{ color: "var(--white-green)" }}>
            A aplicação conta com um sistema onde você cadastra todas as
            receitas e despesas para nunca mais se perguntar aonde foi parar o
            salário no fim do mês
          </h3>
        </SecondaryText>
        <SecondaryImage>
          <Lottie options={{ ...lottieOptions, animationData: homeExpense }} />
        </SecondaryImage>
      </ExpenseContainer>
      <BudgetContainer>
        <SecondaryText>
          <h2>Descubra o seu orçamento ideal</h2>
          <h3>
            Você pode criar um orçamento por mês para descobrir se a sua noção
            de despesas condiz com a realidade dos seus gastos
          </h3>
        </SecondaryText>
        <SecondaryImage>
          <Lottie options={{ ...lottieOptions, animationData: homeBudget }} />
        </SecondaryImage>
      </BudgetContainer>
      <DevelopersContainer>
        <DevelopersText>
          <h2>Criadores do happy budget</h2>
          <h3>
            Somos desenvolvedores apaixonados por transformar o mundo em um
            lugar melhor utilizando div’s, for’s e loop's infinitos
          </h3>
        </DevelopersText>
        <DeveloperWrap>
          <Developer>
            <ImgContainer>
              <DeveloperImg src={allef} alt="allef" />
            </ImgContainer>
            <LinksContaner>
              <div>
                <h2>Allef Moraes</h2>
              </div>
              <div>
                <a
                  href="https://github.com/leomarromazini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubAlt />
                </a>
                <a
                  href="https://gitlab.com/leomarromanzini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGitlab />
                </a>
                <a
                  href="https://www.linkedin.com/in/allef-moraes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </LinksContaner>
          </Developer>
          <Developer>
            <ImgContainer>
              <DeveloperImg src={daniel} alt="daniel" />
            </ImgContainer>
            <LinksContaner>
              <div>
                <h2>Daniel Ribeiro</h2>
              </div>
              <div>
                <a
                  href="https://github.com/rbrcbm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubAlt />
                </a>
                <a
                  href="https://gitlab.com/danielrcamboim
                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGitlab />
                </a>
                <a
                  href="https://www.linkedin.com/in/danielrcamboim/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </LinksContaner>
          </Developer>
          <Developer>
            <ImgContainer>
              <DeveloperImg src={diogo} alt="diogo" />
            </ImgContainer>
            <LinksContaner>
              <div>
                <h2>Diogo Santos</h2>
              </div>
              <div>
                <a
                  href="https://github.com/DgSantos017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubAlt />
                </a>
                <a
                  href="https://gitlab.com/diogo__.js"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGitlab />
                </a>
                <a
                  href="https://www.linkedin.com/in/diogo-santos01/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </LinksContaner>
          </Developer>
          <Developer>
            <ImgContainer>
              <DeveloperImg src={leomar} alt="leomar" />
            </ImgContainer>
            <LinksContaner>
              <div>
                <h2>Leomar Romanzini</h2>
              </div>
              <div>
                <a
                  href="https://github.com/leomarromazini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubAlt />
                </a>
                <a
                  href="https://gitlab.com/leomarromanzini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGitlab />
                </a>
                <a
                  href="https://www.linkedin.com/in/leomarromanzini/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </LinksContaner>
          </Developer>
          <Developer>
            <ImgContainer>
              <DeveloperImg src={humberto} alt="humberto" />
            </ImgContainer>
            <LinksContaner>
              <div>
                <h2>Matheus Humberto</h2>
              </div>
              <div>
                <a
                  href="https://github.com/HumbertoSilv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubAlt />
                </a>
                <a
                  href="https://gitlab.com/Humberto16"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGitlab />
                </a>
                <a
                  href="https://www.linkedin.com/in/humberto-silv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </LinksContaner>
          </Developer>
          <Developer>
            <ImgContainer>
              <DeveloperImg src={paulo} alt="paulo" />
            </ImgContainer>
            <LinksContaner>
              <div>
                <h2>Paulo Mello</h2>
              </div>
              <div>
                <a
                  href="https://github.com/paulomellodev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubAlt />
                </a>
                <a
                  href="https://gitlab.com/pauloraphaelmello"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGitlab />
                </a>
                <a
                  href="https://www.linkedin.com/in/pauloraphaelmello/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </LinksContaner>
          </Developer>
        </DeveloperWrap>
      </DevelopersContainer>
    </Container>
  );
};

export default Home;
