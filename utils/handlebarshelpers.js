module.exports = { // This exports the helpers object
    format_time: (date) => { //
      return date.toLocaleTimeString();
    },
    format_date: (date) => { // This function will format the date
      return date.toLocaleDateString();
    },
    format_datetime: (date) => { // This function will format the date and time
        return date.toLocaleTimeString()+" on "+ date.toLocaleDateString(); // This will return the time and date
      }
  };