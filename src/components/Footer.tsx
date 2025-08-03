import { FileText, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-background/10 rounded-lg">
                <FileText className="h-6 w-6 text-background" />
              </div>
              <span className="text-xl font-bold">AI Receipt Generator</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              The fastest way to create professional receipts using natural language. 
              Built for freelancers and small businesses who value their time.
            </p>
            <div className="flex gap-4">
              <Twitter className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-background mb-4">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-background transition-colors">Demo</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#templates" className="hover:text-background transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-background transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-background transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; 2024 AI Receipt Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;