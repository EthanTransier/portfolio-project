import {useEffect} from 'react';
import anime from "animejs";

const Heatmap = () => {
    function animation() {
      const tl = anime.timeline({})
      tl.add({
        targets: '.heatmap .shape',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 500}
        ],
        backgroundColor: '#2D3339',
        delay: anime.stagger(100, {grid: [52, 7], from: 'center'})
      })
      tl.add({
        targets: '.heatmap .named-shape',
        backgroundColor: '#4ED05B',
        delay: anime.stagger(100, {grid: [52, 7], from: 'center'})
      })
    }

  useEffect(() => {
    animation();
  }, []);
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

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 52; j++) {
      const color = colors[Math.floor(Math.random() * colors.length)]; // Select color based on activity level
      console.log(namedGrid[i][j])
      grid.push(
        <div key={`${i}-${j}`} className={namedGrid[i][j] == 1 ? 'shape named-shape' : 'shape'} style={{ backgroundColor: color }}></div>
      );
    }
  }
  return grid;
};

return <div className='heatmap'>{renderGrid()}</div>;
};

export default Heatmap;