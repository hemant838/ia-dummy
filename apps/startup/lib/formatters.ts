import { format } from 'date-fns'; // Importing date-fns format function

import { APP_NAME } from '@workspace/common/app';

export function createTitle(title: string, addSuffix: boolean = true): string {
  if (!addSuffix) {
    return title;
  }
  if (!title) {
    return APP_NAME;
  }

  return `${title} | ${APP_NAME}`;
}

export function capitalize(str: string): string {
  if (!str) {
    return str;
  }

  if (str.length === 1) {
    return str.charAt(0).toUpperCase();
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getInitials(name: string): string {
  if (!name) {
    return '';
  }
  return name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');
}

export function getTimeSlot(hours: number, minutes: number): Date {
  const date = new Date(0);

  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);

  date.setHours(hours);
  date.setMinutes(minutes);

  return date;
}

export function formatDate(dateString: string): string {
  if (!dateString) {
    throw new Error('Invalid date string');
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  return format(date, 'M/d/yy'); // Formatting the date to "M/d/yy"
}

export function convertDateToISO(dateString: string) {
  const date = new Date(dateString);
  return date.toISOString();
}

export function convertISOToDateString(isoString: string) {
  const date = new Date(isoString);
  return date.toString();
}
