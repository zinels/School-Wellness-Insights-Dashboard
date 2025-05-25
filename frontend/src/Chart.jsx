import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

function ChartComponent() {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/metrics')
      .then(res => res.json())
      .then(data => setDataSet(data));
  }, []);

  const data = {
    labels: dataSet.map(item => item.grade),
    datasets: [
      {
        label: 'Attendance (%)',
        data: dataSet.map(item => item.attendance),
        backgroundColor: 'rgba(75,192,192,0.6)'
      },
      {
        label: 'Counseling Sessions',
        data: dataSet.map(item => item.counseling_sessions),
        backgroundColor: 'rgba(153,102,255,0.6)'
      }
    ]
  };

  return (
    <div>
      <h2>School Wellness Metrics</h2>
      <Bar data={data} />
    </div>
  );
}

export default ChartComponent;
