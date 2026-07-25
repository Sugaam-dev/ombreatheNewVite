import React from 'react';

const styles = `
/* Schedule.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.schedule-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
}

.title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
  font-weight: 300;
}

.schedule-grid {
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
}

.schedule-item {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid #667eea;
}

.schedule-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.schedule-item.practice {
  border-left-color: #4CAF50;
  background: linear-gradient(135deg, #ffffff 0%, #f8fff8 100%);
}

.schedule-item.theory {
  border-left-color: #2196F3;
  background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
}

.schedule-item.meditation {
  border-left-color: #9C27B0;
  background: linear-gradient(135deg, #ffffff 0%, #faf0ff 100%);
}

.schedule-item.break {
  border-left-color: #FF9800;
  background: linear-gradient(135deg, #ffffff 0%, #fff8f0 100%);
}

.schedule-item.study {
  border-left-color: #607D8B;
  background: linear-gradient(135deg, #ffffff 0%, #f5f7f8 100%);
}

.schedule-item.rest {
  border-left-color: #3F51B5;
  background: linear-gradient(135deg, #ffffff 0%, #f0f2ff 100%);
}

.time-slot {
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 200px;
  flex-shrink: 0;
}

.icon {
  font-size: 1.8rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
}

.time {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.activity {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.activity-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.activity-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
}

.activity-badge.practice {
  background: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.activity-badge.theory {
  background: rgba(33, 150, 243, 0.1);
  color: #1565c0;
}

.activity-badge.meditation {
  background: rgba(156, 39, 176, 0.1);
  color: #7b1fa2;
}

.activity-badge.break {
  background: rgba(255, 152, 0, 0.1);
  color: #e65100;
}

.activity-badge.study {
  background: rgba(96, 125, 139, 0.1);
  color: #37474f;
}

.activity-badge.rest {
  background: rgba(63, 81, 181, 0.1);
  color: #283593;
}

.footer {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.legend h4 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}

.legend-item:hover {
  transform: scale(1.05);
}

.legend-item.practice {
  background: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.legend-item.theory {
  background: rgba(33, 150, 243, 0.1);
  color: #1565c0;
}

.legend-item.meditation {
  background: rgba(156, 39, 176, 0.1);
  color: #7b1fa2;
}

.legend-item.break {
  background: rgba(255, 152, 0, 0.1);
  color: #e65100;
}

.legend-item.study {
  background: rgba(96, 125, 139, 0.1);
  color: #37474f;
}

.legend-item.rest {
  background: rgba(63, 81, 181, 0.1);
  color: #283593;
}

/* Responsive Design */
@media (max-width: 768px) {
  .schedule-container {
    padding: 15px;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
  }
  
  .time-slot {
    min-width: auto;
    width: 100%;
    justify-content: flex-start;
  }
  
  .activity-name {
    font-size: 1.1rem;
  }
  
  .legend-items {
    flex-direction: column;
    gap: 10px;
  }
  
  .legend-item {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .schedule-container {
    padding: 10px;
  }
  
  .header {
    padding: 20px 0;
    margin-bottom: 30px;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .schedule-item {
    padding: 15px;
  }
  
  .time-slot {
    gap: 10px;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .time {
    font-size: 1rem;
  }
  
  .activity-name {
    font-size: 1rem;
  }
  
  .footer {
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .schedule-grid {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
}
`;

// Inject styles into the head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const YogaSchedule = () => {
  const scheduleData = [
    { time: '7:00 am - 9:00 am', activity: 'Asana Pranayama Mudra Bandha (APMB)', type: 'practice' },
    { time: '9:30 am - 10:30 am', activity: 'Breakfast Break', type: 'break' },
    { time: '11:00 am - 1:00 pm', activity: 'Anatomy and Physiology / Philosophy and Ethics of Yoga', type: 'theory' },
    { time: '1:00 pm - 2:00 pm', activity: 'Lunch Break', type: 'break' },
    { time: '3:00 pm - 4:00 pm', activity: 'Teaching Methodology and Techniques', type: 'theory' },
    { time: '3:30 pm - 4:00 pm', activity: 'Tea Break', type: 'break' },
    { time: '4:30 pm - 5:30 pm', activity: 'Advanced Asana and Pranayama Techniques', type: 'practice' },
    { time: '5:30 pm - 6:30 pm', activity: 'Meditation / Relaxation', type: 'meditation' },
    { time: '7:00 pm - 8:00 pm', activity: 'Dinner', type: 'break' },
    { time: '8:00 pm - 9:00 pm', activity: 'Self-Study and Reflection', type: 'study' },
    { time: '10:00 pm', activity: 'Lights Out', type: 'rest' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'practice': return '🧘‍♀️';
      case 'theory': return '📚';
      case 'meditation': return '🕯️';
      case 'break': return '🍽️';
      case 'study': return '📝';
      case 'rest': return '🌙';
      default: return '⏰';
    }
  };

  return (
    <div className="schedule-container">
      <div className="header">
        <h1 className="title">Yoga Teacher Training Schedule</h1>
        <p className="subtitle">Daily Program Overview</p>
      </div>
      
      <div className="schedule-grid">
        {scheduleData.map((item, index) => (
          <div key={index} className={`schedule-item ${item.type}`}>
            <div className="time-slot">
              <span className="icon">{getActivityIcon(item.type)}</span>
              <span className="time">{item.time}</span>
            </div>
            <div className="activity">
              <h3 className="activity-name">{item.activity}</h3>
              <span className={`activity-badge ${item.type}`}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="footer">
        <div className="legend">
          <h4>Activity Types</h4>
          <div className="legend-items">
            <span className="legend-item practice">🧘‍♀️ Practice</span>
            <span className="legend-item theory">📚 Theory</span>
            <span className="legend-item meditation">🕯️ Meditation</span>
            <span className="legend-item break">🍽️ Break</span>
            <span className="legend-item study">📝 Study</span>
            <span className="legend-item rest">🌙 Rest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaSchedule;