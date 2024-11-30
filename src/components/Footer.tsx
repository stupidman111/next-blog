import Container from "./Container";

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container className="flex justify-end">
        <p className="text-sm mx-12 text-gray-400">
          Created By Zy with Next.js v15 &copy; 2024
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
