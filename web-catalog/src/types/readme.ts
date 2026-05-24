export interface READMEData {
  projectName: string;
  description: string;
  technologies: string[];
  features: string[];
  installSteps: string;
  usageInfo: string;
}

export const INITIAL_STATE: READMEData = {
  projectName: '',
  description: '',
  technologies: [],
  features: [],
  installSteps: '',
  usageInfo: '',
};
