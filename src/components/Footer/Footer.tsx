import { FC } from 'react';
import FooterStyled from './Footer.styled';

const { FooterWrapper, ContenedorFooterFirst, Info, Redes, FooterLink, Hr,
    ContenedorFooterSecond, ContenedorInformes, ContenedorReclamos, ReclamosLink,
    ReclamosImg } = FooterStyled;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <ContenedorFooterFirst>
        <Info>
          <h3>SÍGUENOS</h3>
          <Redes>
            <FooterLink href="https://www.facebook.com/">
              <img src="src/assets/images/f.png" width="40px" alt="Facebook" />
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <img src="src/assets/images/i.png" width="40px" alt="Instagram" />
            </FooterLink>
            <FooterLink href="https://www.tiktok.com/">
              <img src="src/assets/images/tt.png" width="40px" alt="TikTok" />
            </FooterLink>
          </Redes>
          <Hr />
          <p>TODOS LOS DERECHOS RESERVADOS 2024 / GRUPO ORGANIC SAC</p>
          <p>COLOMBIA | PERÚ | CHILE</p>
        </Info>
      </ContenedorFooterFirst>

      <ContenedorFooterSecond>
        <ContenedorInformes>
          <Info>
            <h3>GENERAL</h3>
            <p><FooterLink href="#">SOBRE NOSOTROS</FooterLink></p>
            <p><FooterLink href="#">CONTACTO</FooterLink></p>
            <h3>SEDE PRINCIPAL</h3>
            <p>ORGANIC MARKET</p>
            <p>AV. EL SOL S/N, SAN JUAN DE LURIGANCHO - LIMA, PERÚ</p>
          </Info>
          <Info>
            <h3>LEGAL</h3>
            <p><FooterLink href="#">TÉRMINOS Y CONDICIONES DE COMPRA</FooterLink></p>
            <p><FooterLink href="#">TÉRMINOS Y CONDICIONES DE GARANTÍA</FooterLink></p>
            <p><FooterLink href="#">TÉRMINOS Y CONDICIONES DE DELIVERY</FooterLink></p>
          </Info>
        </ContenedorInformes>

        <ContenedorReclamos>
          <Info>
            <h3>LIBRO DE RECLAMACIONES</h3>
          </Info>
          <ReclamosLink href="#">
            <ReclamosImg src="src/assets/images/lib.png" alt="Libro de Reclamaciones" />
          </ReclamosLink>
        </ContenedorReclamos>
      </ContenedorFooterSecond>
    </FooterWrapper>
  );
};

export default Footer;