import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are committed to providing the best products with unmatched quality and service. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-sm text-gray-400 hover:text-yellow-500 transition">Shop</a></li>
              <li><a href="/about" className="text-sm text-gray-400 hover:text-yellow-500 transition">About Us</a></li>
              <li><a href="/contact" className="text-sm text-gray-400 hover:text-yellow-500 transition">Contact Us</a></li>
              <li><a href="/faq" className="text-sm text-gray-400 hover:text-yellow-500 transition">FAQs</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-sm text-gray-400 hover:text-yellow-500 transition">Shipping & Returns</a></li>
              <li><a href="/support" className="text-sm text-gray-400 hover:text-yellow-500 transition">Support</a></li>
              <li><a href="/privacy" className="text-sm text-gray-400 hover:text-yellow-500 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-gray-400 hover:text-yellow-500 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay connected through our social media channels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Craspedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
