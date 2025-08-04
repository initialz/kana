# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Kana (Japanese Hiragana and Katakana) memory training web application. It's a single-page application that helps users learn Japanese characters using spaced repetition algorithms.

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript
- No build process or dependencies
- Uses localStorage for data persistence
- Responsive design for mobile and desktop

## Architecture

The application follows a modular class-based architecture with these main components:

### Core Classes
- **`MemorySystem`** (`script.js:46-182`): Implements spaced repetition algorithm for memorizing kana characters
  - Manages learning intervals: [1, 2, 4, 8, 16] days
  - Tracks user progress with levels 1-5 for each character
  - Handles daily statistics and next review scheduling

- **`UserManager`** (`script.js:185-254`): Handles user account management and localStorage operations
  - Creates and manages multiple user profiles
  - Tracks individual progress for hiragana and katakana separately
  - Manages current user state persistence

- **`KanaApp`** (`script.js:257-720`): Main application controller
  - Orchestrates UI screens and navigation
  - Handles practice sessions and statistics display
  - Manages user interactions and real-time feedback

### Data Structure
- **`KANA_DATA`** (`script.js:2-37`): Complete dataset of hiragana and katakana characters with romaji pronunciation and example words
- User data stored in localStorage with structure:
  ```javascript
  {
    users: {
      [username]: {
        hiraganaProgress: { [char]: {level, nextReview, totalReviews, correctCount} },
        katakanaProgress: { [char]: {level, nextReview, totalReviews, correctCount} },
        dailyStats: { [date]: {total, correct, hiragana: {}, katakana: {}} }
      }
    },
    currentUser: string
  }
  ```

### UI Screens
1. **User Selection** (`index.html:12-25`): User creation and selection interface
2. **Mode Selection** (`index.html:28-60`): Choose between hiragana/katakana practice or statistics
3. **Practice Screen** (`index.html:63-95`): Interactive learning interface with spaced repetition
4. **Statistics Screen** (`index.html:98-146`): Progress visualization with charts and daily tracking

## Development

### Running the Application
Since this is a static web application with no build process:
```bash
# Simply open the HTML file in a browser
open index.html
# Or serve with any static file server
python -m http.server 8000
# Or use any other local server
```

### Key Features
- **Spaced Repetition Algorithm**: Characters are scheduled for review based on user performance
- **Multi-user Support**: Multiple users can track separate learning progress
- **Daily Statistics**: Tracks daily practice sessions with accuracy metrics
- **Progress Visualization**: Charts showing learning trends and streak tracking
- **Responsive Design**: Works on mobile devices and desktops

### Code Organization
- `index.html`: Complete UI structure with all screens
- `script.js`: All JavaScript logic in modular classes
- `style.css`: Comprehensive styling with responsive design

### Testing
No automated testing framework is present. Testing should be done manually:
1. Test user creation and switching
2. Verify practice mode functionality for both hiragana and katakana
3. Check statistics calculations and chart rendering
4. Test responsive design on different screen sizes
5. Verify localStorage persistence across browser sessions