import React from "react";

export const Skeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-auto overflow-hidden p-10 space-y-2">
      <div className="rounded-full bg-slate-200 w-24 h-24 mx-auto mt-4" />
      <div className="animate-pulse space-y-4">
        <div className="flex-1 space-y-1 py-1">
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded" />
        </div>
        <div className="flex-1 space-y-1 py-1">
          <div className="grid grid-cols-4 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2" />
            <div className="h-2 bg-slate-200 rounded col-span-2" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2" />
            <div className="h-2 bg-slate-200 rounded col-span-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
