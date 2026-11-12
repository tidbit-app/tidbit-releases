import React from "react";
import { LegalLayout } from "./LegalLayout";

interface ChangelogProps {
  onBackToHome: () => void;
}

const changelogSections = [
  { id: "v2-1-2", title: "v2.1.2 · 3D Journaling App & Physics Engine" },
  { id: "v2-1-1", title: "v2.1.1 · Navigation & Drawer Fluidity" },
  { id: "v2-1-0", title: "v2.1.0 · Dual Volume & Sharing" },
  { id: "v2-0-9", title: "v2.0.9 · Tactile FX & Haptics" },
  { id: "v2-0-8", title: "v2.0.8 · Account & Security Redesign" },
  { id: "v2-0-7", title: "v2.0.7 · Code Breaker Launch Hub" },
  { id: "v2-0-6", title: "v2.0.6 · Comments & Audio Engine" },
  { id: "v2-0-5", title: "v2.0.5 · Showcase & Privacy" },
  { id: "v2-0-4", title: "v2.0.4 · Production Launch" },
  { id: "v1-0-0", title: "v1.0.0 · Initial Launch" },
];

export function Changelog({ onBackToHome }: ChangelogProps) {
  return (
    <LegalLayout
      title="Changelog & Release Notes"
      subtitle="Complete history of new features, performance improvements, bug fixes, and user experience polish across every TidBit release."
      effectiveDate="Current Version: v2.1.2 (Build 8) · Updated: 12th November, 2026"
      sections={changelogSections}
      onBackToHome={onBackToHome}
    >
      {/* ========================================================= */}
      {/* v2.1.2 */}
      {/* ========================================================= */}
      <section id="v2-1-2" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
              v2.1.2
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70">
              Latest Release
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            12th November, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Introducing the all-new 3D Journaling App: an authentic tactile digital diary engineered with physical hardcover styling, realistic spine hinge lighting, two-way 3D page flip mechanics, lined legal-pad writing sheet, and distraction-free private offline persistence.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Realistic 3D Journal Book:</strong> Designed with layered drop shadows, authentic stacked paper edges, customizable hardcover leather texture, custom gallery cover photo upload, debossed gold border, and gold ribbon bookmark.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Two-Way 3D Page Flip Engine:</strong> Flip pages in both directions with physical perspective folding (swiping up folds to next spread, swiping down folds from top to previous spread) with dynamic light and shadow occlusion.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Lined Notebook Page Editor:</strong> Full-width edge-to-edge ruled horizontal lines with calibrated typography baseline alignment, live word count, subtle saving indicator, and refined checkmark button.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Floating Calendar Menu & Mini Bar:</strong> Compact week bar with instant date jumping, expandable into a floating calendar menu with full month grid and entry indicator dots.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Apps Hub Journal Card:</strong> Elegant mahogany-leather card with gold rim styling and realistic miniature 3D book artwork in the learning hub.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Dynamic Text Sizing:</strong> Brief single-page entries adaptively scale up for comfortable reading, while multi-page entries use compact proportional sizing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Edge-to-Edge Insets:</strong> Full status bar, navigation bar, and IME keyboard avoidance across all journal views and modal drawers.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* v2.1.1 */}
      {/* ========================================================= */}
      <section id="v2-1-1" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
              v2.1.1
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70">
              Latest Release
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            4th November, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Restored full Android device navigation bar visibility with complete edge-to-edge layout adaptation, eliminated bottom sheet drawer oscillation loops, redesigned Code Breaker statistics as an interactive modal drawer, and added in-game options.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Code Breaker Statistics Drawer:</strong> Replaced overlay popups with a dedicated modal drawer featuring four KPI performance cards (Games Played, Win Rate, Current Streak, Max Streak) and an interactive 10-tier guess distribution chart.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Interactive Game Options Drawer:</strong> Added a unified 3-dot options menu in Code Breaker offering immediate access to the tutorial guide, player statistics, board reset, and lobby return.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Device Navigation Bar Integration:</strong> Restored permanent visibility and edge-to-edge support for Android system navigation buttons (3-button navigation and gesture nav), ensuring zero overlapping or content cutoff.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Fluid Drawer Physics:</strong> Streamlined bottom sheet state transitions across Comments, Search Explore filters, AI Study options, and Game settings drawers to ensure smooth, instantaneous opening and closing without bounce.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Official Ecosystem Migration:</strong> Completed domain and repository alignment for the verified showcase platform and direct APK distribution pipeline.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Fixed
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Drawer State Oscillation:</strong> Resolved an issue where certain bottom sheets could rapidly toggle between open and closed states during swipe gestures.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Code Breaker Options Visibility:</strong> Fixed the 3-dot options button in active games to reliably open the settings and statistics drawer.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.1.0 */}
      {/* ========================================================= */}
      <section id="v2-1-0" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.1.0
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            1st November, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Dual vertical volume sliders in Create Post, direct system share sheet targets for Post &amp; AI, universal HTTPS deep link auto-routing, modernized subscription screen, and background audio suppression.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Dual Vertical Volume Sliders:</strong> In Create Post, creators can adjust the video audio volume and a separate background music volume slider with intuitive vertical drag gestures.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Audio Strip Optimization:</strong> When the video volume slider is pulled to 0%, the audio track is automatically stripped during processing, reducing final file size.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Direct System Share Targets:</strong> Split external app sharing into two distinct Android share options: <em>TidBit Post</em> and <em>TidBit AI</em>, directly opening the target screen without intermediate popups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Universal Deep Linking:</strong> Shared posts and reels now use clean HTTPS links that auto-redirect directly into the TidBit Android app, with instant APK download fallback for web users.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Modern Subscription Experience:</strong> Overhauled membership screen with glassmorphic cards, luminous active border gradients, and free trial access.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Account Profile Customization:</strong> Support for user birthday and demographic preferences with end-to-end encryption and private local storage.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Tactile Touch Feedback:</strong> Added responsive tactile touch ripples across settings options, navigation buttons, and interactive controls.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Streak Card Cleanup:</strong> Replaced the heavy highlight on Subject Streak Cards with a clean, subtle neutral sheen.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Fixed
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Background Audio Playback:</strong> Fixed video and music continuing to play when switching tabs, navigating away, or minimizing the app.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Reels Scrubber Alignment:</strong> Playback slider padding strictly preserved above the device navigation bar so captions never clip the scrubber.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.0.9 */}
      {/* ========================================================= */}
      <section id="v2-0-9" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.0.9
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            31st October, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Enhanced authentication flow, interactive tactile feedback, living heart animations, and startup performance tuning.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Living Heart Burst Animation:</strong> Dynamic heart animation and color reactions when liking reels and posts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Directional Transitions:</strong> Smooth left-to-right slide navigation between login, registration, and confirmation screens.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Date of Birth Selector:</strong> Visual age verification wheel picker built directly into user onboarding.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Tactile Feedback:</strong> Micro-haptic vibration feedback on cognitive game buttons and interactive gestures.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Multi-Device Security:</strong> Added device recognition to detect and challenge unrecognized logins.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Code Breaker Engine:</strong> Increased stability and expanded logic patterns for numerical challenges.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Memory &amp; Performance Tuning:</strong> Applied baseline execution profiles, lowering active memory consumption by 14%.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Fixed
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Comment Sheet Overlap:</strong> Fixed soft keyboard pushing the comment input off-screen on certain device heights.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.0.8 */}
      {/* ========================================================= */}
      <section id="v2-0-8" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.0.8
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            30th October, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Complete rebuild of the authentication and sign-up flow to match the Quiet Liquid Glass design specification.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Glassmorphic Auth Screens:</strong> Clean editorial sign-in and registration layout with neutral typography and generous touch targets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Password Strength Validator:</strong> Instant real-time strength indicators and feedback while entering passwords.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Fixed
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Adaptive Icon Stability:</strong> Resolved a display issue when loading launcher icons on Android 14+.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Instant App Startup:</strong> Optimized internal dictionary caches to eliminate delays during cold startup.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.0.7 */}
      {/* ========================================================= */}
      <section id="v2-0-7" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.0.7
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            30th October, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Cognitive training launch hub, multi-tier difficulty progression for Code Breaker, and decluttered game navigation.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Code Breaker Launch Hub:</strong> Game launcher with dedicated modes for Classic, Daily Challenge, and Timed mode.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>4 Difficulty Tiers:</strong> Added Easy (3-digit), Medium (4-digit), Hard (5-digit), and Expert (6-digit) logic modes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>In-Game Menu &amp; Hints:</strong> Added 3-dot action menu with Reveal &amp; Eliminate hint options, player stats, and "How to Play" tutorial drawer.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Cryptographic Checksum Verification:</strong> Displayed verified cryptographic checksums on the release showcase site.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Acoustic Feedback:</strong> Subtly lowered button sound decibels for quiet reading and study sessions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.0.6 */}
      {/* ========================================================= */}
      <section id="v2-0-6" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.0.6
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            30th October, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Cognitive workout integration, full-screen comments sheet, and video editor responsiveness updates.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Code Breaker Logic Game:</strong> Built-in number deciphering logic training inside the Cognitive Hub.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Full-Screen Comment Sheet:</strong> Interactive bottom sheet for exploring comments without pausing the educational video.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Music Discovery:</strong> Smarter genre and mood tagging for educational video audio tracks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Video Trimmer:</strong> Smoother scrubber response when adjusting start and end timestamps in Create Post.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.0.5 */}
      {/* ========================================================= */}
      <section id="v2-0-5" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.0.5
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            29th October, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Showcase landing page launch, secure configuration hardening, and reel playback polish.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Live Showcase Site:</strong> GitHub Pages deployment providing an interactive showcase of the TidBit application.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Direct APK Triggers:</strong> Added seamless download links from the official releases repository.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Fixed
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Duplicate Captions:</strong> Fixed occasional double text overlay on video reels during rapid vertical swipes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Carousel Heart Colors:</strong> Corrected living heart color state when browsing multi-image carousel posts.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v2.0.4 */}
      {/* ========================================================= */}
      <section id="v2-0-4" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v2.0.4
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            29th October, 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Official production release of TidBit with compact package size and maximum performance.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Production Signing:</strong> Release APKs cryptographically signed with dedicated keystores.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Public Release Pipeline:</strong> GitHub Releases repository integration with automated release assets.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Improved
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Package Size Optimization:</strong> Optimized binary size and assets producing an ultra-lightweight ~10 MB app.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Local Encryption:</strong> Device-local hardware-backed keystore encryption for user notes and reading bookmarks.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200/80 my-8" />

      {/* ========================================================= */}
      {/* v1.0.0 */}
      {/* ========================================================= */}
      <section id="v1-0-0" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/80 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
            v1.0.0
          </h2>
          <span className="text-xs text-neutral-500 font-medium">
            October 2026
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700">
          Initial release and foundational launch of TidBit — the antidote to algorithmic brainrot.
        </p>

        <div className="space-y-3 pt-1">
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Added
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Distraction-Free Video Feed:</strong> Vetted 60-second micro-lessons across Science, Philosophy, Coding, Literature, and History.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Bud AI Intelligent Tutor:</strong> Context-aware active recall checks, instant concept breakdowns, and 3D flip flashcards.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>BookNest Digital Library:</strong> Classical literature e-reader with offline audio narration and typography controls.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Cognitive Workouts Hub:</strong> Micro-drills including Vocabulary Spelling Bee, Word Match, and Mental Math sprints.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Yaad Sticky Notes Canvas:</strong> Real-time thought capture, voice memos, and highlighted passage storage.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                <span><strong>Zero-Ad Privacy Architecture:</strong> Zero third-party ad networks, zero data brokers, and zero behavioral tracking.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
