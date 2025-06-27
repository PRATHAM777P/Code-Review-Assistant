let editor;
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '# Write your Python code here\n',
        language: 'python',
        theme: 'vs-light',
        automaticLayout: true
    });
});

document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const code = editor.getValue();
    const language = document.getElementById('language').value;
    const customPrompt = document.getElementById('customPrompt').value;
    const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language, prompt: customPrompt })
    });
    const result = await response.json();
    document.getElementById('quality').innerHTML = '<b>✅ Quality:</b><br>' + result.quality.join('<br>');
    document.getElementById('security').innerHTML = '<b>⚠️ Security:</b><br>' + result.security.join('<br>');
    document.getElementById('suggestions').innerHTML = '<b>💡 Suggestions:</b><br>' + result.suggestions.join('<br>');
    if(result.custom_ai_response) {
        if(!document.getElementById('customAI')) {
            const customDiv = document.createElement('div');
            customDiv.id = 'customAI';
            document.getElementById('outputPanel').appendChild(customDiv);
        }
        document.getElementById('customAI').innerHTML = '<b>🤖 AI Response:</b><br>' + result.custom_ai_response;
    } else if(document.getElementById('customAI')) {
        document.getElementById('customAI').innerHTML = '';
    }
}); 