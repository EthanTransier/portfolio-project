import {useEffect} from 'react';
import anime from "animejs";

const Heatmap = () => {
  function animation() {
    const tl = anime.timeline({})
    // inital grid animation, with the shapes changing and diff color
    tl.add({
      targets: '.heatmap .shape',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 500}
      ],
      backgroundColor: '#2D3339',
      delay: anime.stagger(100, {grid: [52, 7], from: 'center'})
    })
    // animation for displaying the heatmap text
    tl.add({
      targets: '.heatmap .named-shape',
      backgroundColor: '#4ED05B',
      delay: anime.stagger(50, {grid: [52, 7], from: 'center'})
    })
  }
  // calls animation for the useEffect
  useEffect(() => {
    animation();
  }, []);
  // grid for displaying the text on the heatmap
  // 0 means it will be gray, 1 means it will be green
const namedGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0], 
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0], 
  [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0], 
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0], 
  [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
]

  const renderGrid = () => {
    const grid = [];
    // Define colors corresponding to different activity levels (GitHub-style heatmap colors)
    const colors = ['#4ED05B', '#4ED05B', '#4ED05B', '#37A445', '#37A445', '#37A445', '#37A445','#37A445', '#37A445','#37A445', '#37A445','#37A445', '#37A445','#37A445', '#37A445','#37A445', '#37A445','#37A445', '#37A445','#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#15432A', '#15432A', '#2D3339'];
    // creates the grid, 7 by 52
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 52; j++) {
        const color = colors[Math.floor(Math.random() * colors.length)]; // Pseudo-random grid, so it looks like an actual github heatmap
        grid.push(
          // each squrae in the grid, makes sure the squares that will change color into the text have a diff class name
          <div key={`${i}-${j}`} className={namedGrid[i][j] == 1 ? 'shape named-shape' : 'shape'} style={{ backgroundColor: color }}></div>
        );
      }
    }
    return grid;
  };

return <div className='heatmap'>{renderGrid()}</div>;
};

export default Heatmap;