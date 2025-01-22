import { format, parseISO } from 'date-fns';
import { CalendarEvent, DateFilter } from '../types';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventListProps {
  events: CalendarEvent[];
  filter: DateFilter;
  onFilterChange: (filter: DateFilter) => void;
}

export default function EventList({ events, filter, onFilterChange }: EventListProps) {
  const filteredEvents = events.filter(event => {
    const eventDate = parseISO(event.start.dateTime);
    if (filter.startDate && eventDate < filter.startDate) return false;
    if (filter.endDate && eventDate > filter.endDate) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Filter Events</h2>
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={filter.startDate?.toISOString().split('T')[0] || ''}
              onChange={(e) => onFilterChange({
                ...filter,
                startDate: e.target.value ? new Date(e.target.value) : null
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={filter.endDate?.toISOString().split('T')[0] || ''}
              onChange={(e) => onFilterChange({
                ...filter,
                endDate: e.target.value ? new Date(e.target.value) : null
              })}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredEvents.map((event) => (
            <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">{event.summary}</h3>
                  {event.description && (
                    <p className="text-gray-500">{event.description}</p>
                  )}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {format(parseISO(event.start.dateTime), 'MMM d, yyyy')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {format(parseISO(event.start.dateTime), 'h:mm a')}
                    </div>
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              No events found for the selected date range
            </div>
          )}
        </div>
      </div>
    </div>
  );
}