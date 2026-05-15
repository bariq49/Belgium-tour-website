"use client";

import React, { ReactNode } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useFormContext, ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DEFAULT_PHONE_COUNTRY } from "@/constants/app-default";
import { cn } from "@/lib/utils";
import { Checkbox } from "./checkbox";
import DatePickerV2 from "./date/date-picker";
import TimePickerV2 from "./time/time-picker";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Counter } from "./counter";
import { useGoogleAutocomplete } from "@/hooks/use-google-autocomplete";
import { ImageUpload } from "@/components/upload/image-upload";

type InputType =
    | "text"
    | "email"
    | "number"
    | "tel"
    | "password"
    | "location"
    | "textarea"
    | "counter"
    | "checkbox"
    | "toggle"
    | "phone"
    | "date"
    | "time"
    | "select"
    | "upload"

export interface SelectOption {
    label: ReactNode;
    value: string | number;
}

interface InputProps {
    name: string;
    type?: InputType;
    placeholder?: string;
    label?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    rows?: number;
    min?: number;
    max?: number;
    step?: number;
    icon?: ReactNode;
    onRemove?: () => void;
    selectOptions?: SelectOption[];
    selectPlaceholder?: string;
    selectValueAsNumber?: boolean;
    maxLength?: number;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    digitsOnly?: boolean;
    inputClassName?: string;
    minSelectableDate?: Date | null;
    excludeDate?: Date | null;
    timezone?: string;
    error?: boolean;
}

export const Input: React.FC<InputProps> = ({
    name,
    type = "text",
    placeholder,
    label,
    disabled = false,
    required = false,
    className,
    rows = 6,
    min,
    max,
    step = 1,
    icon,
    onRemove,
    selectOptions = [],
    selectPlaceholder,
    selectValueAsNumber = false,
    maxLength,
    inputMode,
    digitsOnly = false,
    inputClassName,
    minSelectableDate,
    excludeDate,
    timezone,
    error,
}) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = React.useState(false);
    const fieldRadiusClass = "rounded-sm";

    const inputBase = cn(
        "w-full border border-border text-foreground text-sm md:text-base placeholder:text-sm md:placeholder:text-base appearance-none focus:outline-none focus:ring-0 focus-visible:outline-none transition-all h-[46px] rounded-sm",
        fieldRadiusClass,
        icon ? "pl-10 pr-4" : "px-4"
    );
    const inputError = (error: boolean) => error ? "border-error bg-error/5" : "";

    const LocationInput = ({ field, error }: { field: ControllerRenderProps<FieldValues, string>, error: boolean }) => {
        const inputRef = React.useRef<HTMLInputElement>(null);

        useGoogleAutocomplete({
            inputRef,
            onPlaceSelected: (place) => {
                field.onChange(place.formatted_address || place.name);
            },
        });

        return (
            <div className={cn("relative", inputClassName?.includes("h-full") && "h-full")}>
                <input
                    {...field}
                    ref={inputRef}
                    value={field.value ?? ""}
                    type="text"
                    placeholder={placeholder}
                    disabled={disabled}
                    className={cn(inputBase, inputError(error), inputClassName)}
                />
            </div>
        );
    };

    const renderInput = (
        field: ControllerRenderProps<FieldValues, string>,
        error: boolean
    ) => {
        switch (type) {

            case "location":
                return <LocationInput field={field} error={error} />;

            case "textarea":
                return (
                    <textarea
                        {...field}
                        value={field.value ?? ""}
                        rows={rows}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={cn(inputBase, "h-auto py-4 resize-none", icon && "pl-11", inputError(error))}
                    />
                );

            case "phone":
                return (
                    <ReactPhoneInput
                        country={DEFAULT_PHONE_COUNTRY}
                        value={field.value || ""}
                        onChange={(phone) => field.onChange(phone)}
                        containerClass="!w-full phone-input-container"
                        inputClass={cn(
                            "!w-full !h-[46px] !pl-12 !pr-4 !border !bg-white !text-black !rounded-sm",
                            error ? "!border-error !bg-error/5" : "!border-border"
                        )}
                        buttonClass={cn(
                            "!border !border-r !bg-white !rounded-l-sm",
                            error ? "!border-error !border-r-error !bg-error/5" : "!border-border !border-r-border"
                        )}
                    />
                );

            case "counter":
                return (
                    <Counter
                        value={Number(field.value)}
                        onChange={field.onChange}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        className={cn(inputError(error), inputClassName)}
                    />
                );

            case "checkbox":
                return (
                    <Checkbox
                        checked={!!field.value}
                        onCheckedChange={field.onChange}
                        disabled={disabled}
                        className={cn(
                            "h-5 w-5 transition-all",
                            error && !field.value && "border-error bg-error/5"
                        )}
                    />
                );

            case "toggle":
                return (
                    <Switch
                        checked={!!field.value}
                        onCheckedChange={field.onChange}
                        disabled={disabled}
                    />
                );

            case "date":
                return (
                    <DatePickerV2
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        error={error}
                        minSelectableDate={minSelectableDate}
                        excludeDate={excludeDate}
                        timezone={timezone}
                        className={inputClassName}
                    />
                );

            case "time":
                return (
                    <TimePickerV2
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        error={error}
                        timezone={timezone}
                        className={inputClassName}
                    />
                );

            case "select":
                return (
                    <Select
                        value={String(field.value ?? "")}
                        onValueChange={(value) =>
                            field.onChange(selectValueAsNumber ? Number(value) : value)
                        }
                        disabled={disabled}
                    >
                        <SelectTrigger
                            className={cn(
                                "w-full h-[52px] border shadow-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent transition-all",
                                fieldRadiusClass,
                                "text-sm md:text-base bg-white text-foreground",
                                (!field.value && field.value !== 0) ? "text-gray-400 font-normal" : "text-foreground",
                                icon ? "pl-10 pr-4" : "px-4",
                                inputError(error),
                                inputClassName
                            )}
                        >
                            <SelectValue placeholder={placeholder || "Select an option"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border border-border shadow-md">
                            {selectOptions.map((option) => (
                                <SelectItem key={String(option.value)} value={String(option.value)}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );

            case "upload":
                return (
                    <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        onRemove={() => field.onChange("")}
                        label={placeholder || "Upload File"}
                        error={error}
                        className={inputClassName}
                    />
                );

            default:
                const isPasswordField = type === "password";
                const resolvedType = isPasswordField
                    ? showPassword
                        ? "text"
                        : "password"
                    : type;

                return (
                    <div className="relative">
                        <input
                            {...field}
                            value={field.value ?? ""}
                            type={resolvedType}
                            placeholder={placeholder}
                            disabled={disabled}
                            min={min}
                            max={max}
                            step={step}
                            maxLength={maxLength}
                            inputMode={inputMode}
                            onChange={(event) => {
                                let nextValue = event.target.value;
                                if (digitsOnly) {
                                    nextValue = nextValue.replace(/\D/g, "");
                                }
                                if (typeof maxLength === "number") {
                                    nextValue = nextValue.slice(0, maxLength);
                                }
                                field.onChange(nextValue);
                            }}
                            className={cn(
                                inputBase,
                                isPasswordField && "pr-10",
                                inputError(error),
                                inputClassName
                            )}
                        />
                        {isPasswordField && (
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        )}
                    </div>
                );
        }
    };

    return (
        <FormField
            control={control}
            name={name}
            rules={required ? { required: "This field is required" } : undefined}
            render={({ field, fieldState }) => {
                const hasError = error || !!fieldState.error;

                if (type === "toggle") {
                    return (
                        <FormItem className={cn("flex flex-col", className)}>
                            <div className={cn("flex items-center justify-between gap-3 border border-border bg-background p-3", fieldRadiusClass)}>
                                <FormLabel className={hasError ? "text-error" : undefined}>
                                    {label}
                                    {required && <span className="text-error ml-1">*</span>}
                                </FormLabel>
                                <FormControl>
                                    {renderInput(field, hasError)}
                                </FormControl>
                            </div>
                        </FormItem>
                    );
                }

                if (type === "checkbox") {
                    return (
                        <FormItem className={cn("flex flex-row items-center space-x-2 space-y-0", className)}>
                            <FormControl>
                                {renderInput(field, hasError)}
                            </FormControl>
                            {label && (
                                <FormLabel className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer", hasError ? "text-error" : "text-gray-700")}>
                                    {label}
                                    {required && <span className="text-error ml-1">*</span>}
                                </FormLabel>
                            )}
                        </FormItem>
                    );
                }

                return (
                    <FormItem className={cn("flex flex-col", className)}>
                        {label && (
                            <FormLabel className={cn("text-sm font-semibold text-gray-700", hasError ? "text-error" : undefined)}>
                                {label}
                                {required && <span className="text-error ml-1">*</span>}
                            </FormLabel>
                        )}
                        <div className={cn("relative", className?.includes("h-full") && "h-full")}>
                            {icon && type !== "date" && type !== "time" && type !== "counter" && (
                                <span className={cn(
                                    "absolute left-3 text-gray-400 z-10 pointer-events-none",
                                    type === "textarea" ? "top-[18px]" : "top-1/2 -translate-y-1/2"
                                )}>
                                    {icon}
                                </span>
                            )}
                            <FormControl className={cn(className?.includes("h-full") && "h-full")}>
                                {renderInput(field, hasError)}
                            </FormControl>

                            {onRemove && (
                                <button
                                    type="button"
                                    onClick={onRemove}
                                    className="absolute -top-2 -right-2 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center"
                                >
                                    <X size={12} />
                                </button>
                            )}
                        </div>

                        {/* <FormMessage /> */}
                    </FormItem>
                );
            }}
        />
    );
};