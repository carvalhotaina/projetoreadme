import type { READMEData } from '../types/readme';

export const generateMarkdown = (data: READMEData): string => {
  const { projectName, description, technologies, features, installSteps, usageInfo } = data;

  let markdown = `# ${projectName || 'Project Name'}\n\n`;
  
  if (description) {
    markdown += `${description}\n\n`;
  }

  if (technologies.length > 0) {
    markdown += `## 🚀 Technologies\n\n`;
    markdown += technologies.map(tech => `- ${tech}`).join('\n') + '\n\n';
  }

  if (features.length > 0) {
    markdown += `## ✨ Features\n\n`;
    markdown += features.map(feature => `- ${feature}`).join('\n') + '\n\n';
  }

  if (installSteps) {
    markdown += `## 🛠️ Installation\n\n\`\`\`bash\n${installSteps}\n\`\`\`\n\n`;
  }

  if (usageInfo) {
    markdown += `## 💡 Usage\n\n${usageInfo}\n\n`;
  }

  markdown += `---\n_Generated with README Generator_`;

  return markdown;
};
