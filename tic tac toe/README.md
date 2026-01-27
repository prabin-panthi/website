# Tic Tac Toe Game

A classic Tic Tac Toe game with colorful design, background music, and automatic win/draw detection. Two-player game with O and X.

## Features

- **Two-Player Game** - O starts first (red), X second (blue)
- **Win Detection** - Automatically detects 8 winning patterns
- **Draw Detection** - Detects when board is full with no winner
- **Background Music** - Toggle music on/off with volume button
- **Visual Feedback** - Turn indicator and winner announcement
- **Reset Function** - Clear board and start new game
- **Responsive Design** - Works on desktop and mobile
- **Colorful UI** - Gradient background and vibrant colors

## Files

- `tic.html` - HTML structure
- `style.css` - Styling and layout
- `script.js` - Game logic
- `music.mp3` - Background music

## How to Play

1. Open `tic.html` in browser
2. O (red) starts first
3. Click any empty cell to place your mark
4. Players alternate turns
5. First to get 3 in a row wins
6. If board fills with no winner, it's a draw
7. Click "Reset Game" to play again
8. Toggle music with volume button (top right)

## Game Board

```
┌─────┬─────┬─────┐
│  O  │  X  │  O  │
├─────┼─────┼─────┤
│  X  │  O  │  X  │
├─────┼─────┼─────┤
│  O  │  X  │  O  │
└─────┴─────┴─────┘
```

## Winning Patterns

The game checks for 8 possible winning combinations:

**Rows:**
- [0, 1, 2] - Top row
- [3, 4, 5] - Middle row
- [6, 7, 8] - Bottom row

**Columns:**
- [0, 3, 6] - Left column
- [1, 4, 7] - Middle column
- [2, 5, 8] - Right column

**Diagonals:**
- [0, 4, 8] - Top-left to bottom-right
- [2, 4, 6] - Top-right to bottom-left

## JavaScript Logic

### Initialization
```javascript
let turn = "O";  // O starts first
let result = false;  // Game won?
let draw = false;  // Game drawn?
```

### Turn System
```javascript
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "O") {
      box.style.color = 'red';
      box.innerText = "O";
      turn = "X";
    } else {
      box.style.color = 'blue';
      box.innerText = "X";
      turn = "O";
    }
    box.disabled = true;  // Prevent re-clicking
    winCheck();
    drawCheck();
    instruct(turn);
  });
});
```

### Win Detection
```javascript
function winCheck() {
  for (let win of wins) {
    let cond1 = boxes[win[0]].innerText;
    let cond2 = boxes[win[1]].innerText;
    let cond3 = boxes[win[2]].innerText;
    
    if (cond1 != "" && cond2 != "" && cond3 != "") {
      if (cond1 === cond2 && cond2 === cond3) {
        result = true;
        disableGame();
        return result;
      }
    }
  }
}
```

### Draw Detection
```javascript
const drawCheck = () => {
  for (let box of boxes) {
    if (box.innerText === "") {
      draw = false;
      break;
    } else {
      draw = true;
    }
  }
};
```

### Instruction Updates
```javascript
const instruct = (player) => {
  if (result) {
    instruction.innerText = `${player} won the game`;
  } else if (draw) {
    instruction.innerText = `It's a Draw!`;
  } else {
    instruction.innerText = `${player}'s turn`;
  }
};
```

### Reset Function
```javascript
reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  result = false;
  turn = "O";
  instruction.innerText = `O's turn`;
  reset.innerText = "Reset Game";
});
```

### Music Toggle
```javascript
musicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    backgroundMusic.pause();
    // Change icon to volume-high
  } else {
    backgroundMusic.play();
    // Change icon to volume-xmark
  }
  musicPlaying = !musicPlaying;
});
```

## Styling Details

### Color Scheme
- **Background**: Purple to cyan gradient
- **Title**: Rainbow gradient text
- **Board**: Teal (#2FC5CC)
- **Cells**: Light teal (#6DF1CC)
- **O**: Red with black stroke
- **X**: Blue with black stroke
- **Reset Button**: Pink (#DA498D)
- **Music Button**: Light green (#E3FFC3)

### Grid Layout
```css
.game {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
}
```

### Cell Borders
Each cell has custom borders to create the grid:
```css
#cell-0 { border-right, border-bottom }
#cell-1 { border-left, border-right, border-bottom }
#cell-2 { border-left, border-bottom }
// ... and so on for all 9 cells
```

### Text Styling
```css
.cells {
    font-size: 8vmin;
    font-family: cursive;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
}
```

### Title Effect
```css
.title {
    background: linear-gradient(45deg, #ff61a6, #ffdd61, #4caf50, #61c4ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
```

## Responsive Design

### Desktop (> 520px):
- Board: 60vmin × 60vmin
- Cells: 8vmin font
- Music button: Top right (10vmin from edges)
- Standard spacing

### Mobile (≤ 520px):
- Board: 85vmin × 85vmin
- Larger cells for touch
- Music button: Lower position (30vmin from top)
- Elements repositioned with relative positioning
- Added top margin to body

## Features Explained

### 1. Turn Indicator
Shows whose turn it is:
- Before game: "O's turn"
- During game: Updates each turn
- After win: "{Player} won the game"
- After draw: "It's a Draw!"

### 2. Cell Locking
Once clicked, cells are disabled:
```javascript
box.disabled = true;
```
Prevents changing moves.

### 3. Game Over Detection
When a winner is found:
- Disables all remaining cells
- Updates instruction to show winner
- Changes button text to "New Game"

### 4. Draw Check
After each move:
- Checks if all cells are filled
- If filled with no winner, declares draw
- Shows "It's a Draw!" message

### 5. Background Music
- Loops continuously
- Toggle on/off with button
- Icon changes based on state
- Volume high icon = music on
- Volume mute icon = music off

## Game Flow

```
Start Game
    ↓
O's Turn (Red)
    ↓
Click Cell → Place O
    ↓
Check Win/Draw
    ↓
If No Winner/Draw
    ↓
X's Turn (Blue)
    ↓
Click Cell → Place X
    ↓
Check Win/Draw
    ↓
Repeat until Win/Draw
    ↓
Display Result
    ↓
Click Reset → Start New Game
```

## Button Styles

### Reset Button:
```css
.reset-new {
    background-color: #DA498D;
    border: 4px solid #69247C;
    color: #FAC67A;
    height: 35px;
    width: 115px;
    border-radius: 1rem;
}
```

### Music Button:
```css
.musicBtn {
    background-color: #E3FFC3;
    border: 3px solid #B8E5A6;
    height: 30px;
    width: 45px;
    border-radius: 1rem;
}
```

## Font Awesome Icons

Used for music toggle:
```html
<i id="musicToggleBtn" class="fa-solid fa-volume-high"></i>
```

Changes between:
- `fa-volume-high` (music on)
- `fa-volume-xmark` (music off)

## Cell Hover Effect

```css
.cells:hover {
    background-color: #b6f0e0;
}
```

Lighter shade on hover for visual feedback.

## Rounded Corners

Corner cells have border-radius:
- Cell 0: Top-left rounded
- Cell 2: Top-right rounded
- Cell 6: Bottom-left rounded
- Cell 8: Bottom-right rounded

## Audio Implementation

```html
<audio id="backgroundMusic" loop>
    <source src="music.mp3" type="audio/mp3">
</audio>
```

**Loop attribute**: Music repeats automatically.

## Game States

1. **Initial**: O's turn, empty board
2. **Playing**: Alternating turns, updating board
3. **Won**: Winner declared, all cells disabled
4. **Draw**: All cells filled, no winner
5. **Reset**: Back to initial state

## Code Structure

```javascript
// 1. Get elements
let boxes = document.querySelectorAll(".cells");
let reset = document.querySelector(".reset-new");

// 2. Define winning patterns
const wins = [ [0,1,2], [3,4,5], ... ];

// 3. Add click listeners
boxes.forEach((box) => { ... });

// 4. Game logic functions
function winCheck() { ... }
const drawCheck = () => { ... }
const instruct = (player) => { ... }
const disableGame = () => { ... }

// 5. Reset listener
reset.addEventListener("click", () => { ... });

// 6. Music control
musicBtn.addEventListener("click", () => { ... });
```

## Winning Logic Explained

For each winning pattern:
1. Get text from three positions
2. Check all three are non-empty
3. Check all three are the same
4. If yes → winner found
5. Disable all cells
6. Update instruction

## Browser Compatibility

Works on:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Performance

**Lightweight:**
- No frameworks
- Vanilla JavaScript
- Simple DOM manipulation
- Fast execution

## Known Limitations

1. **No AI** - Two players only, no computer opponent
2. **No Score Tracking** - Doesn't keep win/loss count
3. **No Undo** - Can't take back moves
4. **Local Only** - No online multiplayer

## Future Enhancements

**Could Add:**
- AI opponent (easy, medium, hard)
- Score tracking across games
- Player name input
- Undo move feature
- Animation for winning line
- Confetti on win
- Different themes
- Online multiplayer
- Best of 3/5 matches
- Timer for moves

## Testing Checklist

- [ ] O starts first (red)
- [ ] X goes second (blue)
- [ ] All 8 winning patterns work
- [ ] Draw detection works
- [ ] Reset clears board
- [ ] Music toggles on/off
- [ ] Mobile responsive
- [ ] Cells can't be re-clicked
- [ ] Winner message displays
- [ ] Turn indicator updates

## Common Issues

**Music doesn't play:**
- Browser may block autoplay
- Click music button to start
- Check if music.mp3 exists

**Cells stay clickable after win:**
- Ensure `disableGame()` is called
- Check `result` flag is set

**Draw not detected:**
- Verify all cells checked
- Ensure `drawCheck()` runs each turn

## File Structure

```
.
├── tic.html        # Main HTML
├── style.css      # All styling
├── script.js      # Game logic
├── music.mp3      # Background music
└── README.md      # This file
```

## Credits

- Font Awesome for icons
- CSS Grid for layout
- Vanilla JavaScript

## License

Open source - available for educational purposes.
