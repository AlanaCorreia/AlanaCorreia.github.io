import profile from '../images/profile.jpeg'
import { Container, Image, Text } from '../styles/Content';

function Content() {
  return (
    <Container>
      <Text>
        Desenvolvedora Full Stack, formada em Direito e ex-concurseira.
        Encantada pelo universo da tecnologia, acredito que através dela podemos gerar soluções que agreguem na vida das pessoas, com criatividade e inovação. Além trazer uma transformação digital com boas experiências para quem usufrui dela.
    </Text>
    <Image src={profile} alt="foto de perfil"/>
    </Container>
  );
}

export default Content;