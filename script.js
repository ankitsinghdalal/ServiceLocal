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
        submitBtn.textContent = 'Sending\u2026';
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
            submitBtn.textContent = 'Send Suggestion';
        })
        .finally(function () {
            if (document.getElementById('feedback-form-view').style.display !== 'none') {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Suggestion';
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
