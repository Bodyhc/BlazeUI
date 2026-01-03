import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <h3 className="font-bold">BlazeUI</h3>
            <p className="text-sm text-muted-foreground">
              A component library for React.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-medium">Resources</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to="/components" className="text-sm text-muted-foreground hover:text-foreground">
                    Components
                  </Link>
                </li>
                <li>
                   <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Company</h4>
               <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/Bodyhc/BlazeUI.git" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Legal</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BlazeUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
