/**
 * TidBit Global Application & Release Configuration
 */

export const APP_CONFIG = {
  name: "TidBit",
  tagline: "The Antidote to Brainrot | Distraction-Free Micro-Learning",
  version: "v2.1.3",
  apkSize: "17.1 MB",
  minAndroidVersion: "Android 8.0 (API level 26)+",
  supportedArchitectures: "ARM64-v8a, armeabi-v7a, x86_64",
  
  // Public Release Repository on GitHub (Source code remains private in EduGram)
  githubOwner: "tidbit-app",
  githubRepo: "tidbit-releases",
  githubRepoUrl: "https://github.com/tidbit-app/tidbit-releases",
  
  // Direct latest APK download link from the public releases repository
  apkDownloadUrl:
    import.meta.env.VITE_APK_DOWNLOAD_URL ||
    "https://github.com/tidbit-app/tidbit-releases/releases/download/v2.1.3/tidbit-app-release.apk",
    
  // Public Releases page
  releasesPageUrl: "https://github.com/tidbit-app/tidbit-releases/releases",
  
  // Security Verification
  sha256VerificationText: "SHA-256 Checksum Verified",
  sha256Hash: "C895340414EB651CE5C5F19532F99636CCE1E34B68EF11F970DAA6A544677173",
};
