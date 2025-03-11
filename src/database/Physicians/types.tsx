export type PhysicianType = {
  id: string;
  name: string;
  medical_specialties: string[];
  technical_skills: string[];
  years_of_experience: {
    [key: string]: number;
  };
  research_interests: string[];
};
