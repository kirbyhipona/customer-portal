# TECH_NOTES.md

## What was built
- A minimal Customer Portal MVP
- Features:
  - Customer login using email & phone
  - List of bookings from ServiceM8 API
  - Booking detail page with attachments
  - Messaging system per booking
  - Logout and authentication flow

## Reasoning behind approach
- Next.js for frontend: fast page rendering, routing, and React hooks for state
- Express.js for backend: easy API routing and ServiceM8 integration
- Messages persisted using a JSON file for simplicity
- ServiceM8 integration demonstrates real API usage

## Assumptions made
- Authentication is simplified (no real SSO)
- Messages storage is mocked via JSON file
- Only basic error handling implemented due to time constraints

## Potential improvements
- Implement real database for persistence
- Use JWT for secure authentication
- Add better UI/UX design
- Implement pagination for bookings
- Add more detailed ServiceM8 integration

## How AI assisted workflow
- AI helped in generating frontend and backend boilerplate
- Suggested better UI for bookings & messages
- Assisted in TypeScript typing and Next.js routing
- Helped in organizing project structure efficiently
