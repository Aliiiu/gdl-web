import { PageContainer, JoinClubContainer } from "./layout.style";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import JoinTheClub from "../PageSections/JoinTheClub";

const Layout = ({ children, ...props }) => (
  <div>
    <Topbar />
    <main>
      <PageContainer>
        <div className="w-full h-full">{children}</div>
      </PageContainer>
    </main>
    <JoinClubContainer id="join-club" className="softGradient flex flex-wrap">
      <JoinTheClub />
    </JoinClubContainer>
    <Footer />
  </div>
);

export default Layout;
