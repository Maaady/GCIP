import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import EventList from './components/EventList';
import { CalendarEvent, DateFilter } from './types';
import { LogOut } from 'lucide-react';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [filter, setFilter] = useState<DateFilter>({
    startDate: null,
    endDate: null
  });

  const handleLoginSuccess = async (credentialResponse: any) => {
    console.log('Login Success:', credentialResponse);
    setIsAuthenticated(true);
    setEvents([
      {
        id: '1',
        summary: 'Team Meeting',
        description: 'Weekly sync with the development team',
        start: {
          dateTime: new Date().toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        end: {
          dateTime: new Date(Date.now() + 3600000).toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        location: 'Conference Room A'
      },
      {
        id: '2',
        summary: 'Project Review',
        description: 'Monthly project status review',
        start: {
          dateTime: new Date(Date.now() + 86400000).toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        end: {
          dateTime: new Date(Date.now() + 90000000).toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        location: 'Virtual Meeting'
      }
    ]);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEvents([]);
  };

  if (!isAuthenticated) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Login onSuccess={handleLoginSuccess} />
        <Toaster position="top-right" />
      </GoogleOAuthProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Calendar Dashboard</h1>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EventList
          events={events}
          filter={filter}
          onFilterChange={setFilter}
        />
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;