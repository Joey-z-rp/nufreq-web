export type Frequency = {
  [k: string]: number;
};

export type GetFrequencyResponse = {
  frequency: Frequency;
};

export type SetNumberResponse = {
  isFib: boolean;
  sessionId: string;
};
