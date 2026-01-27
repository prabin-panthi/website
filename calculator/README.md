# Calculator

A functional calculator with a modern UI, sound effects, and responsive design. Supports basic arithmetic operations with a clean interface.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, division, percentage
- **Sound Effects**: Click sound on every button press
- **Display**: Large screen showing expressions and results
- **Clear Functions**: AC (All Clear) and Delete (backspace)
- **Auto-clear**: Starts fresh when typing after calculation
- **Error Handling**: Shows "Syntax Error" for invalid expressions
- **Responsive**: Works on desktop and mobile

## Files

- `calculator.html` - HTML structure
- `style.css` - Styling and layout
- `script.js` - Calculator logic
- `click.mp3` - Button click sound

## How to Use

1. Open `calculator.html` in browser
2. Click number buttons to enter values
3. Click operation buttons (+, -, ×, ÷, %)
4. Press `=` to calculate result
5. Use `AC` to clear everything
6. Use backspace icon to delete last character

## Calculator Layout

```
┌─────────────────────────┐
│      [  Screen  ]       │
├──────┬──────┬──────┬────┤
│  AC  │  ←   │  %   │  / │
├──────┼──────┼──────┼────┤
│  7   │  8   │  9   │  × │
├──────┼──────┼──────┼────┤
│  4   │  5   │  6   │  - │
├──────┼──────┼──────┼────┤
│  1   │  2   │  3   │  + │
├──────┼──────┼──────┼────┤
│  00  │  0   │  .   │  = │
└──────┴──────┴──────┴────┘
```

## Button Functions

### Numbers:
- `0-9` - Digit input
- `00` - Double zero shortcut
- `.` - Decimal point

### Operations:
- `+` - Addition
- `-` - Subtraction
- `×` - Multiplication
- `/` - Division
- `%` - Percentage

### Control:
- `AC` - All Clear (reset everything)
- `←` - Delete (remove last character)
- `=` - Evaluate expression

## JavaScript Logic

### Button Click Handling:
```javascript
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Play sound
        // Handle different button types
        // Update screen
    });
});
```

### Key Features:

**1. Auto-clear After Calculation:**
- Flag tracks if last action was calculation
- Typing numbers after `=` clears screen
- Typing operators continues from result

**2. Expression Building:**
```javascript
const append = (data) => {
    screen.innerText += data;
}
```

**3. Evaluation:**
```javascript
const evaluate = () => {
    let expression = screen.innerText.replaceAll('×', '*');
    try {
        screen.innerText = eval(expression).toFixed(2);
    } catch {
        screen.innerText = "Syntax Error";
    }
}
```

**4. Sound Effect:**
```javascript
backgroundMusic.play(); // On every button click
```

## Styling Details

### Color Scheme:
- **Background**: Red to cyan gradient
- **Calculator Body**: Dark gray (#333333)
- **Screen**: Beige (rgb(215, 207, 192))
- **Buttons**: Gray (rgb(100, 100, 100))
- **Operators**: Orange text
- **Equals Button**: Orange background

### Layout:
```css
.calculator {
    height: 70vmin;
    width: 55vmin;
    border: 2vmin solid #333333;
    border-top: 10vmin solid #333333;
}
```

### Grid System:
```css
.buttons {
    display: grid;
    grid-template-columns: repeat(4, auto);
}
```

### Screen:
```css
.screen {
    font-size: 9vmin;
    display: flex;
    align-items: end;
    justify-content: end;
}
```

## Responsive Design

### Desktop (> 520px):
- Calculator: 70vmin × 55vmin
- Font size: 9vmin (screen), 4.8vmin (buttons)
- Top margin: 3rem

### Mobile (≤ 520px):
- Calculator: 95vmin × 75vmin
- Font size: 12vmin (screen), 6.5vmin (buttons)
- Top margin: 15vmax
- Larger buttons for touch

## Features Explained

### 1. Sound on Click
Every button plays a click sound for better feedback:
```html
<audio id="backgroundMusic">
    <source src="click.mp3" type="audio/mp3">
</audio>
```

### 2. Smart Clearing
After pressing `=`:
- Typing a number → clears screen, starts fresh
- Typing an operator → continues from result

Example:
```
5 + 3 = 8
[Type 2] → Shows: 2 (cleared)
[Type +] → Shows: 8+ (continues)
```

### 3. Decimal Precision
Results show 2 decimal places:
```javascript
screen.innerText = eval(expression).toFixed(2);
```

### 4. Error Handling
Invalid expressions show error:
```javascript
try {
    // Calculate
} catch {
    screen.innerText = "Syntax Error";
}
```

## Hover Effects

**Regular Buttons:**
```css
.button:hover {
    background-color: rgb(125, 125, 125);
}
```

**Equals Button:**
```css
#equals:hover {
    background-color: rgb(255, 187, 60);
}
```

## CSS Units Used

**vmin (viewport minimum):**
- Responsive to smallest viewport dimension
- Ensures calculator fits on all screens
- Used for: width, height, font-size, border

**Benefits:**
- Scales with screen size
- Maintains aspect ratio
- Mobile-friendly

## Button IDs

```javascript
// Numbers
#zero, #one, #two, #three, #four, #five, 
#siv (6), #seven, #eight, #nine, #zeroes (00)

// Operations
#plus, #minus, #cross (×), #divide, #percent

// Control
#ac, #del, #equals, #dot
```

## Font Awesome Integration

Backspace button uses icon:
```html
<button id="del">
    <i class="fa-solid fa-delete-left"></i>
</button>
```

## Expression Handling

**Multiplication Symbol:**
- Display shows: `×`
- Converts to: `*` for eval()
```javascript
expression.replaceAll('×', '*')
```

**Evaluation:**
Uses JavaScript's `eval()` function:
- Parses the expression string
- Calculates result
- Returns numerical value

## Screen Features

**Alignment:**
- Text aligned right
- Text aligned bottom
- Large bold font

**Overflow:**
```css
white-space: nowrap;
overflow: hidden;
```
Prevents text wrapping and hides overflow.

## Calculator Design

**Border Top:**
- 10vmin thick (desktop)
- 15vmin thick (mobile)
- Creates "bezel" effect

**Border Radius:**
- Rounded corners: 1.1rem
- Matches screen corners

**Button Spacing:**
- Height: 80% of grid cell
- Width: 80% of grid cell
- Creates natural gaps

## Example Calculations

```
Input: 5 + 3
Output: 8.00

Input: 10 × 2.5
Output: 25.00

Input: 100 / 3
Output: 33.33

Input: 50%
Output: 0.50

Input: 5 ÷ 0
Output: Infinity

Input: 5 +* 3
Output: Syntax Error
```

## Browser Compatibility

Works on:
- Chrome/Edge (recommended for audio)
- Firefox
- Safari
- Mobile browsers

**Audio Support:**
Most modern browsers support MP3 audio.

## Performance

**Lightweight:**
- No frameworks
- Vanilla JavaScript
- Small audio file
- Fast load time

## Keyboard Support

Currently supports mouse/touch only.

**To Add Keyboard:**
```javascript
document.addEventListener('keydown', (e) => {
    // Map keys to buttons
    // Trigger button clicks
});
```

## Known Limitations

1. **No Keyboard Input** - Mouse/touch only
2. **Basic Operations** - No advanced functions (sin, cos, sqrt, etc.)
3. **Expression Display** - No parentheses support
4. **Fixed Decimals** - Always shows 2 decimal places
5. **No History** - Can't view previous calculations

## Future Enhancements

**Could Add:**
- Keyboard support
- Scientific functions (sin, cos, log, etc.)
- Memory functions (M+, M-, MR, MC)
- Calculation history
- Theme toggle (dark/light)
- Different color schemes
- More number formats (scientific notation)
- Parentheses support
- Copy result to clipboard

## Code Structure

```javascript
// 1. Get all elements
let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".screen");

// 2. Add click listeners
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Handle button logic
    });
});

// 3. Helper functions
const append = (data) => { ... }
const evaluate = () => { ... }
```

## Styling Best Practices

**Viewport Units:**
- Scales naturally
- No media query for sizes (only mobile adjustment)
- Maintains proportions

**Grid Layout:**
- Clean button arrangement
- Auto-spacing
- Easy to modify

**Color Contrast:**
- Orange operators stand out
- Dark background for readability
- Light screen for visibility

## Audio Implementation

```html
<audio id="backgroundMusic">
    <source src="click.mp3" type="audio/mp3">
</audio>
```

```javascript
const backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.play(); // On each button click
```

**Note:** Browser autoplay policies may require user interaction first.

## Testing Checklist

- [ ] All number buttons work
- [ ] All operation buttons work
- [ ] AC clears display
- [ ] Delete removes last character
- [ ] Equals calculates correctly
- [ ] Error handling works
- [ ] Sound plays on click
- [ ] Mobile responsive
- [ ] Hover effects work

## File Structure

```
.
├── calculator.html    # Main HTML
├── style.css         # All styling
├── script.js         # Calculator logic
├── click.mp3         # Click sound effect
└── README.md         # This file
```

## Credits

- Font Awesome for icons
- Vanilla JavaScript
- CSS Grid for layout

## License

Open source - available for educational purposes.
