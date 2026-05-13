import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BookingStep1Data {
    categoryId: string;
}

export interface BookingStep2Data {
    tourId: string;
    tourName: string;
    date: string;
    travelersCount: number;
    pickupTime: string;
    language: string;
    fullName: string;
    email: string;
    phone: string;
    hotelName: string;
    hotelAddress: string;
    specialRequests: string;
    pricePerPerson: number;
}



// =============== STATE ===============

interface BookingState {
    step1: BookingStep1Data | null;
    step2: BookingStep2Data | null;
    settings: any | null;
    setStep1Data: (data: BookingStep1Data) => void;
    setStep2Data: (data: Partial<BookingStep2Data>) => void;
    setSettings: (settings: any) => void;
    clearStep1: () => void;
    clearStep2: () => void;
    resetAll: () => void;
}

// =============== STORE ===============

const STORE_VERSION = 1;

export const useBookingStore = create<BookingState>()(
    persist(
        (set) => ({
            step1: null,
            step2: null,
            settings: null,

            setStep1Data: (data) =>
                set({
                    step1: data,
                }),

            setStep2Data: (data) =>
                set((state) => ({
                    step2: { ...(state.step2 || {}), ...data } as BookingStep2Data,
                })),

            setSettings: (settings) =>
                set({
                    settings,
                }),

            clearStep1: () =>
                set({
                    step1: null,
                }),

            clearStep2: () =>
                set({
                    step2: null,
                }),

            resetAll: () =>
                set({
                    step1: null,
                    step2: null,
                    settings: null,
                }),
        }),
        {
            name: 'belgium-tour-booking-storage',
            version: STORE_VERSION,
            storage: createJSONStorage(() => localStorage),

            partialize: (state) => ({
                step1: state.step1,
                step2: state.step2,
                settings: state.settings,
            }),
        }
    )
);

// =============== SELECTORS ===============

import { useShallow } from 'zustand/react/shallow';

export const useIsStep1Ready = () =>
    useBookingStore((state) => Boolean(state.step1));

// =============== COMPUTED ===============

export const useBookingCalculations = () => {
    return useBookingStore(useShallow((state) => {
        const step2 = state.step2;
        if (!step2) return { subtotal: 0, total: 0, travelersCount: 0, pricePerPerson: 0 };

        const subtotal = (step2.pricePerPerson || 650) * (step2.travelersCount || 1);
        const total = subtotal;

        return {
            subtotal,
            total,
            travelersCount: step2.travelersCount,
            pricePerPerson: step2.pricePerPerson || 650
        };
    }));
};
