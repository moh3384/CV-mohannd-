/* ============================================================
   MOHANND MOHAMMED SALAWI — PORTFOLIO JAVASCRIPT
   ============================================================
   لتعديل المشاريع: ابحث عن قسم "PROJECTS DATA"
   لتعديل الشهادات: ابحث عن قسم "CERTIFICATES DATA"
   ============================================================ */

// ===================================================
// PROJECTS DATA — عدّل المشاريع هنا
// ===================================================
const projects = [
  {
    id: 1,
    title: "منصة نادي رياضي (مكتمل)",
    shortDesc: "منصة نادي رياضي تحكم كامل في اشتراكات اللاعبين بميزات متقدمة وواجهة عصرية.",
    fullDesc: "منصة تحكم باشتراك اللاعب وتجديد الاشتراك وتسجيل مشتركين جدد وايقاف مؤقت للاشتراك مع توفير تقارير شهريه وسنويه",
    // ===== رابط المشروع - عدّل الرابط هنا =====
    link: "",
    // ===== الأيقونة/الإيموجي التعبيري للمشروع =====
    icon: "🏋️",
    // ===== صور المشروع في الـ Gallery - أضف مساراتها هنا =====
    // مثال: "assets/images/gym-1.jpg"
    gallery: ["assets/images/img23.png", "assets/images/img20.png", "assets/images/img21.png", "assets/images/img22.png"],
    // ===== التقنيات المستخدمة =====
   tags: ["HTML5", "CSS3", "JavaScript", "PHP","MYSQL"],
  },
    {
    id: 2,
    title: "منصة تحضير الطلاب (مكتمل)",
    shortDesc: "منصة متكاملة لتحضير الطلاب عن طريق مسح الباركود.",
    fullDesc: "منصة تحضير طلاب تشمل جميع الفصول في المدرسة تحتوي على توليد باركود مستقل لكل طالب ويتم تسجيل الحضور عن طريق المسح فقط تشمل عده صفحات تحكم وعرض الغياب والحضور وفلترة بالتواريخ السابقة.", 
    link: "https://attendance.site/",
    icon: "",
    gallery: ["assets/images/img15.png", "assets/images/img16.png", "assets/images/img17.png", "assets/images/img19.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "PHP","MYSQL"],
  },


 {
    id: 3,
    title: "موقع مدارس ابن رشد (مكتمل)",
    shortDesc: "موقع رسمي لمدارس ابن رشد في جازان بتصميم توضيحي متميز.",
    fullDesc: "موقع إلكتروني متكامل لمدارس ابن رشد في جازان، يقدم معلومات عن المنهج المقدم خلال الأسبوع مع طرح الواجبات والمهام ،التكاليف التعليمية المطلوبة من الطلاب،امكانية تسجيل اسم المعلم واسم المادة وتثبيتها ،أيضا عنوان الدرس والملاحظات والواجبات امكانية نقل البيانات الى أيام أخرى او إلى فصول أخرى.",
    link: "#",
    icon: "🎓",
    gallery: ["assets/images/img12.png", "assets/images/img13.png", "assets/images/img14.png", "assets/images/img113.png"],
   tags: ["HTML5", "CSS3", "JavaScript", "PHP","MYSQL"],
  },


 {
    id: 10,
    title: "موقع إلكتروني توليد جداول للمعلمين (مكتمل)",
    shortDesc: "موقع إلكتروني يولد حصص للمعلمين بناء على الفصول المدرجة للمعلم.",
    fullDesc: "موقع إالكتروني يقوم بتوليدجداول بترتيب عشوائي لكن بدون تعارض الحصص أو الفصول أو المعلمين بناء على اسم المعلم واسم المادة أيضا هناك تحكم كامل بالموقع من قبل الإدارة بتوزيع الاوقات وايام العمل وساعات العمل ويتم طباعه أو حفظ الجداول كملف إكسل أو ملف بي دي اف أو طباعة",
    link: "https://moh3384.github.io/table/",
    icon: "",
    gallery: ["assets/images/img40.png", "assets/images/img41.png", "assets/images/img42.png", "assets/images/img43.png"],
   tags: ["HTML5", "CSS3", "JavaScript", "PHP","MYSQL"],
  },

   
  {
    id: 4,
    title: "منصة تجارة إلكترونية (قيد التطوير)",
    shortDesc: "منصة تجارة إلكترونية متكاملة بميزات متقدمة وتجربة تسوق سلسة.",
    fullDesc: "منصة تجارة إلكترونية شاملة تتيح عرض المنتجات، إدارة سلة التسوق، وتجربة تسوق عصرية. تتميز بواجهة مستخدم جذابة وأداء عالي.",
    link: "https://moh3384.github.io/test/",
    icon: "🛒",
    gallery: ["assets/images/img1.png", "assets/images/img2.png", "assets/images/img3.png", "assets/images/img4.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "PHP","MYSQL"],
  },
  {
    id: 5,
    title: "موقع الذكاء الاصطناعي (مكتمل)",
    shortDesc: "موقع تعريفي شامل عن الذكاء الاصطناعي ومجالاته المتعددة.",
    fullDesc: "موقع تعريفي احترافي يشرح مفاهيم الذكاء الاصطناعي وتطبيقاته في الحياة اليومية، مع تصميم عصري وتجربة مستخدم ممتازة.",
    link: "https://moh3384.github.io/Artificial--intelligence/",
    icon: "🤖",
    gallery: ["assets/images/img5.png", "assets/images/img6.png", "assets/images/img7.png", "assets/images/img8.png"],
    tags: ["HTML5", "CSS3", "JavaScript",],
  },
   {
    id: 6,
    title: "نظام تحليل الوجوه بالذكاء الاصطناعي (مكتمل)",
    shortDesc: "نموذج ذكاء اصطناعي للتعرف على الوجوه وتحليلها بدقة عالية.",
    fullDesc: "مشروع متقدم يستخدم تقنيات الذكاء الاصطناعي والتعلم الآلي للتعرف على الوجوه وتحليل ملامحها. يعتمد على خوارزميات متطورة لمعالجة الصور.",
    link: "emotionschool.site",
    icon: "👁️",
    gallery: ["assets/images/img9.png", "assets/images/img10.png", "assets/images/img11.png", "👁️"],
    tags: ["Python", "AI", "Machine Learning", "Computer Vision"],
  },
  {
    id: 7,
    title: "موقع رؤية السعودية 2030 (مكتمل)",
    shortDesc: "موقع يتماشى مع أهداف ومبادرات رؤية المملكة العربية السعودية 2030.",
    fullDesc: "موقع تعريفي احترافي يعكس توجهات وأهداف رؤية 2030، يستعرض المبادرات والمشاريع الوطنية الكبرى بتصميم يليق بهذه الرؤية الطموحة.",
    link: "https://moh3384.github.io/vision-2030/",
    icon: "🇸🇦",
    gallery: ["assets/images/img24.png", "assets/images/img25.png", "assets/images/img26.png", "📈"],
    tags: ["HTML5", "CSS3", "JavaScript", "Arabic"],
  },


     {
    id: 8,
    title: "منصة عفار (قيد التطوير)",
    shortDesc: "منصة متكاملة لتحضير الطلاب عن طريق مسح الباركود.",
    fullDesc: "منصة تحضير طلاب تشمل جميع الفصول في المدرسة تحتوي على توليد باركود مستقل لكل طالب ويتم تسجيل الحضور عن طريق المسح فقط تشمل عده صفحات تحكم وعرض الغياب والحضور وفلترة بالتواريخ السابقة.", 
    link: "#",
    icon: "",
    gallery: ["assets/images/img36.png", "assets/images/img38.png", "assets/images/img33.png", "assets/images/img34.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "PHP","MYSQL"],
  },

   
  {
    id: 9,
    title: "موقع مستشفى الأسنان (متوقف حاليا)",
    shortDesc: "موقع احترافي لمستشفى أسنان متكامل مع حجز المواعيد.",
    fullDesc: "منصة رقمية لمستشفى أسنان SmileLine تتيح للمرضى التعرف على الخدمات، الأطباء، وحجز المواعيد بسهولة تامة مع تصميم طبي احترافي.",
    link: "https://moh3384.github.io/smileline/",
    icon: "🦷",
    gallery: ["assets/images/img37.png", "assets/images/img37.png", "assets/images/img37.png", "assets/images/img37.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "Healthcare"],
  },
 

];

// ===================================================
// CERTIFICATES DATA — عدّل الشهادات هنا
// ===================================================
const certificates = [
 
  {
    id: 1,
    title: "تنفيذ دورة الأمن السيبراني",
    issuer: "Online Course",
    date: "2025",
    desc: "تم تنفيذ هذه الدورة من قبل الملعم مهند صلوي واستهدفت الطلاب والمعليمن وأولياء الامور لرفع الوعي في الاستخدام التقني وتجنب مخاطر الهجمات السيبرانية",
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
     image: "assets/images/img28.png",
  },

    {
    id: 2,
    title: "خطاب دعوه من مكتب إدارة تعليم جازان",
    issuer: "حضوري",
    date: "2026",
    desc: " تم حضور الاجتماع ومناقشة مستوى تقدم الطلاب في البرنامج وما هي الآراء في تحسين البرنامج" ,
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
     image: "assets/images/img31.jpeg",
  },

     {
    id: 3,
    title: "تكريم المعلم مهند صلوي ",
    issuer: "حضوري",
    date: "2026",
    desc: " تم تكريم المعلم مهند صلوي من مدير إنجاز السعودية لتنفيذه عدة دورات لرفع وعي الطلاب في عدة برامج تابعه لإنجاز السعودية مع شراكه مع وزارة التعليم" ,
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
     image: "assets/images/img32.jpeg",
  },

   {
    id: 12,
    title: "تكريم المعلم مهند صلوي من إدارة المدرسة ",
    issuer: "حضوري",
    date: "2026",
    desc: "  تم تكريم المعلم مهند صلوي من قِبل إدارة مدارس ابن رشد جازان لجهوده المبذولة والمؤثرة في المدرسة وتطويرة عدة مواقع إلكترونية" ,
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
     image: "assets/images/img44.jpeg",
  },


    {
    id: 4,
    title: "تنفيذ دورة أصدقاء البيئة",
    issuer: "حضوري ",
    date: "2026",
    desc: "تم تنفيذ هذه الدورة من قبل الملعم مهند صلوي واستهدفت الطلاب لرفع الوعي البيئي وتاثير البيئة على الصحة العامة للإنسان",
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
     image: "assets/images/img29.jpeg",
  },
 

    {
    id: 5,
    title: "تنفيذ دورة أبطال الإنترنت",
    issuer: "حضوري ",
    date: "2026",
    desc: "تم تنفيذ هذه الدورة من قبل الملعم مهند صلوي واستهدفت الطلاب لرفع الوعي في استخدام الانترنت ومشاركة البيانات بحذر",
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
     image: "assets/images/img30.jpeg",
  },

  {
    id: 6,
    title: "HTML & CSS Fundamentals",
    issuer: "Online Course",
    date: "2023",
    desc: "أساسيات بناء صفحات الويب باستخدام HTML5 وCSS3 مع تصميم Responsive.",
    icon: "",
    // ===== لإضافة صورة الشهادة: أزل التعليق وأضف المسار =====
    // image: "assets/images/cert-html.jpg",
  },
  {
    id: 7,
    title: "JavaScript Essentials",
    issuer: "Online Course",
    date: "2023",
    desc: "البرمجة بـ JavaScript من الأساسيات حتى المفاهيم المتقدمة.",
    icon: "",
    // image: "assets/images/cert-js.jpg",
  },
  {
    id: 8,
    title: "Java Programming 102-104",
    issuer: "Online Course",
    date: "2022-2023",
    desc: "مقررات Java في الجامعة تشمل البرمجة الكائنية OOP وهياكل البيانات.",
    icon: "",
    // image: "assets/images/cert-java.jpg",
  },
  {
    id: 9,
    title: "MySQL Database",
    issuer: "Online Course",
    date: "2023",
    desc: "تصميم وإدارة قواعد البيانات العلائقية باستخدام MySQL.",
    icon: "",
    // image: "assets/images/cert-db.jpg",
  },
  {
    id: 10,
    title: "Artificial Intelligence Basics",
    issuer: "Online Course",
    date: "2024",
    desc: "مقدمة في الذكاء الاصطناعي وتعلم الآلة وتطبيقاتهما.",
    icon: "",
    // image: "assets/images/cert-ai.jpg",
  },
  {
    id: 11,
    title: "تدريب ميداني - ميناء جازان",
    issuer: "ميناء جازان",
    date: "",
    desc: "تدريب عملي في قسم تقنية المعلومات وعدة أقسام أخرى بميناء جازان.",
    icon: "",
    // image: "assets/images/cert-port.jpg",
  },
];

// ===================================================
// TYPED TEXT — عدّل النصوص المتحركة هنا
// ===================================================
const typedRoles = [
  "Web Developer",
  "AI Enthusiast",
  "CS Graduate",
  
];

// ===================================================
// INIT — تشغيل الموقع
// ===================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initTypingEffect();
  initRevealOnScroll();
  renderProjects();
  renderCertificates();
  initSkillBars();
  initScrollTop();
  animateSectionTitles();
});

// ===================================================
// NAVBAR
// ===================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveLink();
  });

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

// ===================================================
// TYPING EFFECT
// ===================================================
function initTypingEffect() {
  const el = document.getElementById("typedText");
  if (!el) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = typedRoles[roleIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % typedRoles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// ===================================================
// REVEAL ON SCROLL
// ===================================================
function initRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ===================================================
// SKILL BARS ANIMATION
// ===================================================
function initSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll(".skill-fill");
          fills.forEach((fill) => {
            const width = fill.getAttribute("data-width");
            setTimeout(() => {
              fill.style.width = width + "%";
            }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".skill-category").forEach((el) => observer.observe(el));
}

// ===================================================
// SECTION TITLE LINE ANIMATION
// ===================================================
function animateSectionTitles() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-line");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".section-title").forEach((el) => observer.observe(el));
}

// ===================================================
// RENDER PROJECTS
// ===================================================
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="project-thumb">
        <div class="project-thumb-overlay"></div>
        <div class="project-thumb-placeholder">${project.icon}</div>
        <div class="project-overlay-btn">
          <span>👁</span> استعراض المشروع
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="project-tags">
          ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProjectModal(project));
    grid.appendChild(card);
  });
}

// ===================================================
// RENDER CERTIFICATES
// ===================================================
function renderCertificates() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  certificates.forEach((cert, index) => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="cert-thumb">
        ${cert.image ? `<img src="${cert.image}" alt="${cert.title}" style="width:100%;height:100%;object-fit:cover;border-radius:0;" />` : cert.icon}
      </div>
      <div class="cert-body">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-date">${cert.date}</p>
        <p class="cert-desc">${cert.desc}</p>
      </div>
    `;

    card.addEventListener("click", () => openCertModal(cert));
    grid.appendChild(card);
  });
}

// ===================================================
// PROJECT MODAL
// ===================================================
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");

  const galleryHTML = project.gallery
    .map(
      (item) => `
      <div class="modal-gallery-item">
        ${item.startsWith("assets") ? `<img src="${item}" alt="gallery" style="width:100%;height:100%;object-fit:cover;" />` : `<span style="font-size:3rem;">${item}</span>`}
      </div>
    `
    )
    .join("");

  body.innerHTML = `
    <h2 class="modal-project-title">${project.icon} ${project.title}</h2>
    <p class="modal-project-desc">${project.fullDesc}</p>
    <div class="modal-gallery">${galleryHTML}</div>
    <div class="modal-tags">
      ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
    </div>
    ${project.link !== "#" ? `<a href="${project.link}" target="_blank" class="modal-link">🔗 معاينة المشروع المباشر</a>` : `<span style="color:var(--text-muted);font-size:.85rem;">🔒 الرابط قريباً</span>`}
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// ===================================================
// CERTIFICATE MODAL
// ===================================================
function openCertModal(cert) {
  const modal = document.getElementById("certModal");
  const body = document.getElementById("certModalBody");

  body.innerHTML = `
    <div class="modal-cert-img">
      ${cert.image ? `<img src="${cert.image}" alt="${cert.title}" />` : `<span>${cert.icon}</span>`}
    </div>
    <h2 class="modal-cert-title">${cert.title}</h2>
    <p class="modal-cert-issuer"> ${cert.issuer}</p>
    <p class="modal-cert-date"> ${cert.date}</p>
    <p class="modal-cert-desc">${cert.desc}</p>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// ===================================================
// CLOSE MODAL
// ===================================================
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("projectModal");
    closeModal("certModal");
  }
});

// ===================================================
// SCROLL TO TOP
// ===================================================
function initScrollTop() {
  const btn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===================================================
// CONTACT FORM — يفتح تطبيق البريد الإلكتروني
// ===================================================
function sendEmail() {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  // ===== عدّل البريد الإلكتروني هنا =====
  const to = "mo0ohannd3305@gmail.com";
  const subject = encodeURIComponent(`رسالة من ${name} — Portfolio`);
  const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`);

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

// ===================================================
// SMOOTH ANCHOR SCROLL
// ===================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
