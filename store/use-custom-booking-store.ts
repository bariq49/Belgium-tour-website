import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CustomBookingStep1Data {
    tour: any;
}

export interface CustomBookingStep2Data {
    date: string;
    durationNights: string;
    adultsCount: number;
    adultAges: string[];
}

export interface CustomBookingStep3Data {
    specialRequests: string;
}

export interface CustomBookingStep4Data {
    budgetPerPerson: number;
    budgetFlexibility: string;
}

export interface CustomBookingStep5Data {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

// =============== STATE ===============

interface CustomBookingState {
    step1: CustomBookingStep1Data | null;
    step2: CustomBookingStep2Data | null;
    step3: CustomBookingStep3Data | null;
    step4: CustomBookingStep4Data | null;
    step5: CustomBookingStep5Data | null;

    setStep1Data: (data: CustomBookingStep1Data) => void;
    setStep2Data: (data: CustomBookingStep2Data) => void;
    setStep3Data: (data: CustomBookingStep3Data) => void;
    setStep4Data: (data: CustomBookingStep4Data) => void;
    setStep5Data: (data: CustomBookingStep5Data) => void;

    clearStep1: () => void;
    clearStep2: () => void;
    clearStep3: () => void;
    clearStep4: () => void;
    clearStep5: () => void;

    resetAll: () => void;
}

// =============== STORE ===============

const STORE_VERSION = 1;

export const useCustomBookingStore = create<CustomBookingState>()(
    persist(
        (set) => ({
            step1: null,
            step2: null,
            step3: null,
            step4: null,
            step5: null,

            setStep1Data: (data) => set({ step1: data }),
            setStep2Data: (data) => set({ step2: data }),
            setStep3Data: (data) => set({ step3: data }),
            setStep4Data: (data) => set({ step4: data }),
            setStep5Data: (data) => set({ step5: data }),

            clearStep1: () => set({ step1: null }),
            clearStep2: () => set({ step2: null }),
            clearStep3: () => set({ step3: null }),
            clearStep4: () => set({ step4: null }),
            clearStep5: () => set({ step5: null }),

            resetAll: () =>
                set({
                    step1: null,
                    step2: null,
                    step3: null,
                    step4: null,
                    step5: null,
                }),
        }),
        {
            name: 'belgium-tour-custom-booking-storage',
            version: STORE_VERSION,
            storage: createJSONStorage(() => localStorage),

            partialize: (state) => ({
                step1: state.step1,
                step2: state.step2,
                step3: state.step3,
                step4: state.step4,
                step5: state.step5,
            }),
        }
    )
);
