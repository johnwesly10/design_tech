import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Data with VaultenX?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust VaultenX for their cloud storage and infrastructure needs. 
            Get started with a free 14-day trial, no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link 
              to="/get-started" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '256-bit', label: 'Encryption' },
              { value: '24/7', label: 'Support' },
              { value: '1M+', label: 'Users' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default CTA;
