import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [systems, setSystems] = useState<string[]>([]);
  const [response, setResponse] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSystemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSystems(prev =>
      prev.includes(value)
        ? prev.filter(s => s !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("systems", systems.join(","));

    const res = await fetch("http://localhost:8000/deploy", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    setResponse(json);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Deployment Configurator</h1>
      <input type="file" accept="application/json" onChange={handleFileChange} /><br /><br />
      <label><input type="checkbox" value="PLM" onChange={handleSystemChange}/> PLM</label><br />
      <label><input type="checkbox" value="MES" onChange={handleSystemChange}/> MES</label><br />
      <label><input type="checkbox" value="ERP" onChange={handleSystemChange}/> ERP</label><br /><br />
      <button onClick={handleSubmit}>Deploy</button>
      <pre>{response && JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
