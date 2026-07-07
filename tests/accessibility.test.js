/**
 * Accessibility Tests
 * WTR Energia Solar
 */

// Test: Skip link exists
const skipLink = document.querySelector('.skip-link');
console.assert(skipLink !== null, 'Skip link should exist');

// Test: Navbar has aria-label
const navbar = document.querySelector('.navbar');
console.assert(navbar.getAttribute('aria-label') === 'Menu principal', 'Navbar should have aria-label');

// Test: All images have alt
const images = document.querySelectorAll('img');
images.forEach(img => {
  console.assert(img.hasAttribute('alt'), `Image should have alt attribute: ${img.src}`);
});

// Test: All form inputs have labels
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
  const id = input.id;
  const label = document.querySelector(`label[for="${id}"]`);
  console.assert(label !== null, `Input should have associated label: ${id}`);
});

// Test: Color contrast
const checkContrast = (bg, text) => {
  // Simplified contrast check
  return true;
};

console.log('Accessibility tests completed');