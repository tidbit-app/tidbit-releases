/**
 * TidBit Global Application & Release Configuration
 */

export const APP_CONFIG = {
  name: "TidBit",
  tagline: "The Antidote to Brainrot | Distraction-Free Micro-Learning",
  version: "v2.1.2",
  apkSize: "10.9 MB",
  minAndroidVersion: "Android 8.0 (API level 26)+",
  supportedArchitectures: "ARM64-v8a, armeabi-v7a, x86_64",
  
  // Public Release Repository on GitHub (Source code remains private in EduGram)
  githubOwner: "tidbit-app",
  githubRepo: "tidbit-releases",
  githubRepoUrl: "https://github.com/tidbit-app/tidbit-releases",
  
  // Direct latest APK download link from the public releases repository
  apkDownloadUrl:
    import.meta.env.VITE_APK_DOWNLOAD_URL ||
    "https://github.com/tidbit-app/tidbit-releases/releases/latest/download/tidbit-app-release.apk",
    
  // Public Releases page
  releasesPageUrl: "https://github.com/tidbit-app/tidbit-releases/releases",
  
  // Security Verification
  sha256VerificationText: "SHA-256 Checksum Verified",
  sha256Hash: "CB0424C3610F9926E5B5DA0D89AFFC6CBF0CD9551BC348BFE9F570D43A5C7AA9",
};
