import React, { useState } from 'react';
import { generateCreativeContent, generateVideoContent } from '../services/geminiService';
import { Loader2, Copy, CheckCheck, Wand2, Sparkles, Video, FileText, Hash, Play, Settings2 } from 'lucide-react';

type ToolType = 'script' | 'caption' | 'video';

const AiDemo: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolType>('script');
  
  // Text Gen State
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [textResult, setTextResult] = useState('');
  const [textLoading, setTextLoading] = useState(false);
  
  // Video Gen State
  const [videoPrompt, setVideoPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [apiKeySelected, setApiKeySelected] = useState(false);

  const [copied, setCopied] = useState(false);

  // Check for API key selection for Veo
  React.useEffect(() => {
    const checkKey = async () => {
      if ((window as any).aistudio && (window as any).aistudio.hasSelectedApiKey) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        setApiKeySelected(hasKey);
      }
    };
    checkKey();
  }, [activeTool]);

  const handleSelectKey = async () => {
    if ((window as any).aistudio && (window as any).aistudio.openSelectKey) {
      await (window as any).aistudio.openSelectKey();
      setApiKeySelected(true); // Optimistic update
    }
  };

  const handleGenerateText = async () => {
    if (!topic) return;
    setTextLoading(true);
    setTextResult('');
    
    // map tool to type param
    const typeParam = activeTool === 'script' ? 'script' : 'caption';
    
    const generatedText = await generateCreativeContent({
      topic,
      type: typeParam,
      tone
    });
    setTextResult(generatedText);
    setTextLoading(false);
  };

  const handleGenerateVideo = async () => {
    if (!videoPrompt) return;
    if (!apiKeySelected) {
        await handleSelectKey();
    }
    
    setVideoLoading(true);
    setVideoUrl(null);
    try {
        const url = await generateVideoContent(videoPrompt);
        setVideoUrl(url);
    } catch (e) {
        alert("Failed to generate video. Please try again or check your API key quota.");
    }
    setVideoLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-24 pb-24 px-6 relative min-h-screen">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-900/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AtNexora <span className="text-gradient">Studio</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Select a tool below to start creating content powered by Gemini and Veo.
            </p>
        </div>

        {/* Tool Selector Tabs */}
        <div className="flex justify-center mb-8">
            <div className="p-1 bg-white/5 rounded-xl flex flex-wrap justify-center gap-2 border border-white/10">
                <button 
                    onClick={() => setActiveTool('script')}
                    className={`px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all ${activeTool === 'script' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    <FileText className="w-4 h-4" /> Script Writer
                </button>
                <button 
                    onClick={() => setActiveTool('video')}
                    className={`px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all ${activeTool === 'video' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    <Video className="w-4 h-4" /> Video Generator
                </button>
                <button 
                    onClick={() => setActiveTool('caption')}
                    className={`px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all ${activeTool === 'caption' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                    <Hash className="w-4 h-4" /> Captioner
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Input Panel */}
            <div className="md:col-span-4 glass-card p-6 rounded-3xl border border-purple-500/20 h-full">
                <div className="flex items-center gap-2 mb-6 text-gray-300 border-b border-white/10 pb-4">
                    <Settings2 className="w-5 h-5" />
                    <span className="font-semibold">Configuration</span>
                </div>

                {activeTool === 'video' ? (
                     <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Video Prompt</label>
                            <textarea 
                                value={videoPrompt}
                                onChange={(e) => setVideoPrompt(e.target.value)}
                                placeholder="Describe the video you want to generate (e.g., A futuristic city with flying cars in cyberpunk style)"
                                className="w-full h-40 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none"
                            />
                        </div>
                        {!apiKeySelected && (
                            <div className="p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-xl text-sm text-yellow-200">
                                Note: Video generation requires selecting a paid project API key. 
                            </div>
                        )}
                        <button 
                            onClick={handleGenerateVideo}
                            disabled={videoLoading || !videoPrompt}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                        >
                            {videoLoading ? <Loader2 className="animate-spin" /> : <Video className="w-5 h-5" />}
                            {apiKeySelected ? 'Generate Video' : 'Select Key & Generate'}
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                {activeTool === 'script' ? 'Video Topic' : 'Post Topic'}
                            </label>
                            <input 
                                type="text" 
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="e.g., 5 Tips for better sleep"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Tone</label>
                            <select 
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                            >
                                <option>Professional</option>
                                <option>Casual & Friendly</option>
                                <option>Excited</option>
                                <option>Dramatic</option>
                                <option>Educational</option>
                            </select>
                        </div>

                        <button 
                            onClick={handleGenerateText}
                            disabled={textLoading || !topic}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                        >
                            {textLoading ? <Loader2 className="animate-spin" /> : <Wand2 className="w-5 h-5" />}
                            Generate {activeTool === 'script' ? 'Script' : 'Caption'}
                        </button>
                    </div>
                )}
            </div>

            {/* Output Panel */}
            <div className="md:col-span-8 glass-card p-1 rounded-3xl min-h-[600px] flex flex-col relative overflow-hidden bg-gradient-to-b from-white/5 to-black">
                <div className="absolute inset-0 bg-black/80 m-[1px] rounded-[22px] z-0"></div>
                
                <div className="relative z-10 flex-1 p-8 flex flex-col">
                    {activeTool === 'video' ? (
                        <div className="flex-1 flex flex-col items-center justify-center">
                            {videoLoading ? (
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                                    <p className="text-purple-300 animate-pulse">Generating video frame by frame...</p>
                                    <p className="text-xs text-gray-500">This can take up to a minute.</p>
                                </div>
                            ) : videoUrl ? (
                                <div className="w-full h-full flex flex-col">
                                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                        <CheckCheck className="text-green-500" /> Video Ready
                                    </h3>
                                    <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                                        <video 
                                            src={videoUrl} 
                                            controls 
                                            autoPlay 
                                            loop 
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <a 
                                        href={videoUrl} 
                                        download 
                                        className="mt-6 text-center text-sm text-gray-400 hover:text-white underline"
                                    >
                                        Download Video
                                    </a>
                                </div>
                            ) : (
                                <div className="text-center text-gray-600">
                                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
                                        <Play className="w-10 h-10 opacity-50 ml-1" />
                                    </div>
                                    <p className="text-lg font-medium text-gray-400">Video Preview</p>
                                    <p className="text-sm mt-2">Enter a prompt to generate a unique video.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                                <span className="text-gray-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-purple-500" /> Generated Output // {activeTool}
                                </span>
                                {textResult && (
                                    <button 
                                        onClick={copyToClipboard}
                                        className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 flex items-center gap-2 text-sm"
                                    >
                                        {copied ? <span className="text-green-500">Copied!</span> : 'Copy'} 
                                        {copied ? <CheckCheck className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                )}
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                {textLoading ? (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                                        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-sm animate-pulse">Writing content...</p>
                                    </div>
                                ) : textResult ? (
                                    <pre className="whitespace-pre-wrap font-sans text-gray-200 text-lg leading-relaxed">
                                        {textResult}
                                    </pre>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-600">
                                        <Wand2 className="w-12 h-12 mb-4 opacity-20" />
                                        <p>Your generated content will appear here.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AiDemo;