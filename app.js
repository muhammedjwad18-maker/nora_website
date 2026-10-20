// ============================================================
// ✅ Supabase Configuration
// ============================================================
const SUPABASE_URL = 'https://cctxsobqtoiafnnieigd.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Xwoggg3giU0Te9wbekbVzg_W0RlXirX';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// ✅ Language System
// ============================================================
let currentLang = localStorage.getItem('preferred-lang') || 'ckb';

const translations = {
  ckb: {
    appName: 'پزیشکی من',
    tagline: 'پانێلی دکتۆر',
    login: 'چوونەژوورەوە',
    email: 'ئیمەیڵ',
    password: 'پاسوۆرد',
    welcome: 'بەخێربێیت',
    logout: 'چوونەدەرەوە',
    today: 'نۆرەی ئەمڕۆ',
    pending: 'چاوەڕوان',
    accepted: 'قبوڵکراو',
    rejected: 'ڕەتکراوە',
    patients: 'نەخۆشەکان',
     subscription: 'بەشداریکردن',
  choosePlan: '📦 پاکێج هەڵبژێرە',
  choosePlanDesc: 'تکایە پاکێجێک هەڵبژێرە بۆ چالاککردنی ئەکاونتەکەت',
  monthlyPlan: 'پاکێجی ١ مانگ',
  quarterlyPlan: 'پاکێجی ٦ مانگ',
  yearlyPlan: 'پاکێجی ١ ساڵ',
  days: 'ڕۆژ',
  bestValue: 'باشترین نرخ',
  selectPlan: 'هەڵبژاردنی پاکێج',
  selectPlanFirst: 'تکایە سەرەتا پاکێجێک هەڵبژێرە',
  feature1: 'چالاککردنی ئەکاونت',
  feature2: 'پیشاندان لە لیستی دکتۆرەکان',
  feature3: 'وەرگرتنی نۆرەکان',
  feature4: 'پشتگیری تایبەت',
  paymentInfo: '💳 زانیاری پارەدان',
  scanQR: '📱 سکان بکە بۆ پارەدان',
  bankCards: '🏦 کارتەکانی بانک',
  instructions: '📝 ڕێنمایی',
  copy: 'کۆپی',
  copied: 'کۆپی کرا',
  afterPayment: 'دوای پارەدان، کلیک لە دوگمەی خوارەوە بکە:',
  paidConfirm: 'پارەم داوە — ناردنی داواکاری',
  requestSent: 'داواکاری نێردرا ✅ — چاوەڕوانی پەسەندکردنی ئەدمین بە',
  pendingRequest: 'داواکاری چاوەڕوان',
  pendingRequestDesc: 'داواکاری پارەدانەکەت نێردراوە. چاوەڕوانی پەسەندکردنی ئەدمین بە.',
  pendingStatus: 'چاوەڕوان',
  approved: 'قبوڵکراو',
  rejectedStatus: 'ڕەتکراوە',
  paymentHistory: '📜 مێژووی پارەدان',
  noHistory: 'هیچ مێژوویەک نییە',
  expiryDate: 'بەرواری کۆتایی',
  daysLeft: 'ڕۆژ ماوە',
    newRequests: '🔔 داواکارییە نوێیەکان',
    todayAppointments: '📅 نۆرەکانی ئەمڕۆ',
    upcomingAppointments: '📆 نۆرەکانی داهاتوو',
     allPatients: 'نەخۆشەکان',
  searchPatients: '🔍 گەڕان بۆ نەخۆش',
  totalPatients: 'کۆی نەخۆشەکان',
  totalVisits: 'کۆی سەردانەکان',
  patientsList: '📋 لیستی نەخۆشەکان',
  lastVisit: 'دوایین سەردان',
  visits: 'سەردان',
  noPatients: 'هیچ نەخۆشێک نییە',
    noAppointments: 'هیچ نۆرەیەک نییە',
    loading: 'چاوەڕوان بە...',
    accept: 'قبوڵکردن',
    reject: 'ڕەتکردنەوە',
    loginError: 'ئیمەیڵ یان پاسوۆرد هەڵەیە',
    notDoctor: 'ئەم ئەکاونتە دکتۆر نییە',
    subscriptionActive: 'بەشداربوون چالاکە ✅',
    subscriptionInactive: 'بەشداربوون ناچالاکە ⚠️',
    patient: 'نەخۆش',
    note: 'تێبینی',
    onlyDoctors: 'تەنها بۆ دکتۆرەکان',
    doctorPanel: 'پانێلی دکتۆر',
    patientDetail: 'وردەکاری نەخۆش',
    back: 'گەڕانەوە',
    medicalRecord: 'تۆماری پزیشکی',
    vitals: 'نیشانەکانی ژیان',
    allergies: 'هەستیارییەکان',
    prescriptions: 'دەرمانەکان',
    newMedicalRecord: '📋 تۆماری پزیشکی نوێ',
    previousRecords: '📚 تۆمارەکانی پێشوو',
    diagnosis: 'دەستنیشانکردن (Diagnosis)',
    symptoms: 'نیشانەکان (Symptoms)',
    examination: 'فەحس (Examination)',
    result: 'ئەنجام (Result)',
    treatment: 'چارەسەر (Treatment)',
    notes: 'تێبینی (Notes)',
    save: 'پاشەکەوتکردن',
    vitalSigns: '💓 نیشانەکانی ژیان',
    bpSystolic: 'فشاری خوێن (Systolic)',
    bpDiastolic: 'فشاری خوێن (Diastolic)',
    heartRate: 'لێدانی دڵ',
    temperature: 'پلەی گەرمی',
    oxygen: 'ئۆکسجین (%)',
    bloodSugar: 'شەکر',
    weight: 'کێش (kg)',
    height: 'بەرزی (cm)',
    newAllergy: '⚠️ هەستیاری نوێ',
    previousAllergies: '📋 هەستیارییەکانی پێشوو',
    allergyName: 'ناوی هەستیاری',
    allergyType: 'جۆر',
    medication: 'دەرمان',
    food: 'خواردن',
    environment: 'ژینگە',
    other: 'هیتر',
    severity: 'توندی',
    mild: 'کەم',
    moderate: 'مامناوەند',
    severe: 'زۆر',
    newPrescription: '💊 دەرمانی نوێ',
    previousPrescriptions: '📋 دەرمانەکانی پێشوو',
    medicineName: 'ناوی دەرمان',
    dosage: 'بڕ (Dosage)',
    frequency: 'چەند جار',
    duration: 'ماوە',
    instructions: 'ڕێنمایی',
    noRecords: 'هیچ تۆمارێک نییە',
    noAllergies: 'هیچ هەستیارییەک نییە',
    noPrescriptions: 'هیچ دەرمانێک نییە',
    saved: '✅ پاشەکەوت کرا',
    error: '❌ هەڵە',
    needRecordFirst: '⚠️ تکایە سەرەتا تۆماری پزیشکی دروست بکە',
  },
  ar: {
    appName: 'طبيبي',
    tagline: 'لوحة الطبيب',
    login: 'تسجيل الدخول',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    welcome: 'مرحباً',
    logout: 'تسجيل الخروج',
    today: 'مواعيد اليوم',
    pending: 'قيد الانتظار',
    accepted: 'مقبول',
    rejected: 'مرفوض',
     subscription: 'الاشتراك',
  choosePlan: '📦 اختر الباقة',
  choosePlanDesc: 'يرجى اختيار باقة لتفعيل حسابك',
  monthlyPlan: 'باقة شهر واحد',
  quarterlyPlan: 'باقة ٦ أشهر',
  yearlyPlan: 'باقة سنة واحدة',
  days: 'يوم',
  bestValue: 'أفضل قيمة',
  selectPlan: 'اختيار الباقة',
  selectPlanFirst: 'يرجى اختيار باقة أولاً',
  feature1: 'تفعيل الحساب',
  feature2: 'الظهور في قائمة الأطباء',
  feature3: 'استقبال المواعيد',
  feature4: 'دعم خاص',
  paymentInfo: '💳 معلومات الدفع',
  scanQR: '📱 امسح للدفع',
  bankCards: '🏦 البطاقات البنكية',
  instructions: '📝 التعليمات',
  copy: 'نسخ',
  copied: 'تم النسخ',
  afterPayment: 'بعد الدفع، انقر على الزر أدناه:',
  paidConfirm: 'لقد دفعت — إرسال الطلب',
  requestSent: 'تم إرسال الطلب ✅ — في انتظار موافقة المشرف',
  pendingRequest: 'طلب قيد الانتظار',
  pendingRequestDesc: 'تم إرسال طلب الدفع. في انتظار موافقة المشرف.',
  pendingStatus: 'قيد الانتظار',
  approved: 'مقبول',
  rejectedStatus: 'مرفوض',
  paymentHistory: '📜 سجل المدفوعات',
  noHistory: 'لا يوجد سجل',
  expiryDate: 'تاريخ الانتهاء',
  daysLeft: 'يوم متبقي',
     allPatients: 'المرضى',
  searchPatients: '🔍 البحث عن مريض',
  totalPatients: 'إجمالي المرضى',
  totalVisits: 'إجمالي الزيارات',
  patientsList: '📋 قائمة المرضى',
  lastVisit: 'آخر زيارة',
  visits: 'زيارة',
  noPatients: 'لا يوجد مرضى',
    patients: 'المرضى',
    newRequests: '🔔 الطلبات الجديدة',
    todayAppointments: '📅 مواعيد اليوم',
    upcomingAppointments: '📆 المواعيد القادمة',
    noAppointments: 'لا توجد مواعيد',
    loading: 'جارٍ التحميل...',
    accept: 'قبول',
    reject: 'رفض',
    loginError: 'البريد الإلكتروني أو كلمة المرور خاطئة',
    notDoctor: 'هذا الحساب ليس طبيباً',
    subscriptionActive: 'الاشتراك نشط ✅',
    subscriptionInactive: 'الاشتراك غير نشط ⚠️',
    patient: 'مريض',
    note: 'ملاحظة',
    onlyDoctors: 'للأطباء فقط',
    doctorPanel: 'لوحة الطبيب',
    patientDetail: 'تفاصيل المريض',
    back: 'رجوع',
    medicalRecord: 'السجل الطبي',
    vitals: 'العلامات الحيوية',
    allergies: 'الحساسية',
    prescriptions: 'الأدوية',
    newMedicalRecord: '📋 سجل طبي جديد',
    previousRecords: '📚 السجلات السابقة',
    diagnosis: 'التشخيص',
    symptoms: 'الأعراض',
    examination: 'الفحص',
    result: 'النتيجة',
    treatment: 'العلاج',
    notes: 'ملاحظات',
    save: 'حفظ',
    vitalSigns: '💓 العلامات الحيوية',
    bpSystolic: 'ضغط الدم (الانقباضي)',
    bpDiastolic: 'ضغط الدم (الانبساطي)',
    heartRate: 'نبضات القلب',
    temperature: 'الحرارة',
    oxygen: 'الأكسجين (%)',
    bloodSugar: 'السكر',
    weight: 'الوزن (كغ)',
    height: 'الطول (سم)',
    newAllergy: '⚠️ حساسية جديدة',
    previousAllergies: '📋 الحساسية السابقة',
    allergyName: 'اسم الحساسية',
    allergyType: 'النوع',
    medication: 'دواء',
    food: 'طعام',
    environment: 'بيئة',
    other: 'أخرى',
    severity: 'الشدة',
    mild: 'خفيف',
    moderate: 'متوسط',
    severe: 'شديد',
    newPrescription: '💊 دواء جديد',
    previousPrescriptions: '📋 الأدوية السابقة',
    medicineName: 'اسم الدواء',
    dosage: 'الجرعة',
    frequency: 'التكرار',
    duration: 'المدة',
    instructions: 'التعليمات',
    noRecords: 'لا توجد سجلات',
    noAllergies: 'لا توجد حساسية',
    noPrescriptions: 'لا توجد أدوية',
    saved: '✅ تم الحفظ',
    error: '❌ خطأ',
    needRecordFirst: '⚠️ يرجى إنشاء سجل طبي أولاً',
  },
  en: {
    appName: 'My Doctor',
    tagline: 'Doctor Panel',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    welcome: 'Welcome',
    logout: 'Logout',
    today: 'Today\'s Appointments',
    pending: 'Pending',
    accepted: 'Accepted',
    rejected: 'Rejected',
    patients: 'Patients',
    newRequests: '🔔 New Requests',
    todayAppointments: '📅 Today\'s Appointments',
    upcomingAppointments: '📆 Upcoming Appointments',
    noAppointments: 'No appointments',
    loading: 'Loading...',
    accept: 'Accept',
    reject: 'Reject',
    loginError: 'Invalid email or password',
    notDoctor: 'This account is not a doctor',
    subscriptionActive: 'Subscription active ✅',
    subscriptionInactive: 'Subscription inactive ⚠️',
    patient: 'Patient',
     subscription: 'Subscription',
  choosePlan: '📦 Choose a Plan',
  choosePlanDesc: 'Please choose a plan to activate your account',
  monthlyPlan: '1 Month Plan',
  quarterlyPlan: '6 Months Plan',
  yearlyPlan: '1 Year Plan',
  days: 'days',
  bestValue: 'Best Value',
  selectPlan: 'Select Plan',
  selectPlanFirst: 'Please select a plan first',
  feature1: 'Activate account',
  feature2: 'Appear in doctors list',
  feature3: 'Receive appointments',
  feature4: 'Priority support',
  paymentInfo: '💳 Payment Information',
  scanQR: '📱 Scan to Pay',
  bankCards: '🏦 Bank Cards',
  instructions: '📝 Instructions',
  copy: 'Copy',
  copied: 'Copied',
  afterPayment: 'After payment, click the button below:',
  paidConfirm: 'I have paid — Send Request',
  requestSent: 'Request sent ✅ — Waiting for admin approval',
  pendingRequest: 'Pending Request',
  pendingRequestDesc: 'Your payment request has been sent. Waiting for admin approval.',
  pendingStatus: 'Pending',
  approved: 'Approved',
  rejectedStatus: 'Rejected',
  paymentHistory: '📜 Payment History',
  noHistory: 'No history',
  expiryDate: 'Expiry Date',
  daysLeft: 'days left',
    allPatients: 'Patients',
  searchPatients: '🔍 Search Patients',
  totalPatients: 'Total Patients',
  totalVisits: 'Total Visits',
  patientsList: '📋 Patients List',
  lastVisit: 'Last Visit',
  visits: 'visits',
  noPatients: 'No patients',
    note: 'Note',
    onlyDoctors: 'For doctors only',
    doctorPanel: 'Doctor Panel',
    patientDetail: 'Patient Details',
    back: 'Back',
    medicalRecord: 'Medical Record',
    vitals: 'Vital Signs',
    allergies: 'Allergies',
    prescriptions: 'Prescriptions',
    newMedicalRecord: '📋 New Medical Record',
    previousRecords: '📚 Previous Records',
    diagnosis: 'Diagnosis',
    symptoms: 'Symptoms',
    examination: 'Examination',
    result: 'Result',
    treatment: 'Treatment',
    notes: 'Notes',
    save: 'Save',
    vitalSigns: '💓 Vital Signs',
    bpSystolic: 'Blood Pressure (Systolic)',
    bpDiastolic: 'Blood Pressure (Diastolic)',
    heartRate: 'Heart Rate',
    temperature: 'Temperature',
    oxygen: 'Oxygen (%)',
    bloodSugar: 'Blood Sugar',
    weight: 'Weight (kg)',
    height: 'Height (cm)',
    newAllergy: '⚠️ New Allergy',
    previousAllergies: '📋 Previous Allergies',
    allergyName: 'Allergy Name',
    allergyType: 'Type',
    medication: 'Medication',
    food: 'Food',
    environment: 'Environment',
    other: 'Other',
    severity: 'Severity',
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
    newPrescription: '💊 New Prescription',
    previousPrescriptions: '📋 Previous Prescriptions',
    medicineName: 'Medicine Name',
    dosage: 'Dosage',
    frequency: 'Frequency',
    duration: 'Duration',
    instructions: 'Instructions',
    noRecords: 'No records',
    noAllergies: 'No allergies',
    noPrescriptions: 'No prescriptions',
    saved: '✅ Saved',
    error: '❌ Error',
    needRecordFirst: '⚠️ Please create a medical record first',
  }
};

function t(key) { return translations[currentLang][key] || key; }

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('preferred-lang', lang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');
  
  const body = document.body;
  if (lang === 'en') {
    body.setAttribute('dir', 'ltr');
    body.setAttribute('lang', 'en');
    body.classList.add('lang-en');
  } else {
    body.setAttribute('dir', 'rtl');
    body.setAttribute('lang', lang);
    body.classList.remove('lang-en');
  }
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  
  const titles = {
    ckb: 'پزیشکی من — پانێلی دکتۆر',
    ar: 'طبيبي — لوحة الطبيب',
    en: 'My Doctor — Doctor Panel'
  };
  document.title = titles[lang];
}

// ============================================================
// ✅ Login — تەنها دکتۆر
// ============================================================
async function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');
  
  errorEl.classList.add('hidden');
  btn.disabled = true;
  btn.textContent = t('loading');
  
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    
    if (error) throw error;
    
    // ✅ پشکنینی ڕۆڵ — تەنها دکتۆر
    const { data: profile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single();
    
    if (profileError || profile?.role !== 'doctor') {
      await supabaseClient.auth.signOut();
      errorEl.textContent = t('notDoctor');
      errorEl.classList.remove('hidden');
      btn.disabled = false;
      btn.textContent = t('login');
      return;
    }
    
    window.location.href = 'dashboard.html';
    
  } catch (error) {
    console.error('Login error:', error);
    errorEl.textContent = t('loginError');
    errorEl.classList.remove('hidden');
    btn.disabled = false;
    btn.textContent = t('login');
  }
}

// ============================================================
// ✅ Logout
// ============================================================
async function handleLogout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}

// ============================================================
// ✅ Dashboard
// ============================================================
async function initDashboard() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return; }
  
  const user = session.user;
  
  const { data: profile } = await supabaseClient
    .from('profiles').select('*').eq('id', user.id).single();
  
  if (profile?.role !== 'doctor') { window.location.href = 'index.html'; return; }
  
  const { data: doctor } = await supabaseClient
    .from('doctors').select('*').eq('id', user.id).single();
  
  document.getElementById('welcome-text').textContent = 
    `${t('welcome')}، ${profile?.full_name || user.email}`;
  
  document.getElementById('doctor-specialty').textContent = doctor?.specialty || '';
  
  const subEl = document.getElementById('subscription-status');
  const isActive = doctor?.status === 'active';
  subEl.textContent = isActive ? t('subscriptionActive') : t('subscriptionInactive');
  subEl.className = `subscription-badge ${isActive ? 'active' : 'inactive'}`;
  
  await loadAppointments(user.id);
}

// ============================================================
// ✅ Load Appointments
// ============================================================
async function loadAppointments(doctorId) {
  try {
    const { data: appointments, error } = await supabaseClient
      .from('appointments')
      .select(`*, profiles!appointments_patient_id_fkey (full_name, phone)`)
      .eq('doctor_id', doctorId)
      .order('date', { ascending: true });
    
    if (error) throw error;
    
    const today = new Date().toISOString().split('T')[0];
    
    const pending = appointments.filter(a => a.status === 'pending');
    const todayList = appointments.filter(a => a.date === today && a.status !== 'rejected');
    const upcoming = appointments.filter(a => a.date > today && a.status === 'accepted');
    const accepted = appointments.filter(a => a.status === 'accepted');
    const patients = new Set(accepted.map(a => a.patient_id));
    
    document.getElementById('stat-today').textContent = todayList.length;
    document.getElementById('stat-pending').textContent = pending.length;
    document.getElementById('stat-accepted').textContent = accepted.length;
    document.getElementById('stat-patients').textContent = patients.size;
    
    renderAppointments('pending-list', pending, true);
    renderAppointments('today-list', todayList, false);
    renderAppointments('upcoming-list', upcoming, false);
    
  } catch (error) {
    console.error('Load appointments error:', error);
  }
}

// ============================================================
// ✅ Render Appointments
// ============================================================
function renderAppointments(containerId, appointments, showActions) {
  const el = document.getElementById(containerId);
  
  if (appointments.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📅</div><p>${t('noAppointments')}</p></div>`;
    return;
  }
  
  el.innerHTML = appointments.map(apt => {
    const patientName = apt.profiles?.full_name || t('patient');
    const patientPhone = apt.profiles?.phone || '';
    const statusColor = apt.status === 'accepted' ? 'accepted' : apt.status === 'pending' ? 'pending' : 'rejected';
    const statusText = apt.status === 'accepted' ? t('accepted') : apt.status === 'pending' ? t('pending') : t('rejected');
    
    const actions = showActions ? `
      <div class="appointment-actions">
        <button class="btn-accept" onclick="event.stopPropagation(); updateStatus('${apt.id}', 'accepted', this)">✅ ${t('accept')}</button>
        <button class="btn-reject" onclick="event.stopPropagation(); updateStatus('${apt.id}', 'rejected', this)">❌ ${t('reject')}</button>
      </div>
    ` : `<span class="appointment-badge ${statusColor}">${statusText}</span>`;
    
    return `
      <div class="appointment-item" onclick="openPatient('${apt.patient_id}', '${apt.id}')" style="cursor: pointer;">
        <div class="appointment-status ${statusColor}"></div>
        <div class="appointment-content">
          <div class="appointment-patient">${patientName}</div>
          <div class="appointment-time">
            📅 ${apt.date || ''} — ⏰ ${apt.time || ''}
            ${patientPhone ? ` — 📱 ${patientPhone}` : ''}
          </div>
          ${apt.note ? `<div class="appointment-note">📝 ${apt.note}</div>` : ''}
        </div>
        ${actions}
      </div>
    `;
  }).join('');
}

function openPatient(patientId, appointmentId) {
  window.location.href = `patient-detail.html?patient_id=${patientId}&appointment_id=${appointmentId}`;
}

// ============================================================
// ✅ Update Status
// ============================================================
async function updateStatus(appointmentId, status, btn) {
  const parent = btn.parentElement;
  parent.querySelectorAll('button').forEach(b => b.disabled = true);
  
  try {
    const { error } = await supabaseClient
      .from('appointments').update({ status }).eq('id', appointmentId);
    
    if (error) throw error;
    
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) await loadAppointments(session.user.id);
    
  } catch (error) {
    console.error('Update status error:', error);
    alert(t('error') + ': ' + error.message);
    parent.querySelectorAll('button').forEach(b => b.disabled = false);
  }
}

// ============================================================
// ✅ Patient Detail
// ============================================================
let currentPatientId = null;
let currentAppointmentId = null;

function goBack() { window.location.href = 'dashboard.html'; }

function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  
  document.getElementById(`tab-${tab}`).classList.remove('hidden');
  btn.classList.add('active');
}

async function initPatientDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  currentPatientId = urlParams.get('patient_id');
  currentAppointmentId = urlParams.get('appointment_id');
  
  if (!currentPatientId) { goBack(); return; }
  
  const { data: patient } = await supabaseClient
    .from('profiles').select('*').eq('id', currentPatientId).single();
  
  if (patient) {
    document.getElementById('patient-name').textContent = patient.full_name || t('patient');
    document.getElementById('patient-phone').textContent = patient.phone ? `📱 ${patient.phone}` : '';
  }
  
  if (currentAppointmentId) {
    const { data: apt } = await supabaseClient
      .from('appointments').select('*').eq('id', currentAppointmentId).single();
    if (apt) {
      document.getElementById('appointment-info').textContent = 
        `📅 ${apt.date} — ⏰ ${apt.time}`;
    }
  }
  
  await loadRecords();
  await loadAllergies();
  await loadPrescriptions();
}

// ============================================================
// ✅ Medical Records
// ============================================================
async function saveMedicalRecord(event) {
  event.preventDefault();
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) return;
  
  const btn = document.getElementById('save-record-btn');
  btn.disabled = true;
  
  try {
    const { error } = await supabaseClient.from('medical_records').insert({
      patient_id: currentPatientId,
      doctor_id: session.user.id,
      appointment_id: currentAppointmentId,
      diagnosis: document.getElementById('diagnosis').value || null,
      symptoms: document.getElementById('symptoms').value || null,
      treatment: document.getElementById('treatment').value || null,
      notes: document.getElementById('notes').value || null,
      visit_date: new Date().toISOString().split('T')[0],
    });
    
    if (error) throw error;
    
    alert(t('saved'));
    document.getElementById('medical-record-form').reset();
    await loadRecords();
    
  } catch (error) {
    alert(t('error') + ': ' + error.message);
  } finally {
    btn.disabled = false;
  }
}

async function loadRecords() {
  const el = document.getElementById('records-list');
  
  try {
    const { data } = await supabaseClient
      .from('medical_records').select('*')
      .eq('patient_id', currentPatientId)
      .order('visit_date', { ascending: false });
    
    if (!data || data.length === 0) {
      el.innerHTML = `<div class="empty-state">${t('noRecords')}</div>`;
      return;
    }
    
    el.innerHTML = data.map(rec => `
      <div class="record-card">
        <div class="record-date">📅 ${rec.visit_date}</div>
        ${rec.diagnosis ? `<div><strong>${t('diagnosis')}:</strong> ${rec.diagnosis}</div>` : ''}
        ${rec.symptoms ? `<div><strong>${t('symptoms')}:</strong> ${rec.symptoms}</div>` : ''}
        ${rec.treatment ? `<div><strong>${t('treatment')}:</strong> ${rec.treatment}</div>` : ''}
        ${rec.notes ? `<div><strong>${t('notes')}:</strong> ${rec.notes}</div>` : ''}
      </div>
    `).join('');
    
  } catch (error) {
    el.innerHTML = `<div class="empty-state">${t('noRecords')}</div>`;
  }
}

// ============================================================
// ✅ Vitals
// ============================================================
async function saveVitals(event) {
  event.preventDefault();
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) return;
  
  const btn = document.getElementById('save-vitals-btn');
  btn.disabled = true;
  
  try {
    const { error } = await supabaseClient.from('vital_signs').insert({
      patient_id: currentPatientId,
      recorded_by: session.user.id,
      blood_pressure_systolic: parseInt(document.getElementById('bp-systolic').value) || null,
      blood_pressure_diastolic: parseInt(document.getElementById('bp-diastolic').value) || null,
      heart_rate: parseInt(document.getElementById('heart-rate').value) || null,
      temperature: parseFloat(document.getElementById('temperature').value) || null,
      oxygen_saturation: parseInt(document.getElementById('oxygen').value) || null,
      blood_sugar: parseInt(document.getElementById('blood-sugar').value) || null,
      weight: parseFloat(document.getElementById('weight').value) || null,
      height: parseFloat(document.getElementById('height').value) || null,
      measured_at: new Date().toISOString(),
    });
    
    if (error) throw error;
    
    alert(t('saved'));
    document.getElementById('vitals-form').reset();
    
  } catch (error) {
    alert(t('error') + ': ' + error.message);
  } finally {
    btn.disabled = false;
  }
}

// ============================================================
// ✅ Allergies
// ============================================================
async function saveAllergy(event) {
  event.preventDefault();
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) return;
  
  try {
    const { error } = await supabaseClient.from('allergies').insert({
      patient_id: currentPatientId,
      allergy_name: document.getElementById('allergy-name').value,
      allergy_type: document.getElementById('allergy-type').value,
      severity: document.getElementById('allergy-severity').value,
    });
    
    if (error) throw error;
    
    alert(t('saved'));
    document.getElementById('allergy-form').reset();
    await loadAllergies();
    
  } catch (error) {
    alert(t('error') + ': ' + error.message);
  }
}

async function loadAllergies() {
  const el = document.getElementById('allergies-list');
  
  try {
    const { data } = await supabaseClient
      .from('allergies').select('*').eq('patient_id', currentPatientId);
    
    if (!data || data.length === 0) {
      el.innerHTML = `<div class="empty-state">${t('noAllergies')}</div>`;
      return;
    }
    
    el.innerHTML = data.map(a => `
      <div class="record-card">
        <div><strong>${a.allergy_name}</strong></div>
        <div>${t('allergyType')}: ${a.allergy_type} — ${t('severity')}: ${a.severity}</div>
      </div>
    `).join('');
    
  } catch (error) {
    el.innerHTML = `<div class="empty-state">${t('noAllergies')}</div>`;
  }
}

// ============================================================
// ✅ Prescriptions
// ============================================================
async function savePrescription(event) {
  event.preventDefault();
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) return;
  
  try {
    const { data: records } = await supabaseClient
      .from('medical_records').select('id')
      .eq('patient_id', currentPatientId)
      .order('created_at', { ascending: false }).limit(1);
    
    const medicalRecordId = records?.[0]?.id;
    
    if (!medicalRecordId) {
      alert(t('needRecordFirst'));
      return;
    }
    
    const { error } = await supabaseClient.from('prescriptions').insert({
      medical_record_id: medicalRecordId,
      patient_id: currentPatientId,
      doctor_id: session.user.id,
      medicine_name: document.getElementById('medicine-name').value,
      dosage: document.getElementById('dosage').value || null,
      frequency: document.getElementById('frequency').value || null,
      duration: document.getElementById('duration').value || null,
      instructions: document.getElementById('instructions').value || null,
    });
    
    if (error) throw error;
    
    alert(t('saved'));
    document.getElementById('prescription-form').reset();
    await loadPrescriptions();
    
  } catch (error) {
    alert(t('error') + ': ' + error.message);
  }
}

async function loadPrescriptions() {
  const el = document.getElementById('prescriptions-list');
  
  try {
    const { data } = await supabaseClient
      .from('prescriptions').select('*').eq('patient_id', currentPatientId);
    
    if (!data || data.length === 0) {
      el.innerHTML = `<div class="empty-state">${t('noPrescriptions')}</div>`;
      return;
    }
    
    el.innerHTML = data.map(p => `
      <div class="record-card">
        <div><strong>💊 ${p.medicine_name}</strong></div>
        ${p.dosage ? `<div>${t('dosage')}: ${p.dosage}</div>` : ''}
        ${p.frequency ? `<div>${t('frequency')}: ${p.frequency}</div>` : ''}
        ${p.duration ? `<div>${t('duration')}: ${p.duration}</div>` : ''}
      </div>
    `).join('');
    
  } catch (error) {
    el.innerHTML = `<div class="empty-state">${t('noPrescriptions')}</div>`;
  }
}

// ============================================================
// ✅ Router
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
  
  const path = window.location.pathname;
  
  if (path.includes('dashboard.html')) {
    initDashboard();
  } else if (path.includes('patient-detail.html')) {
    initPatientDetail();
  }
});

// ============================================================
// ✅ Patients Page — هەموو نەخۆشەکان
// ============================================================
let allPatients = [];

async function initPatientsPage() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return; }
  
  const doctorId = session.user.id;
  
  try {
    // ✅ وەرگرتنی هەموو نۆرەکان (هەموو کاتەکان)
    const { data: appointments, error } = await supabaseClient
      .from('appointments')
      .select(`
        *,
        profiles!appointments_patient_id_fkey (
          id,
          full_name,
          phone
        )
      `)
      .eq('doctor_id', doctorId)
      .order('date', { ascending: false });
    
    if (error) throw error;
    
    // ✅ گروپکردن بەپێی نەخۆش
    const patientsMap = new Map();
    
    appointments.forEach(apt => {
      const patientId = apt.patient_id;
      const patientProfile = apt.profiles;
      
      if (!patientsMap.has(patientId)) {
        patientsMap.set(patientId, {
          id: patientId,
          name: patientProfile?.full_name || t('patient'),
          phone: patientProfile?.phone || '',
          appointments: [],
          lastVisit: null,
          totalVisits: 0,
        });
      }
      
      const patient = patientsMap.get(patientId);
      patient.appointments.push(apt);
      patient.totalVisits++;
      
      // ✅ دوایین سەردان
      if (!patient.lastVisit || apt.date > patient.lastVisit) {
        patient.lastVisit = apt.date;
      }
    });
    
    allPatients = Array.from(patientsMap.values());
    
    // ✅ ئامارەکان
    document.getElementById('stat-total').textContent = allPatients.length;
    document.getElementById('stat-visits').textContent = appointments.length;
    
    // ✅ پیشاندان
    renderPatients(allPatients);
    
  } catch (error) {
    console.error('Load patients error:', error);
    document.getElementById('patients-list').innerHTML = 
      `<div class="empty-state">${t('error')}: ${error.message}</div>`;
  }
}

// ============================================================
// ✅ Render Patients
// ============================================================
function renderPatients(patients) {
  const el = document.getElementById('patients-list');
  
  if (patients.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">👥</div>
        <p>هیچ نەخۆشێک نییە</p>
      </div>
    `;
    return;
  }
  
  el.innerHTML = patients.map(patient => `
    <div class="patient-card" onclick="openPatientFromList('${patient.id}')">
      <div class="patient-avatar">${patient.name.charAt(0)}</div>
      <div class="patient-info">
        <div class="patient-name">${patient.name}</div>
        <div class="patient-phone">${patient.phone ? `📱 ${patient.phone}` : ''}</div>
        <div class="patient-meta">
          📅 دوایین سەردان: ${patient.lastVisit || '—'}
          • 📊 ${patient.totalVisits} سەردان
        </div>
      </div>
      <div class="patient-arrow">←</div>
    </div>
  `).join('');
}

// ============================================================
// ✅ Search / Filter
// ============================================================
function filterPatients() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  
  if (!query) {
    renderPatients(allPatients);
    return;
  }
  
  const filtered = allPatients.filter(patient => 
    patient.name.toLowerCase().includes(query) ||
    patient.phone.includes(query)
  );
  
  renderPatients(filtered);
}

// ============================================================
// ✅ Open Patient
// ============================================================
function openPatientFromList(patientId) {
  window.location.href = `patient-detail.html?patient_id=${patientId}`;
}

// ============================================================
// ✅ Router — زیادکردنی patients.html
// ============================================================
// لە کۆتایی app.js دا، لە DOMContentLoaded بگۆڕە:

document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
  
  const path = window.location.pathname;
  
  if (path.includes('dashboard.html')) {
    initDashboard();
  } else if (path.includes('patient-detail.html')) {
    initPatientDetail();
  } else if (path.includes('patients.html')) {
    initPatientsPage();
  }
});
// ============================================================
// ✅ Subscription Page — بەشداریکردن
// ============================================================
let currentDoctor = null;
let currentSettings = null;
let selectedPlan = null;
let currentDoctorId = null;

async function initSubscriptionPage() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return; }
  
  currentDoctorId = session.user.id;
  
  try {
    // ✅ وەرگرتنی زانیاری دکتۆر
    const { data: doctor } = await supabaseClient
      .from('doctors')
      .select('*')
      .eq('id', currentDoctorId)
      .single();
    
    currentDoctor = doctor;
    
    // ✅ وەرگرتنی ڕێکخستنەکانی ئەپ (نرخەکان)
    const { data: settings } = await supabaseClient
      .from('app_settings')
      .select('*')
      .eq('id', 'default')
      .maybeSingle();
    
    currentSettings = settings || {
      package_1_month_price: 19.99,
      package_6_months_price: 69.99,
      package_1_year_price: 159.99,
      package_1_month_days: 30,
      package_6_months_days: 180,
      package_1_year_days: 365,
      package_6_months_discount: 15,
      package_1_year_discount: 25,
      payment_qr_code_url: null,
      payment_card_1_name: null,
      payment_card_1_number: null,
      payment_card_2_name: null,
      payment_card_2_number: null,
      payment_card_3_name: null,
      payment_card_3_number: null,
      payment_instructions_ckb: null,
      payment_instructions_ar: null,
    };
    
    // ✅ پشکنینی داواکاری چاوەڕوان
    const { data: pendingRequests } = await supabaseClient
      .from('payment_requests')
      .select('*')
      .eq('doctor_id', currentDoctorId)
      .eq('status', 'pending')
      .order('requested_at', { ascending: false })
      .limit(1);
    
    const hasPending = pendingRequests && pendingRequests.length > 0;
    
    // ✅ پیشاندانی دۆخ
    renderStatusCard(doctor, hasPending, pendingRequests?.[0]);
    
    // ✅ پیشاندانی پاکێجەکان
    renderPlans();
    
    // ✅ پیشاندانی مێژوو
    await loadPaymentHistory();
    
  } catch (error) {
    console.error('Load subscription error:', error);
  }
}

// ============================================================
// ✅ Status Card
// ============================================================
function renderStatusCard(doctor, hasPending, pendingRequest) {
  const el = document.getElementById('status-card');
  const isActive = doctor?.status === 'active';
  const expiryDate = doctor?.subscription_expiry_date;
  
  if (hasPending) {
    el.innerHTML = `
      <div class="status-card status-pending">
        <div class="status-icon">⏳</div>
        <div class="status-content">
          <h3>${t('pendingRequest')}</h3>
          <p>${t('pendingRequestDesc')}</p>
          ${pendingRequest ? `
            <p class="status-detail">
              📦 پاکێج: ${pendingRequest.plan}
              • 💰 بڕ: $${pendingRequest.amount}
            </p>
          ` : ''}
        </div>
      </div>
    `;
    // ✅ نیشاندانی داواکاری چاوەڕوان
    document.getElementById('pending-request').classList.remove('hidden');
    document.getElementById('pending-request').innerHTML = `
      <div class="pending-card">
        <div class="pending-icon">⏳</div>
        <h3>${t('pendingRequest')}</h3>
        <p>${t('pendingRequestDesc')}</p>
        ${pendingRequest ? `
          <div class="pending-details-grid">
            <div><strong>📦 پاکێج:</strong> ${getPlanLabel(pendingRequest.plan)}</div>
            <div><strong>💰 بڕ:</strong> $${pendingRequest.amount}</div>
            <div><strong>📅 کات:</strong> ${formatDate(pendingRequest.requested_at)}</div>
          </div>
        ` : ''}
      </div>
    `;
  } else if (isActive) {
    const daysLeft = expiryDate 
      ? Math.ceil((new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24))
      : 0;
    
    el.innerHTML = `
      <div class="status-card status-active">
        <div class="status-icon">✅</div>
        <div class="status-content">
          <h3>${t('subscriptionActive')}</h3>
          <p>${t('expiryDate')}: ${formatDate(expiryDate)}</p>
          <p class="status-detail">⏰ ${daysLeft} ${t('daysLeft')}</p>
        </div>
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="status-card status-inactive">
        <div class="status-icon">⚠️</div>
        <div class="status-content">
          <h3>${t('subscriptionInactive')}</h3>
          <p>${t('choosePlanDesc')}</p>
        </div>
      </div>
    `;
  }
}

// ============================================================
// ✅ Plans
// ============================================================
function renderPlans() {
  const el = document.getElementById('plans-grid');
  
  if (!currentSettings) {
    el.innerHTML = '<div class="empty-state">هەڵە لە بارکردنی پاکێجەکان</div>';
    return;
  }
  
  const plans = [
    {
      type: 'monthly',
      title: t('monthlyPlan'),
      price: currentSettings.package_1_month_price,
      days: currentSettings.package_1_month_days,
      discount: 0,
      color: 'var(--primary)',
    },
    {
      type: 'quarterly',
      title: t('quarterlyPlan'),
      price: currentSettings.package_6_months_price,
      days: currentSettings.package_6_months_days,
      discount: currentSettings.package_6_months_discount,
      color: 'var(--success)',
      bestValue: true,
    },
    {
      type: 'yearly',
      title: t('yearlyPlan'),
      price: currentSettings.package_1_year_price,
      days: currentSettings.package_1_year_days,
      discount: currentSettings.package_1_year_discount,
      color: 'var(--pending)',
    },
  ];
  
  el.innerHTML = plans.map(plan => `
    <div class="plan-card" onclick="selectPlan('${plan.type}')" data-plan="${plan.type}">
      ${plan.bestValue ? `<div class="plan-badge">⭐ ${t('bestValue')}</div>` : ''}
      <div class="plan-title" style="color: ${plan.color}">${plan.title}</div>
      <div class="plan-price">
        $${plan.price}
        ${plan.discount > 0 ? `<span class="plan-discount">-${plan.discount}%</span>` : ''}
      </div>
      <div class="plan-days">📅 ${plan.days} ${t('days')}</div>
      <div class="plan-features">
        <div>✅ ${t('feature1')}</div>
        <div>✅ ${t('feature2')}</div>
        <div>✅ ${t('feature3')}</div>
        ${plan.bestValue ? `<div>✅ ${t('feature4')}</div>` : ''}
      </div>
      <button class="btn-select-plan" style="background: ${plan.color}">
        ${t('selectPlan')}
      </button>
    </div>
  `).join('');
}

// ============================================================
// ✅ Select Plan
// ============================================================
function selectPlan(planType) {
  selectedPlan = planType;
  
  // ✅ نیشاندانی payment section
  document.getElementById('payment-section').classList.remove('hidden');
  
  // ✅ نیشاندانی QR
  const qrContainer = document.getElementById('qr-container');
  const qrImage = document.getElementById('qr-image');
  if (currentSettings.payment_qr_code_url) {
    qrImage.src = currentSettings.payment_qr_code_url;
    qrContainer.classList.remove('hidden');
  } else {
    qrContainer.classList.add('hidden');
  }
  
  // ✅ نیشاندانی کارتەکان
  renderBankCards();
  
  // ✅ نیشاندانی ڕێنمایی
  const instructionsContainer = document.getElementById('instructions-container');
  const instructionsText = document.getElementById('instructions-text');
  const instructions = currentLang === 'ckb' 
    ? currentSettings.payment_instructions_ckb 
    : currentSettings.payment_instructions_ar;
  
  if (instructions) {
    instructionsText.textContent = instructions;
    instructionsContainer.classList.remove('hidden');
  } else {
    instructionsContainer.classList.add('hidden');
  }
  
  // ✅ سکرۆل بۆ payment section
  document.getElementById('payment-section').scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// ✅ Bank Cards
// ============================================================
function renderBankCards() {
  const el = document.getElementById('cards-list');
  const cards = [
    { name: currentSettings.payment_card_1_name, number: currentSettings.payment_card_1_number },
    { name: currentSettings.payment_card_2_name, number: currentSettings.payment_card_2_number },
    { name: currentSettings.payment_card_3_name, number: currentSettings.payment_card_3_number },
  ].filter(c => c.number);
  
  if (cards.length === 0) {
    el.innerHTML = '<p class="empty-state">هیچ کارتێک نییە</p>';
    return;
  }
  
  el.innerHTML = cards.map(card => `
    <div class="bank-card">
      <div class="bank-card-name">${card.name || ''}</div>
      <div class="bank-card-number">${card.number}</div>
      <button class="btn-copy" onclick="copyToClipboard('${card.number}')">📋 ${t('copy')}</button>
    </div>
  `).join('');
}

// ============================================================
// ✅ Copy to Clipboard
// ============================================================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ ' + t('copied'));
  }).catch(err => {
    console.error('Copy error:', err);
  });
}

// ============================================================
// ✅ Submit Payment Request
// ============================================================
async function submitPaymentRequest() {
  if (!selectedPlan) {
    alert(t('selectPlanFirst'));
    return;
  }
  
  const btn = document.getElementById('submit-payment-btn');
  btn.disabled = true;
  btn.textContent = t('loading');
  
  try {
    const planPrice = getPlanPrice(selectedPlan);
    
    const { error } = await supabaseClient
      .from('payment_requests')
      .insert({
        doctor_id: currentDoctorId,
        plan: selectedPlan,
        amount: planPrice,
        currency: 'USD',
        status: 'pending',
        requested_at: new Date().toISOString(),
      });
    
    if (error) throw error;
    
    alert(t('requestSent'));
    
    // ✅ دووبارە بارکردنەوە
    window.location.reload();
    
  } catch (error) {
    console.error('Submit payment error:', error);
    alert(t('error') + ': ' + error.message);
    btn.disabled = false;
    btn.textContent = t('paidConfirm');
  }
}

// ============================================================
// ✅ Payment History
// ============================================================
async function loadPaymentHistory() {
  const el = document.getElementById('history-list');
  
  try {
    const { data } = await supabaseClient
      .from('payment_requests')
      .select('*')
      .eq('doctor_id', currentDoctorId)
      .order('requested_at', { ascending: false });
    
    if (!data || data.length === 0) {
      el.innerHTML = `<div class="empty-state">${t('noHistory')}</div>`;
      return;
    }
    
    el.innerHTML = data.map(req => {
      const statusColor = req.status === 'approved' ? 'accepted' 
        : req.status === 'rejected' ? 'rejected' : 'pending';
      const statusText = req.status === 'approved' ? t('approved')
        : req.status === 'rejected' ? t('rejectedStatus') : t('pendingStatus');
      
      return `
        <div class="appointment-item">
          <div class="appointment-status ${statusColor}"></div>
          <div class="appointment-content">
            <div class="appointment-patient">📦 ${getPlanLabel(req.plan)}</div>
            <div class="appointment-time">
              💰 $${req.amount} — 📅 ${formatDate(req.requested_at)}
            </div>
            ${req.rejection_reason ? `<div class="appointment-note">❌ ${req.rejection_reason}</div>` : ''}
          </div>
          <span class="appointment-badge ${statusColor}">${statusText}</span>
        </div>
      `;
    }).join('');
    
  } catch (error) {
    console.error('Load history error:', error);
    el.innerHTML = `<div class="empty-state">${t('noHistory')}</div>`;
  }
}

// ============================================================
// ✅ Helpers
// ============================================================
function getPlanLabel(planType) {
  const labels = {
    monthly: t('monthlyPlan'),
    quarterly: t('quarterlyPlan'),
    yearly: t('yearlyPlan'),
  };
  return labels[planType] || planType;
}

function getPlanPrice(planType) {
  const prices = {
    monthly: currentSettings.package_1_month_price,
    quarterly: currentSettings.package_6_months_price,
    yearly: currentSettings.package_1_year_price,
  };
  return prices[planType] || 0;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const date = new Date(dateStr);
  return date.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-IQ');
}

// ============================================================
// ✅ Router — زیادکردنی subscription.html
// ============================================================
// لە DOMContentLoaded بگۆڕە:

document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
  
  const path = window.location.pathname;
  
  if (path.includes('dashboard.html')) {
    initDashboard();
  } else if (path.includes('patient-detail.html')) {
    initPatientDetail();
  } else if (path.includes('patients.html')) {
    initPatientsPage();
  } else if (path.includes('subscription.html')) {
    initSubscriptionPage();
  }
});