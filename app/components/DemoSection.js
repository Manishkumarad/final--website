"use client";
import React, { useState } from "react";

export default function DemoSection() {
  const [fileName, setFileName] = useState(null);

  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (f) setFileName(f.name);
  }

  return (
    <div className="container">
      <div className="demo card p-8">
        <h3 className="font-semibold mb-4">Interactive Demo</h3>
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="col-span-2">
            <p className="text-muted mb-4">Upload a sample document to preview extraction, classification, and routing logic.</p>
            <label className="btn btn-outline">
              Upload sample
              <input type="file" onChange={onFile} className="sr-only" />
            </label>
            {fileName && <div className="mt-3 text-sm text-muted">Selected file: {fileName}</div>}
          </div>

          <div className="col-span-1">
            <div className="mock-ui p-4 rounded-lg bg-black/30 h-28 flex flex-col items-start justify-center">
              <div className="text-sm text-muted">Processed output</div>
              <div className="mt-2 text-xs text-white/80">(fields, entities, routing)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
