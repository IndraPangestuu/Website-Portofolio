import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        
        // Update URL without triggering page reload
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    };

    // Add scroll progress indicator
    const createScrollProgress = () => {
      const progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress';
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
      `;
      document.body.appendChild(progressBar);
      
      return progressBar;
    };

    const updateScrollProgress = () => {
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
      }
    };

    // Initialize scroll progress
    const progressBar = createScrollProgress();
    
    // Event listeners
    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial progress update
    updateScrollProgress();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', updateScrollProgress);
      if (progressBar && progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;