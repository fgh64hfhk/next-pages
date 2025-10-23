import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

// 封裝後的元件（JSX）
// 接受 props 來取代原本寫死的狀態與樣式，並且保留 slotProps 以便外部覆寫 dialog 樣式等
export default function DatePickerField({
  pickerKey = 0,
  value = null, // moment 或 null
  onChange = () => {}, // 回傳 moment 或 null
  label = "Date of Birth:",
  format = "DD/MM/YYYY",
  sx = {},
  slotProps = {},
  ...rest
}) {
  // 原本的 onChange 行為：把 value 轉成 YYYY-MM-DD 的 moment 或 null
  const handleChange = (val) => {
    const newDobString = val ? val.format("YYYY-MM-DD") : null;
    const out = newDobString ? moment(newDobString) : null;
    onChange(out);
  };

  // 預設樣式（來自你提供的樣式）
  const defaultSx = {
    "&": { background: "var(--bg-normal)" },
    "& .Mui-focused": { color: "var(--text-300) !important" },
    "& .MuiPickersOutlinedInput-notchedOutline": {
      border: "none",
      borderRadius: "0",
      borderBottom: "1px solid var(--text-100)",
    },
    "& fieldset": { border: "none !important" },
    "& ::selection": { background: "transparent" },
    "& .MuiPickersInputBase-root": {
      height: "56px",
      padding: "0px 16px",
      border: "1px solid var(--text-200)",
    },
    "& .MuiInputLabel-root": {
      top: "50%",
      left: "16px",
      transform: "translate(0px, -50%) scale(1)",
      fontSize: "16px",
      color: "var(--text-300)",
      position: "absolute",
    },
    "& .MuiPickersSectionList-root": {
      fontSize: "16px",
      color: "var(--text-primary) !important",
      paddingLeft: "100px",
    },
    "& .MuiButtonBase-root": { margin: "0px", padding: "0px 0px 0px 0px" },
    "& .MuiInputAdornment-root": { margin: "0px", padding: "0px 0px 0px 0px" },
    "& .MuiSvgIcon-root": { height: "20px" },
    "& svg": { fill: "var(--text-300)" },
  };

  // 預設的 slotProps（dialog）
  const defaultSlotProps = {
    dialog: {
      sx: {
        "& .MuiDialog-paper": {
          borderRadius: 4,
          background: "var(--bg-normal)",
          color: "var(--text-300)",
        },
        "& .MuiTypography-root": { color: "var(--text-300)" },
        "& .MuiPickersDay-root": { color: "var(--text-300)" },
        "& .MuiButtonBase-root": { color: "var(--text-300)" },
        "& .MuiPickersDay-root.Mui-selected": { background: "var(--text-100)" },
      },
    },
  };

  // 將外部傳入的 sx 與預設 sx 合併（淺合併，對一般覆寫已夠用）
  const mergedSx = { ...defaultSx, ...sx };
  // 將外部 slotProps 合併
  const mergedSlotProps = {
    dialog: {
      sx: {
        ...(defaultSlotProps.dialog?.sx || {}),
        ...(slotProps?.dialog?.sx || {}),
      },
      ...(slotProps?.dialog || {}),
    },
    ...slotProps,
  };

  return (
    <LocalizationProvider
      key={`datepicker-${pickerKey}`}
      dateAdapter={AdapterMoment}
    >
      <MobileDatePicker
        label={label}
        format={format}
        value={value}
        onChange={handleChange}
        sx={mergedSx}
        slotProps={mergedSlotProps}
        {...rest}
      />
    </LocalizationProvider>
  );
}

DatePickerField.propTypes = {
  pickerKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.any, // moment 或 null
  onChange: PropTypes.func,
  label: PropTypes.string,
  format: PropTypes.string,
  sx: PropTypes.object,
  slotProps: PropTypes.object,
};
