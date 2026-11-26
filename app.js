// ========================================================
// Lovely Professional University - Internship Portal
// CSE Web Development Lab Project - 1st Year
// Pure HTML, CSS, JavaScript (HCJ)
// ========================================================

// --------------------------------------------------------
// SECTION 1: DEFAULT DATA (MOCK DATABASE)
// --------------------------------------------------------

// Initial list of internship offers for LPU students
var initialOffers = [
  {
    id: 'offer-1',
    sn: 1,
    learner: {
      name: 'Damian Mouzo Otero',
      email: 'damian.mouzo@stud.lpu.in',
      class: 'ICT2025a',
      phone: '+91 98765 11001',
      location: 'Block 14, Uni-Living, LPU Campus'
    },
    internship: {
      title: 'Display Doktor - Damian Mouzo',
      startDate: 'Aug 01, 2026',
      endDate: 'Jul 31, 2027',
      expiryDate: 'Apr 08, 2026',
      status: 'Active',
      description: 'Junior Application Support & Diagnostics Engineer. Developing internal diagnosis tools and maintaining test environments for mobile and hardware devices.'
    },
    company: {
      name: 'Display Doktor GmbH',
      address: 'Bollwerk 15, 3011 Bern / Partner Branch',
      contactPerson: 'Markus Lehmann (Technical Lead)',
      email: 'info@displaydoktor.ch'
    },
    approvalStatus: 'Accepted'
  },
  {
    id: 'offer-2',
    sn: 2,
    learner: {
      name: 'Tenzin Dhejung',
      email: 'tenzin.dhejung@stud.lpu.in',
      class: 'ICT2025a',
      phone: '+91 98765 11002',
      location: 'Block 22, Uni-Living, LPU Campus'
    },
    internship: {
      title: 'Cloud Systems & Infrastructure - Tenzin Dhejung',
      startDate: 'Aug 01, 2026',
      endDate: 'Jul 31, 2028',
      expiryDate: 'Mar 10, 2026',
      status: 'Active',
      description: 'Cloud Infrastructure & System Administration. Managing enterprise Windows/Linux servers, automated patch distribution, and VM clusters.'
    },
    company: {
      name: 'ITpoint Systems AG',
      address: 'Gewerbestrasse 10, 6330 Cham',
      contactPerson: 'Stefan Meyer (Senior Systems Architect)',
      email: 'hr@itpoint.ch'
    },
    approvalStatus: 'Accepted'
  },
  {
    id: 'offer-3',
    sn: 3,
    learner: {
      name: 'Benjamin Schütz',
      email: 'benjamin.schuetz@stud.lpu.in',
      class: 'ICT2025a',
      phone: '+91 98765 11003',
      location: 'Block 18, Uni-Living, LPU Campus'
    },
    internship: {
      title: 'ICT Full-Stack Web Praktikum',
      startDate: 'Aug 03, 2026',
      endDate: 'Jul 31, 2027',
      expiryDate: 'Aug 03, 2026',
      status: 'Active',
      description: 'Full-Stack Software Development. Working on client-facing web portals utilizing modern microservices, REST APIs, and automated CI/CD pipelines.'
    },
    company: {
      name: 'it5solutions GmbH',
      address: 'Allmendstrasse 18, 3600 Thun',
      contactPerson: 'Beat Wälchli (Managing Director)',
      email: 'jobs@it5solutions.ch'
    },
    approvalStatus: 'Pending'
  },
  {
    id: 'offer-4',
    sn: 4,
    learner: {
      name: 'Emran Eren',
      email: 'emran.eren@stud.lpu.in',
      class: 'ICT2025a',
      phone: '+91 98765 11004',
      location: 'Block 34, Uni-Living, LPU Campus'
    },
    internship: {
      title: 'Industrial Automation & IoT Praktikum',
      startDate: 'Aug 01, 2026',
      endDate: 'Jul 31, 2028',
      expiryDate: 'Jun 30, 2026',
      status: 'Active',
      description: 'Process Automation & Network Engineering. Supporting industrial telemetry systems, industrial IoT protocols, and plant automation data pipelines.'
    },
    company: {
      name: 'Erbo Spraytec AG',
      address: 'Industriestrasse 17, 4922 Bützberg',
      contactPerson: 'Christoph Gerber (Head of IT)',
      email: 'kontakt@erbospraytec.ch'
    },
    approvalStatus: 'Accepted'
  },
  {
    id: 'offer-5',
    sn: 5,
    learner: {
      name: 'Raquel Gugger',
      email: 'raquel.gugger@stud.lpu.in',
      class: 'ICT2025a',
      phone: '+91 98765 11005',
      location: 'Block 12, Uni-Living, LPU Campus'
    },
    internship: {
      title: 'Healthcare Informatics Praktikum',
      startDate: 'Aug 01, 2026',
      endDate: 'Jul 31, 2028',
      expiryDate: 'Mar 06, 2026',
      status: 'Active',
      description: 'Healthcare Informatics & User Support. Administering healthcare client terminals, electronic patient dossier security, and mobile nursing device integration.'
    },
    company: {
      name: 'Spitex Bern',
      address: 'Zentweg 21, 3006 Bern',
      contactPerson: 'Sandra Aebischer (ICT Coordinator)',
      email: 'it-support@spitex-bern.ch'
    },
    approvalStatus: 'Accepted'
  }
];

// Student applications list
var initialApplications = [
  { id: 'app-1', student: 'Damian Mouzo Otero', class: 'ICT2025a', email: 'damian.mouzo@stud.lpu.in', company: 'Display Doktor GmbH', position: 'Junior Diagnostics Specialist', date: 'Jan 12, 2026', status: 'Accepted', badgeClass: 'pill-accepted' },
  { id: 'app-2', student: 'Tenzin Dhejung', class: 'ICT2025a', email: 'tenzin.dhejung@stud.lpu.in', company: 'ITpoint Systems AG', position: 'Cloud & Infrastructure Intern', date: 'Jan 18, 2026', status: 'Accepted', badgeClass: 'pill-accepted' },
  { id: 'app-3', student: 'Benjamin Schütz', class: 'ICT2025a', email: 'benjamin.schuetz@stud.lpu.in', company: 'it5solutions GmbH', position: 'Full-Stack Developer Intern', date: 'Feb 02, 2026', status: 'Awaiting Faculty Approval', badgeClass: 'pill-pending' },
  { id: 'app-4', student: 'Noah Weber', class: 'ICT2024b', email: 'noah.weber@stud.lpu.in', company: 'Swisscom AG', position: 'Network Systems Engineer', date: 'Feb 15, 2026', status: 'Technical Interview', badgeClass: 'pill-pending' },
  { id: 'app-5', student: 'Elena Rossi', class: 'ICT2025b', email: 'elena.rossi@stud.lpu.in', company: 'Erbo Spraytec AG', position: 'Automation & Telemetry Intern', date: 'Feb 20, 2026', status: 'Under Review', badgeClass: 'pill-pending' },
  { id: 'app-6', student: 'Sandro Keller', class: 'ICT2025a', email: 'sandro.keller@stud.lpu.in', company: 'Spitex Bern', position: 'Clinical IT User Support', date: 'Feb 24, 2026', status: 'Screening', badgeClass: 'pill-pending' }
];

// Registered student profiles
var initialInterns = [
  { id: 'int-1', name: 'Damian Mouzo Otero', class: 'ICT2025a', email: 'damian.mouzo@stud.lpu.in', phone: '+91 98765 11001', placement: 'Display Doktor GmbH', status: 'Assigned', tags: ['Diagnostics', 'Hardware', 'Python'] },
  { id: 'int-2', name: 'Tenzin Dhejung', class: 'ICT2025a', email: 'tenzin.dhejung@stud.lpu.in', phone: '+91 98765 11002', placement: 'ITpoint Systems AG', status: 'Assigned', tags: ['Cloud', 'Linux', 'VMware'] },
  { id: 'int-3', name: 'Benjamin Schütz', class: 'ICT2025a', email: 'benjamin.schuetz@stud.lpu.in', phone: '+91 98765 11003', placement: 'it5solutions GmbH (Pending)', status: 'Pending', tags: ['JavaScript', 'REST APIs', 'React'] },
  { id: 'int-4', name: 'Emran Eren', class: 'ICT2025a', email: 'emran.eren@stud.lpu.in', phone: '+91 98765 11004', placement: 'Erbo Spraytec AG', status: 'Assigned', tags: ['Industrial IoT', 'Automation', 'Sensors'] },
  { id: 'int-5', name: 'Raquel Gugger', class: 'ICT2025a', email: 'raquel.gugger@stud.lpu.in', phone: '+91 98765 11005', placement: 'Spitex Bern', status: 'Assigned', tags: ['Healthcare IT', 'Database', 'Support'] },
  { id: 'int-6', name: 'Noah Weber', class: 'ICT2024b', email: 'noah.weber@stud.lpu.in', phone: '+91 98765 11006', placement: 'Seeking Placement', status: 'Available', tags: ['Cisco CCNA', 'Routing', 'Security'] }
];

// Partner companies
var initialCompanies = [
  { id: 'comp-1', name: 'Display Doktor GmbH', sector: 'Device Diagnostics & Electronics', location: 'Bollwerk 15, 3011 Bern', mentor: 'Markus Lehmann (Tech Lead)', email: 'info@displaydoktor.ch', activeInterns: 1 },
  { id: 'comp-2', name: 'ITpoint Systems AG', sector: 'Managed Cloud & Infrastructure', location: 'Gewerbestrasse 10, 6330 Cham', mentor: 'Stefan Meyer (Senior Architect)', email: 'hr@itpoint.ch', activeInterns: 1 },
  { id: 'comp-3', name: 'it5solutions GmbH', sector: 'Enterprise Web & Microservices', location: 'Allmendstrasse 18, 3600 Thun', mentor: 'Beat Wälchli (Managing Director)', email: 'jobs@it5solutions.ch', activeInterns: 1 },
  { id: 'comp-4', name: 'Erbo Spraytec AG', sector: 'Process Automation & Industrial IoT', location: 'Industriestrasse 17, 4922 Bützberg', mentor: 'Christoph Gerber (Head of IT)', email: 'kontakt@erbospraytec.ch', activeInterns: 1 },
  { id: 'comp-5', name: 'Spitex Bern', sector: 'Healthcare Information Systems', location: 'Monbijoustrasse 22, 3011 Bern', mentor: 'Andrea Buri (IT Lead)', email: 'it@spitex-bern.ch', activeInterns: 1 },
  { id: 'comp-6', name: 'Swisscom AG', sector: 'Telecommunications & 5G Systems', location: 'Alte Tiefenaustrasse 6, 3050 Bern', mentor: 'Pascal Brunner (Enterprise Lead)', email: 'internships@swisscom.com', activeInterns: 3 }
];

// Incident reports log
var initialIncidents = [
  { id: 'INC-2026-003', date: 'Feb 28, 2026', student: 'Noah Weber', company: 'Swisscom AG', category: 'Excused Absence / Medical', severity: 'Low', status: 'Resolved', severityClass: 'inc-green' },
  { id: 'INC-2026-002', date: 'Feb 14, 2026', student: 'Benjamin Schütz', company: 'it5solutions GmbH', category: 'Hardware Replacement Required', severity: 'Medium', status: 'In Progress', severityClass: 'inc-amber' },
  { id: 'INC-2026-001', date: 'Jan 20, 2026', student: 'Damian Mouzo Otero', company: 'Display Doktor GmbH', category: 'Test Bench ESD Grounding', severity: 'Low', status: 'Resolved', severityClass: 'inc-green' }
];

// Document templates and files
var initialDocuments = [
  { id: 'doc-1', title: 'Standard Triangular Internship Contract (VET 2026/27)', type: 'PDF', size: '340 KB', updated: 'Jan 15, 2026' },
  { id: 'doc-2', title: 'ICT VET Learning Objectives & Competencies Matrix', type: 'PDF', size: '1.1 MB', updated: 'Jan 10, 2026' },
  { id: 'doc-3', title: 'Mid-Term Student Evaluation Protocol Form', type: 'DOCX', size: '120 KB', updated: 'Jan 05, 2026' },
  { id: 'doc-4', title: 'Final Internship Completion Certificate Template', type: 'PDF', size: '210 KB', updated: 'Jan 01, 2026' },
  { id: 'doc-5', title: 'Workplace Safety & Lab Guidelines (Lovely Professional University)', type: 'PDF', size: '480 KB', updated: 'Dec 12, 2025' }
];

// English and German translations
var translations = {
  en: {
    dashboard: 'Dashboard',
    internshipManagement: 'Internship Management',
    internshipApplications: 'Internship Applications',
    internshipOffers: 'Internship Offers',
    assignInternships: 'Assign Internships',
    internsProfiles: "Intern's Profiles",
    companies: 'Companies',
    incidentReportLogs: 'Incident Report Logs',
    documentManagement: 'Document Management',
    profile: 'Profile',
    changePassword: 'Change Password',
    logout: 'Logout',
    all: 'All',
    accepted: 'Accepted',
    rejected: 'Rejected',
    pending: 'Pending',
    search: 'Search',
    searchPlaceholder: 'Search by student, company, or title...',
    colSn: 'S/N',
    colLearner: 'LEARNER DETAILS',
    colInternship: 'INTERNSHIP DETAILS',
    colCompany: 'COMPANY',
    colStatus: 'APPROVAL STATUS',
    colActions: 'ACTIONS',
    nameLabel: 'Name:',
    emailLabel: 'Email:',
    classLabel: 'Class:',
    titleLabel: 'Title:',
    startDateLabel: 'Start Date:',
    endDateLabel: 'End Date:',
    expiryDateLabel: 'Expiry Date:',
    statusLabel: 'Status:',
    activeBadge: 'Active',
    rejectBtn: 'Reject',
    acceptBtn: 'Accept',
    viewTooltip: 'View Full Dossier',
    noResultsTitle: 'No internship offers found',
    noResultsText: 'Try adjusting your search query or switching the status filter.',
    clearFilters: 'Clear Filters',
    offerDetails: 'Internship Offer Details',
    close: 'Close',
    cancel: 'Cancel',
    confirm: 'Confirm',
    resetData: 'Reset Demo',
    addOffer: 'New Offer',
    newOfferTitle: 'Create New Internship Offer',
    submitOffer: 'Create Offer',
    pendingReviewMsg: 'pending faculty review and decision',
    approveAllBtn: 'Quick Approve All',
    viewPendingBtn: 'Filter Pending',
    loginTeacherTitle: 'Teacher / Faculty Login',
    loginStudentTitle: 'Student Portal Login',
    teacherUsernameLabel: 'Faculty Email or Staff ID',
    studentUsernameLabel: 'Student Reg. Number or Email',
    teacherPlaceholder: 'e.g. teacher@lpu.in or raheem',
    studentPlaceholder: 'e.g. 12001234 or student@stud.lpu.in',
    loginTeacherSubmit: 'Sign In as Faculty',
    loginStudentSubmit: 'Sign In as Student',
    switchToStudentPrompt: 'Looking for Student login?',
    switchToTeacherPrompt: 'Looking for Teacher / Faculty login?',
    switchToStudentBtn: 'Switch to Student Login',
    switchToTeacherBtn: 'Switch to Faculty Login',
    passwordLabel: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot Password?',
    signInBtn: 'Sign In',
    loginFailedMsg: 'Please enter valid credentials to access the portal.',
    logoutSuccessToast: 'You have been safely signed out.',
    forgotPwToast: 'Password reset link sent to your registered institutional email.'
  },
  de: {
    dashboard: 'Dashboard',
    internshipManagement: 'Praktikumsverwaltung',
    internshipApplications: 'Bewerbungen',
    internshipOffers: 'Praktikumsangebote',
    assignInternships: 'Praktika zuweisen',
    internsProfiles: 'Lernenden-Profile',
    companies: 'Lehrbetriebe',
    incidentReportLogs: 'Vorfallsberichte',
    documentManagement: 'Dokumentenablage',
    profile: 'Profil',
    changePassword: 'Passwort ändern',
    logout: 'Abmelden',
    all: 'Alle',
    accepted: 'Angenommen',
    rejected: 'Abgelehnt',
    pending: 'Ausstehend',
    search: 'Suchen',
    searchPlaceholder: 'Nach Name, Firma oder Titel suchen...',
    colSn: 'Nr.',
    colLearner: 'LERNENDE DETAILS',
    colInternship: 'PRAKTIKUM DETAILS',
    colCompany: 'LEHRBETRIEB',
    colStatus: 'STATUS',
    colActions: 'AKTIONEN',
    nameLabel: 'Name:',
    emailLabel: 'E-Mail:',
    classLabel: 'Klasse:',
    titleLabel: 'Titel:',
    startDateLabel: 'Startdatum:',
    endDateLabel: 'Enddatum:',
    expiryDateLabel: 'Ablaufdatum:',
    statusLabel: 'Status:',
    activeBadge: 'Aktiv',
    rejectBtn: 'Ablehnen',
    acceptBtn: 'Annehmen',
    viewTooltip: 'Dossier einsehen',
    noResultsTitle: 'Keine Angebote gefunden',
    noResultsText: 'Versuchen Sie, Ihre Suche anzupassen oder den Filter zu ändern.',
    clearFilters: 'Filter zurücksetzen',
    offerDetails: 'Details zum Praktikumsangebot',
    close: 'Schliessen',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    resetData: 'Demo zurücksetzen',
    addOffer: 'Neues Angebot',
    newOfferTitle: 'Neues Praktikumsangebot erstellen',
    submitOffer: 'Angebot erstellen',
    pendingReviewMsg: 'warten auf Prüfung und Genehmigung',
    approveAllBtn: 'Alle genehmigen',
    viewPendingBtn: 'Ausstehende filtern',
    loginTeacherTitle: 'Lehrer / Dozenten Login',
    loginStudentTitle: 'Studenten Portal Login',
    teacherUsernameLabel: 'Dozenten-E-Mail oder Kennung',
    studentUsernameLabel: 'Matrikelnummer oder E-Mail',
    teacherPlaceholder: 'z.B. teacher@lpu.in oder raheem',
    studentPlaceholder: 'z.B. 12001234 oder student@stud.lpu.in',
    loginTeacherSubmit: 'Als Dozent anmelden',
    loginStudentSubmit: 'Als Student anmelden',
    switchToStudentPrompt: 'Suchen Sie das Studenten-Login?',
    switchToTeacherPrompt: 'Suchen Sie das Dozenten-Login?',
    switchToStudentBtn: 'Zum Studenten-Login wechseln',
    switchToTeacherBtn: 'Zum Dozenten-Login wechseln',
    passwordLabel: 'Passwort',
    rememberMe: 'Angemeldet bleiben',
    forgotPassword: 'Passwort vergessen?',
    signInBtn: 'Anmelden',
    loginFailedMsg: 'Bitte geben Sie Ihre Anmeldedaten ein.',
    logoutSuccessToast: 'Sie wurden erfolgreich abgemeldet.',
    forgotPwToast: 'Anweisungen zum Zurücksetzen wurden an Ihre E-Mail gesendet.'
  }
};

// --------------------------------------------------------
// SECTION 2: GLOBAL VARIABLES
// --------------------------------------------------------

var currentLang = 'en';
var currentFilter = 'all'; // all, accepted, pending, rejected
var appFilter = 'all';
var searchQuery = '';
var currentPage = 1;
var itemsPerPage = 10;
var currentLoginRole = 'teacher'; // teacher or student
var currentUser = null;
var lastAction = null; // saves last action for the undo button

// Arrays holding our working data
var offers = [];
var applications = [];
var interns = [];
var companies = [];
var incidents = [];
var documents = [];

// Helper function to escape HTML characters
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Simple translation lookup function
function t(key, arg1, arg2) {
  var langObj = translations[currentLang] || translations.en;
  var text = langObj[key] || translations.en[key] || key;
  return text;
}

// --------------------------------------------------------
// SECTION 3: LOADING AND SAVING DATA (LOCALSTORAGE)
// --------------------------------------------------------

function loadData() {
  // Check if offers are already saved in browser storage
  var savedOffers = localStorage.getItem('tfb_offers_data_v2');
  if (savedOffers) {
    try {
      offers = JSON.parse(savedOffers);
    } catch (e) {
      offers = JSON.parse(JSON.stringify(initialOffers));
    }
  } else {
    offers = JSON.parse(JSON.stringify(initialOffers));
  }

  // Load applications
  var savedApps = localStorage.getItem('tfb_apps_data_v2');
  if (savedApps) {
    try {
      applications = JSON.parse(savedApps);
    } catch (e) {
      applications = JSON.parse(JSON.stringify(initialApplications));
    }
  } else {
    applications = JSON.parse(JSON.stringify(initialApplications));
  }

  // Load interns
  var savedInterns = localStorage.getItem('tfb_interns_data_v2');
  if (savedInterns) {
    try {
      interns = JSON.parse(savedInterns);
    } catch (e) {
      interns = JSON.parse(JSON.stringify(initialInterns));
    }
  } else {
    interns = JSON.parse(JSON.stringify(initialInterns));
  }

  // Companies, incidents and documents
  companies = JSON.parse(JSON.stringify(initialCompanies));
  incidents = JSON.parse(JSON.stringify(initialIncidents));
  documents = JSON.parse(JSON.stringify(initialDocuments));

  // Language setting
  var savedLang = localStorage.getItem('tfb_lang');
  if (savedLang) {
    currentLang = savedLang;
  }

  // Check if user is logged in
  var sessionUser = sessionStorage.getItem('tfb_auth_user') || localStorage.getItem('tfb_auth_user');
  if (sessionUser) {
    try {
      currentUser = JSON.parse(sessionUser);
    } catch (e) {
      currentUser = null;
    }
  }
}

function saveOffersToStorage() {
  localStorage.setItem('tfb_offers_data_v2', JSON.stringify(offers));
}

function saveAppsToStorage() {
  localStorage.setItem('tfb_apps_data_v2', JSON.stringify(applications));
}

function saveInternsToStorage() {
  localStorage.setItem('tfb_interns_data_v2', JSON.stringify(interns));
}

// --------------------------------------------------------
// SECTION 4: LOGIN AND LOGOUT FUNCTIONS
// --------------------------------------------------------

function toggleLoginRole(role) {
  if (role) {
    currentLoginRole = role;
  } else {
    if (currentLoginRole === 'teacher') {
      currentLoginRole = 'student';
    } else {
      currentLoginRole = 'teacher';
    }
  }
  applyLoginRoleUI();
}

function applyLoginRoleUI() {
  var alertBox = document.getElementById('loginAlert');
  if (alertBox) alertBox.style.display = 'none';

  var title = document.getElementById('loginCardTitle');
  var userLabel = document.getElementById('loginUsernameLabel');
  var userInput = document.getElementById('loginUsername');
  var submitText = document.getElementById('loginSubmitText');
  var switchPrompt = document.getElementById('roleSwitchPrompt');
  var switchBtnText = document.getElementById('roleSwitchBtnText');

  if (currentLoginRole === 'student') {
    if (title) title.textContent = t('loginStudentTitle');
    if (userLabel) userLabel.textContent = t('studentUsernameLabel');
    if (userInput) userInput.placeholder = t('studentPlaceholder');
    if (submitText) submitText.textContent = t('loginStudentSubmit');
    if (switchPrompt) switchPrompt.textContent = t('switchToTeacherPrompt');
    if (switchBtnText) switchBtnText.textContent = t('switchToTeacherBtn');
  } else {
    if (title) title.textContent = t('loginTeacherTitle');
    if (userLabel) userLabel.textContent = t('teacherUsernameLabel');
    if (userInput) userInput.placeholder = t('teacherPlaceholder');
    if (submitText) submitText.textContent = t('loginTeacherSubmit');
    if (switchPrompt) switchPrompt.textContent = t('switchToStudentPrompt');
    if (switchBtnText) switchBtnText.textContent = t('switchToStudentBtn');
  }
}

function handleLogin(e) {
  if (e) e.preventDefault();

  var userInput = document.getElementById('loginUsername');
  var passInput = document.getElementById('loginPassword');
  var rememberCheck = document.getElementById('rememberMeCheckbox');
  var alertBox = document.getElementById('loginAlert');
  var alertText = document.getElementById('loginAlertText');

  var username = userInput ? userInput.value.trim() : '';
  var password = passInput ? passInput.value.trim() : '';

  // If fields are empty show error
  if (!username || !password) {
    if (alertBox) alertBox.style.display = 'flex';
    if (alertText) alertText.textContent = t('loginFailedMsg');
    return;
  }

  if (alertBox) alertBox.style.display = 'none';

  // Format username nicely
  var cleanName = username.indexOf('@') !== -1 ? username.split('@')[0] : username;
  var isRaheem = cleanName.toLowerCase() === 'raheem';

  if (currentLoginRole === 'student') {
    var studentName = isRaheem ? 'Damian Mouzo Otero' : (cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    currentUser = {
      username: cleanName.toLowerCase(),
      email: username.indexOf('@') !== -1 ? username : cleanName.toLowerCase() + '@stud.lpu.in',
      fullName: studentName + ' (Student)',
      role: 'STUDENT'
    };
  } else {
    currentUser = {
      username: isRaheem ? 'raheem' : cleanName.toLowerCase(),
      email: username.indexOf('@') !== -1 ? username : cleanName.toLowerCase() + '@lpu.in',
      fullName: isRaheem ? 'Raheem Sterling' : cleanName.charAt(0).toUpperCase() + cleanName.slice(1) + ' (Faculty Coordinator)',
      role: 'TEACHER'
    };
  }

  // Save session
  sessionStorage.setItem('tfb_auth_user', JSON.stringify(currentUser));
  if (rememberCheck && rememberCheck.checked) {
    localStorage.setItem('tfb_auth_user', JSON.stringify(currentUser));
  } else {
    localStorage.removeItem('tfb_auth_user');
  }

  updateAuthStateUI();
  render();
  showToast('Welcome back, ' + currentUser.fullName + '!', 'success');
}

function handleLogout() {
  sessionStorage.removeItem('tfb_auth_user');
  localStorage.removeItem('tfb_auth_user');
  currentUser = null;

  var passInput = document.getElementById('loginPassword');
  if (passInput) passInput.value = '';

  var userMenuBtn = document.getElementById('userMenuBtn');
  if (userMenuBtn) userMenuBtn.classList.remove('open');

  closeMobileDrawer();
  closeAllModals();
  updateAuthStateUI();
  showToast(t('logoutSuccessToast'), 'info');
}

function togglePasswordVisibility() {
  var passInput = document.getElementById('loginPassword');
  var eyeSvg = document.getElementById('eyeIconSvg');
  if (!passInput) return;

  if (passInput.type === 'password') {
    passInput.type = 'text';
    if (eyeSvg) {
      eyeSvg.innerHTML = '<path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" /><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />';
    }
  } else {
    passInput.type = 'password';
    if (eyeSvg) {
      eyeSvg.innerHTML = '<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />';
    }
  }
}

function updateAuthStateUI() {
  var loginView = document.getElementById('loginView');
  var portalView = document.getElementById('portalView');

  if (currentUser) {
    if (loginView) loginView.style.display = 'none';
    if (portalView) portalView.style.display = 'block';

    var topbarUser = document.getElementById('topbarUsername');
    var dropName = document.getElementById('dropdownUserFullName');
    var dropEmail = document.getElementById('dropdownUserEmail');
    var dropRole = document.getElementById('dropdownRolePill');
    var sideRole = document.getElementById('sidebarRoleTitle');

    if (topbarUser) topbarUser.textContent = currentUser.username;
    if (dropName) dropName.textContent = currentUser.fullName || currentUser.username;
    if (dropEmail) dropEmail.textContent = currentUser.email;
    if (dropRole) dropRole.textContent = currentUser.role;
    if (sideRole) sideRole.textContent = currentUser.role;

    // Show student or teacher banners
    var isStudent = currentUser.role === 'STUDENT';
    var studentBanner = document.getElementById('studentStatusBanner');
    var bannerTitle = document.getElementById('studentBannerTitle');
    var subHeading = document.getElementById('pageSubHeading');

    if (studentBanner) {
      studentBanner.style.display = isStudent ? 'flex' : 'none';
      if (isStudent && bannerTitle) {
        bannerTitle.textContent = 'Student Placement Portal: ' + currentUser.fullName;
      }
    }

    if (subHeading) {
      if (isStudent) {
        subHeading.textContent = 'Explore accredited Lehrbetriebe internship offers and track your placement dossier.';
      } else {
        subHeading.textContent = 'Manage accredited Lehrbetriebe placements, candidate evaluations, and faculty approvals.';
      }
    }
  } else {
    if (loginView) loginView.style.display = 'flex';
    if (portalView) portalView.style.display = 'none';
    applyLoginRoleUI();
  }
}

// --------------------------------------------------------
// SECTION 5: LANGUAGE TRANSLATIONS
// --------------------------------------------------------

function setLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem('tfb_lang', lang);

  var langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    if (lang === 'de') {
      langSwitch.classList.add('de-active');
    } else {
      langSwitch.classList.remove('de-active');
    }
  }

  // Update active state of language buttons
  var langBtns = document.querySelectorAll('.lang-btn, .lang-btn-login');
  for (var i = 0; i < langBtns.length; i++) {
    if (langBtns[i].getAttribute('data-lang') === lang) {
      langBtns[i].classList.add('active');
    } else {
      langBtns[i].classList.remove('active');
    }
  }

  applyTranslations();
  if (currentUser) render();
  showToast(lang === 'de' ? 'Sprache geändert auf Deutsch' : 'Language changed to English', 'info');
}

function applyTranslations() {
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute('data-i18n');
    elements[i].textContent = t(key);
  }

  var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  for (var j = 0; j < placeholders.length; j++) {
    var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
    placeholders[j].placeholder = t(pKey);
  }

  applyLoginRoleUI();
}

// --------------------------------------------------------
// SECTION 6: FILTERS AND SEARCH FOR OFFERS TABLE
// --------------------------------------------------------

function setFilter(filterName) {
  currentFilter = filterName;
  var tabs = document.querySelectorAll('.filter-tab');
  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].getAttribute('data-filter') === filterName) {
      tabs[i].classList.add('active');
      tabs[i].setAttribute('aria-selected', 'true');
    } else {
      tabs[i].classList.remove('active');
      tabs[i].setAttribute('aria-selected', 'false');
    }
  }
  currentPage = 1;
  render();
}

function getFilteredOffers() {
  var result = [];
  var query = searchQuery.toLowerCase().trim();

  for (var i = 0; i < offers.length; i++) {
    var item = offers[i];

    // Check filter tab
    var matchTab = currentFilter === 'all' || item.approvalStatus.toLowerCase() === currentFilter.toLowerCase();
    if (!matchTab) continue;

    // Check search query
    if (query) {
      var matchSearch =
        item.internship.title.toLowerCase().indexOf(query) !== -1 ||
        item.learner.name.toLowerCase().indexOf(query) !== -1 ||
        item.learner.email.toLowerCase().indexOf(query) !== -1 ||
        item.learner.class.toLowerCase().indexOf(query) !== -1 ||
        item.company.name.toLowerCase().indexOf(query) !== -1;
      if (!matchSearch) continue;
    }

    result.push(item);
  }
  return result;
}

function updateCounts() {
  var allCount = offers.length;
  var acceptedCount = 0;
  var rejectedCount = 0;
  var pendingCount = 0;

  for (var i = 0; i < offers.length; i++) {
    var status = offers[i].approvalStatus;
    if (status === 'Accepted') acceptedCount++;
    else if (status === 'Rejected') rejectedCount++;
    else if (status === 'Pending') pendingCount++;
  }

  var bAll = document.getElementById('badgeAll');
  var bAcc = document.getElementById('badgeAccepted');
  var bRej = document.getElementById('badgeRejected');
  var bPen = document.getElementById('badgePending');

  if (bAll) bAll.textContent = allCount;
  if (bAcc) bAcc.textContent = acceptedCount;
  if (bRej) bRej.textContent = rejectedCount;
  if (bPen) bPen.textContent = pendingCount;

  // Pending alert banner for faculty
  var banner = document.getElementById('pendingAlertBanner');
  var bannerCount = document.getElementById('pendingAlertCount');

  if (banner && currentUser) {
    if (currentUser.role === 'TEACHER' && pendingCount > 0) {
      banner.style.display = 'flex';
      if (bannerCount) {
        bannerCount.textContent = pendingCount + ' Internship Offer' + (pendingCount > 1 ? 's' : '');
      }
    } else {
      banner.style.display = 'none';
    }
  }
}

function goToPage(pageNum) {
  currentPage = pageNum;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --------------------------------------------------------
// SECTION 7: FAST 1-CLICK ACCEPT AND REJECT BUTTONS
// --------------------------------------------------------

// 1-Click row Accept button
function quickAccept(offerId) {
  var offer = null;
  for (var i = 0; i < offers.length; i++) {
    if (offers[i].id === offerId) {
      offer = offers[i];
      break;
    }
  }
  if (!offer) return;

  // Save for undo button
  lastAction = {
    type: 'status_change',
    offerId: offerId,
    prevStatus: offer.approvalStatus,
    newStatus: 'Accepted'
  };

  offer.approvalStatus = 'Accepted';

  // Synchronize with applications list
  for (var j = 0; j < applications.length; j++) {
    if (applications[j].student.toLowerCase() === offer.learner.name.toLowerCase()) {
      applications[j].status = 'Accepted';
      applications[j].badgeClass = 'pill-accepted';
      break;
    }
  }

  // Synchronize with intern profiles
  for (var k = 0; k < interns.length; k++) {
    if (interns[k].name.toLowerCase() === offer.learner.name.toLowerCase()) {
      interns[k].status = 'Assigned';
      interns[k].placement = offer.company.name;
      break;
    }
  }

  saveOffersToStorage();
  saveAppsToStorage();
  saveInternsToStorage();
  render();

  showToast('✓ Accepted internship for ' + offer.learner.name + ' at ' + offer.company.name, 'success', undoLastAction);
}

// 1-Click row Reject button
function quickReject(offerId) {
  var offer = null;
  for (var i = 0; i < offers.length; i++) {
    if (offers[i].id === offerId) {
      offer = offers[i];
      break;
    }
  }
  if (!offer) return;

  // Save for undo button
  lastAction = {
    type: 'status_change',
    offerId: offerId,
    prevStatus: offer.approvalStatus,
    newStatus: 'Rejected'
  };

  offer.approvalStatus = 'Rejected';

  // Synchronize with applications list
  for (var j = 0; j < applications.length; j++) {
    if (applications[j].student.toLowerCase() === offer.learner.name.toLowerCase()) {
      applications[j].status = 'Rejected';
      applications[j].badgeClass = 'pill-rejected';
      break;
    }
  }

  // Synchronize with intern profiles
  for (var k = 0; k < interns.length; k++) {
    if (interns[k].name.toLowerCase() === offer.learner.name.toLowerCase()) {
      interns[k].status = 'Available';
      interns[k].placement = 'Seeking Placement';
      break;
    }
  }

  saveOffersToStorage();
  saveAppsToStorage();
  saveInternsToStorage();
  render();

  showToast('✕ Rejected internship offer for ' + offer.learner.name, 'danger', undoLastAction);
}

// Change status from the dropdown menu
function quickSetStatus(offerId, newStatus) {
  closeAllStatusMenus();

  var offer = null;
  for (var i = 0; i < offers.length; i++) {
    if (offers[i].id === offerId) {
      offer = offers[i];
      break;
    }
  }
  if (!offer || offer.approvalStatus === newStatus) return;

  lastAction = {
    type: 'status_change',
    offerId: offerId,
    prevStatus: offer.approvalStatus,
    newStatus: newStatus
  };

  offer.approvalStatus = newStatus;

  // Sync applications
  for (var j = 0; j < applications.length; j++) {
    if (applications[j].student.toLowerCase() === offer.learner.name.toLowerCase()) {
      applications[j].status = newStatus;
      applications[j].badgeClass = newStatus === 'Accepted' ? 'pill-accepted' : newStatus === 'Rejected' ? 'pill-rejected' : 'pill-pending';
      break;
    }
  }

  // Sync interns
  for (var k = 0; k < interns.length; k++) {
    if (interns[k].name.toLowerCase() === offer.learner.name.toLowerCase()) {
      interns[k].status = newStatus === 'Accepted' ? 'Assigned' : newStatus === 'Pending' ? 'Pending' : 'Available';
      break;
    }
  }

  saveOffersToStorage();
  saveAppsToStorage();
  saveInternsToStorage();
  render();

  var toastType = newStatus === 'Accepted' ? 'success' : newStatus === 'Rejected' ? 'danger' : 'info';
  showToast('Status updated to ' + newStatus + ' for ' + offer.learner.name, toastType, undoLastAction);
}

// Toggle status dropdown menu open / close
function toggleStatusMenu(offerId, event) {
  if (event) event.stopPropagation();

  var wrap = document.getElementById('statusWrap-' + offerId);
  if (!wrap) return;

  var isOpen = wrap.classList.contains('open');
  closeAllStatusMenus();

  if (!isOpen) {
    wrap.classList.add('open');
  }
}

function closeAllStatusMenus() {
  var menus = document.querySelectorAll('.status-dropdown-wrap.open');
  for (var i = 0; i < menus.length; i++) {
    menus[i].classList.remove('open');
  }
}

// Batch Approve All Pending Offers button
function approveAllPending() {
  var pendingList = [];
  for (var i = 0; i < offers.length; i++) {
    if (offers[i].approvalStatus === 'Pending') {
      offers[i].approvalStatus = 'Accepted';
      pendingList.push(offers[i]);

      for (var j = 0; j < applications.length; j++) {
        if (applications[j].student.toLowerCase() === offers[i].learner.name.toLowerCase()) {
          applications[j].status = 'Accepted';
          applications[j].badgeClass = 'pill-accepted';
          break;
        }
      }
    }
  }

  if (pendingList.length === 0) {
    showToast('No pending offers to approve.', 'info');
    return;
  }

  saveOffersToStorage();
  saveAppsToStorage();
  render();
  showToast('✓ All ' + pendingList.length + ' pending internship offers approved successfully!', 'success');
}

// Undo button clicked inside toast
function undoLastAction() {
  if (!lastAction) return;

  var offerId = lastAction.offerId;
  var prevStatus = lastAction.prevStatus;

  for (var i = 0; i < offers.length; i++) {
    if (offers[i].id === offerId) {
      offers[i].approvalStatus = prevStatus;
      break;
    }
  }

  saveOffersToStorage();
  render();
  showToast('Undone: Status reverted back to ' + prevStatus, 'info');
  lastAction = null;
}

function studentApply(offerId) {
  var offer = null;
  for (var i = 0; i < offers.length; i++) {
    if (offers[i].id === offerId) {
      offer = offers[i];
      break;
    }
  }
  if (!offer) return;
  showToast('Application submitted for ' + offer.internship.title + ' at ' + offer.company.name + '!', 'success');
}

// --------------------------------------------------------
// SECTION 8: TABLE RENDERING
// --------------------------------------------------------

function render() {
  updateCounts();

  var filtered = getFilteredOffers();
  var isTeacher = !currentUser || currentUser.role === 'TEACHER';

  var tbody = document.getElementById('offersTableBody');
  var emptyState = document.getElementById('emptyState');
  var pageInfoText = document.getElementById('pageInfoText');
  var pageNumbers = document.getElementById('pageNumbers');
  var prevBtn = document.getElementById('prevPageBtn');
  var nextBtn = document.getElementById('nextPageBtn');

  if (!tbody) return;

  // Show empty message if nothing matches
  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    if (pageInfoText) pageInfoText.textContent = 'Page 1 of 1';
    if (pageNumbers) pageNumbers.innerHTML = '<button class="page-number-btn active">Page 1</button>';
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  // Calculate pagination
  var totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  var startIndex = (currentPage - 1) * itemsPerPage;
  var pagedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  // Build table rows HTML
  var html = '';
  for (var i = 0; i < pagedItems.length; i++) {
    var offer = pagedItems[i];
    var serialNum = offer.sn !== undefined ? offer.sn : (startIndex + i + 1);
    var statusClass = 'status-' + offer.approvalStatus.toLowerCase();
    var isPending = offer.approvalStatus === 'Pending';
    var isAccepted = offer.approvalStatus === 'Accepted';
    var isRejected = offer.approvalStatus === 'Rejected';

    // Buttons depending on Teacher vs Student role
    var actionsHtml = '';
    if (isTeacher) {
      if (isPending) {
        actionsHtml =
          '<button class="btn-row-reject" onclick="app.quickReject(\'' + offer.id + '\')" title="Reject Application">' +
            '<svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>' +
            '<span>' + t('rejectBtn') + '</span>' +
          '</button>' +
          '<button class="btn-row-accept" onclick="app.quickAccept(\'' + offer.id + '\')" title="Approve Application">' +
            '<svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' +
            '<span>' + t('acceptBtn') + '</span>' +
          '</button>';
      } else if (isAccepted) {
        actionsHtml =
          '<button class="btn-row-subtle-reject" onclick="app.quickReject(\'' + offer.id + '\')" title="Change to Rejected">' +
            'Reject' +
          '</button>';
      } else if (isRejected) {
        actionsHtml =
          '<button class="btn-row-subtle-accept" onclick="app.quickAccept(\'' + offer.id + '\')" title="Re-approve Offer">' +
            'Re-Approve' +
          '</button>';
      }

      actionsHtml +=
        '<button class="btn-view-action" title="' + t('viewTooltip') + '" onclick="app.viewOfferDetails(\'' + offer.id + '\')">' +
          '<svg viewBox="0 0 20 20" width="15" height="15" fill="currentColor">' +
            '<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />' +
            '<path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />' +
          '</svg>' +
        '</button>';
    } else {
      // Student view
      actionsHtml =
        '<button class="btn-view-action" title="' + t('viewTooltip') + '" onclick="app.viewOfferDetails(\'' + offer.id + '\')">' +
          '<svg viewBox="0 0 20 20" width="15" height="15" fill="currentColor">' +
            '<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />' +
            '<path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />' +
          '</svg>' +
        '</button>' +
        (isPending ? '<button class="btn-apply-action" onclick="app.studentApply(\'' + offer.id + '\')">Apply Now</button>' : '');
    }

    // Status pill and interactive popover dropdown menu
    var statusDropdownHtml =
      '<div class="status-dropdown-wrap" id="statusWrap-' + offer.id + '">' +
        '<button class="status-pill ' + statusClass + (isTeacher ? ' status-pill-interactive' : '') + '" ' +
          (isTeacher ? 'onclick="app.toggleStatusMenu(\'' + offer.id + '\', event)"' : '') +
          ' title="' + (isTeacher ? 'Click to change status' : offer.approvalStatus) + '">' +
          '<span class="dot"></span>' +
          '<span>' + t(offer.approvalStatus.toLowerCase()) + '</span>' +
          (isTeacher ?
            '<svg class="pill-chevron" viewBox="0 0 20 20" width="12" height="12" fill="currentColor">' +
              '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>' +
            '</svg>' : '') +
        '</button>' +
        (isTeacher ?
          '<div class="status-menu">' +
            '<div class="status-menu-header">Change Status</div>' +
            '<button class="status-menu-item" onclick="app.quickSetStatus(\'' + offer.id + '\', \'Accepted\')">' +
              '<span class="menu-dot dot-green"></span>' +
              '<span>Set to Accepted</span>' +
              (isAccepted ? '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : '') +
            '</button>' +
            '<button class="status-menu-item" onclick="app.quickSetStatus(\'' + offer.id + '\', \'Pending\')">' +
              '<span class="menu-dot dot-amber"></span>' +
              '<span>Set to Pending</span>' +
              (isPending ? '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : '') +
            '</button>' +
            '<button class="status-menu-item" onclick="app.quickSetStatus(\'' + offer.id + '\', \'Rejected\')">' +
              '<span class="menu-dot dot-red"></span>' +
              '<span>Set to Rejected</span>' +
              (isRejected ? '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : '') +
            '</button>' +
          '</div>' : '') +
      '</div>';

    html +=
      '<tr data-offer-id="' + offer.id + '">' +
        '<td class="td-sn">' + serialNum + '</td>' +
        '<td class="td-learner">' +
          '<div class="learner-cell">' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('nameLabel') + '</span>' +
              '<span class="field-val-name">' + escapeHTML(offer.learner.name) + '</span>' +
            '</div>' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('emailLabel') + '</span>' +
              '<span class="field-val-email">' + escapeHTML(offer.learner.email) + '</span>' +
            '</div>' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('classLabel') + '</span>' +
              '<span class="field-val-class">' + escapeHTML(offer.learner.class) + '</span>' +
            '</div>' +
          '</div>' +
        '</td>' +
        '<td class="td-internship">' +
          '<div class="internship-cell">' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('titleLabel') + '</span>' +
              '<span class="field-val-title">' + escapeHTML(offer.internship.title) + '</span>' +
            '</div>' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('startDateLabel') + '</span>' +
              '<span>' + escapeHTML(offer.internship.startDate) + '</span>' +
            '</div>' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('endDateLabel') + '</span>' +
              '<span>' + escapeHTML(offer.internship.endDate) + '</span>' +
            '</div>' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('expiryDateLabel') + '</span>' +
              '<span>' + escapeHTML(offer.internship.expiryDate) + '</span>' +
            '</div>' +
            '<div class="field-row">' +
              '<span class="field-label">' + t('statusLabel') + '</span>' +
              '<span class="status-active-badge">' +
                '<span class="dot"></span>' +
                t('activeBadge') +
              '</span>' +
            '</div>' +
          '</div>' +
        '</td>' +
        '<td class="td-company">' +
          '<div class="company-cell">' + escapeHTML(offer.company.name) + '</div>' +
        '</td>' +
        '<td class="td-status">' +
          statusDropdownHtml +
        '</td>' +
        '<td class="td-actions">' +
          '<div class="actions-cell">' +
            actionsHtml +
          '</div>' +
        '</td>' +
      '</tr>';
  }

  tbody.innerHTML = html;

  // Pagination updates
  if (pageInfoText) {
    pageInfoText.textContent = 'Page ' + currentPage + ' of ' + totalPages;
  }
  if (prevBtn) prevBtn.disabled = currentPage <= 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

  if (pageNumbers) {
    var btnsHtml = '';
    for (var p = 1; p <= totalPages; p++) {
      btnsHtml += '<button class="page-number-btn ' + (p === currentPage ? 'active' : '') + '" onclick="app.goToPage(' + p + ')">Page ' + p + '</button>';
    }
    pageNumbers.innerHTML = btnsHtml;
  }
}

// --------------------------------------------------------
// SECTION 9: MODAL WINDOWS AND DIALOGS
// --------------------------------------------------------

function openModal(modalId) {
  closeMobileDrawer();
  closeAllStatusMenus();
  closeAllModals();

  var userMenuBtn = document.getElementById('userMenuBtn');
  if (userMenuBtn) userMenuBtn.classList.remove('open');

  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.classList.add('modal-open');

    // Highlight corresponding sidebar item
    var navMap = {
      dashboardModalOverlay: 'dashboard',
      applicationsModalOverlay: 'applications',
      assignModalOverlay: 'assign',
      profilesModalOverlay: 'profiles',
      companiesModalOverlay: 'companies',
      incidentsModalOverlay: 'incidents',
      documentsModalOverlay: 'documents',
      profileModalOverlay: 'profile',
      passwordModalOverlay: 'password',
      addOfferModalOverlay: 'offers',
      viewModalOverlay: 'offers',
      confirmModalOverlay: 'offers'
    };
    if (navMap[modalId]) {
      setActiveSidebar(navMap[modalId]);
    }

    // Refresh content for the opened modal
    if (modalId === 'dashboardModalOverlay') {
      var pendingCount = 0;
      for (var i = 0; i < offers.length; i++) {
        if (offers[i].approvalStatus === 'Pending') pendingCount++;
      }
      var kpi = document.getElementById('kpiPendingCount');
      if (kpi) kpi.textContent = pendingCount;
    } else if (modalId === 'applicationsModalOverlay') {
      renderApplications(applications);
    } else if (modalId === 'profilesModalOverlay') {
      renderInterns(interns);
    } else if (modalId === 'companiesModalOverlay') {
      renderCompanies(companies);
    } else if (modalId === 'incidentsModalOverlay') {
      renderIncidents();
    } else if (modalId === 'documentsModalOverlay') {
      renderDocuments();
    } else if (modalId === 'profileModalOverlay') {
      populateProfileForm();
    }
  }
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  setActiveSidebar('offers');
}

function closeAllModals() {
  var modals = document.querySelectorAll('.modal-overlay');
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('open');
  }
  document.body.classList.remove('modal-open');
}

function showOffersView() {
  closeAllModals();
  setActiveSidebar('offers');
  closeMobileDrawer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setActiveSidebar(nav) {
  var links = document.querySelectorAll('.sidebar-nav a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('data-nav') === nav) {
      links[i].classList.add('active');
    } else {
      links[i].classList.remove('active');
    }
  }
}

// --------------------------------------------------------
// SECTION 10: MOBILE DRAWER CONTROLS
// --------------------------------------------------------

function toggleMobileDrawer() {
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebarBackdrop');
  if (!sidebar) return;

  if (sidebar.classList.contains('mobile-open')) {
    closeMobileDrawer();
  } else {
    sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('open');
  }
}

function closeMobileDrawer() {
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('open');
}

// --------------------------------------------------------
// SECTION 11: VIEW OFFER DOSSIER MODAL
// --------------------------------------------------------

function viewOfferDetails(offerId) {
  var offer = null;
  for (var i = 0; i < offers.length; i++) {
    if (offers[i].id === offerId) {
      offer = offers[i];
      break;
    }
  }
  if (!offer) return;

  var titleEl = document.getElementById('viewModalTitle');
  var bodyEl = document.getElementById('viewModalBody');
  var actionsEl = document.getElementById('modalDynamicActions');

  if (titleEl) titleEl.textContent = offer.internship.title;

  var statusClass = 'status-' + offer.approvalStatus.toLowerCase();
  var isTeacher = !currentUser || currentUser.role === 'TEACHER';

  if (bodyEl) {
    bodyEl.innerHTML =
      '<div class="view-dossier-wrap">' +
        '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color); flex-wrap: wrap; gap: 10px;">' +
          '<div>' +
            '<span class="modal-subtitle">Enrollment & Contract Dossier</span>' +
            '<h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 2px;">' + escapeHTML(offer.learner.name) + '</h3>' +
          '</div>' +
          '<span class="status-pill ' + statusClass + '" style="padding: 6px 14px; font-size: 13px;">' +
            '<span class="dot"></span>' +
            t(offer.approvalStatus.toLowerCase()) +
          '</span>' +
        '</div>' +
        '<div class="form-grid" style="margin-bottom: 16px;">' +
          '<div class="dossier-card" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 14px;">' +
            '<h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 8px;">Candidate Information</h4>' +
            '<p style="margin-bottom: 4px;"><strong>Class:</strong> ' + escapeHTML(offer.learner.class) + '</p>' +
            '<p style="margin-bottom: 4px;"><strong>Email:</strong> ' + escapeHTML(offer.learner.email) + '</p>' +
            '<p style="margin-bottom: 4px;"><strong>Phone:</strong> ' + escapeHTML(offer.learner.phone || '+91 98765 43210') + '</p>' +
            '<p><strong>Campus Base:</strong> ' + escapeHTML(offer.learner.location || 'Lovely Professional University') + '</p>' +
          '</div>' +
          '<div class="dossier-card" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 14px;">' +
            '<h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 8px;">Partner Lehrbetrieb</h4>' +
            '<p style="margin-bottom: 4px;"><strong>Company:</strong> ' + escapeHTML(offer.company.name) + '</p>' +
            '<p style="margin-bottom: 4px;"><strong>Supervisor:</strong> ' + escapeHTML(offer.company.contactPerson) + '</p>' +
            '<p style="margin-bottom: 4px;"><strong>Address:</strong> ' + escapeHTML(offer.company.address) + '</p>' +
            '<p><strong>Email:</strong> ' + escapeHTML(offer.company.email) + '</p>' +
          '</div>' +
        '</div>' +
        '<div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 14px;">' +
          '<h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 6px;">Duration & Timeline</h4>' +
          '<div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 12.5px;">' +
            '<div><strong>Start Date:</strong> ' + escapeHTML(offer.internship.startDate) + '</div>' +
            '<div><strong>End Date:</strong> ' + escapeHTML(offer.internship.endDate) + '</div>' +
            '<div><strong>Application Cutoff:</strong> ' + escapeHTML(offer.internship.expiryDate) + '</div>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 6px;">Training Objectives</h4>' +
          '<p style="font-size: 13px; color: #475569; line-height: 1.6; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid var(--border-color);">' +
            escapeHTML(offer.internship.description) +
          '</p>' +
        '</div>' +
      '</div>';
  }

  // Footer actions inside details modal
  if (actionsEl) {
    if (isTeacher) {
      actionsEl.innerHTML =
        '<button class="btn-row-reject" style="padding: 7px 14px; font-size: 12.5px;" onclick="app.quickReject(\'' + offer.id + '\'); app.viewOfferDetails(\'' + offer.id + '\');">' +
          '<svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>' +
          'Reject Offer' +
        '</button>' +
        '<button class="btn-row-accept" style="padding: 7px 14px; font-size: 12.5px;" onclick="app.quickAccept(\'' + offer.id + '\'); app.viewOfferDetails(\'' + offer.id + '\');">' +
          '<svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' +
          'Approve Internship' +
        '</button>' +
        (offer.approvalStatus !== 'Pending' ?
          '<button class="btn-modal-secondary" style="padding: 7px 12px; font-size: 12px;" onclick="app.quickSetStatus(\'' + offer.id + '\', \'Pending\'); app.viewOfferDetails(\'' + offer.id + '\');">' +
            'Reset to Pending' +
          '</button>' : '');
    } else {
      actionsEl.innerHTML =
        '<button class="btn-modal-secondary" onclick="window.print()">' +
          '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" style="margin-right: 4px;">' +
            '<path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"/>' +
          '</svg>' +
          'Print Dossier' +
        '</button>';
    }
  }

  openModal('viewModalOverlay');
}

function closeViewModal() {
  closeModal('viewModalOverlay');
}

// --------------------------------------------------------
// SECTION 12: CREATE NEW OFFER FORM
// --------------------------------------------------------

function openAddOfferModal() {
  openModal('addOfferModalOverlay');
  var input = document.getElementById('newLearnerName');
  if (input) input.focus();
}

function closeAddOfferModal() {
  closeModal('addOfferModalOverlay');
  var form = document.getElementById('addOfferForm');
  if (form) form.reset();
}

function handleCreateOffer() {
  var name = document.getElementById('newLearnerName').value.trim();
  var email = document.getElementById('newLearnerEmail').value.trim();
  var lClass = document.getElementById('newLearnerClass').value.trim();
  var title = document.getElementById('newOfferTitle').value.trim();
  var company = document.getElementById('newCompany').value.trim();
  var startDate = document.getElementById('newStartDate').value;
  var endDate = document.getElementById('newEndDate').value;
  var expiryDate = document.getElementById('newExpiryDate').value;
  var initialStatus = document.getElementById('newInitialStatus').value;

  if (!name || !title || !company) return;

  function formatDate(d) {
    if (!d) return 'TBD';
    var parts = d.split('-');
    if (parts.length === 3) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var m = parseInt(parts[1], 10) - 1;
      return (months[m] || 'Month') + ' ' + parts[2] + ', ' + parts[0];
    }
    return d;
  }

  var newOffer = {
    id: 'offer-' + Date.now(),
    sn: 1,
    learner: {
      name: name,
      email: email,
      class: lClass,
      phone: '+91 98765 00000',
      location: 'Lovely Professional University'
    },
    internship: {
      title: title,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      expiryDate: formatDate(expiryDate),
      status: 'Active',
      description: 'Official Lehrbetrieb internship placement.'
    },
    company: {
      name: company,
      address: 'Accredited Partner Campus',
      contactPerson: 'Placement Director',
      email: 'placement@lpu.in'
    },
    approvalStatus: initialStatus
  };

  offers.unshift(newOffer);
  for (var i = 0; i < offers.length; i++) {
    offers[i].sn = i + 1;
  }

  saveOffersToStorage();
  closeAddOfferModal();
  render();
  showToast('New internship offer created successfully!', 'success');
}

// --------------------------------------------------------
// SECTION 13: TOAST NOTIFICATIONS WITH UNDO SUPPORT
// --------------------------------------------------------

function showToast(message, type, undoCallback) {
  if (!type) type = 'info';
  var container = document.getElementById('toastContainer');
  if (!container) return;

  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;

  var iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg viewBox="0 0 20 20" width="18" height="18" fill="#16a34a"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>';
  } else if (type === 'danger') {
    iconSvg = '<svg viewBox="0 0 20 20" width="18" height="18" fill="#ef4444"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>';
  } else {
    iconSvg = '<svg viewBox="0 0 20 20" width="18" height="18" fill="#ea580c"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>';
  }

  var undoHtml = undoCallback ? '<button class="toast-btn-undo">Undo</button>' : '';
  toast.innerHTML = iconSvg + '<span class="toast-msg">' + message + '</span>' + undoHtml + '<button class="toast-close">&times;</button>';

  if (undoCallback) {
    var undoBtn = toast.querySelector('.toast-btn-undo');
    if (undoBtn) {
      undoBtn.onclick = function() {
        undoCallback();
        toast.remove();
      };
    }
  }

  var closeBtn = toast.querySelector('.toast-close');
  if (closeBtn) {
    closeBtn.onclick = function() {
      toast.remove();
    };
  }

  container.appendChild(toast);

  setTimeout(function() {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.25s, transform 0.25s';
      setTimeout(function() { toast.remove(); }, 250);
    }
  }, 4500);
}

// --------------------------------------------------------
// SECTION 14: APPLICATIONS DIALOG
// --------------------------------------------------------

function setAppFilter(filterName) {
  appFilter = filterName;
  var chips = document.querySelectorAll('.app-filter-chip');
  for (var i = 0; i < chips.length; i++) {
    if (chips[i].getAttribute('data-appfilter') === filterName) {
      chips[i].classList.add('active');
    } else {
      chips[i].classList.remove('active');
    }
  }
  var searchInp = document.getElementById('appSearchInput');
  filterApplications(searchInp ? searchInp.value : '');
}

function renderApplications(list) {
  if (!list) list = applications;
  var tbody = document.getElementById('applicationsTableBody');
  var badge = document.getElementById('appsCountBadge');
  if (badge) badge.textContent = list.length + ' Applications';
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #94a3b8; padding: 24px;">No applications found matching your query.</td></tr>';
    return;
  }

  var html = '';
  for (var i = 0; i < list.length; i++) {
    var app = list[i];
    var isPending = app.status.indexOf('Pending') !== -1 || app.status.indexOf('Awaiting') !== -1 || app.status === 'Screening' || app.status === 'Under Review' || app.status === 'Technical Interview';
    var isAccepted = app.status === 'Accepted' || app.status === 'Placement Confirmed';

    var actionBtns = '';
    if (isPending) {
      actionBtns =
        '<button class="btn-row-accept" style="padding: 4px 9px; font-size: 11px;" onclick="app.approveApplication(\'' + app.id + '\')" title="Approve application">' +
          '<svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' +
          'Approve' +
        '</button>' +
        '<button class="btn-row-reject" style="padding: 4px 9px; font-size: 11px;" onclick="app.rejectApplication(\'' + app.id + '\')" title="Reject application">' +
          '<svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>' +
          'Reject' +
        '</button>';
    } else if (isAccepted) {
      actionBtns =
        '<button class="btn-row-subtle-reject" style="padding: 3px 8px; font-size: 11px;" onclick="app.rejectApplication(\'' + app.id + '\')">' +
          'Reject' +
        '</button>';
    } else {
      actionBtns =
        '<button class="btn-row-subtle-accept" style="padding: 3px 8px; font-size: 11px;" onclick="app.approveApplication(\'' + app.id + '\')">' +
          'Approve' +
        '</button>';
    }

    actionBtns += '<button class="btn-action-outline" onclick="app.viewApplicationDossier(\'' + app.id + '\')">Dossier</button>';

    html +=
      '<tr>' +
        '<td>' +
          '<strong>' + escapeHTML(app.student) + '</strong><br>' +
          '<small style="color: #64748b;">' + escapeHTML(app.class) + ' &bull; ' + escapeHTML(app.email) + '</small>' +
        '</td>' +
        '<td><strong>' + escapeHTML(app.company) + '</strong></td>' +
        '<td>' + escapeHTML(app.position) + '</td>' +
        '<td>' + escapeHTML(app.date) + '</td>' +
        '<td><span class="status-pill ' + app.badgeClass + '">' + escapeHTML(app.status) + '</span></td>' +
        '<td>' +
          '<div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">' +
            actionBtns +
          '</div>' +
        '</td>' +
      '</tr>';
  }

  tbody.innerHTML = html;
}

function filterApplications(query) {
  var q = (query || '').toLowerCase().trim();
  var filtered = [];

  for (var i = 0; i < applications.length; i++) {
    var a = applications[i];
    var matchQuery = !q ||
      a.student.toLowerCase().indexOf(q) !== -1 ||
      a.company.toLowerCase().indexOf(q) !== -1 ||
      a.position.toLowerCase().indexOf(q) !== -1 ||
      a.class.toLowerCase().indexOf(q) !== -1;

    if (!matchQuery) continue;

    if (appFilter === 'pending') {
      var isPending = a.status.indexOf('Pending') !== -1 || a.status.indexOf('Awaiting') !== -1 || a.status === 'Screening' || a.status === 'Under Review' || a.status === 'Technical Interview';
      if (!isPending) continue;
    } else if (appFilter === 'accepted') {
      var isAccepted = a.status === 'Accepted' || a.status === 'Placement Confirmed';
      if (!isAccepted) continue;
    }

    filtered.push(a);
  }

  renderApplications(filtered);
}

function approveApplication(id) {
  var target = null;
  for (var i = 0; i < applications.length; i++) {
    if (applications[i].id === id) {
      target = applications[i];
      break;
    }
  }

  if (target) {
    target.status = 'Accepted';
    target.badgeClass = 'pill-accepted';

    // Sync with offers
    for (var j = 0; j < offers.length; j++) {
      if (offers[j].learner.name.toLowerCase() === target.student.toLowerCase()) {
        offers[j].approvalStatus = 'Accepted';
        saveOffersToStorage();
        render();
        break;
      }
    }

    // Sync with interns
    for (var k = 0; k < interns.length; k++) {
      if (interns[k].name.toLowerCase() === target.student.toLowerCase()) {
        interns[k].status = 'Assigned';
        interns[k].placement = target.company;
        saveInternsToStorage();
        break;
      }
    }

    saveAppsToStorage();
    renderApplications();
    showToast('✓ Application for ' + target.student + ' approved!', 'success');
  }
}

function rejectApplication(id) {
  var target = null;
  for (var i = 0; i < applications.length; i++) {
    if (applications[i].id === id) {
      target = applications[i];
      break;
    }
  }

  if (target) {
    target.status = 'Rejected';
    target.badgeClass = 'pill-rejected';

    // Sync with offers
    for (var j = 0; j < offers.length; j++) {
      if (offers[j].learner.name.toLowerCase() === target.student.toLowerCase()) {
        offers[j].approvalStatus = 'Rejected';
        saveOffersToStorage();
        render();
        break;
      }
    }

    // Sync with interns
    for (var k = 0; k < interns.length; k++) {
      if (interns[k].name.toLowerCase() === target.student.toLowerCase()) {
        interns[k].status = 'Available';
        interns[k].placement = 'Seeking Placement';
        saveInternsToStorage();
        break;
      }
    }

    saveAppsToStorage();
    renderApplications();
    showToast('✕ Application for ' + target.student + ' rejected.', 'danger');
  }
}

function viewApplicationDossier(id) {
  var target = null;
  for (var i = 0; i < applications.length; i++) {
    if (applications[i].id === id) {
      target = applications[i];
      break;
    }
  }

  if (target) {
    var offer = null;
    for (var j = 0; j < offers.length; j++) {
      if (offers[j].learner.name.toLowerCase() === target.student.toLowerCase()) {
        offer = offers[j];
        break;
      }
    }
    if (offer) {
      viewOfferDetails(offer.id);
    } else {
      showToast('Candidate: ' + target.student + ' (' + target.position + ' at ' + target.company + ')', 'info');
    }
  }
}

// --------------------------------------------------------
// SECTION 15: INTERN PROFILES DIRECTORY
// --------------------------------------------------------

function renderInterns(list) {
  if (!list) list = interns;
  var grid = document.getElementById('internsCardGrid');
  var badge = document.getElementById('internsCountBadge');
  if (badge) badge.textContent = list.length + ' Registered Interns';
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div style="grid-column: span 3; text-align: center; color: #94a3b8; padding: 24px;">No intern profiles found matching search criteria.</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < list.length; i++) {
    var int = list[i];
    var parts = int.name.split(' ');
    var initials = '';
    for (var p = 0; p < parts.length && p < 2; p++) {
      initials += parts[p][0];
    }

    var isAssigned = int.status === 'Assigned';
    var isPending = int.status === 'Pending';

    var tagsHtml = '';
    for (var t = 0; t < int.tags.length; t++) {
      tagsHtml += '<span class="tag-skill">' + escapeHTML(int.tags[t]) + '</span>';
    }

    html +=
      '<div class="intern-card">' +
        '<div class="intern-card-header">' +
          '<div class="intern-avatar">' + initials + '</div>' +
          '<div>' +
            '<strong>' + escapeHTML(int.name) + '</strong><br>' +
            '<small style="color: #64748b;">' + escapeHTML(int.class) + '</small>' +
          '</div>' +
        '</div>' +
        '<div style="font-size: 12px; display: flex; flex-direction: column; gap: 4px;">' +
          '<div style="font-weight: 600; color: #0f172a;">' + escapeHTML(int.placement) + '</div>' +
          '<div style="color: #64748b;">✉ ' + escapeHTML(int.email) + '</div>' +
          '<div style="color: #64748b;">☎ ' + escapeHTML(int.phone) + '</div>' +
        '</div>' +
        '<div class="intern-tags">' +
          tagsHtml +
        '</div>' +
        '<div class="intern-actions">' +
          (isPending ? '<button class="btn-row-accept" style="padding: 5px 10px; font-size: 11px; flex: 1;" onclick="app.quickAccept(\'offer-3\')">Approve</button>' : '') +
          '<button class="btn-card-link" onclick="app.downloadCV(\'' + escapeHTML(int.name) + '\')">📄 CV (PDF)</button>' +
          '<button class="btn-card-link" onclick="app.openPortfolio(\'' + escapeHTML(int.name) + '\')">🔗 Portfolio</button>' +
        '</div>' +
      '</div>';
  }

  grid.innerHTML = html;
}

function filterInternCards(query) {
  var q = (query || '').toLowerCase().trim();
  var filtered = [];
  for (var i = 0; i < interns.length; i++) {
    var int = interns[i];
    var tagMatch = false;
    for (var t = 0; t < int.tags.length; t++) {
      if (int.tags[t].toLowerCase().indexOf(q) !== -1) {
        tagMatch = true;
        break;
      }
    }
    if (
      int.name.toLowerCase().indexOf(q) !== -1 ||
      int.class.toLowerCase().indexOf(q) !== -1 ||
      int.placement.toLowerCase().indexOf(q) !== -1 ||
      tagMatch
    ) {
      filtered.push(int);
    }
  }
  renderInterns(filtered);
}

function downloadCV(name) {
  showToast('Downloading verified resume for ' + name + '...', 'info');
}

function openPortfolio(name) {
  showToast('Opening student GitHub & portfolio for ' + name, 'info');
}

// --------------------------------------------------------
// SECTION 16: COMPANIES DIRECTORY
// --------------------------------------------------------

function renderCompanies(list) {
  if (!list) list = companies;
  var grid = document.getElementById('companiesCardGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div style="grid-column: span 3; text-align: center; color: #94a3b8; padding: 24px;">No partner Lehrbetriebe matching search.</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < list.length; i++) {
    var c = list[i];
    html +=
      '<div class="company-card">' +
        '<div class="company-card-header">' +
          '<div class="company-logo-icon">🏢</div>' +
          '<div>' +
            '<strong>' + escapeHTML(c.name) + '</strong><br>' +
            '<small style="color: #64748b;">' + escapeHTML(c.sector) + '</small>' +
          '</div>' +
        '</div>' +
        '<div style="font-size: 12px; display: flex; flex-direction: column; gap: 4px; color: #475569;">' +
          '<div>📍 ' + escapeHTML(c.location) + '</div>' +
          '<div>👤 Mentor: <strong>' + escapeHTML(c.mentor) + '</strong></div>' +
          '<div>✉ ' + escapeHTML(c.email) + '</div>' +
        '</div>' +
        '<div class="company-footer">' +
          '<span class="badge-count" style="font-size: 11px; padding: 3px 8px;">' + c.activeInterns + ' Active Intern' + (c.activeInterns > 1 ? 's' : '') + '</span>' +
          '<button class="btn-card-link" onclick="app.contactCompany(\'' + escapeHTML(c.email) + '\')">Contact</button>' +
        '</div>' +
      '</div>';
  }

  grid.innerHTML = html;
}

function filterCompanies(query) {
  var q = (query || '').toLowerCase().trim();
  var filtered = [];
  for (var i = 0; i < companies.length; i++) {
    var c = companies[i];
    if (
      c.name.toLowerCase().indexOf(q) !== -1 ||
      c.sector.toLowerCase().indexOf(q) !== -1 ||
      c.location.toLowerCase().indexOf(q) !== -1 ||
      c.mentor.toLowerCase().indexOf(q) !== -1
    ) {
      filtered.push(c);
    }
  }
  renderCompanies(filtered);
}

function contactCompany(email) {
  showToast('Opening email client to contact ' + email + '...', 'info');
}

function openNewCompanyForm() {
  var name = prompt('Enter accredited Lehrbetrieb partner company name:');
  if (name && name.trim()) {
    var sector = prompt('Enter industry sector (e.g. Cloud, Medical, Telecom):') || 'Information Technology';
    var newComp = {
      id: 'comp-' + Date.now(),
      name: name.trim(),
      sector: sector.trim(),
      location: 'Lovely Professional University Campus Hub',
      mentor: 'Designated Faculty Mentor',
      email: 'contact@partner.lpu.in',
      activeInterns: 0
    };
    companies.unshift(newComp);
    renderCompanies();
    showToast('Company ' + name + ' registered successfully!', 'success');
  }
}

// --------------------------------------------------------
// SECTION 17: INCIDENT REPORTS
// --------------------------------------------------------

function renderIncidents() {
  var tbody = document.getElementById('incidentsTableBody');
  if (!tbody) return;

  var html = '';
  for (var i = 0; i < incidents.length; i++) {
    var inc = incidents[i];
    html +=
      '<tr>' +
        '<td><strong>' + escapeHTML(inc.id) + '</strong></td>' +
        '<td>' + escapeHTML(inc.date) + '</td>' +
        '<td><strong>' + escapeHTML(inc.student) + '</strong></td>' +
        '<td>' + escapeHTML(inc.company) + '</td>' +
        '<td>' + escapeHTML(inc.category) + '</td>' +
        '<td><span class="inc-severity ' + inc.severityClass + '">' + escapeHTML(inc.severity) + '</span></td>' +
        '<td><strong>' + escapeHTML(inc.status) + '</strong></td>' +
        '<td>' +
          '<button class="btn-action-outline" onclick="app.showToast(\'Incident ' + inc.id + ': Logged by faculty. Status: ' + inc.status + '\', \'info\')">Details</button>' +
        '</td>' +
      '</tr>';
  }
  tbody.innerHTML = html;
}

function openNewIncidentPrompt() {
  var student = prompt('Student name:');
  if (!student) return;
  var desc = prompt('Brief description / category of incident:') || 'General report';
  var newInc = {
    id: 'INC-2026-00' + (incidents.length + 1),
    date: 'Today',
    student: student.trim(),
    company: 'Assigned Lehrbetrieb',
    category: desc.trim(),
    severity: 'Low',
    status: 'Open',
    severityClass: 'inc-green'
  };
  incidents.unshift(newInc);
  renderIncidents();
  showToast('Incident report filed for ' + student + '.', 'info');
}

// --------------------------------------------------------
// SECTION 18: DOCUMENT REPOSITORY
// --------------------------------------------------------

function renderDocuments() {
  var container = document.getElementById('documentsListContainer');
  if (!container) return;

  var html = '';
  for (var i = 0; i < documents.length; i++) {
    var doc = documents[i];
    html +=
      '<div class="doc-item">' +
        '<div class="doc-item-left">' +
          '<span class="doc-badge ' + doc.type.toLowerCase() + '">' + doc.type + '</span>' +
          '<div>' +
            '<strong>' + escapeHTML(doc.title) + '</strong><br>' +
            '<small style="color: #64748b;">' + doc.size + ' &bull; Updated ' + doc.updated + '</small>' +
          '</div>' +
        '</div>' +
        '<div class="doc-actions">' +
          '<button class="btn-action-outline" onclick="app.downloadDocument(\'' + escapeHTML(doc.title) + '\')">Download</button>' +
          '<button class="btn-action-outline" onclick="app.previewDocument(\'' + escapeHTML(doc.title) + '\')">Preview</button>' +
        '</div>' +
      '</div>';
  }
  container.innerHTML = html;
}

function downloadDocument(title) {
  showToast('Downloading: "' + title + '"...', 'info');
}

function previewDocument(title) {
  showToast('Opening live institutional preview: "' + title + '"', 'info');
}

function handleDocUpload(e) {
  var files = e ? e.target.files : null;
  if (files && files[0]) {
    var file = files[0];
    var type = 'PDF';
    if (file.name.indexOf('.docx') !== -1) type = 'DOC';
    else if (file.name.indexOf('.xlsx') !== -1) type = 'XLS';

    var newDoc = {
      id: 'doc-' + Date.now(),
      title: file.name,
      type: type,
      size: Math.round(file.size / 1024) + ' KB',
      updated: 'Just now'
    };
    documents.unshift(newDoc);
    renderDocuments();
    showToast('Uploaded "' + file.name + '" to official document vault!', 'success');
  } else {
    var dummyName = prompt('Enter document title to upload (or select file):');
    if (dummyName) {
      documents.unshift({
        id: 'doc-' + Date.now(),
        title: dummyName.trim(),
        type: 'PDF',
        size: '250 KB',
        updated: 'Just now'
      });
      renderDocuments();
      showToast('Uploaded "' + dummyName + '" successfully!', 'success');
    }
  }
}

// --------------------------------------------------------
// SECTION 19: PLACEMENT ASSIGNMENT FORM
// --------------------------------------------------------

function onAssignCompanyChange(selected) {
  var mentorInput = document.getElementById('assignMentorName');
  var emailInput = document.getElementById('assignMentorEmail');
  var comp = null;
  for (var i = 0; i < companies.length; i++) {
    if (companies[i].name === selected) {
      comp = companies[i];
      break;
    }
  }
  if (comp && mentorInput && emailInput) {
    mentorInput.value = comp.mentor;
    emailInput.value = comp.email;
  }
}

function handleAssignInternship(e) {
  if (e) e.preventDefault();
  var studentName = document.getElementById('assignStudentSelect').value;
  var companyName = document.getElementById('assignCompanySelect').value;
  var title = document.getElementById('assignPositionTitle').value.trim();

  if (!studentName || !companyName) {
    showToast('Please select both student candidate and company.', 'danger');
    return;
  }

  var newOffer = {
    id: 'offer-' + Date.now(),
    sn: 1,
    learner: {
      name: studentName,
      email: studentName.toLowerCase().replace(/\s+/g, '.') + '@stud.lpu.in',
      class: 'ICT2025a',
      phone: '+91 98765 22000',
      location: 'Lovely Professional University'
    },
    internship: {
      title: title || (companyName + ' Internship'),
      startDate: 'Aug 01, 2026',
      endDate: 'Jul 31, 2027',
      expiryDate: 'Apr 30, 2026',
      status: 'Active',
      description: 'Official Lehrbetrieb assignment.'
    },
    company: {
      name: companyName,
      address: 'Accredited Partner Campus',
      contactPerson: document.getElementById('assignMentorName').value || 'Designated Mentor',
      email: document.getElementById('assignMentorEmail').value || 'mentor@company.ch'
    },
    approvalStatus: 'Accepted'
  };

  offers.unshift(newOffer);
  for (var i = 0; i < offers.length; i++) {
    offers[i].sn = i + 1;
  }
  saveOffersToStorage();

  // Update intern status
  for (var j = 0; j < interns.length; j++) {
    if (interns[j].name === studentName) {
      interns[j].status = 'Assigned';
      interns[j].placement = companyName;
      saveInternsToStorage();
      break;
    }
  }

  closeModal('assignModalOverlay');
  render();
  showToast('Internship assigned: ' + studentName + ' placed at ' + companyName + '!', 'success');
}

// --------------------------------------------------------
// SECTION 20: PROFILE & PASSWORD SETTINGS
// --------------------------------------------------------

function populateProfileForm() {
  if (!currentUser) return;
  var nameInp = document.getElementById('profileFullNameInput');
  var userInp = document.getElementById('profileUsernameInput');
  var emailInp = document.getElementById('profileEmailInput');
  var badgeRole = document.getElementById('profileRoleBadge');

  if (nameInp) nameInp.value = currentUser.fullName || currentUser.username;
  if (userInp) userInp.value = currentUser.username;
  if (emailInp) emailInp.value = currentUser.email;
  if (badgeRole) badgeRole.textContent = currentUser.role;
}

function handleProfileSave(e) {
  if (e) e.preventDefault();
  var name = document.getElementById('profileFullNameInput').value.trim();
  var email = document.getElementById('profileEmailInput').value.trim();

  if (!name || !email) return;

  currentUser.fullName = name;
  currentUser.email = email;

  sessionStorage.setItem('tfb_auth_user', JSON.stringify(currentUser));
  if (localStorage.getItem('tfb_auth_user')) {
    localStorage.setItem('tfb_auth_user', JSON.stringify(currentUser));
  }

  updateAuthStateUI();
  closeModal('profileModalOverlay');
  showToast('Profile updated successfully!', 'success');
}

function handleChangePassword(e) {
  if (e) e.preventDefault();
  var cur = document.getElementById('currentPasswordInput').value;
  var p1 = document.getElementById('newPasswordInput').value;
  var p2 = document.getElementById('confirmNewPasswordInput').value;

  if (!cur || !p1 || !p2) {
    showToast('Please fill all required password fields.', 'danger');
    return;
  }

  if (p1.length < 8) {
    showToast('Password must be at least 8 characters long.', 'danger');
    return;
  }

  if (p1 !== p2) {
    showToast('New passwords do not match.', 'danger');
    return;
  }

  closeModal('passwordModalOverlay');
  document.getElementById('changePasswordForm').reset();
  showToast('Password changed successfully!', 'success');
}

function resetDemoData() {
  localStorage.removeItem('tfb_offers_data_v2');
  localStorage.removeItem('tfb_apps_data_v2');
  localStorage.removeItem('tfb_interns_data_v2');
  loadData();
  render();
  showToast('Demo data restored to original authentic values.', 'info');
}

// --------------------------------------------------------
// SECTION 21: ATTACH ALL EVENTS ON PAGE LOAD
// --------------------------------------------------------

function setupEventHandlers() {
  // Mobile drawer button & backdrop
  var sidebarToggle = document.getElementById('sidebarToggle');
  var sidebarBackdrop = document.getElementById('sidebarBackdrop');

  if (sidebarToggle) {
    sidebarToggle.onclick = function(e) {
      e.stopPropagation();
      toggleMobileDrawer();
    };
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.onclick = function() {
      closeMobileDrawer();
    };
  }

  // User avatar menu toggle
  var userMenuBtn = document.getElementById('userMenuBtn');
  if (userMenuBtn) {
    userMenuBtn.onclick = function(e) {
      e.stopPropagation();
      userMenuBtn.classList.toggle('open');
    };
  }

  // Accordion inside sidebar
  var mgmtToggle = document.getElementById('managementToggle');
  var mgmtGroup = document.getElementById('managementGroup');
  if (mgmtToggle && mgmtGroup) {
    mgmtToggle.onclick = function(e) {
      e.preventDefault();
      mgmtGroup.classList.toggle('open');
    };
  }

  // Filter tabs click
  var filterTabs = document.querySelectorAll('.filter-tab');
  for (var i = 0; i < filterTabs.length; i++) {
    (function(tab) {
      tab.onclick = function() {
        setFilter(tab.getAttribute('data-filter'));
      };
    })(filterTabs[i]);
  }

  // Search input and buttons
  var searchInp = document.getElementById('searchInput');
  var searchBtn = document.getElementById('searchBtn');
  var searchClearBtn = document.getElementById('searchClearBtn');

  function doSearch() {
    searchQuery = searchInp.value.trim().toLowerCase();
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery ? 'block' : 'none';
    }
    currentPage = 1;
    render();
  }

  if (searchBtn) searchBtn.onclick = doSearch;
  if (searchInp) {
    searchInp.oninput = doSearch;
    searchInp.onkeydown = function(e) {
      if (e.key === 'Enter') doSearch();
    };
  }
  if (searchClearBtn) {
    searchClearBtn.onclick = function() {
      searchInp.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      searchInp.focus();
      currentPage = 1;
      render();
    };
  }

  var resetFilterBtn = document.getElementById('resetFilterBtn');
  if (resetFilterBtn) {
    resetFilterBtn.onclick = function() {
      if (searchInp) searchInp.value = '';
      searchQuery = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      setFilter('all');
    };
  }

  // Pagination buttons
  var prevBtn = document.getElementById('prevPageBtn');
  var nextBtn = document.getElementById('nextPageBtn');

  if (prevBtn) {
    prevBtn.onclick = function() {
      if (currentPage > 1) {
        currentPage--;
        render();
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = function() {
      currentPage++;
      render();
    };
  }

  // Login events
  var loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.onsubmit = handleLogin;

  var roleSwitchBtn = document.getElementById('roleSwitchBtn');
  if (roleSwitchBtn) roleSwitchBtn.onclick = function() { toggleLoginRole(); };

  var togglePwBtn = document.getElementById('togglePasswordBtn');
  if (togglePwBtn) togglePwBtn.onclick = togglePasswordVisibility;

  var forgotPwBtn = document.getElementById('forgotPasswordBtn');
  if (forgotPwBtn) {
    forgotPwBtn.onclick = function(e) {
      e.preventDefault();
      showToast(t('forgotPwToast'), 'info');
    };
  }

  var logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.onclick = handleLogout;

  // Language buttons
  var langBtns = document.querySelectorAll('.lang-btn, .lang-btn-login');
  for (var j = 0; j < langBtns.length; j++) {
    (function(btn) {
      btn.onclick = function() {
        setLanguage(btn.getAttribute('data-lang'));
      };
    })(langBtns[j]);
  }

  // Sidebar navigation links
  var sideLinks = document.querySelectorAll('.sidebar-nav a');
  for (var k = 0; k < sideLinks.length; k++) {
    (function(link) {
      link.onclick = function(e) {
        e.preventDefault();
        closeMobileDrawer();
        var nav = link.getAttribute('data-nav');
        if (nav === 'dashboard') openModal('dashboardModalOverlay');
        else if (nav === 'applications') openModal('applicationsModalOverlay');
        else if (nav === 'offers') showOffersView();
        else if (nav === 'assign') openModal('assignModalOverlay');
        else if (nav === 'profiles') openModal('profilesModalOverlay');
        else if (nav === 'companies') openModal('companiesModalOverlay');
        else if (nav === 'incidents') openModal('incidentsModalOverlay');
        else if (nav === 'documents') openModal('documentsModalOverlay');
        else if (nav === 'profile') openModal('profileModalOverlay');
        else if (nav === 'password') openModal('passwordModalOverlay');
      };
    })(sideLinks[k]);
  }

  // Close modals when clicking backdrop
  var overlays = document.querySelectorAll('.modal-overlay');
  for (var m = 0; m < overlays.length; m++) {
    (function(overlay) {
      overlay.onclick = function(e) {
        if (e.target === overlay) {
          overlay.classList.remove('open');
          document.body.classList.remove('modal-open');
        }
      };
    })(overlays[m]);
  }

  // Add offer form
  var addForm = document.getElementById('addOfferForm');
  if (addForm) {
    addForm.onsubmit = function(e) {
      e.preventDefault();
      handleCreateOffer();
    };
  }

  // Global click listener to close dropdowns when clicking outside
  document.onclick = function(e) {
    if (!e.target.closest('.status-dropdown-wrap')) {
      closeAllStatusMenus();
    }
    if (userMenuBtn && !userMenuBtn.contains(e.target)) {
      userMenuBtn.classList.remove('open');
    }
  };

  // Keyboard shortcuts (Escape key closes open menus and modals)
  document.onkeydown = function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
      closeAllStatusMenus();
      closeMobileDrawer();
      if (userMenuBtn) userMenuBtn.classList.remove('open');
    }
  };
}

// --------------------------------------------------------
// SECTION 22: EXPORT TO WINDOW.APP FOR HTML ONCLICK CALLS
// --------------------------------------------------------

window.app = {
  quickAccept: quickAccept,
  quickReject: quickReject,
  quickSetStatus: quickSetStatus,
  toggleStatusMenu: toggleStatusMenu,
  closeAllStatusMenus: closeAllStatusMenus,
  approveAllPending: approveAllPending,
  undoLastAction: undoLastAction,
  studentApply: studentApply,
  openModal: openModal,
  closeModal: closeModal,
  closeAllModals: closeAllModals,
  showOffersView: showOffersView,
  setFilter: setFilter,
  setAppFilter: setAppFilter,
  filterApplications: filterApplications,
  approveApplication: approveApplication,
  rejectApplication: rejectApplication,
  viewApplicationDossier: viewApplicationDossier,
  viewOfferDetails: viewOfferDetails,
  openAddOfferModal: openAddOfferModal,
  closeAddOfferModal: closeAddOfferModal,
  handleCreateOffer: handleCreateOffer,
  filterInternCards: filterInternCards,
  downloadCV: downloadCV,
  openPortfolio: openPortfolio,
  filterCompanies: filterCompanies,
  contactCompany: contactCompany,
  openNewCompanyForm: openNewCompanyForm,
  openNewIncidentPrompt: openNewIncidentPrompt,
  downloadDocument: downloadDocument,
  previewDocument: previewDocument,
  handleDocUpload: handleDocUpload,
  onAssignCompanyChange: onAssignCompanyChange,
  handleAssignInternship: handleAssignInternship,
  handleProfileSave: handleProfileSave,
  handleChangePassword: handleChangePassword,
  handleLogout: handleLogout,
  goToPage: goToPage,
  resetDemoData: resetDemoData,
  showToast: showToast
};

// Start application when page is ready
window.addEventListener('DOMContentLoaded', function() {
  loadData();
  setupEventHandlers();
  applyTranslations();
  updateAuthStateUI();
  if (currentUser) {
    render();
  }
});
