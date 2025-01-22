# Calendar Dashboard

A modern web application that integrates with Google Calendar to help users manage and view their calendar events efficiently.

![Calendar Dashboard](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000)

## Features

- 🔐 Secure Google OAuth2 authentication
- 📅 View and filter calendar events
- 📍 Event location and time zone support
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Built with Vite and React for optimal performance

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Authentication**: Google OAuth 2.0
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Notifications**: react-hot-toast

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Cloud Console project with Calendar API enabled
- Google OAuth 2.0 client credentials

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_URL=your_supabase_url
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── EventList.tsx  # Calendar events display
│   └── Login.tsx      # Authentication component
├── types.ts           # TypeScript interfaces
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Features in Detail

### Authentication
- Secure Google OAuth 2.0 integration
- Persistent login state
- Error handling with toast notifications

### Event Management
- View events in a clean, organized list
- Filter events by date range
- Display event details including location and time
- Timezone support for international events

### User Interface
- Responsive design that works on all devices
- Clean and modern UI with Tailwind CSS
- Intuitive navigation and event filtering
- Loading states and error handling
- Toast notifications for user feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Calendar API](https://developers.google.com/calendar)
- [Lucide Icons](https://lucide.dev/)