/**
 * Lovely Professional University - Internship Portal
 * Full Interactive Application Logic & Mobile-First Controls
 */

(function () {
  'use strict';

  // --- Initial Dataset with Authentic LPU Details ---
  const INITIAL_OFFERS = [
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

  // --- Initial Applications Dataset ---
  const INITIAL_APPLICATIONS = [
    { id: 'app-1', student: 'Damian Mouzo Otero', class: 'ICT2025a', email: 'damian.mouzo@stud.lpu.in', company: 'Display Doktor GmbH', position: 'Junior Diagnostics Specialist', date: 'Jan 12, 2026', status: 'Accepted', badgeClass: 'pill-accepted' },
    { id: 'app-2', student: 'Tenzin Dhejung', class: 'ICT2025a', email: 'tenzin.dhejung@stud.lpu.in', company: 'ITpoint Systems AG', position: 'Cloud & Infrastructure Intern', date: 'Jan 18, 2026', status: 'Accepted', badgeClass: 'pill-accepted' },
    { id: 'app-3', student: 'Benjamin Schütz', class: 'ICT2025a', email: 'benjamin.schuetz@stud.lpu.in', company: 'it5solutions GmbH', position: 'Full-Stack Developer Intern', date: 'Feb 02, 2026', status: 'Awaiting Faculty Approval', badgeClass: 'pill-pending' },
    { id: 'app-4', student: 'Noah Weber', class: 'ICT2024b', email: 'noah.weber@stud.lpu.in', company: 'Swisscom AG', position: 'Network Systems Engineer', date: 'Feb 15, 2026', status: 'Technical Interview', badgeClass: 'pill-pending' },
    { id: 'app-5', student: 'Elena Rossi', class: 'ICT2025b', email: 'elena.rossi@stud.lpu.in', company: 'Erbo Spraytec AG', position: 'Automation & Telemetry Intern', date: 'Feb 20, 2026', status: 'Under Review', badgeClass: 'pill-pending' },
    { id: 'app-6', student: 'Sandro Keller', class: 'ICT2025a', email: 'sandro.keller@stud.lpu.in', company: 'Spitex Bern', position: 'Clinical IT User Support', date: 'Feb 24, 2026', status: 'Screening', badgeClass: 'pill-pending' }
  ];

  // --- Initial Intern Profiles Dataset ---
  const INITIAL_INTERNS = [
    { id: 'int-1', name: 'Damian Mouzo Otero', class: 'ICT2025a', email: 'damian.mouzo@stud.lpu.in', phone: '+91 98765 11001', placement: 'Display Doktor GmbH', status: 'Assigned', tags: ['Diagnostics', 'Hardware', 'Python'] },
    { id: 'int-2', name: 'Tenzin Dhejung', class: 'ICT2025a', email: 'tenzin.dhejung@stud.lpu.in', phone: '+91 98765 11002', placement: 'ITpoint Systems AG', status: 'Assigned', tags: ['Cloud', 'Linux', 'VMware'] },
    { id: 'int-3', name: 'Benjamin Schütz', class: 'ICT2025a', email: 'benjamin.schuetz@stud.lpu.in', phone: '+91 98765 11003', placement: 'it5solutions GmbH (Pending)', status: 'Pending', tags: ['JavaScript', 'REST APIs', 'React'] },
    { id: 'int-4', name: 'Emran Eren', class: 'ICT2025a', email: 'emran.eren@stud.lpu.in', phone: '+91 98765 11004', placement: 'Erbo Spraytec AG', status: 'Assigned', tags: ['Industrial IoT', 'Automation', 'Sensors'] },
    { id: 'int-5', name: 'Raquel Gugger', class: 'ICT2025a', email: 'raquel.gugger@stud.lpu.in', phone: '+91 98765 11005', placement: 'Spitex Bern', status: 'Assigned', tags: ['Healthcare IT', 'Database', 'Support'] },
    { id: 'int-6', name: 'Noah Weber', class: 'ICT2024b', email: 'noah.weber@stud.lpu.in', phone: '+91 98765 11006', placement: 'Seeking Placement', status: 'Available', tags: ['Cisco CCNA', 'Routing', 'Security'] }
  ];

  // --- Initial Partner Lehrbetriebe ---
  const INITIAL_COMPANIES = [
    { id: 'comp-1', name: 'Display Doktor GmbH', sector: 'Device Diagnostics & Electronics', location: 'Bollwerk 15, 3011 Bern', mentor: 'Markus Lehmann (Tech Lead)', email: 'info@displaydoktor.ch', activeInterns: 1 },
    { id: 'comp-2', name: 'ITpoint Systems AG', sector: 'Managed Cloud & Infrastructure', location: 'Gewerbestrasse 10, 6330 Cham', mentor: 'Stefan Meyer (Senior Architect)', email: 'hr@itpoint.ch', activeInterns: 1 },
    { id: 'comp-3', name: 'it5solutions GmbH', sector: 'Enterprise Web & Microservices', location: 'Allmendstrasse 18, 3600 Thun', mentor: 'Beat Wälchli (Managing Director)', email: 'jobs@it5solutions.ch', activeInterns: 1 },
    { id: 'comp-4', name: 'Erbo Spraytec AG', sector: 'Process Automation & Industrial IoT', location: 'Industriestrasse 17, 4922 Bützberg', mentor: 'Christoph Gerber (Head of IT)', email: 'kontakt@erbospraytec.ch', activeInterns: 1 },
    { id: 'comp-5', name: 'Spitex Bern', sector: 'Healthcare Information Systems', location: 'Monbijoustrasse 22, 3011 Bern', mentor: 'Andrea Buri (IT Lead)', email: 'it@spitex-bern.ch', activeInterns: 1 },
    { id: 'comp-6', name: 'Swisscom AG', sector: 'Telecommunications & 5G Systems', location: 'Alte Tiefenaustrasse 6, 3050 Bern', mentor: 'Pascal Brunner (Enterprise Lead)', email: 'internships@swisscom.com', activeInterns: 3 }
  ];

  // --- Initial Incident Logs ---
  const INITIAL_INCIDENTS = [
    { id: 'INC-2026-003', date: 'Feb 28, 2026', student: 'Noah Weber', company: 'Swisscom AG', category: 'Excused Absence / Medical', severity: 'Low', status: 'Resolved', severityClass: 'inc-green' },
    { id: 'INC-2026-002', date: 'Feb 14, 2026', student: 'Benjamin Schütz', company: 'it5solutions GmbH', category: 'Hardware Replacement Required', severity: 'Medium', status: 'In Progress', severityClass: 'inc-amber' },
    { id: 'INC-2026-001', date: 'Jan 20, 2026', student: 'Damian Mouzo Otero', company: 'Display Doktor GmbH', category: 'Test Bench ESD Grounding', severity: 'Low', status: 'Resolved', severityClass: 'inc-green' }
  ];

  // --- Initial Documents ---
  const INITIAL_DOCUMENTS = [
    { id: 'doc-1', title: 'Standard Triangular Internship Contract (VET 2026/27)', type: 'PDF', size: '340 KB', updated: 'Jan 15, 2026' },
    { id: 'doc-2', title: 'ICT VET Learning Objectives & Competencies Matrix', type: 'PDF', size: '1.1 MB', updated: 'Jan 10, 2026' },
    { id: 'doc-3', title: 'Mid-Term Student Evaluation Protocol Form', type: 'DOCX', size: '120 KB', updated: 'Jan 05, 2026' },
    { id: 'doc-4', title: 'Final Internship Completion Certificate Template', type: 'PDF', size: '210 KB', updated: 'Jan 01, 2026' },
    { id: 'doc-5', title: 'Workplace Safety & Lab Guidelines (Lovely Professional University)', type: 'PDF', size: '480 KB', updated: 'Dec 12, 2025' }
  ];

  // --- Translation Dictionary (EN / DE) ---
  const TRANSLATIONS = {
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
      pageOf: (current, total) => `Page ${current} of ${total}`,
      pageBtn: (n) => `Page ${n}`,
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
      toastAccepted: (name) => `Internship offer for ${name} has been accepted!`,
      toastRejected: (name) => `Internship offer for ${name} has been rejected.`,
      toastReset: 'Demo data restored to original authentic values.',
      toastAdded: 'New internship offer created successfully!',
      toastLangChanged: (lang) => `Language changed to ${lang === 'de' ? 'Deutsch' : 'English'}`,
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
      loginSuccessToast: (name) => `Welcome back, ${name}!`,
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
      pageOf: (current, total) => `Seite ${current} von ${total}`,
      pageBtn: (n) => `Seite ${n}`,
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
      toastAccepted: (name) => `Praktikumsangebot für ${name} wurde angenommen!`,
      toastRejected: (name) => `Praktikumsangebot für ${name} wurde abgelehnt.`,
      toastReset: 'Originaldaten wiederhergestellt.',
      toastAdded: 'Neues Praktikumsangebot erfolgreich erstellt!',
      toastLangChanged: (lang) => `Sprache geändert auf ${lang === 'de' ? 'Deutsch' : 'English'}`,
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
      loginSuccessToast: (name) => `Willkommen zurück, ${name}!`,
      logoutSuccessToast: 'Sie wurden erfolgreich abgemeldet.',
      forgotPwToast: 'Anweisungen zum Zurücksetzen wurden an Ihre E-Mail gesendet.'
    }
  };

  // --- Main Application Class ---
  class PortalApp {
    constructor() {
      this.currentLang = localStorage.getItem('tfb_lang') || 'en';
      this.currentFilter = 'all'; // 'all' | 'accepted' | 'rejected' | 'pending'
      this.appFilter = 'all'; // for applications modal
      this.searchQuery = '';
      this.currentPage = 1;
      this.itemsPerPage = 10;
      this.lastAction = null; // for undo support

      // Default role
      this.currentLoginRole = 'teacher';

      // Load offers from storage or initial data
      this.offers = this.loadOffers();
      this.applications = this.loadApplications();
      this.interns = this.loadInterns();
      this.companies = JSON.parse(JSON.stringify(INITIAL_COMPANIES));
      this.incidents = JSON.parse(JSON.stringify(INITIAL_INCIDENTS));
      this.documents = JSON.parse(JSON.stringify(INITIAL_DOCUMENTS));

      this.pendingAction = null;
      this.currentUser = this.loadAuthUser();

      this.initDOMElements();
      this.bindEvents();
      this.applyTranslations();
      this.updateAuthStateUI();
      if (this.currentUser) {
        this.render();
      }
    }

    loadAuthUser() {
      const sessionUser = sessionStorage.getItem('tfb_auth_user');
      if (sessionUser) {
        try { return JSON.parse(sessionUser); } catch(e) {}
      }
      const localUser = localStorage.getItem('tfb_auth_user');
      if (localUser) {
        try { return JSON.parse(localUser); } catch(e) {}
      }
      return null;
    }

    loadOffers() {
      const saved = localStorage.getItem('tfb_offers_data_v2');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
      }
      return JSON.parse(JSON.stringify(INITIAL_OFFERS));
    }

    saveOffers() {
      localStorage.setItem('tfb_offers_data_v2', JSON.stringify(this.offers));
    }

    loadApplications() {
      const saved = localStorage.getItem('tfb_apps_data_v2');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
      }
      return JSON.parse(JSON.stringify(INITIAL_APPLICATIONS));
    }

    saveApplications() {
      localStorage.setItem('tfb_apps_data_v2', JSON.stringify(this.applications));
    }

    loadInterns() {
      const saved = localStorage.getItem('tfb_interns_data_v2');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
      }
      return JSON.parse(JSON.stringify(INITIAL_INTERNS));
    }

    saveInterns() {
      localStorage.setItem('tfb_interns_data_v2', JSON.stringify(this.interns));
    }

    t(key, ...args) {
      const langDict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
      const val = langDict[key] || TRANSLATIONS.en[key] || key;
      if (typeof val === 'function') {
        return val(...args);
      }
      return val;
    }

    initDOMElements() {
      // Views & Auth
      this.loginView = document.getElementById('loginView');
      this.portalView = document.getElementById('portalView');
      this.loginCardTitle = document.getElementById('loginCardTitle');
      this.loginForm = document.getElementById('loginForm');
      this.loginUsernameLabel = document.getElementById('loginUsernameLabel');
      this.loginUsername = document.getElementById('loginUsername');
      this.loginPassword = document.getElementById('loginPassword');
      this.rememberMeCheckbox = document.getElementById('rememberMeCheckbox');
      this.loginAlert = document.getElementById('loginAlert');
      this.loginAlertText = document.getElementById('loginAlertText');
      this.loginSubmitBtn = document.getElementById('loginSubmitBtn');
      this.loginSubmitText = document.getElementById('loginSubmitText');
      this.roleSwitchBtn = document.getElementById('roleSwitchBtn');
      this.roleSwitchPrompt = document.getElementById('roleSwitchPrompt');
      this.roleSwitchBtnText = document.getElementById('roleSwitchBtnText');
      this.togglePasswordBtn = document.getElementById('togglePasswordBtn');
      this.eyeIconSvg = document.getElementById('eyeIconSvg');
      this.forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
      this.loginLangButtons = document.querySelectorAll('.lang-btn-login');

      // Topbar & User
      this.topbarUsername = document.getElementById('topbarUsername');
      this.dropdownUserFullName = document.getElementById('dropdownUserFullName');
      this.dropdownUserEmail = document.getElementById('dropdownUserEmail');
      this.dropdownRolePill = document.getElementById('dropdownRolePill');
      this.sidebarRoleTitle = document.getElementById('sidebarRoleTitle');

      // Sidebar & Mobile Drawer
      this.sidebar = document.getElementById('sidebar');
      this.sidebarToggle = document.getElementById('sidebarToggle');
      this.sidebarBackdrop = document.getElementById('sidebarBackdrop');
      this.userMenuBtn = document.getElementById('userMenuBtn');
      this.userDropdown = document.getElementById('userDropdown');
      this.managementGroup = document.getElementById('managementGroup');
      this.managementToggle = document.getElementById('managementToggle');
      this.logoutBtn = document.getElementById('logoutBtn');
      this.langButtons = document.querySelectorAll('.lang-btn');

      // Banners
      this.pendingAlertBanner = document.getElementById('pendingAlertBanner');
      this.pendingAlertCount = document.getElementById('pendingAlertCount');
      this.studentStatusBanner = document.getElementById('studentStatusBanner');
      this.studentBannerTitle = document.getElementById('studentBannerTitle');
      this.studentBannerSub = document.getElementById('studentBannerSub');
      this.pageMainHeading = document.getElementById('pageMainHeading');
      this.pageSubHeading = document.getElementById('pageSubHeading');

      // Filter Tabs & Badges
      this.filterTabs = document.querySelectorAll('.filter-tab');
      this.badgeAll = document.getElementById('badgeAll');
      this.badgeAccepted = document.getElementById('badgeAccepted');
      this.badgePending = document.getElementById('badgePending');
      this.badgeRejected = document.getElementById('badgeRejected');

      // Search
      this.searchInput = document.getElementById('searchInput');
      this.searchBtn = document.getElementById('searchBtn');
      this.searchClearBtn = document.getElementById('searchClearBtn');

      // Table & Pagination
      this.tableBody = document.getElementById('offersTableBody');
      this.emptyState = document.getElementById('emptyState');
      this.resetFilterBtn = document.getElementById('resetFilterBtn');
      this.pageInfoText = document.getElementById('pageInfoText');
      this.pageNumbers = document.getElementById('pageNumbers');
      this.prevPageBtn = document.getElementById('prevPageBtn');
      this.nextPageBtn = document.getElementById('nextPageBtn');

      // Modals
      this.viewModalOverlay = document.getElementById('viewModalOverlay');
      this.viewModalBody = document.getElementById('viewModalBody');
      this.viewModalTitle = document.getElementById('viewModalTitle');
      this.closeViewModalBtn = document.getElementById('closeViewModalBtn');
      this.closeViewModalFooterBtn = document.getElementById('closeViewModalFooterBtn');
      this.modalDynamicActions = document.getElementById('modalDynamicActions');

      this.confirmModalOverlay = document.getElementById('confirmModalOverlay');
      this.confirmTitle = document.getElementById('confirmTitle');
      this.confirmMessage = document.getElementById('confirmMessage');
      this.confirmCancelBtn = document.getElementById('confirmCancelBtn');
      this.confirmOkBtn = document.getElementById('confirmOkBtn');
      this.confirmIconWrapper = document.getElementById('confirmIconWrapper');
      this.rejectReasonBox = document.getElementById('rejectReasonBox');
      this.rejectReasonInput = document.getElementById('rejectReasonInput');

      this.addOfferModalOverlay = document.getElementById('addOfferModalOverlay');
      this.addNewOfferBtn = document.getElementById('dropdownAddOfferBtn');
      this.closeAddOfferModalBtn = document.getElementById('closeAddOfferModalBtn');
      this.cancelAddOfferBtn = document.getElementById('cancelAddOfferBtn');
      this.addOfferForm = document.getElementById('addOfferForm');

      this.toastContainer = document.getElementById('toastContainer');
    }

    bindEvents() {
      // Mobile Drawer Toggle
      if (this.sidebarToggle) {
        this.sidebarToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleMobileDrawer();
        });
      }

      if (this.sidebarBackdrop) {
        this.sidebarBackdrop.addEventListener('click', () => {
          this.closeMobileDrawer();
        });
      }

      // User Menu Dropdown Toggle
      if (this.userMenuBtn) {
        this.userMenuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.userMenuBtn.classList.toggle('open');
        });
      }

      // Accordion Toggle in Sidebar
      if (this.managementToggle) {
        this.managementToggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.managementGroup.classList.toggle('open');
        });
      }

      // Status Filter Tabs
      this.filterTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          this.setFilter(tab.dataset.filter);
        });
      });

      // Search Functionality
      const doSearch = () => {
        this.searchQuery = this.searchInput.value.trim().toLowerCase();
        this.searchClearBtn.style.display = this.searchQuery ? 'block' : 'none';
        this.currentPage = 1;
        this.render();
      };

      if (this.searchBtn) this.searchBtn.addEventListener('click', doSearch);
      if (this.searchInput) {
        this.searchInput.addEventListener('input', doSearch);
        this.searchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') doSearch();
        });
      }
      if (this.searchClearBtn) {
        this.searchClearBtn.addEventListener('click', () => {
          this.searchInput.value = '';
          this.searchQuery = '';
          this.searchClearBtn.style.display = 'none';
          this.searchInput.focus();
          this.currentPage = 1;
          this.render();
        });
      }

      if (this.resetFilterBtn) {
        this.resetFilterBtn.addEventListener('click', () => {
          this.searchInput.value = '';
          this.searchQuery = '';
          if (this.searchClearBtn) this.searchClearBtn.style.display = 'none';
          this.setFilter('all');
        });
      }

      // Pagination Arrows
      if (this.prevPageBtn) {
        this.prevPageBtn.addEventListener('click', () => {
          if (this.currentPage > 1) {
            this.currentPage--;
            this.render();
          }
        });
      }
      if (this.nextPageBtn) {
        this.nextPageBtn.addEventListener('click', () => {
          this.currentPage++;
          this.render();
        });
      }

      // Modal Closures
      if (this.closeViewModalBtn) this.closeViewModalBtn.addEventListener('click', () => this.closeViewModal());
      if (this.closeViewModalFooterBtn) this.closeViewModalFooterBtn.addEventListener('click', () => this.closeViewModal());
      if (this.confirmCancelBtn) this.confirmCancelBtn.addEventListener('click', () => this.closeConfirmModal());
      if (this.confirmOkBtn) this.confirmOkBtn.addEventListener('click', () => this.executePendingAction());

      if (this.closeAddOfferModalBtn) this.closeAddOfferModalBtn.addEventListener('click', () => this.closeAddOfferModal());
      if (this.cancelAddOfferBtn) this.cancelAddOfferBtn.addEventListener('click', () => this.closeAddOfferModal());
      if (this.addOfferForm) {
        this.addOfferForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleCreateOffer();
        });
      }

      // Logout
      if (this.logoutBtn) this.logoutBtn.addEventListener('click', () => this.handleLogout());

      // Login Handlers
      if (this.loginForm) this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
      if (this.roleSwitchBtn) this.roleSwitchBtn.addEventListener('click', () => this.toggleLoginRole());
      if (this.togglePasswordBtn) this.togglePasswordBtn.addEventListener('click', () => this.togglePasswordVisibility());
      if (this.forgotPasswordBtn) {
        this.forgotPasswordBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.showToast(this.t('forgotPwToast'), 'info');
        });
      }

      // Language Switchers
      this.langButtons.forEach((btn) => btn.addEventListener('click', () => this.setLanguage(btn.dataset.lang)));
      this.loginLangButtons.forEach((btn) => btn.addEventListener('click', () => this.setLanguage(btn.dataset.lang)));

      // Sidebar Links Click
      document.querySelectorAll('.sidebar-nav a').forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.closeMobileDrawer();
          const nav = link.dataset.nav;
          if (nav) this.handleNavClick(nav);
        });
      });

      // Overlay Backdrop Click Closes Modals
      document.querySelectorAll('.modal-overlay').forEach((overlay) => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.classList.remove('open');
            document.body.classList.remove('modal-open');
          }
        });
      });

      // Global Outside Click Listener
      document.addEventListener('click', (e) => {
        // Close status dropdown if clicking outside
        if (!e.target.closest('.status-dropdown-wrap')) {
          this.closeAllStatusMenus();
        }
        // Close user dropdown if clicking outside
        if (this.userMenuBtn && !this.userMenuBtn.contains(e.target)) {
          this.userMenuBtn.classList.remove('open');
        }
      });

      // Keyboard Shortcuts (Esc closes everything, / focuses search)
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAllModals();
          this.closeAllStatusMenus();
          this.closeMobileDrawer();
          if (this.userMenuBtn) this.userMenuBtn.classList.remove('open');
        } else if (e.key === '/' && document.activeElement !== this.searchInput && !document.querySelector('.modal-overlay.open')) {
          if (this.searchInput) {
            e.preventDefault();
            this.searchInput.focus();
          }
        }
      });
    }

    // --- Mobile Drawer Controls ---
    toggleMobileDrawer() {
      if (!this.sidebar) return;
      const isOpen = this.sidebar.classList.contains('mobile-open');
      if (isOpen) {
        this.closeMobileDrawer();
      } else {
        this.sidebar.classList.add('mobile-open');
        if (this.sidebarBackdrop) this.sidebarBackdrop.classList.add('open');
      }
    }

    closeMobileDrawer() {
      if (this.sidebar) this.sidebar.classList.remove('mobile-open');
      if (this.sidebarBackdrop) this.sidebarBackdrop.classList.remove('open');
    }

    // --- Authentication & Role Switching ---
    toggleLoginRole(role) {
      if (role) {
        this.currentLoginRole = role;
      } else {
        this.currentLoginRole = this.currentLoginRole === 'teacher' ? 'student' : 'teacher';
      }
      this.applyLoginRoleUI();
    }

    applyLoginRoleUI() {
      if (this.loginAlert) this.loginAlert.style.display = 'none';

      if (this.currentLoginRole === 'student') {
        if (this.loginCardTitle) this.loginCardTitle.textContent = this.t('loginStudentTitle');
        if (this.loginUsernameLabel) this.loginUsernameLabel.textContent = this.t('studentUsernameLabel');
        if (this.loginUsername) this.loginUsername.placeholder = this.t('studentPlaceholder');
        if (this.loginSubmitText) this.loginSubmitText.textContent = this.t('loginStudentSubmit');
        if (this.roleSwitchPrompt) this.roleSwitchPrompt.textContent = this.t('switchToTeacherPrompt');
        if (this.roleSwitchBtnText) this.roleSwitchBtnText.textContent = this.t('switchToTeacherBtn');
      } else {
        if (this.loginCardTitle) this.loginCardTitle.textContent = this.t('loginTeacherTitle');
        if (this.loginUsernameLabel) this.loginUsernameLabel.textContent = this.t('teacherUsernameLabel');
        if (this.loginUsername) this.loginUsername.placeholder = this.t('teacherPlaceholder');
        if (this.loginSubmitText) this.loginSubmitText.textContent = this.t('loginTeacherSubmit');
        if (this.roleSwitchPrompt) this.roleSwitchPrompt.textContent = this.t('switchToStudentPrompt');
        if (this.roleSwitchBtnText) this.roleSwitchBtnText.textContent = this.t('switchToStudentBtn');
      }
    }

    handleLogin(e) {
      if (e) e.preventDefault();
      const username = this.loginUsername ? this.loginUsername.value.trim() : '';
      const password = this.loginPassword ? this.loginPassword.value.trim() : '';
      const remember = this.rememberMeCheckbox ? this.rememberMeCheckbox.checked : false;

      if (!username || !password) {
        if (this.loginAlert) {
          this.loginAlert.style.display = 'flex';
          if (this.loginAlertText) this.loginAlertText.textContent = this.t('loginFailedMsg');
        }
        return;
      }

      if (this.loginAlert) this.loginAlert.style.display = 'none';

      const cleanUsername = username.includes('@') ? username.split('@')[0] : username;
      const isRaheem = cleanUsername.toLowerCase() === 'raheem';

      if (this.currentLoginRole === 'student') {
        const studentName = isRaheem ? 'Damian Mouzo Otero' : (cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1));
        this.currentUser = {
          username: cleanUsername.toLowerCase(),
          email: username.includes('@') ? username : `${cleanUsername.toLowerCase()}@stud.lpu.in`,
          fullName: `${studentName} (Student)`,
          role: 'STUDENT'
        };
      } else {
        this.currentUser = {
          username: isRaheem ? 'raheem' : cleanUsername.toLowerCase(),
          email: username.includes('@') ? username : `${cleanUsername.toLowerCase()}@lpu.in`,
          fullName: isRaheem ? 'Raheem Sterling' : `${cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1)} (Faculty Coordinator)`,
          role: 'TEACHER'
        };
      }

      sessionStorage.setItem('tfb_auth_user', JSON.stringify(this.currentUser));
      if (remember) {
        localStorage.setItem('tfb_auth_user', JSON.stringify(this.currentUser));
      } else {
        localStorage.removeItem('tfb_auth_user');
      }

      this.updateAuthStateUI();
      this.render();
      this.showToast(this.t('loginSuccessToast', this.currentUser.fullName), 'success');
    }

    handleLogout() {
      sessionStorage.removeItem('tfb_auth_user');
      localStorage.removeItem('tfb_auth_user');
      this.currentUser = null;
      if (this.loginPassword) this.loginPassword.value = '';
      if (this.userMenuBtn) this.userMenuBtn.classList.remove('open');
      this.closeMobileDrawer();
      this.closeAllModals();
      this.updateAuthStateUI();
      this.showToast(this.t('logoutSuccessToast'), 'info');
    }

    togglePasswordVisibility() {
      if (!this.loginPassword) return;
      const isPassword = this.loginPassword.type === 'password';
      this.loginPassword.type = isPassword ? 'text' : 'password';
      if (this.eyeIconSvg) {
        this.eyeIconSvg.innerHTML = isPassword
          ? `<path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" /><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />`
          : `<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />`;
      }
    }

    updateAuthStateUI() {
      if (this.currentUser) {
        if (this.loginView) this.loginView.style.display = 'none';
        if (this.portalView) this.portalView.style.display = 'block';

        if (this.topbarUsername) this.topbarUsername.textContent = this.currentUser.username;
        if (this.dropdownUserFullName) this.dropdownUserFullName.textContent = this.currentUser.fullName || this.currentUser.username;
        if (this.dropdownUserEmail) this.dropdownUserEmail.textContent = this.currentUser.email;
        if (this.dropdownRolePill) this.dropdownRolePill.textContent = this.currentUser.role;
        if (this.sidebarRoleTitle) this.sidebarRoleTitle.textContent = this.currentUser.role;

        // Role-based banners
        const isStudent = this.currentUser.role === 'STUDENT';
        if (this.studentStatusBanner) {
          this.studentStatusBanner.style.display = isStudent ? 'flex' : 'none';
          if (isStudent && this.studentBannerTitle) {
            this.studentBannerTitle.textContent = `Student Placement Portal: ${this.currentUser.fullName}`;
          }
        }
        if (isStudent && this.pageSubHeading) {
          this.pageSubHeading.textContent = 'Explore accredited Lehrbetriebe internship offers and track your placement dossier.';
        } else if (this.pageSubHeading) {
          this.pageSubHeading.textContent = 'Manage accredited Lehrbetriebe placements, candidate evaluations, and faculty approvals.';
        }
      } else {
        if (this.loginView) this.loginView.style.display = 'flex';
        if (this.portalView) this.portalView.style.display = 'none';
        this.applyLoginRoleUI();
      }
    }

    // --- Language & Translations ---
    setLanguage(lang) {
      if (this.currentLang === lang) return;
      this.currentLang = lang;
      localStorage.setItem('tfb_lang', lang);

      const langSwitch = document.getElementById('langSwitch');
      if (langSwitch) {
        langSwitch.classList.toggle('de-active', lang === 'de');
      }

      this.langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
      this.loginLangButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));

      this.applyTranslations();
      if (this.currentUser) this.render();
      this.showToast(this.t('toastLangChanged', lang), 'info');
    }

    applyTranslations() {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        el.textContent = this.t(key);
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = this.t(key);
      });

      this.applyLoginRoleUI();
    }

    // --- Status Filter & Search ---
    setFilter(filter) {
      this.currentFilter = filter;
      this.filterTabs.forEach((tab) => {
        const isActive = tab.dataset.filter === filter;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      this.currentPage = 1;
      this.render();
    }

    getFilteredOffers() {
      return this.offers.filter((item) => {
        const matchesStatus =
          this.currentFilter === 'all' ||
          item.approvalStatus.toLowerCase() === this.currentFilter.toLowerCase();

        if (!matchesStatus) return false;
        if (!this.searchQuery) return true;

        const q = this.searchQuery;
        return (
          item.internship.title.toLowerCase().includes(q) ||
          item.learner.name.toLowerCase().includes(q) ||
          item.learner.email.toLowerCase().includes(q) ||
          item.learner.class.toLowerCase().includes(q) ||
          item.company.name.toLowerCase().includes(q)
        );
      });
    }

    updateCounts() {
      const allCount = this.offers.length;
      const acceptedCount = this.offers.filter((o) => o.approvalStatus === 'Accepted').length;
      const rejectedCount = this.offers.filter((o) => o.approvalStatus === 'Rejected').length;
      const pendingCount = this.offers.filter((o) => o.approvalStatus === 'Pending').length;

      if (this.badgeAll) this.badgeAll.textContent = allCount;
      if (this.badgeAccepted) this.badgeAccepted.textContent = acceptedCount;
      if (this.badgeRejected) this.badgeRejected.textContent = rejectedCount;
      if (this.badgePending) this.badgePending.textContent = pendingCount;

      // Pending Banner for Teachers
      if (this.pendingAlertBanner && this.currentUser) {
        if (this.currentUser.role === 'TEACHER' && pendingCount > 0) {
          this.pendingAlertBanner.style.display = 'flex';
          if (this.pendingAlertCount) {
            this.pendingAlertCount.textContent = `${pendingCount} Internship Offer${pendingCount > 1 ? 's' : ''}`;
          }
        } else {
          this.pendingAlertBanner.style.display = 'none';
        }
      }
    }

    goToPage(pageNum) {
      this.currentPage = pageNum;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Fast 1-Click Accept & Reject Options ---
    quickAccept(offerId) {
      const offer = this.offers.find((o) => o.id === offerId);
      if (!offer) return;

      const prevStatus = offer.approvalStatus;
      this.lastAction = { type: 'status_change', offerId, prevStatus, newStatus: 'Accepted' };

      offer.approvalStatus = 'Accepted';

      // Synchronize with Applications
      const matchingApp = this.applications.find(
        (a) => a.student.toLowerCase() === offer.learner.name.toLowerCase()
      );
      if (matchingApp) {
        matchingApp.status = 'Accepted';
        matchingApp.badgeClass = 'pill-accepted';
        this.saveApplications();
      }

      // Synchronize with Interns
      const matchingIntern = this.interns.find(
        (i) => i.name.toLowerCase() === offer.learner.name.toLowerCase()
      );
      if (matchingIntern) {
        matchingIntern.status = 'Assigned';
        matchingIntern.placement = offer.company.name;
        this.saveInterns();
      }

      this.saveOffers();
      this.render();

      this.showToast(
        `✓ Accepted internship for ${offer.learner.name} at ${offer.company.name}`,
        'success',
        () => this.undoLastAction()
      );
    }

    quickReject(offerId) {
      const offer = this.offers.find((o) => o.id === offerId);
      if (!offer) return;

      const prevStatus = offer.approvalStatus;
      this.lastAction = { type: 'status_change', offerId, prevStatus, newStatus: 'Rejected' };

      offer.approvalStatus = 'Rejected';

      // Synchronize with Applications
      const matchingApp = this.applications.find(
        (a) => a.student.toLowerCase() === offer.learner.name.toLowerCase()
      );
      if (matchingApp) {
        matchingApp.status = 'Rejected';
        matchingApp.badgeClass = 'pill-rejected';
        this.saveApplications();
      }

      // Synchronize with Interns
      const matchingIntern = this.interns.find(
        (i) => i.name.toLowerCase() === offer.learner.name.toLowerCase()
      );
      if (matchingIntern) {
        matchingIntern.status = 'Available';
        matchingIntern.placement = 'Seeking Placement';
        this.saveInterns();
      }

      this.saveOffers();
      this.render();

      this.showToast(
        `✕ Rejected internship offer for ${offer.learner.name}`,
        'danger',
        () => this.undoLastAction()
      );
    }

    quickSetStatus(offerId, newStatus) {
      this.closeAllStatusMenus();
      const offer = this.offers.find((o) => o.id === offerId);
      if (!offer) return;

      const prevStatus = offer.approvalStatus;
      if (prevStatus === newStatus) return;

      this.lastAction = { type: 'status_change', offerId, prevStatus, newStatus };
      offer.approvalStatus = newStatus;

      // Sync applications and interns
      const matchingApp = this.applications.find(
        (a) => a.student.toLowerCase() === offer.learner.name.toLowerCase()
      );
      if (matchingApp) {
        matchingApp.status = newStatus;
        matchingApp.badgeClass = newStatus === 'Accepted' ? 'pill-accepted' : newStatus === 'Rejected' ? 'pill-rejected' : 'pill-pending';
        this.saveApplications();
      }

      const matchingIntern = this.interns.find(
        (i) => i.name.toLowerCase() === offer.learner.name.toLowerCase()
      );
      if (matchingIntern) {
        matchingIntern.status = newStatus === 'Accepted' ? 'Assigned' : newStatus === 'Pending' ? 'Pending' : 'Available';
        this.saveInterns();
      }

      this.saveOffers();
      this.render();

      this.showToast(
        `Status updated to ${newStatus} for ${offer.learner.name}`,
        newStatus === 'Accepted' ? 'success' : newStatus === 'Rejected' ? 'danger' : 'info',
        () => this.undoLastAction()
      );
    }

    toggleStatusMenu(offerId, event) {
      if (event) event.stopPropagation();
      const targetWrap = document.getElementById(`statusWrap-${offerId}`);
      if (!targetWrap) return;

      const wasOpen = targetWrap.classList.contains('open');
      this.closeAllStatusMenus();
      if (!wasOpen) {
        targetWrap.classList.add('open');
      }
    }

    closeAllStatusMenus() {
      document.querySelectorAll('.status-dropdown-wrap.open').forEach((w) => w.classList.remove('open'));
    }

    approveAllPending() {
      const pendingOffers = this.offers.filter((o) => o.approvalStatus === 'Pending');
      if (pendingOffers.length === 0) {
        this.showToast('No pending offers to approve.', 'info');
        return;
      }

      pendingOffers.forEach((offer) => {
        offer.approvalStatus = 'Accepted';
        const matchingApp = this.applications.find(
          (a) => a.student.toLowerCase() === offer.learner.name.toLowerCase()
        );
        if (matchingApp) {
          matchingApp.status = 'Accepted';
          matchingApp.badgeClass = 'pill-accepted';
        }
      });

      this.saveOffers();
      this.saveApplications();
      this.render();

      this.showToast(
        `✓ All ${pendingOffers.length} pending internship offers approved successfully!`,
        'success'
      );
    }

    undoLastAction() {
      if (!this.lastAction) return;

      const { offerId, prevStatus } = this.lastAction;
      const offer = this.offers.find((o) => o.id === offerId);
      if (offer) {
        offer.approvalStatus = prevStatus;
        this.saveOffers();
        this.render();
        this.showToast(`Undone: Status reverted back to ${prevStatus}`, 'info');
      }
      this.lastAction = null;
    }

    studentApply(offerId) {
      const offer = this.offers.find((o) => o.id === offerId);
      if (!offer) return;
      this.showToast(`Application submitted for ${offer.internship.title} at ${offer.company.name}!`, 'success');
    }

    // --- Table Rendering ---
    render() {
      this.updateCounts();
      const filtered = this.getFilteredOffers();
      const isTeacher = !this.currentUser || this.currentUser.role === 'TEACHER';

      if (filtered.length === 0) {
        this.tableBody.innerHTML = '';
        this.emptyState.style.display = 'flex';
        this.pageInfoText.textContent = this.t('pageOf', 1, 1);
        this.pageNumbers.innerHTML = `<button class="page-number-btn active">${this.t('pageBtn', 1)}</button>`;
        this.prevPageBtn.disabled = true;
        this.nextPageBtn.disabled = true;
        return;
      }

      this.emptyState.style.display = 'none';

      const totalPages = Math.ceil(filtered.length / this.itemsPerPage) || 1;
      if (this.currentPage > totalPages) this.currentPage = totalPages;

      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const pagedItems = filtered.slice(startIndex, startIndex + this.itemsPerPage);

      this.tableBody.innerHTML = pagedItems
        .map((offer, index) => {
          const serialNum = offer.sn !== undefined ? offer.sn : startIndex + index + 1;
          const statusClass = `status-${offer.approvalStatus.toLowerCase()}`;
          const isPending = offer.approvalStatus === 'Pending';
          const isAccepted = offer.approvalStatus === 'Accepted';
          const isRejected = offer.approvalStatus === 'Rejected';

          // Action buttons depending on teacher vs student
          let actionsHtml = '';
          if (isTeacher) {
            if (isPending) {
              actionsHtml = `
                <button class="btn-row-reject" onclick="app.quickReject('${offer.id}')" title="Reject Application">
                  <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  <span>${this.t('rejectBtn')}</span>
                </button>
                <button class="btn-row-accept" onclick="app.quickAccept('${offer.id}')" title="Approve Application">
                  <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>${this.t('acceptBtn')}</span>
                </button>
              `;
            } else if (isAccepted) {
              actionsHtml = `
                <button class="btn-row-subtle-reject" onclick="app.quickReject('${offer.id}')" title="Change to Rejected">
                  Reject
                </button>
              `;
            } else if (isRejected) {
              actionsHtml = `
                <button class="btn-row-subtle-accept" onclick="app.quickAccept('${offer.id}')" title="Re-approve Offer">
                  Re-Approve
                </button>
              `;
            }
            actionsHtml += `
              <button class="btn-view-action" title="${this.t('viewTooltip')}" onclick="app.viewOfferDetails('${offer.id}')">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
              </button>
            `;
          } else {
            // Student View
            actionsHtml = `
              <button class="btn-view-action" title="${this.t('viewTooltip')}" onclick="app.viewOfferDetails('${offer.id}')">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
              </button>
              ${isPending ? `<button class="btn-apply-action" onclick="app.studentApply('${offer.id}')">Apply Now</button>` : ''}
            `;
          }

          return `
            <tr data-offer-id="${offer.id}">
              <td class="td-sn">${serialNum}</td>
              <td class="td-learner">
                <div class="learner-cell">
                  <div class="field-row">
                    <span class="field-label">${this.t('nameLabel')}</span>
                    <span class="field-val-name">${this.escapeHTML(offer.learner.name)}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">${this.t('emailLabel')}</span>
                    <span class="field-val-email">${this.escapeHTML(offer.learner.email)}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">${this.t('classLabel')}</span>
                    <span class="field-val-class">${this.escapeHTML(offer.learner.class)}</span>
                  </div>
                </div>
              </td>
              <td class="td-internship">
                <div class="internship-cell">
                  <div class="field-row">
                    <span class="field-label">${this.t('titleLabel')}</span>
                    <span class="field-val-title">${this.escapeHTML(offer.internship.title)}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">${this.t('startDateLabel')}</span>
                    <span>${this.escapeHTML(offer.internship.startDate)}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">${this.t('endDateLabel')}</span>
                    <span>${this.escapeHTML(offer.internship.endDate)}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">${this.t('expiryDateLabel')}</span>
                    <span>${this.escapeHTML(offer.internship.expiryDate)}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">${this.t('statusLabel')}</span>
                    <span class="status-active-badge">
                      <span class="dot"></span>
                      ${this.t('activeBadge')}
                    </span>
                  </div>
                </div>
              </td>
              <td class="td-company">
                <div class="company-cell">${this.escapeHTML(offer.company.name)}</div>
              </td>
              <td class="td-status">
                <div class="status-dropdown-wrap" id="statusWrap-${offer.id}">
                  <button class="status-pill ${statusClass} ${isTeacher ? 'status-pill-interactive' : ''}" 
                    ${isTeacher ? `onclick="app.toggleStatusMenu('${offer.id}', event)"` : ''} 
                    title="${isTeacher ? 'Click to change status' : offer.approvalStatus}">
                    <span class="dot"></span>
                    <span>${this.t(offer.approvalStatus.toLowerCase())}</span>
                    ${isTeacher ? `
                      <svg class="pill-chevron" viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                    ` : ''}
                  </button>
                  ${isTeacher ? `
                    <div class="status-menu">
                      <div class="status-menu-header">Change Status</div>
                      <button class="status-menu-item" onclick="app.quickSetStatus('${offer.id}', 'Accepted')">
                        <span class="menu-dot dot-green"></span>
                        <span>Set to Accepted</span>
                        ${isAccepted ? '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
                      </button>
                      <button class="status-menu-item" onclick="app.quickSetStatus('${offer.id}', 'Pending')">
                        <span class="menu-dot dot-amber"></span>
                        <span>Set to Pending</span>
                        ${isPending ? '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
                      </button>
                      <button class="status-menu-item" onclick="app.quickSetStatus('${offer.id}', 'Rejected')">
                        <span class="menu-dot dot-red"></span>
                        <span>Set to Rejected</span>
                        ${isRejected ? '<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
                      </button>
                    </div>
                  ` : ''}
                </div>
              </td>
              <td class="td-actions">
                <div class="actions-cell">
                  ${actionsHtml}
                </div>
              </td>
            </tr>
          `;
        })
        .join('');

      // Pagination UI
      this.pageInfoText.textContent = this.t('pageOf', this.currentPage, totalPages);
      this.prevPageBtn.disabled = this.currentPage <= 1;
      this.nextPageBtn.disabled = this.currentPage >= totalPages;

      let pageBtnsHTML = '';
      for (let p = 1; p <= totalPages; p++) {
        pageBtnsHTML += `<button class="page-number-btn ${p === this.currentPage ? 'active' : ''}" onclick="app.goToPage(${p})">${this.t('pageBtn', p)}</button>`;
      }
      this.pageNumbers.innerHTML = pageBtnsHTML;
    }

    // --- View Dossier Modal ---
    viewOfferDetails(offerId) {
      const offer = this.offers.find((o) => o.id === offerId);
      if (!offer) return;

      this.viewModalTitle.textContent = offer.internship.title;
      const statusClass = `status-${offer.approvalStatus.toLowerCase()}`;
      const isTeacher = !this.currentUser || this.currentUser.role === 'TEACHER';

      this.viewModalBody.innerHTML = `
        <div class="view-dossier-wrap">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color); flex-wrap: wrap; gap: 10px;">
            <div>
              <span class="modal-subtitle">Enrollment & Contract Dossier</span>
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 2px;">${this.escapeHTML(offer.learner.name)}</h3>
            </div>
            <span class="status-pill ${statusClass}" style="padding: 6px 14px; font-size: 13px;">
              <span class="dot"></span>
              ${this.t(offer.approvalStatus.toLowerCase())}
            </span>
          </div>

          <div class="form-grid" style="margin-bottom: 16px;">
            <div class="dossier-card" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 14px;">
              <h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 8px;">Candidate Information</h4>
              <p style="margin-bottom: 4px;"><strong>Class:</strong> ${this.escapeHTML(offer.learner.class)}</p>
              <p style="margin-bottom: 4px;"><strong>Email:</strong> ${this.escapeHTML(offer.learner.email)}</p>
              <p style="margin-bottom: 4px;"><strong>Phone:</strong> ${this.escapeHTML(offer.learner.phone || '+91 98765 43210')}</p>
              <p><strong>Campus Base:</strong> ${this.escapeHTML(offer.learner.location || 'Lovely Professional University')}</p>
            </div>
            <div class="dossier-card" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 14px;">
              <h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 8px;">Partner Lehrbetrieb</h4>
              <p style="margin-bottom: 4px;"><strong>Company:</strong> ${this.escapeHTML(offer.company.name)}</p>
              <p style="margin-bottom: 4px;"><strong>Supervisor:</strong> ${this.escapeHTML(offer.company.contactPerson)}</p>
              <p style="margin-bottom: 4px;"><strong>Address:</strong> ${this.escapeHTML(offer.company.address)}</p>
              <p><strong>Email:</strong> ${this.escapeHTML(offer.company.email)}</p>
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
            <h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 6px;">Duration & Timeline</h4>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 12.5px;">
              <div><strong>Start Date:</strong> ${this.escapeHTML(offer.internship.startDate)}</div>
              <div><strong>End Date:</strong> ${this.escapeHTML(offer.internship.endDate)}</div>
              <div><strong>Application Cutoff:</strong> ${this.escapeHTML(offer.internship.expiryDate)}</div>
            </div>
          </div>

          <div>
            <h4 style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 6px;">Training Objectives</h4>
            <p style="font-size: 13px; color: #475569; line-height: 1.6; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid var(--border-color);">
              ${this.escapeHTML(offer.internship.description)}
            </p>
          </div>
        </div>
      `;

      // Modal Footer Actions
      if (isTeacher) {
        this.modalDynamicActions.innerHTML = `
          <button class="btn-row-reject" style="padding: 7px 14px; font-size: 12.5px;" onclick="app.quickReject('${offer.id}'); app.viewOfferDetails('${offer.id}');">
            <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            Reject Offer
          </button>
          <button class="btn-row-accept" style="padding: 7px 14px; font-size: 12.5px;" onclick="app.quickAccept('${offer.id}'); app.viewOfferDetails('${offer.id}');">
            <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Approve Internship
          </button>
          ${offer.approvalStatus !== 'Pending' ? `
            <button class="btn-modal-secondary" style="padding: 7px 12px; font-size: 12px;" onclick="app.quickSetStatus('${offer.id}', 'Pending'); app.viewOfferDetails('${offer.id}');">
              Reset to Pending
            </button>
          ` : ''}
        `;
      } else {
        this.modalDynamicActions.innerHTML = `
          <button class="btn-modal-secondary" onclick="window.print()">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" style="margin-right: 4px;">
              <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"/>
            </svg>
            Print Dossier
          </button>
        `;
      }

      this.openModal('viewModalOverlay');
    }

    closeViewModal() {
      this.closeModal('viewModalOverlay');
    }

    // --- Create New Offer Modal ---
    openAddOfferModal() {
      this.openModal('addOfferModalOverlay');
      const input = document.getElementById('newLearnerName');
      if (input) input.focus();
    }

    closeAddOfferModal() {
      this.closeModal('addOfferModalOverlay');
      if (this.addOfferForm) this.addOfferForm.reset();
    }

    handleCreateOffer() {
      const learnerName = document.getElementById('newLearnerName').value.trim();
      const learnerEmail = document.getElementById('newLearnerEmail').value.trim();
      const learnerClass = document.getElementById('newLearnerClass').value.trim();
      const title = document.getElementById('newOfferTitle').value.trim();
      const company = document.getElementById('newCompany').value.trim();
      const startDate = document.getElementById('newStartDate').value;
      const endDate = document.getElementById('newEndDate').value;
      const expiryDate = document.getElementById('newExpiryDate').value;
      const initialStatus = document.getElementById('newInitialStatus').value;

      if (!learnerName || !title || !company) return;

      const formatInputDate = (d) => {
        if (!d) return 'TBD';
        const parts = d.split('-');
        if (parts.length === 3) {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const m = parseInt(parts[1], 10) - 1;
          return `${months[m] || 'Month'} ${parts[2]}, ${parts[0]}`;
        }
        return d;
      };

      const newOffer = {
        id: `offer-${Date.now()}`,
        sn: 1,
        learner: {
          name: learnerName,
          email: learnerEmail,
          class: learnerClass,
          phone: '+91 98765 00000',
          location: 'Lovely Professional University'
        },
        internship: {
          title: title,
          startDate: formatInputDate(startDate),
          endDate: formatInputDate(endDate),
          expiryDate: formatInputDate(expiryDate),
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

      this.offers.unshift(newOffer);
      this.offers.forEach((o, i) => (o.sn = i + 1));

      this.saveOffers();
      this.closeAddOfferModal();
      this.render();
      this.showToast(this.t('toastAdded'), 'success');
    }

    // --- Toast Notifications with Undo ---
    showToast(message, type = 'info', undoCallback = null) {
      if (!this.toastContainer) return;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;

      let iconSvg = '';
      if (type === 'success') {
        iconSvg = `<svg viewBox="0 0 20 20" width="18" height="18" fill="#16a34a"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
      } else if (type === 'danger') {
        iconSvg = `<svg viewBox="0 0 20 20" width="18" height="18" fill="#ef4444"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`;
      } else {
        iconSvg = `<svg viewBox="0 0 20 20" width="18" height="18" fill="#ea580c"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;
      }

      toast.innerHTML = `
        ${iconSvg}
        <span class="toast-msg">${message}</span>
        ${undoCallback ? '<button class="toast-btn-undo">Undo</button>' : ''}
        <button class="toast-close">&times;</button>
      `;

      if (undoCallback) {
        const undoBtn = toast.querySelector('.toast-btn-undo');
        undoBtn.addEventListener('click', () => {
          undoCallback();
          toast.remove();
        });
      }

      toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
      this.toastContainer.appendChild(toast);

      setTimeout(() => {
        if (toast.parentElement) {
          toast.style.opacity = '0';
          toast.style.transform = 'translateY(10px)';
          toast.style.transition = 'opacity 0.25s, transform 0.25s';
          setTimeout(() => toast.remove(), 250);
        }
      }, 4500);
    }

    // --- Modal Dialogs & Navigation Controller ---
    handleNavClick(nav) {
      switch (nav) {
        case 'dashboard':
          this.openModal('dashboardModalOverlay');
          break;
        case 'applications':
          this.openModal('applicationsModalOverlay');
          break;
        case 'offers':
          this.showOffersView();
          break;
        case 'assign':
          this.openModal('assignModalOverlay');
          break;
        case 'profiles':
          this.openModal('profilesModalOverlay');
          break;
        case 'companies':
          this.openModal('companiesModalOverlay');
          break;
        case 'incidents':
          this.openModal('incidentsModalOverlay');
          break;
        case 'documents':
          this.openModal('documentsModalOverlay');
          break;
        case 'profile':
          this.openModal('profileModalOverlay');
          break;
        case 'password':
          this.openModal('passwordModalOverlay');
          break;
        default:
          break;
      }
    }

    setActiveSidebar(nav) {
      document.querySelectorAll('.sidebar-nav a').forEach((a) => {
        a.classList.toggle('active', a.dataset.nav === nav);
      });
    }

    openModal(modalId) {
      if (this.userMenuBtn) this.userMenuBtn.classList.remove('open');
      this.closeMobileDrawer();
      this.closeAllStatusMenus();

      this.closeAllModals();

      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('open');
        document.body.classList.add('modal-open');

        const navMap = {
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
          this.setActiveSidebar(navMap[modalId]);
        }

        if (modalId === 'dashboardModalOverlay') {
          const pendingCount = this.offers.filter((o) => o.approvalStatus === 'Pending').length;
          const kpi = document.getElementById('kpiPendingCount');
          if (kpi) kpi.textContent = pendingCount;
        } else if (modalId === 'applicationsModalOverlay') {
          this.renderApplications();
        } else if (modalId === 'profilesModalOverlay') {
          this.renderInterns();
        } else if (modalId === 'companiesModalOverlay') {
          this.renderCompanies();
        } else if (modalId === 'incidentsModalOverlay') {
          this.renderIncidents();
        } else if (modalId === 'documentsModalOverlay') {
          this.renderDocuments();
        } else if (modalId === 'profileModalOverlay') {
          this.populateProfileForm();
        }
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
      this.setActiveSidebar('offers');
    }

    closeAllModals() {
      document.querySelectorAll('.modal-overlay').forEach((m) => m.classList.remove('open'));
      document.body.classList.remove('modal-open');
    }

    showOffersView() {
      this.closeAllModals();
      this.setActiveSidebar('offers');
      this.closeMobileDrawer();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Applications Management with Approve & Reject ---
    setAppFilter(filter) {
      this.appFilter = filter;
      document.querySelectorAll('.app-filter-chip').forEach((chip) => {
        chip.classList.toggle('active', chip.dataset.appfilter === filter);
      });
      this.filterApplications(document.getElementById('appSearchInput') ? document.getElementById('appSearchInput').value : '');
    }

    renderApplications(list = this.applications) {
      const tbody = document.getElementById('applicationsTableBody');
      const badge = document.getElementById('appsCountBadge');
      if (badge) badge.textContent = `${list.length} Applications`;
      if (!tbody) return;

      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94a3b8; padding: 24px;">No applications found matching your query.</td></tr>`;
        return;
      }

      tbody.innerHTML = list
        .map((app) => {
          const isPending = app.status.includes('Pending') || app.status.includes('Awaiting') || app.status === 'Screening' || app.status === 'Under Review' || app.status === 'Technical Interview';
          const isAccepted = app.status === 'Accepted' || app.status === 'Placement Confirmed';

          return `
            <tr>
              <td>
                <strong>${this.escapeHTML(app.student)}</strong><br>
                <small style="color: #64748b;">${this.escapeHTML(app.class)} &bull; ${this.escapeHTML(app.email)}</small>
              </td>
              <td><strong>${this.escapeHTML(app.company)}</strong></td>
              <td>${this.escapeHTML(app.position)}</td>
              <td>${this.escapeHTML(app.date)}</td>
              <td><span class="status-pill ${app.badgeClass}">${this.escapeHTML(app.status)}</span></td>
              <td>
                <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
                  ${
                    isPending
                      ? `
                    <button class="btn-row-accept" style="padding: 4px 9px; font-size: 11px;" onclick="app.approveApplication('${app.id}')" title="Approve application">
                      <svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                      Approve
                    </button>
                    <button class="btn-row-reject" style="padding: 4px 9px; font-size: 11px;" onclick="app.rejectApplication('${app.id}')" title="Reject application">
                      <svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                      Reject
                    </button>
                  `
                      : isAccepted
                      ? `
                    <button class="btn-row-subtle-reject" style="padding: 3px 8px; font-size: 11px;" onclick="app.rejectApplication('${app.id}')">
                      Reject
                    </button>
                  `
                      : `
                    <button class="btn-row-subtle-accept" style="padding: 3px 8px; font-size: 11px;" onclick="app.approveApplication('${app.id}')">
                      Approve
                    </button>
                  `
                  }
                  <button class="btn-action-outline" onclick="app.viewApplicationDossier('${app.id}')">Dossier</button>
                </div>
              </td>
            </tr>
          `;
        })
        .join('');
    }

    filterApplications(query) {
      const q = (query || '').toLowerCase().trim();
      let filtered = this.applications.filter((a) => {
        const matchesQuery =
          !q ||
          a.student.toLowerCase().includes(q) ||
          a.company.toLowerCase().includes(q) ||
          a.position.toLowerCase().includes(q) ||
          a.class.toLowerCase().includes(q);

        if (!matchesQuery) return false;

        if (this.appFilter === 'pending') {
          return a.status.includes('Pending') || a.status.includes('Awaiting') || a.status === 'Screening' || a.status === 'Under Review' || a.status === 'Technical Interview';
        } else if (this.appFilter === 'accepted') {
          return a.status === 'Accepted' || a.status === 'Placement Confirmed';
        }
        return true;
      });

      this.renderApplications(filtered);
    }

    approveApplication(id) {
      const target = this.applications.find((a) => a.id === id);
      if (target) {
        target.status = 'Accepted';
        target.badgeClass = 'pill-accepted';

        const matchingOffer = this.offers.find((o) => o.learner.name.toLowerCase() === target.student.toLowerCase());
        if (matchingOffer) {
          matchingOffer.approvalStatus = 'Accepted';
          this.saveOffers();
          this.render();
        }

        const matchingIntern = this.interns.find((i) => i.name.toLowerCase() === target.student.toLowerCase());
        if (matchingIntern) {
          matchingIntern.status = 'Assigned';
          matchingIntern.placement = target.company;
          this.saveInterns();
        }

        this.saveApplications();
        this.renderApplications();
        this.showToast(`✓ Application for ${target.student} approved!`, 'success');
      }
    }

    rejectApplication(id) {
      const target = this.applications.find((a) => a.id === id);
      if (target) {
        target.status = 'Rejected';
        target.badgeClass = 'pill-rejected';

        const matchingOffer = this.offers.find((o) => o.learner.name.toLowerCase() === target.student.toLowerCase());
        if (matchingOffer) {
          matchingOffer.approvalStatus = 'Rejected';
          this.saveOffers();
          this.render();
        }

        const matchingIntern = this.interns.find((i) => i.name.toLowerCase() === target.student.toLowerCase());
        if (matchingIntern) {
          matchingIntern.status = 'Available';
          matchingIntern.placement = 'Seeking Placement';
          this.saveInterns();
        }

        this.saveApplications();
        this.renderApplications();
        this.showToast(`✕ Application for ${target.student} rejected.`, 'danger');
      }
    }

    viewApplicationDossier(id) {
      const target = this.applications.find((a) => a.id === id);
      if (target) {
        const matchingOffer = this.offers.find((o) => o.learner.name.toLowerCase() === target.student.toLowerCase());
        if (matchingOffer) {
          this.viewOfferDetails(matchingOffer.id);
        } else {
          this.showToast(`Candidate: ${target.student} (${target.position} at ${target.company})`, 'info');
        }
      }
    }

    // --- Interns Profiles Directory ---
    renderInterns(list = this.interns) {
      const grid = document.getElementById('internsCardGrid');
      const badge = document.getElementById('internsCountBadge');
      if (badge) badge.textContent = `${list.length} Registered Interns`;
      if (!grid) return;

      if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 3; text-align: center; color: #94a3b8; padding: 24px;">No intern profiles found matching search criteria.</div>`;
        return;
      }

      grid.innerHTML = list
        .map((int) => {
          const initials = int.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2);
          const isAssigned = int.status === 'Assigned';
          const isPending = int.status === 'Pending';
          const pillClass = isAssigned ? 'pill-accepted' : isPending ? 'pill-pending' : 'pill-active';

          return `
            <div class="intern-card">
              <div class="intern-card-header">
                <div class="intern-avatar">${initials}</div>
                <div>
                  <strong>${this.escapeHTML(int.name)}</strong><br>
                  <small style="color: #64748b;">${this.escapeHTML(int.class)}</small>
                </div>
              </div>

              <div style="font-size: 12px; display: flex; flex-direction: column; gap: 4px;">
                <div style="font-weight: 600; color: #0f172a;">${this.escapeHTML(int.placement)}</div>
                <div style="color: #64748b;">✉ ${this.escapeHTML(int.email)}</div>
                <div style="color: #64748b;">☎ ${this.escapeHTML(int.phone)}</div>
              </div>

              <div class="intern-tags">
                ${int.tags.map((t) => `<span class="tag-skill">${this.escapeHTML(t)}</span>`).join('')}
              </div>

              <div class="intern-actions">
                ${
                  isPending
                    ? `<button class="btn-row-accept" style="padding: 5px 10px; font-size: 11px; flex: 1;" onclick="app.quickAccept('offer-3')">Approve</button>`
                    : ''
                }
                <button class="btn-card-link" onclick="app.downloadCV('${int.name}')">📄 CV (PDF)</button>
                <button class="btn-card-link" onclick="app.openPortfolio('${int.name}')">🔗 Portfolio</button>
              </div>
            </div>
          `;
        })
        .join('');
    }

    filterInternCards(query) {
      const q = (query || '').toLowerCase().trim();
      const filtered = this.interns.filter(
        (int) =>
          int.name.toLowerCase().includes(q) ||
          int.class.toLowerCase().includes(q) ||
          int.placement.toLowerCase().includes(q) ||
          int.tags.some((t) => t.toLowerCase().includes(q))
      );
      this.renderInterns(filtered);
    }

    downloadCV(name) {
      this.showToast(`Downloading verified resume for ${name}...`, 'info');
    }

    openPortfolio(name) {
      this.showToast(`Opening student GitHub & portfolio for ${name}`, 'info');
    }

    // --- Companies Directory ---
    renderCompanies(list = this.companies) {
      const grid = document.getElementById('companiesCardGrid');
      if (!grid) return;

      if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 3; text-align: center; color: #94a3b8; padding: 24px;">No partner Lehrbetriebe matching search.</div>`;
        return;
      }

      grid.innerHTML = list
        .map(
          (c) => `
          <div class="company-card">
            <div class="company-card-header">
              <div class="company-logo-icon">🏢</div>
              <div>
                <strong>${this.escapeHTML(c.name)}</strong><br>
                <small style="color: #64748b;">${this.escapeHTML(c.sector)}</small>
              </div>
            </div>

            <div style="font-size: 12px; display: flex; flex-direction: column; gap: 4px; color: #475569;">
              <div>📍 ${this.escapeHTML(c.location)}</div>
              <div>👤 Mentor: <strong>${this.escapeHTML(c.mentor)}</strong></div>
              <div>✉ ${this.escapeHTML(c.email)}</div>
            </div>

            <div class="company-footer">
              <span class="badge-count" style="font-size: 11px; padding: 3px 8px;">${c.activeInterns} Active Intern${c.activeInterns > 1 ? 's' : ''}</span>
              <button class="btn-card-link" onclick="app.contactCompany('${c.email}')">Contact</button>
            </div>
          </div>
        `
        )
        .join('');
    }

    filterCompanies(query) {
      const q = (query || '').toLowerCase().trim();
      const filtered = this.companies.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.sector.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q) ||
          c.mentor.toLowerCase().includes(q)
      );
      this.renderCompanies(filtered);
    }

    contactCompany(email) {
      this.showToast(`Opening email client to contact ${email}...`, 'info');
    }

    openNewCompanyForm() {
      const name = prompt('Enter accredited Lehrbetrieb partner company name:');
      if (name && name.trim()) {
        const sector = prompt('Enter industry sector (e.g. Cloud, Medical, Telecom):') || 'Information Technology';
        const newComp = {
          id: `comp-${Date.now()}`,
          name: name.trim(),
          sector: sector.trim(),
          location: 'Lovely Professional University Campus Hub',
          mentor: 'Designated Faculty Mentor',
          email: 'contact@partner.lpu.in',
          activeInterns: 0
        };
        this.companies.unshift(newComp);
        this.renderCompanies();
        this.showToast(`Company ${name} registered successfully!`, 'success');
      }
    }

    // --- Incident Reports ---
    renderIncidents() {
      const tbody = document.getElementById('incidentsTableBody');
      if (!tbody) return;

      tbody.innerHTML = this.incidents
        .map(
          (inc) => `
          <tr>
            <td><strong>${this.escapeHTML(inc.id)}</strong></td>
            <td>${this.escapeHTML(inc.date)}</td>
            <td><strong>${this.escapeHTML(inc.student)}</strong></td>
            <td>${this.escapeHTML(inc.company)}</td>
            <td>${this.escapeHTML(inc.category)}</td>
            <td><span class="inc-severity ${inc.severityClass}">${this.escapeHTML(inc.severity)}</span></td>
            <td><strong>${this.escapeHTML(inc.status)}</strong></td>
            <td>
              <button class="btn-action-outline" onclick="app.showToast('Incident ${inc.id}: Logged by faculty. Status: ${inc.status}', 'info')">Details</button>
            </td>
          </tr>
        `
        )
        .join('');
    }

    openNewIncidentPrompt() {
      const student = prompt('Student name:');
      if (!student) return;
      const desc = prompt('Brief description / category of incident:') || 'General report';
      const newInc = {
        id: `INC-2026-00${this.incidents.length + 1}`,
        date: 'Today',
        student: student.trim(),
        company: 'Assigned Lehrbetrieb',
        category: desc.trim(),
        severity: 'Low',
        status: 'Open',
        severityClass: 'inc-green'
      };
      this.incidents.unshift(newInc);
      this.renderIncidents();
      this.showToast(`Incident report filed for ${student}.`, 'info');
    }

    // --- Documents ---
    renderDocuments() {
      const container = document.getElementById('documentsListContainer');
      if (!container) return;

      container.innerHTML = this.documents
        .map(
          (doc) => `
          <div class="doc-item">
            <div class="doc-item-left">
              <span class="doc-badge ${doc.type.toLowerCase()}">${doc.type}</span>
              <div>
                <strong>${this.escapeHTML(doc.title)}</strong><br>
                <small style="color: #64748b;">${doc.size} &bull; Updated ${doc.updated}</small>
              </div>
            </div>
            <div class="doc-actions">
              <button class="btn-action-outline" onclick="app.downloadDocument('${doc.title}')">Download</button>
              <button class="btn-action-outline" onclick="app.previewDocument('${doc.title}')">Preview</button>
            </div>
          </div>
        `
        )
        .join('');
    }

    downloadDocument(title) {
      this.showToast(`Downloading: "${title}"...`, 'info');
    }

    previewDocument(title) {
      this.showToast(`Opening live institutional preview: "${title}"`, 'info');
    }

    handleDocUpload(e) {
      const files = e ? e.target.files : null;
      if (files && files[0]) {
        const file = files[0];
        const newDoc = {
          id: `doc-${Date.now()}`,
          title: file.name,
          type: file.name.endsWith('.docx') ? 'DOC' : file.name.endsWith('.xlsx') ? 'XLS' : 'PDF',
          size: `${Math.round(file.size / 1024)} KB`,
          updated: 'Just now'
        };
        this.documents.unshift(newDoc);
        this.renderDocuments();
        this.showToast(`Uploaded "${file.name}" to official document vault!`, 'success');
      } else {
        const dummyName = prompt('Enter document title to upload (or select file):');
        if (dummyName) {
          this.documents.unshift({
            id: `doc-${Date.now()}`,
            title: dummyName.trim(),
            type: 'PDF',
            size: '250 KB',
            updated: 'Just now'
          });
          this.renderDocuments();
          this.showToast(`Uploaded "${dummyName}" successfully!`, 'success');
        }
      }
    }

    // --- Placement Assignment Form ---
    onAssignCompanyChange(selectEl) {
      const selected = selectEl.value;
      const mentorInput = document.getElementById('assignMentorName');
      const emailInput = document.getElementById('assignMentorEmail');
      const comp = this.companies.find((c) => c.name === selected);
      if (comp && mentorInput && emailInput) {
        mentorInput.value = comp.mentor;
        emailInput.value = comp.email;
      }
    }

    handleAssignInternship(e) {
      if (e) e.preventDefault();
      const studentName = document.getElementById('assignStudentSelect').value;
      const companyName = document.getElementById('assignCompanySelect').value;
      const title = document.getElementById('assignPositionTitle').value.trim();

      if (!studentName || !companyName) {
        this.showToast('Please select both student candidate and company.', 'danger');
        return;
      }

      const newOffer = {
        id: `offer-${Date.now()}`,
        sn: 1,
        learner: {
          name: studentName,
          email: `${studentName.toLowerCase().replace(/\s+/g, '.')}@stud.lpu.in`,
          class: 'ICT2025a',
          phone: '+91 98765 22000',
          location: 'Lovely Professional University'
        },
        internship: {
          title: title || `${companyName} Internship`,
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

      this.offers.unshift(newOffer);
      this.offers.forEach((o, i) => (o.sn = i + 1));
      this.saveOffers();

      // Update intern status
      const intTarget = this.interns.find((i) => i.name === studentName);
      if (intTarget) {
        intTarget.status = 'Assigned';
        intTarget.placement = companyName;
        this.saveInterns();
      }

      this.closeModal('assignModalOverlay');
      this.render();
      this.showToast(`Internship assigned: ${studentName} placed at ${companyName}!`, 'success');
    }

    // --- Profile Management ---
    populateProfileForm() {
      if (!this.currentUser) return;
      const nameInp = document.getElementById('profileFullNameInput');
      const userInp = document.getElementById('profileUsernameInput');
      const emailInp = document.getElementById('profileEmailInput');
      const badgeRole = document.getElementById('profileRoleBadge');

      if (nameInp) nameInp.value = this.currentUser.fullName || this.currentUser.username;
      if (userInp) userInp.value = this.currentUser.username;
      if (emailInp) emailInp.value = this.currentUser.email;
      if (badgeRole) badgeRole.textContent = this.currentUser.role;
    }

    handleProfileSave(e) {
      if (e) e.preventDefault();
      const name = document.getElementById('profileFullNameInput').value.trim();
      const email = document.getElementById('profileEmailInput').value.trim();

      if (!name || !email) return;

      this.currentUser.fullName = name;
      this.currentUser.email = email;

      sessionStorage.setItem('tfb_auth_user', JSON.stringify(this.currentUser));
      if (localStorage.getItem('tfb_auth_user')) {
        localStorage.setItem('tfb_auth_user', JSON.stringify(this.currentUser));
      }

      this.updateAuthStateUI();
      this.closeModal('profileModalOverlay');
      this.showToast('Profile updated successfully!', 'success');
    }

    handleChangePassword(e) {
      if (e) e.preventDefault();
      const cur = document.getElementById('currentPasswordInput').value;
      const p1 = document.getElementById('newPasswordInput').value;
      const p2 = document.getElementById('confirmNewPasswordInput').value;

      if (!cur || !p1 || !p2) {
        this.showToast('Please fill all required password fields.', 'danger');
        return;
      }

      if (p1.length < 8) {
        this.showToast('Password must be at least 8 characters long.', 'danger');
        return;
      }

      if (p1 !== p2) {
        this.showToast('New passwords do not match.', 'danger');
        return;
      }

      this.closeModal('passwordModalOverlay');
      document.getElementById('changePasswordForm').reset();
      this.showToast('Password changed successfully!', 'success');
    }

    // --- HTML Escaping Helper ---
    escapeHTML(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
  }

  // Initialize and mount globally
  window.app = new PortalApp();
})();
