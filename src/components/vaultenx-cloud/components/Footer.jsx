import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Small Business', href: '/solutions/small-business' },
        { name: 'Startups', href: '/solutions/startups' },
        { name: 'Nonprofits', href: '/solutions/nonprofits' },
        { name: 'Education', href: '/solutions/education' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Help Center', href: '/help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/vaultenx', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/vaultenx', icon: 'fab fa-linkedin' },
    { name: 'GitHub', href: 'https://github.com/vaultenx', icon: 'fab fa-github' },
    { name: 'Facebook', href: 'https://facebook.com/vaultenx', icon: 'fab fa-facebook' },
    { name: 'YouTube', href: 'https://youtube.com/vaultenx', icon: 'fab fa-youtube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">VaultenX</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Enterprise-grade cloud storage and infrastructure solutions for businesses of all sizes. 
              Secure, scalable, and reliable data management.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <i className={`${item.icon} text-xl`} />
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We'll never share your email. Unsubscribe at any time.
              </p>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {['Privacy', 'Terms', 'Security', 'Status', 'Sitemap'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 md:mt-0 md:order-1">
              &copy; {currentYear} VaultenX, Inc. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green-400 mr-1"></span>
              <span>All systems operational</span>
            </span>
            <span className="mx-2">•</span>
            <a href="/status" className="text-blue-400 hover:underline">View status page</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
