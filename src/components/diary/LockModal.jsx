import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LockModal({ isOpen, onClose }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const { unlockDiary } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = unlockDiary(pin);
    if (success) {
      setError('');
      onClose();
    } else {
      setError('गलत पासवर्ड! (Incorrect Passcode)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#FAF6F0] border-2 border-gold rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl">✕</button>
        <div className="text-4xl mb-2">🔒</div>
        <h3 className="text-2xl font-bold text-maroon mb-1">Private Memories</h3>
        <p className="text-sm text-gray-600 mb-4">Wedding Diary खोलने के लिए PIN दर्ज करें</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="••••••"
            className="w-full text-center text-3xl tracking-[0.5em] py-2 border-2 border-gold/50 rounded-lg focus:outline-none focus:border-maroon"
          />
          {error && <p className="text-red-600 text-xs font-semibold">{error}</p>}
          <button
            type="submit"
            className="w-full bg-maroon text-white font-bold py-2.5 rounded-lg shadow-md hover:bg-maroon/90 transition"
          >
            Unlock Diary →
          </button>
        </form>
      </div>
    </div>
  );
}
