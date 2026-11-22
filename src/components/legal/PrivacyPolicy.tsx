import React from "react";
import { LegalLayout } from "./LegalLayout";

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

const privacySections = [
  { id: "overview", title: "1. Privacy Commitment & Principles" },
  { id: "data-collection", title: "2. Information We Collect & Sources" },
  { id: "google-user-data", title: "3. Google API Services & OAuth Limited Use" },
  { id: "data-usage", title: "4. How We Use Information" },
  { id: "permissions", title: "5. Device Permissions (Camera, Mic, Notifications)" },
  { id: "ai-privacy", title: "6. Bud AI Tutor & Data Processing" },
  { id: "local-storage", title: "7. Local Storage & Device Encryption" },
  { id: "third-parties", title: "8. Infrastructure & Sub-Processors" },
  { id: "no-tracking", title: "9. Zero Ad Trackers & Data Brokers" },
  { id: "children", title: "10. Children's Privacy (COPPA & Global Standards)" },
  { id: "rights", title: "11. Your Privacy Rights (GDPR, CCPA, India DPDP)" },
  { id: "retention", title: "12. Data Retention Schedules & Scheduled Erasure" },
  { id: "security", title: "13. Security Safeguards & Isolation Standards" },
  { id: "updates", title: "14. Policy Revisions & Notifications" },
  { id: "contact", title: "15. Contact Information & Data Protection" },
];

export function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How TidBit collects, protects, and respects your personal information across our distraction-free educational ecosystem."
      effectiveDate="Effective Date: 22nd November, 2026"
      sections={privacySections}
      onBackToHome={onBackToHome}
    >
      {/* 1. Privacy Commitment */}
      <section id="overview" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          1. Privacy Commitment & Principles
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          At TidBit ("the Platform", "we", "our", or "us"), we believe that education should be focused, private, and free from algorithmic dopamine manipulation or data exploitation. Our platform is built from the ground up on core privacy principles:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Zero Advertising & Zero Profiling:</strong> We do not host third-party commercial advertisements, advertising identifiers (such as Google AAID), behavioral trackers, or data-broker SDKs. We never sell, rent, or trade your personal information.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Purpose-Bound Data Minimization:</strong> We only collect information strictly required to authenticate your account, synchronize your learning streaks, deliver educational content, and protect our community from abuse.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Local-First Sovereignty:</strong> Your personal study notes, voice memos, offline book downloads, and local reader highlights reside encrypted directly on your device.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 2. Information We Collect & Sources */}
      <section id="data-collection" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          2. Information We Collect & Sources
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          We collect and process the following categories of information strictly to provide and secure our educational services:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Account Identity & Credentials:</strong> When you register via email or Google Sign-In, we collect your unique user identifier (UUID), email address, username, chosen display name, optional profile biography, date of birth, and gender (used strictly to personalize educational grade-level and cognitive recommendations). For email sign-ups, salted password hashes (Argon2/bcrypt) are processed securely via Supabase Auth; plaintext passwords are never visible to or stored on our servers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Learning Interests & Educational Preferences:</strong> Topic categories selected during onboarding (e.g., Science, Computer Science, Philosophy, Mathematics, History) and optional profile theme preferences.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>User-Generated Educational Content:</strong> Educational micro-lesson reels, text overlays, captions, bookmarks, comments, post likes, study collections, and direct community messages sent through in-app chat.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Security & Device Integrity Telemetry:</strong> Device manufacturer, hardware model, Android OS version, SDK level, language, approximate geographic region (country/time zone derived from IP address for regional caching), and authentication timestamps. This is maintained strictly in an encrypted multi-device session record to alert you to unrecognized logins and prevent account takeovers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>What We Do NOT Collect:</strong> We do NOT collect continuous GPS background locations, device contacts, address books, SMS messages, call logs, biometric identifiers, or financial payment details.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 3. Google API Services & OAuth Limited Use */}
      <section id="google-user-data" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          3. Google API Services & OAuth User Data Policy
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit provides users with the option to register and sign in seamlessly using <strong>Google Sign-In</strong> (Google Identity Services / Android Credential Manager).
        </p>
        <div className="rounded-lg bg-neutral-50 border border-neutral-200/80 p-3.5 space-y-2 text-xs sm:text-[13px] text-neutral-800">
          <p className="font-semibold text-neutral-900">
            Google OAuth Scopes Requested:
          </p>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li><code>openid</code>: To verify your identity cryptographically.</li>
            <li><code>.../auth/userinfo.email</code>: To access your primary Google account email address.</li>
            <li><code>.../auth/userinfo.profile</code>: To access your public Google name and profile avatar photo.</li>
          </ul>
        </div>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          <strong>Use of Google User Data:</strong> We access your Google account information solely to create your account, authenticate subsequent sessions, and populate your educational profile name and avatar.
        </p>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700 font-medium text-neutral-900">
          <strong>Google Limited Use Compliance Statement:</strong><br />
          TidBit's use and transfer to any other app of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Specifically:
        </p>
        <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>We do not sell Google user data to any third parties or data brokers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>We do not use or transfer Google user data for serving advertisements, personalized marketing, or retargeting.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>We do not use Google user data to train, fine-tune, or improve generalized artificial intelligence (AI) or machine learning (ML) models.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Human access to Google user data is strictly prohibited unless required for critical security investigations, explicit user support requests, or compliance with applicable law.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 4. How We Use Information */}
      <section id="data-usage" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          4. How We Use Information
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          All collected information is used solely for legitimate educational and technical operations:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Authenticating login sessions, maintaining secure token rotation, and preventing unauthorized account access.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Delivering responsive educational video feeds, progressive cache chunks, and synchronized daily study streaks.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Generating context-aware flashcards, quizzes, and concept summaries via the Bud AI Study Assistant in response to your direct prompts.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span>Delivering transactional security alerts, password resets, and critical account lifecycle notices.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 5. Device Permissions */}
      <section id="permissions" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          5. Device Permissions (Camera, Microphone, Notifications)
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          The TidBit Android application requests access to hardware features strictly upon user request:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Camera (<code>android.permission.CAMERA</code>):</strong> Used only when you explicitly open the Creator Studio camera to record an educational micro-lesson reel. The camera is never accessed in the background.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Microphone (<code>android.permission.RECORD_AUDIO</code>):</strong> Used only when you record a video reel with audio, speak to the Bud AI Voice Coach, or record an in-chat voice message. Audio recording terminates immediately when you release the record button.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Notifications (<code>android.permission.POST_NOTIFICATIONS</code>):</strong> Used to deliver optional daily study streak reminders, background video upload statuses, and real-time chat messages. You can disable notifications at any time in Android system settings.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 6. Bud AI Tutor & Data Processing */}
      <section id="ai-privacy" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          6. Bud AI Tutor & Data Processing
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          When you request concept explanations, flashcards, or quiz assessments from the Bud AI Tutor:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Encrypted In-Transit:</strong> Prompts are routed through our secure Supabase Edge Function gateway over TLS 1.3 to inference endpoints (Mistral AI).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Stateless Inference & Zero Model Training:</strong> Your private questions and study interactions are never used to train public foundation models or shared with third-party LLM providers for commercial training.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Ephemeral Context:</strong> Once your structured quiz or takeaway is formulated and delivered to your device, inference context tokens are purged.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 7. Local Storage & Device Encryption */}
      <section id="local-storage" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          7. Local Storage & Device Encryption
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit uses the Android Keystore system and <code>EncryptedSharedPreferences</code> (AES-256 GCM) for local token persistence. Offline book files, cached audio narrations, and local study notes reside exclusively within app-sandboxed directories that are cryptographically isolated from other applications on your device.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 8. Infrastructure & Sub-Processors */}
      <section id="third-parties" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          8. Infrastructure & Sub-Processors
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          We work with trusted infrastructure providers governed by binding Data Processing Agreements (DPAs) with strict confidentiality and security commitments:
        </p>
        <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Supabase Inc.:</strong> Primary database (PostgreSQL with Row Level Security), authentication provider, and serverless Edge Functions.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Google Cloud Platform & Firebase:</strong> Real-time messaging infrastructure (Cloud Firestore) for mutual student chat, presence state, and crash reporting (Firebase Crashlytics).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Cloudinary Ltd.:</strong> Encrypted cloud storage and dynamic CDN delivery for user-generated educational video reels and profile imagery.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Neon Inc. & Unreal Speech:</strong> High-performance serverless SQL for the BookNest digital library and neural speech synthesis for literary audiobooks.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 9. Zero Ad Trackers */}
      <section id="no-tracking" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          9. Zero Ad Trackers & Data Brokers
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit contains no Google Ads, Facebook Pixel, tracking beacons, cross-site cookies, or monetization telemetry. We do not participate in real-time bidding (RTB) auctions, data exchanges, or cross-device fingerprinting.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 10. Children's Privacy */}
      <section id="children" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          10. Children's Privacy (COPPA & Global Standards)
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit is designed for lifelong learners and students aged 13 and older (or 16 in the European Economic Area). We do not knowingly collect personal information from children under 13 without verifiable parental or school consent. If you believe a child under 13 has registered an account without proper consent, contact us immediately at <a href="mailto:connect.tidbit@gmail.com" className="underline hover:text-black">connect.tidbit@gmail.com</a>, and we will promptly purge the account and associated records.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 11. Your Privacy Rights */}
      <section id="rights" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          11. Your Privacy Rights (GDPR, CCPA/CPRA & India DPDP)
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Regardless of your jurisdiction, TidBit grants full self-service data sovereignty directly within the application:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Right to Access & Data Portability:</strong> You can export a comprehensive machine-readable JSON archive of your personal profile, posts, comments, bookmarks, and account records directly via <em>Settings &rarr; Export My Data</em>.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Right to Rectification:</strong> You can modify your display name, username, bio, avatar, and date of birth at any time in <em>Edit Profile</em>.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Right to Erasure ("Right to Be Forgotten"):</strong> You can request immediate account deletion directly within the mobile app (<em>Settings &rarr; Account Deletion</em>). All identifiers, media files, and database records are permanently deleted following a 30-day grace period.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Right to Withdraw Consent:</strong> You can adjust social privacy levels (Public, Followers Only, Private) and notification preferences at any time.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 12. Data Retention */}
      <section id="retention" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          12. Data Retention Schedules & Scheduled Erasure
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          We maintain strict retention schedules and automated database cleanup routines:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Authentication & Device Security Logs:</strong> Retained for <strong>90 days</strong> strictly for multi-device intrusion detection and fraud prevention, after which records are automatically pruned.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Content & Study Artifacts:</strong> Stored for as long as your account remains active. When you delete a post, reel, or comment, it is purged immediately.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Account Deletion (30-Day Grace Period):</strong> Initiating account deletion places your account in a 30-day pending status (during which your profile is hidden). Signing in cancels the request; once 30 days lapse, all database records, storage blobs, and authentication identities are permanently and irreversibly destroyed.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 13. Security Safeguards */}
      <section id="security" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          13. Security Safeguards & Isolation Standards
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          TidBit implements defense-in-depth security engineering:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-700">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Database Row-Level Security (RLS):</strong> Our database layer strictly enforces PostgreSQL Row Level Security. All anonymous read access to sensitive user tables is revoked. Authenticated users can only read or modify their own authorized records.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Encryption Everywhere:</strong> All data in transit is protected with TLS 1.3 encryption. Data at rest is protected with AES-256 storage volume encryption.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
            <span><strong>Signed Media Uploads:</strong> Media uploads require cryptographically signed upload tokens generated by serverless edge functions; client applications never possess master cloud storage secrets.</span>
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 14. Policy Revisions */}
      <section id="updates" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          14. Policy Revisions & Notifications
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          We may update this Privacy Policy from time to time to reflect product enhancements or regulatory developments. When material changes occur, we will notify you through an in-app notice or via your registered email address prior to the changes taking effect. Continued use of TidBit following notification constitutes acceptance of the revised policy.
        </p>
      </section>

      <hr className="border-neutral-200/80 my-6" />

      {/* 15. Contact Information */}
      <section id="contact" className="scroll-mt-24 space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
          15. Contact Information & Data Protection
        </h2>
        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          For privacy inquiries, data subject access requests (DSAR), or questions regarding our information practices, you may contact our privacy team:
        </p>
        <p className="text-xs sm:text-[13px] text-neutral-800 font-medium pt-1">
          Email: <a href="mailto:connect.tidbit@gmail.com" className="underline hover:text-black">connect.tidbit@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
