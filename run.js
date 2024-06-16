import {Root} from "./types";
import ical, {ICalCalendarMethod} from "ical-generator";
// @ts-ignore
import request from 'request';
import * as http from "node:http";

function queryData() {

  const url = 'https://match.uefa.com/v5/matches?competitionId=3&fromDate=2024-06-10&limit=100&offset=0&order=ASC&phase=ALL&seasonYear=2024&toDate=2024-09-20&utcOffset=8';


  request(url, {json: true}, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    const events = processData(body);
    console.log(events)
  });
}

let calendar = ical({name: 'UEFA 2024'});

function processData(data) {
  calendar = ical({name: 'UEFA 2024'});

  calendar.method(ICalCalendarMethod.REQUEST);

  const events = data.map((match) => {
    const startTime = new Date(match.kickOffTime.dateTime);
    let endTime = new Date(match.kickOffTime.dateTime);
    endTime.setHours(startTime.getHours() + 2);
    const result = {
      start: startTime,
      end: endTime,
      summary: `${match.homeTeam.translations.displayName.ZH} vs ${match.awayTeam.translations.displayName.ZH}`,
      description: `${match.group?.translations.name.ZH ?? ""}`,
    }
    if (match.score) {
      // if match is finished, add score
      result.summary += ` (${match.score.total.home} : ${match.score.total.away})`;
      result.end = new Date(match.fullTimeAt ?? "");
    }
    return result;
  })

  events.forEach((event) => {
    calendar.createEvent(event);
  })

  return events;
}

setInterval(() => {
  queryData();
}, 1000 * 60 * 10);

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': 'attachment; filename="calendar.ics"'
  });

  res.end(calendar.toString());
}).listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
