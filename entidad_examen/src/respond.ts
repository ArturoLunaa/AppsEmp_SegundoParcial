import { Response } from 'express';

export default function respond(
  res: Response,
  statusCode: number,
  body?: unknown
): void {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
  });

  if (body) {
    res.end(JSON.stringify(body));
  } else {
    res.end();
  }
}
