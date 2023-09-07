import { LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="w-10 h-10 rounded-full"
        src="https://github.com/Victor-Ross.png"
        alt=""
      />
      <div className="flex-1 flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Victor Ross</span>
        <span className="truncate text-sm text-zinc-500">
          victor2ross@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  );
}
