import { Calendar } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

interface LoginProps {
  onSuccess: (credentialResponse: any) => void;
}

export default function Login({ onSuccess }: LoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
            <Calendar className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar Dashboard</h1>
          <p className="text-gray-500">Access and manage your Google Calendar events in one place</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={onSuccess}
              onError={() => {
                toast.error('Login Failed');
              }}
            />
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>By continuing, you agree to our</p>
            <div className="space-x-1">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a>
              <span>and</span>
              <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}