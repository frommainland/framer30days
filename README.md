<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
# documentation of learning framer motion

### 7.30 
animatepresence start  
no workaround on transform inline style

### 7.31
ternary within ternary  
`i > 5 ? (i > 8 ? "OrangeRed" : "Orange") : "LimeGreen"`  
dynamic margin within loop  
let margin = i < 9 ? 4 : 0  

divs with div start from bottom  
`display: 'inline-flex',
justifyContent: 'flex-end',
flexDirection: 'column-reverse'`

### 8.1  
animatepresence only works when the elements inside animatepresence component are added or removed from the DOM.

any animatepresence component needs key value  
add `position:absolute` to keep it center without showing both elements animating together in left and right

### 8.2
color could be animatable only when its two values are in same format, color name to color name, hex to hex,
`'bisque' to '#0066FF'` won't work and vice versa.

### 8.3 
`Unhandled Rejection (TypeError): input.match is not a function` component Cycle03 after the first click fails

variants in useCycle syntax

### 8.4


<!-- AUTO-GENERATED-CONTENT:END -->

