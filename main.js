/**
 * Calendar availability
 * 
 * Problem 
 * 
 * - We need to get the available spots of availability between two calendars
 * 
 * eg:
 * 
 * input:
 *  calendarA: [ ['9:00', '10:30'], ['12:00', '13:00'], [ '16:00', '18:00' ] ]
 *  dailyBoundA: ['9:00', '20:00' ]
 * 
 *  calendarB: [ ['10:00', '11:30'], ['12:30', '14:30'], [ '16:00', '17:00' ] ]
 *  dailyBoundB: ['10:00', '18:30' ]
 * 
 *  meetingDuration: 30 minutes
 * 
 * output:
 * [ ['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:00'] ] 
 */

