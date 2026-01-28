# Walkthrough - Page Transitions

I have implemented smooth page transitions for the blog using `framer-motion`.

## Changes

### 1. Application Wrapper
#### [pages/_app.js](file:///c:/Users/Adrian/projects/blog-cms/pages/_app.js)
- Wrapped the page component with `AnimatePresence` and `motion.div`.
- Added fade-in/slide-up animations on route changes.
- Used `router.asPath` to trigger animations when navigating between pages.

```javascript
<AnimatePresence mode='wait'>
  <motion.div
    key={router.asPath}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen"
  >
    <Component {...pageProps} />
  </motion.div>
</AnimatePresence>
```

### 2. Dependencies
- Installed `framer-motion` via `npm`.

## Verification Results

### Automated Tests
- Installation of `framer-motion` was initiated.

### Manual Verification
- Navigate between pages to see the content fade in and slide up slightly.
- The transition should be smooth and fast (0.3s).
