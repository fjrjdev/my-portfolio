import React from "react";
import { Text } from "@/styles/Text";
import { StyledDiv } from "./style";

const About = () => {
  return (
    <StyledDiv>
      <Text type="heading2" color="grey5">
        Desenvolvedor e ensusiasta sobre tecnologia
      </Text>
      <Text type="body1" color="grey2">
        Nascido e criado no Rio de Janeiro. Sou apaixonado em resolver
        problemas, principalmente aqueles que ninguem quer fazer.
      </Text>
      <Text type="body1" color="grey2">
        Antigamente eu trabalhava com manutenção e atualização de kernel dos
        telefones androids.
      </Text>
      <Text type="body1" color="grey2">
        Quando não estou progamando, você pode me encontrar assistindo futebol,
        NBA ou jogando algum jogo com tema de estratégia
      </Text>
    </StyledDiv>
  );
};

export default About;
