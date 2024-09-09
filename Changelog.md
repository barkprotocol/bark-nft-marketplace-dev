# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of the BARK Protocol NFT Marketplace.
- Integration with Supabase for authentication and data management.
- Responsive design with Tailwind CSS.
- Components provided by shadcn/ui.
- Deployment configuration for Vercel.
- Added ThemeSwitcher component for toggling between light and dark themes.
- Integrated environment variable checks into client-side components.

### Fixed
- Fixed issues with using server-side functions (useTheme and hasEnvVars) in client-side components.
- Resolved issues with RootLayout and Header components' interaction with next-themes and environment variables.

## Changed
- Updated Header and Footer components to include social media links and environment variable warnings.
- Updated RootLayout component to wrap the application with ThemeProvider and include Header and Footer

## [1.0.0] - 2024-09-09

### Added
- **Explore NFTs:** Ability to view a collection of exclusive NFTs.
- **Mint NFTs:** Option to mint new NFTs for premium members.
- **Upgrade Membership:** Feature to upgrade to premium for additional rewards.
- **Styling:** Implemented Tailwind CSS for styling the application.
- **Theming:** Added support for light and dark mode.

### Changed
- Updated README.md with installation and usage instructions.
- Configured environment variables for deployment with Vercel.
- Added support for image domains in `next.config.js`.

### Fixed
- Resolved issue with `createServerClient` function name conflict in `server.ts`.
- Fixed import path errors in `header-auth.tsx`.
- Corrected image source configuration in `next.config.js`.

## [0.1.0] - 2024-09-05

### Added
- Basic project setup with Next.js and TypeScript.
- Initial components for navigation and layout.
- Supabase client setup for server-side operations.

### Changed
- Refactored components for better organization.
- Updated project structure to accommodate additional features.

## [0.0.1] - 2024-09-01

### Added
- Initial project scaffolding.
- Basic Next.js setup with Tailwind CSS and TypeScript.

[Unreleased]: https://github.com/your-username/nft-marketplace/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/your-username/nft-marketplace/releases/tag/v1.0.0
