const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * getDaysInMonth takes a year and a month as arguments, and 
 * returns the number of days in the specified month of the specified year
 */

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
// Only edit below

const createData = () => {

  const {year ,month} = {
    year:new Date().getFullYear(),
    month: new Date().getMonth(),
  }
  const daysInMonth = getDaysInMonth(year, month);

  //Empty array to hold the weeks of the calendar
  const weeks = [];
  let week = [];

  const firstDay = new Date(year, month, 1).getDay();

  // startWeek for starting week from Saturday
  let startWeek = firstDay < 6 ? firstDay + 1 : 6;

  for (let i = 0; i < startWeek; i++) {
    week.push(null); // filled in empty cells for days before the first day of the month
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day); // Used a for loop to add each day of the month to the week array
    if (week.length === 7) {
      // if week array has 7 days, push it to weeks array and start a new week
      weeks.push(week);
      week = [];
    }
  }
  // Push the last week to weeks array
  if (week.length > 0) {
    weeks.push(week);
  }
  return weeks;
};

const addCell = (day, isToday) => {
  const cell = document.createElement('td');
  cell.classList.add('table__cell');
  
  if (day !== null) { //This is to check if day is not null
    cell.innerText = day;
    if (isToday) {// Check if isToday is true
      cell.classList.add('table__cell_today');
    }
  }
  return cell;
};

const createHtml = () => {
  const content = document.querySelector('[data-content]');
  const weeks = createData();

  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];
    const row = document.createElement('tr');

    // Create and append the week number cell
    const weekNumber = document.createElement('td');
    weekNumber.classList.add('table__cell_week');
    weekNumber.innerText = `Week ${i + 1}`;
    row.appendChild(weekNumber);

    for (let i = 0; i < week.length; i++) {
      const day = week[i];
      const isToday = day === new Date().getDate() && new Date().getMonth() === new Date().getMonth();
      row.appendChild(addCell(day, isToday));
    }
    content.appendChild(row);
  }
}
// Only edit above
const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
createHtml();
