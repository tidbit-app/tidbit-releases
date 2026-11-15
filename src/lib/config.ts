/**
 * TidBit Global Application & Release Configuration
 */

export const APP_CONFIG = {
  name: "TidBit",
  tagline: "The Antidote to Brainrot | Distraction-Free Micro-Learning",
  version: "v2.1.4",
  apkSize: "17.2 MB",
  minAndroidVersion: "Android 8.0 (API level 26)+",
  supportedArchitectures: "ARM64-v8a, armeabi-v7a, x86_64",
  
  // Public Release Repository on GitHub (Source code remains private in EduGram)
  githubOwner: "tidbit-app",
  githubRepo: "tidbit-releases",
  githubRepoUrl: "https://github.com/tidbit-app/tidbit-releases",
  
  // Direct latest APK download link from the public releases repository
  apkDownloadUrl:
    import.meta.env.VITE_APK_DOWNLOAD_URL ||
    "https://github.com/tidbit-app/tidbit-releases/releases/download/v2.1.4/tidbit-app-release.apk",
    
  // Public Releases page
  releasesPageUrl: "https://github.com/tidbit-app/tidbit-releases/releases",
  
  // Security Verification
  sha256VerificationText: "SHA-256 Checksum Verified",
  sha256Hash: "5F6A700D58C6C922536F39D907FDA12F68A58276B321E9C184871876D1E876F4",
};
