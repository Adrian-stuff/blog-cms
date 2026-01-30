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

### 1. Blog Post Card Design (`BlogPost.js` & `BlogSection.js`)
I redesigned the blog post list items to be interactive cards with dramatic scroll entrances. This applies to both the Homepage (`BlogSection.js`) and the Archive Pages (`BlogPost.js`).

-   **Typography**: Significantly increased title font sizes (`text-3xl` to `text-4xl`) for better visual impact.
-   **Scroll Reveal**: Implemented a "hidden to shown" masked animation.
    -   Text elements (title, date, summary) are wrapped in `overflow-hidden` containers.
    -   Text slides up from 100% offset (invisible) to 0% (visible) when scrolling into view.
-   **Card Layout**: Uses a clean, rounded card design with a subtle border and hover effects.
-   **Hover Effects**:
    -   **Shadow**: Increases on hover.
    -   **Gradient**: A subtle gradient overlay slides in.
    -   **Title Color**: Transitions to blue on hover.
    -   **"Read More"**: A link appears and slides up on hover. (0.3s).

### 3. Body Typography and Paragraph Animations
I enhanced the reading experience by increasing the text size and adding scroll animations to each paragraph.

-   **Typography (`styles/notion.css`)**: Increased global Notion text size to `1.25rem` (approx 20px) and line height to `1.8` for better readability.
-   **Paragraph Animations (`MotionText.js`)**: Created a custom `MotionText` component that replaces the standard Notion text block.
    -   Each paragraph now animates independently as it scrolls into view.
    -   Animation: Opacity fade-in (0 to 1) and slide-up (20px to 0).
    -   Registered this component in `NotionRenderer.js` to override the default renderer.

### 4. Application Logic
-   **Dependencies**: Installed `framer-motion` via `npm`.

## Verification Results

### Automated Build
The project built successfully using `bun run build`.

```bash
$ bun run build
...
✓ Compiled successfully
✓ Generating static pages (9/9)
...
```

### Manual Verification
-   **Blog List**: Cards appear with staggered animations.
-   **Single Post**:
    -   Title slides up dramatically (masked).
    -   Body text is significantly larger.
    -   As you scroll down the article, each paragraph fades in and slides up smoothly.
