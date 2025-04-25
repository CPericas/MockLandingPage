import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <main className="min-vh-100 bg-white text-dark">
      {/* Hero Section */}
      <section className="d-flex flex-column justify-content-center align-items-center text-center py-5 px-3 bg-primary text-white">
        <motion.h1
          className="display-3 fw-bold mb-4 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to [Whatever You Want]
        </motion.h1>

        <motion.p
          className="lead mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A short and compelling description that grabs attention and explains your product / company.
        </motion.p>

        <motion.button
          className="btn btn-light btn-lg shadow-lg"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Call 2 Action #1
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-5 px-3">
        <h2 className="text-center mb-5 display-4">Why Choose Us</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Feature One</h5>
                <p className="card-text">Brief explanation of this feature or benefit.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Feature Two</h5>
                <p className="card-text">Brief explanation of this feature or benefit.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Feature Three</h5>
                <p className="card-text">Brief explanation of this feature or benefit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
        <section className="py-5 px-3 bg-light">
        <h2 className="text-center mb-5 display-5">What Our Users Say</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="card h-100 text-center">
                <div className="card-body">
                <p className="card-text fst-italic">"This app changed the way I work. Super intuitive and sleek!"</p>
                <h6 className="mt-3 fw-bold">— John Doe</h6>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 text-center">    
                <div className="card-body">
                <p className="card-text fst-italic">"Blown away by the features and support. 10/10."</p>
                <h6 className="mt-3 fw-bold">— Jane Doe</h6>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 text-center">
                <div className="card-body">
                <p className="card-text fst-italic">"Highly recommend to anyone looking to streamline their business."</p>
                <h6 className="mt-3 fw-bold">— Chris Pericas</h6>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Pricing Section */}
        <section className="py-5 px-3">
        <h2 className="text-center mb-5 display-5">Pricing Plans</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="card h-100 text-center border-primary">
                <div className="card-header bg-primary text-white fw-bold">Basic</div>
                <div className="card-body">
                <h3 className="card-title">$0</h3>
                <p className="card-text">Great for beginners just getting started.</p>
                <ul className="list-unstyled">
                    <li>✓ Basic Features</li>
                    <li>✓ Community Support</li>
                </ul>
                <button className="btn btn-outline-primary mt-3">Choose Plan</button>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 text-center border-success">
                <div className="card-header bg-success text-white fw-bold">Pro</div>
                <div className="card-body">
                <h3 className="card-title">$29/month</h3>
                <p className="card-text">For pros who need more power and flexibility.</p>
                <ul className="list-unstyled">
                    <li>✓ All Basic Features</li>
                    <li>✓ Premium Support</li>
                    <li>✓ Advanced Tools</li>
                </ul>
                <button className="btn btn-success mt-3">Choose Plan</button>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 text-center border-dark">
                <div className="card-header bg-dark text-white fw-bold">Enterprise</div>
                <div className="card-body">
                <h3 className="card-title">Custom</h3>
                <p className="card-text">Tailored plans for teams and businesses.</p>
                <ul className="list-unstyled">
                    <li>✓ All Pro Features</li>
                    <li>✓ Dedicated Manager</li>
                    <li>✓ Custom Integrations</li>
                </ul>
                <button className="btn btn-dark mt-3">Contact Sales</button>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="py-5 bg-primary text-white text-center">
            <h2 className="mb-4 display-5">Ready to get started?</h2>
            <p className="lead mb-4">Join thousands of happy users today and make your workflow easier.</p>
            <motion.button
                className="btn btn-light btn-lg shadow-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                >
                Call 2 Action #1
            </motion.button>
        </section>
        

      {/* Footer */}
      <motion.footer
      className="bg-black py-4 text-center"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 8, duration: 0.6 }}
    >
      <p className="footer-text mb-0">© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
    </motion.footer>
    </main>
  );
};

export default LandingPage;
