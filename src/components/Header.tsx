import Container from "./Container";
import ModeToggle from "./ModeToggle";
import Navigation from "./Navigation";

const navs = ["关于我", "文章", "项目", "更多"];

function Header() {
  return (
    <header className="mt-8 mb-12">
      <Container>
        <div className="flex gap-4">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>
          <div className="flex-1 flex justify-end">
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
