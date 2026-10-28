import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter dimensions: 612 x 792 points
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Color Palette
  const colorPrimary = rgb(15 / 255, 23 / 255, 42 / 255);      // #0F172A Dark Slate
  const colorAccent = rgb(2 / 255, 132 / 255, 199 / 255);      // #0284C7 Sky Blue
  const colorBody = rgb(51 / 255, 65 / 255, 85 / 255);         // #334155 Slate
  const colorMuted = rgb(100 / 255, 116 / 255, 139 / 255);     // #64748B Slate Muted
  const colorBorder = rgb(203 / 255, 213 / 255, 225 / 255);    // #CBD5E1 Slate 300
  const colorBullet = rgb(14 / 255, 165 / 255, 233 / 255);     // #0EA5E9 Bullet Cyan

  let currentY = height - 42;
  const marginX = 45;
  const contentWidth = width - marginX * 2; // 522 pt

  // Helper: Section Header
  function drawSectionHeader(title) {
    currentY -= 14;
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: currentY,
      size: 10.5,
      font: fontBold,
      color: colorPrimary,
    });
    currentY -= 4;
    page.drawLine({
      start: { x: marginX, y: currentY },
      end: { x: width - marginX, y: currentY },
      thickness: 1,
      color: colorBorder,
    });
    currentY -= 9;
  }

  // --- 1. HEADER SECTION ---
  // Name
  page.drawText('SHUAYEB HOSSAIN', {
    x: marginX,
    y: currentY,
    size: 20,
    font: fontBold,
    color: colorPrimary,
  });

  // Title badge on top right or below name
  currentY -= 16;
  page.drawText('Full Stack Web Developer | Frontend Specialist', {
    x: marginX,
    y: currentY,
    size: 10,
    font: fontBold,
    color: colorAccent,
  });

  // Contact line 1
  currentY -= 14;
  const contactText1 = 'Email: shuayebhossaineng@gmail.com  |  Phone: +880 1330-546984  |  Location: Dhaka, Bangladesh';
  page.drawText(contactText1, {
    x: marginX,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: colorBody,
  });

  // Contact line 2 (Links)
  currentY -= 12;
  const contactText2 = 'GitHub: github.com/ShuayebProgrammingLife  |  LinkedIn: linkedin.com/in/shuayeb-hossain-3329b03ab';
  page.drawText(contactText2, {
    x: marginX,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: colorAccent,
  });

  // Separator below header
  currentY -= 8;
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: width - marginX, y: currentY },
    thickness: 1.5,
    color: colorPrimary,
  });
  currentY -= 4;

  // --- 2. PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Summary');
  const summary = 'Dedicated Computer Science undergraduate at the University of Dhaka (CGPA: 3.53) with proven expertise in building modern, responsive, and performance-optimized full-stack web applications. Skilled in React.js, modern JavaScript (ES6+), Tailwind CSS, Node.js, and RESTful architectures. Passionate about writing clean, maintainable code and translating complex user requirements into delightful digital experiences.';
  
  // Wrap summary text
  const words = summary.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.5);
    if (testWidth > contentWidth) {
      page.drawText(line, { x: marginX, y: currentY, size: 8.5, font: fontRegular, color: colorBody });
      currentY -= 11.5;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: marginX, y: currentY, size: 8.5, font: fontRegular, color: colorBody });
    currentY -= 11.5;
  }

  // --- 3. TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Frontend Technologies:', items: 'React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Next.js, Redux Toolkit, Context API' },
    { label: 'Backend & Database:', items: 'Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, Firebase (Auth & Firestore), PostgreSQL Basics' },
    { label: 'Tools & Platforms:', items: 'Git, GitHub, Vite, Postman, Vercel, Netlify, VS Code, Figma (UI/UX Handoff), npm' },
    { label: 'Core Competencies:', items: 'Responsive Web Design, Component Architecture, State Management, Performance Tuning, Agile Problem Solving' },
  ];

  for (const skill of skills) {
    page.drawText(skill.label, { x: marginX, y: currentY, size: 8.5, font: fontBold, color: colorPrimary });
    const labelWidth = fontBold.widthOfTextAtSize(skill.label, 8.5);
    page.drawText(` ${skill.items}`, { x: marginX + labelWidth, y: currentY, size: 8.5, font: fontRegular, color: colorBody });
    currentY -= 12;
  }

  // --- 4. FEATURED PROJECTS ---
  drawSectionHeader('Featured Projects');

  const projects = [
    {
      title: 'Bazar Dor - Daily Commodity & Market Price Tracker',
      period: '2024',
      stack: 'React.js, Tailwind CSS, JavaScript (ES6+), REST APIs, Vercel',
      links: 'Live: bazar-dor-rosy.vercel.app  |  GitHub: github.com/ShuayebProgrammingLife/Bazar_Dor',
      bullets: [
        'Architected a real-time localized commodity price tracking application to monitor daily grocery rates and market fluctuations across Bangladesh.',
        'Engineered responsive category filtering and instantaneous debounced search for hundreds of daily essential commodities with zero UI latency.',
        'Structured modular data models to calculate unit conversions and format pricing transparently in Bangladeshi Taka (BDT).',
      ]
    },
    {
      title: 'FitWebApp - Interactive Fitness & Workout Tracker',
      period: '2024',
      stack: 'React.js, Tailwind CSS, Context API, JavaScript, Vercel',
      links: 'Live: fit-web-app-one.vercel.app  |  GitHub: github.com/ShuayebProgrammingLife/FitWebApp',
      bullets: [
        'Built an intuitive fitness companion platform empowering users to explore targeted workout splits and track exercise routines.',
        'Implemented persistent state management using React Context API to preserve user routines and active workout milestones across sessions.',
        'Designed an energetic, high-contrast dark-mode interface ensuring optimal readability on mobile screens during workouts.',
      ]
    },
    {
      title: 'Movie Explorer - Film Discovery & Ratings Platform',
      period: '2024',
      stack: 'React.js, TMDB API, Tailwind CSS, JavaScript, Vercel',
      links: 'Live: movieexplorer01.vercel.app  |  GitHub: github.com/ShuayebProgrammingLife/Movie_Explorer',
      bullets: [
        'Engineered a dynamic cinema discovery web app integrating real-time entertainment APIs for movie ratings, trailers, and cast details.',
        'Implemented debounced search queries and category tabs (Action, Drama, Sci-Fi) to minimize API overhead and prevent rate limiting.',
        'Integrated YouTube trailer modal playback and responsive image backdrops with automated image fallback handling.',
      ]
    }
  ];

  for (const proj of projects) {
    // Project title + Period
    page.drawText(proj.title, { x: marginX, y: currentY, size: 9.5, font: fontBold, color: colorPrimary });
    const periodWidth = fontBold.widthOfTextAtSize(proj.period, 8.5);
    page.drawText(proj.period, { x: width - marginX - periodWidth, y: currentY, size: 8.5, font: fontBold, color: colorMuted });
    currentY -= 11;

    // Tech Stack
    page.drawText('Tech Stack: ', { x: marginX, y: currentY, size: 8, font: fontBold, color: colorPrimary });
    const stackLabelWidth = fontBold.widthOfTextAtSize('Tech Stack: ', 8);
    page.drawText(proj.stack, { x: marginX + stackLabelWidth, y: currentY, size: 8, font: fontOblique, color: colorMuted });
    currentY -= 10;

    // Links
    page.drawText(proj.links, { x: marginX, y: currentY, size: 8, font: fontRegular, color: colorAccent });
    currentY -= 10;

    // Bullets
    for (const bullet of proj.bullets) {
      page.drawText('•', { x: marginX + 3, y: currentY, size: 8.5, font: fontBold, color: colorBullet });
      
      // Wrap bullet
      const bWords = bullet.split(' ');
      let bLine = '';
      for (const bw of bWords) {
        const testBLine = bLine ? `${bLine} ${bw}` : bw;
        const testWidth = fontRegular.widthOfTextAtSize(testBLine, 8);
        if (testWidth > contentWidth - 14) {
          page.drawText(bLine, { x: marginX + 12, y: currentY, size: 8, font: fontRegular, color: colorBody });
          currentY -= 9.5;
          bLine = bw;
        } else {
          bLine = testBLine;
        }
      }
      if (bLine) {
        page.drawText(bLine, { x: marginX + 12, y: currentY, size: 8, font: fontRegular, color: colorBody });
        currentY -= 9.5;
      }
    }
    currentY -= 3;
  }

  // --- 5. EDUCATION ---
  drawSectionHeader('Education');

  // Degree 1: B.Sc.
  page.drawText('University of Dhaka (Dhaka University)', { x: marginX, y: currentY, size: 9.5, font: fontBold, color: colorPrimary });
  const bscPeriod = '2023 - Present (3rd Year, 1st Semester)';
  const bscPeriodWidth = fontBold.widthOfTextAtSize(bscPeriod, 8.5);
  page.drawText(bscPeriod, { x: width - marginX - bscPeriodWidth, y: currentY, size: 8.5, font: fontBold, color: colorMuted });
  currentY -= 11;

  page.drawText('Bachelor of Science (B.Sc.)', { x: marginX, y: currentY, size: 8.5, font: fontBold, color: colorAccent });
  page.drawText('  |  Current CGPA: 3.53 / 4.00', { x: marginX + fontBold.widthOfTextAtSize('Bachelor of Science (B.Sc.)', 8.5), y: currentY, size: 8.5, font: fontRegular, color: colorBody });
  currentY -= 10;

  const eduCoursework = 'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Architectures, Software Engineering.';
  page.drawText(eduCoursework, { x: marginX, y: currentY, size: 8, font: fontRegular, color: colorMuted });
  currentY -= 12;

  // Degree 2: HSC
  page.drawText('Naogaon Government College, Naogaon', { x: marginX, y: currentY, size: 9.5, font: fontBold, color: colorPrimary });
  const hscPeriod = 'Batch 2022';
  const hscPeriodWidth = fontBold.widthOfTextAtSize(hscPeriod, 8.5);
  page.drawText(hscPeriod, { x: width - marginX - hscPeriodWidth, y: currentY, size: 8.5, font: fontBold, color: colorMuted });
  currentY -= 11;

  page.drawText('Higher Secondary Certificate (HSC) - Science Group', { x: marginX, y: currentY, size: 8.5, font: fontRegular, color: colorBody });
  currentY -= 14;

  // Write the PDF
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Professional resume generated successfully at: ${outputPath}`);
}

generateResume().catch(console.error);
