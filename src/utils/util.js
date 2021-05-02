export const ViewsFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

export const timeFormatter = (seconds) => {
  if (seconds > 0 && seconds < 60) return `${seconds} seconds`;
  else if (seconds > 60 && seconds < 3600) {
    const min = parseInt(seconds / 60);
    return `${min} minutes`;
  } else if (seconds > 3600 && seconds < 86400) {
    const hour = parseInt(seconds / (60 * 60));
    return `${hour} hours`;
  } else if (seconds > 86400 && seconds < 604800) {
    const day = parseInt(seconds / (60 * 60 * 24));
    return `${day} days`;
  } else if (seconds > 604800 && seconds < 2628000) {
    const week = parseInt(seconds / (60 * 60 * 24 * 7));
    return `${week} weeks`;
  } else if (seconds > 2628000 && seconds < 31536000) {
    const month = parseInt(seconds / (60 * 60 * 24 * 30));
    return `${month} months`;
  } else if (seconds > 31536000 && seconds < 1576800016) {
    const year = parseInt(seconds / (60 * 60 * 24 * 365));
    return `${year} years`;
  }
};
