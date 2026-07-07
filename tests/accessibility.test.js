/**
 * Accessibility Tests
 * WTR Energia Solar
 */

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load HTML file
const htmlPath = path.join(__dirname, '..', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Create JSDOM instance
const dom = new JSDOM(htmlContent);
const { document } = dom.window;

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✓ ${message}`);
    testsPassed++;
  } else {
    console.error(`✗ ${message}`);
    testsFailed++;
  }
}

// Test: Skip link exists
const skipLink = document.querySelector('.skip-link');
assert(skipLink !== null, 'Skip link should exist');

// Test: Navbar has aria-label
const navbar = document.querySelector('.navbar');
assert(navbar !== null, 'Navbar should exist');
assert(navbar.getAttribute('aria-label') === 'Menu principal', 'Navbar should have aria-label "Menu principal"');

// Test: All images have alt
const images = document.querySelectorAll('img');
images.forEach(img => {
  const src = img.getAttribute('src') || 'unknown';
  assert(img.hasAttribute('alt'), `Image should have alt attribute: ${src}`);
});

// Test: All form inputs have labels
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
  const id = input.id;
  if (id) {
    const label = document.querySelector(`label[for="${id}"]`);
    assert(label !== null, `Input should have associated label: ${id}`);
  }
});

// Test: All buttons have accessible name
const buttons = document.querySelectorAll('button, [role="button"]');
buttons.forEach(button => {
  const hasText = button.textContent.trim().length > 0;
  const hasAriaLabel = button.hasAttribute('aria-label');
  const hasTitle = button.hasAttribute('title');
  assert(hasText || hasAriaLabel || hasTitle, `Button should have accessible name`);
});

// Test: All links have href
const links = document.querySelectorAll('a');
links.forEach(link => {
  assert(link.hasAttribute('href'), `Link should have href attribute`);
});

console.log('\n--- Accessibility Test Summary ---');
console.log(`Tests passed: ${testsPassed}`);
console.log(`Tests failed: ${testsFailed}`);
console.log('--------------------------------\n');

// Exit with error code if any test failed
if (testsFailed > 0) {
  process.exit(1);
}