// ── Icons (inline SVG strings) ──
const ICONS = {
  github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrow: `↗`,
};

// ── Project data ──
const PROJECTS = [
  {
    id: 'college-picker',
    num: '01',
    title: 'College Picker',
    badge: 'web',
    badgeLabel: 'Web App',
    desc: 'Full-stack web app that takes user preferences (state, size, test scores, religious affiliation, etc.) and generates a personalized top-20 college list, pulling live data from the CollegeScorecard API.',
    tags: ['Python', 'Web', 'Databases', 'SQL', 'Cloud', 'Deployed'],
  },
  {
    id: 'sigaida-dashboard',
    num: '02',
    title: 'SIGAIDA Campus Environment Dashboard',
    badge: 'datasci',
    badgeLabel: 'Data Science',
    desc: 'Comprehensive environmental monitoring dashboard for UIUC campus — integrating real-time air quality, weather, satellite vegetation (NDVI), transit, and ML-powered anomaly detection into a single Next.js platform.',
    tags: ['Python', 'ML/AI', 'Visualization', 'Databases', 'Web'],
  },
  {
    id: 'calorie-tracker',
    num: '03',
    title: 'Calorie Tracker',
    badge: 'web',
    badgeLabel: 'Web App',
    desc: 'Flask web app for tracking daily macros with natural language food logging, powered by the Gemini AI API and backed by 600,000+ USDA foods. Includes CI/CD and is live on Render.',
    tags: ['Python', 'Web', 'ML/AI', 'Databases', 'Cloud', 'Deployed'],
  },
  {
    id: 'child-violence-dashboard',
    num: '04',
    title: 'Child Violence Dashboard',
    badge: 'viz',
    badgeLabel: 'Visualization',
    desc: 'Interactive Tableau dashboard visualizing survey data on attitudes toward violence against children in Haiti — before and after an educational intervention. Segmented by gender, profession, and violence type.',
    tags: ['Visualization'],
  },
  
  {
    id: 'county-affordability',
    num: '05',
    title: 'County Affordability Analysis',
    badge: 'data',
    badgeLabel: 'Statistical Analysis',
    desc: 'Rigorous applied regression study investigating which county-level factors (unemployment, crime, water quality, education) best predict housing cost-to-income ratios across 2,762 U.S. counties.',
    tags: ['R', 'Statistics and Analytics'],
  },
  {
    id: 'sports-spending',
    num: '06',
    title: 'Sports Spending Analysis',
    badge: 'data',
    badgeLabel: 'Data Analysis',
    desc: 'Cross-sport analysis of whether payroll and transfer spending predicts team success across 7 major leagues (EPL, Serie A, MLS, NFL, MLB, NBA, NHL), using web-scraped data and Pearson\'s correlation.',
    tags: ['Python', 'Visualization', 'Web Scraping', 'Statistics and Analytics'],
  },
  {
    id: 'bike-sharing',
    num: '07',
    title: 'Cyclistic Bike-Sharing Analysis',
    badge: 'data',
    badgeLabel: 'Data Analysis',
    desc: 'Capstone case study comparing usage patterns between casual riders and annual members of a Chicago bike-sharing service, culminating in data-driven marketing recommendations.',
    tags: ['R', 'Visualization', 'Statistics and Analytics'],
  },
];

// ── Build nav ──
function buildNav(activePage) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="/portfolio/index.html" class="nav-logo">AK</a>
    <div class="nav-links">
      <a href="/portfolio/index.html#projects">Projects</a>
      <a href="/portfolio/index.html#about">About</a>
    </div>
    <div class="nav-social">
      <a href="https://github.com/artkha1" target="_blank" title="GitHub">${ICONS.github}</a>
      <a href="https://www.linkedin.com/in/artem-khaiet/" target="_blank" title="LinkedIn">${ICONS.linkedin}</a>
    </div>
  `;
}

// ── Build footer ──
function buildFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;
  footer.innerHTML = `
    <span class="footer-copy">© ${new Date().getFullYear()} Artem Khaiet</span>
    <div class="footer-social">
      <a href="https://github.com/artkha1" target="_blank" title="GitHub">${ICONS.github}</a>
      <a href="https://www.linkedin.com/in/artem-khaiet/" target="_blank" title="LinkedIn">${ICONS.linkedin}</a>
    </div>
  `;
}

// ── Utility: get project by id ──
function getProject(id) {
  return PROJECTS.find(p => p.id === id);
}
