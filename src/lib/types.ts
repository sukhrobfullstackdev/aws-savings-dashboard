export type Overview = {
    totalSavings: number;
    currentMonthSavings: number;
    percentageChange: number;
};

export type SavingsTrend = {
    month: string;
    savings: number;
};

export type SavingsByCategory = {
    service: string;
    savings: number;
};

export type DetailedSaving = {
    date: string;
    service: string;
    amount: number;
};

export type AWSData = {
    overview: Overview;
    savingsTrends: SavingsTrend[];
    savingsByCategory: SavingsByCategory[];
    detailedSavings: DetailedSaving[];
};
