// FixKaro — Shared JavaScript

// ─── Theme Toggle ──────────────────────────────────────────────
(function () {
    var saved = localStorage.getItem('fk-theme') || 'light';
    applyTheme(saved);

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            btn.innerHTML = theme === 'dark' ? '&#9728;' : '&#9790;';
            btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        });
    }

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('.theme-toggle');
        if (!btn) return;
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('fk-theme', next);
        applyTheme(next);
    });
})();

// ─── Mobile Menu Toggle ────────────────────────────────────────
(function () {
    var btn = document.querySelector('.mobile-menu-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
        document.querySelector('nav').classList.toggle('nav-mobile-open');
    });
})();

// ─── Language (i18n) ──────────────────────────────────────────
var TRANSLATIONS = {
    en: {
        // Nav
        'nav.services':     'Services',
        'nav.how_it_works': 'How It Works',
        'nav.join':         'Join as Partner',
        'nav.book':         'Book Now',
        // Floating CTA
        'cta.book': '📅 Book Now',
        'cta.join': '🤝 Partner बनें',
        // Feedback tab
        'feedback.tab': '💬 Feedback',
        // Feedback modal
        'feedback.title':         'Share a Suggestion',
        'feedback.sub':           'Help us improve FixKaro for Bahadurgarh.',
        'feedback.name_label':    'Your Name',
        'feedback.name_optional': '(optional)',
        'feedback.contact_label':    'Phone / Email',
        'feedback.contact_optional': '(optional, for follow-up)',
        'feedback.name_ph':    'Enter your name',
        'feedback.contact_ph': '+91 XXXXX or email@example.com',
        'feedback.category_label': 'Category',
        'feedback.cat_new':     'Request a New Service',
        'feedback.cat_pricing': 'Pricing Feedback',
        'feedback.cat_website': 'Website Feedback',
        'feedback.cat_general': 'General Suggestion',
        'feedback.message_label': 'Your Suggestion',
        'feedback.message_ph':    'Tell us what you think or what service you need...',
        'feedback.submit':        'Send Suggestion',
        'feedback.sending':       'Sending…',
        'feedback.success_title': 'Thank You!',
        'feedback.success_msg':   'Your suggestion has been received. We review every submission and use it to make FixKaro better.',
        'feedback.done': 'Done',
        // Footer
        'footer.tagline':      'Your trusted platform for booking verified local home service professionals in Bahadurgarh.',
        'footer.col.services': 'Services',
        'footer.col.company':  'Company',
        'footer.col.support':  'Support',
        'footer.about':        'About Us',
        'footer.contact':      'Contact',
        'footer.terms':        'Terms of Service',
        'footer.privacy':      'Privacy Policy',
        'footer.cancellation': 'Cancellation Policy',
        'footer.rights':       '© 2026 FixKaro. All rights reserved.',
        // join.html
        'join.hero_h1':  'Join <span class="highlight">FixKaro</span> as a Partner',
        'join.hero_sub': "Register as a service professional and start getting customers in Bahadurgarh. It's free to join.",
        'join.b1': 'Earn more with direct leads',
        'join.b2': 'Flexible working hours',
        'join.b3': 'Grow your customer base',
        'join.b4': 'Verified badge on profile',
        'join.success_title': 'Registration Submitted!',
        'join.success_msg':   'Thank you for joining FixKaro! Our team will review your details and reach out to you within 24 hours to complete your onboarding.',
        'join.go_home':   'Go to Homepage',
        'join.form_title': 'Register Now',
        'join.form_sub':   "Fill in your details and we'll get you started within 24 hours.",
        'join.name_label':     'Full Name',
        'join.name_ph':        'Enter your full name',
        'join.phone_label':    'Phone Number',
        'join.phone_ph':       '10-digit mobile number',
        'join.whatsapp_label': 'WhatsApp Number',
        'join.whatsapp_ph':    'If different from phone',
        'join.service_label':  'Service Category',
        'join.service_ph':     'Select your service',
        'join.svc.plumber':    'Plumber',
        'join.svc.electrician':'Electrician',
        'join.svc.carpenter':  'Carpenter',
        'join.svc.painter':    'Painter',
        'join.svc.ac':         'AC Repair & Service',
        'join.svc.pujari':     'Pujari / Pandit',
        'join.svc.cleaning':   'Home Cleaning',
        'join.svc.pest':       'Pest Control',
        'join.svc.other':      'Other',
        'join.area_label': 'Area / Locality',
        'join.area_ph':    'e.g. Sector 3, Nehru Colony',
        'join.exp_label':  'Years of Experience',
        'join.exp_ph':     'Select experience',
        'join.exp.lt1':  'Less than 1 year',
        'join.exp.1_3':  '1 - 3 years',
        'join.exp.3_5':  '3 - 5 years',
        'join.exp.5_10': '5 - 10 years',
        'join.exp.10p':  '10+ years',
        'join.aadhaar_label': 'Aadhaar Number',
        'join.aadhaar_ph':    '12-digit Aadhaar number (for verification)',
        'join.notes_label': "Anything else you'd like us to know?",
        'join.notes_ph':    'e.g. I also do waterproofing, available only on weekends...',
        'join.submit':   'Submit Registration',
        'join.cta_title': 'Looking for a service instead?',
        'join.cta_sub':   'Book a verified professional for your home service needs.',
        'join.cta_btn':   'Book a Service',
        // index.html
        'home.hero_badge': '★ Trusted in Bahadurgarh',
        'home.hero_h1':   'Book Trusted Professionals<br><span class="highlight">For Every Home Need</span>',
        'home.hero_sub':  'From plumbers and electricians to carpenters and pujaris — find verified local experts at your doorstep within hours.',
        'home.select_svc': 'Select a service',
        'home.area_ph':    'Enter your area or pincode',
        'home.search_btn': 'Search →',
        'home.services_title': 'What do you need help with?',
        'home.services_sub':   'Choose from a wide range of home services',
        'home.hiw_title': 'How It Works',
        'home.hiw_sub':   'Get service at your door in 3 simple steps',
        'home.step1_title': 'Choose a Service',
        'home.step1_desc':  'Pick the service you need, enter your location, and select a convenient time slot.',
        'home.step2_title': 'Get Matched',
        'home.step2_desc':  'We match you with a verified, rated professional near you. Review their profile before confirming.',
        'home.step3_title': 'Job Done',
        'home.step3_desc':  'The professional arrives at your doorstep. Pay after the work is completed to your satisfaction.',
        'home.modal_title':       'Book a Service',
        'home.modal_name_label':  'Your Name',
        'home.modal_name_ph':     'Enter your full name',
        'home.modal_phone_label': 'Phone Number',
        'home.modal_phone_ph':    '10-digit mobile number',
        'home.modal_desc_label':  'Describe the issue (optional)',
        'home.modal_desc_ph':     'e.g. Kitchen tap leaking, need urgent repair',
        'home.modal_submit':      'Confirm Booking Request',
        'home.success_title': 'Booking Confirmed!',
        'home.success_done':  'Done',
        // Shared why-section keys (used across service pages)
        'why.verified': 'Background Verified',
        'why.pricing':  'Upfront Pricing',
        'why.sameday':  'Same Day Service',
        'why.warranty': '30-Day Warranty',
        'why.premium':  'Premium Quality',
        'why.clean':    'Clean Finish',
        // plumber.html
        'plumber.h1':       'Plumber in <span class="highlight">Bahadurgarh</span>',
        'plumber.hero_p':   'Book verified, experienced plumbers for all your plumbing needs. Same-day service with upfront pricing and a 30-day warranty.',
        'plumber.sub_title':'Our Plumbing Services',
        'plumber.svc1': 'Tap Repair & Installation',   'plumber.svc2': 'Pipe Fitting & Repair',
        'plumber.svc3': 'Leak Detection & Fixing',      'plumber.svc4': 'Bathroom Fitting',
        'plumber.svc5': 'Water Tank Repair',            'plumber.svc6': 'Toilet Repair & Installation',
        'plumber.svc7': 'Geyser Installation',          'plumber.svc8': 'Drainage & Blockage Clearing',
        'plumber.why_title': 'Why Choose FixKaro Plumbers?',
        'plumber.wp1': 'Every plumber is ID-verified and background checked for your safety.',
        'plumber.wp2': 'Know the cost before work begins. No hidden charges, no surprises.',
        'plumber.wp3': 'Book now and get a plumber at your door today in Bahadurgarh.',
        'plumber.wp4': 'All plumbing work comes with a 30-day service warranty.',
        'plumber.cta_h2': 'Need a Plumber in Bahadurgarh?',
        'plumber.cta_p':  'Book a verified plumber now and get same-day service at your doorstep.',
        'plumber.cta_btn':'Book a Plumber',
        // electrician.html
        'electrician.h1':       'Electrician in <span class="highlight">Bahadurgarh</span>',
        'electrician.hero_p':   'Book verified, skilled electricians for all your electrical needs. Same-day service with upfront pricing and a 30-day warranty.',
        'electrician.sub_title':'Our Electrical Services',
        'electrician.svc1': 'Switch & Socket Repair',      'electrician.svc2': 'Wiring & Rewiring',
        'electrician.svc3': 'MCB & Fuse Replacement',      'electrician.svc4': 'Fan Installation & Repair',
        'electrician.svc5': 'Light Fixture Installation',  'electrician.svc6': 'Inverter & UPS Installation',
        'electrician.svc7': 'Doorbell Installation',       'electrician.svc8': 'Electrical Safety Inspection',
        'electrician.why_title': 'Why Choose FixKaro Electricians?',
        'electrician.wp1': 'Every electrician is ID-verified and background checked for your safety.',
        'electrician.wp2': 'Know the cost before work begins. No hidden charges, no surprises.',
        'electrician.wp3': 'Book now and get an electrician at your door today in Bahadurgarh.',
        'electrician.wp4': 'All electrical work comes with a 30-day service warranty.',
        'electrician.cta_h2': 'Need an Electrician in Bahadurgarh?',
        'electrician.cta_p':  'Book a verified electrician now and get same-day service at your doorstep.',
        'electrician.cta_btn':'Book an Electrician',
        // carpenter.html
        'carpenter.h1':       'Carpenter in <span class="highlight">Bahadurgarh</span>',
        'carpenter.hero_p':   'Book verified, skilled carpenters for all your woodwork and furniture needs. Same-day service with upfront pricing and quality craftsmanship.',
        'carpenter.sub_title':'Our Carpentry Services',
        'carpenter.svc1': 'Door Repair & Installation',    'carpenter.svc2': 'Furniture Assembly',
        'carpenter.svc3': 'Modular Kitchen Work',          'carpenter.svc4': 'Bed & Wardrobe Repair',
        'carpenter.svc5': 'Window Frame Fitting',          'carpenter.svc6': 'Shelf & Cabinet Installation',
        'carpenter.svc7': 'Wood Polishing',                'carpenter.svc8': 'Lock & Handle Fitting',
        'carpenter.why_title': 'Why Choose FixKaro Carpenters?',
        'carpenter.wp1': 'Every carpenter is ID-verified and background checked for your safety.',
        'carpenter.wp2': 'Know the cost before work begins. No hidden charges, no surprises.',
        'carpenter.wp3': 'Book now and get a carpenter at your door today in Bahadurgarh.',
        'carpenter.wp4': 'All carpentry work comes with a 30-day service warranty.',
        'carpenter.cta_h2': 'Need a Carpenter in Bahadurgarh?',
        'carpenter.cta_p':  'Book a verified carpenter now and get same-day service at your doorstep.',
        'carpenter.cta_btn':'Book a Carpenter',
        // painter.html
        'painter.h1':       'Painter in <span class="highlight">Bahadurgarh</span>',
        'painter.hero_p':   'Book verified, professional painters for interior and exterior painting. Quality finishes with premium paints at affordable rates.',
        'painter.sub_title':'Our Painting Services',
        'painter.svc1': 'Interior Wall Painting',          'painter.svc2': 'Exterior Wall Painting',
        'painter.svc3': 'Texture Painting',                'painter.svc4': 'Waterproofing',
        'painter.svc5': 'Wood Polish & Varnish',           'painter.svc6': 'Wall Putty & Primer',
        'painter.svc7': 'Metal Gate & Grill Painting',     'painter.svc8': 'Stencil & Design Work',
        'painter.why_title': 'Why Choose FixKaro Painters?',
        'painter.wp1': 'Every painter is ID-verified and background checked for your safety.',
        'painter.wp2': 'Get a detailed quote with paint and labour cost before work begins.',
        'painter.wp3': 'We use branded paints from Asian Paints, Berger, and Nerolac.',
        'painter.wp4': 'Professional painters ensure a neat, clean finish with furniture protection.',
        'painter.cta_h2': 'Need a Painter in Bahadurgarh?',
        'painter.cta_p':  'Book a verified painter now and transform your home with a fresh coat of paint.',
        'painter.cta_btn':'Book a Painter',
        // pujari.html
        'pujari.h1':       'Pujari / Pandit in <span class="highlight">Bahadurgarh</span>',
        'pujari.hero_p':   'Book experienced pandits for all Hindu religious ceremonies, pujas, and havans. Trusted, knowledgeable priests available at your convenience.',
        'pujari.sub_title':'Our Puja Services',
        'pujari.svc1': 'Griha Pravesh Puja',   'pujari.svc2': 'Satyanarayan Puja',
        'pujari.svc3': 'Havan & Yagna',        'pujari.svc4': 'Mundan Ceremony',
        'pujari.svc5': 'Wedding Ceremonies',   'pujari.svc6': 'Sunderkand Path',
        'pujari.svc7': 'Navgraha Shanti Puja', 'pujari.svc8': 'Akhand Ramayan Path',
        'pujari.why_title': 'Why Choose FixKaro Pandits?',
        'pujari.why1': 'Experienced Pandits',  'pujari.why2': 'Transparent Pricing',
        'pujari.why3': 'Flexible Scheduling',  'pujari.why4': 'Verified Profiles',
        'pujari.wp1': 'Our pandits are well-versed in Vedic rituals and scriptures.',
        'pujari.wp2': 'Know the puja cost and samagri details upfront before booking.',
        'pujari.wp3': 'Book at your preferred date and time based on shubh muhurat.',
        'pujari.wp4': 'All pandits are verified and reviewed by other families.',
        'pujari.cta_h2': 'Need a Pandit in Bahadurgarh?',
        'pujari.cta_p':  'Book a trusted pandit for your puja ceremony today.',
        'pujari.cta_btn':'Book a Pandit',
        // ac-repair.html
        'ac.h1':       'AC Repair in <span class="highlight">Bahadurgarh</span>',
        'ac.hero_p':   'Book verified AC technicians for servicing, repair, gas refill, and installation. Same-day service with upfront pricing and a 30-day warranty.',
        'ac.sub_title':'Our AC Services',
        'ac.svc1': 'AC Regular Servicing',         'ac.svc2': 'AC Gas Refill / Recharge',
        'ac.svc3': 'Compressor Repair',            'ac.svc4': 'Split AC Installation',
        'ac.svc5': 'Window AC Repair',             'ac.svc6': 'AC Water Leak Fix',
        'ac.svc7': 'AC Deep Cleaning',             'ac.svc8': 'AC Uninstallation & Shifting',
        'ac.why_title': 'Why Choose FixKaro AC Technicians?',
        'ac.wp1': 'Every technician is ID-verified and background checked for your safety.',
        'ac.wp2': 'Know the cost before work begins. No hidden charges, no surprises.',
        'ac.wp3': 'Book now and get an AC technician at your door today in Bahadurgarh.',
        'ac.wp4': 'All AC repair work comes with a 30-day service warranty.',
        'ac.cta_h2': 'Need AC Repair in Bahadurgarh?',
        'ac.cta_p':  'Book a verified AC technician now and get same-day service at your doorstep.',
        'ac.cta_btn':'Book AC Service',
    },

    hi: {
        // Nav
        'nav.services':     'सेवाएं',
        'nav.how_it_works': 'कैसे काम करता है',
        'nav.join':         'Partner बनें',
        'nav.book':         'अभी बुक करें',
        // Floating CTA
        'cta.book': '📅 अभी बुक करें',
        'cta.join': '🤝 Partner बनें',
        // Feedback tab
        'feedback.tab': '💬 सुझाव',
        // Feedback modal
        'feedback.title':         'सुझाव दें',
        'feedback.sub':           'Bahadurgarh के लिए FixKaro को बेहतर बनाने में मदद करें।',
        'feedback.name_label':    'आपका नाम',
        'feedback.name_optional': '(वैकल्पिक)',
        'feedback.contact_label':    'फोन / ईमेल',
        'feedback.contact_optional': '(वैकल्पिक, follow-up के लिए)',
        'feedback.name_ph':    'अपना नाम लिखें',
        'feedback.contact_ph': '+91 XXXXX या email@example.com',
        'feedback.category_label': 'श्रेणी',
        'feedback.cat_new':     'नई सेवा का अनुरोध',
        'feedback.cat_pricing': 'मूल्य पर सुझाव',
        'feedback.cat_website': 'वेबसाइट पर सुझाव',
        'feedback.cat_general': 'सामान्य सुझाव',
        'feedback.message_label': 'आपका सुझाव',
        'feedback.message_ph':    'बताएं आप क्या सोचते हैं या कौन सी सेवा चाहिए...',
        'feedback.submit':        'सुझाव भेजें',
        'feedback.sending':       'भेज रहे हैं…',
        'feedback.success_title': 'धन्यवाद!',
        'feedback.success_msg':   'आपका सुझाव मिल गया। हम हर सुझाव पढ़ते हैं और FixKaro को बेहतर बनाने में उपयोग करते हैं।',
        'feedback.done': 'ठीक है',
        // Footer
        'footer.tagline':      'Bahadurgarh में verified घरेलू सेवा professionals को बुक करने का आपका भरोसेमंद platform।',
        'footer.col.services': 'सेवाएं',
        'footer.col.company':  'कंपनी',
        'footer.col.support':  'सहायता',
        'footer.about':        'हमारे बारे में',
        'footer.contact':      'संपर्क',
        'footer.terms':        'सेवा की शर्तें',
        'footer.privacy':      'गोपनीयता नीति',
        'footer.cancellation': 'रद्दीकरण नीति',
        'footer.rights':       '© 2026 FixKaro। सर्वाधिकार सुरक्षित।',
        // join.html
        'join.hero_h1':  '<span class="highlight">FixKaro</span> से Partner के रूप में जुड़ें',
        'join.hero_sub': 'Service professional के रूप में register करें और Bahadurgarh में ग्राहक पाएं। Join करना बिल्कुल मुफ्त है।',
        'join.b1': 'Direct leads से ज्यादा कमाई करें',
        'join.b2': 'अपने समय पर काम करें',
        'join.b3': 'अपना customer base बढ़ाएं',
        'join.b4': 'Profile पर Verified badge पाएं',
        'join.success_title': 'Registration हो गई!',
        'join.success_msg':   'FixKaro से जुड़ने के लिए धन्यवाद! हमारी टीम आपकी जानकारी देखेगी और onboarding के लिए 24 घंटे में संपर्क करेगी।',
        'join.go_home':   'Homepage पर जाएं',
        'join.form_title': 'अभी Register करें',
        'join.form_sub':   'नीचे अपनी जानकारी भरें और हम 24 घंटे में शुरू कर देंगे।',
        'join.name_label':     'पूरा नाम',
        'join.name_ph':        'अपना पूरा नाम लिखें',
        'join.phone_label':    'फोन नंबर',
        'join.phone_ph':       '10 अंकों का मोबाइल नंबर',
        'join.whatsapp_label': 'WhatsApp नंबर',
        'join.whatsapp_ph':    'यदि फोन से अलग हो',
        'join.service_label':  'सेवा श्रेणी',
        'join.service_ph':     'अपनी सेवा चुनें',
        'join.svc.plumber':    'Plumber (नलसाज)',
        'join.svc.electrician':'Electrician (बिजली मिस्त्री)',
        'join.svc.carpenter':  'Carpenter (बढ़ई)',
        'join.svc.painter':    'Painter (रंगाई)',
        'join.svc.ac':         'AC Repair और Service',
        'join.svc.pujari':     'Pujari / Pandit',
        'join.svc.cleaning':   'Home Cleaning (घर की सफाई)',
        'join.svc.pest':       'Pest Control (कीट नियंत्रण)',
        'join.svc.other':      'अन्य',
        'join.area_label': 'क्षेत्र / मोहल्ला',
        'join.area_ph':    'जैसे: Sector 3, Nehru Colony',
        'join.exp_label':  'अनुभव (वर्षों में)',
        'join.exp_ph':     'अनुभव चुनें',
        'join.exp.lt1':  '1 वर्ष से कम',
        'join.exp.1_3':  '1 - 3 वर्ष',
        'join.exp.3_5':  '3 - 5 वर्ष',
        'join.exp.5_10': '5 - 10 वर्ष',
        'join.exp.10p':  '10+ वर्ष',
        'join.aadhaar_label': 'आधार नंबर',
        'join.aadhaar_ph':    '12 अंकों का आधार नंबर (verification के लिए)',
        'join.notes_label': 'कुछ और बताना चाहते हैं?',
        'join.notes_ph':    'जैसे: मैं waterproofing भी करता हूं, केवल weekends पर उपलब्ध हूं...',
        'join.submit':   'Registration जमा करें',
        'join.cta_title': 'इसके बजाय कोई सेवा चाहिए?',
        'join.cta_sub':   'अपनी घरेलू जरूरत के लिए verified professional बुक करें।',
        'join.cta_btn':   'सेवा बुक करें',
        // index.html
        'home.hero_badge': '★ Bahadurgarh का भरोसेमंद',
        'home.hero_h1':   'Trusted Professionals बुक करें<br><span class="highlight">हर घरेलू जरूरत के लिए</span>',
        'home.hero_sub':  'Plumbers, electricians, carpenters और pujaris — verified local experts आपके दरवाजे पर घंटों में।',
        'home.select_svc': 'सेवा चुनें',
        'home.area_ph':    'अपना क्षेत्र या pincode लिखें',
        'home.search_btn': 'खोजें →',
        'home.services_title': 'आपको किस चीज़ में मदद चाहिए?',
        'home.services_sub':   'घरेलू सेवाओं की पूरी रेंज में से चुनें',
        'home.hiw_title': 'कैसे काम करता है',
        'home.hiw_sub':   '3 आसान steps में अपने दरवाजे पर सेवा पाएं',
        'home.step1_title': 'सेवा चुनें',
        'home.step1_desc':  'जो सेवा चाहिए वो चुनें, अपना location और समय बताएं।',
        'home.step2_title': 'हम जोड़ते हैं',
        'home.step2_desc':  'हम आपके पास का एक verified, rated professional ढूंढते हैं। Confirm करने से पहले profile देखें।',
        'home.step3_title': 'काम हो गया',
        'home.step3_desc':  'Professional आपके दरवाजे पर आता है। संतुष्टि के बाद payment करें।',
        'home.modal_title':       'सेवा बुक करें',
        'home.modal_name_label':  'आपका नाम',
        'home.modal_name_ph':     'अपना पूरा नाम लिखें',
        'home.modal_phone_label': 'फोन नंबर',
        'home.modal_phone_ph':    '10 अंकों का मोबाइल नंबर',
        'home.modal_desc_label':  'समस्या बताएं (वैकल्पिक)',
        'home.modal_desc_ph':     'जैसे: रसोई का नल टपक रहा है, जल्दी ठीक चाहिए',
        'home.modal_submit':      'Booking Confirm करें',
        'home.success_title': 'Booking हो गई!',
        'home.success_done':  'ठीक है',
        // Shared why-section keys
        'why.verified': 'Background Verified (सत्यापित)',
        'why.pricing':  'पारदर्शी मूल्य',
        'why.sameday':  'Same Day Service',
        'why.warranty': '30 दिन की Warranty',
        'why.premium':  'Premium Quality',
        'why.clean':    'साफ-सुथरा काम',
        // plumber.html
        'plumber.h1':       'Bahadurgarh में <span class="highlight">Plumber</span>',
        'plumber.hero_p':   'सभी plumbing जरूरतों के लिए verified, अनुभवी plumbers बुक करें। Same-day service, upfront pricing और 30 दिन की warranty।',
        'plumber.sub_title':'हमारी Plumbing Services',
        'plumber.svc1': 'नल की मरम्मत और लगाना',   'plumber.svc2': 'Pipe Fitting और मरम्मत',
        'plumber.svc3': 'Leak ढूंढना और ठीक करना',  'plumber.svc4': 'Bathroom Fitting',
        'plumber.svc5': 'Water Tank मरम्मत',         'plumber.svc6': 'Toilet मरम्मत और लगाना',
        'plumber.svc7': 'Geyser Installation',        'plumber.svc8': 'Drainage और Blockage साफ करना',
        'plumber.why_title': 'FixKaro Plumbers क्यों चुनें?',
        'plumber.wp1': 'हर plumber की ID और background check की जाती है।',
        'plumber.wp2': 'काम शुरू होने से पहले लागत जानें। कोई छुपा charge नहीं।',
        'plumber.wp3': 'अभी बुक करें और आज Bahadurgarh में plumber पाएं।',
        'plumber.wp4': 'सभी plumbing काम पर 30 दिन की warranty।',
        'plumber.cta_h2': 'Bahadurgarh में Plumber चाहिए?',
        'plumber.cta_p':  'अभी verified plumber बुक करें और same-day service पाएं।',
        'plumber.cta_btn':'Plumber बुक करें',
        // electrician.html
        'electrician.h1':       'Bahadurgarh में <span class="highlight">Electrician</span>',
        'electrician.hero_p':   'सभी electrical जरूरतों के लिए verified, कुशल electricians बुक करें। Same-day service, upfront pricing और 30 दिन की warranty।',
        'electrician.sub_title':'हमारी Electrical Services',
        'electrician.svc1': 'Switch और Socket मरम्मत',    'electrician.svc2': 'Wiring और Rewiring',
        'electrician.svc3': 'MCB और Fuse बदलना',         'electrician.svc4': 'Fan Installation और मरम्मत',
        'electrician.svc5': 'Light Fixture लगाना',        'electrician.svc6': 'Inverter और UPS Installation',
        'electrician.svc7': 'Doorbell Installation',       'electrician.svc8': 'Electrical Safety Inspection',
        'electrician.why_title': 'FixKaro Electricians क्यों चुनें?',
        'electrician.wp1': 'हर electrician की ID और background check की जाती है।',
        'electrician.wp2': 'काम शुरू होने से पहले लागत जानें। कोई छुपा charge नहीं।',
        'electrician.wp3': 'अभी बुक करें और आज Bahadurgarh में electrician पाएं।',
        'electrician.wp4': 'सभी electrical काम पर 30 दिन की warranty।',
        'electrician.cta_h2': 'Bahadurgarh में Electrician चाहिए?',
        'electrician.cta_p':  'अभी verified electrician बुक करें और same-day service पाएं।',
        'electrician.cta_btn':'Electrician बुक करें',
        // carpenter.html
        'carpenter.h1':       'Bahadurgarh में <span class="highlight">Carpenter</span>',
        'carpenter.hero_p':   'सभी woodwork और furniture जरूरतों के लिए verified, कुशल carpenters बुक करें। Same-day service और quality craftsmanship।',
        'carpenter.sub_title':'हमारी Carpentry Services',
        'carpenter.svc1': 'दरवाजा मरम्मत और लगाना',    'carpenter.svc2': 'Furniture Assembly',
        'carpenter.svc3': 'Modular Kitchen Work',         'carpenter.svc4': 'Bed और Wardrobe मरम्मत',
        'carpenter.svc5': 'Window Frame Fitting',         'carpenter.svc6': 'Shelf और Cabinet लगाना',
        'carpenter.svc7': 'Wood Polishing',               'carpenter.svc8': 'Lock और Handle Fitting',
        'carpenter.why_title': 'FixKaro Carpenters क्यों चुनें?',
        'carpenter.wp1': 'हर carpenter की ID और background check की जाती है।',
        'carpenter.wp2': 'काम शुरू होने से पहले लागत जानें। कोई छुपा charge नहीं।',
        'carpenter.wp3': 'अभी बुक करें और आज Bahadurgarh में carpenter पाएं।',
        'carpenter.wp4': 'सभी carpentry काम पर 30 दिन की warranty।',
        'carpenter.cta_h2': 'Bahadurgarh में Carpenter चाहिए?',
        'carpenter.cta_p':  'अभी verified carpenter बुक करें और same-day service पाएं।',
        'carpenter.cta_btn':'Carpenter बुक करें',
        // painter.html
        'painter.h1':       'Bahadurgarh में <span class="highlight">Painter</span>',
        'painter.hero_p':   'Interior और exterior painting के लिए verified, professional painters बुक करें। Premium paints से quality finish, affordable rates पर।',
        'painter.sub_title':'हमारी Painting Services',
        'painter.svc1': 'Interior Wall Painting',          'painter.svc2': 'Exterior Wall Painting',
        'painter.svc3': 'Texture Painting',                'painter.svc4': 'Waterproofing',
        'painter.svc5': 'Wood Polish और Varnish',          'painter.svc6': 'Wall Putty और Primer',
        'painter.svc7': 'Metal Gate और Grill Painting',    'painter.svc8': 'Stencil और Design Work',
        'painter.why_title': 'FixKaro Painters क्यों चुनें?',
        'painter.wp1': 'हर painter की ID और background check की जाती है।',
        'painter.wp2': 'काम से पहले paint और labour लागत का detailed quote पाएं।',
        'painter.wp3': 'हम Asian Paints, Berger, Nerolac के branded paints use करते हैं।',
        'painter.wp4': 'Professional painters साफ-सुथरा finish देते हैं, furniture की सुरक्षा के साथ।',
        'painter.cta_h2': 'Bahadurgarh में Painter चाहिए?',
        'painter.cta_p':  'अभी verified painter बुक करें और अपने घर को नया रूप दें।',
        'painter.cta_btn':'Painter बुक करें',
        // pujari.html
        'pujari.h1':       'Bahadurgarh में <span class="highlight">Pujari / Pandit</span>',
        'pujari.hero_p':   'सभी Hindu धार्मिक अनुष्ठानों, पूजा और हवन के लिए अनुभवी पंडित बुक करें। भरोसेमंद, जानकार पुजारी आपकी सुविधा अनुसार उपलब्ध।',
        'pujari.sub_title':'हमारी पूजा सेवाएं',
        'pujari.svc1': 'गृह प्रवेश पूजा',    'pujari.svc2': 'सत्यनारायण पूजा',
        'pujari.svc3': 'हवन और यज्ञ',         'pujari.svc4': 'मुंडन संस्कार',
        'pujari.svc5': 'विवाह संस्कार',       'pujari.svc6': 'सुंदरकांड पाठ',
        'pujari.svc7': 'नवग्रह शांति पूजा',   'pujari.svc8': 'अखंड रामायण पाठ',
        'pujari.why_title': 'FixKaro पंडित क्यों चुनें?',
        'pujari.why1': 'अनुभवी पंडित',        'pujari.why2': 'पारदर्शी मूल्य',
        'pujari.why3': 'लचीला समय',            'pujari.why4': 'Verified Profile',
        'pujari.wp1': 'हमारे पंडित वैदिक अनुष्ठानों और शास्त्रों में निपुण हैं।',
        'pujari.wp2': 'Booking से पहले पूजा की लागत और सामग्री की जानकारी।',
        'pujari.wp3': 'शुभ मुहूर्त के अनुसार अपनी पसंद की तारीख और समय पर बुक करें।',
        'pujari.wp4': 'सभी पंडित verified हैं और अन्य परिवारों द्वारा reviewed हैं।',
        'pujari.cta_h2': 'Bahadurgarh में पंडित चाहिए?',
        'pujari.cta_p':  'आज अपनी पूजा के लिए भरोसेमंद पंडित बुक करें।',
        'pujari.cta_btn':'पंडित बुक करें',
        // ac-repair.html
        'ac.h1':       'Bahadurgarh में <span class="highlight">AC Repair</span>',
        'ac.hero_p':   'Servicing, repair, gas refill और installation के लिए verified AC technicians बुक करें। Same-day service, upfront pricing और 30 दिन की warranty।',
        'ac.sub_title':'हमारी AC Services',
        'ac.svc1': 'AC Regular Servicing',         'ac.svc2': 'AC Gas Refill / Recharge',
        'ac.svc3': 'Compressor मरम्मत',            'ac.svc4': 'Split AC Installation',
        'ac.svc5': 'Window AC मरम्मत',             'ac.svc6': 'AC Water Leak ठीक करना',
        'ac.svc7': 'AC Deep Cleaning',             'ac.svc8': 'AC Uninstallation और Shifting',
        'ac.why_title': 'FixKaro AC Technicians क्यों चुनें?',
        'ac.wp1': 'हर technician की ID और background check की जाती है।',
        'ac.wp2': 'काम शुरू होने से पहले लागत जानें। कोई छुपा charge नहीं।',
        'ac.wp3': 'अभी बुक करें और आज Bahadurgarh में AC technician पाएं।',
        'ac.wp4': 'सभी AC repair काम पर 30 दिन की warranty।',
        'ac.cta_h2': 'Bahadurgarh में AC Repair चाहिए?',
        'ac.cta_p':  'अभी verified AC technician बुक करें और same-day service पाएं।',
        'ac.cta_btn':'AC Service बुक करें',
    }
};

// ─── Translation helpers ───────────────────────────────────────
function fkT(key) {
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined)
        ? TRANSLATIONS[lang][key]
        : (TRANSLATIONS.en[key] || key);
}
window.fkT = fkT;

function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi' : 'en');

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var val = fkT(el.getAttribute('data-i18n'));
        if (val !== undefined) el.textContent = val;
    });

    // innerHTML (for elements with embedded HTML like spans)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var val = fkT(el.getAttribute('data-i18n-html'));
        if (val !== undefined) el.innerHTML = val;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
        var val = fkT(el.getAttribute('data-i18n-ph'));
        if (val !== undefined) el.placeholder = val;
    });

    // Lang toggle button shows opposite language
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
        btn.textContent = lang === 'hi' ? 'EN' : 'हिं';
        btn.setAttribute('aria-label', lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें');
    });
}

(function () {
    var savedLang = localStorage.getItem('fk-lang') || 'en';
    applyLang(savedLang);

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('.lang-toggle');
        if (!btn) return;
        var next = document.documentElement.getAttribute('data-lang') === 'hi' ? 'en' : 'hi';
        localStorage.setItem('fk-lang', next);
        applyLang(next);
    });
})();

// ─── Suggestions / Feedback Modal ─────────────────────────────
// SETUP INSTRUCTIONS:
// 1. Create a Google Sheet with these columns in Row 1:
//    Timestamp | Name | Contact | Category | Message | Page
// 2. Extensions > Apps Script > paste:
//    function doPost(e) {
//      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//      var data = JSON.parse(e.postData.contents);
//      sheet.appendRow([new Date(), data.name, data.contact, data.category, data.message, data.page]);
//      return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
//    }
// 3. Deploy > New deployment > Web app (Execute as: Me, Access: Anyone)
// 4. Paste the URL below:
var SUGGESTIONS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwl63e85s0ZmUjQTgKq4ERH3_Cj2xcmuk5s0HfqZ1_tCdRgN4S5QJRVwICyMlXgp2v82A/exec';

(function () {
    var tabBtn = document.getElementById('feedback-tab-btn');
    var overlay = document.getElementById('feedback-overlay');
    var closeBtn = document.getElementById('feedback-close');
    if (!tabBtn || !overlay) return;

    function openFeedback() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeFeedbackModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.getElementById('feedback-form-view').style.display = '';
        document.getElementById('feedback-success-view').style.display = 'none';
        var msgDiv = document.getElementById('fb-msg');
        if (msgDiv) { msgDiv.className = 'feedback-message'; msgDiv.style.display = 'none'; }
    }
    window.closeFeedbackModal = closeFeedbackModal;

    tabBtn.addEventListener('click', openFeedback);
    closeBtn.addEventListener('click', closeFeedbackModal);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeFeedbackModal();
    });

    document.getElementById('feedback-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var message = document.getElementById('fb-message').value.trim();
        if (!message) return;

        var submitBtn = document.getElementById('fb-submit');
        var msgDiv = document.getElementById('fb-msg');
        submitBtn.disabled = true;
        submitBtn.textContent = fkT('feedback.sending');
        msgDiv.className = 'feedback-message';
        msgDiv.style.display = 'none';

        var data = {
            name:     document.getElementById('fb-name').value.trim() || 'Anonymous',
            contact:  document.getElementById('fb-contact').value.trim() || '\u2014',
            category: document.getElementById('fb-category').value,
            message:  message,
            page:     window.location.pathname || window.location.href
        };

        if (SUGGESTIONS_SCRIPT_URL === 'YOUR_SUGGESTIONS_GOOGLE_APPS_SCRIPT_URL') {
            setTimeout(function () {
                document.getElementById('feedback-form').reset();
                document.getElementById('feedback-form-view').style.display = 'none';
                document.getElementById('feedback-success-view').style.display = 'block';
            }, 500);
            return;
        }

        fetch(SUGGESTIONS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(function () {
            document.getElementById('feedback-form').reset();
            document.getElementById('feedback-form-view').style.display = 'none';
            document.getElementById('feedback-success-view').style.display = 'block';
        })
        .catch(function () {
            msgDiv.className = 'feedback-message error';
            msgDiv.textContent = 'Something went wrong. Please try again.';
            submitBtn.disabled = false;
            submitBtn.textContent = fkT('feedback.submit');
        })
        .finally(function () {
            if (document.getElementById('feedback-form-view').style.display !== 'none') {
                submitBtn.disabled = false;
                submitBtn.textContent = fkT('feedback.submit');
            }
        });
    });
})();

// ─── Floating CTA Visibility ───────────────────────────────────
(function () {
    var cta = document.querySelector('.floating-cta');
    if (!cta) return;
    var shown = false;
    function check() {
        var show = window.scrollY > 350;
        if (show !== shown) {
            shown = show;
            cta.classList.toggle('fk-visible', show);
        }
    }
    window.addEventListener('scroll', check, { passive: true });
})();
