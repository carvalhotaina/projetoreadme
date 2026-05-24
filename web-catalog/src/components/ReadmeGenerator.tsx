import { useState, useEffect } from 'react';
import { Copy, Trash2, Plus, Check, Monitor, Layout, Rocket, Settings, Code } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLocalStorage } from '../hooks/use-local-storage';
import { INITIAL_STATE } from '../types/readme';
import type { READMEData } from '../types/readme';
import { generateMarkdown } from '../utils/markdown-generator';

const ReadmeGenerator = () => {
  const [data, setData] = useLocalStorage<READMEData>('readme-data', INITIAL_STATE);
  const [markdown, setMarkdown] = useState('');
  const [copied, setCopied] = useState(false);
  const [newTech, setNewTech] = useState('');
  const [newFeature, setNewFeature] = useState('');

  useEffect(() => {
    setMarkdown(generateMarkdown(data));
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const addTech = () => {
    if (newTech.trim()) {
      setData({ ...data, technologies: [...data.technologies, newTech.trim()] });
      setNewTech('');
    }
  };

  const removeTech = (index: number) => {
    const newTechs = data.technologies.filter((_, i) => i !== index);
    setData({ ...data, technologies: newTechs });
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setData({ ...data, features: [...data.features, newFeature.trim()] });
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    const newFeatures = data.features.filter((_, i) => i !== index);
    setData({ ...data, features: newFeatures });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    if (confirm('Are you sure you want to reset the form? All progress will be lost.')) {
      setData(INITIAL_STATE);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0D1117] text-[#E6EDF3] font-sans">
      {/* Left Panel: Form */}
      <div className="w-full md:w-2/5 p-6 overflow-y-auto border-r border-[#30363D] bg-[#161B22]">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Layout className="text-[#2FB5F7]" />
            <h1 className="text-xl font-bold tracking-tight">README Gen</h1>
          </div>
          <button 
            onClick={resetForm}
            className="text-xs text-[#8B949E] hover:text-red-400 flex items-center gap-1 transition-colors"
          >
            <Trash2 size={14} /> Reset
          </button>
        </header>

        <div className="space-y-6">
          {/* Project Identity */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#8B949E] uppercase tracking-wider flex items-center gap-2">
              <Monitor size={16} /> Identity
            </h2>
            <div>
              <label className="block text-xs mb-1 text-[#8B949E]">Project Name</label>
              <input 
                type="text"
                name="projectName"
                value={data.projectName}
                onChange={handleInputChange}
                placeholder="My Awesome Project"
                className="w-full bg-[#0D1117] border border-[#30363D] rounded-md p-2.5 focus:border-[#2FB5F7] focus:ring-1 focus:ring-[#2FB5F7] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-[#8B949E]">Description</label>
              <textarea 
                name="description"
                value={data.description}
                onChange={handleInputChange}
                placeholder="Briefly describe what this project does..."
                rows={3}
                className="w-full bg-[#0D1117] border border-[#30363D] rounded-md p-2.5 focus:border-[#2FB5F7] focus:ring-1 focus:ring-[#2FB5F7] outline-none transition-all resize-none"
              />
            </div>
          </section>

          {/* Technologies */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#8B949E] uppercase tracking-wider flex items-center gap-2">
              <Rocket size={16} /> Technologies
            </h2>
            <div className="flex gap-2">
              <input 
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTech()}
                placeholder="Add tech (e.g. React)"
                className="flex-1 bg-[#0D1117] border border-[#30363D] rounded-md p-2 focus:border-[#2FB5F7] outline-none"
              />
              <button onClick={addTech} className="bg-[#30363D] hover:bg-[#3c444d] p-2 rounded-md transition-colors">
                <Plus size={20} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech, i) => (
                <span key={i} className="bg-[#30363D] text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 group">
                  {tech}
                  <button onClick={() => removeTech(i)} className="text-[#8B949E] hover:text-red-400">
                    <Trash2 size={12} />
                  </button>
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#8B949E] uppercase tracking-wider flex items-center gap-2">
              <Settings size={16} /> Features
            </h2>
            <div className="flex gap-2">
              <input 
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                placeholder="Add feature..."
                className="flex-1 bg-[#0D1117] border border-[#30363D] rounded-md p-2 focus:border-[#2FB5F7] outline-none"
              />
              <button onClick={addFeature} className="bg-[#30363D] hover:bg-[#3c444d] p-2 rounded-md transition-colors">
                <Plus size={20} />
              </button>
            </div>
            <ul className="space-y-2">
              {data.features.map((feature, i) => (
                <li key={i} className="text-sm flex items-center justify-between p-2 bg-[#0D1117] border border-[#30363D] rounded-md">
                  <span>{feature}</span>
                  <button onClick={() => removeFeature(i)} className="text-[#8B949E] hover:text-red-400">
                    <Trash2 size={14} />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Details */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#8B949E] uppercase tracking-wider flex items-center gap-2">
              <Code size={16} /> Installation & Usage
            </h2>
            <div>
              <label className="block text-xs mb-1 text-[#8B949E]">Install Steps (Bash)</label>
              <textarea 
                name="installSteps"
                value={data.installSteps}
                onChange={handleInputChange}
                placeholder="npm install && npm start"
                className="w-full bg-[#0D1117] border border-[#30363D] rounded-md p-2.5 font-mono text-sm focus:border-[#2FB5F7] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-[#8B949E]">Usage Info</label>
              <textarea 
                name="usageInfo"
                value={data.usageInfo}
                onChange={handleInputChange}
                placeholder="How to use this project..."
                className="w-full bg-[#0D1117] border border-[#30363D] rounded-md p-2.5 focus:border-[#2FB5F7] outline-none"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div className="w-full md:w-3/5 p-8 overflow-y-auto bg-[#0D1117] relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#0D1117] py-2 z-10">
            <h2 className="text-sm font-medium text-[#8B949E]">README.md Preview</h2>
            <button 
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                copied ? 'bg-[#238636] text-white' : 'bg-[#2FB5F7] text-[#0D1117] hover:opacity-90'
              }`}
            >
              {copied ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy Markdown</>}
            </button>
          </div>

          <article className="prose prose-invert prose-blue max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ReadmeGenerator;
