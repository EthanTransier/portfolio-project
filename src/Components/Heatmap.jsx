import {useEffect} from 'react';
import anime from "animejs";

const Heatmap = () => {
    function animation() {
        anime({
            targets: '.heatmap .shape',
            scale: [
                {value: .1, easing: 'easeOutSine', duration: 500},
                {value: 1, easing: 'easeInOutQuad', duration: 500}
            ],
            backgroundColor: '#2D3339',
            delay: anime.stagger(100, {grid: [52, 7], from: 'center'})
        });
    }

  useEffect(() => {
    animation();
  }, []);



  const renderGrid = () => {
  const grid = [];
  // Sample data representing activity levels for each day of the week (randomized)
  const data = [
    [0, 1, 2, 3, 4, 3, 2],
    [1, 2, 3, 4, 5, 4, 3],
    [2, 3, 4, 5, 6, 5, 4],
    // Add more data as needed...
  ];

  // Define colors corresponding to different activity levels (GitHub-style heatmap colors)
  const colors = ['#4ED05B', '#4ED05B', '#4ED05B', '#4ED05B', '#4ED05B', '#4ED05B', '#4ED05B','#4ED05B', '#4ED05B','#4ED05B', '#4ED05B','#4ED05B', '#4ED05B','#4ED05B', '#4ED05B','#4ED05B', '#4ED05B','#4ED05B', '#4ED05B','#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#186A35', '#15432A', '#15432A', '#2D3339'];

  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 7; j++) {
      const color = colors[Math.floor(Math.random() * colors.length)]; // Select color based on activity level
      grid.push(
        <div key={`${i}-${j}`} className='shape' style={{ backgroundColor: color }}></div>
      );
    }
  }
  return grid;
};

return <div className='heatmap'>{renderGrid()}</div>;
};

export default Heatmap;