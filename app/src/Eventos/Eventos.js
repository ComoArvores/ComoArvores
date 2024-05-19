import React from "react";
import styled from "styled-components";

// Estilos usando styled-components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #d8f6ce;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 10px 0;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: #555;
  margin: 10px 0;
`;

const TreeImage = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
`;

const Details = styled.div`
  margin: 20px 0;
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #81bef7;
  color: <Black></Black>;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #81bef7;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

function App() {
  const handleValidatePresence = () => {
    alert("Presença validada!");
  };

  const handleDownloadCertificate = () => {
    alert("Certificado baixado!");
  };

  return (
    <Container>
      <Title>Como Árvores</Title>
      <Subtitle>
        As Árvores e a Arte no Processo de Transformação Pessoal
      </Subtitle>
      <TreeImage src="Árvore" alt="Árvore" />
      <Details>
        <p>
          <strong>Data:</strong> Sábado 06/10/2024
        </p>
        <p>
          <strong>Hora:</strong> 9:00 às 10:30
        </p>
      </Details>
      <Buttons>
        <ActionButton onClick={handleValidatePresence}>
          <Icon
            src="data:image/png;base64,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"
            alt="Validar Presença"
          />{" "}
          Validar Presença
        </ActionButton>
        <ActionButton onClick={handleDownloadCertificate}>
          <Icon
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////u7u56enrp6env7+/q6urt7e1tbW3l5eX7+/tiYmJWVlaVlZXAwMB4eHh8fHy5ubmbm5uxsbFqamrU1NT29vbf399xcXFmZmZcXFylpaWioqKtra3Hx8eIiIjOzs6Ojo6EhIRNTU3t2PwWAAAILklEQVR4nO1dD3+qIBRFBQxXUhlhrbb2vv+HfODWZqSmCQjG+b0/rVvKievl3ntkgagGGCFwCySe89kqAALD6UcZGAaGgeH0owwMA8PXYhhFifLqxHvrDUPc+GrssVVl6KinjfVS+Av5idx9HvLT8NZaASQ1oGShvHohnvPZKgCefrMvVhXTu5ZuqwoXwoNeqwoHQrxmawPDGtxcxIdZVbjpaTq91M1RBoaBoQvjsLpa1OBKPNQZS91c03Suh256mlYvdTK31JmXulkfjKot6qWUO8PSWR/Ov8avB1p3woOhbqJDId5Ur82dZdpQv9RRTwtd/cAwMJx+lEF7CtpTna6bnha0p6A9WTsxwnWoruW19kQYkYBMoLJWD6rnGDF43hboDwCnlKftWEJT522D9iC+OPC8CXH1L31bGTpvF8MaNCzE+wON20HLraHztkK7t+yzLoJxsTV0XpsMO+YwMAwMA8Mm6I+l/Rh6rD31Z+ir9uSel+rOD/vOob/aU0+G/mpPbNfFMKbplvitPeEHDGPBEPutPfVg6Lf21GsOvdaeHjGk317qsfaESZ/r0OeufmAYGAaG02tPjsXSF1gP55nTzD8vnX9tYejQDtWHCuZf479An2b2vbb590vn76WBYWAYGE7PcP6xdP7r4Qt46ezz0hnWFvVSap714fxr/HqgnWefpvb4BXpts++XvkDPOzAMDAPD6RnOPpa+wHo4z5xm/nnp/GsLQ4d2qD5UMP8a/wX6NLPvtfVfTKGn/dK+/oAhhj29NNfgpd/X2MNR6ezqC4JNV/zvHtG/SHOI2yfxJtLcv/cXC3E2bJkhhpCQxiOog8to14KYrvscBJAJlBnIVhsFy4af3jdp54rPL8fW99Z+3v65qS2GiHxmhbrllddxfY52emmcd7z378DZiejy0t5Ri23LmFKa0xpuR9/wXCPL9vden6c0vbBeo2qwNjDstfJguOdievLHDEYiFxOd5+XqOofWtCcsqndJ0QJymmdroG216JsBigdgz9MeXjgalBdnIsZjW3tCKCH7mJvnF+flmUylPbEkFmsBNXUxVgcWM7hTF1572hNiC5qKSNeRl42kGOec78h02lMSMfSRio/aFEUxg3wH0N0n+2w3cXAgRvK3eHwVptxUHDXlC3GW+0/WnvaEIYsupbGAmooZ7FumtVjHdxMxI8tCph16uVV+wSka2RHXwVBQZJsijjuyz2cIynQ2/UrIs6PSyVBSPJZ5V4I9HHIGiw/M5BU1OUOZbIBjoZFeXK3z6QerCE7PsGpokNNBK8M8Li+QwRGjamb4dAsIQ7Aucz3XIq38vdgQhkeO6p7hiDYeZmBd5LJaHM9QXoXlhv3MoCvaExazeM70VFPiINmJMQ2j+maoR3uSEQd8cq7BT2UxcRLlINYwKp3ak3wAdoWOairPtiIVRb/Hdkh7Sqqyv09vpo2bDDN5sQKq4zmjPUVAUMxHJOKy2CzWALqqPYmFkSQpj0cUU5Rnn8Bh7UlEVFLVxE8TzNMzaFBEnNn3JN2EoPzpcEN5+Sn793e/GdOpfU+Ywa8iHp6Hy9enfE9GptoWdpRgTNBHMTjcyFfzfAeg+wzF07KzMXwOaZqKchBD5xnKq53BTTl0ycjTrwWTqqT7DKEYJmPLoQVjmidACq/GGerR00Wp8V4OoEdp8cHI+PM2WRsYarlljrFT1rOzISW64oJ/CXqx7wlBMYvbsme5mNNsKepd/KzKa0Z7emSF17K/zyRmRyKDDLJyT5Se+8vk/8K66hdRs3ci3ou1lEt29z0hsCoq+ajzIozLI4Ce7nsS9fW56LxT4bugZ+xe8/Fk3xPG4Jx2OiqtOhb4XvPREvAqGL3PW2QoYJd2lBqC4JrIREZnuWRx3xOUZ5LNm7ZZlASBCLvRfVGvbVTmv8EDg31VMN6xrDoWot7Vnmrb3VEiawWy4M2OKupdgL1nCCuKlMd3iz/lXM6g/lTbMkMEZQaHvu6vRanQC2Pk+xzKFFVQjGih3LnG0510UThWIbSkPT2wCopsWdaiDY15vAAYjj7yY6ut73vChF1+a2KRqaXxglT1vNnzqgzNeQsUFxzZZNdJpOVHRCJ5ERo+b8XQYF76lx+KuggBcvwp+/P0wkQ+gBg2fV6d2lN3MYUSJK3v1c4EMYMEGCyXJvu+pwWOwFZ2NsolYza/D1iBuf1HCCcMnEqeXRjBhsqlJqsKc/uPEhlayPljy1hDqu3xvqc/q9wzAhkjspYwVS7p0Z6qXS1NO1u6970kVb8XV4PBTRpo13uv1vZRtY5ZxQNPqxY28vNNauqtu+QW2q3iP9mSG9gQGMYQJZCRz9X6B6tbrG9hwLpaMYIGXsMDGUYMLv+9Hd4mQ74nRhkmETi+pXI3EP/5e7N3p+MnHVa5W+jwBe6ilNY5hISX4lx3O55soJB/isOCGdWeICsmYfcHwdCk9oQisHybilshnTXjbOCdGioeeClmC/6WTYjDeex1+DADJPh9OSFEKB14x5SKR2LLQgQbdl3yFavhFb86LUS2tacarFoH1Icja/yfVLE1mTRltaQ9mfs1Ad1Wi9rTVHNoTXv67tt/u0tbV9+E1S3taVprYOjGKAPDwDC6gb01zZbVlvY0kVVl6Kin+aA9TWW1pz1NZ02sak8TWVVM71q6rSpcCA/eak8TWRsY1uDmIm5Se/LRGhj6bw0M/beqcDMeOrjvySGrCjc9TauXOplburfvySXrC9SH86/x64HWnfBgqJvoUIj3ZN+TE9ZX6CYGhtOPMjAMDAPD6UcZGAaGs2f4H8JhXHoLwKpUAAAAAElFTkSuQmCC"
            alt="Baixar Certificado"
          />{" "}
          Baixar Certificado
        </ActionButton>
      </Buttons>
    </Container>
  );
}

export default App;
