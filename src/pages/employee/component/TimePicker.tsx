import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    components: {
        MuiMultiSectionDigitalClock: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                },
            },
        },
    },
});
export default function DigitalClockBasic() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["MultiSectionDigitalClock"]}>
                <DemoItem>
                    <ThemeProvider theme={theme}>
                        <MultiSectionDigitalClock
                            views={["hours", "minutes", "seconds"]}
                            ampm={false}
                            timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
                        />
                    </ThemeProvider>
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
