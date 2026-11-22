import React from "react";
import { LegalLayout } from "./LegalLayout";

interface TermsOfServiceProps {
  onBackToHome: () => void;
}

const termsSections = [
  { id: "intro", title: "1. Introduction & Acceptance" },
  { id: "services", title: "2. Services Provided" },
  { id: "eligibility", title: "3. Eligibility, Accounts & Authentication" },
  { id: "bud-disclaimer", title: "4. Bud AI Tutor Disclaimer" },
  { id: "ugc", title: "5. User-Generated Content & Licensing" },
  { id: "booknest-dmca", title: "6. Digital Library & DMCA Policy" },
  { id: "chat-community", title: "7. Community Guidelines & Direct Messaging" },
  { id: "ip", title: "8. Intellectual Property Rights" },
  { id: "restrictions", title: "9. Restrictions on Use" },
  { id: "aup", title: "10. Acceptable Use Policy (AUP)" },
  { id: "warranties", title: "11. Disclaimer of Warranties" },
  { id: "liability", title: "12. Limitation of Liability" },
  { id: "termination", title: "13. Termination & 30-Day Deletion Grace Period" },
  { id: "disputes", title: "14. Dispute Resolution & Governing Law" },
  { id: "contact", title: "15. Contact Information & Legal Inquiries" },
];

export function TermsOfService({ onBackToHome }: TermsOfServiceProps) {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="The binding terms governing your access to and use of TidBit applications, services, and educational tools."
      effectiveDate="Effective Date: 22nd November, 2026"
      sections={termsSections}
      onBackToHome={onBackToHome}
    >
      {/* 1. Introduction & Acceptance */}
      <section id="intro" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          1. Introduction & Acceptance
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Welcome to TidBit ("the Platform", "we", "our", or "us"). By downloading, installing, registering an account on, accessing, or using the TidBit Android mobile application, website, API endpoints, or associated educational services (collectively, the "Services"), you ("User", "you", or "Student") agree to be legally bound by these Terms & Conditions ("Terms") and our Privacy Policy.
        </p>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          If you do not agree to all provisions within these Terms, you must not access or use our Services and must immediately uninstall any client software from your devices.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 2. Services Provided */}
      <section id="services" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          2. Educational Services Provided
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit is an educational micro-learning ecosystem engineered to replace addictive social feeds with structured bite-sized knowledge:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Micro-Lesson Shorts Feed:</strong> High-yield short-form educational videos categorized across STEM, humanities, coding, and history disciplines without clickbait or commercial interruptions.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Bud AI Study Assistant:</strong> An interactive, context-aware AI tutor delivering real-time quizzes, concept breakdowns, and flashcard recall tools synchronized to lesson transcripts.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>BookNest Digital Library:</strong> Distraction-free digital reader and neural text-to-speech audiobooks with full-text search, highlights, and offline caching.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Educational Apps & Games Hub:</strong> Daily cognitive micro-drills including Spelling Bee, Word Match, Speed Math, Memory Matrix, and Sudoku.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Real-Time Community Chat:</strong> Secure peer messaging, group study rooms, and voice notes between mutual study partners.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 3. Eligibility & Account Security */}
      <section id="eligibility" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          3. Eligibility, Account Registration & Authentication
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          You must be at least 13 years old (or 16 years old in the European Economic Area or UK) to register an account. If you are between 13 and 17 years old, you represent that you have reviewed these Terms with a parent or legal guardian and obtained their consent.
        </p>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          You may authenticate using email/password or Google Sign-In. You are responsible for maintaining the confidentiality of your credentials. You agree to notify us immediately of any unauthorized access to your account.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 4. Bud AI Tutor Disclaimer */}
      <section id="bud-disclaimer" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          4. Bud AI Tutor Disclaimer
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          The Bud AI Study Assistant is an automated educational companion engineered for concept clarification and active recall. While trained for academic accuracy, AI responses may occasionally contain omissions or factual imprecisions.
        </p>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Bud AI does not provide accredited legal, medical, financial, or licensed professional advice. Students are advised to verify critical formulas, historical citations, and syllabus questions against authoritative academic texts.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 5. User-Generated Content & Licensing */}
      <section id="ugc" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          5. User-Generated Content & Licensing
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          You retain full ownership of all educational reels, notes, and study guides you create. When you publish public content on TidBit (such as reels or comments), you grant TidBit a non-exclusive, worldwide, royalty-free license to host, display, transcode, and stream that specific content solely within the Platform for educational purposes.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 6. Digital Library & DMCA Policy */}
      <section id="booknest-dmca" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          6. Digital Library & DMCA Copyright Policy
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Titles within BookNest comprise verified public-domain literature, open-access educational texts, and licensed academic publications.
        </p>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          If you believe any content on our platform infringes your copyright, submit a formal DMCA takedown notice to our designated agent at <a href="mailto:connect.tidbit@gmail.com" className="underline hover:text-black">connect.tidbit@gmail.com</a> including proof of ownership, specific URL/title location, and your signature. Infringing material will be removed promptly upon receipt.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 7. Community Guidelines & Direct Messaging */}
      <section id="chat-community" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          7. Community Guidelines & Real-Time Chat
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit is dedicated to positive, distraction-free scholarship. In all public comments, community questions, and direct messages, users must adhere to community standards:
        </p>
        <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>No harassment, bullying, stalking, or targeted humiliation of other students.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>No hate speech, violence incitement, discriminatory conduct, or self-harm promotion.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>No commercial spam, unsolicited sales solicitations, or affiliate marketing schemes.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 8. Intellectual Property */}
      <section id="ip" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          8. Intellectual Property Rights
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          The TidBit name, logo, Quiet Liquid Glass user interface, application software, graphics, source code, game engines, and educational compilations are the exclusive intellectual property of TidBit. You may not reverse-engineer, decompile, extract, or republish our software without prior written consent.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 9. Restrictions on Use */}
      <section id="restrictions" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          9. Restrictions on Use
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          You agree not to deploy automated crawlers, scrapers, headless bots, or API spoofing tools to harvest lesson videos, quiz answers, or user profiles from our servers.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 10. Acceptable Use Policy */}
      <section id="aup" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          10. Acceptable Use Policy (AUP)
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Accounts found distributing malware, launching distributed denial of service (DDoS) requests, attempting unauthorized database queries, or violating community safety will be permanently terminated without notice.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 11. Disclaimer of Warranties */}
      <section id="warranties" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          11. Disclaimer of Warranties
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          The Services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, statutory, or implied, including warranties of merchantability, academic fitness for a particular examination, or uninterrupted uptime.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 12. Limitation of Liability */}
      <section id="liability" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          12. Limitation of Liability
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          To the maximum extent permitted by applicable law, in no event shall TidBit, its developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use the platform.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 13. Termination & Deletion Grace Period */}
      <section id="termination" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          13. Termination & 30-Day Deletion Grace Period
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          You may request account deletion at any time via <em>Settings &rarr; Delete Account</em>:
        </p>
        <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Your account enters a <strong>30-day grace period</strong> during which your profile, reels, and comments are immediately hidden from public view.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>You may cancel the deletion request at any point during these 30 days simply by logging back in.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Once 30 days lapse without cancellation, all personal identifiers, posts, comments, collections, and media storage blobs are permanently and irrevocably wiped.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 14. Dispute Resolution */}
      <section id="disputes" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          14. Dispute Resolution & Governing Law
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          These Terms shall be governed by and construed in accordance with applicable law without regard to conflict of law principles. Any dispute arising from these Terms shall be resolved first through good-faith informal direct discussion.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 15. Contact Information */}
      <section id="contact" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          15. Contact Information & Legal Inquiries
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          For legal inquiries, copyright notices, or questions regarding these Terms, contact our legal team:
        </p>
        <p className="text-xs sm:text-[13px] text-neutral-800 font-medium pt-1">
          Email: <a href="mailto:connect.tidbit@gmail.com" className="underline hover:text-black">connect.tidbit@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
