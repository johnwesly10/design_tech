import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Industries from "./components/Industries";
import UseCases from "./components/UseCases";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function VaultenxCloud() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [scrolled]);

  // Handle popup effect (runs once on mount)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenVaultenxPopup');

    if (hasSeenPopup === 'true') return;

    const showAlert = () => {
      Swal.fire({
        title: `🚀 Coming Soon!`,
        html: `
          <div class="text-center">
            <p class="mb-4">We're working hard to bring you something amazing. Stay tuned for updates!</p>
          </div>
        `,
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#3b82f6',
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        backdrop: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url("https://cdn.pixabay.com/animation/2023/08/17/08/51/08-51-41-992_512.gif") center/cover no-repeat
        `,
        didOpen: () => {
          const popup = document.querySelector('.swal2-popup');
          if (popup) {
            popup.style.maxWidth = '28rem';
          }
        },
        preConfirm: () => {
          const dontShowAgain = document.getElementById('dontShowAgain')?.checked;
          if (dontShowAgain) {
            localStorage.setItem('hasSeenVaultenxPopup', 'true');
          }
        }
      });
    };

    // Add a small delay to ensure the page is fully loaded
    const timer = setTimeout(() => {
      showAlert();
    }, 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="vaultenx-cloud-storage min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <UseCases />
        <Services />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default VaultenxCloud;
