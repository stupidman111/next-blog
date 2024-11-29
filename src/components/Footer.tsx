import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container className="flex justify-between gap-4">
        <p className="text-sm">
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Created By Zy with Next.js, TailwindCSS, and ...
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
