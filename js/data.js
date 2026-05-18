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
    org: 'Internship @ Aneyeon, Inc. → CS 411 (UIUC) → Personal',
    desc: 'Full-stack web app that takes user preferences (state, size, test scores, religious affiliation, etc.) and generates a personalized top-5 college list, pulling live data from the CollegeScorecard API.',
    tags: ['Python', 'Web', 'Databases', 'SQL', 'Cloud', 'Deployed'],
    links: {
      live: 'https://collegepicker-urf3zp23ga-uc.a.run.app/',
      repo: 'https://github.com/artkha1/collegePicker',
    },
    skills: [
      'Full-stack web development (Flask)',
      'Relational database design & schema iteration',
      'SQL stored procedures, triggers, constraints, and indices',
      'REST API integration (CollegeScorecard API)',
      'Cloud deployment (Azure, Google Cloud Run, Supabase)',
      'Form validation with WTForms',
      'Data wrangling with pandas',
    ],
    tools: ['Python Flask', 'PostgreSQL', 'Supabase', 'Google Cloud Run', 'Python WTForms', 'Bulma CSS', 'CollegeScorecard API', 'pandas'],
    background: `Originally built during a first internship at Aneyeon, Inc. — a local custom software development company — as a first web development project. Later adapted for CS 411 (Database Systems) at UIUC as a team project with expanded SQL complexity, then rewritten as a solo personal project with a cleaner architecture.`,
    objective: `Build a website that asks users questions about college preferences and academic qualities, weights each criterion by the user's stated importance, and returns a ranked top-5 list of matching colleges with detailed information on each.`,
    outcome: `A live, deployed web application hosted on Google Cloud Run with a PostgreSQL database on Supabase, demonstrating the full lifecycle of a product from internship prototype to production-ready personal project.`,
  },
  {
    id: 'sigaida-dashboard',
    num: '02',
    title: 'SIGAIDA Campus Environment Dashboard',
    badge: 'datasci',
    badgeLabel: 'Data Science',
    org: 'ACM SIGAIDA @ UIUC',
    desc: 'Comprehensive environmental monitoring dashboard for UIUC campus — integrating real-time air quality, weather, satellite vegetation (NDVI), transit, and ML-powered anomaly detection into a single Next.js platform.',
    tags: ['Python', 'ML/AI', 'Visualization', 'Databases', 'Web'],
    links: {
      repo: 'https://github.com/artkha1/SIGAIDA-CAMPUS-ENERGY',
    },
    skills: [
      'ETL pipeline design and data collection',
      'REST API integration (OpenAQ, Open-Meteo, MTD GTFS)',
      'Google Earth Engine for satellite NDVI analysis',
      'LSTM neural network for time-series forecasting',
      'Anomaly detection for air quality records',
      'Interactive map with Leaflet.js',
      'Backend API design with FastAPI',
      'Database schema design (SQLite)',
    ],
    tools: ['Next.js 14', 'TypeScript', 'FastAPI', 'PyTorch', 'SQLite', 'Plotly.js', 'Chart.js', 'Leaflet', 'Pandas', 'Google Earth Engine', 'OpenAQ API', 'Open-Meteo API'],
    background: `Originally developed as part of a team at UIUC's ACM SIGAIDA (special interest group for AI and data analytics), with primary responsibility for data collection and database management. After the project ended, the repo was forked and individually cleaned up — integrating ML models developed by another team member, replacing placeholder content, and improving the UI.`,
    objective: `Build a comprehensive environmental monitoring platform for the UIUC campus, visualizing air quality, weather, vegetation health via satellite imagery, and bus transit data — with machine learning predictions layered on top.`,
    outcome: `A full-stack data engineering project demonstrating the complete pipeline from raw API data to ML-powered insights, with an interactive web frontend. Covers air quality (6 pollutants), 16-day weather forecasting, satellite NDVI at 100m resolution from 2016–2025, and real-time bus stop visualization.`,
  },
  {
    id: 'calorie-tracker',
    num: '03',
    title: 'Calorie Tracker',
    badge: 'web',
    badgeLabel: 'Web App',
    org: 'CS 222 (UIUC) → Personal',
    desc: 'Flask web app for tracking daily macros with natural language food logging ("2 eggs and a slice of toast"), powered by the Gemini AI API and backed by 600,000+ USDA foods. Includes CI/CD and is live on Render.',
    tags: ['Python', 'Web', 'ML/AI', 'Databases', 'Cloud', 'Deployed'],
    links: {
      live: 'https://calorie-tracker-ncz7.onrender.com/',
      repo: 'https://github.com/artkha1/calorie_tracker',
    },
    skills: [
      'Natural language processing integration (Gemini API)',
      'REST API integration (USDA FoodData Central)',
      'User authentication and session management',
      'Database design (SQLite)',
      'CI/CD with GitHub Actions',
      'ML-based food deduplication (cosine similarity)',
      'Test suite with mocked external APIs (pytest)',
      'Cloud deployment (Render)',
    ],
    tools: ['Python Flask', 'SQLite', 'Google Gemini 2.5 Flash', 'USDA FoodData Central API', 'GitHub Actions', 'Render', 'pytest'],
    background: `Core of the project originally developed for CS 222 (Software Design Lab) at UIUC with a team of 4. After the class ended, the project was moved to a personal repo, cleaned up, AI integration via Gemini was added for natural language understanding, CI/CD was implemented, and the app was deployed on Render.`,
    objective: `Build a web-based calorie tracker where users can log meals with natural language, track daily macro goals, and navigate historical logs — without tedious food searches.`,
    outcome: `A live, deployed web application with a full CI/CD pipeline: every push to main runs the pytest suite, and if tests pass, triggers automatic redeployment on Render. Demonstrates the complete software engineering lifecycle including testing, automation, and production deployment.`,
  },
  {
    id: 'child-violence-dashboard',
    num: '04',
    title: 'Child Violence Dashboard',
    badge: 'viz',
    badgeLabel: 'Visualization',
    org: 'Haitian Global Health Alliance (Internship)',
    desc: 'Interactive Tableau dashboard visualizing survey data on attitudes toward violence against children in Haiti — before and after an educational intervention. Segmented by gender, profession, and violence type.',
    tags: ['Visualization'],
    links: {
      live: 'https://public.tableau.com/app/profile/your-profile/viz/HaitiFinalDashboard/EmotionalViolenceDashboard',
    },
    skills: [
      'Data cleaning & transformation in Google Sheets',
      'Dashboard design with interactive filters',
      'Pre/post comparison analysis',
      'Segmentation by demographic groups',
      'Tableau calculated fields and parameters',
    ],
    tools: ['Tableau Public', 'Google Sheets'],
    background: `The Haitian Global Health Alliance is a nonprofit delivering critical healthcare services and social support to low-income Haitians. To combat violence against children, HGHA developed an educational program for Haitian men and women across various professions.`,
    objective: `Given survey data on attitudes toward violence against children before and after participating in the educational program, visualize trends in the percentage of correct ("true") responses. Group data by respondents' gender, profession, and violence type. Create interactive dashboards for each violence type, plus three additional charts with interactive filters.`,
    outcome: `Produced a fully interactive Tableau Public dashboard suite covering multiple violence categories, enabling HGHA staff to quickly identify which groups showed the most improvement and which needed additional outreach.`,
  },
  
  {
    id: 'county-affordability',
    num: '05',
    title: 'County Affordability Analysis',
    badge: 'data',
    badgeLabel: 'Statistical Analysis',
    org: 'STAT 420 (UIUC)',
    desc: 'Rigorous applied regression study investigating which county-level factors (unemployment, crime, water quality, education) best predict housing cost-to-income ratios across 2,762 U.S. counties.',
    tags: ['R', 'Statistics and Analytics'],
    links: {},
    skills: [
      'Ordinary least squares regression',
      'Ridge and LASSO regression',
      'Exploratory data analysis (EDA)',
      'Model diagnostics (residual analysis, heteroscedasticity)',
      'Stepwise model selection',
      'ANOVA and F-tests',
      'Variable transformations and interaction terms',
      'Interpretation of fixed effects models',
      'Handling multicollinearity',
      'Shapiro-Wilk normality testing',
    ],
    tools: ['R', 'R Markdown', 'tidyverse', 'ggplot2', 'MASS', 'car'],
    background: `Completed for STAT 420 (Methods of Applied Statistics) at UIUC. Dataset sourced from Kaggle, containing publicly available quality-of-life metrics across U.S. counties compiled from the Census Bureau, EPA, and USDA.`,
    objective: `Investigate what county-level variables most influence housing affordability (measured as the mean cost-to-income ratio) across U.S. counties, using rigorous statistical modeling and diagnostics.`,
    outcome: `Final model achieved an adjusted R² of ~0.51 — reasonable given the many unmeasured factors influencing affordability. Key finding: unemployment rate, state-level fixed effects, and student-to-teacher rank are the most consistent predictors, with significant interaction effects between locale type and unemployment.`,
  },
  {
    id: 'sports-spending',
    num: '06',
    title: 'Sports Spending Analysis',
    badge: 'data',
    badgeLabel: 'Data Analysis',
    org: 'Personal Project',
    desc: 'Cross-sport analysis of whether payroll and transfer spending predicts team success across 7 major leagues (EPL, Serie A, MLS, NFL, MLB, NBA, NHL), using web-scraped data and Pearson\'s correlation.',
    tags: ['Python', 'Visualization', 'Web Scraping', 'Statistics and Analytics'],
    links: {
      repo: 'https://github.com/artkha1/sportsSpending',
    },
    skills: [
      'Web scraping with BeautifulSoup',
      'Data wrangling and normalization across disparate sources',
      'Custom success metric design (regular season + playoffs)',
      'Pearson correlation analysis',
      'Multi-panel data visualization',
      'Cross-domain comparison methodology',
    ],
    tools: ['Python', 'pandas', 'BeautifulSoup', 'matplotlib', 'numpy', 'Jupyter Notebooks'],
    background: `Born from a debate about whether money buys success in sports. Personally motivated by being a sports fan who wanted to rigorously test the question across multiple sports and leagues.`,
    objective: `Explore the extent to which payroll and transfer spending influences team success across 5 sports and 7 leagues. Design a composite success metric for both regular season and playoff performance, then analyze the correlation between spending and success visually and statistically.`,
    outcome: `A comprehensive comparative analysis revealing how the money-to-success relationship varies significantly by sport and league format, with full methodology documented in an accompanying report.`,
  },
  {
    id: 'bike-sharing',
    num: '07',
    title: 'Cyclistic Bike-Sharing Analysis',
    badge: 'data',
    badgeLabel: 'Data Analysis',
    org: 'Google Data Analytics Certificate (Capstone)',
    desc: 'Capstone case study comparing usage patterns between casual riders and annual members of a Chicago bike-sharing service, culminating in data-driven marketing recommendations.',
    tags: ['R', 'Visualization', 'Statistics and Analytics'],
    links: {
      live: 'https://www.kaggle.com/code/artemkhaiet/cyclistic-analysis',
    },
    skills: [
      'Exploratory data analysis',
      'Behavioral segmentation analysis',
      'Data cleaning and transformation',
      'Data visualization for storytelling',
      'Translating data insights into business recommendations',
    ],
    tools: ['R', 'R Markdown', 'dplyr', 'ggplot2'],
    background: `Completed as the capstone project for the Google Data Analytics Professional Certificate. The scenario uses Cyclistic, a fictional bike-sharing company modeled on Chicago's Divvy system.`,
    objective: `Understand how casual riders and annual members use Cyclistic bikes differently, then make data-backed recommendations for a marketing strategy to convert casual riders into members.`,
    outcome: `A published Kaggle notebook with clear visualizations and actionable recommendations, demonstrating the full data analysis workflow: ask, prepare, process, analyze, share, and act.`,
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
