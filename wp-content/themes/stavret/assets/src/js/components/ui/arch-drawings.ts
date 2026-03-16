/**
 * Stavret — Architectural Drawing Data URIs
 * Minimal line drawings on #0a0a0a background.
 * Used as background images in ThreeDMarquee hero.
 */

const BG = '%230a0a0a';
const LINE = 'rgba(255%2C255%2C255%2C0.55)';
const FAINT = 'rgba(255%2C255%2C255%2C0.15)';
const LABEL = 'rgba(255%2C255%2C255%2C0.25)';
const FONT = 'font-family%3D%22monospace%22%20font-size%3D%228%22%20letter-spacing%3D%222%22';

function svg(content: string): string {
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'><rect width='400' height='300' fill='%230a0a0a'/>${content}</svg>`;
}

// ── 1. Floor Plan ──────────────────────────────────────────────────────────
const floorPlan = svg(`
  ${Array.from({length: 18}).map((_, i) => `<line x1='${i*20 + 20}' y1='20' x2='${i*20 + 20}' y2='270' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>`).join('')}
  ${Array.from({length: 13}).map((_, i) => `<line x1='20' y1='${i*20 + 20}' x2='380' y2='${i*20 + 20}' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>`).join('')}
  
  <path d='M40 40 L340 40 L340 240 L40 240 Z' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2.5'/>
  <path d='M44 44 L336 44 L336 236 L44 236 Z' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  
  <rect x='160' y='100' width='80' height='60' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <line x1='160' y1='100' x2='240' y2='160' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='240' y1='100' x2='160' y2='160' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  <path d='M100 44 L100 140 M100 180 L100 236 M280 44 L280 100 M240 160 L240 236 M100 120 L160 120 M280 180 L336 180' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  
  <path d='M100 140 A 40 40 0 0 1 140 180' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1' stroke-dasharray='3 3'/>
  <line x1='100' y1='140' x2='140' y2='140' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <path d='M280 100 A 40 40 0 0 0 240 60' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1' stroke-dasharray='3 3'/>
  <line x1='280' y1='100' x2='240' y2='100' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>

  <line x1='40' y1='25' x2='340' y2='25' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='40' y1='20' x2='40' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='160' y1='20' x2='160' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='240' y1='20' x2='240' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='340' y1='20' x2='340' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>FLOOR PLAN  1:100</text>
`);

// ── 2. Building Elevation ──────────────────────────────────────────────────
const elevation = svg(`
  <line x1='10' y1='260' x2='390' y2='260' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <line x1='10' y1='264' x2='390' y2='264' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  <rect x='80' y='50' width='240' height='210' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  
  ${Array.from({length: 6}).map((_, i) => `<line x1='80' y1='${50 + i*35}' x2='320' y2='${50 + i*35}' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>`).join('')}
  ${Array.from({length: 11}).map((_, i) => `<line x1='${100 + i*20}' y1='50' x2='${100 + i*20}' y2='260' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>`).join('')}
  
  <path d='M80 50 L140 120 M140 50 L80 120 M140 120 L200 190 M200 120 L140 190 M200 50 L260 120 M260 50 L200 120 M260 120 L320 190 M320 120 L260 190' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1.5'/>
  
  <rect x='70' y='35' width='260' height='15' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='80' y1='35' x2='80' y2='20' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='320' y1='35' x2='320' y2='20' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  
  <rect x='160' y='225' width='80' height='35' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='200' y1='225' x2='200' y2='260' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>

  ${[50, 120, 190, 260].map(y => `<circle cx='60' cy='${y}' r='3' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/><line x1='63' y1='${y}' x2='75' y2='${y}' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>`).join('')}

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>NORTH ELEVATION  1:100</text>
`);

// ── 3. Building Section ────────────────────────────────────────────────────
const section = svg(`
  <path d='M20 230 Q 80 230, 100 240 T 300 240 T 380 235' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  ${Array.from({length: 30}).map((_, i) => `<line x1='${i*13}' y1='240' x2='${i*13 - 15}' y2='270' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>`).join('')}

  <rect x='80' y='60' width='240' height='170' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='80' y1='120' x2='320' y2='120' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='80' y1='180' x2='320' y2='180' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>

  <line x1='80' y1='130' x2='320' y2='130' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='4 2'/>
  <line x1='80' y1='190' x2='320' y2='190' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='4 2'/>

  <rect x='180' y='60' width='40' height='170' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='180' y1='230' x2='180' y2='270' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-dasharray='4 4'/>
  <line x1='220' y1='230' x2='220' y2='270' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-dasharray='4 4'/>

  <path d='M80 60 L140 30 L200 60 L260 30 L320 60' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <path d='M80 60 L140 60 L140 30 M200 60 L200 30 M260 60 L260 30 M320 60 L260 60' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  
  <circle cx='110' cy='165' r='2' fill='rgba(255,255,255,0.4)'/><line x1='110' y1='167' x2='110' y2='180' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <circle cx='280' cy='105' r='2' fill='rgba(255,255,255,0.4)'/><line x1='280' y1='107' x2='280' y2='120' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>SECTION A-A  1:100</text>
`);

// ── 4. Site Plan ────────────────────────────────────────────────────────────
const sitePlan = svg(`
  <path d='M-10 40 Q 150 20, 250 100 T 410 160' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>
  <path d='M-10 80 Q 150 60, 250 140 T 410 200' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>
  <path d='M-10 120 Q 150 100, 250 180 T 410 240' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='1.5'/>
  <path d='M-10 160 Q 150 140, 250 220 T 410 280' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>

  <g transform='rotate(-15, 200, 150)'>
    <rect x='135' y='85' width='140' height='110' fill='rgba(255,255,255,0.03)'/>
    <rect x='130' y='80' width='140' height='110' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
    <rect x='140' y='90' width='120' height='90' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
    <line x1='140' y1='90' x2='260' y2='180' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
    <line x1='260' y1='90' x2='140' y2='180' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  </g>

  ${[[60,60], [90,40], [320,100], [350,130], [280,240], [100,220]].map(([x,y]) => 
    `<circle cx='${x}' cy='${y}' r='12' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='2 2'/>
     <circle cx='${x}' cy='${y}' r='2' fill='rgba(255,255,255,0.5)'/>`
  ).join('')}

  <circle cx='350' cy='40' r='15' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <path d='M350 20 L355 45 L345 45 Z' fill='rgba(255,255,255,0.6)'/>
  <text x='347' y='65' font-family='monospace' font-size='8' fill='rgba(255,255,255,0.5)'>N</text>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>SITE PLAN  1:500</text>
`);

// ── 5. Staircase Plan ──────────────────────────────────────────────────────
const staircasePlan = svg(`
  <path d='M80 40 L320 40 L320 260 L80 260 Z' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2.5'/>
  <path d='M90 50 L310 50 L310 250 L90 250 Z' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  ${Array.from({length: 12}).map((_, i) => `<line x1='90' y1='${60 + i*15}' x2='180' y2='${60 + i*15}' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>`).join('')}
  ${Array.from({length: 12}).map((_, i) => `<line x1='220' y1='${240 - i*15}' x2='310' y2='${240 - i*15}' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>`).join('')}
  
  <rect x='90' y='50' width='220' height='30' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <rect x='90' y='220' width='220' height='30' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  
  <path d='M180 80 L180 220 M220 80 L220 220' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <path d='M170 80 L170 220 M230 80 L230 220' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>

  <path d='M135 70 L135 210 Q 135 235 180 235 L265 235 Q 265 235 265 210 L265 140' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='265,135 260,145 270,145' fill='rgba(255,255,255,0.5)'/>

  <path d='M60 160 L100 130 L300 160 L340 130' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-dasharray='5 5'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>STAIRCASE DETAIL  1:50</text>
`);

// ── 6. Facade Module ───────────────────────────────────────────────────────
const facadeModule = svg(`
  <rect x='40' y='30' width='320' height='240' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  
  ${Array.from({length: 5}).map((_, i) => 
    Array.from({length: 4}).map((_, j) => {
      const cx = 40 + i*80;
      const cy = 30 + j*80;
      return `
        <polygon points='${cx},${cy+40} ${cx+40},${cy+80} ${cx+80},${cy+40} ${cx+40},${cy}' fill='rgba(255,255,255,${(i+j)%2===0 ? '0.05' : '0.02'})' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
        <line x1='${cx}' y1='${cy+40}' x2='${cx+80}' y2='${cy+40}' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
        <line x1='${cx+40}' y1='${cy}' x2='${cx+40}' y2='${cy+80}' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
      `;
    }).join('')
  ).join('')}

  ${Array.from({length: 5}).map((_, i) => 
    Array.from({length: 4}).map((_, j) => {
      const cx = 40 + i*80;
      const cy = 30 + j*80;
      return `<circle cx='${cx}' cy='${cy}' r='3' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
              <circle cx='${cx+40}' cy='${cy+40}' r='4' fill='rgba(255,255,255,0.5)'/>`;
    }).join('')
  ).join('')}

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>PARAMETRIC FACADE MODULE  1:20</text>
`);

// ── 7. Column Grid ─────────────────────────────────────────────────────────
const columnGrid = svg(`
  ${[70, 160, 250, 340].map(x => `
    <line x1='${x}' y1='40' x2='${x}' y2='270' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='10 5 2 5'/>
    <circle cx='${x}' cy='25' r='10' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  `).join('')}
  ${[80, 150, 220].map(y => `
    <line x1='40' y1='${y}' x2='370' y2='${y}' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='10 5 2 5'/>
    <circle cx='25' cy='${y}' r='10' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  `).join('')}
  
  <text x='67' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>1</text>
  <text x='157' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>2</text>
  <text x='247' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>3</text>
  <text x='337' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>4</text>
  <text x='22' y='83' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>A</text>
  <text x='22' y='153' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>B</text>
  <text x='22' y='223' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>C</text>

  ${[70, 160, 250, 340].map(x => 
    [80, 150, 220].map(y => `
      <rect x='${x-6}' y='${y-8}' width='12' height='16' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.7)' stroke-width='1.5'/>
      <path d='M${x-6} ${y-8} L${x+6} ${y-8} M${x} ${y-8} L${x} ${y+8} M${x-6} ${y+8} L${x+6} ${y+8}' fill='none' stroke='rgba(255,255,255,0.9)' stroke-width='2'/>
    `).join('')
  ).join('')}

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>STRUCTURAL GRID & COLUMN LAYOUT</text>
`);

// ── 8. Window Detail ───────────────────────────────────────────────────────
const windowDetail = svg(`
  <rect x='40' y='40' width='60' height='220' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  ${Array.from({length: 22}).map((_, i) => `<line x1='40' y1='${50 + i*10}' x2='100' y2='${40 + i*10}' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>`).join('')}
  
  <path d='M100 80 L140 80 L140 100 L120 100 L120 200 L140 200 L140 220 L100 220 Z' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <rect x='115' y='145' width='5' height='10' fill='rgba(255,255,255,0.4)'/>
  
  <rect x='130' y='100' width='6' height='100' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <rect x='144' y='100' width='6' height='100' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='136' y1='100' x2='144' y2='100' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='136' y1='200' x2='144' y2='200' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>

  <circle cx='128' cy='105' r='2' fill='rgba(255,255,255,0.6)'/>
  <circle cx='128' cy='195' r='2' fill='rgba(255,255,255,0.6)'/>
  <circle cx='152' cy='105' r='2' fill='rgba(255,255,255,0.6)'/>
  <circle cx='152' cy='195' r='2' fill='rgba(255,255,255,0.6)'/>

  <path d='M140 120 L180 90 L280 90' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <text x='285' y='93' font-family='monospace' font-size='8' fill='rgba(255,255,255,0.4)'>DOUBLE GLAZING (Argon)</text>
  
  <path d='M117 150 L180 150 L280 150' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <text x='285' y='153' font-family='monospace' font-size='8' fill='rgba(255,255,255,0.4)'>THERMAL BREAK</text>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>CURTAIN WALL DETAIL  1:5</text>
`);

// ── 9. Proportion Study ────────────────────────────────────────────────────
const proportionStudy = svg(`
  <rect x='50' y='30' width='300' height='240' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='235' y1='30' x2='235' y2='270' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='235' y1='144' x2='350' y2='144' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='306' y1='144' x2='306' y2='270' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  
  <path d='M50 270 A 185 185 0 0 1 235 85 A 114 114 0 0 1 349 199 A 71 71 0 0 1 278 270 A 44 44 0 0 1 234 226' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  
  <line x1='50' y1='270' x2='350' y2='30' stroke='rgba(255,255,255,0.15)' stroke-width='1' stroke-dasharray='4 4'/>
  <line x1='50' y1='30' x2='235' y2='270' stroke='rgba(255,255,255,0.15)' stroke-width='1' stroke-dasharray='4 4'/>
  
  <circle cx='235' cy='144' r='3' fill='rgba(255,255,255,0.5)'/>
  <circle cx='306' cy='199' r='2' fill='rgba(255,255,255,0.5)'/>

  <text x='55' y='45' font-family='monospace' font-size='9' fill='rgba(255,255,255,0.5)'>a</text>
  <text x='240' y='45' font-family='monospace' font-size='9' fill='rgba(255,255,255,0.5)'>a+b</text>
  <text x='140' y='140' font-family='monospace' font-size='12' fill='rgba(255,255,255,0.2)'>φ = 1.618</text>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>GOLDEN RATIO PROPORTION STUDY</text>
`);

// ── 10. Roof Plan ──────────────────────────────────────────────────────────
const roofPlan = svg(`
  <rect x='40' y='30' width='320' height='240' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='8 4'/>
  
  <path d='M80 60 L320 60 L320 120 L260 120 L260 240 L80 240 Z' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.6)' stroke-width='2.5'/>
  
  <line x1='140' y1='90' x2='260' y2='90' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='170' y1='150' x2='170' y2='210' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  
  <line x1='80' y1='60' x2='140' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='80' y1='120' x2='140' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='320' y1='60' x2='260' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='320' y1='120' x2='260' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <line x1='80' y1='240' x2='170' y2='210' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='260' y1='240' x2='170' y2='210' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <line x1='170' y1='150' x2='260' y2='120' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-dasharray='4 2'/>
  <line x1='170' y1='150' x2='80' y2='120' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-dasharray='4 2'/>

  <rect x='200' y='70' width='40' height='15' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1'/>
  <line x1='200' y1='77.5' x2='240' y2='77.5' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>

  <path d='M140 75 L140 65 L137 68 M140 65 L143 68' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <path d='M140 105 L140 115 L137 112 M140 115 L143 112' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>ROOF PLAN  1:100</text>
`);

// ── 11. Interior Perspective ────────────────────────────────────────────────
const interiorPerspective = svg(`
  <rect x='40' y='30' width='320' height='240' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  
  <rect x='150' y='100' width='100' height='80' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  
  ${Array.from({length: 7}).map((_, i) => `<line x1='${40 + i*53.3}' y1='30' x2='${150 + i*16.6}' y2='100' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>`).join('')}
  <line x1='40' y1='50' x2='360' y2='50' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='85' y1='75' x2='315' y2='75' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  ${Array.from({length: 11}).map((_, i) => `<line x1='${40 + i*32}' y1='270' x2='${150 + i*10}' y2='180' stroke='rgba(255,255,255,0.25)' stroke-width='1'/>`).join('')}
  <line x1='40' y1='240' x2='360' y2='240' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='80' y1='210' x2='320' y2='210' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>

  <path d='M40 90 L150 120 M40 180 L150 160' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <path d='M360 90 L250 120 M360 180 L250 160' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <path d='M100 70 L110 75 L110 200 L100 215 Z' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <path d='M300 70 L290 75 L290 200 L300 215 Z' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>

  <circle cx='200' cy='140' r='2' fill='rgba(255,255,255,0.8)'/>
  <line x1='195' y1='140' x2='205' y2='140' stroke='rgba(255,255,255,0.4)' stroke-width='0.5'/>
  <line x1='200' y1='135' x2='200' y2='145' stroke='rgba(255,255,255,0.4)' stroke-width='0.5'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>INTERIOR PERSPECTIVE STUDY</text>
`);

// ── 12. Detail Section ─────────────────────────────────────────────────────
const detailSection = svg(`
  <rect x='60' y='180' width='280' height='60' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  ${Array.from({length: 20}).map((_, i) => `<circle cx='${70 + i*14}' cy='200' r='1' fill='rgba(255,255,255,0.3)'/><polygon points='${75 + i*14},210 ${78 + i*14},215 ${72 + i*14},215' fill='none' stroke='rgba(255,255,255,0.2)'/>`).join('')}

  <rect x='150' y='170' width='100' height='10' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.8)' stroke-width='2'/>
  
  <rect x='160' y='150' width='6' height='40' fill='rgba(255,255,255,0.6)'/>
  <rect x='234' y='150' width='6' height='40' fill='rgba(255,255,255,0.6)'/>
  <line x1='155' y1='155' x2='171' y2='155' stroke='rgba(255,255,255,0.8)' stroke-width='3'/>
  <line x1='229' y1='155' x2='245' y2='155' stroke='rgba(255,255,255,0.8)' stroke-width='3'/>

  <path d='M180 50 L180 170 M220 50 L220 170' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  <path d='M195 50 L195 170 M205 50 L205 170' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  
  <path d='M180 170 L140 130 L100 130' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1'/>
  <polygon points='145,130 140,125 140,130' fill='rgba(255,255,255,0.5)'/>
  <text x='100' y='125' font-family='monospace' font-size='6' fill='rgba(255,255,255,0.5)'>8mm FILLET WELD</text>
  
  <line x1='270' y1='170' x2='270' y2='180' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='285' y1='170' x2='285' y2='180' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='270' y1='175' x2='330' y2='175' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <circle cx='270' cy='175' r='1' fill='rgba(255,255,255,0.8)'/>
  <circle cx='285' cy='175' r='1' fill='rgba(255,255,255,0.8)'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>CONNECTION DETAIL 1:10</text>
`);

export const ARCH_DRAWINGS = [
  floorPlan,
  elevation,
  section,
  sitePlan,
  staircasePlan,
  facadeModule,
  columnGrid,
  windowDetail,
  proportionStudy,
  roofPlan,
  interiorPerspective,
  detailSection,
];