import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek, addDays, isSameDay, isToday } from 'date-fns';


const DatePicker = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const renderHeader = () => {
      return (
        <div className="month-year">  
          <div>{format(currentMonth, 'MMMM yyyy')}</div>
        </div>
      );
    };
  
    const renderDays = () => {
      const days = [];
      const date = startOfWeek(currentMonth);
  
      for (let i = 0; i < 7; i++) {
        const day = addDays(date, i);
        days.push(
          <div
            className={`day-name ${isToday(day) ? 'today' : ''}`}
            key={i}
          >
            {format(day, 'E')[0]}
          </div>
        );
      }
  
      return <div className="days-container">{days}</div>;
    };
  
    const renderCells = () => {
      const monthStart = startOfWeek(currentMonth);
      const monthEnd = endOfWeek(currentMonth);
      const rows = [];
      let days = [];
      let day = monthStart;
      let formattedDate = '';
  
      while (day <= monthEnd) {
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, 'd');
          const cloneDay = day;
          days.push(
            <div
              className={`day ${isSameDay(day, selectedDate) ? 'selected' : ''} ${isToday(day) ? 'today' : ''}`}
              key={day}
              onClick={() => onDateClick(cloneDay)}
            >
              {formattedDate}
            </div>
          );
          day = addDays(day, 1);
        }
        rows.push(
          <div className="dates-container" key={day}>{days}</div>
        );
        days = [];
      }
  
      return <div>{rows}</div>;
    };
  
    const onDateClick = (day) => {
      setSelectedDate(day);
    };
  
    // const nextMonth = () => {
    //   setCurrentMonth(addMonths(currentMonth, 1));
    // };
  
    // const prevMonth = () => {
    //   setCurrentMonth(subMonths(currentMonth, 1));
    // };
  
    return (
      <div className="calendar-container">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    );
};

export default DatePicker