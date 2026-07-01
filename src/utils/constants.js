// ============================================
// Verified Maids — Brand & Config Constants
// ============================================

export const BRAND = {
  name: 'Verified Maids',
  tagline: 'Trusted Domestic Help at Your Doorstep',
  phone: '+91 9892986314',
  phoneClean: '919892986314',
  email: 'anilyadav44x@gmail.com',
  whatsapp: '919892986314',
  whatsappMessage: 'Hi, I am interested in maid services from Verified Maids. Please share details.',
  address: 'Mumbai, Maharashtra, India',
  city: 'Mumbai',
  state: 'Maharashtra',
  country: 'India',
  geo: { lat: '19.0760', lng: '72.8777' },
  domain: 'localhost',
  foundedYear: 2024,
  logo: '/logo.png',
};

// Lead capture config
export const LEAD_CONFIG = {
  // EmailJS
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
  },
  // Discord Webhook
  discordWebhookUrl: import.meta.env.VITE_DISCORD_WEBHOOK_URL || 'YOUR_DISCORD_WEBHOOK_URL',
  // Google Sheets Apps Script Web App URL
  googleSheetsUrl: import.meta.env.VITE_GOOGLE_SHEETS_URL || 'YOUR_GOOGLE_SHEETS_APPS_SCRIPT_URL',
};

// Services offered
export const SERVICES = [
  {
    id: 'house-maid',
    name: 'House Maid',
    nameHi: 'घरेलू नौकरानी',
    nameMr: 'घरकाम करणारी बाई',
    icon: 'Home',
    description: 'Verified house maids for daily cleaning, laundry, mopping, and home organization.',
    includes: ['Daily sweeping & mopping', 'Laundry & ironing', 'Kitchen & utensil cleaning', 'Bathroom sanitizing', 'Dusting & organizing'],
    baseRate: 8000,
  },
  {
    id: 'cook',
    name: 'Cook',
    nameHi: 'रसोइया',
    nameMr: 'स्वयंपाकी',
    icon: 'ChefHat',
    description: 'Experienced home cooks who prepare hygienic, delicious meals to your taste.',
    includes: ['Breakfast, lunch & dinner', 'Regional & special cuisines', 'Diet & health meal planning', 'Grocery list management', 'Clean cooking area'],
    baseRate: 12000,
  },
  {
    id: 'babysitter',
    name: 'Babysitter',
    nameHi: 'बेबीसिटर',
    nameMr: 'बेबीसिटर',
    icon: 'Baby',
    description: 'Caring babysitters for your little ones — feeding, playing, and safe supervision.',
    includes: ['Feeding & diaper changes', 'Playtime & activities', 'Sleep routine management', 'Light cleaning of baby area', 'Emergency first-aid trained'],
    baseRate: 10000,
  },
  {
    id: 'nanny',
    name: 'Nanny',
    nameHi: 'नैनी',
    nameMr: 'नॅनी',
    icon: 'Heart',
    description: 'Full-time nannies for complete childcare — from infants to school-going children.',
    includes: ['Complete child supervision', 'Homework assistance', 'School pick-up & drop', 'Meals & nutrition management', 'Activity planning'],
    baseRate: 15000,
  },
  {
    id: 'japa-maid',
    name: 'Japa Maid',
    nameHi: 'जापा मेड',
    nameMr: 'जापा मेड',
    icon: 'Sparkles',
    description: 'Experienced post-natal care — mother & newborn care after delivery.',
    includes: ['Newborn bathing & massage', 'Mother diet & nutrition', 'Night feed support', 'Post-delivery recovery care', 'Traditional japa rituals'],
    baseRate: 20000,
  },
  {
    id: 'patient-care',
    name: 'Patient Care',
    nameHi: 'पेशेंट केयर',
    nameMr: 'रुग्ण सेवा',
    icon: 'Stethoscope',
    description: 'Professional patient care attendants for post-surgery recovery and illness support.',
    includes: ['Medication reminders', 'Mobility assistance', 'Vital sign monitoring', 'Personal hygiene care', '24/7 attentive support'],
    baseRate: 18000,
  },
  {
    id: 'elderly-care',
    name: 'Elderly Care',
    nameHi: 'बुज़ुर्ग देखभाल',
    nameMr: 'वृद्ध सेवा',
    icon: 'HeartHandshake',
    description: 'Compassionate elderly care companions for your parents and grandparents.',
    includes: ['Daily routine assistance', 'Companionship & engagement', 'Medication management', 'Doctor visit accompaniment', 'Emergency response'],
    baseRate: 16000,
  },
  {
    id: 'driver',
    name: 'Driver',
    nameHi: 'ड्राइवर',
    nameMr: 'ड्रायव्हर',
    icon: 'Car',
    description: 'Verified, licensed drivers for personal and family transportation needs.',
    includes: ['Daily commute driving', 'School & office pick-drop', 'Errand running', 'Car maintenance oversight', 'Safe & punctual driving'],
    baseRate: 15000,
  },
];

// Mumbai areas served
export const AREAS_SERVED = [
  'Andheri', 'Bandra', 'Borivali', 'Powai', 'Malad', 'Goregaon',
  'Juhu', 'Dadar', 'Chembur', 'Thane', 'Navi Mumbai', 'Kandivali',
  'Kurla', 'Ghatkopar', 'Mulund', 'Vile Parle', 'Jogeshwari',
  'Khar', 'Mira Road', 'Bhandup', 'Worli', 'Lower Parel',
  'Vikhroli', 'Santacruz',
];

// Working hours options
export const WORKING_HOURS = [
  { value: '4', label: '4 Hours', labelHi: '4 घंटे', labelMr: '4 तास' },
  { value: '6', label: '6 Hours', labelHi: '6 घंटे', labelMr: '6 तास' },
  { value: '8', label: '8 Hours', labelHi: '8 घंटे', labelMr: '8 तास' },
  { value: '10', label: '10 Hours', labelHi: '10 घंटे', labelMr: '10 तास' },
  { value: '12', label: '12 Hours', labelHi: '12 घंटे', labelMr: '12 तास' },
  { value: '24', label: '24 Hours (Live-in)', labelHi: '24 घंटे (रहने वाली)', labelMr: '24 तास (राहणारी)' },
];

// Experience levels
export const EXPERIENCE_LEVELS = [
  { value: '0-2', label: '0-2 Years', factor: 1.0 },
  { value: '2-5', label: '2-5 Years', factor: 1.15 },
  { value: '5-10', label: '5-10 Years', factor: 1.35 },
  { value: '10+', label: '10+ Years', factor: 1.55 },
];

// Education levels
export const EDUCATION_LEVELS = [
  { value: 'below-10th', label: 'Below 10th', factor: 1.0 },
  { value: '10th', label: '10th Pass', factor: 1.05 },
  { value: '12th', label: '12th Pass', factor: 1.10 },
  { value: 'graduate', label: 'Graduate', factor: 1.20 },
];

// Language options with pricing impact
export const LANGUAGES = [
  { value: 'hindi', label: 'Hindi', labelHi: 'हिंदी', labelMr: 'हिंदी', factor: 1.0 },
  { value: 'marathi', label: 'Marathi', labelHi: 'मराठी', labelMr: 'मराठी', factor: 1.0 },
  { value: 'english', label: 'English', labelHi: 'अंग्रेज़ी', labelMr: 'इंग्रजी', factor: 1.25 },
];

// Hours multiplier for salary calculation
export const HOURS_MULTIPLIER = {
  '4': 0.4,
  '6': 0.55,
  '8': 0.75,
  '10': 0.9,
  '12': 1.0,
  '24': 1.6,
};

// Testimonials data
export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Andheri West',
    service: 'House Maid',
    rating: 5,
    review: 'Verified Maids sent us a wonderful house maid within 2 days. She is punctual, thorough, and treats our home like her own. Best agency we have tried in Mumbai!',
    avatar: 'PS',
  },
  {
    name: 'Rajesh Nair',
    location: 'Powai',
    service: 'Cook',
    rating: 5,
    review: 'We needed a South Indian cook urgently and they delivered. The cook they sent prepares authentic meals — my mother-in-law is finally happy with the food!',
    avatar: 'RN',
  },
  {
    name: 'Sunita Patil',
    location: 'Thane',
    service: 'Nanny',
    rating: 5,
    review: 'As a working mother, finding a trustworthy nanny was my biggest worry. The nanny from Verified Maids is like family now. She is caring, educated, and my kids love her.',
    avatar: 'SP',
  },
  {
    name: 'Amit Deshmukh',
    location: 'Bandra East',
    service: 'Japa Maid',
    rating: 5,
    review: 'The Japa maid arrived the day after delivery. She handled everything — baby\'s bath, my wife\'s diet, night feeds. We could actually rest and recover properly.',
    avatar: 'AD',
  },
  {
    name: 'Kavita Jain',
    location: 'Borivali',
    service: 'Patient Care',
    rating: 4,
    review: 'My father had knee replacement surgery. The patient care attendant they matched was calm, experienced, and treated my father with real dignity. Highly recommend.',
    avatar: 'KJ',
  },
  {
    name: 'Manish Verma',
    location: 'Malad West',
    service: 'House Maid',
    rating: 5,
    review: 'Switched from a local agent to Verified Maids. The difference is night and day — proper background check, contract support, and the maid is consistent. No more surprises.',
    avatar: 'MV',
  },
  {
    name: 'Neha Kulkarni',
    location: 'Dadar',
    service: 'Cook',
    rating: 5,
    review: 'Our cook from Verified Maids knows how to cook Maharashtrian, Gujarati, and even Chinese! She keeps the kitchen spotless. Worth every rupee.',
    avatar: 'NK',
  },
  {
    name: 'Suresh Iyer',
    location: 'Chembur',
    service: 'Elderly Care',
    rating: 5,
    review: 'Finding someone to care for my 85-year-old mother was stressful. The caregiver they sent is patient, gentle, and always on time. My mother actually looks forward to her visits.',
    avatar: 'SI',
  },
  {
    name: 'Deepa Menon',
    location: 'Juhu',
    service: 'Babysitter',
    rating: 5,
    review: 'The babysitter is wonderful with my twins. She is patient, knows first aid, and the kids are always happy when I come home. Finally found someone I can trust.',
    avatar: 'DM',
  },
  {
    name: 'Farhan Sheikh',
    location: 'Navi Mumbai',
    service: 'House Maid',
    rating: 4,
    review: 'Good service overall. The maid they sent is hardworking and honest. The team was responsive when we needed a schedule change. Will continue using their services.',
    avatar: 'FS',
  },
];

// FAQ Data
export const FAQ_DATA = [
  {
    question: 'How much does a maid cost in Mumbai?',
    answer: 'Maid salary in Mumbai varies based on hours and type of work. Part-time maids (4 hours) start from ₹5,000-8,000/month, full-time (8-12 hours) from ₹12,000-20,000/month, and live-in maids (24 hours) from ₹18,000-30,000/month. Use our Salary Calculator for an exact estimate based on your needs.',
  },
  {
    question: 'Are all your maids background verified?',
    answer: 'Yes, without exception. Every professional goes through Aadhaar/ID verification, address confirmation, and reference checks from previous employers before being assigned to any family. Your safety is our top priority.',
  },
  {
    question: 'What if the maid does not work out?',
    answer: 'We provide a free replacement within your contract period — no extra charges. You get up to 2 maid switches. If the match is not right for any reason, we find a better fit promptly.',
  },
  {
    question: 'How quickly can I get a maid?',
    answer: 'In most cases, we match and present shortlisted candidates within 24-48 working hours. Availability may vary based on your location in Mumbai and the specific service type you need.',
  },
  {
    question: 'Do you charge before showing candidates?',
    answer: 'No. We first understand your requirements, shortlist suitable candidates, and arrange for you to meet them. You pay only after you are satisfied with the match and decide to proceed.',
  },
  {
    question: 'Can I get a part-time maid or only full-time?',
    answer: 'We offer complete flexibility — 4, 6, 8, 10, 12, and 24-hour (live-in) arrangements. We match based on your household\'s actual needs, not a fixed package.',
  },
  {
    question: 'Which areas in Mumbai do you serve?',
    answer: 'We serve families across Mumbai including Andheri, Bandra, Borivali, Powai, Malad, Goregaon, Juhu, Dadar, Chembur, Thane, Navi Mumbai, Kandivali, Kurla, Ghatkopar, Mulund, and many more locations.',
  },
  {
    question: 'What services do you provide besides house maids?',
    answer: 'We provide house maids, home cooks, nannies, babysitters, japa maids (postnatal care), patient care attendants, elderly care professionals, and drivers. One call covers all your home care needs.',
  },
  {
    question: 'Is there a contract? Can I cancel?',
    answer: 'Yes, we provide a transparent contract that clearly outlines terms, duration, and pricing. You can cancel with notice as per the contract terms. Existing customers can view and manage their contracts through our customer portal.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out the booking form on this page, call us at +91 9892986314, or WhatsApp us. Share your requirements and our team will respond within a few hours with matched candidates.',
  },
];

// Blog posts data (hardcoded for now)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'maid-salary-mumbai-2025-complete-guide',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: 'Maid Salary in Mumbai 2025 – Complete Guide',
    excerpt: 'Wondering how much to pay your maid in Mumbai? Here is a comprehensive guide to maid salaries across different areas, hours, and service types.',
    category: 'Salary Guide',
    date: '2025-01-15',
    readTime: '8 min read',
    content: `<h2>Maid Salary in Mumbai — What to Expect in 2025</h2>
<p>Mumbai's domestic help market has evolved significantly. With rising living costs and growing demand for verified professionals, maid salaries have seen a steady increase. Here's what you need to know.</p>

<h3>Part-Time Maid Salary (2-4 Hours)</h3>
<p>For basic cleaning and sweeping tasks, part-time maids in Mumbai charge between <strong>₹4,000 to ₹8,000 per month</strong> depending on the area. Premium localities like Bandra, Juhu, and Powai tend to be on the higher end.</p>

<h3>Full-Time Maid Salary (8-12 Hours)</h3>
<p>A full-time house maid who handles cleaning, cooking assistance, laundry, and general household chores typically earns <strong>₹12,000 to ₹22,000 per month</strong>. Experience and the number of tasks significantly affect the salary.</p>

<h3>Live-In Maid Salary (24 Hours)</h3>
<p>Live-in maids who stay at your home earn between <strong>₹18,000 to ₹35,000 per month</strong> plus food and accommodation. The salary varies based on the number of family members, house size, and specific duties.</p>

<h3>Factors That Affect Maid Salary</h3>
<ul>
<li><strong>Location:</strong> South Mumbai and Western suburbs command higher salaries</li>
<li><strong>Experience:</strong> 5+ years experienced maids earn 30-50% more</li>
<li><strong>Languages:</strong> English-speaking maids are 20-25% more expensive</li>
<li><strong>Education:</strong> Educated maids who can help with children's homework charge premium</li>
<li><strong>Type of work:</strong> Cooking, childcare, and patient care pay more than basic cleaning</li>
</ul>

<h3>Use Our Free Salary Calculator</h3>
<p>Not sure how much to budget? Use the Verified Maids Salary Calculator to get an instant estimate based on your specific requirements — hours, service type, experience level, and language preferences.</p>`,
  },
  {
    id: 2,
    slug: 'how-to-hire-verified-maid-mumbai',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: 'How to Hire a Verified Maid in Mumbai — Step by Step',
    excerpt: 'Finding a trustworthy maid in Mumbai can be overwhelming. Follow this step-by-step guide to hire a background-verified maid safely.',
    category: 'Hiring Tips',
    date: '2025-02-10',
    readTime: '6 min read',
    content: `<h2>The Complete Guide to Hiring a Verified Maid in Mumbai</h2>
<p>Hiring a maid is one of the most important decisions for any Mumbai household. Here is a step-by-step process to ensure you find the right person.</p>

<h3>Step 1: Define Your Requirements</h3>
<p>Before you start looking, clearly define what you need — part-time or full-time? What tasks? What hours? Do you need someone who speaks English? This clarity will save you time.</p>

<h3>Step 2: Choose a Verified Agency</h3>
<p>Never hire through random WhatsApp groups or unverified sources. Choose an agency like Verified Maids that conducts proper background verification including Aadhaar check, address proof, and reference calls.</p>

<h3>Step 3: Interview the Candidates</h3>
<p>Meet at least 2-3 candidates. Ask about their experience, previous employers, comfort with your specific tasks, and availability. A good agency will pre-screen candidates for you.</p>

<h3>Step 4: Check References</h3>
<p>Always speak to at least one previous employer. Ask about punctuality, honesty, quality of work, and why they left. A verified agency will have already done this, but double-checking gives peace of mind.</p>

<h3>Step 5: Start with a Trial Period</h3>
<p>Begin with a 1-2 week trial before committing long-term. This gives both you and the maid time to adjust and ensure it is a good fit.</p>

<h3>Step 6: Set Clear Expectations</h3>
<p>Discuss working hours, holidays, salary, tasks, and house rules clearly from day one. A written agreement or contract prevents misunderstandings later.</p>`,
  },
  {
    id: 3,
    slug: 'cook-vs-maid-which-domestic-help',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: 'Cook vs Maid: Which Domestic Help Do You Actually Need?',
    excerpt: 'Confused between hiring a cook and a maid? Understanding the differences can save you money and ensure you get the right help.',
    category: 'Hiring Tips',
    date: '2025-03-05',
    readTime: '5 min read',
    content: `<h2>Cook vs Maid — Making the Right Choice</h2>
<p>One of the most common questions Mumbai families ask is whether they need a cook, a maid, or both. Let us break down the differences to help you decide.</p>

<h3>When You Need a Cook</h3>
<p>If your primary pain point is meals — you are tired of cooking after work, or you want healthier home-cooked food — a dedicated cook is your answer. Cooks specialize in meal preparation and typically work 2-4 hours focusing entirely on your kitchen.</p>

<h3>When You Need a Maid</h3>
<p>If you need help with cleaning, laundry, organizing, and general household management, a house maid is what you need. Many maids can do basic cooking too, but their primary focus is keeping your home clean.</p>

<h3>When You Need Both</h3>
<p>For larger families or if you have specific dietary requirements plus a big home to maintain, having both a cook and a maid is the most efficient setup. Many Mumbai families start with one and add the other as needs grow.</p>

<h3>The All-in-One Option</h3>
<p>Some experienced domestic helpers can handle both cooking and cleaning effectively. This is more common in full-time (8-12 hour) or live-in arrangements. However, do not overload one person with too many tasks — it leads to burnout and poor quality.</p>`,
  },
  {
    id: 4,
    slug: 'questions-before-hiring-nanny',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: '10 Questions to Ask Before Hiring a Nanny in Mumbai',
    excerpt: 'Hiring a nanny for your child is a big decision. Ask these 10 essential questions to find the perfect caregiver.',
    category: 'Hiring Tips',
    date: '2025-04-12',
    readTime: '7 min read',
    content: `<h2>10 Must-Ask Questions Before Hiring a Nanny</h2>
<p>Your child's safety and development depend on choosing the right nanny. Here are the questions every Mumbai parent should ask.</p>

<h3>1. What is your experience with children of this age?</h3>
<p>A nanny experienced with toddlers may not be ideal for infants, and vice versa. Ensure their experience matches your child's age.</p>

<h3>2. Are you trained in first aid and CPR?</h3>
<p>This is non-negotiable. Your nanny should know how to handle emergencies.</p>

<h3>3. How do you handle a crying or misbehaving child?</h3>
<p>Their answer reveals their patience and discipline approach.</p>

<h3>4. Can you help with homework and learning activities?</h3>
<p>For school-age children, this is a valuable skill.</p>

<h3>5. What are your views on screen time?</h3>
<p>Ensure alignment with your parenting philosophy.</p>

<h3>6. Are you comfortable with our schedule and holidays?</h3>
<p>Discuss working days, overtime, and leave policy upfront.</p>

<h3>7. Can you provide references from previous families?</h3>
<p>A good nanny will have families who vouch for them.</p>

<h3>8. Do you have any dietary restrictions or health conditions?</h3>
<p>Important for practical daily management.</p>

<h3>9. Are you willing to undergo background verification?</h3>
<p>A trustworthy nanny will welcome this step.</p>

<h3>10. What is your expected salary and other requirements?</h3>
<p>Discuss salary, food, travel allowance, and any other expectations clearly.</p>`,
  },
  {
    id: 5,
    slug: 'japa-maid-services-mumbai',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: 'Japa Maid Services in Mumbai — Complete Guide for New Parents',
    excerpt: 'Everything you need to know about hiring a japa maid in Mumbai — what they do, costs, and how to find a verified one.',
    category: 'Mumbai Life',
    date: '2025-05-20',
    readTime: '6 min read',
    content: `<h2>Understanding Japa Maid Services in Mumbai</h2>
<p>A japa maid (also called a dai or maternity nurse) provides specialized postnatal care for both the mother and newborn baby. In Mumbai, this service is in high demand.</p>

<h3>What Does a Japa Maid Do?</h3>
<ul>
<li>Newborn baby bathing and oil massage</li>
<li>Mother's post-delivery diet preparation</li>
<li>Night feeding assistance</li>
<li>Traditional postnatal care rituals</li>
<li>Mother's body massage and recovery support</li>
<li>Managing the baby's sleep schedule</li>
</ul>

<h3>Japa Maid Cost in Mumbai</h3>
<p>Japa maid charges in Mumbai range from <strong>₹20,000 to ₹45,000 per month</strong> for a live-in arrangement. The cost depends on experience, whether it is for a C-section recovery (which requires more care), and if twins are involved.</p>

<h3>When to Hire a Japa Maid</h3>
<p>Ideally, book your japa maid 2-3 months before your due date. Good japa maids are in high demand, especially during peak months. Through Verified Maids, we help you find and book verified japa maids in advance.</p>

<h3>How Long Do You Need a Japa Maid?</h3>
<p>Most families hire a japa maid for 1-3 months. The first 40 days (traditionally called "chilla" or confinement period) are the most critical. Some families extend for up to 6 months, especially for first-time parents.</p>`,
  },
  {
    id: 6,
    slug: 'background-verification-domestic-help',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    title: 'Why Background Verification Matters for Domestic Help',
    excerpt: 'Hiring unverified domestic help puts your family at risk. Learn why background checks are essential and what a proper verification covers.',
    category: 'Domestic Help',
    date: '2025-06-01',
    readTime: '5 min read',
    content: `<h2>The Importance of Background Verification</h2>
<p>Every year, Mumbai newspapers carry stories of theft, fraud, or worse involving domestic helpers hired through unverified channels. Here is why background verification is not optional — it is essential.</p>

<h3>What Does Background Verification Include?</h3>
<ul>
<li><strong>Identity Check:</strong> Aadhaar card, PAN card, or other government ID verification</li>
<li><strong>Address Verification:</strong> Confirming the helper's permanent and current address</li>
<li><strong>Reference Check:</strong> Speaking to 2-3 previous employers</li>
<li><strong>Criminal Record Check:</strong> Police verification where available</li>
<li><strong>Employment History:</strong> Verifying past work experience</li>
</ul>

<h3>Risks of Hiring Without Verification</h3>
<p>Without proper checks, you are essentially letting a stranger into your home. Common risks include theft of valuables, unauthorized key copies, sharing your daily schedule with outsiders, and in extreme cases, physical harm to family members.</p>

<h3>How Verified Maids Protects You</h3>
<p>At Verified Maids, every professional undergoes a thorough multi-step verification before being matched with any family. We maintain detailed records and provide replacement support if any issues arise. Your family's safety is our business.</p>`,
  },
];

export const getWhatsAppLink = (message = BRAND.whatsappMessage) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsapp}?text=${text}`;
};
